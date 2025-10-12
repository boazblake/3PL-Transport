goog.provide('map.core');
if((typeof map !== 'undefined') && (typeof map.core !== 'undefined') && (typeof map.core.root !== 'undefined')){
} else {
map.core.root = reagent.dom.client.create_root(document.getElementById("app"));
}
map.core.mount_root = (function map$core$mount_root(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(map.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [map.views.main_view], null));
});
map.core.init = (function map$core$init(){
return map.core.mount_root();
});
goog.exportSymbol('map.core.init', map.core.init);
map.core.reload = (function map$core$reload(){
return map.core.mount_root();
});

//# sourceMappingURL=map.core.js.map
