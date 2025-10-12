goog.provide('map.views.globe_utils');
var module$node_modules$$openglobus$og$lib$og_es=shadow.js.require("module$node_modules$$openglobus$og$lib$og_es", {});
map.views.globe_utils.create_path = (function map$views$globe_utils$create_path(ellipsoid,src,dst,num,p__14411){
var map__14412 = p__14411;
var map__14412__$1 = cljs.core.__destructure_map(map__14412);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14412__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0,0.0], null));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14412__$1,new cljs.core.Keyword(null,"height","height",1025178622),(50000));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14412__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780),1.0);
var dist_PLUS_az = ellipsoid.inverse(src,dst);
var dist = dist_PLUS_az.distance;
var az = dist_PLUS_az.initialAzimuth;
var p25 = ellipsoid.getGreatCircleDestination(src,az,(dist * 0.25));
var p75 = ellipsoid.getGreatCircleDestination(src,az,(dist * 0.75));
var _ = (src.height = height);
var ___$1 = (dst.height = height);
var h = (height + (dist / (4)));
var ___$2 = (p25.height = h);
var ___$3 = (p75.height = h);
var start = ellipsoid.lonLatToCartesian(src);
var end = ellipsoid.lonLatToCartesian(dst);
var c25 = ellipsoid.lonLatToCartesian(p25);
var c75 = ellipsoid.lonLatToCartesian(p75);
var path = (new Array());
var colors = (new Array());
var n__5593__auto___14431 = (num + (1));
var i_14432 = (0);
while(true){
if((i_14432 < n__5593__auto___14431)){
var t_14433 = (i_14432 / num);
var p_14434 = module$node_modules$$openglobus$og$lib$og_es.math.bezier3v(t_14433,start,c25,c75,end);
path.push(p_14434);

colors.push(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(color,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(color,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(color,(2)),opacity], null)));

var G__14435 = (i_14432 + (1));
i_14432 = G__14435;
continue;
} else {
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"colors","colors",1157174732),colors], null);
});
map.views.globe_utils.init_globe = (function map$views$globe_utils$init_globe(){
var LonLat = module$node_modules$$openglobus$og$lib$og_es.LonLat;
var Entity = module$node_modules$$openglobus$og$lib$og_es.Entity;
var Vector = module$node_modules$$openglobus$og$lib$og_es.Vector;
var Globe = module$node_modules$$openglobus$og$lib$og_es.Globe;
var XYZ = module$node_modules$$openglobus$og$lib$og_es.XYZ;
var GlobusTerrain = module$node_modules$$openglobus$og$lib$og_es.GlobusTerrain;
var Ellipsoid = module$node_modules$$openglobus$og$lib$og_es.Ellipsoid;
var ellipsoid_instance = (new Ellipsoid((6378137),6356752.314245));
var osm = (new XYZ("OpenStreetMap",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"isBaseLayer","isBaseLayer",980694488),true,new cljs.core.Keyword(null,"url","url",276297046),"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",new cljs.core.Keyword(null,"visibility","visibility",1338380893),true,new cljs.core.Keyword(null,"attribution","attribution",1937239286),"OpenStreetMap"], null))));
var collection = (new Vector("Routes"));
var globe_instance = (new Globe(({"target": "globe-container", "name": "Earth", "layers": [osm,collection], "atmosphereEnabled": true, "terrain": (new GlobusTerrain()), "sun": ({"stopped": true})})));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"globe","globe",662172797),globe_instance,new cljs.core.Keyword(null,"ellipsoid","ellipsoid",-325087822),ellipsoid_instance,new cljs.core.Keyword(null,"collection","collection",-683361892),collection,new cljs.core.Keyword(null,"LonLat","LonLat",336253111),LonLat,new cljs.core.Keyword(null,"Entity","Entity",313406975),Entity], null);
});
map.views.globe_utils.clear_collection = (function map$views$globe_utils$clear_collection(collection){
try{if(cljs.core.truth_(collection.clear)){
return collection.clear();
} else {
if(cljs.core.truth_(collection.removeAll)){
return collection.removeAll();
} else {
if(cljs.core.truth_(collection.removeAllEntities)){
return collection.removeAllEntities();
} else {
return console.warn("No clear method found on collection, trying to clear entities manually");

}
}
}
}catch (e14413){var e = e14413;
return console.error("Error clearing collection:",e);
}});
map.views.globe_utils.add_entity_to_collection = (function map$views$globe_utils$add_entity_to_collection(collection,entity){
try{if(cljs.core.truth_(collection.add)){
return collection.add(entity);
} else {
return console.error("No add method on collection!");
}
}catch (e14414){var e = e14414;
return console.error("Error adding entity to collection:",e);
}});
map.views.globe_utils.render_routes = (function map$views$globe_utils$render_routes(globe,ellipsoid,collection,routes,num){
collection.clear();

var LonLat = module$node_modules$$openglobus$og$lib$og_es.LonLat;
var Entity = module$node_modules$$openglobus$og$lib$og_es.Entity;
var paths = (new Array());
var colors = (new Array());
var anim_index = (new Array());
var seq__14415_14436 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,routes));
var chunk__14416_14437 = null;
var count__14417_14438 = (0);
var i__14418_14439 = (0);
while(true){
if((i__14418_14439 < count__14417_14438)){
var vec__14425_14440 = chunk__14416_14437.cljs$core$IIndexed$_nth$arity$2(null,i__14418_14439);
var idx_14441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425_14440,(0),null);
var route_14442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14425_14440,(1),null);
var src_airport_14443 = new cljs.core.Keyword(null,"srcAirport","srcAirport",31243090).cljs$core$IFn$_invoke$arity$1(route_14442);
var dst_airport_14444 = new cljs.core.Keyword(null,"dstAirport","dstAirport",-1024874193).cljs$core$IFn$_invoke$arity$1(route_14442);
var src_lat_str_14445 = new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(src_airport_14443);
var src_lng_str_14446 = new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(src_airport_14443);
var dst_lat_str_14447 = new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(dst_airport_14444);
var dst_lng_str_14448 = new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(dst_airport_14444);
var src_lat_14449 = parseFloat(src_lat_str_14445);
var src_lng_14450 = parseFloat(src_lng_str_14446);
var dst_lat_14451 = parseFloat(dst_lat_str_14447);
var dst_lng_14452 = parseFloat(dst_lng_str_14448);
var valid_QMARK__14453 = (function (){var and__5000__auto__ = src_lat_14449;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = src_lng_14450;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = dst_lat_14451;
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = dst_lng_14452;
if(cljs.core.truth_(and__5000__auto____$3)){
return ((cljs.core.not(isNaN(src_lat_14449))) && (((cljs.core.not(isNaN(src_lng_14450))) && (((cljs.core.not(isNaN(dst_lat_14451))) && (cljs.core.not(isNaN(dst_lng_14452))))))));
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(valid_QMARK__14453)){
var src_14454 = (new LonLat(src_lng_14450,src_lat_14449));
var dst_14455 = (new LonLat(dst_lng_14452,dst_lat_14451));
var p_14456 = map.views.globe_utils.create_path(ellipsoid,src_14454,dst_14455,num,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.5,0.0], null)], null));
paths.push(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p_14456));

colors.push(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(p_14456));

anim_index.push(module$node_modules$$openglobus$og$lib$og_es.math.randomi((0),num));
} else {
}


var G__14457 = seq__14415_14436;
var G__14458 = chunk__14416_14437;
var G__14459 = count__14417_14438;
var G__14460 = (i__14418_14439 + (1));
seq__14415_14436 = G__14457;
chunk__14416_14437 = G__14458;
count__14417_14438 = G__14459;
i__14418_14439 = G__14460;
continue;
} else {
var temp__5804__auto___14461 = cljs.core.seq(seq__14415_14436);
if(temp__5804__auto___14461){
var seq__14415_14462__$1 = temp__5804__auto___14461;
if(cljs.core.chunked_seq_QMARK_(seq__14415_14462__$1)){
var c__5525__auto___14463 = cljs.core.chunk_first(seq__14415_14462__$1);
var G__14464 = cljs.core.chunk_rest(seq__14415_14462__$1);
var G__14465 = c__5525__auto___14463;
var G__14466 = cljs.core.count(c__5525__auto___14463);
var G__14467 = (0);
seq__14415_14436 = G__14464;
chunk__14416_14437 = G__14465;
count__14417_14438 = G__14466;
i__14418_14439 = G__14467;
continue;
} else {
var vec__14428_14468 = cljs.core.first(seq__14415_14462__$1);
var idx_14469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14428_14468,(0),null);
var route_14470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14428_14468,(1),null);
var src_airport_14471 = new cljs.core.Keyword(null,"srcAirport","srcAirport",31243090).cljs$core$IFn$_invoke$arity$1(route_14470);
var dst_airport_14472 = new cljs.core.Keyword(null,"dstAirport","dstAirport",-1024874193).cljs$core$IFn$_invoke$arity$1(route_14470);
var src_lat_str_14473 = new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(src_airport_14471);
var src_lng_str_14474 = new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(src_airport_14471);
var dst_lat_str_14475 = new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(dst_airport_14472);
var dst_lng_str_14476 = new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(dst_airport_14472);
var src_lat_14477 = parseFloat(src_lat_str_14473);
var src_lng_14478 = parseFloat(src_lng_str_14474);
var dst_lat_14479 = parseFloat(dst_lat_str_14475);
var dst_lng_14480 = parseFloat(dst_lng_str_14476);
var valid_QMARK__14481 = (function (){var and__5000__auto__ = src_lat_14477;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = src_lng_14478;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = dst_lat_14479;
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = dst_lng_14480;
if(cljs.core.truth_(and__5000__auto____$3)){
return ((cljs.core.not(isNaN(src_lat_14477))) && (((cljs.core.not(isNaN(src_lng_14478))) && (((cljs.core.not(isNaN(dst_lat_14479))) && (cljs.core.not(isNaN(dst_lng_14480))))))));
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(valid_QMARK__14481)){
var src_14482 = (new LonLat(src_lng_14478,src_lat_14477));
var dst_14483 = (new LonLat(dst_lng_14480,dst_lat_14479));
var p_14484 = map.views.globe_utils.create_path(ellipsoid,src_14482,dst_14483,num,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.5,0.0], null)], null));
paths.push(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p_14484));

colors.push(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(p_14484));

anim_index.push(module$node_modules$$openglobus$og$lib$og_es.math.randomi((0),num));
} else {
}


var G__14485 = cljs.core.next(seq__14415_14462__$1);
var G__14486 = null;
var G__14487 = (0);
var G__14488 = (0);
seq__14415_14436 = G__14485;
chunk__14416_14437 = G__14486;
count__14417_14438 = G__14487;
i__14418_14439 = G__14488;
continue;
}
} else {
}
}
break;
}

if((paths.length > (0))){
var polyline_config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path3v","path3v",-277416190),paths,new cljs.core.Keyword(null,"pathColors","pathColors",-2039306632),colors,new cljs.core.Keyword(null,"thickness","thickness",-940175454),(3),new cljs.core.Keyword(null,"isClosed","isClosed",-1907220757),false,new cljs.core.Keyword(null,"visibility","visibility",1338380893),true], null);
var entity_config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),polyline_config], null);
var entity = (new Entity(cljs.core.clj__GT_js(entity_config)));
collection.add(entity);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity], null),new cljs.core.Keyword(null,"anim-index","anim-index",-1563021855),anim_index], null);
} else {
console.error("NO PATHS CREATED!");

return null;
}
});
map.views.globe_utils.animate_routes = (function map$views$globe_utils$animate_routes(entities,anim_index,num,animation_ref){
var entities_array = ((cljs.core.array_QMARK_(entities))?entities:cljs.core.clj__GT_js(entities));
if(cljs.core.truth_(cljs.core.deref(animation_ref))){
cancelAnimationFrame(cljs.core.deref(animation_ref));
} else {
}

var animate = (function map$views$globe_utils$animate_routes_$_animate(){
var n__5593__auto___14489 = entities_array.length;
var i_14490 = (0);
while(true){
if((i_14490 < n__5593__auto___14489)){
var entity_14491 = (entities_array[i_14490]);
var poly_14492 = entity_14491.polyline;
if((cljs.core.mod(Date.now(),(1000)) === (0))){
} else {
}

var cArr_14493 = poly_14492.getPathColors();
var n__5593__auto___14494__$1 = cArr_14493.length;
var j_14495 = (0);
while(true){
if((j_14495 < n__5593__auto___14494__$1)){
var idx_14496 = (anim_index[j_14495]);
var colors_14497 = (cArr_14493[j_14495]);
var r_14498 = (colors_14497[(0)][(0)]);
var g_14499 = (colors_14497[(0)][(1)]);
var b_14500 = (colors_14497[(0)][(2)]);
(anim_index[j_14495] = (((idx_14496 > (num + (4))))?(0):(idx_14496 + (1))));

poly_14492.setPointColor([r_14498,g_14499,b_14500,0.8],idx_14496,j_14495);

poly_14492.setPointColor([r_14498,g_14499,b_14500,0.6],(idx_14496 - (1)),j_14495);

poly_14492.setPointColor([r_14498,g_14499,b_14500,0.3],(idx_14496 - (2)),j_14495);

poly_14492.setPointColor([r_14498,g_14499,b_14500,0.1],(idx_14496 - (3)),j_14495);

var G__14501 = (j_14495 + (1));
j_14495 = G__14501;
continue;
} else {
}
break;
}

var G__14502 = (i_14490 + (1));
i_14490 = G__14502;
continue;
} else {
}
break;
}

return cljs.core.reset_BANG_(animation_ref,requestAnimationFrame(map$views$globe_utils$animate_routes_$_animate));
});
return animate();
});
map.views.globe_utils.check_gl_error = (function map$views$globe_utils$check_gl_error(gl){
var err = (cljs.core.truth_(gl)?gl.getError():null);
if(cljs.core.truth_((function (){var and__5000__auto__ = err;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(err,gl.NO_ERROR);
} else {
return and__5000__auto__;
}
})())){
return console.error("WebGL error:",err);
} else {
return null;
}
});

//# sourceMappingURL=map.views.globe_utils.js.map
