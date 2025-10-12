(ns map.views
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [map.views.add-route :as add-route]
            [map.views.globe :as globe]
            ))

(defn main-view []
  [:div {:style {:width "100%" :height "100vh" :position "relative"}}
   [add-route/route-picker-button]
   [add-route/route-picker-panel]
   [add-route/saved-routes-panel]
   [globe/globe-view-wrapper]])
