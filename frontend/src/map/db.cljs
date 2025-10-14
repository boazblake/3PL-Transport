(ns map.db)

(def default-db
  {:map/center {:lat 37.7749 :lng -122.4194}
   :map/zoom 12
   :map/search ""
   :map/history []
   :map/routes []
   :map/available-routes []
   :map/show-route-picker false
   :map/loading-routes false
   :map/selected-route nil
   :map/notification nil
   :map/globe-instance nil
   :map/route-form {:src "" :dst ""}})
