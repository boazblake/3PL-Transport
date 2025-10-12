(ns map.events
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]
            [day8.re-frame.http-fx]
            [map.db :as db]))

(def backend-url "http://localhost:8080")

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
   (-> (js/fetch (str backend-url "/map"))
       (.then #(.json ^js %))
       (.then (fn [data]
                (rf/dispatch [:map/set-initial-data 
                             {:lat (.-lat ^js data)
                              :lng (.-lng ^js data)
                              :zoom (.-zoom ^js data)}])))
       (.catch (fn [error]
                 (js/console.error "Failed to fetch initial data:" error))))
   {:db db}))

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
   (-> (js/fetch (str backend-url "/search-history"))
       (.then #(.json ^js %))
       (.then (fn [history]
                (rf/dispatch [:map/set-search-history (js->clj history :keywordize-keys true)])))
       (.catch (fn [error]
                 (js/console.error "Failed to fetch search history:" error))))
   {:db db}))

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
     (-> (js/fetch (str "https://nominatim.openstreetmap.org/search?format=json&q=" 
                        (js/encodeURIComponent location)))
         (.then #(.json ^js %))
         (.then (fn [results]
                  (when (> (.-length ^js results) 0)
                    (let [result (aget results 0)
                          lat (js/parseFloat (.-lat ^js result))
                          lng (js/parseFloat (.-lon ^js result))]
                      (rf/dispatch [:map/set-center {:lat lat :lng lng}])
                      (rf/dispatch [:map/set-zoom 13])
                      (rf/dispatch [:map/save-search location lat lng])))))
         (.catch (fn [error]
                   (js/console.error "Geocoding error:" error)))))
   {}))

;; Save search to backend
(rf/reg-event-fx
 :map/save-search
 (fn [{:keys [db]} [_ location lat lng]]
   (-> (js/fetch (str backend-url "/search")
                 (clj->js {:method "POST"
                           :headers {"Content-Type" "application/json"}
                           :body (js/JSON.stringify 
                                  (clj->js {:location location
                                           :lat lat
                                           :lng lng
                                           :timestamp (.toISOString (js/Date.))}))}))
       (.then #(.json ^js %))
       (.then (fn [response]
                (js/console.log "Search saved:" response)
                (rf/dispatch [:map/fetch-search-history])))
       (.catch (fn [error]
                 (js/console.error "Failed to save search:" error))))
   {:db db}))

(rf/reg-event-db
 :map/set-center
 (fn [db [_ center]]
   (assoc-in db [:map :center] center)))

(rf/reg-event-db
 :map/set-zoom
 (fn [db [_ zoom]]
   (assoc-in db [:map :zoom] zoom)))

;; ============================================
;; Route Management Events
;; ============================================

;; Fetch available routes from the backend (which fetches from OpenGlobus)
(rf/reg-event-fx
 :map/fetch-available-routes
 (fn [{:keys [db]} _]
   (js/console.log "Fetching available routes from backend")
   (-> (js/fetch (str backend-url "/routes/available"))
       (.then #(.json ^js %))
       (.then (fn [routes]
                (let [clj-routes (js->clj routes :keywordize-keys true)]
                  (js/console.log "Loaded routes:" (count clj-routes))
                  (rf/dispatch [:map/set-available-routes clj-routes]))))
       (.catch (fn [error]
                 (js/console.error "Failed to fetch available routes:" error))))
   {:db (assoc-in db [:map :loading-routes] true)}))

(rf/reg-event-db
 :map/set-available-routes
 (fn [db [_ routes]]
   (-> db
       (assoc-in [:map :available-routes] routes)
       (assoc-in [:map :loading-routes] false))))

;; Fetch saved routes from backend
(rf/reg-event-fx
 :map/fetch-saved-routes
 (fn [{:keys [db]} _]
   (-> (js/fetch (str backend-url "/routes"))
       (.then #(.json ^js %))
       (.then (fn [routes]
                (rf/dispatch [:map/set-saved-routes (js->clj routes :keywordize-keys true)])))
       (.catch (fn [error]
                 (js/console.error "Failed to fetch saved routes:" error))))
   {:db db}))

(rf/reg-event-db
 :map/set-saved-routes
 (fn [db [_ routes]]
   (assoc-in db [:map :routes] routes)))

;; Toggle route picker panel
(rf/reg-event-db
 :map/toggle-route-picker
 (fn [db _]
   (let [current-state (get-in db [:map :show-route-picker] false)]
     (js/console.log "Toggling route picker from:" current-state "to:" (not current-state))
     (assoc-in db [:map :show-route-picker] (not current-state)))))

;; Save a picked route to backend
(rf/reg-event-fx
 :map/save-picked-route
 (fn [{:keys [db]} [_ route]]
   (js/console.log "Saving route:" route)
   (-> (js/fetch (str backend-url "/routes")
                 (clj->js {:method "POST"
                           :headers {"Content-Type" "application/json"}
                           :body (js/JSON.stringify (clj->js route))}))
       (.then #(.json ^js %))
       (.then (fn [response]
                (js/console.log "Route saved successfully:" response)
                (rf/dispatch [:map/fetch-saved-routes])))
       (.catch (fn [error]
                 (js/console.error "Failed to save route:" error))))
   {:db db}))

;; Remove a saved route
(rf/reg-event-fx
 :map/remove-route
 (fn [{:keys [db]} [_ route]]
   (let [route-id (or (:id route) 
                     (str (:srcIata route) "-" (:dstIata route) "-" (:airline route)))
         url (str backend-url "/routes/" (js/encodeURIComponent route-id))]
     (js/console.log "Removing route with ID:" route-id)
     (-> (js/fetch url (clj->js {:method "DELETE"}))
         (.then (fn [response]
                  (if (.ok response)
                    (do
                      (js/console.log "Route removed successfully")
                      (rf/dispatch [:map/fetch-saved-routes]))
                    (throw (js/Error. (str "HTTP error: " (.status response)))))))
         (.catch (fn [error]
                   (js/console.error "Failed to remove route:" error)))))
   {:db db}))

;; Focus on a route (fly to it on the map)
(rf/reg-event-fx
 :map/focus-route
 (fn [{:keys [db]} [_ route]]
   (let [src-coords (:srcCoords route)
         dst-coords (:dstCoords route)
         center-lat (/ (+ (first src-coords) (first dst-coords)) 2)
         center-lng (/ (+ (second src-coords) (second dst-coords)) 2)]
     (rf/dispatch [:map/set-center {:lat center-lat :lng center-lng}])
     (rf/dispatch [:map/set-zoom 5]))
   {:db (assoc-in db [:map :selected-route] route)}))

(rf/reg-event-db
 :map/set-globe-instance
 (fn [db [_ globe]]
   (assoc db :globe-instance globe)))

(rf/reg-event-fx
 :map/fetch-routes
 (fn [{:keys [db]} _]
   {:db db
    :http-xhrio {:method :get
                 :uri "http://localhost:8080/routes"
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success [:map/fetch-routes-success]
                 :on-failure [:map/fetch-routes-failure]}}))

(rf/reg-event-db
 :map/fetch-routes-success
 (fn [db [_ routes]]
   (js/console.log "Fetched routes:" (clj->js routes))
   (assoc db :map/routes routes)))

(rf/reg-event-db
 :map/fetch-routes-failure
 (fn [db [_ error]]
   (js/console.error "Failed to fetch saved routes:" error)
   db))
