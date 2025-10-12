(ns map.views.components
  (:require [re-frame.core :as rf]))

;; Shared styles
(def panel-style
  {:position "absolute"
   :z-index 1000
   :background "rgba(255,255,255,0.98)"
   :padding "20px"
   :border-radius "8px"
   :box-shadow "0 4px 16px rgba(0,0,0,0.2)"
   :max-height "80vh"
   :overflow-y "auto"})

(def button-style
  {:padding "6px 12px"
   :border "none"
   :border-radius "4px"
   :cursor "pointer"
   :font-size "12px"
   :font-weight "500"})

;; Route item component (for route picker)
(defn route-item [{:keys [route is-saved?]}]
  [:div {:key (str (:srcIata route) "-" (:dstIata route) "-" (:airline route))
         :style {:padding "12px"
                 :border "1px solid #ddd"
                 :border-radius "4px"
                 :display "flex"
                 :justify-content "space-between"
                 :align-items "center"
                 :background (if is-saved? "#e8f5e9" "white")}}
   [:div {:style {:flex 1}}
    [:div {:style {:font-weight "500" :font-size "14px"}}
     (str (:srcIata route) " → " (:dstIata route) " (" (:airline route) ")")]
    [:div {:style {:font-size "12px" :color "#666" :margin-top "4px"}}
     (str (get-in route [:srcAirport :name]) " to " (get-in route [:dstAirport :name]))]]
   (if is-saved?
     [:button {:on-click (fn [e]
                          (.stopPropagation e) ; Prevent event bubbling
                          (rf/dispatch [:map/remove-route route]))
               :style (merge button-style
                             {:background "#dc3545" :color "white"})}
      "Remove"]
     [:button {:on-click (fn [e]
                          (.stopPropagation e) ; Prevent event bubbling
                          (rf/dispatch [:map/save-picked-route route]))
               :style (merge button-style
                             {:background "#28a745" :color "white"})}
      "Save"])])

;; Saved route item component
(defn saved-route-item [{:keys [route]}]
  [:div {:key (str (:srcIata route) "-" (:dstIata route) "-" (:airline route))
         :style {:padding "8px"
                 :border-bottom "1px solid #eee"
                 :cursor "pointer"}
         :on-click #(rf/dispatch [:map/focus-route route])}
   [:div {:style {:font-weight "500" :font-size "14px"}}
    (str (:srcIata route) " → " (:dstIata route) " (" (:airline route) ")")]
   [:div {:style {:font-size "11px" :color "#666"}}
    (str (get-in route [:srcAirport :name]) " to " (get-in route [:dstAirport :name]))]])
