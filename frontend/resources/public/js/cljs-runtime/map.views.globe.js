goog.provide('map.views.globe');
var module$node_modules$$openglobus$og$lib$og_es=shadow.js.require("module$node_modules$$openglobus$og$lib$og_es", {});
map.views.globe.destroy_globe_resources = (function map$views$globe$destroy_globe_resources(globe_state){
var temp__5804__auto__ = cljs.core.deref(globe_state);
if(cljs.core.truth_(temp__5804__auto__)){
var map__14503 = temp__5804__auto__;
var map__14503__$1 = cljs.core.__destructure_map(map__14503);
var globe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14503__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
var collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14503__$1,new cljs.core.Keyword(null,"collection","collection",-683361892));
try{if(cljs.core.truth_(collection)){
collection.clear();
} else {
}

if(cljs.core.truth_(globe)){
globe.destroy();
} else {
}
}catch (e14504){var e_14516 = e14504;
console.error("Error during cleanup:",e_14516);
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
return setTimeout((function (){
try{var map__14506 = map.views.globe_utils.init_globe();
var map__14506__$1 = cljs.core.__destructure_map(map__14506);
var globe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14506__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
var ellipsoid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14506__$1,new cljs.core.Keyword(null,"ellipsoid","ellipsoid",-325087822));
var collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14506__$1,new cljs.core.Keyword(null,"collection","collection",-683361892));
var LonLat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14506__$1,new cljs.core.Keyword(null,"LonLat","LonLat",336253111));
var Entity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14506__$1,new cljs.core.Keyword(null,"Entity","Entity",313406975));
cljs.core.reset_BANG_(globe_state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"globe","globe",662172797),globe,new cljs.core.Keyword(null,"ellipsoid","ellipsoid",-325087822),ellipsoid,new cljs.core.Keyword(null,"collection","collection",-683361892),collection,new cljs.core.Keyword(null,"LonLat","LonLat",336253111),LonLat,new cljs.core.Keyword(null,"Entity","Entity",313406975),Entity], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","set-globe-instance","map/set-globe-instance",1713314293),globe], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","fetch-saved-routes","map/fetch-saved-routes",-489955777)], null));

var vec__14507 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14507,(0),null);
var routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14507,(1),null);
if(cljs.core.seq(routes)){
try{var render_result = map.views.globe_utils.render_routes(globe,ellipsoid,collection,routes,(70));
if(cljs.core.truth_((function (){var and__5000__auto__ = render_result;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(render_result);
} else {
return and__5000__auto__;
}
})())){
return map.views.globe_utils.animate_routes(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(render_result),new cljs.core.Keyword(null,"anim-index","anim-index",-1563021855).cljs$core$IFn$_invoke$arity$1(render_result),(70),animation_ref);
} else {
return null;
}
}catch (e14510){var e = e14510;
return console.error("Error rendering initial routes:",e);
}} else {
return null;
}
}catch (e14505){var e = e14505;
return console.error("Error initializing globe:",e);
}}),(100));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
var vec__14511 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14511,(0),null);
var routes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14511,(1),null);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(globe_state);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.seq(routes);
} else {
return and__5000__auto__;
}
})())){
var map__14514 = cljs.core.deref(globe_state);
var map__14514__$1 = cljs.core.__destructure_map(map__14514);
var globe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14514__$1,new cljs.core.Keyword(null,"globe","globe",662172797));
var ellipsoid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14514__$1,new cljs.core.Keyword(null,"ellipsoid","ellipsoid",-325087822));
var collection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14514__$1,new cljs.core.Keyword(null,"collection","collection",-683361892));
if(cljs.core.truth_((function (){var and__5000__auto__ = globe;
if(cljs.core.truth_(and__5000__auto__)){
return collection;
} else {
return and__5000__auto__;
}
})())){
try{var render_result = map.views.globe_utils.render_routes(globe,ellipsoid,collection,routes,(70));
if(cljs.core.truth_((function (){var and__5000__auto__ = render_result;
if(cljs.core.truth_(and__5000__auto__)){
return new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(render_result);
} else {
return and__5000__auto__;
}
})())){
return map.views.globe_utils.animate_routes(new cljs.core.Keyword(null,"entities","entities",1940967403).cljs$core$IFn$_invoke$arity$1(render_result),new cljs.core.Keyword(null,"anim-index","anim-index",-1563021855).cljs$core$IFn$_invoke$arity$1(render_result),(70),animation_ref);
} else {
return null;
}
}catch (e14515){var e = e14515;
return console.error("Error rendering routes:",e);
}} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
if(cljs.core.truth_(cljs.core.deref(animation_ref))){
cancelAnimationFrame(cljs.core.deref(animation_ref));
} else {
}

return map.views.globe.destroy_globe_resources(globe_state);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (routes){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#globe-container","div#globe-container",-1431384685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null)], null);
})], null));
});
map.views.globe.globe_view_wrapper = (function map$views$globe$globe_view_wrapper(){
var routes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","routes","map/routes",457766694)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [map.views.globe.globe_view,routes], null);
});

//# sourceMappingURL=map.views.globe.js.map
