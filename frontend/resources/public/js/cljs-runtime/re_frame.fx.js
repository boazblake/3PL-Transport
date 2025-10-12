goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23014 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23015 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23015);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23082 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23082)){
var new_db_23083 = temp__5804__auto___23082;
var fexpr__23016_23084 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23016_23084.cljs$core$IFn$_invoke$arity$1 ? fexpr__23016_23084.cljs$core$IFn$_invoke$arity$1(new_db_23083) : fexpr__23016_23084.call(null,new_db_23083));
} else {
}

var seq__23017 = cljs.core.seq(effects_without_db);
var chunk__23018 = null;
var count__23019 = (0);
var i__23020 = (0);
while(true){
if((i__23020 < count__23019)){
var vec__23027 = chunk__23018.cljs$core$IIndexed$_nth$arity$2(null,i__23020);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23027,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23027,(1),null);
var temp__5802__auto___23085 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23085)){
var effect_fn_23086 = temp__5802__auto___23085;
(effect_fn_23086.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23086.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23086.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__23087 = seq__23017;
var G__23088 = chunk__23018;
var G__23089 = count__23019;
var G__23090 = (i__23020 + (1));
seq__23017 = G__23087;
chunk__23018 = G__23088;
count__23019 = G__23089;
i__23020 = G__23090;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23017);
if(temp__5804__auto__){
var seq__23017__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23017__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23017__$1);
var G__23091 = cljs.core.chunk_rest(seq__23017__$1);
var G__23092 = c__5525__auto__;
var G__23093 = cljs.core.count(c__5525__auto__);
var G__23094 = (0);
seq__23017 = G__23091;
chunk__23018 = G__23092;
count__23019 = G__23093;
i__23020 = G__23094;
continue;
} else {
var vec__23030 = cljs.core.first(seq__23017__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23030,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23030,(1),null);
var temp__5802__auto___23095 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23095)){
var effect_fn_23096 = temp__5802__auto___23095;
(effect_fn_23096.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23096.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23096.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__23097 = cljs.core.next(seq__23017__$1);
var G__23098 = null;
var G__23099 = (0);
var G__23100 = (0);
seq__23017 = G__23097;
chunk__23018 = G__23098;
count__23019 = G__23099;
i__23020 = G__23100;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22586__auto___23101 = re_frame.interop.now();
var duration__22587__auto___23102 = (end__22586__auto___23101 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22587__auto___23102,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22586__auto___23101);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23014);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23103 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23103)){
var new_db_23104 = temp__5804__auto___23103;
var fexpr__23033_23105 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23033_23105.cljs$core$IFn$_invoke$arity$1 ? fexpr__23033_23105.cljs$core$IFn$_invoke$arity$1(new_db_23104) : fexpr__23033_23105.call(null,new_db_23104));
} else {
}

var seq__23034 = cljs.core.seq(effects_without_db);
var chunk__23035 = null;
var count__23036 = (0);
var i__23037 = (0);
while(true){
if((i__23037 < count__23036)){
var vec__23044 = chunk__23035.cljs$core$IIndexed$_nth$arity$2(null,i__23037);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23044,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23044,(1),null);
var temp__5802__auto___23106 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23106)){
var effect_fn_23107 = temp__5802__auto___23106;
(effect_fn_23107.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23107.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23107.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__23108 = seq__23034;
var G__23109 = chunk__23035;
var G__23110 = count__23036;
var G__23111 = (i__23037 + (1));
seq__23034 = G__23108;
chunk__23035 = G__23109;
count__23036 = G__23110;
i__23037 = G__23111;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23034);
if(temp__5804__auto__){
var seq__23034__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23034__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23034__$1);
var G__23112 = cljs.core.chunk_rest(seq__23034__$1);
var G__23113 = c__5525__auto__;
var G__23114 = cljs.core.count(c__5525__auto__);
var G__23115 = (0);
seq__23034 = G__23112;
chunk__23035 = G__23113;
count__23036 = G__23114;
i__23037 = G__23115;
continue;
} else {
var vec__23047 = cljs.core.first(seq__23034__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23047,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23047,(1),null);
var temp__5802__auto___23116 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23116)){
var effect_fn_23117 = temp__5802__auto___23116;
(effect_fn_23117.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23117.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23117.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring.",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event","event",301435442),effect_key))?["You may be trying to return a coeffect map from an event-fx handler. ","See https://day8.github.io/re-frame/use-cofx-as-fx/"].join(''):null)], 0));
}


var G__23118 = cljs.core.next(seq__23034__$1);
var G__23119 = null;
var G__23120 = (0);
var G__23121 = (0);
seq__23034 = G__23118;
chunk__23035 = G__23119;
count__23036 = G__23120;
i__23037 = G__23121;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__23050){
var map__23051 = p__23050;
var map__23051__$1 = cljs.core.__destructure_map(map__23051);
var effect = map__23051__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23051__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23051__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__23052 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23053 = null;
var count__23054 = (0);
var i__23055 = (0);
while(true){
if((i__23055 < count__23054)){
var effect = chunk__23053.cljs$core$IIndexed$_nth$arity$2(null,i__23055);
re_frame.fx.dispatch_later(effect);


var G__23122 = seq__23052;
var G__23123 = chunk__23053;
var G__23124 = count__23054;
var G__23125 = (i__23055 + (1));
seq__23052 = G__23122;
chunk__23053 = G__23123;
count__23054 = G__23124;
i__23055 = G__23125;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23052);
if(temp__5804__auto__){
var seq__23052__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23052__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23052__$1);
var G__23126 = cljs.core.chunk_rest(seq__23052__$1);
var G__23127 = c__5525__auto__;
var G__23128 = cljs.core.count(c__5525__auto__);
var G__23129 = (0);
seq__23052 = G__23126;
chunk__23053 = G__23127;
count__23054 = G__23128;
i__23055 = G__23129;
continue;
} else {
var effect = cljs.core.first(seq__23052__$1);
re_frame.fx.dispatch_later(effect);


var G__23130 = cljs.core.next(seq__23052__$1);
var G__23131 = null;
var G__23132 = (0);
var G__23133 = (0);
seq__23052 = G__23130;
chunk__23053 = G__23131;
count__23054 = G__23132;
i__23055 = G__23133;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__23056 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23057 = null;
var count__23058 = (0);
var i__23059 = (0);
while(true){
if((i__23059 < count__23058)){
var vec__23066 = chunk__23057.cljs$core$IIndexed$_nth$arity$2(null,i__23059);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23066,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23066,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23134 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23134)){
var effect_fn_23135 = temp__5802__auto___23134;
(effect_fn_23135.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23135.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23135.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23136 = seq__23056;
var G__23137 = chunk__23057;
var G__23138 = count__23058;
var G__23139 = (i__23059 + (1));
seq__23056 = G__23136;
chunk__23057 = G__23137;
count__23058 = G__23138;
i__23059 = G__23139;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23056);
if(temp__5804__auto__){
var seq__23056__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23056__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23056__$1);
var G__23140 = cljs.core.chunk_rest(seq__23056__$1);
var G__23141 = c__5525__auto__;
var G__23142 = cljs.core.count(c__5525__auto__);
var G__23143 = (0);
seq__23056 = G__23140;
chunk__23057 = G__23141;
count__23058 = G__23142;
i__23059 = G__23143;
continue;
} else {
var vec__23069 = cljs.core.first(seq__23056__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23069,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23069,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23144 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23144)){
var effect_fn_23145 = temp__5802__auto___23144;
(effect_fn_23145.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23145.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23145.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23146 = cljs.core.next(seq__23056__$1);
var G__23147 = null;
var G__23148 = (0);
var G__23149 = (0);
seq__23056 = G__23146;
chunk__23057 = G__23147;
count__23058 = G__23148;
i__23059 = G__23149;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__23072 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23073 = null;
var count__23074 = (0);
var i__23075 = (0);
while(true){
if((i__23075 < count__23074)){
var event = chunk__23073.cljs$core$IIndexed$_nth$arity$2(null,i__23075);
re_frame.router.dispatch(event);


var G__23150 = seq__23072;
var G__23151 = chunk__23073;
var G__23152 = count__23074;
var G__23153 = (i__23075 + (1));
seq__23072 = G__23150;
chunk__23073 = G__23151;
count__23074 = G__23152;
i__23075 = G__23153;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23072);
if(temp__5804__auto__){
var seq__23072__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23072__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23072__$1);
var G__23154 = cljs.core.chunk_rest(seq__23072__$1);
var G__23155 = c__5525__auto__;
var G__23156 = cljs.core.count(c__5525__auto__);
var G__23157 = (0);
seq__23072 = G__23154;
chunk__23073 = G__23155;
count__23074 = G__23156;
i__23075 = G__23157;
continue;
} else {
var event = cljs.core.first(seq__23072__$1);
re_frame.router.dispatch(event);


var G__23158 = cljs.core.next(seq__23072__$1);
var G__23159 = null;
var G__23160 = (0);
var G__23161 = (0);
seq__23072 = G__23158;
chunk__23073 = G__23159;
count__23074 = G__23160;
i__23075 = G__23161;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__23076 = cljs.core.seq(value);
var chunk__23077 = null;
var count__23078 = (0);
var i__23079 = (0);
while(true){
if((i__23079 < count__23078)){
var event = chunk__23077.cljs$core$IIndexed$_nth$arity$2(null,i__23079);
clear_event(event);


var G__23162 = seq__23076;
var G__23163 = chunk__23077;
var G__23164 = count__23078;
var G__23165 = (i__23079 + (1));
seq__23076 = G__23162;
chunk__23077 = G__23163;
count__23078 = G__23164;
i__23079 = G__23165;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23076);
if(temp__5804__auto__){
var seq__23076__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23076__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23076__$1);
var G__23166 = cljs.core.chunk_rest(seq__23076__$1);
var G__23167 = c__5525__auto__;
var G__23168 = cljs.core.count(c__5525__auto__);
var G__23169 = (0);
seq__23076 = G__23166;
chunk__23077 = G__23167;
count__23078 = G__23168;
i__23079 = G__23169;
continue;
} else {
var event = cljs.core.first(seq__23076__$1);
clear_event(event);


var G__23170 = cljs.core.next(seq__23076__$1);
var G__23171 = null;
var G__23172 = (0);
var G__23173 = (0);
seq__23076 = G__23170;
chunk__23077 = G__23171;
count__23078 = G__23172;
i__23079 = G__23173;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__23080 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23081 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23081);

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22586__auto___23174 = re_frame.interop.now();
var duration__22587__auto___23175 = (end__22586__auto___23174 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22587__auto___23175,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22586__auto___23174);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23080);
}} else {
return null;
}
}
}));

//# sourceMappingURL=re_frame.fx.js.map
