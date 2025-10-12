(ns map.views.add-route
  (:require [re-frame.core :as rf]
            [reagent.core :as r]
            [map.views.components :as components]))

(def state (r/atom {:src-iata "" :dst-iata ""}))

;; Subscribe to reset event
(rf/reg-event-db
 :map/route-form-reset
 (fn [db _]
   (reset! state {:src-iata "" :dst-iata ""})
   db))

(defn route-selector []
  (let [available-routes @(rf/subscribe [:map/available-routes])
        loading? @(rf/subscribe [:map/loading-routes])
        airports (if (seq available-routes)
                   (->> available-routes
                        (sort-by :name))
                   [])
        ;; Filter destination airports to exclude selected source
        dest-airports (if (seq (:src-iata @state))
                        (filter #(not= (:iata %) (:src-iata @state)) airports)
                        airports)
        ;; Filter source airports to exclude selected destination
        src-airports (if (seq (:dst-iata @state))
                       (filter #(not= (:iata %) (:dst-iata @state)) airports)
                       airports)]
    [:div {:class "w-full bg-black border-b-2 border-green-500 shadow-lg shadow-green-500/50"}
     [:div {:class "max-w-7xl mx-auto px-4 py-6"}
      [:div {:class "flex flex-col md:flex-row gap-4 items-end"}
       ;; Source Airport
       [:div {:class "flex-1"}
        [:label {:class "block text-green-400 text-sm font-mono mb-2 uppercase tracking-wider"}
         "Source Airport"]
        [:select {:value (:src-iata @state)
                  :on-change (fn [e]
                               (let [value (.-value (.-target e))]
                                 (swap! state assoc :src-iata value)))
                  :class "w-full p-3 bg-black border-2 border-green-500 text-green-400 font-mono rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 shadow-inner shadow-green-500/20"}
         [:option {:value "" :disabled true} "> SELECT SOURCE_"]
         (doall
          (for [{:keys [iata name]} src-airports]
            ^{:key iata}
            [:option {:value iata} (str "> " name " [" iata "]")]))]]
       
       ;; Destination Airport
       [:div {:class "flex-1"}
        [:label {:class "block text-green-400 text-sm font-mono mb-2 uppercase tracking-wider"}
         "Destination Airport"]
        [:select {:value (:dst-iata @state)
                  :on-change (fn [e]
                               (let [value (.-value (.-target e))]
                                 (swap! state assoc :dst-iata value)))
                  :class "w-full p-3 bg-black border-2 border-green-500 text-green-400 font-mono rounded focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 shadow-inner shadow-green-500/20"}
         [:option {:value "" :disabled true} "> SELECT DESTINATION_"]
         (doall
          (for [{:keys [iata name]} dest-airports]
            ^{:key iata}
            [:option {:value iata} (str "> " name " [" iata "]")]))]]
       
       ;; Create Button
       [:button
        {:on-click (fn []
                     (when (and (seq (:src-iata @state)) (seq (:dst-iata @state)))
                       (rf/dispatch [:map/create-simple-route (:src-iata @state) (:dst-iata @state)])))
         :disabled (or (empty? (:src-iata @state)) (empty? (:dst-iata @state)) loading?)
         :class "px-8 py-3 bg-green-500 text-black font-mono font-bold uppercase tracking-wider rounded hover:bg-green-400 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed transition-all duration-200 shadow-lg shadow-green-500/50 hover:shadow-green-400/70 border-2 border-green-400"}
        (if loading? "> CREATING..." "> CREATE ROUTE")]]]
     
     [components/notification @(rf/subscribe [:map/notification])]]))

(defn saved-routes-panel []
  (let [saved-routes @(rf/subscribe [:map/routes])]
    (when (seq saved-routes)
      [:div {:class "fixed bottom-0 left-0 right-0 bg-black border-t-2 border-green-500 shadow-lg shadow-green-500/50 z-[1000]"}
       [:div {:class "px-4 py-4"}
        [:h3 {:class "text-green-400 font-mono text-sm mb-3 uppercase tracking-wider"}
         (str "> SAVED ROUTES [" (count saved-routes) "]")]
        [:div {:class "flex gap-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-900"}
         (doall
          (for [route saved-routes]
            ^{:key (str (:srcIata route) "-" (:dstIata route) "-" (:airline route))}
            [components/saved-route-card {:route route}]))]]])))
