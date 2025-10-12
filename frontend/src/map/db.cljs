(ns map.db)

(def default-db
  {:map {:center {:lat 37.7749 :lng -122.4194}
         :zoom 12
         :search ""
         :history []
         :routes []
         :available-routes []
         :show-route-picker false
         :loading-routes false
         :selected-route nil}})
