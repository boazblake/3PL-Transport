(ns map.views
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [map.views.add-route :as add-route]
            [map.views.globe :as globe]))

(defn main-view []
  [:div {:class "w-full h-screen bg-black flex flex-col"}
   [add-route/route-selector]
   [:div {:class "flex-1 relative"}
    [globe/globe-view-wrapper]]
   [add-route/saved-routes-panel]])
