(ns map.views.globe-utils
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            ["@openglobus/og" :as og]))

(defn create-path [ellipsoid src dst num {:keys [color height opacity] :or {color [1.0 0.0 0.0] height 50000 opacity 1.0}}]
  (let [dist+az (.inverse ellipsoid src dst)
        dist (.-distance dist+az)
        az (.-initialAzimuth dist+az)
        p25 (.getGreatCircleDestination ^js ellipsoid src az (* dist 0.25))
        p75 (.getGreatCircleDestination ^js ellipsoid src az (* dist 0.75))
        _ (set! (.-height src) height)
        _ (set! (.-height dst) height)
        h (+ height (/ dist 4))
        _ (set! (.-height p25) h)
        _ (set! (.-height p75) h)
        start (.lonLatToCartesian ^js ellipsoid src)
        end (.lonLatToCartesian ^js ellipsoid dst)
        c25 (.lonLatToCartesian ^js ellipsoid p25)
        c75 (.lonLatToCartesian ^js ellipsoid p75)
        path (js/Array.)
        colors (js/Array.)]
    (dotimes [i (inc num)]
      (let [t (/ i num)
            p (.bezier3v (.-math og) t start c25 c75 end)]
        (.push path p)
        (.push colors (clj->js [(nth color 0) (nth color 1) (nth color 2) opacity]))))
    {:path path :colors colors}))

(defn init-globe []
  (let [LonLat (.-LonLat og)
        Entity (.-Entity og)
        Vector (.-Vector og)
        Globe (.-Globe og)
        XYZ (.-XYZ og)
        GlobusTerrain (.-GlobusTerrain og)
        Ellipsoid (.-Ellipsoid og)
        ellipsoid-instance (new Ellipsoid 6378137 6356752.314245)
        osm (new XYZ "OpenStreetMap"
                     (clj->js {:isBaseLayer true
                               :url "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                               :visibility true
                               :attribution "OpenStreetMap"}))
        collection (new Vector "Routes")]
    (js/console.log "Collection created:" collection)
    (let [globe-instance (new Globe #js {:target "globe-container"
                                       :name "Earth"
                                       :layers #js [osm collection]
                                       :atmosphereEnabled true
                                       :terrain (new GlobusTerrain)
                                       :sun #js {:stopped true}})]
      {:globe globe-instance
       :ellipsoid ellipsoid-instance
       :collection collection
       :LonLat LonLat
       :Entity Entity})))

(defn clear-collection [collection]
  (try
    (cond
      (.-clear ^js collection)
      (.clear ^js collection)
      
      (.-removeAll ^js collection) 
      (.removeAll ^js collection)
      
      (.-removeAllEntities ^js collection)
      (.removeAllEntities ^js collection)
      
      :else
      (js/console.warn "No clear method found on collection, trying to clear entities manually"))
    (catch :default e
      (js/console.error "Error clearing collection:" e))))

(defn add-entity-to-collection [collection entity]
  (try
    (if (.-add ^js collection)
      (.add ^js collection entity)
      (js/console.error "No add method on collection!"))
    (catch :default e
      (js/console.error "Error adding entity to collection:" e))))

(defn render-routes [globe ellipsoid collection routes num]
  (js/console.log "=== RENDER-ROUTES START ===")
  (js/console.log "Routes count:" (count routes))
  (js/console.log "First route:" (first routes))
  (js/console.log "Collection:" collection)
  (js/console.log "Ellipsoid:" ellipsoid)
  
  (.clear collection)
  (js/console.log "Collection cleared")
  
  (let [LonLat og/LonLat
        Entity og/Entity
        paths (js/Array.)
        colors (js/Array.)
        anim-index (js/Array.)]
    
    (js/console.log "Processing" (count routes) "routes...")
    
    (doseq [[idx route] (map-indexed vector routes)]
      (js/console.log "\n--- Route" idx "---")
      (js/console.log "Route data:" route)
      (js/console.log "srcIata:" (:srcIata route) "dstIata:" (:dstIata route))
      
      ;; Get coordinates from airport objects
      (let [src-airport (:srcAirport route)
            dst-airport (:dstAirport route)]
        (js/console.log "Source airport:" src-airport)
        (js/console.log "Dest airport:" dst-airport)
        
        (let [src-lat-str (:lat src-airport)
              src-lng-str (:lng src-airport)
              dst-lat-str (:lat dst-airport)
              dst-lng-str (:lng dst-airport)]
          (js/console.log "Source coords (strings):" src-lat-str src-lng-str)
          (js/console.log "Dest coords (strings):" dst-lat-str dst-lng-str)
          
          (let [src-lat (js/parseFloat src-lat-str)
                src-lng (js/parseFloat src-lng-str)
                dst-lat (js/parseFloat dst-lat-str)
                dst-lng (js/parseFloat dst-lng-str)]
            (js/console.log "Source coords (parsed):" src-lat src-lng)
            (js/console.log "Dest coords (parsed):" dst-lat dst-lng)
            
            (let [valid? (and src-lat src-lng dst-lat dst-lng
                            (not (js/isNaN src-lat)) (not (js/isNaN src-lng))
                            (not (js/isNaN dst-lat)) (not (js/isNaN dst-lng)))]
              (js/console.log "Coords valid?" valid?)
              
              (if valid?
                (do
                  (js/console.log "Creating LonLat objects...")
                  (let [src (new LonLat src-lng src-lat)
                        dst (new LonLat dst-lng dst-lat)]
                    (js/console.log "Source LonLat:" src)
                    (js/console.log "Dest LonLat:" dst)
                    (js/console.log "Creating path...")
                    (let [p (create-path ellipsoid src dst num {:color [1.0 0.5 0.0]})]
                      (js/console.log "Path created:" p)
                      (js/console.log "Path length:" (.-length (:path p)))
                      (.push paths (:path p))
                      (.push colors (:colors p))
                      (.push anim-index (.randomi (.-math og) 0 num))
                      (js/console.log "Path added to arrays. Total paths:" (.-length paths)))))
                (js/console.error "INVALID COORDS for route:" (:srcIata route) "->" (:dstIata route))))))))
    
    (js/console.log "\n=== CREATING ENTITY ===")
    (js/console.log "Total paths created:" (.-length paths))
    (js/console.log "Paths array:" paths)
    (js/console.log "Colors array:" colors)
    
    (if (pos? (.-length paths))
      (do
        (js/console.log "Creating polyline entity...")
        (let [polyline-config {:path3v paths
                              :pathColors colors
                              :thickness 3
                              :isClosed false
                              :visibility true}
              entity-config {:polyline polyline-config}]
          (js/console.log "Polyline config:" (clj->js polyline-config))
          (js/console.log "Entity config:" (clj->js entity-config))
          
          (let [entity (new Entity (clj->js entity-config))]
            (js/console.log "Entity created:" entity)
            (js/console.log "Entity polyline:" (.-polyline entity))
            (.add collection entity)
            (js/console.log "Entity added to collection")
            (js/console.log "Collection entities count:" (if (.-getEntities collection)
                                                            (.-length (.getEntities collection))
                                                            "unknown"))
            (js/console.log "=== RENDER-ROUTES COMPLETE ===\n")
            {:entities [entity] :anim-index anim-index})))
      (do
        (js/console.error "NO PATHS CREATED!")
        nil))))

(defn animate-routes [entities anim-index num animation-ref]
  (js/console.log "=== ANIMATE-ROUTES START ===")
  (js/console.log "Entities (original):" entities)
  
  ;; Convert ClojureScript vector to JS array
  (let [entities-array (if (array? entities)
                         entities
                         (clj->js entities))]
    (js/console.log "Entities (converted):" entities-array)
    (js/console.log "Entities length:" (.-length entities-array))
    (js/console.log "Anim index:" anim-index)
    (js/console.log "Num:" num)
    (js/console.log "Animation ref:" animation-ref)
    
    (when @animation-ref
      (js/console.log "Cancelling previous animation:" @animation-ref)
      (js/cancelAnimationFrame @animation-ref))
    
    (letfn [(animate []
              (dotimes [i (.-length entities-array)]
                (let [entity (aget entities-array i)
                      poly (.-polyline entity)]
                  (when (zero? (mod (js/Date.now) 1000))
                    (js/console.log "Animating entity" i "polyline:" poly))
                  (let [cArr (.getPathColors ^js poly)]
                    (dotimes [j (.-length cArr)]
                      (let [idx (aget anim-index j)
                            colors (aget cArr j)
                            r (aget colors 0 0)
                            g (aget colors 0 1)
                            b (aget colors 0 2)]
                        (aset anim-index j (if (> idx (+ num 4)) 0 (inc idx)))
                        (.setPointColor ^js poly #js [r g b 0.8] idx j)
                        (.setPointColor ^js poly #js [r g b 0.6] (dec idx) j)
                        (.setPointColor ^js poly #js [r g b 0.3] (- idx 2) j)
                        (.setPointColor ^js poly #js [r g b 0.1] (- idx 3) j))))))
              (reset! animation-ref (js/requestAnimationFrame animate)))]
      (js/console.log "Starting animation loop...")
      (animate)
      (js/console.log "Animation started with ID:" @animation-ref))))

(defn check-gl-error [gl]
  (let [err (when gl (.getError gl))]
    (when (and err (not= err (.-NO_ERROR gl)))
      (js/console.error "WebGL error:" err))))
