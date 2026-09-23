(ns map.views.globe-utils
  (:require ["@openglobus/og" :as og]))

(defn- bezier-point [ellipsoid src dst t num-segments]
  "Compute a point on a Bezier curve between two points on the globe."
  (let [dist+az (.inverse ellipsoid src dst)
        dist (.-distance dist+az)
        az (.-initialAzimuth dist+az)
        height 0 ;; Increased from 50000 for "larger"
        arc-height (+ height (/ dist 4.5))  ;; Adjusted from (/ dist 4) for larger arc
        
        ;; Calculate control points using the public LonLat constructor. Some
        ;; OpenGlobus releases do not expose great-circle destination helpers.
        p25 (new og/LonLat
                 (+ (.-lon src) (* 0.25 (- (.-lon dst) (.-lon src))))
                 (+ (.-lat src) (* 0.25 (- (.-lat dst) (.-lat src)))))
        p75 (new og/LonLat
                 (+ (.-lon src) (* 0.75 (- (.-lon dst) (.-lon src))))
                 (+ (.-lat src) (* 0.75 (- (.-lat dst) (.-lat src)))))
        
        ;; Set heights
        _ (set! (.-height src) height)
        _ (set! (.-height dst) height)
        _ (set! (.-height p25) arc-height)
        _ (set! (.-height p75) arc-height)
        
        ;; Convert to cartesian
        start (.geodeticToCartesian ellipsoid (.-lon src) (.-lat src) (.-height src))
        end (.geodeticToCartesian ellipsoid (.-lon dst) (.-lat dst) (.-height dst))
        c25 (.geodeticToCartesian ellipsoid (.-lon p25) (.-lat p25) (.-height p25))
        c75 (.geodeticToCartesian ellipsoid (.-lon p75) (.-lat p75) (.-height p75))]
    
    (.bezier3v (.-math og) t start c25 c75 end)))

(defn create-path
  "Creates a bezier path between two points on the globe with optional styling."
  [ellipsoid src dst num-segments {:keys [color opacity]
                                   :or {color [1.5 0.1 0.0]
                                        opacity 1.0}}]
  (let [path (js/Array.)
        colors (js/Array.)]
    (dotimes [i (inc num-segments)]
      (let [t (/ i num-segments)
            point (bezier-point ellipsoid src dst t num-segments)
            [r g b] color]
        (.push path point)
        (.push colors #js [r g b opacity])))
    {:path path :colors colors}))

(defn- parse-coordinate [coord-str]
  "Safely parse a coordinate string to float, returning nil if invalid."
  (when coord-str
    (let [value (js/parseFloat coord-str)]
      (when-not (js/isNaN value)
        value))))

(defn- valid-coordinates? [lat lng]
  "Check if lat/lng coordinates are within valid ranges."
  (and lat lng
       (>= lat -90) (<= lat 90)
       (>= lng -180) (<= lng 180)))

(defn- route->lonlat-pair [route LonLat]
  "Extract and validate source/destination coordinates from a route."
  (let [src-lat (parse-coordinate (get-in route [:srcAirport :lat]))
        src-lng (parse-coordinate (get-in route [:srcAirport :lng]))
        dst-lat (parse-coordinate (get-in route [:dstAirport :lat]))
        dst-lng (parse-coordinate (get-in route [:dstAirport :lng]))]
    
    (when (and (valid-coordinates? src-lat src-lng)
               (valid-coordinates? dst-lat dst-lng))
      {:src (new LonLat src-lng src-lat)
       :dst (new LonLat dst-lng dst-lat)})))

(defn- create-route-paths [routes ellipsoid LonLat num-segments]
  "Convert routes into paths, colors, and animation indices."
  (reduce
   (fn [acc route]
     (if-let [{:keys [src dst]} (route->lonlat-pair route LonLat)]
       (let [{:keys [path colors]} (create-path ellipsoid src dst num-segments {})]
         (-> acc
             (update :paths conj path)
             (update :colors conj colors)
             (update :anim-indices conj 0)))
       acc))
   {:paths [] :colors [] :anim-indices []}
   routes))

(defn render-routes
  "Render all routes on the globe as polylines with animation data."
  [globe ellipsoid collection routes num-segments]
  (.clear collection)
  
  (let [{:keys [paths colors anim-indices]} (create-route-paths routes ellipsoid og/LonLat num-segments)]
    
    (when (seq paths)
      (let [entity (new og/Entity
                        #js {:polyline #js {:path3v (clj->js paths)
                                           :pathColors (clj->js colors)
                                           :thickness 6.0 ;; Increased from 3 for "larger" and "elegant"
                                           :isClosed false
                                           :visibility true}})]
        (.add collection entity)
        {:entities [entity]
         :anim-index (clj->js anim-indices)}))))

(defn- animate-point [poly idx anim-idx num-segments color-array j]
  "Animate a single point on a polyline with an elegant, asteroid-like fading trail effect."
  (let [colors (aget color-array j)
        [r g b] [(aget colors 0 0) (aget colors 0 1) (aget colors 0 2)]
        new-idx (if (> idx (+ num-segments 6)) 0 (inc idx))] ;; Adjusted for longer trail
    
    (aset anim-idx j new-idx)
    
    ;; Set colors for animated segments with smoother, elegant opacity fade
    (doseq [[offset opacity] [[0 1.0] [1 0.9] [2 0.7] [3 0.4] [4 0.2] [5 0.1]]]
      (when (>= (- idx offset) 0)
        (.setPointColor poly #js [r g b opacity] (- idx offset) j)))
    
    new-idx))

(defn animate-routes
  "Start animation loop for route polylines."
  [entities anim-index num-segments animation-ref]
  (when @animation-ref
    (js/cancelAnimationFrame @animation-ref))
  
  (letfn [(animate-frame []
            (doseq [entity entities]
              (when-let [poly (.-polyline entity)]
                (let [color-array (.getPathColors poly)]
                  (dotimes [j (.-length color-array)]
                    (let [idx (aget anim-index j)]
                      (animate-point poly idx anim-index num-segments color-array j))))))
            (reset! animation-ref (js/requestAnimationFrame animate-frame)))]
    (animate-frame)))

(defn init-globe
  "Initialize OpenGlobus globe with terrain and vector layer."
  []
  (let [ellipsoid (new og/Ellipsoid 6378137 6356752.314245)
        
        ;; Base layer - OpenStreetMap
        osm (new og/XYZ "OpenStreetMap"
                        #js {:isBaseLayer true
                             :url "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                             :visibility true
                             :attribution "OpenStreetMap"})
        
        ;; Vector layer for routes
        collection (new og/Vector "Routes")
        
        ;; Globe instance
        globe (new og/Globe #js {:target "globe-container"
                                 :name "Earth"
                                 :layers #js [osm collection]
                                 :atmosphereEnabled true
                                 :terrain (new og/GlobusTerrain)
                                 :sun #js {:stopped true}})]
    
    {:globe globe
     :ellipsoid ellipsoid
     :collection collection
     :LonLat og/LonLat
     :Entity og/Entity}))

(defn clear-collection
  "Clear all entities from a vector collection."
  [collection]
  (try
    (cond
      (.-clear collection)
      (.clear collection)
      
      (.-removeAll collection)
      (.removeAll collection)
      
      (.-removeAllEntities collection)
      (.removeAllEntities collection)
      
      :else
      (js/console.warn "No clear method found on collection"))
    (catch :default e
      (js/console.error "Error clearing collection:" e))))

(defn destroy-globe
  "Clean up globe resources."
  [globe collection]
  (try
    (when collection
      (clear-collection collection))
    (when globe
      (.destroy globe))
    (catch :default e
      (js/console.error "Error destroying globe:" e))))
