goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14766){
var map__14768 = p__14766;
var map__14768__$1 = cljs.core.__destructure_map(map__14768);
var runtime = map__14768__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14768__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14930 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14930)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14784 = runtime;
var G__14785 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14930);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14784,G__14785) : shadow.remote.runtime.shared.process.call(null,G__14784,G__14785));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14787,res){
var map__14788 = p__14787;
var map__14788__$1 = cljs.core.__destructure_map(map__14788);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14788__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14788__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14789 = res;
var G__14789__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14789,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14789);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14789__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14789__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14799 = arguments.length;
switch (G__14799) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14804,msg,handlers,timeout_after_ms){
var map__14805 = p__14804;
var map__14805__$1 = cljs.core.__destructure_map(map__14805);
var runtime = map__14805__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14805__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14938 = arguments.length;
var i__5727__auto___14939 = (0);
while(true){
if((i__5727__auto___14939 < len__5726__auto___14938)){
args__5732__auto__.push((arguments[i__5727__auto___14939]));

var G__14941 = (i__5727__auto___14939 + (1));
i__5727__auto___14939 = G__14941;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14814,ev,args){
var map__14815 = p__14814;
var map__14815__$1 = cljs.core.__destructure_map(map__14815);
var runtime = map__14815__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14815__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14820 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14823 = null;
var count__14824 = (0);
var i__14825 = (0);
while(true){
if((i__14825 < count__14824)){
var ext = chunk__14823.cljs$core$IIndexed$_nth$arity$2(null,i__14825);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14942 = seq__14820;
var G__14943 = chunk__14823;
var G__14944 = count__14824;
var G__14945 = (i__14825 + (1));
seq__14820 = G__14942;
chunk__14823 = G__14943;
count__14824 = G__14944;
i__14825 = G__14945;
continue;
} else {
var G__14946 = seq__14820;
var G__14947 = chunk__14823;
var G__14948 = count__14824;
var G__14949 = (i__14825 + (1));
seq__14820 = G__14946;
chunk__14823 = G__14947;
count__14824 = G__14948;
i__14825 = G__14949;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14820);
if(temp__5804__auto__){
var seq__14820__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14820__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14820__$1);
var G__14950 = cljs.core.chunk_rest(seq__14820__$1);
var G__14951 = c__5525__auto__;
var G__14952 = cljs.core.count(c__5525__auto__);
var G__14953 = (0);
seq__14820 = G__14950;
chunk__14823 = G__14951;
count__14824 = G__14952;
i__14825 = G__14953;
continue;
} else {
var ext = cljs.core.first(seq__14820__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14954 = cljs.core.next(seq__14820__$1);
var G__14955 = null;
var G__14956 = (0);
var G__14957 = (0);
seq__14820 = G__14954;
chunk__14823 = G__14955;
count__14824 = G__14956;
i__14825 = G__14957;
continue;
} else {
var G__14958 = cljs.core.next(seq__14820__$1);
var G__14959 = null;
var G__14960 = (0);
var G__14961 = (0);
seq__14820 = G__14958;
chunk__14823 = G__14959;
count__14824 = G__14960;
i__14825 = G__14961;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14811){
var G__14812 = cljs.core.first(seq14811);
var seq14811__$1 = cljs.core.next(seq14811);
var G__14813 = cljs.core.first(seq14811__$1);
var seq14811__$2 = cljs.core.next(seq14811__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14812,G__14813,seq14811__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14831,p__14832){
var map__14833 = p__14831;
var map__14833__$1 = cljs.core.__destructure_map(map__14833);
var runtime = map__14833__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14833__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14834 = p__14832;
var map__14834__$1 = cljs.core.__destructure_map(map__14834);
var msg = map__14834__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14834__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14839 = cljs.core.deref(state_ref);
var map__14839__$1 = cljs.core.__destructure_map(map__14839);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14839__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14839__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14841,msg){
var map__14842 = p__14841;
var map__14842__$1 = cljs.core.__destructure_map(map__14842);
var runtime = map__14842__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14842__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14847,key,p__14848){
var map__14849 = p__14847;
var map__14849__$1 = cljs.core.__destructure_map(map__14849);
var state = map__14849__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14849__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14850 = p__14848;
var map__14850__$1 = cljs.core.__destructure_map(map__14850);
var spec = map__14850__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14850__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14850__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14854,key,spec){
var map__14856 = p__14854;
var map__14856__$1 = cljs.core.__destructure_map(map__14856);
var runtime = map__14856__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14856__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14992 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14992 == null)){
} else {
var on_welcome_14993 = temp__5808__auto___14992;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14993.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14993.cljs$core$IFn$_invoke$arity$0() : on_welcome_14993.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14861_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14861_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14862_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14862_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14863_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14863_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14864_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14864_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14865_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14865_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14871,key){
var map__14872 = p__14871;
var map__14872__$1 = cljs.core.__destructure_map(map__14872);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14872__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14875,msg){
var map__14877 = p__14875;
var map__14877__$1 = cljs.core.__destructure_map(map__14877);
var runtime = map__14877__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14877__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14881,p__14882){
var map__14883 = p__14881;
var map__14883__$1 = cljs.core.__destructure_map(map__14883);
var runtime = map__14883__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14883__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14884 = p__14882;
var map__14884__$1 = cljs.core.__destructure_map(map__14884);
var msg = map__14884__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14884__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14884__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14893 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14895 = null;
var count__14896 = (0);
var i__14897 = (0);
while(true){
if((i__14897 < count__14896)){
var map__14911 = chunk__14895.cljs$core$IIndexed$_nth$arity$2(null,i__14897);
var map__14911__$1 = cljs.core.__destructure_map(map__14911);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14911__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15038 = seq__14893;
var G__15039 = chunk__14895;
var G__15040 = count__14896;
var G__15041 = (i__14897 + (1));
seq__14893 = G__15038;
chunk__14895 = G__15039;
count__14896 = G__15040;
i__14897 = G__15041;
continue;
} else {
var G__15043 = seq__14893;
var G__15044 = chunk__14895;
var G__15045 = count__14896;
var G__15046 = (i__14897 + (1));
seq__14893 = G__15043;
chunk__14895 = G__15044;
count__14896 = G__15045;
i__14897 = G__15046;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14893);
if(temp__5804__auto__){
var seq__14893__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14893__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14893__$1);
var G__15047 = cljs.core.chunk_rest(seq__14893__$1);
var G__15048 = c__5525__auto__;
var G__15049 = cljs.core.count(c__5525__auto__);
var G__15050 = (0);
seq__14893 = G__15047;
chunk__14895 = G__15048;
count__14896 = G__15049;
i__14897 = G__15050;
continue;
} else {
var map__14928 = cljs.core.first(seq__14893__$1);
var map__14928__$1 = cljs.core.__destructure_map(map__14928);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14928__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__15055 = cljs.core.next(seq__14893__$1);
var G__15056 = null;
var G__15057 = (0);
var G__15058 = (0);
seq__14893 = G__15055;
chunk__14895 = G__15056;
count__14896 = G__15057;
i__14897 = G__15058;
continue;
} else {
var G__15059 = cljs.core.next(seq__14893__$1);
var G__15060 = null;
var G__15061 = (0);
var G__15062 = (0);
seq__14893 = G__15059;
chunk__14895 = G__15060;
count__14896 = G__15061;
i__14897 = G__15062;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
