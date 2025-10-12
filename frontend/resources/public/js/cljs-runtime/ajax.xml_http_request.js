goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12488 = e.target.readyState;
var fexpr__12487 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__12487.cljs$core$IFn$_invoke$arity$1 ? fexpr__12487.cljs$core$IFn$_invoke$arity$1(G__12488) : fexpr__12487.call(null,G__12488));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12495,handler){
var map__12496 = p__12495;
var map__12496__$1 = cljs.core.__destructure_map(map__12496);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12496__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12496__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12496__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12496__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12496__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12496__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12496__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__12494_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__12494_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___12527 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___12527)){
var response_type_12528 = temp__5804__auto___12527;
(this$__$1.responseType = cljs.core.name(response_type_12528));
} else {
}

var seq__12497_12529 = cljs.core.seq(headers);
var chunk__12498_12530 = null;
var count__12499_12531 = (0);
var i__12500_12532 = (0);
while(true){
if((i__12500_12532 < count__12499_12531)){
var vec__12512_12533 = chunk__12498_12530.cljs$core$IIndexed$_nth$arity$2(null,i__12500_12532);
var k_12534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12512_12533,(0),null);
var v_12535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12512_12533,(1),null);
this$__$1.setRequestHeader(k_12534,v_12535);


var G__12536 = seq__12497_12529;
var G__12537 = chunk__12498_12530;
var G__12538 = count__12499_12531;
var G__12539 = (i__12500_12532 + (1));
seq__12497_12529 = G__12536;
chunk__12498_12530 = G__12537;
count__12499_12531 = G__12538;
i__12500_12532 = G__12539;
continue;
} else {
var temp__5804__auto___12540 = cljs.core.seq(seq__12497_12529);
if(temp__5804__auto___12540){
var seq__12497_12541__$1 = temp__5804__auto___12540;
if(cljs.core.chunked_seq_QMARK_(seq__12497_12541__$1)){
var c__5525__auto___12542 = cljs.core.chunk_first(seq__12497_12541__$1);
var G__12543 = cljs.core.chunk_rest(seq__12497_12541__$1);
var G__12544 = c__5525__auto___12542;
var G__12545 = cljs.core.count(c__5525__auto___12542);
var G__12546 = (0);
seq__12497_12529 = G__12543;
chunk__12498_12530 = G__12544;
count__12499_12531 = G__12545;
i__12500_12532 = G__12546;
continue;
} else {
var vec__12518_12547 = cljs.core.first(seq__12497_12541__$1);
var k_12548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518_12547,(0),null);
var v_12549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12518_12547,(1),null);
this$__$1.setRequestHeader(k_12548,v_12549);


var G__12550 = cljs.core.next(seq__12497_12541__$1);
var G__12551 = null;
var G__12552 = (0);
var G__12553 = (0);
seq__12497_12529 = G__12550;
chunk__12498_12530 = G__12551;
count__12499_12531 = G__12552;
i__12500_12532 = G__12553;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5002__auto__ = body;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
