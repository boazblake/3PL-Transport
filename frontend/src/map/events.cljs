(ns map.events
  (:require [re-frame.core :as rf]
            [ajax.core :refer [GET POST DELETE json-response-format json-request-format url-request-format]]
            [day8.re-frame.http-fx]
            [map.db :as db]))

(def backend-url "http://localhost:8080")

; ;; Clear existing handlers to prevent overwriting warnings
; (rf/clear-event :initialize)
; (rf/clear-event :map/fetch-initial-data)
; (rf/clear-event :map/set-initial-data)
; (rf/clear-event :map/fetch-search-history)
; (rf/clear-event :map/set-search-history)
; (rf/clear-event :map/update-search)
; (rf/clear-event :map/search-location)
; (rf/clear-event :map/geocode)
; (rf/clear-event :map/geocode-success)
; (rf/clear-event :map/save-search)
; (rf/clear-event :map/set-center)
; (rf/clear-event :map/set-zoom)
; (rf/clear-event :map/fetch-available-routes)
; (rf/clear-event :map/set-available-routes)
; (rf/clear-event :map/fetch-saved-routes)
; (rf/clear-event :map/set-saved-routes)
; (rf/clear-event :map/set-error)
; (rf/clear-event :map/toggle-route-picker)
; (rf/clear-event :map/save-picked-route)
; (rf/clear-event :map/remove-route)
; (rf/clear-event :map/create-simple-route)
; (rf/clear-event :map/create-simple-route-success)
; (rf/clear-event :map/create-simple-route-failure)
; (rf/clear-event :map/clear-notification)
; (rf/clear-event :map/focus-route)
; (rf/clear-event :map/set-globe-instance)
; (rf/clear-event :map/fetch-airports-fallback)
; (rf/clear-event :map/set-fallback-airports)

(rf/reg-event-fx
 :initialize
 (fn [_ _]
   {:db db/default-db
    :fx [[:dispatch [:map/fetch-initial-data]]
         [:dispatch [:map/fetch-search-history]]
         [:dispatch [:map/fetch-saved-routes]]
         [:dispatch [:map/fetch-available-routes]]]}))

;; Fetch initial map data from backend
(rf/reg-event-fx
 :map/fetch-initial-data
 (fn [{:keys [db]} _]
   {:db db
    :http-xhrio {:method :get
                 :uri (str backend-url "/map")
                 :response-format (json-response-format {:keywords? true})
                 :on-success [:map/set-initial-data]
                 :on-failure [:map/set-error]}}))

(rf/reg-event-db
 :map/set-initial-data
 (fn [db [_ map-data]]
   (-> db
       (assoc-in [:map :center] {:lat (:lat map-data) :lng (:lng map-data)})
       (assoc-in [:map :zoom] (:zoom map-data)))))

;; Fetch search history from backend
(rf/reg-event-fx
 :map/fetch-search-history
 (fn [{:keys [db]} _]
   {:db db
    :http-xhrio {:method :get
                 :uri (str backend-url "/search-history")
                 :response-format (json-response-format {:keywords? true})
                 :on-success [:map/set-search-history]
                 :on-failure [:map/set-error]}}))

(rf/reg-event-db
 :map/set-search-history
 (fn [db [_ history]]
   (assoc-in db [:map :history] history)))

(rf/reg-event-db
 :map/update-search
 (fn [db [_ search-text]]
   (assoc-in db [:map :search] search-text)))

(rf/reg-event-fx
 :map/search-location
 (fn [{:keys [db]} [_ search-text]]
   {:db db
    :fx [[:dispatch [:map/geocode search-text]]]}))

;; Geocode and save to backend
(rf/reg-event-fx
 :map/geocode
 (fn [{:keys [db]} [_ location]]
   (when (seq location)
     {:http-xhrio {:method :get
                   :uri (str "https://nominatim.openstreetmap.org/search?format=json&q="
                             (js/encodeURIComponent location))
                   :response-format (json-response-format {:keywords? true})
                   :on-success [:map/geocode-success location]
                   :on-failure [:map/set-error]}})))

(rf/reg-event-fx
 :map/geocode-success
 (fn [{:keys [db]} [_ location results]]
   (if (> (count results) 0)
     (let [result (first results)
           lat (js/parseFloat (:lat result))
           lng (js/parseFloat (:lon result))]
       {:fx [[:dispatch [:map/set-center {:lat lat :lng lng}]]
             [:dispatch [:map/set-zoom 13]]
             [:dispatch [:map/save-search location lat lng]]]})
     {:db (assoc db :notification {:title "Error" :message "No geocoding results found" :type :error})})))

(rf/reg-event-fx
 :map/save-search
 (fn [{:keys [db]} [_ location lat lng]]
   {:db db
    :http-xhrio {:method :post
                 :uri (str backend-url "/search")
                 :params {:location location :lat lat :lng lng :timestamp (.toISOString (js/Date.))}
                 :format (json-request-format)
                 :response-format (json-response-format {:keywords? true})
                 :on-success [:map/fetch-search-history]
                 :on-failure [:map/set-error]}}))

(rf/reg-event-db
 :map/set-center
 (fn [db [_ center]]
   (assoc-in db [:map :center] center)))

(rf/reg-event-db
 :map/set-zoom
 (fn [db [_ zoom]]
   (assoc-in db [:map :zoom] zoom)))

;; Route Management Events
(rf/reg-event-fx
 :map/fetch-available-routes
 (fn [{:keys [db]} _]
   {:db (assoc db :loading-routes true)
    :http-xhrio {:method :get
                 :uri (str backend-url "/routes/available")
                 :response-format (json-response-format {:keywords? true})
                 :on-success [:map/set-available-routes]
                 :on-failure [:map/fetch-airports-fallback]}}))

(rf/reg-event-db
 :map/set-available-routes
 (fn [db [_ routes]]
   (assoc db :available-routes routes :loading-routes false)))

(rf/reg-event-fx
 :map/fetch-airports-fallback
 (fn [{:keys [db]} [_ _]]
   {:db (assoc db :notification {:title "Warning" :message "Failed to fetch routes, using airport fallback" :type :error}
                  :loading-routes true)
    :http-xhrio {:method :get
                 :uri (str backend-url "/airports")
                 :response-format (json-response-format {:keywords? true})
                 :on-success [:map/set-fallback-airports]
                 :on-failure [:map/set-error]}}))

(rf/reg-event-db
 :map/set-fallback-airports
 (fn [db [_ airports]]
   (assoc db :available-routes airports
             :loading-routes false)))

(rf/reg-event-fx
 :map/fetch-saved-routes
 (fn [{:keys [db]} _]
   {:db (assoc db :loading-routes true)
    :http-xhrio {:method :get
                 :uri (str backend-url "/routes")
                 :response-format (json-response-format {:keywords? true})
                 :on-success [:map/set-saved-routes]
                 :on-failure [:map/set-error]}}))

(rf/reg-event-db
 :map/set-saved-routes
 (fn [db [_ routes]]
   (assoc db :routes routes :loading-routes false)))

(rf/reg-event-db
 :map/set-error
 (fn [db [_ _]]
   (assoc db :notification {:title "Error" :message "Failed to perform operation" :type :error}
             :loading-routes false)))

(rf/reg-event-db
 :map/toggle-route-picker
 (fn [db _]
   (update-in db [:map :show-route-picker] not)))

(rf/reg-event-fx
 :map/save-picked-route
 (fn [{:keys [db]} [_ route]]
   {:db (assoc db :loading-routes true)
    :http-xhrio {:method :post
                 :uri (str backend-url "/routes")
                 :params route
                 :format (json-request-format)
                 :response-format (json-response-format {:keywords? true})
                 :on-success [:map/save-picked-route-success]
                 :on-failure [:map/set-error]}}))

(rf/reg-event-fx
 :map/save-picked-route-success
 (fn [{:keys [db]} [_ _]]
   {:db (assoc db :loading-routes false
                  :notification {:title "Success" :message "Route saved successfully" :type :success})
    :fx [[:dispatch [:map/fetch-saved-routes]]
         [:dispatch-later {:ms 5000 :dispatch [:map/clear-notification]}]]}))

(rf/reg-event-fx
 :map/remove-route
 (fn [{:keys [db]} [_ route]]
   (js/console.log "Attempting to remove route:" (clj->js route))
   {:db (assoc db :loading-routes true)
    :http-xhrio {:method :delete
                 :uri (str backend-url "/routes"
                           "?srcIata=" (js/encodeURIComponent (:srcIata route))
                           "&dstIata=" (js/encodeURIComponent (:dstIata route))
                           "&airline=" (js/encodeURIComponent (:airline route)))
                 :format (url-request-format)
                 :response-format (json-response-format {:keywords? true})
                 :on-success [:map/remove-route-success]
                 :on-failure [:map/remove-route-failure]}}))

(rf/reg-event-fx
 :map/remove-route-success
 (fn [{:keys [db]} [_ _]]
   (js/console.log "Route removed successfully")
   {:db (assoc db :loading-routes false
                  :notification {:title "Success" :message "Route removed successfully" :type :success})
    :fx [[:dispatch [:map/fetch-saved-routes]]
         [:dispatch-later {:ms 5000 :dispatch [:map/clear-notification]}]]}))

(rf/reg-event-db
 :map/remove-route-failure
 (fn [db [_ error]]
   (js/console.error "Failed to remove route:" error)
   (assoc db :loading-routes false
             :notification {:title "Error" 
                           :message (str "Failed to remove route: " 
                                        (or (get-in error [:response :message]) 
                                            "Unknown error")) 
                           :type :error})))

(rf/reg-event-fx
 :map/create-simple-route
 (fn [{:keys [db]} [_ src-iata dst-iata]]
   {:db (assoc db :loading-routes true)
    :http-xhrio {:method :post
                 :uri (str backend-url "/routes/new")
                 :params {:srcIata src-iata :dstIata dst-iata}
                 :format (json-request-format)
                 :response-format (json-response-format {:keywords? true})
                 :on-success [:map/create-simple-route-success]
                 :on-failure [:map/create-simple-route-failure]}}))

(rf/reg-event-fx
 :map/create-simple-route-success
 (fn [{:keys [db]} [_ response]]
   {:db (assoc db :loading-routes false
                  :notification {:title "Success" :message (:message response) :type :success})
    :fx [[:dispatch [:map/fetch-saved-routes]]
         [:dispatch [:map/reset-route-form]]
         [:dispatch-later {:ms 5000 :dispatch [:map/clear-notification]}]]}))


(rf/reg-event-fx
 :map/reset-route-form
 (fn [_ _]
   ;; This will trigger a custom event that the component can listen to
   {:dispatch [:map/route-form-reset]}))

(rf/reg-event-db
 :map/create-simple-route-failure
 (fn [db [_ _]]
   (assoc db :loading-routes false
             :notification {:title "Error" :message "Failed to create route" :type :error})))

(rf/reg-event-db
 :map/clear-notification
 (fn [db _]
   (dissoc db :notification)))

(rf/reg-event-fx
 :map/focus-route
 (fn [{:keys [db]} [_ route]]
   (let [src-lat (js/parseFloat (get-in route [:srcAirport :lat]))
         src-lng (js/parseFloat (get-in route [:srcAirport :lng]))
         dst-lat (js/parseFloat (get-in route [:dstAirport :lat]))
         dst-lng (js/parseFloat (get-in route [:dstAirport :lng]))
         center-lat (/ (+ src-lat dst-lat) 2)
         center-lng (/ (+ src-lng dst-lng) 2)]
     {:db (assoc-in db [:map :selected-route] route)
      :fx [[:dispatch [:map/set-center {:lat center-lat :lng center-lng}]]
           [:dispatch [:map/set-zoom 5]]]})))

(rf/reg-event-db
 :map/set-globe-instance
 (fn [db [_ globe]]
   (assoc db :globe-instance globe)))
