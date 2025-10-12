(ns map.subs
  (:require [re-frame.core :as rf]))

; ;; Clear existing subscriptions to prevent overwriting warnings
; (rf/clear-sub :map/notification)
; (rf/clear-sub :map/available-routes)
; (rf/clear-sub :map/center)
; (rf/clear-sub :map/zoom)
; (rf/clear-sub :map/search)
; (rf/clear-sub :map/history)
; (rf/clear-sub :map/routes)
; (rf/clear-sub :map/show-route-picker)
; (rf/clear-sub :map/loading-routes)
; (rf/clear-sub :map/selected-route)

(rf/reg-sub
 :map/notification
 (fn [db _]
   (:notification db)))

(rf/reg-sub
 :map/available-routes
 (fn [db _]
   (:available-routes db [])))

(rf/reg-sub
 :map/center
 (fn [db _]
   (get-in db [:map :center] {})))

(rf/reg-sub
 :map/zoom
 (fn [db _]
   (get-in db [:map :zoom] 4)))

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
   (:routes db [])))

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
