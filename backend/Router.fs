module Router

open Saturn
open Giraffe
open Microsoft.AspNetCore.Http
open System.IO
open System.Text.Json
open System.Net.Http
open System.Threading.Tasks
open System

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
let mutable availableRoutes: Route list = []

// Fetch available routes from OpenGlobus
let fetchAvailableRoutes() =
    task {
        try
            use client = new HttpClient()
            let! response = client.GetStringAsync("https://sandbox.openglobus.org/examples/polylinesColorAnimation/routes.json")
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
        if List.isEmpty availableRoutes then
            do! fetchAvailableRoutes()
        return! json availableRoutes next ctx
    }

let addRoute next (ctx: HttpContext) =
    task {
        let! route = ctx.BindModelAsync<Route>()
        let exists = 
            routes 
            |> List.exists (fun r -> 
                r.srcIata = route.srcIata && 
                r.dstIata = route.dstIata && 
                r.airline = route.airline)
        if not exists then
            routes <- route :: routes
        return! json {| 
            success = true
            message = "Route saved successfully"
            route = route
        |} next ctx
    }

let addSimpleRoute next (ctx: HttpContext) =
    task {
        let! data = ctx.BindJsonAsync<{| srcIata: string; dstIata: string |}>()
        let srcIata = data.srcIata
        let dstIata = data.dstIata

        // Ensure availableRoutes is populated
        if List.isEmpty availableRoutes then
            do! fetchAvailableRoutes()

        // Find source and destination airports
        let srcRoute = availableRoutes |> List.tryFind (fun r -> r.srcIata = srcIata)
        let dstRoute = availableRoutes |> List.tryFind (fun r -> r.dstIata = dstIata)

        match srcRoute, dstRoute with
        | Some src, Some dst ->
            let uniqueAirline = sprintf "CUSTOM-%s" (Guid.NewGuid().ToString())
            let newRoute = {
                airline = uniqueAirline
                airlineId = uniqueAirline
                srcIata = srcIata
                srcAirportId = src.srcAirportId
                dstIata = dstIata
                dstAirportId = dst.dstAirportId
                codeshare = ""
                stops = "0"
                equipment = "Unknown"
                srcAirport = src.srcAirport
                dstAirport = dst.dstAirport
            }
            let exists = 
                routes 
                |> List.exists (fun r -> 
                    r.srcIata = srcIata && 
                    r.dstIata = dstIata && 
                    r.airline = uniqueAirline)
            if not exists then
                routes <- newRoute :: routes
            return! json {| 
                success = true
                message = "Simple route created successfully"
                route = newRoute
            |} next ctx
        | _ ->
            return! RequestErrors.BAD_REQUEST "Invalid source or destination IATA code" next ctx
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
                r.srcIata = srcIata && 
                r.dstIata = dstIata && 
                r.airline = airline)
        if routeExists then
            routes <- 
                routes 
                |> List.filter (fun r -> 
                    not (r.srcIata = srcIata && 
                         r.dstIata = dstIata && 
                         r.airline = airline))
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
    get "/routes" getRoutes
    get "/routes/available" getAvailableRoutes
    post "/routes" addRoute
    post "/routes/new" addSimpleRoute
    delete "/routes" deleteRoute
    post "/routes/save" saveRoutesToFile
}
