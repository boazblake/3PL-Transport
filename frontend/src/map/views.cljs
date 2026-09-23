(ns map.views
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [map.views.add-route :as add-route]
            [map.views.globe :as globe]))

(defn main-view []
  [:div {:class "w-full h-screen bg-black flex flex-col"}
   (when (not (contains? #{"localhost" "127.0.0.1"} (.-hostname js/location)))
     [:div {:class "bg-yellow-950 border-b border-yellow-500 px-4 py-2 text-center text-yellow-300 text-xs font-mono"}
      "> DEMO MODE — routes and searches are saved in this browser only"])
   [add-route/route-selector]
   [:div {:class "flex-1 relative"}
    [globe/globe-view-wrapper]]
   [add-route/saved-routes-panel]])
