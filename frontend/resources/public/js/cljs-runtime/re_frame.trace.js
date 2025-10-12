goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__22610){
var map__22611 = p__22610;
var map__22611__$1 = cljs.core.__destructure_map(map__22611);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22611__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22611__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22611__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22611__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5002__auto__ = child_of;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__22614_22658 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__22615_22659 = null;
var count__22616_22660 = (0);
var i__22617_22661 = (0);
while(true){
if((i__22617_22661 < count__22616_22660)){
var vec__22633_22664 = chunk__22615_22659.cljs$core$IIndexed$_nth$arity$2(null,i__22617_22661);
var k_22665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633_22664,(0),null);
var cb_22666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22633_22664,(1),null);
try{var G__22637_22667 = cljs.core.deref(re_frame.trace.traces);
(cb_22666.cljs$core$IFn$_invoke$arity$1 ? cb_22666.cljs$core$IFn$_invoke$arity$1(G__22637_22667) : cb_22666.call(null,G__22637_22667));
}catch (e22636){var e_22668 = e22636;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22665,"while storing",cljs.core.deref(re_frame.trace.traces),e_22668], 0));
}

var G__22669 = seq__22614_22658;
var G__22670 = chunk__22615_22659;
var G__22671 = count__22616_22660;
var G__22672 = (i__22617_22661 + (1));
seq__22614_22658 = G__22669;
chunk__22615_22659 = G__22670;
count__22616_22660 = G__22671;
i__22617_22661 = G__22672;
continue;
} else {
var temp__5804__auto___22673 = cljs.core.seq(seq__22614_22658);
if(temp__5804__auto___22673){
var seq__22614_22674__$1 = temp__5804__auto___22673;
if(cljs.core.chunked_seq_QMARK_(seq__22614_22674__$1)){
var c__5525__auto___22675 = cljs.core.chunk_first(seq__22614_22674__$1);
var G__22676 = cljs.core.chunk_rest(seq__22614_22674__$1);
var G__22677 = c__5525__auto___22675;
var G__22678 = cljs.core.count(c__5525__auto___22675);
var G__22679 = (0);
seq__22614_22658 = G__22676;
chunk__22615_22659 = G__22677;
count__22616_22660 = G__22678;
i__22617_22661 = G__22679;
continue;
} else {
var vec__22638_22680 = cljs.core.first(seq__22614_22674__$1);
var k_22681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22638_22680,(0),null);
var cb_22682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22638_22680,(1),null);
try{var G__22644_22683 = cljs.core.deref(re_frame.trace.traces);
(cb_22682.cljs$core$IFn$_invoke$arity$1 ? cb_22682.cljs$core$IFn$_invoke$arity$1(G__22644_22683) : cb_22682.call(null,G__22644_22683));
}catch (e22642){var e_22684 = e22642;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_22681,"while storing",cljs.core.deref(re_frame.trace.traces),e_22684], 0));
}

var G__22685 = cljs.core.next(seq__22614_22674__$1);
var G__22686 = null;
var G__22687 = (0);
var G__22688 = (0);
seq__22614_22658 = G__22685;
chunk__22615_22659 = G__22686;
count__22616_22660 = G__22687;
i__22617_22661 = G__22688;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
