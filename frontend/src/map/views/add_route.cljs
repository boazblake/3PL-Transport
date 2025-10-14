(ns map.views.add-route
  (:require [re-frame.core :as rf]
            [map.views.components :as components]))

(defn- airport-option [{:keys [iata name]}]
  [:option {:value iata} (str "> " name " [" iata "]")])

(defn- airport-select
  [{:keys [value on-change airports label placeholder disabled?]}]
  [:div {:class "flex-1"}
   [:label {:class "block text-green-400 text-sm font-mono mb-2 uppercase tracking-wider"}
    label]
   [:select {:value value
             :on-change on-change
             :disabled disabled?
             :class "w-full p-3 bg-black border-2 border-green-500 text-green-400 font-mono rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 shadow-inner shadow-green-500/20 disabled:opacity-50"}
    [:option {:value "" :disabled true} placeholder]
    (for [airport airports]
      ^{:key (:iata airport)}
      [airport-option airport])]])

(defn route-form []
  (let [loading? @(rf/subscribe [:map/loading-routes])
        src-iata @(rf/subscribe [:map/route-form-src])
        dst-iata @(rf/subscribe [:map/route-form-dst])
        can-submit? (and (seq src-iata) (seq dst-iata) (not loading?))
        
        ;; Use filtered subscriptions
        src-airports @(rf/subscribe [:map/filtered-source-airports dst-iata])
        dst-airports @(rf/subscribe [:map/filtered-dest-airports src-iata])
        
        handle-src-change #(rf/dispatch [:map/update-route-form-src (.. % -target -value)])
        handle-dst-change #(rf/dispatch [:map/update-route-form-dst (.. % -target -value)])
        handle-submit #(when can-submit?
                        (rf/dispatch [:map/create-route src-iata dst-iata]))]
    
    [:div {:class "flex flex-col md:flex-row gap-4 items-end"}
     [airport-select
      {:value src-iata
       :on-change handle-src-change
       :airports src-airports
       :label "Source Airport"
       :placeholder "> SELECT SOURCE_"
       :disabled? loading?}]
     
     [airport-select
      {:value dst-iata
       :on-change handle-dst-change
       :airports dst-airports
       :label "Destination Airport"
       :placeholder "> SELECT DESTINATION_"
       :disabled? loading?}]
     
     [:button
      {:on-click handle-submit
       :disabled (not can-submit?)
       :class "px-8 py-3 bg-green-500 text-black font-mono font-bold uppercase tracking-wider rounded hover:bg-green-400 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-green-500/50 hover:shadow-green-400/70 border-2 border-green-400"}
      (if loading? "> CREATING..." "> CREATE ROUTE")]]))

(defn route-selector []
  (let [notification @(rf/subscribe [:map/notification])]
    [:div {:class "w-full bg-black border-b-2 border-green-500 shadow-lg shadow-green-500/50"}
     [:div {:class "max-w-7xl mx-auto px-4 py-6"}
      [route-form]]
     (when notification
       [components/notification notification])]))

(defn saved-routes-panel []
  (let [routes @(rf/subscribe [:map/routes])
        route-count @(rf/subscribe [:map/route-count])]
    (when (pos? route-count)
      [:div {:class "fixed bottom-0 left-0 right-0 bg-black border-t-2 border-green-500 shadow-lg shadow-green-500/50 z-[1000]"}
       [:div {:class "px-4 py-4"}
        [:h3 {:class "text-green-400 font-mono text-sm mb-3 uppercase tracking-wider"}
         (str "> SAVED ROUTES [" route-count "]")]
        [:div {:class "flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-900"}
         (for [route routes]
           ^{:key (str (:srcIata route) "-" (:dstIata route) "-" (:airline route))}
           [components/saved-route-card route])]]])))
