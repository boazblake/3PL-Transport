goog.provide('map.events');
map.events.backend_url = "http://localhost:8080";
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),map.db.default_db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-initial-data","map/fetch-initial-data",253434473)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-search-history","map/fetch-search-history",-730975503)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-saved-routes","map/fetch-saved-routes",-489955777)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-available-routes","map/fetch-available-routes",-1015802652)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","fetch-initial-data","map/fetch-initial-data",253434473),(function (p__12789,_){
var map__12790 = p__12789;
var map__12790__$1 = cljs.core.__destructure_map(map__12790);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12790__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[map.events.backend_url,"/map"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-initial-data","map/set-initial-data",-76694258)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-error","map/set-error",1627796240)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-initial-data","map/set-initial-data",-76694258),(function (db,p__12791){
var vec__12792 = p__12791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12792,(0),null);
var map_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12792,(1),null);
return cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"center","center",-748944368)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(map_data),new cljs.core.Keyword(null,"lng","lng",1667213918),new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(map_data)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(map_data));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","fetch-search-history","map/fetch-search-history",-730975503),(function (p__12795,_){
var map__12796 = p__12795;
var map__12796__$1 = cljs.core.__destructure_map(map__12796);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12796__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[map.events.backend_url,"/search-history"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-search-history","map/set-search-history",-493174333)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-error","map/set-error",1627796240)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-search-history","map/set-search-history",-493174333),(function (db,p__12797){
var vec__12798 = p__12797;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12798,(0),null);
var history__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12798,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"history","history",-247395220)], null),history__$1);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","update-search","map/update-search",1172774819),(function (db,p__12801){
var vec__12802 = p__12801;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12802,(0),null);
var search_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12802,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"search","search",1564939822)], null),search_text);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","search-location","map/search-location",-51841215),(function (p__12805,p__12806){
var map__12807 = p__12805;
var map__12807__$1 = cljs.core.__destructure_map(map__12807);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12807__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12808 = p__12806;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12808,(0),null);
var search_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12808,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","geocode","map/geocode",-771785669),search_text], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","geocode","map/geocode",-771785669),(function (p__12811,p__12812){
var map__12813 = p__12811;
var map__12813__$1 = cljs.core.__destructure_map(map__12813);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12813__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12814 = p__12812;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12814,(0),null);
var location__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12814,(1),null);
if(cljs.core.seq(location__$1)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["https://nominatim.openstreetmap.org/search?format=json&q=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(location__$1))].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","geocode-success","map/geocode-success",-2012079043),location__$1], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-error","map/set-error",1627796240)], null)], null)], null);
} else {
return null;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","geocode-success","map/geocode-success",-2012079043),(function (p__12817,p__12818){
var map__12819 = p__12817;
var map__12819__$1 = cljs.core.__destructure_map(map__12819);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12819__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12820 = p__12818;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12820,(0),null);
var location__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12820,(1),null);
var results = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12820,(2),null);
if((cljs.core.count(results) > (0))){
var result = cljs.core.first(results);
var lat = parseFloat(new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(result));
var lng = parseFloat(new cljs.core.Keyword(null,"lon","lon",522068437).cljs$core$IFn$_invoke$arity$1(result));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-center","map/set-center",-1419951543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lng","lng",1667213918),lng], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-zoom","map/set-zoom",-538879925),(13)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","save-search","map/save-search",-2021441289),location__$1,lat,lng], null)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Error",new cljs.core.Keyword(null,"message","message",-406056002),"No geocoding results found",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null))], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","save-search","map/save-search",-2021441289),(function (p__12823,p__12824){
var map__12825 = p__12823;
var map__12825__$1 = cljs.core.__destructure_map(map__12825);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12825__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12826 = p__12824;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12826,(0),null);
var location__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12826,(1),null);
var lat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12826,(2),null);
var lng = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12826,(3),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[map.events.backend_url,"/search"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"location","location",1815599388),location__$1,new cljs.core.Keyword(null,"lat","lat",-580793929),lat,new cljs.core.Keyword(null,"lng","lng",1667213918),lng,new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(new Date()).toISOString()], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-search-history","map/fetch-search-history",-730975503)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-error","map/set-error",1627796240)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-center","map/set-center",-1419951543),(function (db,p__12829){
var vec__12830 = p__12829;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12830,(0),null);
var center = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12830,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"center","center",-748944368)], null),center);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-zoom","map/set-zoom",-538879925),(function (db,p__12833){
var vec__12834 = p__12833;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12834,(0),null);
var zoom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12834,(1),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),zoom);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","fetch-available-routes","map/fetch-available-routes",-1015802652),(function (p__12837,_){
var map__12838 = p__12837;
var map__12838__$1 = cljs.core.__destructure_map(map__12838);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12838__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[map.events.backend_url,"/routes/available"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-available-routes","map/set-available-routes",456500151)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-airports-fallback","map/fetch-airports-fallback",404338482)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-available-routes","map/set-available-routes",456500151),(function (db,p__12839){
var vec__12840 = p__12839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12840,(0),null);
var routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12840,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"available-routes","available-routes",294192005),routes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","fetch-airports-fallback","map/fetch-airports-fallback",404338482),(function (p__12843,p__12844){
var map__12845 = p__12843;
var map__12845__$1 = cljs.core.__destructure_map(map__12845);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12845__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12846 = p__12844;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12846,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12846,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Warning",new cljs.core.Keyword(null,"message","message",-406056002),"Failed to fetch routes, using airport fallback",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),true], 0)),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[map.events.backend_url,"/airports"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-fallback-airports","map/set-fallback-airports",1107502974)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-error","map/set-error",1627796240)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-fallback-airports","map/set-fallback-airports",1107502974),(function (db,p__12849){
var vec__12850 = p__12849;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12850,(0),null);
var airports = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12850,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"available-routes","available-routes",294192005),airports,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),false], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","fetch-saved-routes","map/fetch-saved-routes",-489955777),(function (p__12853,_){
var map__12854 = p__12853;
var map__12854__$1 = cljs.core.__destructure_map(map__12854);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12854__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),[map.events.backend_url,"/routes"].join(''),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-saved-routes","map/set-saved-routes",-547693542)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-error","map/set-error",1627796240)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-saved-routes","map/set-saved-routes",-547693542),(function (db,p__12855){
var vec__12856 = p__12855;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12856,(0),null);
var routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12856,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"routes","routes",457900162),routes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-error","map/set-error",1627796240),(function (db,p__12859){
var vec__12860 = p__12859;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12860,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12860,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Error",new cljs.core.Keyword(null,"message","message",-406056002),"Failed to perform operation",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","toggle-route-picker","map/toggle-route-picker",-2063102948),(function (db,_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"show-route-picker","show-route-picker",-1780445269)], null),cljs.core.not);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","save-picked-route","map/save-picked-route",1123117444),(function (p__12863,p__12864){
var map__12865 = p__12863;
var map__12865__$1 = cljs.core.__destructure_map(map__12865);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12865__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12866 = p__12864;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12866,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12866,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[map.events.backend_url,"/routes"].join(''),new cljs.core.Keyword(null,"params","params",710516235),route,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","save-picked-route-success","map/save-picked-route-success",-181970019)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-error","map/set-error",1627796240)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","save-picked-route-success","map/save-picked-route-success",-181970019),(function (p__12869,p__12870){
var map__12871 = p__12869;
var map__12871__$1 = cljs.core.__destructure_map(map__12871);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12871__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12872 = p__12870;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12872,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12872,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Success",new cljs.core.Keyword(null,"message","message",-406056002),"Route saved successfully",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-saved-routes","map/fetch-saved-routes",-489955777)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(5000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","clear-notification","map/clear-notification",-785916390)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","remove-route","map/remove-route",-2007692465),(function (p__12875,p__12876){
var map__12877 = p__12875;
var map__12877__$1 = cljs.core.__destructure_map(map__12877);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12877__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12878 = p__12876;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12878,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12878,(1),null);
console.log("Attempting to remove route:",cljs.core.clj__GT_js(route));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"uri","uri",-774711847),[map.events.backend_url,"/routes","?srcIata=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(new cljs.core.Keyword(null,"srcIata","srcIata",1153402561).cljs$core$IFn$_invoke$arity$1(route))),"&dstIata=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(new cljs.core.Keyword(null,"dstIata","dstIata",1699214109).cljs$core$IFn$_invoke$arity$1(route))),"&airline=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(new cljs.core.Keyword(null,"airline","airline",-1557529148).cljs$core$IFn$_invoke$arity$1(route)))].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),(ajax.core.url_request_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.url_request_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.url_request_format.call(null)),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","remove-route-success","map/remove-route-success",614999537)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","remove-route-failure","map/remove-route-failure",73211780)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","remove-route-success","map/remove-route-success",614999537),(function (p__12881,p__12882){
var map__12883 = p__12881;
var map__12883__$1 = cljs.core.__destructure_map(map__12883);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12883__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12884 = p__12882;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12884,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12884,(1),null);
console.log("Route removed successfully");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Success",new cljs.core.Keyword(null,"message","message",-406056002),"Route removed successfully",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-saved-routes","map/fetch-saved-routes",-489955777)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(5000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","clear-notification","map/clear-notification",-785916390)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","remove-route-failure","map/remove-route-failure",73211780),(function (db,p__12887){
var vec__12888 = p__12887;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12888,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12888,(1),null);
console.error("Failed to remove route:",error);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Error",new cljs.core.Keyword(null,"message","message",-406056002),["Failed to remove route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "Unknown error";
}
})())].join(''),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","create-simple-route","map/create-simple-route",628306559),(function (p__12891,p__12892){
var map__12893 = p__12891;
var map__12893__$1 = cljs.core.__destructure_map(map__12893);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12893__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12894 = p__12892;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12894,(0),null);
var src_iata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12894,(1),null);
var dst_iata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12894,(2),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),[map.events.backend_url,"/routes/new"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"srcIata","srcIata",1153402561),src_iata,new cljs.core.Keyword(null,"dstIata","dstIata",1699214109),dst_iata], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","create-simple-route-success","map/create-simple-route-success",-589724033)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","create-simple-route-failure","map/create-simple-route-failure",-1110286351)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","create-simple-route-success","map/create-simple-route-success",-589724033),(function (p__12897,p__12898){
var map__12899 = p__12897;
var map__12899__$1 = cljs.core.__destructure_map(map__12899);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12899__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12900 = p__12898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12900,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12900,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Success",new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"success","success",1890645906)], null)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-saved-routes","map/fetch-saved-routes",-489955777)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ms","ms",-1152709733),(5000),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","clear-notification","map/clear-notification",-785916390)], null)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","create-simple-route-failure","map/create-simple-route-failure",-1110286351),(function (db,p__12903){
var vec__12904 = p__12903;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12904,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12904,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading-routes","loading-routes",-1940409378),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Error",new cljs.core.Keyword(null,"message","message",-406056002),"Failed to create route",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032)], null)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","clear-notification","map/clear-notification",-785916390),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"notification","notification",-222338233));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","focus-route","map/focus-route",45528905),(function (p__12907,p__12908){
var map__12909 = p__12907;
var map__12909__$1 = cljs.core.__destructure_map(map__12909);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12909__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12910 = p__12908;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12910,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12910,(1),null);
var src_lat = parseFloat(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srcAirport","srcAirport",31243090),new cljs.core.Keyword(null,"lat","lat",-580793929)], null)));
var src_lng = parseFloat(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srcAirport","srcAirport",31243090),new cljs.core.Keyword(null,"lng","lng",1667213918)], null)));
var dst_lat = parseFloat(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dstAirport","dstAirport",-1024874193),new cljs.core.Keyword(null,"lat","lat",-580793929)], null)));
var dst_lng = parseFloat(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dstAirport","dstAirport",-1024874193),new cljs.core.Keyword(null,"lng","lng",1667213918)], null)));
var center_lat = ((src_lat + dst_lat) / (2));
var center_lng = ((src_lng + dst_lng) / (2));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"selected-route","selected-route",233162878)], null),route),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-center","map/set-center",-1419951543),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lat","lat",-580793929),center_lat,new cljs.core.Keyword(null,"lng","lng",1667213918),center_lng], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-zoom","map/set-zoom",-538879925),(5)], null)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("map","set-globe-instance","map/set-globe-instance",1713314293),(function (db,p__12913){
var vec__12914 = p__12913;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12914,(0),null);
var globe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12914,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"globe-instance","globe-instance",1123878705),globe);
}));

//# sourceMappingURL=map.events.js.map
