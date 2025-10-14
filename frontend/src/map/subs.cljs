(ns map.subs
  (:require [re-frame.core :as rf]))

;; Layer 2: Direct subscriptions
(rf/reg-sub
 :map/notification
 (fn [db _]
   (:map/notification db)))

(rf/reg-sub
 :map/available-routes
 (fn [db _]
   (:map/available-routes db [])))

(rf/reg-sub
 :map/center
 (fn [db _]
   (:map/center db)))

(rf/reg-sub
 :map/zoom
 (fn [db _]
   (:map/zoom db 4)))

(rf/reg-sub
 :map/search
 (fn [db _]
   (:map/search db "")))

(rf/reg-sub
 :map/history
 (fn [db _]
   (:map/history db [])))

(rf/reg-sub
 :map/routes
 (fn [db _]
   (:map/routes db [])))

(rf/reg-sub
 :map/show-route-picker
 (fn [db _]
   (:map/show-route-picker db false)))

(rf/reg-sub
 :map/loading-routes
 (fn [db _]
   (:map/loading-routes db false)))

(rf/reg-sub
 :map/selected-route
 (fn [db _]
   (:map/selected-route db)))

(rf/reg-sub
 :map/globe-instance
 (fn [db _]
   (:map/globe-instance db)))

;; Layer 3: Derived subscriptions
(rf/reg-sub
 :map/sorted-airports
 :<- [:map/available-routes]
 (fn [routes _]
   (sort-by :name routes)))

(rf/reg-sub
 :map/filtered-source-airports
 :<- [:map/sorted-airports]
 (fn [airports [_ excluded-iata]]
   (if (seq excluded-iata)
     (filter #(not= (:iata %) excluded-iata) airports)
     airports)))

(rf/reg-sub
 :map/filtered-dest-airports
 :<- [:map/sorted-airports]
 (fn [airports [_ excluded-iata]]
   (if (seq excluded-iata)
     (filter #(not= (:iata %) excluded-iata) airports)
     airports)))

(rf/reg-sub
 :map/route-count
 :<- [:map/routes]
 (fn [routes _]
   (count routes)))

(rf/reg-sub
 :map/has-notification?
 :<- [:map/notification]
 (fn [notification _]
   (boolean notification)))

;; Route form subscriptions
(rf/reg-sub
 :map/route-form-src
 (fn [db _]
   (get-in db [:map/route-form :src] "")))

(rf/reg-sub
 :map/route-form-dst
 (fn [db _]
   (get-in db [:map/route-form :dst] "")))
