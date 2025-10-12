goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21450 = arguments.length;
var i__5727__auto___21451 = (0);
while(true){
if((i__5727__auto___21451 < len__5726__auto___21450)){
args__5732__auto__.push((arguments[i__5727__auto___21451]));

var G__21453 = (i__5727__auto___21451 + (1));
i__5727__auto___21451 = G__21453;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20875){
var G__20876 = cljs.core.first(seq20875);
var seq20875__$1 = cljs.core.next(seq20875);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20876,seq20875__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20878 = cljs.core.seq(sources);
var chunk__20879 = null;
var count__20880 = (0);
var i__20881 = (0);
while(true){
if((i__20881 < count__20880)){
var map__20891 = chunk__20879.cljs$core$IIndexed$_nth$arity$2(null,i__20881);
var map__20891__$1 = cljs.core.__destructure_map(map__20891);
var src = map__20891__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20891__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20891__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20891__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20891__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20892){var e_21454 = e20892;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21454);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21454.message)].join('')));
}

var G__21457 = seq__20878;
var G__21458 = chunk__20879;
var G__21459 = count__20880;
var G__21460 = (i__20881 + (1));
seq__20878 = G__21457;
chunk__20879 = G__21458;
count__20880 = G__21459;
i__20881 = G__21460;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20878);
if(temp__5804__auto__){
var seq__20878__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20878__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20878__$1);
var G__21463 = cljs.core.chunk_rest(seq__20878__$1);
var G__21464 = c__5525__auto__;
var G__21465 = cljs.core.count(c__5525__auto__);
var G__21466 = (0);
seq__20878 = G__21463;
chunk__20879 = G__21464;
count__20880 = G__21465;
i__20881 = G__21466;
continue;
} else {
var map__20893 = cljs.core.first(seq__20878__$1);
var map__20893__$1 = cljs.core.__destructure_map(map__20893);
var src = map__20893__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20893__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20894){var e_21467 = e20894;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21467);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21467.message)].join('')));
}

var G__21468 = cljs.core.next(seq__20878__$1);
var G__21469 = null;
var G__21470 = (0);
var G__21471 = (0);
seq__20878 = G__21468;
chunk__20879 = G__21469;
count__20880 = G__21470;
i__20881 = G__21471;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20899 = cljs.core.seq(js_requires);
var chunk__20900 = null;
var count__20901 = (0);
var i__20902 = (0);
while(true){
if((i__20902 < count__20901)){
var js_ns = chunk__20900.cljs$core$IIndexed$_nth$arity$2(null,i__20902);
var require_str_21472 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21472);


var G__21473 = seq__20899;
var G__21474 = chunk__20900;
var G__21475 = count__20901;
var G__21476 = (i__20902 + (1));
seq__20899 = G__21473;
chunk__20900 = G__21474;
count__20901 = G__21475;
i__20902 = G__21476;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20899);
if(temp__5804__auto__){
var seq__20899__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20899__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20899__$1);
var G__21477 = cljs.core.chunk_rest(seq__20899__$1);
var G__21478 = c__5525__auto__;
var G__21479 = cljs.core.count(c__5525__auto__);
var G__21480 = (0);
seq__20899 = G__21477;
chunk__20900 = G__21478;
count__20901 = G__21479;
i__20902 = G__21480;
continue;
} else {
var js_ns = cljs.core.first(seq__20899__$1);
var require_str_21481 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21481);


var G__21482 = cljs.core.next(seq__20899__$1);
var G__21483 = null;
var G__21484 = (0);
var G__21485 = (0);
seq__20899 = G__21482;
chunk__20900 = G__21483;
count__20901 = G__21484;
i__20902 = G__21485;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20917){
var map__20918 = p__20917;
var map__20918__$1 = cljs.core.__destructure_map(map__20918);
var msg = map__20918__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20918__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20918__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20924(s__20925){
return (new cljs.core.LazySeq(null,(function (){
var s__20925__$1 = s__20925;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20925__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20933 = cljs.core.first(xs__6360__auto__);
var map__20933__$1 = cljs.core.__destructure_map(map__20933);
var src = map__20933__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20933__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20933__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20925__$1,map__20933,map__20933__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20918,map__20918__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20924_$_iter__20926(s__20927){
return (new cljs.core.LazySeq(null,((function (s__20925__$1,map__20933,map__20933__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20918,map__20918__$1,msg,info,reload_info){
return (function (){
var s__20927__$1 = s__20927;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20927__$1);
if(temp__5804__auto____$1){
var s__20927__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20927__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20927__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20929 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20928 = (0);
while(true){
if((i__20928 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20928);
cljs.core.chunk_append(b__20929,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21486 = (i__20928 + (1));
i__20928 = G__21486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20929),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20924_$_iter__20926(cljs.core.chunk_rest(s__20927__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20929),null);
}
} else {
var warning = cljs.core.first(s__20927__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20924_$_iter__20926(cljs.core.rest(s__20927__$2)));
}
} else {
return null;
}
break;
}
});})(s__20925__$1,map__20933,map__20933__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20918,map__20918__$1,msg,info,reload_info))
,null,null));
});})(s__20925__$1,map__20933,map__20933__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20918,map__20918__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20924(cljs.core.rest(s__20925__$1)));
} else {
var G__21487 = cljs.core.rest(s__20925__$1);
s__20925__$1 = G__21487;
continue;
}
} else {
var G__21488 = cljs.core.rest(s__20925__$1);
s__20925__$1 = G__21488;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20935_21489 = cljs.core.seq(warnings);
var chunk__20936_21490 = null;
var count__20937_21491 = (0);
var i__20938_21492 = (0);
while(true){
if((i__20938_21492 < count__20937_21491)){
var map__20942_21493 = chunk__20936_21490.cljs$core$IIndexed$_nth$arity$2(null,i__20938_21492);
var map__20942_21494__$1 = cljs.core.__destructure_map(map__20942_21493);
var w_21495 = map__20942_21494__$1;
var msg_21496__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20942_21494__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20942_21494__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20942_21494__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20942_21494__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21499)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21497),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21498),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21496__$1)].join(''));


var G__21502 = seq__20935_21489;
var G__21503 = chunk__20936_21490;
var G__21504 = count__20937_21491;
var G__21505 = (i__20938_21492 + (1));
seq__20935_21489 = G__21502;
chunk__20936_21490 = G__21503;
count__20937_21491 = G__21504;
i__20938_21492 = G__21505;
continue;
} else {
var temp__5804__auto___21506 = cljs.core.seq(seq__20935_21489);
if(temp__5804__auto___21506){
var seq__20935_21507__$1 = temp__5804__auto___21506;
if(cljs.core.chunked_seq_QMARK_(seq__20935_21507__$1)){
var c__5525__auto___21508 = cljs.core.chunk_first(seq__20935_21507__$1);
var G__21509 = cljs.core.chunk_rest(seq__20935_21507__$1);
var G__21510 = c__5525__auto___21508;
var G__21511 = cljs.core.count(c__5525__auto___21508);
var G__21512 = (0);
seq__20935_21489 = G__21509;
chunk__20936_21490 = G__21510;
count__20937_21491 = G__21511;
i__20938_21492 = G__21512;
continue;
} else {
var map__20943_21513 = cljs.core.first(seq__20935_21507__$1);
var map__20943_21514__$1 = cljs.core.__destructure_map(map__20943_21513);
var w_21515 = map__20943_21514__$1;
var msg_21516__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20943_21514__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20943_21514__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20943_21514__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20943_21514__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21519)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21517),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21518),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21516__$1)].join(''));


var G__21520 = cljs.core.next(seq__20935_21507__$1);
var G__21521 = null;
var G__21522 = (0);
var G__21523 = (0);
seq__20935_21489 = G__21520;
chunk__20936_21490 = G__21521;
count__20937_21491 = G__21522;
i__20938_21492 = G__21523;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20910_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20910_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__20964 = node_uri;
G__20964.setQuery(null);

G__20964.setPath(new$);

return G__20964;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20969){
var map__20970 = p__20969;
var map__20970__$1 = cljs.core.__destructure_map(map__20970);
var msg = map__20970__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20970__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20970__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20972 = cljs.core.seq(updates);
var chunk__20974 = null;
var count__20975 = (0);
var i__20976 = (0);
while(true){
if((i__20976 < count__20975)){
var path = chunk__20974.cljs$core$IIndexed$_nth$arity$2(null,i__20976);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21267_21524 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21271_21525 = null;
var count__21272_21526 = (0);
var i__21273_21527 = (0);
while(true){
if((i__21273_21527 < count__21272_21526)){
var node_21528 = chunk__21271_21525.cljs$core$IIndexed$_nth$arity$2(null,i__21273_21527);
if(cljs.core.not(node_21528.shadow$old)){
var path_match_21529 = shadow.cljs.devtools.client.browser.match_paths(node_21528.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21529)){
var new_link_21530 = (function (){var G__21299 = node_21528.cloneNode(true);
G__21299.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21529),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21299;
})();
(node_21528.shadow$old = true);

(new_link_21530.onload = ((function (seq__21267_21524,chunk__21271_21525,count__21272_21526,i__21273_21527,seq__20972,chunk__20974,count__20975,i__20976,new_link_21530,path_match_21529,node_21528,path,map__20970,map__20970__$1,msg,updates,reload_info){
return (function (e){
var seq__21300_21531 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21302_21532 = null;
var count__21303_21533 = (0);
var i__21304_21534 = (0);
while(true){
if((i__21304_21534 < count__21303_21533)){
var map__21310_21535 = chunk__21302_21532.cljs$core$IIndexed$_nth$arity$2(null,i__21304_21534);
var map__21310_21536__$1 = cljs.core.__destructure_map(map__21310_21535);
var task_21537 = map__21310_21536__$1;
var fn_str_21538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21310_21536__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21310_21536__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21540 = goog.getObjectByName(fn_str_21538,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21539)].join(''));

(fn_obj_21540.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21540.cljs$core$IFn$_invoke$arity$2(path,new_link_21530) : fn_obj_21540.call(null,path,new_link_21530));


var G__21541 = seq__21300_21531;
var G__21542 = chunk__21302_21532;
var G__21543 = count__21303_21533;
var G__21544 = (i__21304_21534 + (1));
seq__21300_21531 = G__21541;
chunk__21302_21532 = G__21542;
count__21303_21533 = G__21543;
i__21304_21534 = G__21544;
continue;
} else {
var temp__5804__auto___21545 = cljs.core.seq(seq__21300_21531);
if(temp__5804__auto___21545){
var seq__21300_21546__$1 = temp__5804__auto___21545;
if(cljs.core.chunked_seq_QMARK_(seq__21300_21546__$1)){
var c__5525__auto___21547 = cljs.core.chunk_first(seq__21300_21546__$1);
var G__21548 = cljs.core.chunk_rest(seq__21300_21546__$1);
var G__21549 = c__5525__auto___21547;
var G__21550 = cljs.core.count(c__5525__auto___21547);
var G__21551 = (0);
seq__21300_21531 = G__21548;
chunk__21302_21532 = G__21549;
count__21303_21533 = G__21550;
i__21304_21534 = G__21551;
continue;
} else {
var map__21313_21552 = cljs.core.first(seq__21300_21546__$1);
var map__21313_21553__$1 = cljs.core.__destructure_map(map__21313_21552);
var task_21554 = map__21313_21553__$1;
var fn_str_21555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21313_21553__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21313_21553__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21557 = goog.getObjectByName(fn_str_21555,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21556)].join(''));

(fn_obj_21557.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21557.cljs$core$IFn$_invoke$arity$2(path,new_link_21530) : fn_obj_21557.call(null,path,new_link_21530));


var G__21558 = cljs.core.next(seq__21300_21546__$1);
var G__21559 = null;
var G__21560 = (0);
var G__21561 = (0);
seq__21300_21531 = G__21558;
chunk__21302_21532 = G__21559;
count__21303_21533 = G__21560;
i__21304_21534 = G__21561;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21528);
});})(seq__21267_21524,chunk__21271_21525,count__21272_21526,i__21273_21527,seq__20972,chunk__20974,count__20975,i__20976,new_link_21530,path_match_21529,node_21528,path,map__20970,map__20970__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21529], 0));

goog.dom.insertSiblingAfter(new_link_21530,node_21528);


var G__21562 = seq__21267_21524;
var G__21563 = chunk__21271_21525;
var G__21564 = count__21272_21526;
var G__21565 = (i__21273_21527 + (1));
seq__21267_21524 = G__21562;
chunk__21271_21525 = G__21563;
count__21272_21526 = G__21564;
i__21273_21527 = G__21565;
continue;
} else {
var G__21566 = seq__21267_21524;
var G__21567 = chunk__21271_21525;
var G__21568 = count__21272_21526;
var G__21569 = (i__21273_21527 + (1));
seq__21267_21524 = G__21566;
chunk__21271_21525 = G__21567;
count__21272_21526 = G__21568;
i__21273_21527 = G__21569;
continue;
}
} else {
var G__21570 = seq__21267_21524;
var G__21571 = chunk__21271_21525;
var G__21572 = count__21272_21526;
var G__21573 = (i__21273_21527 + (1));
seq__21267_21524 = G__21570;
chunk__21271_21525 = G__21571;
count__21272_21526 = G__21572;
i__21273_21527 = G__21573;
continue;
}
} else {
var temp__5804__auto___21574 = cljs.core.seq(seq__21267_21524);
if(temp__5804__auto___21574){
var seq__21267_21575__$1 = temp__5804__auto___21574;
if(cljs.core.chunked_seq_QMARK_(seq__21267_21575__$1)){
var c__5525__auto___21576 = cljs.core.chunk_first(seq__21267_21575__$1);
var G__21577 = cljs.core.chunk_rest(seq__21267_21575__$1);
var G__21578 = c__5525__auto___21576;
var G__21579 = cljs.core.count(c__5525__auto___21576);
var G__21580 = (0);
seq__21267_21524 = G__21577;
chunk__21271_21525 = G__21578;
count__21272_21526 = G__21579;
i__21273_21527 = G__21580;
continue;
} else {
var node_21581 = cljs.core.first(seq__21267_21575__$1);
if(cljs.core.not(node_21581.shadow$old)){
var path_match_21582 = shadow.cljs.devtools.client.browser.match_paths(node_21581.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21582)){
var new_link_21583 = (function (){var G__21314 = node_21581.cloneNode(true);
G__21314.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21582),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21314;
})();
(node_21581.shadow$old = true);

(new_link_21583.onload = ((function (seq__21267_21524,chunk__21271_21525,count__21272_21526,i__21273_21527,seq__20972,chunk__20974,count__20975,i__20976,new_link_21583,path_match_21582,node_21581,seq__21267_21575__$1,temp__5804__auto___21574,path,map__20970,map__20970__$1,msg,updates,reload_info){
return (function (e){
var seq__21315_21584 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21317_21585 = null;
var count__21318_21586 = (0);
var i__21319_21587 = (0);
while(true){
if((i__21319_21587 < count__21318_21586)){
var map__21323_21588 = chunk__21317_21585.cljs$core$IIndexed$_nth$arity$2(null,i__21319_21587);
var map__21323_21589__$1 = cljs.core.__destructure_map(map__21323_21588);
var task_21590 = map__21323_21589__$1;
var fn_str_21591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21323_21589__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21323_21589__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21593 = goog.getObjectByName(fn_str_21591,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21592)].join(''));

(fn_obj_21593.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21593.cljs$core$IFn$_invoke$arity$2(path,new_link_21583) : fn_obj_21593.call(null,path,new_link_21583));


var G__21594 = seq__21315_21584;
var G__21595 = chunk__21317_21585;
var G__21596 = count__21318_21586;
var G__21597 = (i__21319_21587 + (1));
seq__21315_21584 = G__21594;
chunk__21317_21585 = G__21595;
count__21318_21586 = G__21596;
i__21319_21587 = G__21597;
continue;
} else {
var temp__5804__auto___21599__$1 = cljs.core.seq(seq__21315_21584);
if(temp__5804__auto___21599__$1){
var seq__21315_21602__$1 = temp__5804__auto___21599__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21315_21602__$1)){
var c__5525__auto___21603 = cljs.core.chunk_first(seq__21315_21602__$1);
var G__21604 = cljs.core.chunk_rest(seq__21315_21602__$1);
var G__21605 = c__5525__auto___21603;
var G__21606 = cljs.core.count(c__5525__auto___21603);
var G__21607 = (0);
seq__21315_21584 = G__21604;
chunk__21317_21585 = G__21605;
count__21318_21586 = G__21606;
i__21319_21587 = G__21607;
continue;
} else {
var map__21324_21608 = cljs.core.first(seq__21315_21602__$1);
var map__21324_21609__$1 = cljs.core.__destructure_map(map__21324_21608);
var task_21610 = map__21324_21609__$1;
var fn_str_21611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21324_21609__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21324_21609__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21613 = goog.getObjectByName(fn_str_21611,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21612)].join(''));

(fn_obj_21613.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21613.cljs$core$IFn$_invoke$arity$2(path,new_link_21583) : fn_obj_21613.call(null,path,new_link_21583));


var G__21614 = cljs.core.next(seq__21315_21602__$1);
var G__21615 = null;
var G__21616 = (0);
var G__21617 = (0);
seq__21315_21584 = G__21614;
chunk__21317_21585 = G__21615;
count__21318_21586 = G__21616;
i__21319_21587 = G__21617;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21581);
});})(seq__21267_21524,chunk__21271_21525,count__21272_21526,i__21273_21527,seq__20972,chunk__20974,count__20975,i__20976,new_link_21583,path_match_21582,node_21581,seq__21267_21575__$1,temp__5804__auto___21574,path,map__20970,map__20970__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21582], 0));

goog.dom.insertSiblingAfter(new_link_21583,node_21581);


var G__21618 = cljs.core.next(seq__21267_21575__$1);
var G__21619 = null;
var G__21620 = (0);
var G__21621 = (0);
seq__21267_21524 = G__21618;
chunk__21271_21525 = G__21619;
count__21272_21526 = G__21620;
i__21273_21527 = G__21621;
continue;
} else {
var G__21622 = cljs.core.next(seq__21267_21575__$1);
var G__21623 = null;
var G__21624 = (0);
var G__21625 = (0);
seq__21267_21524 = G__21622;
chunk__21271_21525 = G__21623;
count__21272_21526 = G__21624;
i__21273_21527 = G__21625;
continue;
}
} else {
var G__21627 = cljs.core.next(seq__21267_21575__$1);
var G__21628 = null;
var G__21629 = (0);
var G__21630 = (0);
seq__21267_21524 = G__21627;
chunk__21271_21525 = G__21628;
count__21272_21526 = G__21629;
i__21273_21527 = G__21630;
continue;
}
}
} else {
}
}
break;
}


var G__21631 = seq__20972;
var G__21632 = chunk__20974;
var G__21633 = count__20975;
var G__21634 = (i__20976 + (1));
seq__20972 = G__21631;
chunk__20974 = G__21632;
count__20975 = G__21633;
i__20976 = G__21634;
continue;
} else {
var G__21635 = seq__20972;
var G__21636 = chunk__20974;
var G__21637 = count__20975;
var G__21638 = (i__20976 + (1));
seq__20972 = G__21635;
chunk__20974 = G__21636;
count__20975 = G__21637;
i__20976 = G__21638;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20972);
if(temp__5804__auto__){
var seq__20972__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20972__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20972__$1);
var G__21639 = cljs.core.chunk_rest(seq__20972__$1);
var G__21640 = c__5525__auto__;
var G__21641 = cljs.core.count(c__5525__auto__);
var G__21642 = (0);
seq__20972 = G__21639;
chunk__20974 = G__21640;
count__20975 = G__21641;
i__20976 = G__21642;
continue;
} else {
var path = cljs.core.first(seq__20972__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21325_21643 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21329_21644 = null;
var count__21330_21645 = (0);
var i__21331_21646 = (0);
while(true){
if((i__21331_21646 < count__21330_21645)){
var node_21647 = chunk__21329_21644.cljs$core$IIndexed$_nth$arity$2(null,i__21331_21646);
if(cljs.core.not(node_21647.shadow$old)){
var path_match_21648 = shadow.cljs.devtools.client.browser.match_paths(node_21647.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21648)){
var new_link_21649 = (function (){var G__21359 = node_21647.cloneNode(true);
G__21359.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21648),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21359;
})();
(node_21647.shadow$old = true);

(new_link_21649.onload = ((function (seq__21325_21643,chunk__21329_21644,count__21330_21645,i__21331_21646,seq__20972,chunk__20974,count__20975,i__20976,new_link_21649,path_match_21648,node_21647,path,seq__20972__$1,temp__5804__auto__,map__20970,map__20970__$1,msg,updates,reload_info){
return (function (e){
var seq__21360_21650 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21362_21651 = null;
var count__21363_21652 = (0);
var i__21364_21653 = (0);
while(true){
if((i__21364_21653 < count__21363_21652)){
var map__21368_21654 = chunk__21362_21651.cljs$core$IIndexed$_nth$arity$2(null,i__21364_21653);
var map__21368_21655__$1 = cljs.core.__destructure_map(map__21368_21654);
var task_21656 = map__21368_21655__$1;
var fn_str_21657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21368_21655__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21368_21655__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21659 = goog.getObjectByName(fn_str_21657,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21658)].join(''));

(fn_obj_21659.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21659.cljs$core$IFn$_invoke$arity$2(path,new_link_21649) : fn_obj_21659.call(null,path,new_link_21649));


var G__21660 = seq__21360_21650;
var G__21661 = chunk__21362_21651;
var G__21662 = count__21363_21652;
var G__21663 = (i__21364_21653 + (1));
seq__21360_21650 = G__21660;
chunk__21362_21651 = G__21661;
count__21363_21652 = G__21662;
i__21364_21653 = G__21663;
continue;
} else {
var temp__5804__auto___21666__$1 = cljs.core.seq(seq__21360_21650);
if(temp__5804__auto___21666__$1){
var seq__21360_21667__$1 = temp__5804__auto___21666__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21360_21667__$1)){
var c__5525__auto___21668 = cljs.core.chunk_first(seq__21360_21667__$1);
var G__21669 = cljs.core.chunk_rest(seq__21360_21667__$1);
var G__21670 = c__5525__auto___21668;
var G__21671 = cljs.core.count(c__5525__auto___21668);
var G__21672 = (0);
seq__21360_21650 = G__21669;
chunk__21362_21651 = G__21670;
count__21363_21652 = G__21671;
i__21364_21653 = G__21672;
continue;
} else {
var map__21369_21673 = cljs.core.first(seq__21360_21667__$1);
var map__21369_21674__$1 = cljs.core.__destructure_map(map__21369_21673);
var task_21675 = map__21369_21674__$1;
var fn_str_21676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369_21674__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21369_21674__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21678 = goog.getObjectByName(fn_str_21676,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21677)].join(''));

(fn_obj_21678.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21678.cljs$core$IFn$_invoke$arity$2(path,new_link_21649) : fn_obj_21678.call(null,path,new_link_21649));


var G__21679 = cljs.core.next(seq__21360_21667__$1);
var G__21680 = null;
var G__21681 = (0);
var G__21682 = (0);
seq__21360_21650 = G__21679;
chunk__21362_21651 = G__21680;
count__21363_21652 = G__21681;
i__21364_21653 = G__21682;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21647);
});})(seq__21325_21643,chunk__21329_21644,count__21330_21645,i__21331_21646,seq__20972,chunk__20974,count__20975,i__20976,new_link_21649,path_match_21648,node_21647,path,seq__20972__$1,temp__5804__auto__,map__20970,map__20970__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21648], 0));

goog.dom.insertSiblingAfter(new_link_21649,node_21647);


var G__21683 = seq__21325_21643;
var G__21684 = chunk__21329_21644;
var G__21685 = count__21330_21645;
var G__21686 = (i__21331_21646 + (1));
seq__21325_21643 = G__21683;
chunk__21329_21644 = G__21684;
count__21330_21645 = G__21685;
i__21331_21646 = G__21686;
continue;
} else {
var G__21687 = seq__21325_21643;
var G__21688 = chunk__21329_21644;
var G__21689 = count__21330_21645;
var G__21690 = (i__21331_21646 + (1));
seq__21325_21643 = G__21687;
chunk__21329_21644 = G__21688;
count__21330_21645 = G__21689;
i__21331_21646 = G__21690;
continue;
}
} else {
var G__21691 = seq__21325_21643;
var G__21692 = chunk__21329_21644;
var G__21693 = count__21330_21645;
var G__21694 = (i__21331_21646 + (1));
seq__21325_21643 = G__21691;
chunk__21329_21644 = G__21692;
count__21330_21645 = G__21693;
i__21331_21646 = G__21694;
continue;
}
} else {
var temp__5804__auto___21695__$1 = cljs.core.seq(seq__21325_21643);
if(temp__5804__auto___21695__$1){
var seq__21325_21696__$1 = temp__5804__auto___21695__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21325_21696__$1)){
var c__5525__auto___21697 = cljs.core.chunk_first(seq__21325_21696__$1);
var G__21698 = cljs.core.chunk_rest(seq__21325_21696__$1);
var G__21699 = c__5525__auto___21697;
var G__21700 = cljs.core.count(c__5525__auto___21697);
var G__21701 = (0);
seq__21325_21643 = G__21698;
chunk__21329_21644 = G__21699;
count__21330_21645 = G__21700;
i__21331_21646 = G__21701;
continue;
} else {
var node_21702 = cljs.core.first(seq__21325_21696__$1);
if(cljs.core.not(node_21702.shadow$old)){
var path_match_21703 = shadow.cljs.devtools.client.browser.match_paths(node_21702.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21703)){
var new_link_21704 = (function (){var G__21370 = node_21702.cloneNode(true);
G__21370.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21703),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21370;
})();
(node_21702.shadow$old = true);

(new_link_21704.onload = ((function (seq__21325_21643,chunk__21329_21644,count__21330_21645,i__21331_21646,seq__20972,chunk__20974,count__20975,i__20976,new_link_21704,path_match_21703,node_21702,seq__21325_21696__$1,temp__5804__auto___21695__$1,path,seq__20972__$1,temp__5804__auto__,map__20970,map__20970__$1,msg,updates,reload_info){
return (function (e){
var seq__21371_21705 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21373_21706 = null;
var count__21374_21707 = (0);
var i__21375_21708 = (0);
while(true){
if((i__21375_21708 < count__21374_21707)){
var map__21379_21709 = chunk__21373_21706.cljs$core$IIndexed$_nth$arity$2(null,i__21375_21708);
var map__21379_21710__$1 = cljs.core.__destructure_map(map__21379_21709);
var task_21711 = map__21379_21710__$1;
var fn_str_21712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21379_21710__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21713 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21379_21710__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21714 = goog.getObjectByName(fn_str_21712,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21713)].join(''));

(fn_obj_21714.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21714.cljs$core$IFn$_invoke$arity$2(path,new_link_21704) : fn_obj_21714.call(null,path,new_link_21704));


var G__21715 = seq__21371_21705;
var G__21716 = chunk__21373_21706;
var G__21717 = count__21374_21707;
var G__21718 = (i__21375_21708 + (1));
seq__21371_21705 = G__21715;
chunk__21373_21706 = G__21716;
count__21374_21707 = G__21717;
i__21375_21708 = G__21718;
continue;
} else {
var temp__5804__auto___21719__$2 = cljs.core.seq(seq__21371_21705);
if(temp__5804__auto___21719__$2){
var seq__21371_21720__$1 = temp__5804__auto___21719__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21371_21720__$1)){
var c__5525__auto___21721 = cljs.core.chunk_first(seq__21371_21720__$1);
var G__21722 = cljs.core.chunk_rest(seq__21371_21720__$1);
var G__21723 = c__5525__auto___21721;
var G__21724 = cljs.core.count(c__5525__auto___21721);
var G__21725 = (0);
seq__21371_21705 = G__21722;
chunk__21373_21706 = G__21723;
count__21374_21707 = G__21724;
i__21375_21708 = G__21725;
continue;
} else {
var map__21380_21726 = cljs.core.first(seq__21371_21720__$1);
var map__21380_21727__$1 = cljs.core.__destructure_map(map__21380_21726);
var task_21728 = map__21380_21727__$1;
var fn_str_21729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21380_21727__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21380_21727__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21731 = goog.getObjectByName(fn_str_21729,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21730)].join(''));

(fn_obj_21731.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21731.cljs$core$IFn$_invoke$arity$2(path,new_link_21704) : fn_obj_21731.call(null,path,new_link_21704));


var G__21732 = cljs.core.next(seq__21371_21720__$1);
var G__21733 = null;
var G__21734 = (0);
var G__21735 = (0);
seq__21371_21705 = G__21732;
chunk__21373_21706 = G__21733;
count__21374_21707 = G__21734;
i__21375_21708 = G__21735;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21702);
});})(seq__21325_21643,chunk__21329_21644,count__21330_21645,i__21331_21646,seq__20972,chunk__20974,count__20975,i__20976,new_link_21704,path_match_21703,node_21702,seq__21325_21696__$1,temp__5804__auto___21695__$1,path,seq__20972__$1,temp__5804__auto__,map__20970,map__20970__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21703], 0));

goog.dom.insertSiblingAfter(new_link_21704,node_21702);


var G__21736 = cljs.core.next(seq__21325_21696__$1);
var G__21737 = null;
var G__21738 = (0);
var G__21739 = (0);
seq__21325_21643 = G__21736;
chunk__21329_21644 = G__21737;
count__21330_21645 = G__21738;
i__21331_21646 = G__21739;
continue;
} else {
var G__21740 = cljs.core.next(seq__21325_21696__$1);
var G__21741 = null;
var G__21742 = (0);
var G__21743 = (0);
seq__21325_21643 = G__21740;
chunk__21329_21644 = G__21741;
count__21330_21645 = G__21742;
i__21331_21646 = G__21743;
continue;
}
} else {
var G__21744 = cljs.core.next(seq__21325_21696__$1);
var G__21745 = null;
var G__21746 = (0);
var G__21747 = (0);
seq__21325_21643 = G__21744;
chunk__21329_21644 = G__21745;
count__21330_21645 = G__21746;
i__21331_21646 = G__21747;
continue;
}
}
} else {
}
}
break;
}


var G__21748 = cljs.core.next(seq__20972__$1);
var G__21749 = null;
var G__21750 = (0);
var G__21751 = (0);
seq__20972 = G__21748;
chunk__20974 = G__21749;
count__20975 = G__21750;
i__20976 = G__21751;
continue;
} else {
var G__21752 = cljs.core.next(seq__20972__$1);
var G__21753 = null;
var G__21754 = (0);
var G__21755 = (0);
seq__20972 = G__21752;
chunk__20974 = G__21753;
count__20975 = G__21754;
i__20976 = G__21755;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21387 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21387) : success.call(null,G__21387));
}catch (e21385){var e = e21385;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21393,success,fail){
var map__21394 = p__21393;
var map__21394__$1 = cljs.core.__destructure_map(map__21394);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21394__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21396 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21396) : success.call(null,G__21396));
}catch (e21395){var e = e21395;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21398,done,error){
var map__21399 = p__21398;
var map__21399__$1 = cljs.core.__destructure_map(map__21399);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21399__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21403,done,error){
var map__21404 = p__21403;
var map__21404__$1 = cljs.core.__destructure_map(map__21404);
var msg = map__21404__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21404__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21404__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21404__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21406){
var map__21407 = p__21406;
var map__21407__$1 = cljs.core.__destructure_map(map__21407);
var src = map__21407__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21407__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21412 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21412) : done.call(null,G__21412));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21413){
var map__21414 = p__21413;
var map__21414__$1 = cljs.core.__destructure_map(map__21414);
var msg__$1 = map__21414__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21414__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21415){var ex = e21415;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21417){
var map__21418 = p__21417;
var map__21418__$1 = cljs.core.__destructure_map(map__21418);
var env = map__21418__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21418__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21432){
var map__21434 = p__21432;
var map__21434__$1 = cljs.core.__destructure_map(map__21434);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21434__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21440){
var map__21442 = p__21440;
var map__21442__$1 = cljs.core.__destructure_map(map__21442);
var svc = map__21442__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
