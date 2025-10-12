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

type AirportCoord = {
    iata: string
    icao: string
    lat: string
    lng: string
    name: string
}

let mutable searchHistory: SearchHistory list = []
let mutable routes: Route list = []

let saveAirportCoordsToFile (filePath: string) (airports: AirportCoord list) =
    try
        let options = JsonSerializerOptions()
        options.WriteIndented <- true
        let jsonText = JsonSerializer.Serialize(airports, options)
        File.WriteAllText(filePath, jsonText)
        printfn "Saved %d airport coordinates to %s" (List.length airports) filePath
    with ex ->
        printfn "Error saving airport coordinates: %s" ex.Message

let fetchAndSaveAirports (airportsPath: string) =
    task {
        use client = new HttpClient()
        let! response = client.GetStringAsync("https://sandbox.openglobus.org/examples/polylinesColorAnimation/routes.json")
        let options = JsonSerializerOptions()
        options.PropertyNameCaseInsensitive <- true
        let fetchedRoutes = JsonSerializer.Deserialize<Route list>(response, options)
        printfn "Fetched %d routes from OpenGlobus" (List.length fetchedRoutes)
        let airports =
            fetchedRoutes
            |> List.collect (fun r -> [
                { iata = r.srcIata; icao = r.srcAirport.icao; lat = r.srcAirport.lat; lng = r.srcAirport.lng; name = r.srcAirport.name }
                { iata = r.dstIata; icao = r.dstAirport.icao; lat = r.dstAirport.lat; lng = r.dstAirport.lng; name = r.dstAirport.name }
            ])
            |> List.distinctBy (fun a -> a.iata)
        saveAirportCoordsToFile airportsPath airports
        printfn "Saved %d airports to file" (List.length airports)
        return airports
    }

let loadAirportsFromFile() =
    task {
        try
            let airportsPath = Path.Combine(__SOURCE_DIRECTORY__, "airports.json")
            if File.Exists(airportsPath) then
                let! json = File.ReadAllTextAsync(airportsPath)
                let options = JsonSerializerOptions()
                options.PropertyNameCaseInsensitive <- true
                let airports = JsonSerializer.Deserialize<AirportCoord list>(json, options)
                if List.isEmpty airports then
                    printfn "airports.json is empty, fetching from OpenGlobus"
                    return! fetchAndSaveAirports airportsPath
                else
                    printfn "Loaded %d airports from local file" (List.length airports)
                    return airports
            else
                printfn "airports.json file not found, fetching from OpenGlobus"
                return! fetchAndSaveAirports airportsPath
        with ex ->
            printfn "Error loading airports from file: %s" ex.Message
            return []
    }

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

let initializeData() =
    let routesPath = Path.Combine(__SOURCE_DIRECTORY__, "routes.json")
    loadRoutesFromFile routesPath
    printfn "Server initialized."

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

let getRoutes next (ctx: HttpContext) =
    json routes next ctx

let getAvailableRoutes next (ctx: HttpContext) =
    task {
        let! airports = loadAirportsFromFile()
        return! json airports next ctx
    }

let getAirports next (ctx: HttpContext) =
    task {
        let! airports = loadAirportsFromFile()
        return! json airports next ctx
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
        let! airports = loadAirportsFromFile()
        let srcAirport = airports |> List.tryFind (fun a -> a.iata = srcIata)
        let dstAirport = airports |> List.tryFind (fun a -> a.iata = dstIata)
        match srcAirport, dstAirport with
        | Some src, Some dst ->
            let uniqueAirline = sprintf "CUSTOM-%s" (Guid.NewGuid().ToString())
            let newRoute = {
                airline = uniqueAirline
                airlineId = uniqueAirline
                srcIata = srcIata
                srcAirportId = ""
                dstIata = dstIata
                dstAirportId = ""
                codeshare = ""
                stops = "0"
                equipment = "Unknown"
                srcAirport = {
                    airportId = ""
                    name = src.name
                    city = ""
                    country = ""
                    icao = src.icao
                    lat = src.lat
                    lng = src.lng
                    alt = ""
                    timezone = ""
                    dst = ""
                    tz = ""
                    ``type`` = "airport"
                    source = ""
                }
                dstAirport = {
                    airportId = ""
                    name = dst.name
                    city = ""
                    country = ""
                    icao = dst.icao
                    lat = dst.lat
                    lng = dst.lng
                    alt = ""
                    timezone = ""
                    dst = ""
                    tz = ""
                    ``type`` = "airport"
                    source = ""
                }
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
    get "/airports" getAirports
    post "/routes" addRoute
    post "/routes/new" addSimpleRoute
    delete "/routes" deleteRoute
    post "/routes/save" saveRoutesToFile
}
