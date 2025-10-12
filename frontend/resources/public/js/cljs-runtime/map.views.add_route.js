goog.provide('map.views.add_route');
map.views.add_route.route_picker_panel = (function map$views$add_route$route_picker_panel(){
var show_picker_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","show-route-picker","map/show-route-picker",-1780467441)], null)));
var available_routes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","available-routes","map/available-routes",294112873)], null)));
var saved_routes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","routes","map/routes",457766694)], null)));
var loading_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","loading-routes","map/loading-routes",-1940268742)], null)));
if(cljs.core.truth_(show_picker_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map.views.components.panel_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"20px",new cljs.core.Keyword(null,"left","left",-399115937),"20px",new cljs.core.Keyword(null,"width","width",-384071477),"300px"], null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"12px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),"Available Routes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","toggle-route-picker","map/toggle-route-picker",-2063102948)], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map.views.components.button_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background","background",-863952629),"#6c757d",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], 0))], null),"Close"], null)], null),(cljs.core.truth_(loading_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Loading routes..."], null):((cljs.core.empty_QMARK_(available_routes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No routes available"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function map$views$add_route$route_picker_panel_$_iter__14889(s__14890){
return (new cljs.core.LazySeq(null,(function (){
var s__14890__$1 = s__14890;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14890__$1);
if(temp__5804__auto__){
var s__14890__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14890__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14890__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14892 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14891 = (0);
while(true){
if((i__14891 < size__5479__auto__)){
var route = cljs.core._nth(c__5478__auto__,i__14891);
cljs.core.chunk_append(b__14892,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [map.views.components.route_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"is-saved?","is-saved?",-717971486),cljs.core.some(((function (i__14891,route,c__5478__auto__,size__5479__auto__,b__14892,s__14890__$2,temp__5804__auto__,show_picker_QMARK_,available_routes,saved_routes,loading_QMARK_){
return (function (p1__14884_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(p1__14884_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srcIata","srcIata",1153402561),new cljs.core.Keyword(null,"dstIata","dstIata",1699214109),new cljs.core.Keyword(null,"airline","airline",-1557529148)], null)),cljs.core.select_keys(route,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srcIata","srcIata",1153402561),new cljs.core.Keyword(null,"dstIata","dstIata",1699214109),new cljs.core.Keyword(null,"airline","airline",-1557529148)], null)));
});})(i__14891,route,c__5478__auto__,size__5479__auto__,b__14892,s__14890__$2,temp__5804__auto__,show_picker_QMARK_,available_routes,saved_routes,loading_QMARK_))
,saved_routes)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"srcIata","srcIata",1153402561).cljs$core$IFn$_invoke$arity$1(route)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dstIata","dstIata",1699214109).cljs$core$IFn$_invoke$arity$1(route)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"airline","airline",-1557529148).cljs$core$IFn$_invoke$arity$1(route))].join('')], null)));

var G__14897 = (i__14891 + (1));
i__14891 = G__14897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14892),map$views$add_route$route_picker_panel_$_iter__14889(cljs.core.chunk_rest(s__14890__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14892),null);
}
} else {
var route = cljs.core.first(s__14890__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [map.views.components.route_item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"is-saved?","is-saved?",-717971486),cljs.core.some(((function (route,s__14890__$2,temp__5804__auto__,show_picker_QMARK_,available_routes,saved_routes,loading_QMARK_){
return (function (p1__14884_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.select_keys(p1__14884_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srcIata","srcIata",1153402561),new cljs.core.Keyword(null,"dstIata","dstIata",1699214109),new cljs.core.Keyword(null,"airline","airline",-1557529148)], null)),cljs.core.select_keys(route,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srcIata","srcIata",1153402561),new cljs.core.Keyword(null,"dstIata","dstIata",1699214109),new cljs.core.Keyword(null,"airline","airline",-1557529148)], null)));
});})(route,s__14890__$2,temp__5804__auto__,show_picker_QMARK_,available_routes,saved_routes,loading_QMARK_))
,saved_routes)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"srcIata","srcIata",1153402561).cljs$core$IFn$_invoke$arity$1(route)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dstIata","dstIata",1699214109).cljs$core$IFn$_invoke$arity$1(route)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"airline","airline",-1557529148).cljs$core$IFn$_invoke$arity$1(route))].join('')], null)),map$views$add_route$route_picker_panel_$_iter__14889(cljs.core.rest(s__14890__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(available_routes);
})())], null)))], null);
} else {
return null;
}
});
map.views.add_route.saved_routes_panel = (function map$views$add_route$saved_routes_panel(){
var saved_routes = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","routes","map/routes",457766694)], null)));
if(cljs.core.seq(saved_routes)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map.views.components.panel_style,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),"80px",new cljs.core.Keyword(null,"right","right",-452581833),"20px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"300px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"400px"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 10px 0",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null)], null),["Saved Routes (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(saved_routes)),")"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__5480__auto__ = (function map$views$add_route$saved_routes_panel_$_iter__14893(s__14894){
return (new cljs.core.LazySeq(null,(function (){
var s__14894__$1 = s__14894;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__14894__$1);
if(temp__5804__auto__){
var s__14894__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14894__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__14894__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__14896 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__14895 = (0);
while(true){
if((i__14895 < size__5479__auto__)){
var route = cljs.core._nth(c__5478__auto__,i__14895);
cljs.core.chunk_append(b__14896,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [map.views.components.saved_route_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),route], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"srcIata","srcIata",1153402561).cljs$core$IFn$_invoke$arity$1(route)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dstIata","dstIata",1699214109).cljs$core$IFn$_invoke$arity$1(route)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"airline","airline",-1557529148).cljs$core$IFn$_invoke$arity$1(route))].join('')], null)));

var G__14898 = (i__14895 + (1));
i__14895 = G__14898;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14896),map$views$add_route$saved_routes_panel_$_iter__14893(cljs.core.chunk_rest(s__14894__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14896),null);
}
} else {
var route = cljs.core.first(s__14894__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [map.views.components.saved_route_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route","route",329891309),route], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"srcIata","srcIata",1153402561).cljs$core$IFn$_invoke$arity$1(route)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"dstIata","dstIata",1699214109).cljs$core$IFn$_invoke$arity$1(route)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"airline","airline",-1557529148).cljs$core$IFn$_invoke$arity$1(route))].join('')], null)),map$views$add_route$saved_routes_panel_$_iter__14893(cljs.core.rest(s__14894__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(saved_routes);
})()], null)], null);
} else {
return null;
}
});
map.views.add_route.route_picker_button = (function map$views$add_route$route_picker_button(){
var show_picker_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","show-route-picker","map/show-route-picker",-1780467441)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("map","toggle-route-picker","map/toggle-route-picker",-2063102948)], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([map.views.components.button_style,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"20px",new cljs.core.Keyword(null,"left","left",-399115937),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(1000),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 16px",new cljs.core.Keyword(null,"background","background",-863952629),(cljs.core.truth_(show_picker_QMARK_)?"#6c757d":"#007bff"),new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 2px 8px rgba(0,0,0,0.2)"], null)], 0))], null),(cljs.core.truth_(show_picker_QMARK_)?"Close Picker":"Pick Routes")], null);
});

//# sourceMappingURL=map.views.add_route.js.map
