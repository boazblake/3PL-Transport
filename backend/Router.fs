module Router

open Saturn
open Giraffe
open Microsoft.AspNetCore.Http
open System.IO
open System.Text.Json
open System.Net.Http
open System.Threading.Tasks

type SearchHistory = {
    location: string
    lat: float
    lng: float
    timestamp: string
}

type Airport = {
    airportId: string
    name: string
    city: string
    country: string
    icao: string
    lat: string
    lng: string
    alt: string
    timezone: string
    dst: string
    tz: string
    ``type``: string
    source: string
}

type Route = {
    airline: string
    airlineId: string
    srcIata: string
    srcAirportId: string
    dstIata: string
    dstAirportId: string
    codeshare: string
    stops: string
    equipment: string
    srcAirport: Airport
    dstAirport: Airport
}

// In-memory storage
let mutable searchHistory: SearchHistory list = []
let mutable routes: Route list = []
let mutable availableRoutes: Route list = [] // Changed OpenGlobusRoute to Route

// Fetch available routes from OpenGlobus
let fetchAvailableRoutes() =
    task {
        try
            use client = new HttpClient()
            let! response = client.GetStringAsync("https://sandbox.openglobus.org/examples/polylinesColorAnimation/routes.json")
            printfn "Raw JSON response: %s" response // Log the raw JSON
            let options = JsonSerializerOptions()
            options.PropertyNameCaseInsensitive <- true
            let fetchedRoutes = JsonSerializer.Deserialize<Route list>(response, options)
            availableRoutes <- fetchedRoutes
            printfn "Fetched %d available routes from OpenGlobus" (List.length fetchedRoutes)
        with ex ->
            printfn "Error fetching available routes: %s" ex.Message
    }

// Load saved routes from JSON file
let loadRoutesFromFile (filePath: string) =
    try
        if File.Exists(filePath) then
            let json = File.ReadAllText(filePath)
            let options = JsonSerializerOptions()
            options.PropertyNameCaseInsensitive <- true
            let loadedRoutes = JsonSerializer.Deserialize<Route list>(json, options)
            routes <- loadedRoutes
            printfn "Loaded %d saved routes from %s" (List.length loadedRoutes) filePath
        else
            printfn "Routes file not found at: %s" filePath
    with ex ->
        printfn "Error loading routes: %s" ex.Message

// Initialize data on module load
let initializeData() =
    let routesPath = Path.Combine(__SOURCE_DIRECTORY__, "routes.json")
    loadRoutesFromFile routesPath
    printfn "Server initialized. Call /routes/available to fetch routes from OpenGlobus."

// Call initialization
do initializeData()

let mapData = {| lat = 37.7749; lng = -122.4194; zoom = 12 |}

let getMap next (ctx: HttpContext) =
    json mapData next ctx

let getHealth next (ctx: HttpContext) =
    json {| status = "ok" |} next ctx

let saveSearch next (ctx: HttpContext) =
    task {
        let! search = ctx.BindModelAsync<SearchHistory>()
        searchHistory <- search :: searchHistory
        return! json {| success = true; message = "Search saved" |} next ctx
    }

let getSearchHistory next (ctx: HttpContext) =
    json searchHistory next ctx

// Route endpoints
let getRoutes next (ctx: HttpContext) =
    json routes next ctx

let getAvailableRoutes next (ctx: HttpContext) =
    task {
        // Fetch on-demand if not already loaded
        if List.isEmpty availableRoutes then
            do! fetchAvailableRoutes()
        
        return! json availableRoutes next ctx
    }

let addRoute next (ctx: HttpContext) =
    task {
        let! route = ctx.BindModelAsync<Route>()
        
        // Check if route already exists
        let exists = 
            routes 
            |> List.exists (fun r -> 
                r.srcIata = route.srcIata && // Fixed case
                r.dstIata = route.dstIata && // Fixed case
                r.airline = route.airline)   // Fixed case
        
        if not exists then
            routes <- route :: routes
            
        return! json {| 
            success = true
            message = "Route saved successfully"
            route = route
        |} next ctx
    }

let deleteRoute next (ctx: HttpContext) =
    task {
        let srcIata = 
            match ctx.TryGetQueryStringValue "srcIata" with
            | Some value -> value
            | None -> ""
        
        let dstIata = 
            match ctx.TryGetQueryStringValue "dstIata" with
            | Some value -> value
            | None -> ""
        
        let airline = 
            match ctx.TryGetQueryStringValue "airline" with
            | Some value -> value
            | None -> ""
        
        let routeExists = 
            routes 
            |> List.exists (fun r -> 
                r.srcIata = srcIata && // Fixed case
                r.dstIata = dstIata && // Fixed case
                r.airline = airline)   // Fixed case
        
        if routeExists then
            routes <- 
                routes 
                |> List.filter (fun r -> 
                    not (r.srcIata = srcIata && // Fixed case
                         r.dstIata = dstIata && // Fixed case
                         r.airline = airline))   // Fixed case
            
            return! json {| 
                success = true
                message = "Route deleted successfully"
            |} next ctx
        else
            return! RequestErrors.NOT_FOUND "Route not found" next ctx
    }

let saveRoutesToFile next (ctx: HttpContext) =
    task {
        try
            let routesPath = Path.Combine(__SOURCE_DIRECTORY__, "routes.json")
            let options = JsonSerializerOptions()
            options.WriteIndented <- true
            let jsonText = JsonSerializer.Serialize(routes, options)
            File.WriteAllText(routesPath, jsonText)
            return! json {| 
                success = true
                message = sprintf "Saved %d routes to file" (List.length routes)
            |} next ctx
        with ex ->
            return! ServerErrors.INTERNAL_ERROR ex.Message next ctx
    }

let appRouter = router {
    get "/health" getHealth
    get "/map" getMap
    post "/search" saveSearch
    get "/search-history" getSearchHistory
    
    // Route endpoints
    get "/routes" getRoutes
    get "/routes/available" getAvailableRoutes
    post "/routes" addRoute
    delete "/routes" deleteRoute
    post "/routes/save" saveRoutesToFile
}
