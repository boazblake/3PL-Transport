(ns map.db)

(def demo-airports
  [{:iata "SFO" :icao "KSFO" :lat "37.6189" :lng "-122.3750" :name "San Francisco International Airport"}
   {:iata "JFK" :icao "KJFK" :lat "40.6413" :lng "-73.7781" :name "John F. Kennedy International Airport"}
   {:iata "LHR" :icao "EGLL" :lat "51.4700" :lng "-0.4543" :name "London Heathrow Airport"}
   {:iata "NRT" :icao "RJAA" :lat "35.7720" :lng "140.3929" :name "Narita International Airport"}
   {:iata "SYD" :icao "YSSY" :lat "-33.9399" :lng "151.1753" :name "Sydney Kingsford Smith Airport"}
   {:iata "DXB" :icao "OMDB" :lat "25.2532" :lng "55.3657" :name "Dubai International Airport"}])

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
