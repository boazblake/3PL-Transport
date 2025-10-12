goog.provide('map.events');
map.events.backend_url = "http://localhost:8080";
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),map.db.default_db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-initial-data","map/fetch-initial-data",253434473)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-search-history","map/fetch-search-history",-730975503)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-saved-routes","map/fetch-saved-routes",-489955777)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-available-routes","map/fetch-available-routes",-1015802652)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","fetch-initial-data","map/fetch-initial-data",253434473),(function (p__12417,_){
var map__12418 = p__12417;
var map__12418__$1 = cljs.core.__destructure_map(map__12418);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12418__$1,new cljs.core.Keyword(null,"db","db",993250759));
fetch([map.events.backend_url,"/map"].join('')).then((function (p1__12416_SHARP_){
return p1__12416_SHARP_.json();
})).then((function (data){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-initial-data","map/set-initial-data",-76694258),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"lat","lat",-580793929),data.lat,new cljs.core.Keyword(null,"lng","lng",1667213918),data.lng,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),data.zoom], null)], null));
})).catch((function (error){
return console.error("Failed to fetch initial data:",error);
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-initial-data","map/set-initial-data",-76694258),(function (db,p__12419){
var vec__12420 = p__12419;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420,(0),null);
var map_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(map_data),new cljs.core.Keyword(null,"lng","lng",1667213918),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(map_data)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(map_data));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","fetch-search-history","map/fetch-search-history",-730975503),(function (p__12424,_){
var map__12425 = p__12424;
var map__12425__$1 = cljs.core.__destructure_map(map__12425);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12425__$1,new cljs.core.Keyword(null,"db","db",993250759));
fetch([map.events.backend_url,"/search-history"].join('')).then((function (p1__12423_SHARP_){
return p1__12423_SHARP_.json();
})).then((function (history){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-search-history","map/set-search-history",-493174333),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(history,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null));
})).catch((function (error){
return console.error("Failed to fetch search history:",error);
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-search-history","map/set-search-history",-493174333),(function (db,p__12426){
var vec__12427 = p__12426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12427,(0),null);
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12427,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"history","history",-247395220)], null),history__$1);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","update-search","map/update-search",1172774819),(function (db,p__12430){
var vec__12431 = p__12430;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12431,(0),null);
var search_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12431,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"search","search",1564939822)], null),search_text);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","search-location","map/search-location",-51841215),(function (p__12434,p__12435){
var map__12436 = p__12434;
var map__12436__$1 = cljs.core.__destructure_map(map__12436);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12436__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12437 = p__12435;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(0),null);
var search_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12437,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","geocode","map/geocode",-771785669),search_text], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","geocode","map/geocode",-771785669),(function (p__12441,p__12442){
var map__12443 = p__12441;
var map__12443__$1 = cljs.core.__destructure_map(map__12443);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12443__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12444 = p__12442;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12444,(0),null);
var location__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12444,(1),null);
if(cljs.core.seq(location__$1)){
fetch(["https://nominatim.openstreetmap.org/search?format=json&q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(location__$1))].join('')).then((function (p1__12440_SHARP_){
return p1__12440_SHARP_.json();
})).then((function (results){
if((results.length > (0))){
var result = (results[(0)]);
var lat = parseFloat(result.lat);
var lng = parseFloat(result.lon);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-center","map/set-center",-1419951543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lng","lng",1667213918),lng], null)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-zoom","map/set-zoom",-538879925),(13)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","save-search","map/save-search",-2021441289),location__$1,lat,lng], null));
} else {
return null;
}
})).catch((function (error){
return console.error("Geocoding error:",error);
}));
} else {
}

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","save-search","map/save-search",-2021441289),(function (p__12448,p__12449){
var map__12450 = p__12448;
var map__12450__$1 = cljs.core.__destructure_map(map__12450);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12450__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12451 = p__12449;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451,(0),null);
var location__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451,(1),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451,(2),null);
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12451,(3),null);
fetch([map.events.backend_url,"/search"].join(''),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"location","location",1815599388),location__$1,new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(new Date()).toISOString()], null)))], null))).then((function (p1__12447_SHARP_){
return p1__12447_SHARP_.json();
})).then((function (response){
console.log("Search saved:",response);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-search-history","map/fetch-search-history",-730975503)], null));
})).catch((function (error){
return console.error("Failed to save search:",error);
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-center","map/set-center",-1419951543),(function (db,p__12454){
var vec__12455 = p__12454;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12455,(0),null);
var center = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12455,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"center","center",-748944368)], null),center);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-zoom","map/set-zoom",-538879925),(function (db,p__12458){
var vec__12459 = p__12458;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12459,(0),null);
var zoom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12459,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),zoom);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","fetch-available-routes","map/fetch-available-routes",-1015802652),(function (p__12463,_){
var map__12464 = p__12463;
var map__12464__$1 = cljs.core.__destructure_map(map__12464);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12464__$1,new cljs.core.Keyword(null,"db","db",993250759));
console.log("Fetching available routes from backend");

fetch([map.events.backend_url,"/routes/available"].join('')).then((function (p1__12462_SHARP_){
return p1__12462_SHARP_.json();
})).then((function (routes){
var clj_routes = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(routes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
console.log("Loaded routes:",cljs.core.count(clj_routes));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-available-routes","map/set-available-routes",456500151),clj_routes], null));
})).catch((function (error){
return console.error("Failed to fetch available routes:",error);
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378)], null),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-available-routes","map/set-available-routes",456500151),(function (db,p__12465){
var vec__12466 = p__12465;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12466,(0),null);
var routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12466,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"available-routes","available-routes",294192005)], null),routes),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378)], null),false);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","fetch-saved-routes","map/fetch-saved-routes",-489955777),(function (p__12470,_){
var map__12471 = p__12470;
var map__12471__$1 = cljs.core.__destructure_map(map__12471);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12471__$1,new cljs.core.Keyword(null,"db","db",993250759));
fetch([map.events.backend_url,"/routes"].join('')).then((function (p1__12469_SHARP_){
return p1__12469_SHARP_.json();
})).then((function (routes){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-saved-routes","map/set-saved-routes",-547693542),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(routes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))], null));
})).catch((function (error){
return console.error("Failed to fetch saved routes:",error);
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-saved-routes","map/set-saved-routes",-547693542),(function (db,p__12472){
var vec__12473 = p__12472;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12473,(0),null);
var routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12473,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"routes","routes",457900162)], null),routes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","toggle-route-picker","map/toggle-route-picker",-2063102948),(function (db,_){
var current_state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"show-route-picker","show-route-picker",-1780445269)], null),false);
console.log("Toggling route picker from:",current_state,"to:",cljs.core.not(current_state));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"show-route-picker","show-route-picker",-1780445269)], null),cljs.core.not(current_state));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","save-picked-route","map/save-picked-route",1123117444),(function (p__12477,p__12478){
var map__12479 = p__12477;
var map__12479__$1 = cljs.core.__destructure_map(map__12479);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12479__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12480 = p__12478;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12480,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12480,(1),null);
console.log("Saving route:",route);

fetch([map.events.backend_url,"/routes"].join(''),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(route))], null))).then((function (p1__12476_SHARP_){
return p1__12476_SHARP_.json();
})).then((function (response){
console.log("Route saved successfully:",response);

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-saved-routes","map/fetch-saved-routes",-489955777)], null));
})).catch((function (error){
return console.error("Failed to save route:",error);
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","remove-route","map/remove-route",-2007692465),(function (p__12483,p__12484){
var map__12485 = p__12483;
var map__12485__$1 = cljs.core.__destructure_map(map__12485);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12485__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12486 = p__12484;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12486,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12486,(1),null);
var route_id_12509 = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(route);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"srcIata","srcIata",1153402561).cljs$core$IFn$_invoke$arity$1(route)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dstIata","dstIata",1699214109).cljs$core$IFn$_invoke$arity$1(route)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"airline","airline",-1557529148).cljs$core$IFn$_invoke$arity$1(route))].join('');
}
})();
var url_12510 = [map.events.backend_url,"/routes/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(route_id_12509))].join('');
console.log("Removing route with ID:",route_id_12509);

fetch(url_12510,cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"DELETE"], null))).then((function (response){
if(cljs.core.truth_(response.ok())){
console.log("Route removed successfully");

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-saved-routes","map/fetch-saved-routes",-489955777)], null));
} else {
throw (new Error(["HTTP error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(response.status())].join('')));
}
})).catch((function (error){
return console.error("Failed to remove route:",error);
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),db], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","focus-route","map/focus-route",45528905),(function (p__12489,p__12490){
var map__12491 = p__12489;
var map__12491__$1 = cljs.core.__destructure_map(map__12491);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12491__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12492 = p__12490;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12492,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12492,(1),null);
var src_coords_12511 = new cljs.core.Keyword(null,"srcCoords","srcCoords",-1727353193).cljs$core$IFn$_invoke$arity$1(route);
var dst_coords_12512 = new cljs.core.Keyword(null,"dstCoords","dstCoords",1759638496).cljs$core$IFn$_invoke$arity$1(route);
var center_lat_12513 = ((cljs.core.first(src_coords_12511) + cljs.core.first(dst_coords_12512)) / (2));
var center_lng_12514 = ((cljs.core.second(src_coords_12511) + cljs.core.second(dst_coords_12512)) / (2));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-center","map/set-center",-1419951543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),center_lat_12513,new cljs.core.Keyword(null,"lng","lng",1667213918),center_lng_12514], null)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-zoom","map/set-zoom",-538879925),(5)], null));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"selected-route","selected-route",233162878)], null),route)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-globe-instance","map/set-globe-instance",1713314293),(function (db,p__12495){
var vec__12496 = p__12495;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12496,(0),null);
var globe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12496,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"globe-instance","globe-instance",1123878705),globe);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","fetch-routes","map/fetch-routes",-407794897),(function (p__12499,_){
var map__12500 = p__12499;
var map__12500__$1 = cljs.core.__destructure_map(map__12500);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12500__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8080/routes",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-routes-success","map/fetch-routes-success",1396312625)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-routes-failure","map/fetch-routes-failure",-1224374715)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","fetch-routes-success","map/fetch-routes-success",1396312625),(function (db,p__12501){
var vec__12502 = p__12501;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12502,(0),null);
var routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12502,(1),null);
console.log("Fetched routes:",cljs.core.clj__GT_js(routes));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword("map","routes","map/routes",457766694),routes);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","fetch-routes-failure","map/fetch-routes-failure",-1224374715),(function (db,p__12505){
var vec__12506 = p__12505;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12506,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12506,(1),null);
console.error("Failed to fetch saved routes:",error);

return db;
}));

//# sourceMappingURL=map.events.js.map
