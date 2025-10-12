goog.provide('map.views.globe');
var module$node_modules$$openglobus$og$lib$og_es=shadow.js.require("module$node_modules$$openglobus$og$lib$og_es", {});
map.views.globe.destroy_globe_resources = (function map$views$globe$destroy_globe_resources(globe_state){
var temp__5804__auto__ = cljs.core.deref(globe_state);
if(cljs.core.truth_(temp__5804__auto__)){
var map__13623 = temp__5804__auto__;
var map__13623__$1 = cljs.core.__destructure_map(map__13623);
var globe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13623__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
var collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13623__$1,new cljs.core.Keyword(null,"collection","collection",-683361892));
try{console.log("Destroying globe resources...");

if(cljs.core.truth_(collection)){
collection.clear();
} else {
}

if(cljs.core.truth_(globe)){
globe.destroy();
} else {
}
}catch (e13624){var e_13636 = e13624;
console.error("Error during cleanup:",e_13636);
}
return cljs.core.reset_BANG_(globe_state,null);
} else {
return null;
}
});
map.views.globe.globe_view = (function map$views$globe$globe_view(){
var globe_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var animation_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
console.log("=== COMPONENT DID MOUNT ===");

return setTimeout((function (){
try{console.log("Initializing globe...");

var map__13626 = map.views.globe_utils.init_globe();
var map__13626__$1 = cljs.core.__destructure_map(map__13626);
var globe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13626__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
var ellipsoid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13626__$1,new cljs.core.Keyword(null,"ellipsoid","ellipsoid",-325087822));
var collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13626__$1,new cljs.core.Keyword(null,"collection","collection",-683361892));
var LonLat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13626__$1,new cljs.core.Keyword(null,"LonLat","LonLat",336253111));
var Entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13626__$1,new cljs.core.Keyword(null,"Entity","Entity",313406975));
cljs.core.reset_BANG_(globe_state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"globe","globe",662172797),globe,new cljs.core.Keyword(null,"ellipsoid","ellipsoid",-325087822),ellipsoid,new cljs.core.Keyword(null,"collection","collection",-683361892),collection,new cljs.core.Keyword(null,"LonLat","LonLat",336253111),LonLat,new cljs.core.Keyword(null,"Entity","Entity",313406975),Entity], null));

console.log("Globe initialized successfully");

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-globe-instance","map/set-globe-instance",1713314293),globe], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-saved-routes","map/fetch-saved-routes",-489955777)], null));

var vec__13627 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13627,(0),null);
var routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13627,(1),null);
if(cljs.core.seq(routes)){
console.log("Initial routes render after globe init, count:",cljs.core.count(routes));

try{var render_result = map.views.globe_utils.render_routes(globe,ellipsoid,collection,routes,(70));
if(cljs.core.truth_((function (){var and__5000__auto__ = render_result;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(render_result);
} else {
return and__5000__auto__;
}
})())){
console.log("Starting initial animation...");

return map.views.globe_utils.animate_routes(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(render_result),new cljs.core.Keyword(null,"anim-index","anim-index",-1563021855).cljs$core$IFn$_invoke$arity$1(render_result),(70),animation_ref);
} else {
return null;
}
}catch (e13630){var e = e13630;
return console.error("Error rendering initial routes:",e);
}} else {
return null;
}
}catch (e13625){var e = e13625;
return console.error("Error initializing globe:",e);
}}),(100));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
console.log("\n=== COMPONENT DID UPDATE ===");

console.log("Old argv:",old_argv);

console.log("New argv:",reagent.core.argv(this$));

var vec__13631 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13631,(0),null);
var routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13631,(1),null);
console.log("Routes from props:",routes);

console.log("Routes count:",cljs.core.count(routes));

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(globe_state);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(routes);
} else {
return and__5000__auto__;
}
})())){
console.log("Rendering routes...");

var map__13634 = cljs.core.deref(globe_state);
var map__13634__$1 = cljs.core.__destructure_map(map__13634);
var globe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13634__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
var ellipsoid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13634__$1,new cljs.core.Keyword(null,"ellipsoid","ellipsoid",-325087822));
var collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13634__$1,new cljs.core.Keyword(null,"collection","collection",-683361892));
if(cljs.core.truth_((function (){var and__5000__auto__ = globe;
if(cljs.core.truth_(and__5000__auto__)){
return collection;
} else {
return and__5000__auto__;
}
})())){
try{var render_result = map.views.globe_utils.render_routes(globe,ellipsoid,collection,routes,(70));
console.log("Render result:",render_result);

if(cljs.core.truth_((function (){var and__5000__auto__ = render_result;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(render_result);
} else {
return and__5000__auto__;
}
})())){
console.log("Starting animation...");

return map.views.globe_utils.animate_routes(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(render_result),new cljs.core.Keyword(null,"anim-index","anim-index",-1563021855).cljs$core$IFn$_invoke$arity$1(render_result),(70),animation_ref);
} else {
return null;
}
}catch (e13635){var e = e13635;
return console.error("Error rendering routes:",e);
}} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
console.log("=== COMPONENT WILL UNMOUNT ===");

if(cljs.core.truth_(cljs.core.deref(animation_ref))){
cancelAnimationFrame(cljs.core.deref(animation_ref));
} else {
}

return map.views.globe.destroy_globe_resources(globe_state);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (routes){
console.log("RENDER called with routes count:",cljs.core.count(routes));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#globe-container","div#globe-container",-1431384685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null);
})], null));
});
map.views.globe.globe_view_wrapper = (function map$views$globe$globe_view_wrapper(){
var routes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","routes","map/routes",457766694)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [map.views.globe.globe_view,routes], null);
});

//# sourceMappingURL=map.views.globe.js.map
