(ns map.views.components
  (:require [re-frame.core :as rf]))

;; Notification component
(defn notification [{:keys [title message type]}]
  (when title
    [:div {:class (str "fixed top-20 right-4 p-4 rounded border-2 font-mono text-sm shadow-lg z-[2000] animate-pulse "
                       (case type
                         :success "bg-black border-green-500 text-green-400 shadow-green-500/50"
                         :error "bg-black border-red-500 text-red-400 shadow-red-500/50"
                         "bg-black border-yellow-500 text-yellow-400 shadow-yellow-500/50"))}
     [:div {:class "font-bold mb-1"} (str "> " title)]
     [:div message]
     [:button {:on-click #(rf/dispatch [:map/clear-notification])
               :class "absolute top-2 right-2 text-current hover:opacity-70"}
      "X"]]))

;; Route card component for horizontal scrolling
(defn saved-route-card [{:keys [route]}]
  [:div {:class "flex-shrink-0 w-80 bg-black border-2 border-green-500 rounded p-4 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-200 cursor-pointer group"}
   [:div {:on-click #(rf/dispatch [:map/focus-route route])
          :class "mb-3"}
    [:div {:class "font-mono text-green-400 font-bold mb-2 group-hover:text-green-300"}
     (str "> " (:srcIata route) " → " (:dstIata route))]
    [:div {:class "text-xs text-green-600 font-mono mb-1"}
     (str "SRC: " (get-in route [:srcAirport :name]))]
    [:div {:class "text-xs text-green-600 font-mono mb-1"}
     (str "DST: " (get-in route [:dstAirport :name]))]
    [:div {:class "text-xs text-green-700 font-mono"}
     (str "AIRLINE: " (:airline route))]]
   [:button {:on-click (fn [e]
                         (.stopPropagation e)
                         (rf/dispatch [:map/remove-route route]))
             :class "w-full px-3 py-2 bg-red-900 text-red-400 border border-red-500 rounded text-xs font-mono hover:bg-red-800 hover:text-red-300 transition-all duration-200 uppercase tracking-wider"}
    "> DELETE"]])

;; Shared styles (keeping for backwards compatibility)
(def panel-style
  {:position "absolute"
   :z-index 1000
   :background "rgba(0,0,0,0.98)"
   :padding "20px"
   :border-radius "8px"
   :box-shadow "0 4px 16px rgba(0,255,0,0.2)"
   :max-height "80vh"
   :overflow-y "auto"})

(def button-style
  {:padding "6px 12px"
   :border "none"
   :border-radius "4px"
   :cursor "pointer"
   :font-size "12px"
   :font-weight "500"})
