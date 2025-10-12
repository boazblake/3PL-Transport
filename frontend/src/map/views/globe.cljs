(ns map.views.globe
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [map.views.globe-utils :as globe-utils]
            ["@openglobus/og" :as og]))

(defn destroy-globe-resources [globe-state]
  (when-let [{:keys [globe collection]} @globe-state]
    (try
      (js/console.log "Destroying globe resources...")
      (when collection
        (.clear collection))
      (when globe
        (.destroy globe))
      (catch :default e
        (js/console.error "Error during cleanup:" e)))
    (reset! globe-state nil)))

(defn globe-view []
  (let [globe-state (r/atom nil)
        animation-ref (r/atom nil)]
    
    (r/create-class
     {      :component-did-mount
      (fn [this]
        (js/console.log "=== COMPONENT DID MOUNT ===")
        (js/setTimeout
         (fn []
           (try
             (js/console.log "Initializing globe...")
             (let [{:keys [globe ellipsoid collection LonLat Entity]} (globe-utils/init-globe)]
               (reset! globe-state {:globe globe 
                                   :ellipsoid ellipsoid 
                                   :collection collection 
                                   :LonLat LonLat 
                                   :Entity Entity})
               (js/console.log "Globe initialized successfully")
               (rf/dispatch [:map/set-globe-instance globe])
               (rf/dispatch [:map/fetch-saved-routes])
               
               ;; After initialization, render any existing routes
               (let [[_ routes] (r/argv this)]
                 (when (seq routes)
                   (js/console.log "Initial routes render after globe init, count:" (count routes))
                   (try
                     (let [render-result (globe-utils/render-routes globe ellipsoid collection routes 70)]
                       (when (and render-result (:entities render-result))
                         (js/console.log "Starting initial animation...")
                         (globe-utils/animate-routes (:entities render-result) (:anim-index render-result) 70 animation-ref)))
                     (catch :default e
                       (js/console.error "Error rendering initial routes:" e))))))
             (catch :default e
               (js/console.error "Error initializing globe:" e))))
         100))
      
      :component-did-update
      (fn [this old-argv]
        (js/console.log "\n=== COMPONENT DID UPDATE ===")
        (js/console.log "Old argv:" old-argv)
        (js/console.log "New argv:" (r/argv this))
        (let [[_ routes] (r/argv this)] ;; Get routes from props
          (js/console.log "Routes from props:" routes)
          (js/console.log "Routes count:" (count routes))
          (when (and @globe-state (seq routes))
            (js/console.log "Rendering routes...")
            (let [{:keys [globe ellipsoid collection]} @globe-state]
              (when (and globe collection)
                (try
                  (let [render-result (globe-utils/render-routes globe ellipsoid collection routes 70)]
                    (js/console.log "Render result:" render-result)
                    (when (and render-result (:entities render-result))
                      (js/console.log "Starting animation...")
                      (globe-utils/animate-routes (:entities render-result) (:anim-index render-result) 70 animation-ref)))
                  (catch :default e
                    (js/console.error "Error rendering routes:" e))))))))
      
      :component-will-unmount
      (fn [this]
        (js/console.log "=== COMPONENT WILL UNMOUNT ===")
        (when @animation-ref
          (js/cancelAnimationFrame @animation-ref))
        (destroy-globe-resources globe-state))
      
      :reagent-render
      (fn [routes] ;; Accept routes as prop
        (js/console.log "RENDER called with routes count:" (count routes))
        [:div#globe-container
         {:style {:width "100%" :height "100%"}}])})))

(defn globe-view-wrapper []
  (let [routes @(rf/subscribe [:map/routes])] ;; Subscribe in wrapper
    [globe-view routes])) ;; Pass as prop
