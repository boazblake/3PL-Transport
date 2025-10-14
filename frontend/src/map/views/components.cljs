(ns map.views.components
  (:require [re-frame.core :as rf]))

(defn- notification-class [type]
  (str "fixed top-20 right-4 p-4 rounded border-2 font-mono text-sm shadow-lg z-[2000] animate-pulse "
       (case type
         :success "bg-black border-green-500 text-green-400 shadow-green-500/50"
         :error "bg-black border-red-500 text-red-400 shadow-red-500/50"
         :warning "bg-black border-yellow-500 text-yellow-400 shadow-yellow-500/50"
         "bg-black border-blue-500 text-blue-400 shadow-blue-500/50")))

(defn notification [{:keys [title message type]}]
  (when title
    [:div {:class (notification-class type)}
     [:div {:class "font-bold mb-1"} (str "> " title)]
     [:div message]
     [:button {:on-click #(rf/dispatch [:map/clear-notification])
               :class "absolute top-2 right-2 text-current hover:opacity-70"}
      "X"]]))

(defn- route-info-line [label value]
  [:div {:class "text-xs text-green-600 font-mono mb-1"}
   (str label ": " value)])

(defn saved-route-card [route]
  (let [{:keys [srcIata dstIata airline srcAirport dstAirport]} route
        handle-focus #(rf/dispatch [:map/focus-route route])
        handle-delete #(do (.stopPropagation %)
                          (rf/dispatch [:map/remove-route route]))]
    [:div {:class "flex-shrink-0 w-80 bg-black border-2 border-green-500 rounded p-4 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/30 transition-all duration-200 cursor-pointer group"}
     [:div {:on-click handle-focus
            :class "mb-3"}
      [:div {:class "font-mono text-green-400 font-bold mb-2 group-hover:text-green-300"}
       (str "> " srcIata " → " dstIata)]
      [route-info-line "SRC" (:name srcAirport)]
      [route-info-line "DST" (:name dstAirport)]
      [route-info-line "AIRLINE" airline]]
     [:button {:on-click handle-delete
               :class "w-full px-3 py-2 bg-red-900 text-red-400 border border-red-500 rounded text-xs font-mono hover:bg-red-800 hover:text-red-300 transition-all duration-200 uppercase tracking-wider"}
      "> DELETE"]]))
