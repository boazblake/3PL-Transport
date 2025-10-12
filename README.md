# Map Demo (ClojureScript + Re-frame + Leaflet + F# Saturn)

## Overview

This project demonstrates a minimal full-stack setup:

- **Frontend:** ClojureScript using Re-frame and Reagent
- **Map Library:** Leaflet + OpenStreetMap (no API key required)
- **Backend:** F# Saturn providing a JSON REST API
- **Build Environment:** Nix flake with Shadow-CLJS and .NET SDK 8

The frontend renders an interactive Leaflet map with location search capabilities.  
The backend exposes a JSON endpoint at `/map` with coordinates.

## Features

- Interactive map powered by Leaflet and OpenStreetMap
- Location search with geocoding (using Nominatim)
- Reactive state management with Re-frame
- Hot module reloading with Shadow-CLJS
- F# Saturn REST API backend
- Nix-based development environment

## Requirements

- macOS (Apple Silicon or Intel)
- Nix (flakes enabled)
- Node.js and npm (provided by Nix shell)
- .NET SDK 8 (provided by Nix shell)

## Structure

```
map-demo/
├── flake.nix
├── frontend/
│   ├── package.json
│   ├── shadow-cljs.edn
│   ├── resources/public/index.html
│   └── src/map/
│       ├── core.cljs        # Application entry point with React 18 support
│       ├── views.cljs       # Leaflet map component and search bar
│       ├── events.cljs      # Re-frame event handlers (geocoding, map updates)
│       ├── subs.cljs        # Re-frame subscriptions
│       └── db.cljs          # Default application state
└── backend/
    ├── MapDemoBackend.fsproj
    ├── Router.fs
    └── Program.fs
```

## Running the Development Environment

### 1. Enter Nix Dev Shell

```bash
nix develop
```

This provides `dotnet`, `node`, and `jdk`.

### 2. Start the Backend

```bash
cd backend
dotnet run
```

Server runs on:

```
http://localhost:8080
```

Endpoints:

- `GET /health` → `{"status":"ok"}`
- `GET /map` → `{"lat":37.7749,"lng":-122.4194,"zoom":12}`

### 3. Start the Frontend

```bash
cd frontend
npm install
npm run watch
```

Then open:

```
http://localhost:8020
```

You should see an interactive Leaflet map centered on San Francisco with a search bar at the top.

## Using the Map

### Search for Locations

1. Type a location name in the search bar (e.g., "New York", "London", "Tokyo")
2. Press Enter or click the "Search" button
3. The map will automatically pan to the searched location

### Navigate the Map

- **Pan:** Click and drag the map
- **Zoom:** Use the scroll wheel or the +/- buttons
- **Mobile:** Pinch to zoom, drag to pan

## Leaflet Integration

- No API key required (uses public OSM tiles)
- Geocoding provided by Nominatim (OpenStreetMap's free service)
- To change the default map center, edit `src/map/db.cljs`

## Architecture

### Re-frame Event Flow

```
User Action → Event → Event Handler → Update DB → Subscription → View Update
```

### Key Frontend Components

- **Events** (`events.cljs`): Handle user actions, geocoding, and map updates
- **Subscriptions** (`subs.cljs`): Query the application state
- **Views** (`views.cljs`): Render the map and search UI
- **DB** (`db.cljs`): Define the initial application state

### React 18 Compatibility

The application uses `reagent.dom.client` for React 18 compatibility:

- Uses `create-root` API instead of deprecated `render`
- Refs instead of deprecated `findDOMNode`
- Proper lifecycle management for Leaflet map instances

## Production Build

### Frontend

```bash
cd frontend
npm run release
```

Outputs compiled JS to:

```
frontend/resources/public/js/
```

### Backend Deployment

```bash
cd backend
dotnet publish -c Release -o ./out
```

Run from the output directory:

```bash
./out/MapDemoBackend
```

## Technologies Used

- **[ClojureScript](https://clojurescript.org/)**: Clojure to JavaScript compiler
- **[Reagent](https://reagent-project.github.io/)**: Minimalistic React wrapper for ClojureScript
- **[Re-frame](https://day8.github.io/re-frame/)**: Pattern for writing SPAs in ClojureScript
- **[Shadow-CLJS](https://shadow-cljs.github.io/docs/UsersGuide.html)**: ClojureScript build tool
- **[Leaflet](https://leafletjs.com/)**: Open-source JavaScript library for interactive maps
- **[OpenStreetMap](https://www.openstreetmap.org/)**: Free, editable map data
- **[Nominatim](https://nominatim.org/)**: Free geocoding service
- **[F# Saturn](https://saturnframework.org/)**: Functional web framework for F#
- **[Nix](https://nixos.org/)**: Reproducible development environment

## API Usage Notes

This application uses the free Nominatim API for geocoding. Please be respectful of their usage policy:

- Maximum 1 request per second
- Include a valid User-Agent header in production
- Consider using your own Nominatim instance for high-traffic applications

## Troubleshooting

### Map not showing

1. Check browser console for errors
2. Ensure Leaflet CSS and JS are loaded before your app in `index.html`
3. Verify `window.L` exists in the browser console
4. Check that the map container div has explicit height set

### Hot reload issues

1. Stop the Shadow-CLJS watch process
2. Delete `frontend/.shadow-cljs/` directory
3. Restart with `npm run watch`

### Geocoding not working

1. Check network tab for blocked requests to Nominatim
2. Ensure you have internet connectivity
3. Try a well-known location like "London" or "Paris"

## License

MIT
