(ns map.core
  (:require 
    [re-frame.core :as rf]
    [reagent.dom.client :as rdc]
    [map.events]
    [map.subs]
    [map.views :as views]))

(defonce root (rdc/create-root (.getElementById js/document "app")))

(defn mount-root []
  (rf/dispatch-sync [:initialize])
  (rdc/render root [views/main-view]))

(defn ^:export init []
  (mount-root))

(defn ^:dev/after-load reload []
  (mount-root))
