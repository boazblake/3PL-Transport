goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12604 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12604(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12609 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12609(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11739 = coll;
var G__11740 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11739,G__11740) : shadow.dom.lazy_native_coll_seq.call(null,G__11739,G__11740));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11749 = arguments.length;
switch (G__11749) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11753 = arguments.length;
switch (G__11753) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11756 = arguments.length;
switch (G__11756) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11769 = arguments.length;
switch (G__11769) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11775 = arguments.length;
switch (G__11775) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11789 = arguments.length;
switch (G__11789) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11791){if((e11791 instanceof Object)){
var e = e11791;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11791;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11796 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11797 = null;
var count__11798 = (0);
var i__11799 = (0);
while(true){
if((i__11799 < count__11798)){
var el = chunk__11797.cljs$core$IIndexed$_nth$arity$2(null,i__11799);
var handler_12645__$1 = ((function (seq__11796,chunk__11797,count__11798,i__11799,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11796,chunk__11797,count__11798,i__11799,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12645__$1);


var G__12646 = seq__11796;
var G__12647 = chunk__11797;
var G__12648 = count__11798;
var G__12649 = (i__11799 + (1));
seq__11796 = G__12646;
chunk__11797 = G__12647;
count__11798 = G__12648;
i__11799 = G__12649;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11796);
if(temp__5804__auto__){
var seq__11796__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11796__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11796__$1);
var G__12651 = cljs.core.chunk_rest(seq__11796__$1);
var G__12652 = c__5525__auto__;
var G__12653 = cljs.core.count(c__5525__auto__);
var G__12654 = (0);
seq__11796 = G__12651;
chunk__11797 = G__12652;
count__11798 = G__12653;
i__11799 = G__12654;
continue;
} else {
var el = cljs.core.first(seq__11796__$1);
var handler_12656__$1 = ((function (seq__11796,chunk__11797,count__11798,i__11799,el,seq__11796__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11796,chunk__11797,count__11798,i__11799,el,seq__11796__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12656__$1);


var G__12658 = cljs.core.next(seq__11796__$1);
var G__12659 = null;
var G__12660 = (0);
var G__12661 = (0);
seq__11796 = G__12658;
chunk__11797 = G__12659;
count__11798 = G__12660;
i__11799 = G__12661;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11818 = arguments.length;
switch (G__11818) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11821 = cljs.core.seq(events);
var chunk__11822 = null;
var count__11823 = (0);
var i__11824 = (0);
while(true){
if((i__11824 < count__11823)){
var vec__11844 = chunk__11822.cljs$core$IIndexed$_nth$arity$2(null,i__11824);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11844,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12673 = seq__11821;
var G__12674 = chunk__11822;
var G__12675 = count__11823;
var G__12676 = (i__11824 + (1));
seq__11821 = G__12673;
chunk__11822 = G__12674;
count__11823 = G__12675;
i__11824 = G__12676;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11821);
if(temp__5804__auto__){
var seq__11821__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11821__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11821__$1);
var G__12677 = cljs.core.chunk_rest(seq__11821__$1);
var G__12678 = c__5525__auto__;
var G__12679 = cljs.core.count(c__5525__auto__);
var G__12680 = (0);
seq__11821 = G__12677;
chunk__11822 = G__12678;
count__11823 = G__12679;
i__11824 = G__12680;
continue;
} else {
var vec__11852 = cljs.core.first(seq__11821__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11852,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11852,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12682 = cljs.core.next(seq__11821__$1);
var G__12683 = null;
var G__12684 = (0);
var G__12685 = (0);
seq__11821 = G__12682;
chunk__11822 = G__12683;
count__11823 = G__12684;
i__11824 = G__12685;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11860 = cljs.core.seq(styles);
var chunk__11861 = null;
var count__11862 = (0);
var i__11863 = (0);
while(true){
if((i__11863 < count__11862)){
var vec__11884 = chunk__11861.cljs$core$IIndexed$_nth$arity$2(null,i__11863);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11884,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11884,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12686 = seq__11860;
var G__12687 = chunk__11861;
var G__12688 = count__11862;
var G__12689 = (i__11863 + (1));
seq__11860 = G__12686;
chunk__11861 = G__12687;
count__11862 = G__12688;
i__11863 = G__12689;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11860);
if(temp__5804__auto__){
var seq__11860__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11860__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11860__$1);
var G__12690 = cljs.core.chunk_rest(seq__11860__$1);
var G__12691 = c__5525__auto__;
var G__12692 = cljs.core.count(c__5525__auto__);
var G__12693 = (0);
seq__11860 = G__12690;
chunk__11861 = G__12691;
count__11862 = G__12692;
i__11863 = G__12693;
continue;
} else {
var vec__11887 = cljs.core.first(seq__11860__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11887,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11887,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12694 = cljs.core.next(seq__11860__$1);
var G__12695 = null;
var G__12696 = (0);
var G__12697 = (0);
seq__11860 = G__12694;
chunk__11861 = G__12695;
count__11862 = G__12696;
i__11863 = G__12697;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11890_12698 = key;
var G__11890_12699__$1 = (((G__11890_12698 instanceof cljs.core.Keyword))?G__11890_12698.fqn:null);
switch (G__11890_12699__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12705 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12705,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12705,"aria-");
}
})())){
el.setAttribute(ks_12705,value);
} else {
(el[ks_12705] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11903){
var map__11904 = p__11903;
var map__11904__$1 = cljs.core.__destructure_map(map__11904);
var props = map__11904__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11904__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11916 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11916,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11916,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11916,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11919 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11919,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11919;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11921 = arguments.length;
switch (G__11921) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11929){
var vec__11930 = p__11929;
var seq__11931 = cljs.core.seq(vec__11930);
var first__11932 = cljs.core.first(seq__11931);
var seq__11931__$1 = cljs.core.next(seq__11931);
var nn = first__11932;
var first__11932__$1 = cljs.core.first(seq__11931__$1);
var seq__11931__$2 = cljs.core.next(seq__11931__$1);
var np = first__11932__$1;
var nc = seq__11931__$2;
var node = vec__11930;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11937 = nn;
var G__11938 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11937,G__11938) : create_fn.call(null,G__11937,G__11938));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11942 = nn;
var G__11943 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11942,G__11943) : create_fn.call(null,G__11942,G__11943));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11948 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11948,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11948,(1),null);
var seq__11951_12715 = cljs.core.seq(node_children);
var chunk__11952_12716 = null;
var count__11953_12717 = (0);
var i__11954_12718 = (0);
while(true){
if((i__11954_12718 < count__11953_12717)){
var child_struct_12719 = chunk__11952_12716.cljs$core$IIndexed$_nth$arity$2(null,i__11954_12718);
var children_12720 = shadow.dom.dom_node(child_struct_12719);
if(cljs.core.seq_QMARK_(children_12720)){
var seq__12020_12721 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12720));
var chunk__12022_12722 = null;
var count__12023_12723 = (0);
var i__12024_12724 = (0);
while(true){
if((i__12024_12724 < count__12023_12723)){
var child_12725 = chunk__12022_12722.cljs$core$IIndexed$_nth$arity$2(null,i__12024_12724);
if(cljs.core.truth_(child_12725)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12725);


var G__12726 = seq__12020_12721;
var G__12727 = chunk__12022_12722;
var G__12728 = count__12023_12723;
var G__12729 = (i__12024_12724 + (1));
seq__12020_12721 = G__12726;
chunk__12022_12722 = G__12727;
count__12023_12723 = G__12728;
i__12024_12724 = G__12729;
continue;
} else {
var G__12730 = seq__12020_12721;
var G__12731 = chunk__12022_12722;
var G__12732 = count__12023_12723;
var G__12733 = (i__12024_12724 + (1));
seq__12020_12721 = G__12730;
chunk__12022_12722 = G__12731;
count__12023_12723 = G__12732;
i__12024_12724 = G__12733;
continue;
}
} else {
var temp__5804__auto___12736 = cljs.core.seq(seq__12020_12721);
if(temp__5804__auto___12736){
var seq__12020_12737__$1 = temp__5804__auto___12736;
if(cljs.core.chunked_seq_QMARK_(seq__12020_12737__$1)){
var c__5525__auto___12738 = cljs.core.chunk_first(seq__12020_12737__$1);
var G__12739 = cljs.core.chunk_rest(seq__12020_12737__$1);
var G__12740 = c__5525__auto___12738;
var G__12741 = cljs.core.count(c__5525__auto___12738);
var G__12742 = (0);
seq__12020_12721 = G__12739;
chunk__12022_12722 = G__12740;
count__12023_12723 = G__12741;
i__12024_12724 = G__12742;
continue;
} else {
var child_12744 = cljs.core.first(seq__12020_12737__$1);
if(cljs.core.truth_(child_12744)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12744);


var G__12747 = cljs.core.next(seq__12020_12737__$1);
var G__12748 = null;
var G__12749 = (0);
var G__12750 = (0);
seq__12020_12721 = G__12747;
chunk__12022_12722 = G__12748;
count__12023_12723 = G__12749;
i__12024_12724 = G__12750;
continue;
} else {
var G__12751 = cljs.core.next(seq__12020_12737__$1);
var G__12752 = null;
var G__12753 = (0);
var G__12754 = (0);
seq__12020_12721 = G__12751;
chunk__12022_12722 = G__12752;
count__12023_12723 = G__12753;
i__12024_12724 = G__12754;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12720);
}


var G__12755 = seq__11951_12715;
var G__12756 = chunk__11952_12716;
var G__12757 = count__11953_12717;
var G__12758 = (i__11954_12718 + (1));
seq__11951_12715 = G__12755;
chunk__11952_12716 = G__12756;
count__11953_12717 = G__12757;
i__11954_12718 = G__12758;
continue;
} else {
var temp__5804__auto___12759 = cljs.core.seq(seq__11951_12715);
if(temp__5804__auto___12759){
var seq__11951_12761__$1 = temp__5804__auto___12759;
if(cljs.core.chunked_seq_QMARK_(seq__11951_12761__$1)){
var c__5525__auto___12762 = cljs.core.chunk_first(seq__11951_12761__$1);
var G__12763 = cljs.core.chunk_rest(seq__11951_12761__$1);
var G__12764 = c__5525__auto___12762;
var G__12765 = cljs.core.count(c__5525__auto___12762);
var G__12766 = (0);
seq__11951_12715 = G__12763;
chunk__11952_12716 = G__12764;
count__11953_12717 = G__12765;
i__11954_12718 = G__12766;
continue;
} else {
var child_struct_12768 = cljs.core.first(seq__11951_12761__$1);
var children_12771 = shadow.dom.dom_node(child_struct_12768);
if(cljs.core.seq_QMARK_(children_12771)){
var seq__12030_12772 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12771));
var chunk__12032_12773 = null;
var count__12033_12774 = (0);
var i__12034_12775 = (0);
while(true){
if((i__12034_12775 < count__12033_12774)){
var child_12777 = chunk__12032_12773.cljs$core$IIndexed$_nth$arity$2(null,i__12034_12775);
if(cljs.core.truth_(child_12777)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12777);


var G__12778 = seq__12030_12772;
var G__12779 = chunk__12032_12773;
var G__12780 = count__12033_12774;
var G__12781 = (i__12034_12775 + (1));
seq__12030_12772 = G__12778;
chunk__12032_12773 = G__12779;
count__12033_12774 = G__12780;
i__12034_12775 = G__12781;
continue;
} else {
var G__12782 = seq__12030_12772;
var G__12783 = chunk__12032_12773;
var G__12784 = count__12033_12774;
var G__12785 = (i__12034_12775 + (1));
seq__12030_12772 = G__12782;
chunk__12032_12773 = G__12783;
count__12033_12774 = G__12784;
i__12034_12775 = G__12785;
continue;
}
} else {
var temp__5804__auto___12787__$1 = cljs.core.seq(seq__12030_12772);
if(temp__5804__auto___12787__$1){
var seq__12030_12788__$1 = temp__5804__auto___12787__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12030_12788__$1)){
var c__5525__auto___12789 = cljs.core.chunk_first(seq__12030_12788__$1);
var G__12790 = cljs.core.chunk_rest(seq__12030_12788__$1);
var G__12791 = c__5525__auto___12789;
var G__12792 = cljs.core.count(c__5525__auto___12789);
var G__12793 = (0);
seq__12030_12772 = G__12790;
chunk__12032_12773 = G__12791;
count__12033_12774 = G__12792;
i__12034_12775 = G__12793;
continue;
} else {
var child_12794 = cljs.core.first(seq__12030_12788__$1);
if(cljs.core.truth_(child_12794)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12794);


var G__12796 = cljs.core.next(seq__12030_12788__$1);
var G__12797 = null;
var G__12798 = (0);
var G__12799 = (0);
seq__12030_12772 = G__12796;
chunk__12032_12773 = G__12797;
count__12033_12774 = G__12798;
i__12034_12775 = G__12799;
continue;
} else {
var G__12800 = cljs.core.next(seq__12030_12788__$1);
var G__12801 = null;
var G__12802 = (0);
var G__12803 = (0);
seq__12030_12772 = G__12800;
chunk__12032_12773 = G__12801;
count__12033_12774 = G__12802;
i__12034_12775 = G__12803;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12771);
}


var G__12805 = cljs.core.next(seq__11951_12761__$1);
var G__12806 = null;
var G__12807 = (0);
var G__12808 = (0);
seq__11951_12715 = G__12805;
chunk__11952_12716 = G__12806;
count__11953_12717 = G__12807;
i__11954_12718 = G__12808;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12045 = cljs.core.seq(node);
var chunk__12046 = null;
var count__12047 = (0);
var i__12048 = (0);
while(true){
if((i__12048 < count__12047)){
var n = chunk__12046.cljs$core$IIndexed$_nth$arity$2(null,i__12048);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12810 = seq__12045;
var G__12811 = chunk__12046;
var G__12812 = count__12047;
var G__12813 = (i__12048 + (1));
seq__12045 = G__12810;
chunk__12046 = G__12811;
count__12047 = G__12812;
i__12048 = G__12813;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12045);
if(temp__5804__auto__){
var seq__12045__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12045__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12045__$1);
var G__12818 = cljs.core.chunk_rest(seq__12045__$1);
var G__12819 = c__5525__auto__;
var G__12820 = cljs.core.count(c__5525__auto__);
var G__12821 = (0);
seq__12045 = G__12818;
chunk__12046 = G__12819;
count__12047 = G__12820;
i__12048 = G__12821;
continue;
} else {
var n = cljs.core.first(seq__12045__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12823 = cljs.core.next(seq__12045__$1);
var G__12824 = null;
var G__12825 = (0);
var G__12826 = (0);
seq__12045 = G__12823;
chunk__12046 = G__12824;
count__12047 = G__12825;
i__12048 = G__12826;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12074 = arguments.length;
switch (G__12074) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12080 = arguments.length;
switch (G__12080) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12085 = arguments.length;
switch (G__12085) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12835 = arguments.length;
var i__5727__auto___12836 = (0);
while(true){
if((i__5727__auto___12836 < len__5726__auto___12835)){
args__5732__auto__.push((arguments[i__5727__auto___12836]));

var G__12837 = (i__5727__auto___12836 + (1));
i__5727__auto___12836 = G__12837;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12102_12839 = cljs.core.seq(nodes);
var chunk__12103_12840 = null;
var count__12104_12841 = (0);
var i__12105_12842 = (0);
while(true){
if((i__12105_12842 < count__12104_12841)){
var node_12844 = chunk__12103_12840.cljs$core$IIndexed$_nth$arity$2(null,i__12105_12842);
fragment.appendChild(shadow.dom._to_dom(node_12844));


var G__12845 = seq__12102_12839;
var G__12846 = chunk__12103_12840;
var G__12847 = count__12104_12841;
var G__12848 = (i__12105_12842 + (1));
seq__12102_12839 = G__12845;
chunk__12103_12840 = G__12846;
count__12104_12841 = G__12847;
i__12105_12842 = G__12848;
continue;
} else {
var temp__5804__auto___12850 = cljs.core.seq(seq__12102_12839);
if(temp__5804__auto___12850){
var seq__12102_12852__$1 = temp__5804__auto___12850;
if(cljs.core.chunked_seq_QMARK_(seq__12102_12852__$1)){
var c__5525__auto___12854 = cljs.core.chunk_first(seq__12102_12852__$1);
var G__12855 = cljs.core.chunk_rest(seq__12102_12852__$1);
var G__12856 = c__5525__auto___12854;
var G__12857 = cljs.core.count(c__5525__auto___12854);
var G__12858 = (0);
seq__12102_12839 = G__12855;
chunk__12103_12840 = G__12856;
count__12104_12841 = G__12857;
i__12105_12842 = G__12858;
continue;
} else {
var node_12861 = cljs.core.first(seq__12102_12852__$1);
fragment.appendChild(shadow.dom._to_dom(node_12861));


var G__12863 = cljs.core.next(seq__12102_12852__$1);
var G__12864 = null;
var G__12865 = (0);
var G__12866 = (0);
seq__12102_12839 = G__12863;
chunk__12103_12840 = G__12864;
count__12104_12841 = G__12865;
i__12105_12842 = G__12866;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12096){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12096));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12120_12867 = cljs.core.seq(scripts);
var chunk__12121_12868 = null;
var count__12122_12869 = (0);
var i__12123_12870 = (0);
while(true){
if((i__12123_12870 < count__12122_12869)){
var vec__12135_12872 = chunk__12121_12868.cljs$core$IIndexed$_nth$arity$2(null,i__12123_12870);
var script_tag_12873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12135_12872,(0),null);
var script_body_12874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12135_12872,(1),null);
eval(script_body_12874);


var G__12876 = seq__12120_12867;
var G__12877 = chunk__12121_12868;
var G__12878 = count__12122_12869;
var G__12879 = (i__12123_12870 + (1));
seq__12120_12867 = G__12876;
chunk__12121_12868 = G__12877;
count__12122_12869 = G__12878;
i__12123_12870 = G__12879;
continue;
} else {
var temp__5804__auto___12880 = cljs.core.seq(seq__12120_12867);
if(temp__5804__auto___12880){
var seq__12120_12881__$1 = temp__5804__auto___12880;
if(cljs.core.chunked_seq_QMARK_(seq__12120_12881__$1)){
var c__5525__auto___12882 = cljs.core.chunk_first(seq__12120_12881__$1);
var G__12883 = cljs.core.chunk_rest(seq__12120_12881__$1);
var G__12884 = c__5525__auto___12882;
var G__12885 = cljs.core.count(c__5525__auto___12882);
var G__12886 = (0);
seq__12120_12867 = G__12883;
chunk__12121_12868 = G__12884;
count__12122_12869 = G__12885;
i__12123_12870 = G__12886;
continue;
} else {
var vec__12138_12887 = cljs.core.first(seq__12120_12881__$1);
var script_tag_12888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12138_12887,(0),null);
var script_body_12889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12138_12887,(1),null);
eval(script_body_12889);


var G__12890 = cljs.core.next(seq__12120_12881__$1);
var G__12891 = null;
var G__12892 = (0);
var G__12893 = (0);
seq__12120_12867 = G__12890;
chunk__12121_12868 = G__12891;
count__12122_12869 = G__12892;
i__12123_12870 = G__12893;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12141){
var vec__12142 = p__12141;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12142,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12142,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12161 = arguments.length;
switch (G__12161) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12189 = cljs.core.seq(style_keys);
var chunk__12190 = null;
var count__12191 = (0);
var i__12192 = (0);
while(true){
if((i__12192 < count__12191)){
var it = chunk__12190.cljs$core$IIndexed$_nth$arity$2(null,i__12192);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12902 = seq__12189;
var G__12903 = chunk__12190;
var G__12904 = count__12191;
var G__12905 = (i__12192 + (1));
seq__12189 = G__12902;
chunk__12190 = G__12903;
count__12191 = G__12904;
i__12192 = G__12905;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12189);
if(temp__5804__auto__){
var seq__12189__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12189__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12189__$1);
var G__12908 = cljs.core.chunk_rest(seq__12189__$1);
var G__12909 = c__5525__auto__;
var G__12910 = cljs.core.count(c__5525__auto__);
var G__12911 = (0);
seq__12189 = G__12908;
chunk__12190 = G__12909;
count__12191 = G__12910;
i__12192 = G__12911;
continue;
} else {
var it = cljs.core.first(seq__12189__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12913 = cljs.core.next(seq__12189__$1);
var G__12914 = null;
var G__12915 = (0);
var G__12916 = (0);
seq__12189 = G__12913;
chunk__12190 = G__12914;
count__12191 = G__12915;
i__12192 = G__12916;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12204,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12241 = k12204;
var G__12241__$1 = (((G__12241 instanceof cljs.core.Keyword))?G__12241.fqn:null);
switch (G__12241__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12204,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12244){
var vec__12245 = p__12244;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12245,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12245,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12203){
var self__ = this;
var G__12203__$1 = this;
return (new cljs.core.RecordIter((0),G__12203__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12205,other12206){
var self__ = this;
var this12205__$1 = this;
return (((!((other12206 == null)))) && ((((this12205__$1.constructor === other12206.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12205__$1.x,other12206.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12205__$1.y,other12206.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12205__$1.__extmap,other12206.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12204){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12300 = k12204;
var G__12300__$1 = (((G__12300 instanceof cljs.core.Keyword))?G__12300.fqn:null);
switch (G__12300__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12204);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12203){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12306 = cljs.core.keyword_identical_QMARK_;
var expr__12307 = k__5309__auto__;
if(cljs.core.truth_((pred__12306.cljs$core$IFn$_invoke$arity$2 ? pred__12306.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12307) : pred__12306.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12307)))){
return (new shadow.dom.Coordinate(G__12203,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12306.cljs$core$IFn$_invoke$arity$2 ? pred__12306.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12307) : pred__12306.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12307)))){
return (new shadow.dom.Coordinate(self__.x,G__12203,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12203),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12203){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12203,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12230){
var extmap__5342__auto__ = (function (){var G__12321 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12230,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12230)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12321);
} else {
return G__12321;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12230),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12230),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12334,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12347 = k12334;
var G__12347__$1 = (((G__12347 instanceof cljs.core.Keyword))?G__12347.fqn:null);
switch (G__12347__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12334,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12351){
var vec__12352 = p__12351;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12352,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12352,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12333){
var self__ = this;
var G__12333__$1 = this;
return (new cljs.core.RecordIter((0),G__12333__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12335,other12336){
var self__ = this;
var this12335__$1 = this;
return (((!((other12336 == null)))) && ((((this12335__$1.constructor === other12336.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12335__$1.w,other12336.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12335__$1.h,other12336.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12335__$1.__extmap,other12336.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12334){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12402 = k12334;
var G__12402__$1 = (((G__12402 instanceof cljs.core.Keyword))?G__12402.fqn:null);
switch (G__12402__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12334);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12333){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12406 = cljs.core.keyword_identical_QMARK_;
var expr__12407 = k__5309__auto__;
if(cljs.core.truth_((pred__12406.cljs$core$IFn$_invoke$arity$2 ? pred__12406.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12407) : pred__12406.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12407)))){
return (new shadow.dom.Size(G__12333,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12406.cljs$core$IFn$_invoke$arity$2 ? pred__12406.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12407) : pred__12406.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12407)))){
return (new shadow.dom.Size(self__.w,G__12333,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12333),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12333){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12333,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12338){
var extmap__5342__auto__ = (function (){var G__12427 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12338,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12338)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12427);
} else {
return G__12427;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12338),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12338),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__12950 = (i + (1));
var G__12951 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__12950;
ret = G__12951;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12434){
var vec__12435 = p__12434;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12435,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12435,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12441 = arguments.length;
switch (G__12441) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__12968 = ps;
var G__12969 = (i + (1));
el__$1 = G__12968;
i = G__12969;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12457 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12457,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12457,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12457,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12469_12977 = cljs.core.seq(props);
var chunk__12470_12978 = null;
var count__12471_12979 = (0);
var i__12472_12980 = (0);
while(true){
if((i__12472_12980 < count__12471_12979)){
var vec__12494_12982 = chunk__12470_12978.cljs$core$IIndexed$_nth$arity$2(null,i__12472_12980);
var k_12983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12494_12982,(0),null);
var v_12984 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12494_12982,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_12983);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12983),v_12984);


var G__12985 = seq__12469_12977;
var G__12986 = chunk__12470_12978;
var G__12987 = count__12471_12979;
var G__12988 = (i__12472_12980 + (1));
seq__12469_12977 = G__12985;
chunk__12470_12978 = G__12986;
count__12471_12979 = G__12987;
i__12472_12980 = G__12988;
continue;
} else {
var temp__5804__auto___12990 = cljs.core.seq(seq__12469_12977);
if(temp__5804__auto___12990){
var seq__12469_12991__$1 = temp__5804__auto___12990;
if(cljs.core.chunked_seq_QMARK_(seq__12469_12991__$1)){
var c__5525__auto___12992 = cljs.core.chunk_first(seq__12469_12991__$1);
var G__12993 = cljs.core.chunk_rest(seq__12469_12991__$1);
var G__12994 = c__5525__auto___12992;
var G__12995 = cljs.core.count(c__5525__auto___12992);
var G__12996 = (0);
seq__12469_12977 = G__12993;
chunk__12470_12978 = G__12994;
count__12471_12979 = G__12995;
i__12472_12980 = G__12996;
continue;
} else {
var vec__12498_12997 = cljs.core.first(seq__12469_12991__$1);
var k_12998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12498_12997,(0),null);
var v_12999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12498_12997,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_12998);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_12998),v_12999);


var G__13000 = cljs.core.next(seq__12469_12991__$1);
var G__13001 = null;
var G__13002 = (0);
var G__13003 = (0);
seq__12469_12977 = G__13000;
chunk__12470_12978 = G__13001;
count__12471_12979 = G__13002;
i__12472_12980 = G__13003;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12506 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12506,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12506,(1),null);
var seq__12509_13004 = cljs.core.seq(node_children);
var chunk__12511_13005 = null;
var count__12512_13006 = (0);
var i__12513_13007 = (0);
while(true){
if((i__12513_13007 < count__12512_13006)){
var child_struct_13008 = chunk__12511_13005.cljs$core$IIndexed$_nth$arity$2(null,i__12513_13007);
if((!((child_struct_13008 == null)))){
if(typeof child_struct_13008 === 'string'){
var text_13010 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13010),child_struct_13008].join(''));
} else {
var children_13012 = shadow.dom.svg_node(child_struct_13008);
if(cljs.core.seq_QMARK_(children_13012)){
var seq__12541_13013 = cljs.core.seq(children_13012);
var chunk__12543_13014 = null;
var count__12544_13015 = (0);
var i__12545_13016 = (0);
while(true){
if((i__12545_13016 < count__12544_13015)){
var child_13017 = chunk__12543_13014.cljs$core$IIndexed$_nth$arity$2(null,i__12545_13016);
if(cljs.core.truth_(child_13017)){
node.appendChild(child_13017);


var G__13018 = seq__12541_13013;
var G__13019 = chunk__12543_13014;
var G__13020 = count__12544_13015;
var G__13021 = (i__12545_13016 + (1));
seq__12541_13013 = G__13018;
chunk__12543_13014 = G__13019;
count__12544_13015 = G__13020;
i__12545_13016 = G__13021;
continue;
} else {
var G__13023 = seq__12541_13013;
var G__13024 = chunk__12543_13014;
var G__13025 = count__12544_13015;
var G__13026 = (i__12545_13016 + (1));
seq__12541_13013 = G__13023;
chunk__12543_13014 = G__13024;
count__12544_13015 = G__13025;
i__12545_13016 = G__13026;
continue;
}
} else {
var temp__5804__auto___13027 = cljs.core.seq(seq__12541_13013);
if(temp__5804__auto___13027){
var seq__12541_13028__$1 = temp__5804__auto___13027;
if(cljs.core.chunked_seq_QMARK_(seq__12541_13028__$1)){
var c__5525__auto___13029 = cljs.core.chunk_first(seq__12541_13028__$1);
var G__13032 = cljs.core.chunk_rest(seq__12541_13028__$1);
var G__13033 = c__5525__auto___13029;
var G__13034 = cljs.core.count(c__5525__auto___13029);
var G__13035 = (0);
seq__12541_13013 = G__13032;
chunk__12543_13014 = G__13033;
count__12544_13015 = G__13034;
i__12545_13016 = G__13035;
continue;
} else {
var child_13036 = cljs.core.first(seq__12541_13028__$1);
if(cljs.core.truth_(child_13036)){
node.appendChild(child_13036);


var G__13037 = cljs.core.next(seq__12541_13028__$1);
var G__13038 = null;
var G__13039 = (0);
var G__13040 = (0);
seq__12541_13013 = G__13037;
chunk__12543_13014 = G__13038;
count__12544_13015 = G__13039;
i__12545_13016 = G__13040;
continue;
} else {
var G__13041 = cljs.core.next(seq__12541_13028__$1);
var G__13042 = null;
var G__13043 = (0);
var G__13044 = (0);
seq__12541_13013 = G__13041;
chunk__12543_13014 = G__13042;
count__12544_13015 = G__13043;
i__12545_13016 = G__13044;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13012);
}
}


var G__13047 = seq__12509_13004;
var G__13048 = chunk__12511_13005;
var G__13049 = count__12512_13006;
var G__13050 = (i__12513_13007 + (1));
seq__12509_13004 = G__13047;
chunk__12511_13005 = G__13048;
count__12512_13006 = G__13049;
i__12513_13007 = G__13050;
continue;
} else {
var G__13052 = seq__12509_13004;
var G__13053 = chunk__12511_13005;
var G__13054 = count__12512_13006;
var G__13055 = (i__12513_13007 + (1));
seq__12509_13004 = G__13052;
chunk__12511_13005 = G__13053;
count__12512_13006 = G__13054;
i__12513_13007 = G__13055;
continue;
}
} else {
var temp__5804__auto___13056 = cljs.core.seq(seq__12509_13004);
if(temp__5804__auto___13056){
var seq__12509_13057__$1 = temp__5804__auto___13056;
if(cljs.core.chunked_seq_QMARK_(seq__12509_13057__$1)){
var c__5525__auto___13058 = cljs.core.chunk_first(seq__12509_13057__$1);
var G__13059 = cljs.core.chunk_rest(seq__12509_13057__$1);
var G__13060 = c__5525__auto___13058;
var G__13061 = cljs.core.count(c__5525__auto___13058);
var G__13062 = (0);
seq__12509_13004 = G__13059;
chunk__12511_13005 = G__13060;
count__12512_13006 = G__13061;
i__12513_13007 = G__13062;
continue;
} else {
var child_struct_13063 = cljs.core.first(seq__12509_13057__$1);
if((!((child_struct_13063 == null)))){
if(typeof child_struct_13063 === 'string'){
var text_13064 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13064),child_struct_13063].join(''));
} else {
var children_13065 = shadow.dom.svg_node(child_struct_13063);
if(cljs.core.seq_QMARK_(children_13065)){
var seq__12553_13066 = cljs.core.seq(children_13065);
var chunk__12555_13067 = null;
var count__12556_13068 = (0);
var i__12557_13069 = (0);
while(true){
if((i__12557_13069 < count__12556_13068)){
var child_13072 = chunk__12555_13067.cljs$core$IIndexed$_nth$arity$2(null,i__12557_13069);
if(cljs.core.truth_(child_13072)){
node.appendChild(child_13072);


var G__13073 = seq__12553_13066;
var G__13074 = chunk__12555_13067;
var G__13075 = count__12556_13068;
var G__13076 = (i__12557_13069 + (1));
seq__12553_13066 = G__13073;
chunk__12555_13067 = G__13074;
count__12556_13068 = G__13075;
i__12557_13069 = G__13076;
continue;
} else {
var G__13077 = seq__12553_13066;
var G__13078 = chunk__12555_13067;
var G__13079 = count__12556_13068;
var G__13080 = (i__12557_13069 + (1));
seq__12553_13066 = G__13077;
chunk__12555_13067 = G__13078;
count__12556_13068 = G__13079;
i__12557_13069 = G__13080;
continue;
}
} else {
var temp__5804__auto___13081__$1 = cljs.core.seq(seq__12553_13066);
if(temp__5804__auto___13081__$1){
var seq__12553_13086__$1 = temp__5804__auto___13081__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12553_13086__$1)){
var c__5525__auto___13087 = cljs.core.chunk_first(seq__12553_13086__$1);
var G__13088 = cljs.core.chunk_rest(seq__12553_13086__$1);
var G__13089 = c__5525__auto___13087;
var G__13090 = cljs.core.count(c__5525__auto___13087);
var G__13091 = (0);
seq__12553_13066 = G__13088;
chunk__12555_13067 = G__13089;
count__12556_13068 = G__13090;
i__12557_13069 = G__13091;
continue;
} else {
var child_13092 = cljs.core.first(seq__12553_13086__$1);
if(cljs.core.truth_(child_13092)){
node.appendChild(child_13092);


var G__13093 = cljs.core.next(seq__12553_13086__$1);
var G__13094 = null;
var G__13095 = (0);
var G__13096 = (0);
seq__12553_13066 = G__13093;
chunk__12555_13067 = G__13094;
count__12556_13068 = G__13095;
i__12557_13069 = G__13096;
continue;
} else {
var G__13097 = cljs.core.next(seq__12553_13086__$1);
var G__13098 = null;
var G__13099 = (0);
var G__13100 = (0);
seq__12553_13066 = G__13097;
chunk__12555_13067 = G__13098;
count__12556_13068 = G__13099;
i__12557_13069 = G__13100;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13065);
}
}


var G__13103 = cljs.core.next(seq__12509_13057__$1);
var G__13104 = null;
var G__13105 = (0);
var G__13106 = (0);
seq__12509_13004 = G__13103;
chunk__12511_13005 = G__13104;
count__12512_13006 = G__13105;
i__12513_13007 = G__13106;
continue;
} else {
var G__13107 = cljs.core.next(seq__12509_13057__$1);
var G__13108 = null;
var G__13109 = (0);
var G__13110 = (0);
seq__12509_13004 = G__13107;
chunk__12511_13005 = G__13108;
count__12512_13006 = G__13109;
i__12513_13007 = G__13110;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13116 = arguments.length;
var i__5727__auto___13117 = (0);
while(true){
if((i__5727__auto___13117 < len__5726__auto___13116)){
args__5732__auto__.push((arguments[i__5727__auto___13117]));

var G__13118 = (i__5727__auto___13117 + (1));
i__5727__auto___13117 = G__13118;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12569){
var G__12571 = cljs.core.first(seq12569);
var seq12569__$1 = cljs.core.next(seq12569);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12571,seq12569__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
