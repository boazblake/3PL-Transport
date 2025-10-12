(ns map.views.globe
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [map.views.globe-utils :as globe-utils]
            ["@openglobus/og" :as og]))

(defn destroy-globe-resources [globe-state]
  (when-let [{:keys [globe collection]} @globe-state]
    (try
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
        (js/setTimeout
         (fn []
           (try
             (let [{:keys [globe ellipsoid collection LonLat Entity]} (globe-utils/init-globe)]
               (reset! globe-state {:globe globe 
                                   :ellipsoid ellipsoid 
                                   :collection collection 
                                   :LonLat LonLat 
                                   :Entity Entity})
               (rf/dispatch [:map/set-globe-instance globe])
               (rf/dispatch [:map/fetch-saved-routes])
               
               ;; After initialization, render any existing routes
               (let [[_ routes] (r/argv this)]
                 (when (seq routes)
                   (try
                     (let [render-result (globe-utils/render-routes globe ellipsoid collection routes 70)]
                       (when (and render-result (:entities render-result))
                         (globe-utils/animate-routes (:entities render-result) (:anim-index render-result) 70 animation-ref)))
                     (catch :default e
                       (js/console.error "Error rendering initial routes:" e))))))
             (catch :default e
               (js/console.error "Error initializing globe:" e))))
         100))
      
      :component-did-update
      (fn [this old-argv]
        (let [[_ routes] (r/argv this)] ;; Get routes from props
          (when (and @globe-state (seq routes))
            (let [{:keys [globe ellipsoid collection]} @globe-state]
              (when (and globe collection)
                (try
                  (let [render-result (globe-utils/render-routes globe ellipsoid collection routes 70)]
                    (when (and render-result (:entities render-result))
                      (globe-utils/animate-routes (:entities render-result) (:anim-index render-result) 70 animation-ref)))
                  (catch :default e
                    (js/console.error "Error rendering routes:" e))))))))
      
      :component-will-unmount
      (fn [this]
        (when @animation-ref
          (js/cancelAnimationFrame @animation-ref))
        (destroy-globe-resources globe-state))
      
      :reagent-render
      (fn [routes] ;; Accept routes as prop
        [:div#globe-container
         {:style {:width "100%" :height "100%"}}])})))

(defn globe-view-wrapper []
  (let [routes @(rf/subscribe [:map/routes])] ;; Subscribe in wrapper
    [globe-view routes])) ;; Pass as prop
