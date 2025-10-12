goog.provide('map.views.globe_utils');
var module$node_modules$$openglobus$og$lib$og_es=shadow.js.require("module$node_modules$$openglobus$og$lib$og_es", {});
map.views.globe_utils.create_path = (function map$views$globe_utils$create_path(ellipsoid,src,dst,num,p__13486){
var map__13487 = p__13486;
var map__13487__$1 = cljs.core.__destructure_map(map__13487);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13487__$1,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.0,0.0], null));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13487__$1,new cljs.core.Keyword(null,"height","height",1025178622),(50000));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13487__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780),1.0);
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
var n__5593__auto___13506 = (num + (1));
var i_13507 = (0);
while(true){
if((i_13507 < n__5593__auto___13506)){
var t_13508 = (i_13507 / num);
var p_13509 = module$node_modules$$openglobus$og$lib$og_es.math.bezier3v(t_13508,start,c25,c75,end);
path.push(p_13509);

colors.push(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.cljs$core$IFn$_invoke$arity$2(color,(0)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(color,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(color,(2)),opacity], null)));

var G__13510 = (i_13507 + (1));
i_13507 = G__13510;
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
console.log("Collection created:",collection);

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
}catch (e13488){var e = e13488;
return console.error("Error clearing collection:",e);
}});
map.views.globe_utils.add_entity_to_collection = (function map$views$globe_utils$add_entity_to_collection(collection,entity){
try{if(cljs.core.truth_(collection.add)){
return collection.add(entity);
} else {
return console.error("No add method on collection!");
}
}catch (e13489){var e = e13489;
return console.error("Error adding entity to collection:",e);
}});
map.views.globe_utils.render_routes = (function map$views$globe_utils$render_routes(globe,ellipsoid,collection,routes,num){
console.log("=== RENDER-ROUTES START ===");

console.log("Routes count:",cljs.core.count(routes));

console.log("First route:",cljs.core.first(routes));

console.log("Collection:",collection);

console.log("Ellipsoid:",ellipsoid);

collection.clear();

console.log("Collection cleared");

var LonLat = module$node_modules$$openglobus$og$lib$og_es.LonLat;
var Entity = module$node_modules$$openglobus$og$lib$og_es.Entity;
var paths = (new Array());
var colors = (new Array());
var anim_index = (new Array());
console.log("Processing",cljs.core.count(routes),"routes...");

var seq__13490_13511 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,routes));
var chunk__13491_13512 = null;
var count__13492_13513 = (0);
var i__13493_13514 = (0);
while(true){
if((i__13493_13514 < count__13492_13513)){
var vec__13500_13515 = chunk__13491_13512.cljs$core$IIndexed$_nth$arity$2(null,i__13493_13514);
var idx_13516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13500_13515,(0),null);
var route_13517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13500_13515,(1),null);
console.log("\n--- Route",idx_13516,"---");

console.log("Route data:",route_13517);

console.log("srcIata:",new cljs.core.Keyword(null,"srcIata","srcIata",1153402561).cljs$core$IFn$_invoke$arity$1(route_13517),"dstIata:",new cljs.core.Keyword(null,"dstIata","dstIata",1699214109).cljs$core$IFn$_invoke$arity$1(route_13517));

var src_airport_13518 = new cljs.core.Keyword(null,"srcAirport","srcAirport",31243090).cljs$core$IFn$_invoke$arity$1(route_13517);
var dst_airport_13519 = new cljs.core.Keyword(null,"dstAirport","dstAirport",-1024874193).cljs$core$IFn$_invoke$arity$1(route_13517);
console.log("Source airport:",src_airport_13518);

console.log("Dest airport:",dst_airport_13519);

var src_lat_str_13520 = new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(src_airport_13518);
var src_lng_str_13521 = new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(src_airport_13518);
var dst_lat_str_13522 = new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(dst_airport_13519);
var dst_lng_str_13523 = new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(dst_airport_13519);
console.log("Source coords (strings):",src_lat_str_13520,src_lng_str_13521);

console.log("Dest coords (strings):",dst_lat_str_13522,dst_lng_str_13523);

var src_lat_13524 = parseFloat(src_lat_str_13520);
var src_lng_13525 = parseFloat(src_lng_str_13521);
var dst_lat_13526 = parseFloat(dst_lat_str_13522);
var dst_lng_13527 = parseFloat(dst_lng_str_13523);
console.log("Source coords (parsed):",src_lat_13524,src_lng_13525);

console.log("Dest coords (parsed):",dst_lat_13526,dst_lng_13527);

var valid_QMARK__13528 = (function (){var and__5000__auto__ = src_lat_13524;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = src_lng_13525;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = dst_lat_13526;
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = dst_lng_13527;
if(cljs.core.truth_(and__5000__auto____$3)){
return ((cljs.core.not(isNaN(src_lat_13524))) && (((cljs.core.not(isNaN(src_lng_13525))) && (((cljs.core.not(isNaN(dst_lat_13526))) && (cljs.core.not(isNaN(dst_lng_13527))))))));
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
console.log("Coords valid?",valid_QMARK__13528);

if(cljs.core.truth_(valid_QMARK__13528)){
console.log("Creating LonLat objects...");

var src_13529 = (new LonLat(src_lng_13525,src_lat_13524));
var dst_13530 = (new LonLat(dst_lng_13527,dst_lat_13526));
console.log("Source LonLat:",src_13529);

console.log("Dest LonLat:",dst_13530);

console.log("Creating path...");

var p_13531 = map.views.globe_utils.create_path(ellipsoid,src_13529,dst_13530,num,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.5,0.0], null)], null));
console.log("Path created:",p_13531);

console.log("Path length:",new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p_13531).length);

paths.push(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p_13531));

colors.push(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(p_13531));

anim_index.push(module$node_modules$$openglobus$og$lib$og_es.math.randomi((0),num));

console.log("Path added to arrays. Total paths:",paths.length);
} else {
console.error("INVALID COORDS for route:",new cljs.core.Keyword(null,"srcIata","srcIata",1153402561).cljs$core$IFn$_invoke$arity$1(route_13517),"->",new cljs.core.Keyword(null,"dstIata","dstIata",1699214109).cljs$core$IFn$_invoke$arity$1(route_13517));
}


var G__13532 = seq__13490_13511;
var G__13533 = chunk__13491_13512;
var G__13534 = count__13492_13513;
var G__13535 = (i__13493_13514 + (1));
seq__13490_13511 = G__13532;
chunk__13491_13512 = G__13533;
count__13492_13513 = G__13534;
i__13493_13514 = G__13535;
continue;
} else {
var temp__5804__auto___13536 = cljs.core.seq(seq__13490_13511);
if(temp__5804__auto___13536){
var seq__13490_13537__$1 = temp__5804__auto___13536;
if(cljs.core.chunked_seq_QMARK_(seq__13490_13537__$1)){
var c__5525__auto___13538 = cljs.core.chunk_first(seq__13490_13537__$1);
var G__13539 = cljs.core.chunk_rest(seq__13490_13537__$1);
var G__13540 = c__5525__auto___13538;
var G__13541 = cljs.core.count(c__5525__auto___13538);
var G__13542 = (0);
seq__13490_13511 = G__13539;
chunk__13491_13512 = G__13540;
count__13492_13513 = G__13541;
i__13493_13514 = G__13542;
continue;
} else {
var vec__13503_13543 = cljs.core.first(seq__13490_13537__$1);
var idx_13544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13503_13543,(0),null);
var route_13545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13503_13543,(1),null);
console.log("\n--- Route",idx_13544,"---");

console.log("Route data:",route_13545);

console.log("srcIata:",new cljs.core.Keyword(null,"srcIata","srcIata",1153402561).cljs$core$IFn$_invoke$arity$1(route_13545),"dstIata:",new cljs.core.Keyword(null,"dstIata","dstIata",1699214109).cljs$core$IFn$_invoke$arity$1(route_13545));

var src_airport_13546 = new cljs.core.Keyword(null,"srcAirport","srcAirport",31243090).cljs$core$IFn$_invoke$arity$1(route_13545);
var dst_airport_13547 = new cljs.core.Keyword(null,"dstAirport","dstAirport",-1024874193).cljs$core$IFn$_invoke$arity$1(route_13545);
console.log("Source airport:",src_airport_13546);

console.log("Dest airport:",dst_airport_13547);

var src_lat_str_13548 = new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(src_airport_13546);
var src_lng_str_13549 = new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(src_airport_13546);
var dst_lat_str_13550 = new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(dst_airport_13547);
var dst_lng_str_13551 = new cljs.core.Keyword(null,"lng","lng",1667213918).cljs$core$IFn$_invoke$arity$1(dst_airport_13547);
console.log("Source coords (strings):",src_lat_str_13548,src_lng_str_13549);

console.log("Dest coords (strings):",dst_lat_str_13550,dst_lng_str_13551);

var src_lat_13552 = parseFloat(src_lat_str_13548);
var src_lng_13553 = parseFloat(src_lng_str_13549);
var dst_lat_13554 = parseFloat(dst_lat_str_13550);
var dst_lng_13555 = parseFloat(dst_lng_str_13551);
console.log("Source coords (parsed):",src_lat_13552,src_lng_13553);

console.log("Dest coords (parsed):",dst_lat_13554,dst_lng_13555);

var valid_QMARK__13556 = (function (){var and__5000__auto__ = src_lat_13552;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = src_lng_13553;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = dst_lat_13554;
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = dst_lng_13555;
if(cljs.core.truth_(and__5000__auto____$3)){
return ((cljs.core.not(isNaN(src_lat_13552))) && (((cljs.core.not(isNaN(src_lng_13553))) && (((cljs.core.not(isNaN(dst_lat_13554))) && (cljs.core.not(isNaN(dst_lng_13555))))))));
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
console.log("Coords valid?",valid_QMARK__13556);

if(cljs.core.truth_(valid_QMARK__13556)){
console.log("Creating LonLat objects...");

var src_13557 = (new LonLat(src_lng_13553,src_lat_13552));
var dst_13558 = (new LonLat(dst_lng_13555,dst_lat_13554));
console.log("Source LonLat:",src_13557);

console.log("Dest LonLat:",dst_13558);

console.log("Creating path...");

var p_13559 = map.views.globe_utils.create_path(ellipsoid,src_13557,dst_13558,num,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,0.5,0.0], null)], null));
console.log("Path created:",p_13559);

console.log("Path length:",new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p_13559).length);

paths.push(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p_13559));

colors.push(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(p_13559));

anim_index.push(module$node_modules$$openglobus$og$lib$og_es.math.randomi((0),num));

console.log("Path added to arrays. Total paths:",paths.length);
} else {
console.error("INVALID COORDS for route:",new cljs.core.Keyword(null,"srcIata","srcIata",1153402561).cljs$core$IFn$_invoke$arity$1(route_13545),"->",new cljs.core.Keyword(null,"dstIata","dstIata",1699214109).cljs$core$IFn$_invoke$arity$1(route_13545));
}


var G__13560 = cljs.core.next(seq__13490_13537__$1);
var G__13561 = null;
var G__13562 = (0);
var G__13563 = (0);
seq__13490_13511 = G__13560;
chunk__13491_13512 = G__13561;
count__13492_13513 = G__13562;
i__13493_13514 = G__13563;
continue;
}
} else {
}
}
break;
}

console.log("\n=== CREATING ENTITY ===");

console.log("Total paths created:",paths.length);

console.log("Paths array:",paths);

console.log("Colors array:",colors);

if((paths.length > (0))){
console.log("Creating polyline entity...");

var polyline_config = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path3v","path3v",-277416190),paths,new cljs.core.Keyword(null,"pathColors","pathColors",-2039306632),colors,new cljs.core.Keyword(null,"thickness","thickness",-940175454),(3),new cljs.core.Keyword(null,"isClosed","isClosed",-1907220757),false,new cljs.core.Keyword(null,"visibility","visibility",1338380893),true], null);
var entity_config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),polyline_config], null);
console.log("Polyline config:",cljs.core.clj__GT_js(polyline_config));

console.log("Entity config:",cljs.core.clj__GT_js(entity_config));

var entity = (new Entity(cljs.core.clj__GT_js(entity_config)));
console.log("Entity created:",entity);

console.log("Entity polyline:",entity.polyline);

collection.add(entity);

console.log("Entity added to collection");

console.log("Collection entities count:",(cljs.core.truth_(collection.getEntities)?collection.getEntities().length:"unknown"));

console.log("=== RENDER-ROUTES COMPLETE ===\n");

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity], null),new cljs.core.Keyword(null,"anim-index","anim-index",-1563021855),anim_index], null);
} else {
console.error("NO PATHS CREATED!");

return null;
}
});
map.views.globe_utils.animate_routes = (function map$views$globe_utils$animate_routes(entities,anim_index,num,animation_ref){
console.log("=== ANIMATE-ROUTES START ===");

console.log("Entities (original):",entities);

var entities_array = ((cljs.core.array_QMARK_(entities))?entities:cljs.core.clj__GT_js(entities));
console.log("Entities (converted):",entities_array);

console.log("Entities length:",entities_array.length);

console.log("Anim index:",anim_index);

console.log("Num:",num);

console.log("Animation ref:",animation_ref);

if(cljs.core.truth_(cljs.core.deref(animation_ref))){
console.log("Cancelling previous animation:",cljs.core.deref(animation_ref));

cancelAnimationFrame(cljs.core.deref(animation_ref));
} else {
}

var animate = (function map$views$globe_utils$animate_routes_$_animate(){
var n__5593__auto___13564 = entities_array.length;
var i_13565 = (0);
while(true){
if((i_13565 < n__5593__auto___13564)){
var entity_13566 = (entities_array[i_13565]);
var poly_13567 = entity_13566.polyline;
if((cljs.core.mod(Date.now(),(1000)) === (0))){
console.log("Animating entity",i_13565,"polyline:",poly_13567);
} else {
}

var cArr_13568 = poly_13567.getPathColors();
var n__5593__auto___13569__$1 = cArr_13568.length;
var j_13570 = (0);
while(true){
if((j_13570 < n__5593__auto___13569__$1)){
var idx_13571 = (anim_index[j_13570]);
var colors_13572 = (cArr_13568[j_13570]);
var r_13573 = (colors_13572[(0)][(0)]);
var g_13574 = (colors_13572[(0)][(1)]);
var b_13575 = (colors_13572[(0)][(2)]);
(anim_index[j_13570] = (((idx_13571 > (num + (4))))?(0):(idx_13571 + (1))));

poly_13567.setPointColor([r_13573,g_13574,b_13575,0.8],idx_13571,j_13570);

poly_13567.setPointColor([r_13573,g_13574,b_13575,0.6],(idx_13571 - (1)),j_13570);

poly_13567.setPointColor([r_13573,g_13574,b_13575,0.3],(idx_13571 - (2)),j_13570);

poly_13567.setPointColor([r_13573,g_13574,b_13575,0.1],(idx_13571 - (3)),j_13570);

var G__13578 = (j_13570 + (1));
j_13570 = G__13578;
continue;
} else {
}
break;
}

var G__13579 = (i_13565 + (1));
i_13565 = G__13579;
continue;
} else {
}
break;
}

return cljs.core.reset_BANG_(animation_ref,requestAnimationFrame(map$views$globe_utils$animate_routes_$_animate));
});
console.log("Starting animation loop...");

animate();

return console.log("Animation started with ID:",cljs.core.deref(animation_ref));
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
