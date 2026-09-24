(ns map.views.globe
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [map.views.globe-utils :as globe-utils]))

;; Custom effect for animation frame management
(rf/reg-fx
 :animation-frame
 (fn [{:keys [action frame-id]}]
   (case action
     :start (when frame-id @frame-id)
     :stop (when frame-id
             (js/cancelAnimationFrame @frame-id)
             (reset! frame-id nil))
     nil)))

;; Globe lifecycle events
(rf/reg-event-fx
 :globe/init
 (fn [{:keys [db]} _]
   (try
     (let [{:keys [globe ellipsoid collection LonLat Entity]} (globe-utils/init-globe)]
       {:db (assoc db
                  :globe/instance globe
                  :globe/ellipsoid ellipsoid
                  :globe/collection collection
                  :globe/LonLat LonLat
                  :globe/Entity Entity
                  :globe/initialized? true)
        :fx [[:dispatch [:map/fetch-saved-routes]]]})
     (catch :default e
       (js/console.error "Error initializing globe:" e)
       {:db (assoc db :globe/error "Failed to initialize globe")}))))

(rf/reg-event-fx
 :globe/destroy
 (fn [{:keys [db]} _]
   (let [globe (get db :globe/instance)
         collection (get db :globe/collection)]
     (try
       (globe-utils/destroy-globe globe collection)
       {:db (dissoc db
                   :globe/instance
                   :globe/ellipsoid
                   :globe/collection
                   :globe/LonLat
                   :globe/Entity
                   :globe/initialized?
                   :globe/animation-state)
        :animation-frame {:action :stop :frame-id (:globe/animation-frame-id db)}}
       (catch :default e
         (js/console.error "Error destroying globe:" e)
         {:db db})))))

(rf/reg-event-fx
 :globe/render-routes
 (fn [{:keys [db]} [_ routes]]
   (let [globe (get db :globe/instance)
         ellipsoid (get db :globe/ellipsoid)
         collection (get db :globe/collection)
         initialized? (get db :globe/initialized?)]
     
     (if (and initialized? globe collection (seq routes))
       (try
         (let [num-segments 70
               render-result (globe-utils/render-routes globe ellipsoid collection routes num-segments)]
           (if (and render-result (:entities render-result))
             {:db (assoc db :globe/animation-state
                        {:entities (:entities render-result)
                         :anim-index (:anim-index render-result)
                         :num-segments num-segments})
              :fx [[:dispatch [:globe/start-animation]]]}
             {:db db}))
         (catch :default e
           (js/console.error "Error rendering routes:" e)
           {:db db}))
       {:db db}))))

(rf/reg-event-fx
 :globe/start-animation
 (fn [{:keys [db]} _]
   (let [{:keys [entities anim-index num-segments]} (get db :globe/animation-state)
         frame-id-atom (r/atom nil)]
     
     (when entities
       (globe-utils/animate-routes entities anim-index num-segments frame-id-atom)
       {:db (assoc db :globe/animation-frame-id frame-id-atom)}))))

(rf/reg-event-fx
 :globe/stop-animation
 (fn [{:keys [db]} _]
   (let [frame-id (get db :globe/animation-frame-id)]
     {:animation-frame {:action :stop :frame-id frame-id}
      :db (dissoc db :globe/animation-frame-id)})))

;; Subscriptions
(rf/reg-sub
 :globe/initialized?
 (fn [db _]
   (get db :globe/initialized? false)))

(rf/reg-sub
 :globe/error
 (fn [db _]
   (get db :globe/error)))

;; Component
(defn globe-container []
  [:div#globe-container
   {:style {:width "100%" :height "100%"}}])

(defn globe-view []
  (r/create-class
   {:display-name "globe-view"
    
    :component-did-mount
    (fn [_]
      (js/setTimeout
       #(rf/dispatch [:globe/init])
       100))
    
    :component-will-unmount
    (fn [_]
      (rf/dispatch [:globe/stop-animation])
      (rf/dispatch [:globe/destroy]))
    
    :reagent-render
    (fn []
      [globe-container])}))

(defn globe-view-wrapper []
  (let [routes @(rf/subscribe [:map/routes])
        initialized? @(rf/subscribe [:globe/initialized?])
        error @(rf/subscribe [:globe/error])]
    
    ;; Render routes when they change and globe is ready
    (when (and initialized? (seq routes))
      (rf/dispatch [:globe/render-routes routes]))
    
    (if error
      [:div {:class "flex items-center justify-center h-full text-red-400"}
       [:p error]]
      [globe-view])))
