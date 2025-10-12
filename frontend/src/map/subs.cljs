(ns map.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :map/center
 (fn [db _]
   (get-in db [:map :center])))

(rf/reg-sub
 :map/zoom
 (fn [db _]
   (get-in db [:map :zoom])))

(rf/reg-sub
 :map/search
 (fn [db _]
   (get-in db [:map :search] "")))

(rf/reg-sub
 :map/history
 (fn [db _]
   (get-in db [:map :history] [])))

(rf/reg-sub
 :map/routes
 (fn [db _]
   (get-in db [:map :routes] [])))

(rf/reg-sub
 :map/available-routes
 (fn [db _]
   (get-in db [:map :available-routes] [])))

(rf/reg-sub
 :map/show-route-picker
 (fn [db _]
   (get-in db [:map :show-route-picker] false)))

(rf/reg-sub
 :map/loading-routes
 (fn [db _]
   (get-in db [:map :loading-routes] false)))

(rf/reg-sub
 :map/selected-route
 (fn [db _]
   (get-in db [:map :selected-route])))
