(ns map.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [map.db :as db]))

(def backend-url "http://localhost:8080")
(def storage-key "map-demo-routes")
(def history-storage-key "map-demo-search-history")

(defn- demo-mode? []
  (not (contains? #{"localhost" "127.0.0.1"} (.-hostname js/location))))

(defn- read-storage [key fallback]
  (try
    (if-let [value (.getItem (.-localStorage js/window) key)]
      (js->clj (js/JSON.parse value) :keywordize-keys true)
      fallback)
    (catch :default _ fallback)))

(defn- write-storage! [key value]
  (.setItem (.-localStorage js/window) key (js/JSON.stringify (clj->js value))))

(defn- airport-by-iata [airports iata]
  (first (filter #(= (:iata %) iata) airports)))

(defn- demo-route [src dst]
  {:airline "DEMO-AIR"
   :airlineId "DEMO-AIR"
   :srcIata (:iata src)
   :srcAirportId ""
   :dstIata (:iata dst)
   :dstAirportId ""
   :codeshare ""
   :stops "0"
   :equipment "Demo"
   :srcAirport src
   :dstAirport dst})

;; Coeffects
(rf/reg-cofx
 :now
 (fn [coeffects _]
   (assoc coeffects :now (js/Date.))))

;; Helper functions
(defn- http-get [uri on-success on-failure]
  {:method :get
   :uri uri
   :response-format (ajax/json-response-format {:keywords? true})
   :on-success on-success
   :on-failure on-failure})

(defn- http-post [uri params on-success on-failure]
  {:method :post
   :uri uri
   :params params
   :format (ajax/json-request-format)
   :response-format (ajax/json-response-format {:keywords? true})
   :on-success on-success
   :on-failure on-failure})

(defn- http-delete [uri on-success on-failure]
  {:method :delete
   :uri uri
   :format (ajax/url-request-format)
   :response-format (ajax/json-response-format {:keywords? true})
   :on-success on-success
   :on-failure on-failure})

(defn- show-notification [db title message type]
  (assoc db :map/notification {:title title :message message :type type}))

(defn- clear-notification [db]
  (dissoc db :map/notification))

(defn- start-loading [db]
  (assoc db :map/loading-routes true))

(defn- stop-loading [db]
  (assoc db :map/loading-routes false))

;; Initialize
(rf/reg-event-fx
 :initialize
 (fn [_ _]
   (if (demo-mode?)
     {:db (assoc db/default-db :map/available-routes db/demo-airports)
      :fx [[:dispatch [:map/fetch-search-history]]
           [:dispatch [:map/fetch-saved-routes]]]}
     {:db db/default-db
      :fx [[:dispatch [:map/fetch-initial-data]]
           [:dispatch [:map/fetch-search-history]]
           [:dispatch [:map/fetch-saved-routes]]
           [:dispatch [:map/fetch-available-routes]]]})))

;; Map data events
(rf/reg-event-fx
 :map/fetch-initial-data
 (fn [{:keys [db]} _]
   {:db db
    :http-xhrio (http-get 
                 (str backend-url "/map")
                 [:map/set-initial-data]
                 [:map/http-error "Failed to fetch map data"])}))

(rf/reg-event-db
 :map/set-initial-data
 (fn [db [_ {:keys [lat lng zoom]}]]
   (-> db
       (assoc :map/center {:lat lat :lng lng})
       (assoc :map/zoom zoom))))

;; Search history events
(rf/reg-event-fx
 :map/fetch-search-history
 (fn [{:keys [db]} _]
   (if (demo-mode?)
     {:db (assoc db :map/history (read-storage history-storage-key []))}
     {:db db
      :http-xhrio (http-get
                   (str backend-url "/search-history")
                   [:map/set-search-history]
                   [:map/http-error "Failed to fetch search history"])})))

(rf/reg-event-db
 :map/set-search-history
 (fn [db [_ history]]
   (assoc db :map/history history)))

(rf/reg-event-db
 :map/update-search
 (fn [db [_ search-text]]
   (assoc db :map/search search-text)))

;; Geocoding events
(rf/reg-event-fx
 :map/search-location
 (fn [_ [_ search-text]]
   (when (seq search-text)
     {:fx [[:dispatch [:map/geocode search-text]]]})))

(rf/reg-event-fx
 :map/geocode
 (fn [_ [_ location]]
   (when (seq location)
     {:http-xhrio (http-get
                   (str "https://nominatim.openstreetmap.org/search?format=json&q="
                        (js/encodeURIComponent location))
                   [:map/geocode-success location]
                   [:map/http-error "Geocoding failed"])})))

(rf/reg-event-fx
 :map/geocode-success
 [(rf/inject-cofx :now)]
 (fn [{:keys [db now]} [_ location results]]
   (if-let [result (first results)]
     (let [lat (js/parseFloat (:lat result))
           lng (js/parseFloat (:lon result))]
       {:fx [[:dispatch [:map/set-center {:lat lat :lng lng}]]
             [:dispatch [:map/set-zoom 13]]
             [:dispatch [:map/save-search location lat lng (.toISOString now)]]]})
     {:db (show-notification db "Error" "No results found" :error)})))

(rf/reg-event-fx
 :map/save-search
 (fn [{:keys [db]} [_ location lat lng timestamp]]
   (if (demo-mode?)
     (let [history (conj (:map/history db) {:location location :lat lat :lng lng :timestamp timestamp})]
       (write-storage! history-storage-key history)
       {:db (assoc db :map/history history)})
     {:db db
      :http-xhrio (http-post
                   (str backend-url "/search")
                   {:location location :lat lat :lng lng :timestamp timestamp}
                   [:map/fetch-search-history]
                   [:map/http-error "Failed to save search"])})))

;; Map view events
(rf/reg-event-db
 :map/set-center
 (fn [db [_ center]]
   (assoc db :map/center center)))

(rf/reg-event-db
 :map/set-zoom
 (fn [db [_ zoom]]
   (assoc db :map/zoom zoom)))

;; Route management events
(rf/reg-event-fx
 :map/fetch-available-routes
 (fn [{:keys [db]} _]
   {:db (start-loading db)
    :http-xhrio (http-get
                 (str backend-url "/routes/available")
                 [:map/set-available-routes]
                 [:map/fetch-airports-fallback])}))

(rf/reg-event-db
 :map/set-available-routes
 (fn [db [_ routes]]
   (-> db
       (assoc :map/available-routes routes)
       stop-loading)))

(rf/reg-event-fx
 :map/fetch-airports-fallback
 (fn [{:keys [db]} _]
   {:db (-> db
            (show-notification "Warning" "Using airport fallback" :warning)
            start-loading)
    :http-xhrio (http-get
                 (str backend-url "/airports")
                 [:map/set-fallback-airports]
                 [:map/http-error "Failed to fetch airports"])}))

(rf/reg-event-db
 :map/set-fallback-airports
 (fn [db [_ airports]]
   (-> db
       (assoc :map/available-routes airports)
       stop-loading)))

(defn- default-demo-routes []
  [(demo-route (airport-by-iata db/demo-airports "SFO")
               (airport-by-iata db/demo-airports "JFK"))
   (demo-route (airport-by-iata db/demo-airports "LHR")
               (airport-by-iata db/demo-airports "NRT"))])

(rf/reg-event-fx
 :map/fetch-saved-routes
 (fn [{:keys [db]} _]
   (if (demo-mode?)
     {:db (assoc (stop-loading db) :map/routes
                 (read-storage storage-key (default-demo-routes)))}
     {:db (start-loading db)
      :http-xhrio (http-get
                   (str backend-url "/routes")
                   [:map/set-saved-routes]
                   [:map/http-error "Failed to fetch routes"])})))

(rf/reg-event-db
 :map/set-saved-routes
 (fn [db [_ routes]]
   (-> db
       (assoc :map/routes routes)
       stop-loading)))

(rf/reg-event-db
 :map/toggle-route-picker
 (fn [db _]
   (update db :map/show-route-picker not)))

;; Create route events
(rf/reg-event-fx
 :map/create-route
 (fn [{:keys [db]} [_ src-iata dst-iata]]
   (if (demo-mode?)
     (let [src (airport-by-iata (:map/available-routes db) src-iata)
           dst (airport-by-iata (:map/available-routes db) dst-iata)
           route (demo-route src dst)
           routes (if (some #(and (= src-iata (:srcIata %)) (= dst-iata (:dstIata %))) (:map/routes db))
                    (:map/routes db)
                    (conj (:map/routes db) route))]
       (write-storage! storage-key routes)
       {:db (-> db
                (assoc :map/routes routes)
                (assoc :map/route-form {:src "" :dst ""})
                stop-loading
                (show-notification "Success" "Demo route saved in this browser" :success))})
     {:db (start-loading db)
      :http-xhrio (http-post
                   (str backend-url "/routes/new")
                   {:srcIata src-iata :dstIata dst-iata}
                   [:map/create-route-success]
                   [:map/http-error "Failed to create route"])})))

(rf/reg-event-fx
 :map/create-route-success
 (fn [{:keys [db]} [_ response]]
   {:db (-> db
            stop-loading
            (show-notification "Success" (:message response) :success))
    :fx [[:dispatch [:map/fetch-saved-routes]]
         [:dispatch [:map/reset-route-form]]
         [:dispatch-later {:ms 5000 :dispatch [:map/clear-notification]}]]}))

;; Save picked route
(rf/reg-event-fx
 :map/save-picked-route
 (fn [{:keys [db]} [_ route]]
   {:db (start-loading db)
    :http-xhrio (http-post
                 (str backend-url "/routes")
                 route
                 [:map/save-picked-route-success]
                 [:map/http-error "Failed to save route"])}))

(rf/reg-event-fx
 :map/save-picked-route-success
 (fn [{:keys [db]} _]
   {:db (-> db
            stop-loading
            (show-notification "Success" "Route saved successfully" :success))
    :fx [[:dispatch [:map/fetch-saved-routes]]
         [:dispatch-later {:ms 5000 :dispatch [:map/clear-notification]}]]}))

;; Remove route events
(rf/reg-event-fx
 :map/remove-route
 (fn [{:keys [db]} [_ {:keys [srcIata dstIata airline]}]]
   (if (demo-mode?)
     (let [routes (filterv #(not (and (= srcIata (:srcIata %))
                                      (= dstIata (:dstIata %))
                                      (= airline (:airline %)))) (:map/routes db))]
       (write-storage! storage-key routes)
       {:db (-> db
                (assoc :map/routes routes)
                stop-loading
                (show-notification "Success" "Demo route removed" :success))})
     {:db (start-loading db)
      :http-xhrio (http-delete
                   (str backend-url "/routes"
                        "?srcIata=" (js/encodeURIComponent srcIata)
                        "&dstIata=" (js/encodeURIComponent dstIata)
                        "&airline=" (js/encodeURIComponent airline))
                   [:map/remove-route-success]
                   [:map/http-error "Failed to remove route"])})))

(rf/reg-event-fx
 :map/remove-route-success
 (fn [{:keys [db]} _]
   {:db (-> db
            stop-loading
            (show-notification "Success" "Route removed successfully" :success))
    :fx [[:dispatch [:map/fetch-saved-routes]]
         [:dispatch-later {:ms 5000 :dispatch [:map/clear-notification]}]]}))

;; Focus route
(rf/reg-event-fx
 :map/focus-route
 (fn [{:keys [db]} [_ route]]
   (let [src-lat (-> route :srcAirport :lat js/parseFloat)
         src-lng (-> route :srcAirport :lng js/parseFloat)
         dst-lat (-> route :dstAirport :lat js/parseFloat)
         dst-lng (-> route :dstAirport :lng js/parseFloat)
         center-lat (/ (+ src-lat dst-lat) 2)
         center-lng (/ (+ src-lng dst-lng) 2)]
     {:db (assoc db :map/selected-route route)
      :fx [[:dispatch [:map/set-center {:lat center-lat :lng center-lng}]]
           [:dispatch [:map/set-zoom 5]]]})))

;; Notification events
(rf/reg-event-db
 :map/clear-notification
 (fn [db _]
   (clear-notification db)))

;; Globe instance
(rf/reg-event-db
 :map/set-globe-instance
 (fn [db [_ globe]]
   (assoc db :map/globe-instance globe)))

;; Form reset
(rf/reg-event-db
 :map/reset-route-form
 (fn [db _]
   (assoc db :map/route-form {:src "" :dst ""})))

(rf/reg-event-db
 :map/update-route-form-src
 (fn [db [_ value]]
   (assoc-in db [:map/route-form :src] value)))

(rf/reg-event-db
 :map/update-route-form-dst
 (fn [db [_ value]]
   (assoc-in db [:map/route-form :dst] value)))

;; Error handling
(rf/reg-event-db
 :map/http-error
 (fn [db [_ message error]]
   (-> db
       stop-loading
       (show-notification "Error" message :error))))
