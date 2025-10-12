goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19333){
var map__19334 = p__19333;
var map__19334__$1 = cljs.core.__destructure_map(map__19334);
var m = map__19334__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19334__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19337_19730 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19338_19731 = null;
var count__19339_19732 = (0);
var i__19340_19733 = (0);
while(true){
if((i__19340_19733 < count__19339_19732)){
var f_19734 = chunk__19338_19731.cljs$core$IIndexed$_nth$arity$2(null,i__19340_19733);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19734], 0));


var G__19739 = seq__19337_19730;
var G__19740 = chunk__19338_19731;
var G__19741 = count__19339_19732;
var G__19742 = (i__19340_19733 + (1));
seq__19337_19730 = G__19739;
chunk__19338_19731 = G__19740;
count__19339_19732 = G__19741;
i__19340_19733 = G__19742;
continue;
} else {
var temp__5804__auto___19743 = cljs.core.seq(seq__19337_19730);
if(temp__5804__auto___19743){
var seq__19337_19744__$1 = temp__5804__auto___19743;
if(cljs.core.chunked_seq_QMARK_(seq__19337_19744__$1)){
var c__5525__auto___19745 = cljs.core.chunk_first(seq__19337_19744__$1);
var G__19746 = cljs.core.chunk_rest(seq__19337_19744__$1);
var G__19747 = c__5525__auto___19745;
var G__19748 = cljs.core.count(c__5525__auto___19745);
var G__19749 = (0);
seq__19337_19730 = G__19746;
chunk__19338_19731 = G__19747;
count__19339_19732 = G__19748;
i__19340_19733 = G__19749;
continue;
} else {
var f_19750 = cljs.core.first(seq__19337_19744__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19750], 0));


var G__19753 = cljs.core.next(seq__19337_19744__$1);
var G__19754 = null;
var G__19755 = (0);
var G__19756 = (0);
seq__19337_19730 = G__19753;
chunk__19338_19731 = G__19754;
count__19339_19732 = G__19755;
i__19340_19733 = G__19756;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19758 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19758], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19758)))?cljs.core.second(arglists_19758):arglists_19758)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19386_19765 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19387_19766 = null;
var count__19388_19767 = (0);
var i__19389_19768 = (0);
while(true){
if((i__19389_19768 < count__19388_19767)){
var vec__19412_19769 = chunk__19387_19766.cljs$core$IIndexed$_nth$arity$2(null,i__19389_19768);
var name_19770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19412_19769,(0),null);
var map__19415_19771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19412_19769,(1),null);
var map__19415_19772__$1 = cljs.core.__destructure_map(map__19415_19771);
var doc_19773 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19415_19772__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19774 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19415_19772__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19770], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19774], 0));

if(cljs.core.truth_(doc_19773)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19773], 0));
} else {
}


var G__19779 = seq__19386_19765;
var G__19780 = chunk__19387_19766;
var G__19781 = count__19388_19767;
var G__19782 = (i__19389_19768 + (1));
seq__19386_19765 = G__19779;
chunk__19387_19766 = G__19780;
count__19388_19767 = G__19781;
i__19389_19768 = G__19782;
continue;
} else {
var temp__5804__auto___19784 = cljs.core.seq(seq__19386_19765);
if(temp__5804__auto___19784){
var seq__19386_19785__$1 = temp__5804__auto___19784;
if(cljs.core.chunked_seq_QMARK_(seq__19386_19785__$1)){
var c__5525__auto___19786 = cljs.core.chunk_first(seq__19386_19785__$1);
var G__19787 = cljs.core.chunk_rest(seq__19386_19785__$1);
var G__19788 = c__5525__auto___19786;
var G__19789 = cljs.core.count(c__5525__auto___19786);
var G__19790 = (0);
seq__19386_19765 = G__19787;
chunk__19387_19766 = G__19788;
count__19388_19767 = G__19789;
i__19389_19768 = G__19790;
continue;
} else {
var vec__19426_19791 = cljs.core.first(seq__19386_19785__$1);
var name_19792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19426_19791,(0),null);
var map__19429_19793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19426_19791,(1),null);
var map__19429_19794__$1 = cljs.core.__destructure_map(map__19429_19793);
var doc_19795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19429_19794__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19429_19794__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19792], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19796], 0));

if(cljs.core.truth_(doc_19795)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19795], 0));
} else {
}


var G__19798 = cljs.core.next(seq__19386_19785__$1);
var G__19799 = null;
var G__19800 = (0);
var G__19801 = (0);
seq__19386_19765 = G__19798;
chunk__19387_19766 = G__19799;
count__19388_19767 = G__19800;
i__19389_19768 = G__19801;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19431 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19432 = null;
var count__19433 = (0);
var i__19434 = (0);
while(true){
if((i__19434 < count__19433)){
var role = chunk__19432.cljs$core$IIndexed$_nth$arity$2(null,i__19434);
var temp__5804__auto___19808__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19808__$1)){
var spec_19809 = temp__5804__auto___19808__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19809)], 0));
} else {
}


var G__19814 = seq__19431;
var G__19815 = chunk__19432;
var G__19816 = count__19433;
var G__19817 = (i__19434 + (1));
seq__19431 = G__19814;
chunk__19432 = G__19815;
count__19433 = G__19816;
i__19434 = G__19817;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19431);
if(temp__5804__auto____$1){
var seq__19431__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19431__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19431__$1);
var G__19819 = cljs.core.chunk_rest(seq__19431__$1);
var G__19820 = c__5525__auto__;
var G__19821 = cljs.core.count(c__5525__auto__);
var G__19822 = (0);
seq__19431 = G__19819;
chunk__19432 = G__19820;
count__19433 = G__19821;
i__19434 = G__19822;
continue;
} else {
var role = cljs.core.first(seq__19431__$1);
var temp__5804__auto___19829__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19829__$2)){
var spec_19830 = temp__5804__auto___19829__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19830)], 0));
} else {
}


var G__19834 = cljs.core.next(seq__19431__$1);
var G__19835 = null;
var G__19836 = (0);
var G__19837 = (0);
seq__19431 = G__19834;
chunk__19432 = G__19835;
count__19433 = G__19836;
i__19434 = G__19837;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19493 = datafied_throwable;
var map__19493__$1 = cljs.core.__destructure_map(map__19493);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19493__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19493__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19493__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19498 = cljs.core.last(via);
var map__19498__$1 = cljs.core.__destructure_map(map__19498);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19498__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19498__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19498__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19499 = data;
var map__19499__$1 = cljs.core.__destructure_map(map__19499);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19499__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19499__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19499__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19500 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19500__$1 = cljs.core.__destructure_map(map__19500);
var top_data = map__19500__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19500__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19536 = phase;
var G__19536__$1 = (((G__19536 instanceof cljs.core.Keyword))?G__19536.fqn:null);
switch (G__19536__$1) {
case "read-source":
var map__19544 = data;
var map__19544__$1 = cljs.core.__destructure_map(map__19544);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19544__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19547 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19547__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19547,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19547);
var G__19547__$2 = (cljs.core.truth_((function (){var fexpr__19556 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19556.cljs$core$IFn$_invoke$arity$1 ? fexpr__19556.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19556.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19547__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19547__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19547__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19567 = top_data;
var G__19567__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19567,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19567);
var G__19567__$2 = (cljs.core.truth_((function (){var fexpr__19568 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19568.cljs$core$IFn$_invoke$arity$1 ? fexpr__19568.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19568.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19567__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19567__$1);
var G__19567__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19567__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19567__$2);
var G__19567__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19567__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19567__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19567__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19567__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19581 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19581,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19581,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19581,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19581,(3),null);
var G__19594 = top_data;
var G__19594__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19594,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19594);
var G__19594__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19594__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19594__$1);
var G__19594__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19594__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19594__$2);
var G__19594__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19594__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19594__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19594__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19594__$4;
}

break;
case "execution":
var vec__19606 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19606,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19606,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19606,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19606,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19487_SHARP_){
var or__5002__auto__ = (p1__19487_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19611 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19611.cljs$core$IFn$_invoke$arity$1 ? fexpr__19611.cljs$core$IFn$_invoke$arity$1(p1__19487_SHARP_) : fexpr__19611.call(null,p1__19487_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19618 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19618__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19618,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19618);
var G__19618__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19618__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19618__$1);
var G__19618__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19618__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19618__$2);
var G__19618__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19618__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19618__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19618__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19618__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19536__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19635){
var map__19636 = p__19635;
var map__19636__$1 = cljs.core.__destructure_map(map__19636);
var triage_data = map__19636__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19636__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19636__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19636__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19636__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19636__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19636__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19636__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19636__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19640 = phase;
var G__19640__$1 = (((G__19640 instanceof cljs.core.Keyword))?G__19640.fqn:null);
switch (G__19640__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19643 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19644 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19645 = loc;
var G__19646 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19647_20009 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19648_20010 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19649_20011 = true;
var _STAR_print_fn_STAR__temp_val__19650_20012 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19649_20011);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19650_20012);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19633_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19633_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19648_20010);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19647_20009);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19643,G__19644,G__19645,G__19646) : format.call(null,G__19643,G__19644,G__19645,G__19646));

break;
case "macroexpansion":
var G__19651 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19652 = cause_type;
var G__19653 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19654 = loc;
var G__19655 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19651,G__19652,G__19653,G__19654,G__19655) : format.call(null,G__19651,G__19652,G__19653,G__19654,G__19655));

break;
case "compile-syntax-check":
var G__19656 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19657 = cause_type;
var G__19658 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19659 = loc;
var G__19660 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19656,G__19657,G__19658,G__19659,G__19660) : format.call(null,G__19656,G__19657,G__19658,G__19659,G__19660));

break;
case "compilation":
var G__19661 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19662 = cause_type;
var G__19663 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19664 = loc;
var G__19665 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19661,G__19662,G__19663,G__19664,G__19665) : format.call(null,G__19661,G__19662,G__19663,G__19664,G__19665));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19670 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19671 = symbol;
var G__19672 = loc;
var G__19673 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19675_20027 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19676_20028 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19677_20029 = true;
var _STAR_print_fn_STAR__temp_val__19678_20030 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19677_20029);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19678_20030);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19634_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19634_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19676_20028);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19675_20027);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19670,G__19671,G__19672,G__19673) : format.call(null,G__19670,G__19671,G__19672,G__19673));
} else {
var G__19683 = "Execution error%s at %s(%s).\n%s\n";
var G__19684 = cause_type;
var G__19685 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19686 = loc;
var G__19687 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19683,G__19684,G__19685,G__19686,G__19687) : format.call(null,G__19683,G__19684,G__19685,G__19686,G__19687));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19640__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
