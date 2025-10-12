(ns map.views.add-route
  (:require [re-frame.core :as rf]
            [map.views.components :as components]))

;; In add_route.cljs - update route-picker-panel function:
(defn route-picker-panel []
  (let [show-picker? @(rf/subscribe [:map/show-route-picker]) ;; Add this subscription
        available-routes @(rf/subscribe [:map/available-routes])
        saved-routes @(rf/subscribe [:map/routes])
        loading? @(rf/subscribe [:map/loading-routes])]
    (when show-picker? ;; Only render when show-picker? is true
      [:div {:style (merge components/panel-style
                           {:top "20px" :left "20px" :width "300px"})}
       [:div {:style {:display "flex" :justify-content "space-between" :margin-bottom "12px"}}
        [:h3 {:style {:margin "0" :font-size "16px"}} "Available Routes"]
        [:button {:on-click #(rf/dispatch [:map/toggle-route-picker])
                  :style (merge components/button-style
                                {:background "#6c757d" :color "white"})}
         "Close"]]
       (if loading?
         [:div "Loading routes..."]
         (if (empty? available-routes)
           [:div "No routes available"]
           [:div
            (doall
             (for [route available-routes]
               ^{:key (str (:srcIata route) "-" (:dstIata route) "-" (:airline route))}
               [components/route-item
                {:route route
                 :is-saved? (some #(= (select-keys % [:srcIata :dstIata :airline])
                                     (select-keys route [:srcIata :dstIata :airline]))
                                  saved-routes)}]))]))])))

(defn saved-routes-panel []
  (let [saved-routes @(rf/subscribe [:map/routes])]
    (when (seq saved-routes)
      [:div {:style (merge components/panel-style
                           {:top "80px" :right "20px" :max-width "300px" :max-height "400px"})}
       [:h3 {:style {:margin "0 0 10px 0" :font-size "16px" :font-weight "600"}}
        (str "Saved Routes (" (count saved-routes) ")")]
       [:div
        (for [route saved-routes]
          ^{:key (str (:srcIata route) "-" (:dstIata route) "-" (:airline route))}
          [components/saved-route-item {:route route}])]])))

(defn route-picker-button []
  (let [show-picker? @(rf/subscribe [:map/show-route-picker])]
    [:button {:on-click #(rf/dispatch [:map/toggle-route-picker])
              :style (merge components/button-style
                            {:position "absolute"
                             :top "20px"
                             :left "20px"
                             :z-index 1000
                             :padding "10px 16px"
                             :background (if show-picker? "#6c757d" "#007bff")
                             :color "white"
                             :box-shadow "0 2px 8px rgba(0,0,0,0.2)"})}
     (if show-picker? "Close Picker" "Pick Routes")]))
