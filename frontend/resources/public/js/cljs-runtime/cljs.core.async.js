goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15086 = (function (f,blockable,meta15087){
this.f = f;
this.blockable = blockable;
this.meta15087 = meta15087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15088,meta15087__$1){
var self__ = this;
var _15088__$1 = this;
return (new cljs.core.async.t_cljs$core$async15086(self__.f,self__.blockable,meta15087__$1));
}));

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15088){
var self__ = this;
var _15088__$1 = this;
return self__.meta15087;
}));

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async15086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async15086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta15087","meta15087",1255876099,null)], null);
}));

(cljs.core.async.t_cljs$core$async15086.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15086");

(cljs.core.async.t_cljs$core$async15086.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15086");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15086.
 */
cljs.core.async.__GT_t_cljs$core$async15086 = (function cljs$core$async$__GT_t_cljs$core$async15086(f,blockable,meta15087){
return (new cljs.core.async.t_cljs$core$async15086(f,blockable,meta15087));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__15072 = arguments.length;
switch (G__15072) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async15086(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__15107 = arguments.length;
switch (G__15107) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__15129 = arguments.length;
switch (G__15129) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__15141 = arguments.length;
switch (G__15141) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18359 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18359) : fn1.call(null,val_18359));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18359) : fn1.call(null,val_18359));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__15162 = arguments.length;
switch (G__15162) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___18363 = n;
var x_18364 = (0);
while(true){
if((x_18364 < n__5593__auto___18363)){
(a[x_18364] = x_18364);

var G__18365 = (x_18364 + (1));
x_18364 = G__18365;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15184 = (function (flag,meta15185){
this.flag = flag;
this.meta15185 = meta15185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15186,meta15185__$1){
var self__ = this;
var _15186__$1 = this;
return (new cljs.core.async.t_cljs$core$async15184(self__.flag,meta15185__$1));
}));

(cljs.core.async.t_cljs$core$async15184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15186){
var self__ = this;
var _15186__$1 = this;
return self__.meta15185;
}));

(cljs.core.async.t_cljs$core$async15184.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15184.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async15184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta15185","meta15185",-1545935844,null)], null);
}));

(cljs.core.async.t_cljs$core$async15184.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15184");

(cljs.core.async.t_cljs$core$async15184.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15184");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15184.
 */
cljs.core.async.__GT_t_cljs$core$async15184 = (function cljs$core$async$__GT_t_cljs$core$async15184(flag,meta15185){
return (new cljs.core.async.t_cljs$core$async15184(flag,meta15185));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async15184(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15199 = (function (flag,cb,meta15200){
this.flag = flag;
this.cb = cb;
this.meta15200 = meta15200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15201,meta15200__$1){
var self__ = this;
var _15201__$1 = this;
return (new cljs.core.async.t_cljs$core$async15199(self__.flag,self__.cb,meta15200__$1));
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15201){
var self__ = this;
var _15201__$1 = this;
return self__.meta15200;
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async15199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async15199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta15200","meta15200",-1201557543,null)], null);
}));

(cljs.core.async.t_cljs$core$async15199.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15199");

(cljs.core.async.t_cljs$core$async15199.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15199");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15199.
 */
cljs.core.async.__GT_t_cljs$core$async15199 = (function cljs$core$async$__GT_t_cljs$core$async15199(flag,cb,meta15200){
return (new cljs.core.async.t_cljs$core$async15199(flag,cb,meta15200));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async15199(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15215_SHARP_){
var G__15217 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15215_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15217) : fret.call(null,G__15217));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__15216_SHARP_){
var G__15218 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15216_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__15218) : fret.call(null,G__15218));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18369 = (i + (1));
i = G__18369;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18370 = arguments.length;
var i__5727__auto___18371 = (0);
while(true){
if((i__5727__auto___18371 < len__5726__auto___18370)){
args__5732__auto__.push((arguments[i__5727__auto___18371]));

var G__18372 = (i__5727__auto___18371 + (1));
i__5727__auto___18371 = G__18372;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__15224){
var map__15225 = p__15224;
var map__15225__$1 = cljs.core.__destructure_map(map__15225);
var opts = map__15225__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq15220){
var G__15221 = cljs.core.first(seq15220);
var seq15220__$1 = cljs.core.next(seq15220);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15221,seq15220__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__15251 = arguments.length;
switch (G__15251) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14925__auto___18374 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_15388){
var state_val_15389 = (state_15388[(1)]);
if((state_val_15389 === (7))){
var inst_15364 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15407_18375 = state_15388__$1;
(statearr_15407_18375[(2)] = inst_15364);

(statearr_15407_18375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (1))){
var state_15388__$1 = state_15388;
var statearr_15408_18376 = state_15388__$1;
(statearr_15408_18376[(2)] = null);

(statearr_15408_18376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (4))){
var inst_15336 = (state_15388[(7)]);
var inst_15336__$1 = (state_15388[(2)]);
var inst_15342 = (inst_15336__$1 == null);
var state_15388__$1 = (function (){var statearr_15409 = state_15388;
(statearr_15409[(7)] = inst_15336__$1);

return statearr_15409;
})();
if(cljs.core.truth_(inst_15342)){
var statearr_15410_18377 = state_15388__$1;
(statearr_15410_18377[(1)] = (5));

} else {
var statearr_15412_18378 = state_15388__$1;
(statearr_15412_18378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (13))){
var state_15388__$1 = state_15388;
var statearr_15414_18379 = state_15388__$1;
(statearr_15414_18379[(2)] = null);

(statearr_15414_18379[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (6))){
var inst_15336 = (state_15388[(7)]);
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15388__$1,(11),to,inst_15336);
} else {
if((state_val_15389 === (3))){
var inst_15367 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15388__$1,inst_15367);
} else {
if((state_val_15389 === (12))){
var state_15388__$1 = state_15388;
var statearr_15419_18384 = state_15388__$1;
(statearr_15419_18384[(2)] = null);

(statearr_15419_18384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (2))){
var state_15388__$1 = state_15388;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15388__$1,(4),from);
} else {
if((state_val_15389 === (11))){
var inst_15357 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
if(cljs.core.truth_(inst_15357)){
var statearr_15425_18385 = state_15388__$1;
(statearr_15425_18385[(1)] = (12));

} else {
var statearr_15426_18386 = state_15388__$1;
(statearr_15426_18386[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (9))){
var state_15388__$1 = state_15388;
var statearr_15427_18387 = state_15388__$1;
(statearr_15427_18387[(2)] = null);

(statearr_15427_18387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (5))){
var state_15388__$1 = state_15388;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15428_18388 = state_15388__$1;
(statearr_15428_18388[(1)] = (8));

} else {
var statearr_15429_18389 = state_15388__$1;
(statearr_15429_18389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (14))){
var inst_15362 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15430_18390 = state_15388__$1;
(statearr_15430_18390[(2)] = inst_15362);

(statearr_15430_18390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (10))){
var inst_15354 = (state_15388[(2)]);
var state_15388__$1 = state_15388;
var statearr_15431_18391 = state_15388__$1;
(statearr_15431_18391[(2)] = inst_15354);

(statearr_15431_18391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15389 === (8))){
var inst_15349 = cljs.core.async.close_BANG_(to);
var state_15388__$1 = state_15388;
var statearr_15432_18392 = state_15388__$1;
(statearr_15432_18392[(2)] = inst_15349);

(statearr_15432_18392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14565__auto__ = null;
var cljs$core$async$state_machine__14565__auto____0 = (function (){
var statearr_15434 = [null,null,null,null,null,null,null,null];
(statearr_15434[(0)] = cljs$core$async$state_machine__14565__auto__);

(statearr_15434[(1)] = (1));

return statearr_15434;
});
var cljs$core$async$state_machine__14565__auto____1 = (function (state_15388){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_15388);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e15435){var ex__14568__auto__ = e15435;
var statearr_15436_18393 = state_15388;
(statearr_15436_18393[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_15388[(4)]))){
var statearr_15437_18394 = state_15388;
(statearr_15437_18394[(1)] = cljs.core.first((state_15388[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18395 = state_15388;
state_15388 = G__18395;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$state_machine__14565__auto__ = function(state_15388){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14565__auto____1.call(this,state_15388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14565__auto____0;
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14565__auto____1;
return cljs$core$async$state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_15439 = f__14926__auto__();
(statearr_15439[(6)] = c__14925__auto___18374);

return statearr_15439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15443){
var vec__15444 = p__15443;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15444,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15444,(1),null);
var job = vec__15444;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14925__auto___18399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_15452){
var state_val_15453 = (state_15452[(1)]);
if((state_val_15453 === (1))){
var state_15452__$1 = state_15452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15452__$1,(2),res,v);
} else {
if((state_val_15453 === (2))){
var inst_15448 = (state_15452[(2)]);
var inst_15450 = cljs.core.async.close_BANG_(res);
var state_15452__$1 = (function (){var statearr_15457 = state_15452;
(statearr_15457[(7)] = inst_15448);

return statearr_15457;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15452__$1,inst_15450);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0 = (function (){
var statearr_15460 = [null,null,null,null,null,null,null,null];
(statearr_15460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__);

(statearr_15460[(1)] = (1));

return statearr_15460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1 = (function (state_15452){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_15452);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e15462){var ex__14568__auto__ = e15462;
var statearr_15466_18403 = state_15452;
(statearr_15466_18403[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_15452[(4)]))){
var statearr_15470_18404 = state_15452;
(statearr_15470_18404[(1)] = cljs.core.first((state_15452[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18405 = state_15452;
state_15452 = G__18405;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__ = function(state_15452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1.call(this,state_15452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_15493 = f__14926__auto__();
(statearr_15493[(6)] = c__14925__auto___18399);

return statearr_15493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15500){
var vec__15501 = p__15500;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15501,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15501,(1),null);
var job = vec__15501;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18406 = n;
var __18407 = (0);
while(true){
if((__18407 < n__5593__auto___18406)){
var G__15508_18408 = type;
var G__15508_18409__$1 = (((G__15508_18408 instanceof cljs.core.Keyword))?G__15508_18408.fqn:null);
switch (G__15508_18409__$1) {
case "compute":
var c__14925__auto___18414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18407,c__14925__auto___18414,G__15508_18408,G__15508_18409__$1,n__5593__auto___18406,jobs,results,process__$1,async){
return (function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = ((function (__18407,c__14925__auto___18414,G__15508_18408,G__15508_18409__$1,n__5593__auto___18406,jobs,results,process__$1,async){
return (function (state_15536){
var state_val_15537 = (state_15536[(1)]);
if((state_val_15537 === (1))){
var state_15536__$1 = state_15536;
var statearr_15538_18420 = state_15536__$1;
(statearr_15538_18420[(2)] = null);

(statearr_15538_18420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15537 === (2))){
var state_15536__$1 = state_15536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15536__$1,(4),jobs);
} else {
if((state_val_15537 === (3))){
var inst_15534 = (state_15536[(2)]);
var state_15536__$1 = state_15536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15536__$1,inst_15534);
} else {
if((state_val_15537 === (4))){
var inst_15526 = (state_15536[(2)]);
var inst_15527 = process__$1(inst_15526);
var state_15536__$1 = state_15536;
if(cljs.core.truth_(inst_15527)){
var statearr_15539_18421 = state_15536__$1;
(statearr_15539_18421[(1)] = (5));

} else {
var statearr_15540_18423 = state_15536__$1;
(statearr_15540_18423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15537 === (5))){
var state_15536__$1 = state_15536;
var statearr_15541_18424 = state_15536__$1;
(statearr_15541_18424[(2)] = null);

(statearr_15541_18424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15537 === (6))){
var state_15536__$1 = state_15536;
var statearr_15542_18425 = state_15536__$1;
(statearr_15542_18425[(2)] = null);

(statearr_15542_18425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15537 === (7))){
var inst_15532 = (state_15536[(2)]);
var state_15536__$1 = state_15536;
var statearr_15544_18426 = state_15536__$1;
(statearr_15544_18426[(2)] = inst_15532);

(statearr_15544_18426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18407,c__14925__auto___18414,G__15508_18408,G__15508_18409__$1,n__5593__auto___18406,jobs,results,process__$1,async))
;
return ((function (__18407,switch__14564__auto__,c__14925__auto___18414,G__15508_18408,G__15508_18409__$1,n__5593__auto___18406,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0 = (function (){
var statearr_15546 = [null,null,null,null,null,null,null];
(statearr_15546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__);

(statearr_15546[(1)] = (1));

return statearr_15546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1 = (function (state_15536){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_15536);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e15547){var ex__14568__auto__ = e15547;
var statearr_15548_18427 = state_15536;
(statearr_15548_18427[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_15536[(4)]))){
var statearr_15550_18428 = state_15536;
(statearr_15550_18428[(1)] = cljs.core.first((state_15536[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18432 = state_15536;
state_15536 = G__18432;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__ = function(state_15536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1.call(this,state_15536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__;
})()
;})(__18407,switch__14564__auto__,c__14925__auto___18414,G__15508_18408,G__15508_18409__$1,n__5593__auto___18406,jobs,results,process__$1,async))
})();
var state__14927__auto__ = (function (){var statearr_15551 = f__14926__auto__();
(statearr_15551[(6)] = c__14925__auto___18414);

return statearr_15551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
});})(__18407,c__14925__auto___18414,G__15508_18408,G__15508_18409__$1,n__5593__auto___18406,jobs,results,process__$1,async))
);


break;
case "async":
var c__14925__auto___18433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18407,c__14925__auto___18433,G__15508_18408,G__15508_18409__$1,n__5593__auto___18406,jobs,results,process__$1,async){
return (function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = ((function (__18407,c__14925__auto___18433,G__15508_18408,G__15508_18409__$1,n__5593__auto___18406,jobs,results,process__$1,async){
return (function (state_15568){
var state_val_15572 = (state_15568[(1)]);
if((state_val_15572 === (1))){
var state_15568__$1 = state_15568;
var statearr_15573_18434 = state_15568__$1;
(statearr_15573_18434[(2)] = null);

(statearr_15573_18434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (2))){
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15568__$1,(4),jobs);
} else {
if((state_val_15572 === (3))){
var inst_15566 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15568__$1,inst_15566);
} else {
if((state_val_15572 === (4))){
var inst_15558 = (state_15568[(2)]);
var inst_15559 = async(inst_15558);
var state_15568__$1 = state_15568;
if(cljs.core.truth_(inst_15559)){
var statearr_15578_18435 = state_15568__$1;
(statearr_15578_18435[(1)] = (5));

} else {
var statearr_15579_18436 = state_15568__$1;
(statearr_15579_18436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (5))){
var state_15568__$1 = state_15568;
var statearr_15583_18437 = state_15568__$1;
(statearr_15583_18437[(2)] = null);

(statearr_15583_18437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (6))){
var state_15568__$1 = state_15568;
var statearr_15584_18442 = state_15568__$1;
(statearr_15584_18442[(2)] = null);

(statearr_15584_18442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15572 === (7))){
var inst_15564 = (state_15568[(2)]);
var state_15568__$1 = state_15568;
var statearr_15585_18446 = state_15568__$1;
(statearr_15585_18446[(2)] = inst_15564);

(statearr_15585_18446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18407,c__14925__auto___18433,G__15508_18408,G__15508_18409__$1,n__5593__auto___18406,jobs,results,process__$1,async))
;
return ((function (__18407,switch__14564__auto__,c__14925__auto___18433,G__15508_18408,G__15508_18409__$1,n__5593__auto___18406,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0 = (function (){
var statearr_15589 = [null,null,null,null,null,null,null];
(statearr_15589[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__);

(statearr_15589[(1)] = (1));

return statearr_15589;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1 = (function (state_15568){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_15568);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e15590){var ex__14568__auto__ = e15590;
var statearr_15592_18447 = state_15568;
(statearr_15592_18447[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_15568[(4)]))){
var statearr_15599_18448 = state_15568;
(statearr_15599_18448[(1)] = cljs.core.first((state_15568[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18449 = state_15568;
state_15568 = G__18449;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__ = function(state_15568){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1.call(this,state_15568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__;
})()
;})(__18407,switch__14564__auto__,c__14925__auto___18433,G__15508_18408,G__15508_18409__$1,n__5593__auto___18406,jobs,results,process__$1,async))
})();
var state__14927__auto__ = (function (){var statearr_15628 = f__14926__auto__();
(statearr_15628[(6)] = c__14925__auto___18433);

return statearr_15628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
});})(__18407,c__14925__auto___18433,G__15508_18408,G__15508_18409__$1,n__5593__auto___18406,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15508_18409__$1)].join('')));

}

var G__18450 = (__18407 + (1));
__18407 = G__18450;
continue;
} else {
}
break;
}

var c__14925__auto___18451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_15671){
var state_val_15672 = (state_15671[(1)]);
if((state_val_15672 === (7))){
var inst_15665 = (state_15671[(2)]);
var state_15671__$1 = state_15671;
var statearr_15682_18461 = state_15671__$1;
(statearr_15682_18461[(2)] = inst_15665);

(statearr_15682_18461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15672 === (1))){
var state_15671__$1 = state_15671;
var statearr_15683_18462 = state_15671__$1;
(statearr_15683_18462[(2)] = null);

(statearr_15683_18462[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15672 === (4))){
var inst_15649 = (state_15671[(7)]);
var inst_15649__$1 = (state_15671[(2)]);
var inst_15651 = (inst_15649__$1 == null);
var state_15671__$1 = (function (){var statearr_15684 = state_15671;
(statearr_15684[(7)] = inst_15649__$1);

return statearr_15684;
})();
if(cljs.core.truth_(inst_15651)){
var statearr_15685_18463 = state_15671__$1;
(statearr_15685_18463[(1)] = (5));

} else {
var statearr_15686_18464 = state_15671__$1;
(statearr_15686_18464[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15672 === (6))){
var inst_15655 = (state_15671[(8)]);
var inst_15649 = (state_15671[(7)]);
var inst_15655__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15656 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15657 = [inst_15649,inst_15655__$1];
var inst_15658 = (new cljs.core.PersistentVector(null,2,(5),inst_15656,inst_15657,null));
var state_15671__$1 = (function (){var statearr_15687 = state_15671;
(statearr_15687[(8)] = inst_15655__$1);

return statearr_15687;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15671__$1,(8),jobs,inst_15658);
} else {
if((state_val_15672 === (3))){
var inst_15669 = (state_15671[(2)]);
var state_15671__$1 = state_15671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15671__$1,inst_15669);
} else {
if((state_val_15672 === (2))){
var state_15671__$1 = state_15671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15671__$1,(4),from);
} else {
if((state_val_15672 === (9))){
var inst_15662 = (state_15671[(2)]);
var state_15671__$1 = (function (){var statearr_15689 = state_15671;
(statearr_15689[(9)] = inst_15662);

return statearr_15689;
})();
var statearr_15690_18471 = state_15671__$1;
(statearr_15690_18471[(2)] = null);

(statearr_15690_18471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15672 === (5))){
var inst_15653 = cljs.core.async.close_BANG_(jobs);
var state_15671__$1 = state_15671;
var statearr_15692_18472 = state_15671__$1;
(statearr_15692_18472[(2)] = inst_15653);

(statearr_15692_18472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15672 === (8))){
var inst_15655 = (state_15671[(8)]);
var inst_15660 = (state_15671[(2)]);
var state_15671__$1 = (function (){var statearr_15693 = state_15671;
(statearr_15693[(10)] = inst_15660);

return statearr_15693;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15671__$1,(9),results,inst_15655);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0 = (function (){
var statearr_15695 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15695[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__);

(statearr_15695[(1)] = (1));

return statearr_15695;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1 = (function (state_15671){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_15671);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e15697){var ex__14568__auto__ = e15697;
var statearr_15698_18473 = state_15671;
(statearr_15698_18473[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_15671[(4)]))){
var statearr_15700_18474 = state_15671;
(statearr_15700_18474[(1)] = cljs.core.first((state_15671[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18475 = state_15671;
state_15671 = G__18475;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__ = function(state_15671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1.call(this,state_15671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_15701 = f__14926__auto__();
(statearr_15701[(6)] = c__14925__auto___18451);

return statearr_15701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


var c__14925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_15740){
var state_val_15741 = (state_15740[(1)]);
if((state_val_15741 === (7))){
var inst_15736 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
var statearr_15742_18478 = state_15740__$1;
(statearr_15742_18478[(2)] = inst_15736);

(statearr_15742_18478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (20))){
var state_15740__$1 = state_15740;
var statearr_15743_18479 = state_15740__$1;
(statearr_15743_18479[(2)] = null);

(statearr_15743_18479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (1))){
var state_15740__$1 = state_15740;
var statearr_15744_18480 = state_15740__$1;
(statearr_15744_18480[(2)] = null);

(statearr_15744_18480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (4))){
var inst_15704 = (state_15740[(7)]);
var inst_15704__$1 = (state_15740[(2)]);
var inst_15705 = (inst_15704__$1 == null);
var state_15740__$1 = (function (){var statearr_15747 = state_15740;
(statearr_15747[(7)] = inst_15704__$1);

return statearr_15747;
})();
if(cljs.core.truth_(inst_15705)){
var statearr_15748_18482 = state_15740__$1;
(statearr_15748_18482[(1)] = (5));

} else {
var statearr_15749_18483 = state_15740__$1;
(statearr_15749_18483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (15))){
var inst_15717 = (state_15740[(8)]);
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15740__$1,(18),to,inst_15717);
} else {
if((state_val_15741 === (21))){
var inst_15731 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
var statearr_15750_18485 = state_15740__$1;
(statearr_15750_18485[(2)] = inst_15731);

(statearr_15750_18485[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (13))){
var inst_15733 = (state_15740[(2)]);
var state_15740__$1 = (function (){var statearr_15752 = state_15740;
(statearr_15752[(9)] = inst_15733);

return statearr_15752;
})();
var statearr_15753_18487 = state_15740__$1;
(statearr_15753_18487[(2)] = null);

(statearr_15753_18487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (6))){
var inst_15704 = (state_15740[(7)]);
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15740__$1,(11),inst_15704);
} else {
if((state_val_15741 === (17))){
var inst_15726 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
if(cljs.core.truth_(inst_15726)){
var statearr_15756_18499 = state_15740__$1;
(statearr_15756_18499[(1)] = (19));

} else {
var statearr_15758_18500 = state_15740__$1;
(statearr_15758_18500[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (3))){
var inst_15738 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15740__$1,inst_15738);
} else {
if((state_val_15741 === (12))){
var inst_15714 = (state_15740[(10)]);
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15740__$1,(14),inst_15714);
} else {
if((state_val_15741 === (2))){
var state_15740__$1 = state_15740;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15740__$1,(4),results);
} else {
if((state_val_15741 === (19))){
var state_15740__$1 = state_15740;
var statearr_15759_18503 = state_15740__$1;
(statearr_15759_18503[(2)] = null);

(statearr_15759_18503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (11))){
var inst_15714 = (state_15740[(2)]);
var state_15740__$1 = (function (){var statearr_15760 = state_15740;
(statearr_15760[(10)] = inst_15714);

return statearr_15760;
})();
var statearr_15761_18504 = state_15740__$1;
(statearr_15761_18504[(2)] = null);

(statearr_15761_18504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (9))){
var state_15740__$1 = state_15740;
var statearr_15762_18506 = state_15740__$1;
(statearr_15762_18506[(2)] = null);

(statearr_15762_18506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (5))){
var state_15740__$1 = state_15740;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15763_18508 = state_15740__$1;
(statearr_15763_18508[(1)] = (8));

} else {
var statearr_15764_18509 = state_15740__$1;
(statearr_15764_18509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (14))){
var inst_15719 = (state_15740[(11)]);
var inst_15717 = (state_15740[(8)]);
var inst_15717__$1 = (state_15740[(2)]);
var inst_15718 = (inst_15717__$1 == null);
var inst_15719__$1 = cljs.core.not(inst_15718);
var state_15740__$1 = (function (){var statearr_15765 = state_15740;
(statearr_15765[(11)] = inst_15719__$1);

(statearr_15765[(8)] = inst_15717__$1);

return statearr_15765;
})();
if(inst_15719__$1){
var statearr_15766_18510 = state_15740__$1;
(statearr_15766_18510[(1)] = (15));

} else {
var statearr_15767_18511 = state_15740__$1;
(statearr_15767_18511[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (16))){
var inst_15719 = (state_15740[(11)]);
var state_15740__$1 = state_15740;
var statearr_15768_18512 = state_15740__$1;
(statearr_15768_18512[(2)] = inst_15719);

(statearr_15768_18512[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (10))){
var inst_15711 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
var statearr_15769_18513 = state_15740__$1;
(statearr_15769_18513[(2)] = inst_15711);

(statearr_15769_18513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (18))){
var inst_15723 = (state_15740[(2)]);
var state_15740__$1 = state_15740;
var statearr_15770_18514 = state_15740__$1;
(statearr_15770_18514[(2)] = inst_15723);

(statearr_15770_18514[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15741 === (8))){
var inst_15708 = cljs.core.async.close_BANG_(to);
var state_15740__$1 = state_15740;
var statearr_15771_18520 = state_15740__$1;
(statearr_15771_18520[(2)] = inst_15708);

(statearr_15771_18520[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0 = (function (){
var statearr_15773 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__);

(statearr_15773[(1)] = (1));

return statearr_15773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1 = (function (state_15740){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_15740);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e15774){var ex__14568__auto__ = e15774;
var statearr_15775_18521 = state_15740;
(statearr_15775_18521[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_15740[(4)]))){
var statearr_15776_18522 = state_15740;
(statearr_15776_18522[(1)] = cljs.core.first((state_15740[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18526 = state_15740;
state_15740 = G__18526;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__ = function(state_15740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1.call(this,state_15740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14565__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_15778 = f__14926__auto__();
(statearr_15778[(6)] = c__14925__auto__);

return statearr_15778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));

return c__14925__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15782 = arguments.length;
switch (G__15782) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15787 = arguments.length;
switch (G__15787) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15794 = arguments.length;
switch (G__15794) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14925__auto___18537 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_15834){
var state_val_15835 = (state_15834[(1)]);
if((state_val_15835 === (7))){
var inst_15830 = (state_15834[(2)]);
var state_15834__$1 = state_15834;
var statearr_15840_18538 = state_15834__$1;
(statearr_15840_18538[(2)] = inst_15830);

(statearr_15840_18538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (1))){
var state_15834__$1 = state_15834;
var statearr_15841_18540 = state_15834__$1;
(statearr_15841_18540[(2)] = null);

(statearr_15841_18540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (4))){
var inst_15811 = (state_15834[(7)]);
var inst_15811__$1 = (state_15834[(2)]);
var inst_15812 = (inst_15811__$1 == null);
var state_15834__$1 = (function (){var statearr_15842 = state_15834;
(statearr_15842[(7)] = inst_15811__$1);

return statearr_15842;
})();
if(cljs.core.truth_(inst_15812)){
var statearr_15843_18541 = state_15834__$1;
(statearr_15843_18541[(1)] = (5));

} else {
var statearr_15844_18542 = state_15834__$1;
(statearr_15844_18542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (13))){
var state_15834__$1 = state_15834;
var statearr_15847_18543 = state_15834__$1;
(statearr_15847_18543[(2)] = null);

(statearr_15847_18543[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (6))){
var inst_15811 = (state_15834[(7)]);
var inst_15817 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15811) : p.call(null,inst_15811));
var state_15834__$1 = state_15834;
if(cljs.core.truth_(inst_15817)){
var statearr_15849_18547 = state_15834__$1;
(statearr_15849_18547[(1)] = (9));

} else {
var statearr_15851_18548 = state_15834__$1;
(statearr_15851_18548[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (3))){
var inst_15832 = (state_15834[(2)]);
var state_15834__$1 = state_15834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15834__$1,inst_15832);
} else {
if((state_val_15835 === (12))){
var state_15834__$1 = state_15834;
var statearr_15852_18558 = state_15834__$1;
(statearr_15852_18558[(2)] = null);

(statearr_15852_18558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (2))){
var state_15834__$1 = state_15834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15834__$1,(4),ch);
} else {
if((state_val_15835 === (11))){
var inst_15811 = (state_15834[(7)]);
var inst_15821 = (state_15834[(2)]);
var state_15834__$1 = state_15834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15834__$1,(8),inst_15821,inst_15811);
} else {
if((state_val_15835 === (9))){
var state_15834__$1 = state_15834;
var statearr_15865_18579 = state_15834__$1;
(statearr_15865_18579[(2)] = tc);

(statearr_15865_18579[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (5))){
var inst_15814 = cljs.core.async.close_BANG_(tc);
var inst_15815 = cljs.core.async.close_BANG_(fc);
var state_15834__$1 = (function (){var statearr_15867 = state_15834;
(statearr_15867[(8)] = inst_15814);

return statearr_15867;
})();
var statearr_15868_18583 = state_15834__$1;
(statearr_15868_18583[(2)] = inst_15815);

(statearr_15868_18583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (14))){
var inst_15828 = (state_15834[(2)]);
var state_15834__$1 = state_15834;
var statearr_15870_18585 = state_15834__$1;
(statearr_15870_18585[(2)] = inst_15828);

(statearr_15870_18585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (10))){
var state_15834__$1 = state_15834;
var statearr_15874_18586 = state_15834__$1;
(statearr_15874_18586[(2)] = fc);

(statearr_15874_18586[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15835 === (8))){
var inst_15823 = (state_15834[(2)]);
var state_15834__$1 = state_15834;
if(cljs.core.truth_(inst_15823)){
var statearr_15875_18588 = state_15834__$1;
(statearr_15875_18588[(1)] = (12));

} else {
var statearr_15878_18590 = state_15834__$1;
(statearr_15878_18590[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14565__auto__ = null;
var cljs$core$async$state_machine__14565__auto____0 = (function (){
var statearr_15883 = [null,null,null,null,null,null,null,null,null];
(statearr_15883[(0)] = cljs$core$async$state_machine__14565__auto__);

(statearr_15883[(1)] = (1));

return statearr_15883;
});
var cljs$core$async$state_machine__14565__auto____1 = (function (state_15834){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_15834);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e15884){var ex__14568__auto__ = e15884;
var statearr_15886_18597 = state_15834;
(statearr_15886_18597[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_15834[(4)]))){
var statearr_15891_18601 = state_15834;
(statearr_15891_18601[(1)] = cljs.core.first((state_15834[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18602 = state_15834;
state_15834 = G__18602;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$state_machine__14565__auto__ = function(state_15834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14565__auto____1.call(this,state_15834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14565__auto____0;
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14565__auto____1;
return cljs$core$async$state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_15896 = f__14926__auto__();
(statearr_15896[(6)] = c__14925__auto___18537);

return statearr_15896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_15934){
var state_val_15935 = (state_15934[(1)]);
if((state_val_15935 === (7))){
var inst_15929 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
var statearr_15943_18603 = state_15934__$1;
(statearr_15943_18603[(2)] = inst_15929);

(statearr_15943_18603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (1))){
var inst_15911 = init;
var inst_15912 = inst_15911;
var state_15934__$1 = (function (){var statearr_15947 = state_15934;
(statearr_15947[(7)] = inst_15912);

return statearr_15947;
})();
var statearr_15948_18604 = state_15934__$1;
(statearr_15948_18604[(2)] = null);

(statearr_15948_18604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (4))){
var inst_15916 = (state_15934[(8)]);
var inst_15916__$1 = (state_15934[(2)]);
var inst_15917 = (inst_15916__$1 == null);
var state_15934__$1 = (function (){var statearr_15953 = state_15934;
(statearr_15953[(8)] = inst_15916__$1);

return statearr_15953;
})();
if(cljs.core.truth_(inst_15917)){
var statearr_15955_18606 = state_15934__$1;
(statearr_15955_18606[(1)] = (5));

} else {
var statearr_15958_18607 = state_15934__$1;
(statearr_15958_18607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (6))){
var inst_15920 = (state_15934[(9)]);
var inst_15916 = (state_15934[(8)]);
var inst_15912 = (state_15934[(7)]);
var inst_15920__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15912,inst_15916) : f.call(null,inst_15912,inst_15916));
var inst_15921 = cljs.core.reduced_QMARK_(inst_15920__$1);
var state_15934__$1 = (function (){var statearr_15959 = state_15934;
(statearr_15959[(9)] = inst_15920__$1);

return statearr_15959;
})();
if(inst_15921){
var statearr_15960_18611 = state_15934__$1;
(statearr_15960_18611[(1)] = (8));

} else {
var statearr_15965_18612 = state_15934__$1;
(statearr_15965_18612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (3))){
var inst_15931 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15934__$1,inst_15931);
} else {
if((state_val_15935 === (2))){
var state_15934__$1 = state_15934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15934__$1,(4),ch);
} else {
if((state_val_15935 === (9))){
var inst_15920 = (state_15934[(9)]);
var inst_15912 = inst_15920;
var state_15934__$1 = (function (){var statearr_15980 = state_15934;
(statearr_15980[(7)] = inst_15912);

return statearr_15980;
})();
var statearr_15981_18616 = state_15934__$1;
(statearr_15981_18616[(2)] = null);

(statearr_15981_18616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (5))){
var inst_15912 = (state_15934[(7)]);
var state_15934__$1 = state_15934;
var statearr_15982_18617 = state_15934__$1;
(statearr_15982_18617[(2)] = inst_15912);

(statearr_15982_18617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (10))){
var inst_15927 = (state_15934[(2)]);
var state_15934__$1 = state_15934;
var statearr_15983_18618 = state_15934__$1;
(statearr_15983_18618[(2)] = inst_15927);

(statearr_15983_18618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15935 === (8))){
var inst_15920 = (state_15934[(9)]);
var inst_15923 = cljs.core.deref(inst_15920);
var state_15934__$1 = state_15934;
var statearr_15985_18619 = state_15934__$1;
(statearr_15985_18619[(2)] = inst_15923);

(statearr_15985_18619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14565__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14565__auto____0 = (function (){
var statearr_15988 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15988[(0)] = cljs$core$async$reduce_$_state_machine__14565__auto__);

(statearr_15988[(1)] = (1));

return statearr_15988;
});
var cljs$core$async$reduce_$_state_machine__14565__auto____1 = (function (state_15934){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_15934);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e15989){var ex__14568__auto__ = e15989;
var statearr_15991_18620 = state_15934;
(statearr_15991_18620[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_15934[(4)]))){
var statearr_15995_18621 = state_15934;
(statearr_15995_18621[(1)] = cljs.core.first((state_15934[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18626 = state_15934;
state_15934 = G__18626;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14565__auto__ = function(state_15934){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14565__auto____1.call(this,state_15934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14565__auto____0;
cljs$core$async$reduce_$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14565__auto____1;
return cljs$core$async$reduce_$_state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_16000 = f__14926__auto__();
(statearr_16000[(6)] = c__14925__auto__);

return statearr_16000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));

return c__14925__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_16013){
var state_val_16014 = (state_16013[(1)]);
if((state_val_16014 === (1))){
var inst_16008 = cljs.core.async.reduce(f__$1,init,ch);
var state_16013__$1 = state_16013;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16013__$1,(2),inst_16008);
} else {
if((state_val_16014 === (2))){
var inst_16010 = (state_16013[(2)]);
var inst_16011 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_16010) : f__$1.call(null,inst_16010));
var state_16013__$1 = state_16013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16013__$1,inst_16011);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14565__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14565__auto____0 = (function (){
var statearr_16017 = [null,null,null,null,null,null,null];
(statearr_16017[(0)] = cljs$core$async$transduce_$_state_machine__14565__auto__);

(statearr_16017[(1)] = (1));

return statearr_16017;
});
var cljs$core$async$transduce_$_state_machine__14565__auto____1 = (function (state_16013){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_16013);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e16018){var ex__14568__auto__ = e16018;
var statearr_16019_18627 = state_16013;
(statearr_16019_18627[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_16013[(4)]))){
var statearr_16020_18628 = state_16013;
(statearr_16020_18628[(1)] = cljs.core.first((state_16013[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18629 = state_16013;
state_16013 = G__18629;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14565__auto__ = function(state_16013){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14565__auto____1.call(this,state_16013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14565__auto____0;
cljs$core$async$transduce_$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14565__auto____1;
return cljs$core$async$transduce_$_state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_16021 = f__14926__auto__();
(statearr_16021[(6)] = c__14925__auto__);

return statearr_16021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));

return c__14925__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__16036 = arguments.length;
switch (G__16036) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_16067){
var state_val_16068 = (state_16067[(1)]);
if((state_val_16068 === (7))){
var inst_16048 = (state_16067[(2)]);
var state_16067__$1 = state_16067;
var statearr_16069_18631 = state_16067__$1;
(statearr_16069_18631[(2)] = inst_16048);

(statearr_16069_18631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (1))){
var inst_16042 = cljs.core.seq(coll);
var inst_16043 = inst_16042;
var state_16067__$1 = (function (){var statearr_16071 = state_16067;
(statearr_16071[(7)] = inst_16043);

return statearr_16071;
})();
var statearr_16072_18632 = state_16067__$1;
(statearr_16072_18632[(2)] = null);

(statearr_16072_18632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (4))){
var inst_16043 = (state_16067[(7)]);
var inst_16046 = cljs.core.first(inst_16043);
var state_16067__$1 = state_16067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16067__$1,(7),ch,inst_16046);
} else {
if((state_val_16068 === (13))){
var inst_16060 = (state_16067[(2)]);
var state_16067__$1 = state_16067;
var statearr_16075_18633 = state_16067__$1;
(statearr_16075_18633[(2)] = inst_16060);

(statearr_16075_18633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (6))){
var inst_16051 = (state_16067[(2)]);
var state_16067__$1 = state_16067;
if(cljs.core.truth_(inst_16051)){
var statearr_16076_18638 = state_16067__$1;
(statearr_16076_18638[(1)] = (8));

} else {
var statearr_16077_18639 = state_16067__$1;
(statearr_16077_18639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (3))){
var inst_16064 = (state_16067[(2)]);
var state_16067__$1 = state_16067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16067__$1,inst_16064);
} else {
if((state_val_16068 === (12))){
var state_16067__$1 = state_16067;
var statearr_16084_18644 = state_16067__$1;
(statearr_16084_18644[(2)] = null);

(statearr_16084_18644[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (2))){
var inst_16043 = (state_16067[(7)]);
var state_16067__$1 = state_16067;
if(cljs.core.truth_(inst_16043)){
var statearr_16087_18645 = state_16067__$1;
(statearr_16087_18645[(1)] = (4));

} else {
var statearr_16088_18646 = state_16067__$1;
(statearr_16088_18646[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (11))){
var inst_16057 = cljs.core.async.close_BANG_(ch);
var state_16067__$1 = state_16067;
var statearr_16092_18653 = state_16067__$1;
(statearr_16092_18653[(2)] = inst_16057);

(statearr_16092_18653[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (9))){
var state_16067__$1 = state_16067;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16093_18654 = state_16067__$1;
(statearr_16093_18654[(1)] = (11));

} else {
var statearr_16094_18655 = state_16067__$1;
(statearr_16094_18655[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (5))){
var inst_16043 = (state_16067[(7)]);
var state_16067__$1 = state_16067;
var statearr_16098_18656 = state_16067__$1;
(statearr_16098_18656[(2)] = inst_16043);

(statearr_16098_18656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (10))){
var inst_16062 = (state_16067[(2)]);
var state_16067__$1 = state_16067;
var statearr_16103_18657 = state_16067__$1;
(statearr_16103_18657[(2)] = inst_16062);

(statearr_16103_18657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16068 === (8))){
var inst_16043 = (state_16067[(7)]);
var inst_16053 = cljs.core.next(inst_16043);
var inst_16043__$1 = inst_16053;
var state_16067__$1 = (function (){var statearr_16105 = state_16067;
(statearr_16105[(7)] = inst_16043__$1);

return statearr_16105;
})();
var statearr_16106_18658 = state_16067__$1;
(statearr_16106_18658[(2)] = null);

(statearr_16106_18658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14565__auto__ = null;
var cljs$core$async$state_machine__14565__auto____0 = (function (){
var statearr_16109 = [null,null,null,null,null,null,null,null];
(statearr_16109[(0)] = cljs$core$async$state_machine__14565__auto__);

(statearr_16109[(1)] = (1));

return statearr_16109;
});
var cljs$core$async$state_machine__14565__auto____1 = (function (state_16067){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_16067);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e16110){var ex__14568__auto__ = e16110;
var statearr_16111_18662 = state_16067;
(statearr_16111_18662[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_16067[(4)]))){
var statearr_16113_18663 = state_16067;
(statearr_16113_18663[(1)] = cljs.core.first((state_16067[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18667 = state_16067;
state_16067 = G__18667;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$state_machine__14565__auto__ = function(state_16067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14565__auto____1.call(this,state_16067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14565__auto____0;
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14565__auto____1;
return cljs$core$async$state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_16116 = f__14926__auto__();
(statearr_16116[(6)] = c__14925__auto__);

return statearr_16116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));

return c__14925__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__16127 = arguments.length;
switch (G__16127) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18669 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18669(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18670 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18670(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18674 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18674(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18675 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18675(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16182 = (function (ch,cs,meta16183){
this.ch = ch;
this.cs = cs;
this.meta16183 = meta16183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16184,meta16183__$1){
var self__ = this;
var _16184__$1 = this;
return (new cljs.core.async.t_cljs$core$async16182(self__.ch,self__.cs,meta16183__$1));
}));

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16184){
var self__ = this;
var _16184__$1 = this;
return self__.meta16183;
}));

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16183","meta16183",-1547286197,null)], null);
}));

(cljs.core.async.t_cljs$core$async16182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16182");

(cljs.core.async.t_cljs$core$async16182.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16182.
 */
cljs.core.async.__GT_t_cljs$core$async16182 = (function cljs$core$async$__GT_t_cljs$core$async16182(ch,cs,meta16183){
return (new cljs.core.async.t_cljs$core$async16182(ch,cs,meta16183));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16182(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14925__auto___18679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_16337){
var state_val_16338 = (state_16337[(1)]);
if((state_val_16338 === (7))){
var inst_16331 = (state_16337[(2)]);
var state_16337__$1 = state_16337;
var statearr_16340_18680 = state_16337__$1;
(statearr_16340_18680[(2)] = inst_16331);

(statearr_16340_18680[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (20))){
var inst_16228 = (state_16337[(7)]);
var inst_16240 = cljs.core.first(inst_16228);
var inst_16241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16240,(0),null);
var inst_16242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16240,(1),null);
var state_16337__$1 = (function (){var statearr_16341 = state_16337;
(statearr_16341[(8)] = inst_16241);

return statearr_16341;
})();
if(cljs.core.truth_(inst_16242)){
var statearr_16342_18681 = state_16337__$1;
(statearr_16342_18681[(1)] = (22));

} else {
var statearr_16343_18682 = state_16337__$1;
(statearr_16343_18682[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (27))){
var inst_16272 = (state_16337[(9)]);
var inst_16191 = (state_16337[(10)]);
var inst_16270 = (state_16337[(11)]);
var inst_16278 = (state_16337[(12)]);
var inst_16278__$1 = cljs.core._nth(inst_16270,inst_16272);
var inst_16279 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16278__$1,inst_16191,done);
var state_16337__$1 = (function (){var statearr_16344 = state_16337;
(statearr_16344[(12)] = inst_16278__$1);

return statearr_16344;
})();
if(cljs.core.truth_(inst_16279)){
var statearr_16345_18683 = state_16337__$1;
(statearr_16345_18683[(1)] = (30));

} else {
var statearr_16346_18684 = state_16337__$1;
(statearr_16346_18684[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (1))){
var state_16337__$1 = state_16337;
var statearr_16347_18685 = state_16337__$1;
(statearr_16347_18685[(2)] = null);

(statearr_16347_18685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (24))){
var inst_16228 = (state_16337[(7)]);
var inst_16247 = (state_16337[(2)]);
var inst_16248 = cljs.core.next(inst_16228);
var inst_16201 = inst_16248;
var inst_16202 = null;
var inst_16203 = (0);
var inst_16204 = (0);
var state_16337__$1 = (function (){var statearr_16348 = state_16337;
(statearr_16348[(13)] = inst_16204);

(statearr_16348[(14)] = inst_16201);

(statearr_16348[(15)] = inst_16247);

(statearr_16348[(16)] = inst_16203);

(statearr_16348[(17)] = inst_16202);

return statearr_16348;
})();
var statearr_16349_18686 = state_16337__$1;
(statearr_16349_18686[(2)] = null);

(statearr_16349_18686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (39))){
var state_16337__$1 = state_16337;
var statearr_16354_18687 = state_16337__$1;
(statearr_16354_18687[(2)] = null);

(statearr_16354_18687[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (4))){
var inst_16191 = (state_16337[(10)]);
var inst_16191__$1 = (state_16337[(2)]);
var inst_16193 = (inst_16191__$1 == null);
var state_16337__$1 = (function (){var statearr_16355 = state_16337;
(statearr_16355[(10)] = inst_16191__$1);

return statearr_16355;
})();
if(cljs.core.truth_(inst_16193)){
var statearr_16359_18688 = state_16337__$1;
(statearr_16359_18688[(1)] = (5));

} else {
var statearr_16360_18690 = state_16337__$1;
(statearr_16360_18690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (15))){
var inst_16204 = (state_16337[(13)]);
var inst_16201 = (state_16337[(14)]);
var inst_16203 = (state_16337[(16)]);
var inst_16202 = (state_16337[(17)]);
var inst_16223 = (state_16337[(2)]);
var inst_16224 = (inst_16204 + (1));
var tmp16350 = inst_16201;
var tmp16351 = inst_16203;
var tmp16352 = inst_16202;
var inst_16201__$1 = tmp16350;
var inst_16202__$1 = tmp16352;
var inst_16203__$1 = tmp16351;
var inst_16204__$1 = inst_16224;
var state_16337__$1 = (function (){var statearr_16361 = state_16337;
(statearr_16361[(13)] = inst_16204__$1);

(statearr_16361[(14)] = inst_16201__$1);

(statearr_16361[(18)] = inst_16223);

(statearr_16361[(16)] = inst_16203__$1);

(statearr_16361[(17)] = inst_16202__$1);

return statearr_16361;
})();
var statearr_16363_18693 = state_16337__$1;
(statearr_16363_18693[(2)] = null);

(statearr_16363_18693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (21))){
var inst_16251 = (state_16337[(2)]);
var state_16337__$1 = state_16337;
var statearr_16367_18694 = state_16337__$1;
(statearr_16367_18694[(2)] = inst_16251);

(statearr_16367_18694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (31))){
var inst_16278 = (state_16337[(12)]);
var inst_16282 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16278);
var state_16337__$1 = state_16337;
var statearr_16368_18695 = state_16337__$1;
(statearr_16368_18695[(2)] = inst_16282);

(statearr_16368_18695[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (32))){
var inst_16272 = (state_16337[(9)]);
var inst_16271 = (state_16337[(19)]);
var inst_16269 = (state_16337[(20)]);
var inst_16270 = (state_16337[(11)]);
var inst_16284 = (state_16337[(2)]);
var inst_16285 = (inst_16272 + (1));
var tmp16364 = inst_16271;
var tmp16365 = inst_16269;
var tmp16366 = inst_16270;
var inst_16269__$1 = tmp16365;
var inst_16270__$1 = tmp16366;
var inst_16271__$1 = tmp16364;
var inst_16272__$1 = inst_16285;
var state_16337__$1 = (function (){var statearr_16369 = state_16337;
(statearr_16369[(9)] = inst_16272__$1);

(statearr_16369[(21)] = inst_16284);

(statearr_16369[(19)] = inst_16271__$1);

(statearr_16369[(20)] = inst_16269__$1);

(statearr_16369[(11)] = inst_16270__$1);

return statearr_16369;
})();
var statearr_16370_18696 = state_16337__$1;
(statearr_16370_18696[(2)] = null);

(statearr_16370_18696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (40))){
var inst_16303 = (state_16337[(22)]);
var inst_16307 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16303);
var state_16337__$1 = state_16337;
var statearr_16372_18697 = state_16337__$1;
(statearr_16372_18697[(2)] = inst_16307);

(statearr_16372_18697[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (33))){
var inst_16289 = (state_16337[(23)]);
var inst_16292 = cljs.core.chunked_seq_QMARK_(inst_16289);
var state_16337__$1 = state_16337;
if(inst_16292){
var statearr_16374_18698 = state_16337__$1;
(statearr_16374_18698[(1)] = (36));

} else {
var statearr_16377_18699 = state_16337__$1;
(statearr_16377_18699[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (13))){
var inst_16217 = (state_16337[(24)]);
var inst_16220 = cljs.core.async.close_BANG_(inst_16217);
var state_16337__$1 = state_16337;
var statearr_16380_18700 = state_16337__$1;
(statearr_16380_18700[(2)] = inst_16220);

(statearr_16380_18700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (22))){
var inst_16241 = (state_16337[(8)]);
var inst_16244 = cljs.core.async.close_BANG_(inst_16241);
var state_16337__$1 = state_16337;
var statearr_16382_18701 = state_16337__$1;
(statearr_16382_18701[(2)] = inst_16244);

(statearr_16382_18701[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (36))){
var inst_16289 = (state_16337[(23)]);
var inst_16297 = cljs.core.chunk_first(inst_16289);
var inst_16299 = cljs.core.chunk_rest(inst_16289);
var inst_16300 = cljs.core.count(inst_16297);
var inst_16269 = inst_16299;
var inst_16270 = inst_16297;
var inst_16271 = inst_16300;
var inst_16272 = (0);
var state_16337__$1 = (function (){var statearr_16384 = state_16337;
(statearr_16384[(9)] = inst_16272);

(statearr_16384[(19)] = inst_16271);

(statearr_16384[(20)] = inst_16269);

(statearr_16384[(11)] = inst_16270);

return statearr_16384;
})();
var statearr_16385_18702 = state_16337__$1;
(statearr_16385_18702[(2)] = null);

(statearr_16385_18702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (41))){
var inst_16289 = (state_16337[(23)]);
var inst_16309 = (state_16337[(2)]);
var inst_16310 = cljs.core.next(inst_16289);
var inst_16269 = inst_16310;
var inst_16270 = null;
var inst_16271 = (0);
var inst_16272 = (0);
var state_16337__$1 = (function (){var statearr_16386 = state_16337;
(statearr_16386[(25)] = inst_16309);

(statearr_16386[(9)] = inst_16272);

(statearr_16386[(19)] = inst_16271);

(statearr_16386[(20)] = inst_16269);

(statearr_16386[(11)] = inst_16270);

return statearr_16386;
})();
var statearr_16391_18703 = state_16337__$1;
(statearr_16391_18703[(2)] = null);

(statearr_16391_18703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (43))){
var state_16337__$1 = state_16337;
var statearr_16394_18704 = state_16337__$1;
(statearr_16394_18704[(2)] = null);

(statearr_16394_18704[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (29))){
var inst_16318 = (state_16337[(2)]);
var state_16337__$1 = state_16337;
var statearr_16398_18705 = state_16337__$1;
(statearr_16398_18705[(2)] = inst_16318);

(statearr_16398_18705[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (44))){
var inst_16328 = (state_16337[(2)]);
var state_16337__$1 = (function (){var statearr_16400 = state_16337;
(statearr_16400[(26)] = inst_16328);

return statearr_16400;
})();
var statearr_16401_18706 = state_16337__$1;
(statearr_16401_18706[(2)] = null);

(statearr_16401_18706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (6))){
var inst_16261 = (state_16337[(27)]);
var inst_16260 = cljs.core.deref(cs);
var inst_16261__$1 = cljs.core.keys(inst_16260);
var inst_16262 = cljs.core.count(inst_16261__$1);
var inst_16263 = cljs.core.reset_BANG_(dctr,inst_16262);
var inst_16268 = cljs.core.seq(inst_16261__$1);
var inst_16269 = inst_16268;
var inst_16270 = null;
var inst_16271 = (0);
var inst_16272 = (0);
var state_16337__$1 = (function (){var statearr_16403 = state_16337;
(statearr_16403[(9)] = inst_16272);

(statearr_16403[(27)] = inst_16261__$1);

(statearr_16403[(19)] = inst_16271);

(statearr_16403[(20)] = inst_16269);

(statearr_16403[(28)] = inst_16263);

(statearr_16403[(11)] = inst_16270);

return statearr_16403;
})();
var statearr_16406_18707 = state_16337__$1;
(statearr_16406_18707[(2)] = null);

(statearr_16406_18707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (28))){
var inst_16269 = (state_16337[(20)]);
var inst_16289 = (state_16337[(23)]);
var inst_16289__$1 = cljs.core.seq(inst_16269);
var state_16337__$1 = (function (){var statearr_16409 = state_16337;
(statearr_16409[(23)] = inst_16289__$1);

return statearr_16409;
})();
if(inst_16289__$1){
var statearr_16412_18708 = state_16337__$1;
(statearr_16412_18708[(1)] = (33));

} else {
var statearr_16414_18709 = state_16337__$1;
(statearr_16414_18709[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (25))){
var inst_16272 = (state_16337[(9)]);
var inst_16271 = (state_16337[(19)]);
var inst_16275 = (inst_16272 < inst_16271);
var inst_16276 = inst_16275;
var state_16337__$1 = state_16337;
if(cljs.core.truth_(inst_16276)){
var statearr_16419_18713 = state_16337__$1;
(statearr_16419_18713[(1)] = (27));

} else {
var statearr_16420_18714 = state_16337__$1;
(statearr_16420_18714[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (34))){
var state_16337__$1 = state_16337;
var statearr_16421_18715 = state_16337__$1;
(statearr_16421_18715[(2)] = null);

(statearr_16421_18715[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (17))){
var state_16337__$1 = state_16337;
var statearr_16423_18716 = state_16337__$1;
(statearr_16423_18716[(2)] = null);

(statearr_16423_18716[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (3))){
var inst_16333 = (state_16337[(2)]);
var state_16337__$1 = state_16337;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16337__$1,inst_16333);
} else {
if((state_val_16338 === (12))){
var inst_16256 = (state_16337[(2)]);
var state_16337__$1 = state_16337;
var statearr_16428_18717 = state_16337__$1;
(statearr_16428_18717[(2)] = inst_16256);

(statearr_16428_18717[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (2))){
var state_16337__$1 = state_16337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16337__$1,(4),ch);
} else {
if((state_val_16338 === (23))){
var state_16337__$1 = state_16337;
var statearr_16430_18718 = state_16337__$1;
(statearr_16430_18718[(2)] = null);

(statearr_16430_18718[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (35))){
var inst_16316 = (state_16337[(2)]);
var state_16337__$1 = state_16337;
var statearr_16432_18719 = state_16337__$1;
(statearr_16432_18719[(2)] = inst_16316);

(statearr_16432_18719[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (19))){
var inst_16228 = (state_16337[(7)]);
var inst_16232 = cljs.core.chunk_first(inst_16228);
var inst_16233 = cljs.core.chunk_rest(inst_16228);
var inst_16234 = cljs.core.count(inst_16232);
var inst_16201 = inst_16233;
var inst_16202 = inst_16232;
var inst_16203 = inst_16234;
var inst_16204 = (0);
var state_16337__$1 = (function (){var statearr_16437 = state_16337;
(statearr_16437[(13)] = inst_16204);

(statearr_16437[(14)] = inst_16201);

(statearr_16437[(16)] = inst_16203);

(statearr_16437[(17)] = inst_16202);

return statearr_16437;
})();
var statearr_16438_18723 = state_16337__$1;
(statearr_16438_18723[(2)] = null);

(statearr_16438_18723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (11))){
var inst_16228 = (state_16337[(7)]);
var inst_16201 = (state_16337[(14)]);
var inst_16228__$1 = cljs.core.seq(inst_16201);
var state_16337__$1 = (function (){var statearr_16441 = state_16337;
(statearr_16441[(7)] = inst_16228__$1);

return statearr_16441;
})();
if(inst_16228__$1){
var statearr_16444_18727 = state_16337__$1;
(statearr_16444_18727[(1)] = (16));

} else {
var statearr_16445_18728 = state_16337__$1;
(statearr_16445_18728[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (9))){
var inst_16258 = (state_16337[(2)]);
var state_16337__$1 = state_16337;
var statearr_16447_18729 = state_16337__$1;
(statearr_16447_18729[(2)] = inst_16258);

(statearr_16447_18729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (5))){
var inst_16199 = cljs.core.deref(cs);
var inst_16200 = cljs.core.seq(inst_16199);
var inst_16201 = inst_16200;
var inst_16202 = null;
var inst_16203 = (0);
var inst_16204 = (0);
var state_16337__$1 = (function (){var statearr_16448 = state_16337;
(statearr_16448[(13)] = inst_16204);

(statearr_16448[(14)] = inst_16201);

(statearr_16448[(16)] = inst_16203);

(statearr_16448[(17)] = inst_16202);

return statearr_16448;
})();
var statearr_16449_18730 = state_16337__$1;
(statearr_16449_18730[(2)] = null);

(statearr_16449_18730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (14))){
var state_16337__$1 = state_16337;
var statearr_16450_18731 = state_16337__$1;
(statearr_16450_18731[(2)] = null);

(statearr_16450_18731[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (45))){
var inst_16325 = (state_16337[(2)]);
var state_16337__$1 = state_16337;
var statearr_16451_18732 = state_16337__$1;
(statearr_16451_18732[(2)] = inst_16325);

(statearr_16451_18732[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (26))){
var inst_16261 = (state_16337[(27)]);
var inst_16320 = (state_16337[(2)]);
var inst_16321 = cljs.core.seq(inst_16261);
var state_16337__$1 = (function (){var statearr_16452 = state_16337;
(statearr_16452[(29)] = inst_16320);

return statearr_16452;
})();
if(inst_16321){
var statearr_16453_18734 = state_16337__$1;
(statearr_16453_18734[(1)] = (42));

} else {
var statearr_16454_18735 = state_16337__$1;
(statearr_16454_18735[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (16))){
var inst_16228 = (state_16337[(7)]);
var inst_16230 = cljs.core.chunked_seq_QMARK_(inst_16228);
var state_16337__$1 = state_16337;
if(inst_16230){
var statearr_16455_18736 = state_16337__$1;
(statearr_16455_18736[(1)] = (19));

} else {
var statearr_16456_18739 = state_16337__$1;
(statearr_16456_18739[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (38))){
var inst_16313 = (state_16337[(2)]);
var state_16337__$1 = state_16337;
var statearr_16457_18740 = state_16337__$1;
(statearr_16457_18740[(2)] = inst_16313);

(statearr_16457_18740[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (30))){
var state_16337__$1 = state_16337;
var statearr_16462_18741 = state_16337__$1;
(statearr_16462_18741[(2)] = null);

(statearr_16462_18741[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (10))){
var inst_16204 = (state_16337[(13)]);
var inst_16202 = (state_16337[(17)]);
var inst_16216 = cljs.core._nth(inst_16202,inst_16204);
var inst_16217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16216,(0),null);
var inst_16218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16216,(1),null);
var state_16337__$1 = (function (){var statearr_16470 = state_16337;
(statearr_16470[(24)] = inst_16217);

return statearr_16470;
})();
if(cljs.core.truth_(inst_16218)){
var statearr_16473_18743 = state_16337__$1;
(statearr_16473_18743[(1)] = (13));

} else {
var statearr_16475_18744 = state_16337__$1;
(statearr_16475_18744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (18))){
var inst_16254 = (state_16337[(2)]);
var state_16337__$1 = state_16337;
var statearr_16479_18746 = state_16337__$1;
(statearr_16479_18746[(2)] = inst_16254);

(statearr_16479_18746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (42))){
var state_16337__$1 = state_16337;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16337__$1,(45),dchan);
} else {
if((state_val_16338 === (37))){
var inst_16303 = (state_16337[(22)]);
var inst_16289 = (state_16337[(23)]);
var inst_16191 = (state_16337[(10)]);
var inst_16303__$1 = cljs.core.first(inst_16289);
var inst_16304 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16303__$1,inst_16191,done);
var state_16337__$1 = (function (){var statearr_16488 = state_16337;
(statearr_16488[(22)] = inst_16303__$1);

return statearr_16488;
})();
if(cljs.core.truth_(inst_16304)){
var statearr_16489_18747 = state_16337__$1;
(statearr_16489_18747[(1)] = (39));

} else {
var statearr_16494_18748 = state_16337__$1;
(statearr_16494_18748[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16338 === (8))){
var inst_16204 = (state_16337[(13)]);
var inst_16203 = (state_16337[(16)]);
var inst_16206 = (inst_16204 < inst_16203);
var inst_16207 = inst_16206;
var state_16337__$1 = state_16337;
if(cljs.core.truth_(inst_16207)){
var statearr_16495_18749 = state_16337__$1;
(statearr_16495_18749[(1)] = (10));

} else {
var statearr_16496_18750 = state_16337__$1;
(statearr_16496_18750[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14565__auto__ = null;
var cljs$core$async$mult_$_state_machine__14565__auto____0 = (function (){
var statearr_16498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16498[(0)] = cljs$core$async$mult_$_state_machine__14565__auto__);

(statearr_16498[(1)] = (1));

return statearr_16498;
});
var cljs$core$async$mult_$_state_machine__14565__auto____1 = (function (state_16337){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_16337);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e16503){var ex__14568__auto__ = e16503;
var statearr_16504_18751 = state_16337;
(statearr_16504_18751[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_16337[(4)]))){
var statearr_16505_18752 = state_16337;
(statearr_16505_18752[(1)] = cljs.core.first((state_16337[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18756 = state_16337;
state_16337 = G__18756;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14565__auto__ = function(state_16337){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14565__auto____1.call(this,state_16337);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14565__auto____0;
cljs$core$async$mult_$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14565__auto____1;
return cljs$core$async$mult_$_state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_16506 = f__14926__auto__();
(statearr_16506[(6)] = c__14925__auto___18679);

return statearr_16506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16510 = arguments.length;
switch (G__16510) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18765 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18765(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18766 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18766(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18767 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18767(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18771 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18771(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18772 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18772(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18779 = arguments.length;
var i__5727__auto___18780 = (0);
while(true){
if((i__5727__auto___18780 < len__5726__auto___18779)){
args__5732__auto__.push((arguments[i__5727__auto___18780]));

var G__18781 = (i__5727__auto___18780 + (1));
i__5727__auto___18780 = G__18781;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16592){
var map__16593 = p__16592;
var map__16593__$1 = cljs.core.__destructure_map(map__16593);
var opts = map__16593__$1;
var statearr_16596_18788 = state;
(statearr_16596_18788[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16598_18789 = state;
(statearr_16598_18789[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16600_18790 = state;
(statearr_16600_18790[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16580){
var G__16581 = cljs.core.first(seq16580);
var seq16580__$1 = cljs.core.next(seq16580);
var G__16582 = cljs.core.first(seq16580__$1);
var seq16580__$2 = cljs.core.next(seq16580__$1);
var G__16583 = cljs.core.first(seq16580__$2);
var seq16580__$3 = cljs.core.next(seq16580__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16581,G__16582,G__16583,seq16580__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16612 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16613){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16613 = meta16613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16614,meta16613__$1){
var self__ = this;
var _16614__$1 = this;
return (new cljs.core.async.t_cljs$core$async16612(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16613__$1));
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16614){
var self__ = this;
var _16614__$1 = this;
return self__.meta16613;
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16612.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16613","meta16613",2088509858,null)], null);
}));

(cljs.core.async.t_cljs$core$async16612.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16612");

(cljs.core.async.t_cljs$core$async16612.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16612");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16612.
 */
cljs.core.async.__GT_t_cljs$core$async16612 = (function cljs$core$async$__GT_t_cljs$core$async16612(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16613){
return (new cljs.core.async.t_cljs$core$async16612(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16613));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16612(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14925__auto___18802 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_16724){
var state_val_16725 = (state_16724[(1)]);
if((state_val_16725 === (7))){
var inst_16680 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
if(cljs.core.truth_(inst_16680)){
var statearr_16727_18803 = state_16724__$1;
(statearr_16727_18803[(1)] = (8));

} else {
var statearr_16728_18804 = state_16724__$1;
(statearr_16728_18804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (20))){
var inst_16669 = (state_16724[(7)]);
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16724__$1,(23),out,inst_16669);
} else {
if((state_val_16725 === (1))){
var inst_16648 = calc_state();
var inst_16649 = cljs.core.__destructure_map(inst_16648);
var inst_16650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16649,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16649,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16654 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16649,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16655 = inst_16648;
var state_16724__$1 = (function (){var statearr_16730 = state_16724;
(statearr_16730[(8)] = inst_16654);

(statearr_16730[(9)] = inst_16652);

(statearr_16730[(10)] = inst_16650);

(statearr_16730[(11)] = inst_16655);

return statearr_16730;
})();
var statearr_16731_18809 = state_16724__$1;
(statearr_16731_18809[(2)] = null);

(statearr_16731_18809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (24))){
var inst_16659 = (state_16724[(12)]);
var inst_16655 = inst_16659;
var state_16724__$1 = (function (){var statearr_16734 = state_16724;
(statearr_16734[(11)] = inst_16655);

return statearr_16734;
})();
var statearr_16736_18810 = state_16724__$1;
(statearr_16736_18810[(2)] = null);

(statearr_16736_18810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (4))){
var inst_16669 = (state_16724[(7)]);
var inst_16674 = (state_16724[(13)]);
var inst_16668 = (state_16724[(2)]);
var inst_16669__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16668,(0),null);
var inst_16670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16668,(1),null);
var inst_16674__$1 = (inst_16669__$1 == null);
var state_16724__$1 = (function (){var statearr_16738 = state_16724;
(statearr_16738[(7)] = inst_16669__$1);

(statearr_16738[(14)] = inst_16670);

(statearr_16738[(13)] = inst_16674__$1);

return statearr_16738;
})();
if(cljs.core.truth_(inst_16674__$1)){
var statearr_16742_18811 = state_16724__$1;
(statearr_16742_18811[(1)] = (5));

} else {
var statearr_16744_18812 = state_16724__$1;
(statearr_16744_18812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (15))){
var inst_16660 = (state_16724[(15)]);
var inst_16695 = (state_16724[(16)]);
var inst_16695__$1 = cljs.core.empty_QMARK_(inst_16660);
var state_16724__$1 = (function (){var statearr_16746 = state_16724;
(statearr_16746[(16)] = inst_16695__$1);

return statearr_16746;
})();
if(inst_16695__$1){
var statearr_16747_18813 = state_16724__$1;
(statearr_16747_18813[(1)] = (17));

} else {
var statearr_16748_18814 = state_16724__$1;
(statearr_16748_18814[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (21))){
var inst_16659 = (state_16724[(12)]);
var inst_16655 = inst_16659;
var state_16724__$1 = (function (){var statearr_16751 = state_16724;
(statearr_16751[(11)] = inst_16655);

return statearr_16751;
})();
var statearr_16753_18815 = state_16724__$1;
(statearr_16753_18815[(2)] = null);

(statearr_16753_18815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (13))){
var inst_16688 = (state_16724[(2)]);
var inst_16689 = calc_state();
var inst_16655 = inst_16689;
var state_16724__$1 = (function (){var statearr_16757 = state_16724;
(statearr_16757[(17)] = inst_16688);

(statearr_16757[(11)] = inst_16655);

return statearr_16757;
})();
var statearr_16762_18816 = state_16724__$1;
(statearr_16762_18816[(2)] = null);

(statearr_16762_18816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (22))){
var inst_16716 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16767_18817 = state_16724__$1;
(statearr_16767_18817[(2)] = inst_16716);

(statearr_16767_18817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (6))){
var inst_16670 = (state_16724[(14)]);
var inst_16678 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16670,change);
var state_16724__$1 = state_16724;
var statearr_16770_18818 = state_16724__$1;
(statearr_16770_18818[(2)] = inst_16678);

(statearr_16770_18818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (25))){
var state_16724__$1 = state_16724;
var statearr_16772_18819 = state_16724__$1;
(statearr_16772_18819[(2)] = null);

(statearr_16772_18819[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (17))){
var inst_16661 = (state_16724[(18)]);
var inst_16670 = (state_16724[(14)]);
var inst_16698 = (inst_16661.cljs$core$IFn$_invoke$arity$1 ? inst_16661.cljs$core$IFn$_invoke$arity$1(inst_16670) : inst_16661.call(null,inst_16670));
var inst_16699 = cljs.core.not(inst_16698);
var state_16724__$1 = state_16724;
var statearr_16777_18820 = state_16724__$1;
(statearr_16777_18820[(2)] = inst_16699);

(statearr_16777_18820[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (3))){
var inst_16720 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16724__$1,inst_16720);
} else {
if((state_val_16725 === (12))){
var state_16724__$1 = state_16724;
var statearr_16779_18821 = state_16724__$1;
(statearr_16779_18821[(2)] = null);

(statearr_16779_18821[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (2))){
var inst_16659 = (state_16724[(12)]);
var inst_16655 = (state_16724[(11)]);
var inst_16659__$1 = cljs.core.__destructure_map(inst_16655);
var inst_16660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16659__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16659__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16659__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16724__$1 = (function (){var statearr_16783 = state_16724;
(statearr_16783[(15)] = inst_16660);

(statearr_16783[(12)] = inst_16659__$1);

(statearr_16783[(18)] = inst_16661);

return statearr_16783;
})();
return cljs.core.async.ioc_alts_BANG_(state_16724__$1,(4),inst_16662);
} else {
if((state_val_16725 === (23))){
var inst_16707 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
if(cljs.core.truth_(inst_16707)){
var statearr_16785_18823 = state_16724__$1;
(statearr_16785_18823[(1)] = (24));

} else {
var statearr_16788_18824 = state_16724__$1;
(statearr_16788_18824[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (19))){
var inst_16702 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16790_18825 = state_16724__$1;
(statearr_16790_18825[(2)] = inst_16702);

(statearr_16790_18825[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (11))){
var inst_16670 = (state_16724[(14)]);
var inst_16685 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16670);
var state_16724__$1 = state_16724;
var statearr_16792_18826 = state_16724__$1;
(statearr_16792_18826[(2)] = inst_16685);

(statearr_16792_18826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (9))){
var inst_16660 = (state_16724[(15)]);
var inst_16692 = (state_16724[(19)]);
var inst_16670 = (state_16724[(14)]);
var inst_16692__$1 = (inst_16660.cljs$core$IFn$_invoke$arity$1 ? inst_16660.cljs$core$IFn$_invoke$arity$1(inst_16670) : inst_16660.call(null,inst_16670));
var state_16724__$1 = (function (){var statearr_16795 = state_16724;
(statearr_16795[(19)] = inst_16692__$1);

return statearr_16795;
})();
if(cljs.core.truth_(inst_16692__$1)){
var statearr_16797_18827 = state_16724__$1;
(statearr_16797_18827[(1)] = (14));

} else {
var statearr_16798_18828 = state_16724__$1;
(statearr_16798_18828[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (5))){
var inst_16674 = (state_16724[(13)]);
var state_16724__$1 = state_16724;
var statearr_16800_18829 = state_16724__$1;
(statearr_16800_18829[(2)] = inst_16674);

(statearr_16800_18829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (14))){
var inst_16692 = (state_16724[(19)]);
var state_16724__$1 = state_16724;
var statearr_16801_18830 = state_16724__$1;
(statearr_16801_18830[(2)] = inst_16692);

(statearr_16801_18830[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (26))){
var inst_16712 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16805_18831 = state_16724__$1;
(statearr_16805_18831[(2)] = inst_16712);

(statearr_16805_18831[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (16))){
var inst_16704 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
if(cljs.core.truth_(inst_16704)){
var statearr_16806_18832 = state_16724__$1;
(statearr_16806_18832[(1)] = (20));

} else {
var statearr_16808_18833 = state_16724__$1;
(statearr_16808_18833[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (10))){
var inst_16718 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16809_18834 = state_16724__$1;
(statearr_16809_18834[(2)] = inst_16718);

(statearr_16809_18834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (18))){
var inst_16695 = (state_16724[(16)]);
var state_16724__$1 = state_16724;
var statearr_16811_18836 = state_16724__$1;
(statearr_16811_18836[(2)] = inst_16695);

(statearr_16811_18836[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (8))){
var inst_16669 = (state_16724[(7)]);
var inst_16683 = (inst_16669 == null);
var state_16724__$1 = state_16724;
if(cljs.core.truth_(inst_16683)){
var statearr_16814_18837 = state_16724__$1;
(statearr_16814_18837[(1)] = (11));

} else {
var statearr_16815_18841 = state_16724__$1;
(statearr_16815_18841[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14565__auto__ = null;
var cljs$core$async$mix_$_state_machine__14565__auto____0 = (function (){
var statearr_16819 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16819[(0)] = cljs$core$async$mix_$_state_machine__14565__auto__);

(statearr_16819[(1)] = (1));

return statearr_16819;
});
var cljs$core$async$mix_$_state_machine__14565__auto____1 = (function (state_16724){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_16724);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e16821){var ex__14568__auto__ = e16821;
var statearr_16822_18842 = state_16724;
(statearr_16822_18842[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_16724[(4)]))){
var statearr_16824_18843 = state_16724;
(statearr_16824_18843[(1)] = cljs.core.first((state_16724[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18844 = state_16724;
state_16724 = G__18844;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14565__auto__ = function(state_16724){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14565__auto____1.call(this,state_16724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14565__auto____0;
cljs$core$async$mix_$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14565__auto____1;
return cljs$core$async$mix_$_state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_16838 = f__14926__auto__();
(statearr_16838[(6)] = c__14925__auto___18802);

return statearr_16838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18845 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18845(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18848 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18848(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18849 = (function() {
var G__18850 = null;
var G__18850__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18850__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18850 = function(p,v){
switch(arguments.length){
case 1:
return G__18850__1.call(this,p);
case 2:
return G__18850__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18850.cljs$core$IFn$_invoke$arity$1 = G__18850__1;
G__18850.cljs$core$IFn$_invoke$arity$2 = G__18850__2;
return G__18850;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16980 = arguments.length;
switch (G__16980) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18849(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18849(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16994 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16995){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16995 = meta16995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16996,meta16995__$1){
var self__ = this;
var _16996__$1 = this;
return (new cljs.core.async.t_cljs$core$async16994(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16995__$1));
}));

(cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16996){
var self__ = this;
var _16996__$1 = this;
return self__.meta16995;
}));

(cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16994.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16995","meta16995",1292191697,null)], null);
}));

(cljs.core.async.t_cljs$core$async16994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16994");

(cljs.core.async.t_cljs$core$async16994.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16994.
 */
cljs.core.async.__GT_t_cljs$core$async16994 = (function cljs$core$async$__GT_t_cljs$core$async16994(ch,topic_fn,buf_fn,mults,ensure_mult,meta16995){
return (new cljs.core.async.t_cljs$core$async16994(ch,topic_fn,buf_fn,mults,ensure_mult,meta16995));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16991 = arguments.length;
switch (G__16991) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16987_SHARP_){
if(cljs.core.truth_((p1__16987_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16987_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16987_SHARP_.call(null,topic)))){
return p1__16987_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16987_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16994(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14925__auto___18862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_17116){
var state_val_17118 = (state_17116[(1)]);
if((state_val_17118 === (7))){
var inst_17109 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
var statearr_17127_18863 = state_17116__$1;
(statearr_17127_18863[(2)] = inst_17109);

(statearr_17127_18863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (20))){
var state_17116__$1 = state_17116;
var statearr_17128_18864 = state_17116__$1;
(statearr_17128_18864[(2)] = null);

(statearr_17128_18864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (1))){
var state_17116__$1 = state_17116;
var statearr_17129_18865 = state_17116__$1;
(statearr_17129_18865[(2)] = null);

(statearr_17129_18865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (24))){
var inst_17089 = (state_17116[(7)]);
var inst_17100 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_17089);
var state_17116__$1 = state_17116;
var statearr_17130_18866 = state_17116__$1;
(statearr_17130_18866[(2)] = inst_17100);

(statearr_17130_18866[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (4))){
var inst_17026 = (state_17116[(8)]);
var inst_17026__$1 = (state_17116[(2)]);
var inst_17034 = (inst_17026__$1 == null);
var state_17116__$1 = (function (){var statearr_17133 = state_17116;
(statearr_17133[(8)] = inst_17026__$1);

return statearr_17133;
})();
if(cljs.core.truth_(inst_17034)){
var statearr_17134_18868 = state_17116__$1;
(statearr_17134_18868[(1)] = (5));

} else {
var statearr_17135_18870 = state_17116__$1;
(statearr_17135_18870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (15))){
var inst_17083 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
var statearr_17136_18871 = state_17116__$1;
(statearr_17136_18871[(2)] = inst_17083);

(statearr_17136_18871[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (21))){
var inst_17105 = (state_17116[(2)]);
var state_17116__$1 = (function (){var statearr_17137 = state_17116;
(statearr_17137[(9)] = inst_17105);

return statearr_17137;
})();
var statearr_17138_18875 = state_17116__$1;
(statearr_17138_18875[(2)] = null);

(statearr_17138_18875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (13))){
var inst_17059 = (state_17116[(10)]);
var inst_17061 = cljs.core.chunked_seq_QMARK_(inst_17059);
var state_17116__$1 = state_17116;
if(inst_17061){
var statearr_17146_18876 = state_17116__$1;
(statearr_17146_18876[(1)] = (16));

} else {
var statearr_17147_18877 = state_17116__$1;
(statearr_17147_18877[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (22))){
var inst_17096 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
if(cljs.core.truth_(inst_17096)){
var statearr_17152_18878 = state_17116__$1;
(statearr_17152_18878[(1)] = (23));

} else {
var statearr_17153_18879 = state_17116__$1;
(statearr_17153_18879[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (6))){
var inst_17089 = (state_17116[(7)]);
var inst_17026 = (state_17116[(8)]);
var inst_17091 = (state_17116[(11)]);
var inst_17089__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_17026) : topic_fn.call(null,inst_17026));
var inst_17090 = cljs.core.deref(mults);
var inst_17091__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_17090,inst_17089__$1);
var state_17116__$1 = (function (){var statearr_17155 = state_17116;
(statearr_17155[(7)] = inst_17089__$1);

(statearr_17155[(11)] = inst_17091__$1);

return statearr_17155;
})();
if(cljs.core.truth_(inst_17091__$1)){
var statearr_17156_18880 = state_17116__$1;
(statearr_17156_18880[(1)] = (19));

} else {
var statearr_17157_18881 = state_17116__$1;
(statearr_17157_18881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (25))){
var inst_17102 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
var statearr_17158_18883 = state_17116__$1;
(statearr_17158_18883[(2)] = inst_17102);

(statearr_17158_18883[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (17))){
var inst_17059 = (state_17116[(10)]);
var inst_17072 = cljs.core.first(inst_17059);
var inst_17073 = cljs.core.async.muxch_STAR_(inst_17072);
var inst_17074 = cljs.core.async.close_BANG_(inst_17073);
var inst_17077 = cljs.core.next(inst_17059);
var inst_17043 = inst_17077;
var inst_17044 = null;
var inst_17045 = (0);
var inst_17046 = (0);
var state_17116__$1 = (function (){var statearr_17159 = state_17116;
(statearr_17159[(12)] = inst_17074);

(statearr_17159[(13)] = inst_17046);

(statearr_17159[(14)] = inst_17045);

(statearr_17159[(15)] = inst_17043);

(statearr_17159[(16)] = inst_17044);

return statearr_17159;
})();
var statearr_17164_18885 = state_17116__$1;
(statearr_17164_18885[(2)] = null);

(statearr_17164_18885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (3))){
var inst_17111 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17116__$1,inst_17111);
} else {
if((state_val_17118 === (12))){
var inst_17085 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
var statearr_17169_18886 = state_17116__$1;
(statearr_17169_18886[(2)] = inst_17085);

(statearr_17169_18886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (2))){
var state_17116__$1 = state_17116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17116__$1,(4),ch);
} else {
if((state_val_17118 === (23))){
var state_17116__$1 = state_17116;
var statearr_17174_18887 = state_17116__$1;
(statearr_17174_18887[(2)] = null);

(statearr_17174_18887[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (19))){
var inst_17026 = (state_17116[(8)]);
var inst_17091 = (state_17116[(11)]);
var inst_17094 = cljs.core.async.muxch_STAR_(inst_17091);
var state_17116__$1 = state_17116;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17116__$1,(22),inst_17094,inst_17026);
} else {
if((state_val_17118 === (11))){
var inst_17043 = (state_17116[(15)]);
var inst_17059 = (state_17116[(10)]);
var inst_17059__$1 = cljs.core.seq(inst_17043);
var state_17116__$1 = (function (){var statearr_17180 = state_17116;
(statearr_17180[(10)] = inst_17059__$1);

return statearr_17180;
})();
if(inst_17059__$1){
var statearr_17181_18892 = state_17116__$1;
(statearr_17181_18892[(1)] = (13));

} else {
var statearr_17182_18893 = state_17116__$1;
(statearr_17182_18893[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (9))){
var inst_17087 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
var statearr_17186_18894 = state_17116__$1;
(statearr_17186_18894[(2)] = inst_17087);

(statearr_17186_18894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (5))){
var inst_17040 = cljs.core.deref(mults);
var inst_17041 = cljs.core.vals(inst_17040);
var inst_17042 = cljs.core.seq(inst_17041);
var inst_17043 = inst_17042;
var inst_17044 = null;
var inst_17045 = (0);
var inst_17046 = (0);
var state_17116__$1 = (function (){var statearr_17188 = state_17116;
(statearr_17188[(13)] = inst_17046);

(statearr_17188[(14)] = inst_17045);

(statearr_17188[(15)] = inst_17043);

(statearr_17188[(16)] = inst_17044);

return statearr_17188;
})();
var statearr_17190_18895 = state_17116__$1;
(statearr_17190_18895[(2)] = null);

(statearr_17190_18895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (14))){
var state_17116__$1 = state_17116;
var statearr_17194_18896 = state_17116__$1;
(statearr_17194_18896[(2)] = null);

(statearr_17194_18896[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (16))){
var inst_17059 = (state_17116[(10)]);
var inst_17065 = cljs.core.chunk_first(inst_17059);
var inst_17066 = cljs.core.chunk_rest(inst_17059);
var inst_17067 = cljs.core.count(inst_17065);
var inst_17043 = inst_17066;
var inst_17044 = inst_17065;
var inst_17045 = inst_17067;
var inst_17046 = (0);
var state_17116__$1 = (function (){var statearr_17199 = state_17116;
(statearr_17199[(13)] = inst_17046);

(statearr_17199[(14)] = inst_17045);

(statearr_17199[(15)] = inst_17043);

(statearr_17199[(16)] = inst_17044);

return statearr_17199;
})();
var statearr_17200_18898 = state_17116__$1;
(statearr_17200_18898[(2)] = null);

(statearr_17200_18898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (10))){
var inst_17046 = (state_17116[(13)]);
var inst_17045 = (state_17116[(14)]);
var inst_17043 = (state_17116[(15)]);
var inst_17044 = (state_17116[(16)]);
var inst_17052 = cljs.core._nth(inst_17044,inst_17046);
var inst_17054 = cljs.core.async.muxch_STAR_(inst_17052);
var inst_17055 = cljs.core.async.close_BANG_(inst_17054);
var inst_17056 = (inst_17046 + (1));
var tmp17191 = inst_17045;
var tmp17192 = inst_17043;
var tmp17193 = inst_17044;
var inst_17043__$1 = tmp17192;
var inst_17044__$1 = tmp17193;
var inst_17045__$1 = tmp17191;
var inst_17046__$1 = inst_17056;
var state_17116__$1 = (function (){var statearr_17204 = state_17116;
(statearr_17204[(13)] = inst_17046__$1);

(statearr_17204[(14)] = inst_17045__$1);

(statearr_17204[(15)] = inst_17043__$1);

(statearr_17204[(17)] = inst_17055);

(statearr_17204[(16)] = inst_17044__$1);

return statearr_17204;
})();
var statearr_17206_18899 = state_17116__$1;
(statearr_17206_18899[(2)] = null);

(statearr_17206_18899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (18))){
var inst_17080 = (state_17116[(2)]);
var state_17116__$1 = state_17116;
var statearr_17207_18900 = state_17116__$1;
(statearr_17207_18900[(2)] = inst_17080);

(statearr_17207_18900[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17118 === (8))){
var inst_17046 = (state_17116[(13)]);
var inst_17045 = (state_17116[(14)]);
var inst_17049 = (inst_17046 < inst_17045);
var inst_17050 = inst_17049;
var state_17116__$1 = state_17116;
if(cljs.core.truth_(inst_17050)){
var statearr_17208_18901 = state_17116__$1;
(statearr_17208_18901[(1)] = (10));

} else {
var statearr_17209_18902 = state_17116__$1;
(statearr_17209_18902[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14565__auto__ = null;
var cljs$core$async$state_machine__14565__auto____0 = (function (){
var statearr_17210 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17210[(0)] = cljs$core$async$state_machine__14565__auto__);

(statearr_17210[(1)] = (1));

return statearr_17210;
});
var cljs$core$async$state_machine__14565__auto____1 = (function (state_17116){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_17116);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e17211){var ex__14568__auto__ = e17211;
var statearr_17212_18909 = state_17116;
(statearr_17212_18909[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_17116[(4)]))){
var statearr_17213_18910 = state_17116;
(statearr_17213_18910[(1)] = cljs.core.first((state_17116[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18911 = state_17116;
state_17116 = G__18911;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$state_machine__14565__auto__ = function(state_17116){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14565__auto____1.call(this,state_17116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14565__auto____0;
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14565__auto____1;
return cljs$core$async$state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_17214 = f__14926__auto__();
(statearr_17214[(6)] = c__14925__auto___18862);

return statearr_17214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17217 = arguments.length;
switch (G__17217) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17223 = arguments.length;
switch (G__17223) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17233 = arguments.length;
switch (G__17233) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14925__auto___18928 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_17351){
var state_val_17352 = (state_17351[(1)]);
if((state_val_17352 === (7))){
var state_17351__$1 = state_17351;
var statearr_17354_18929 = state_17351__$1;
(statearr_17354_18929[(2)] = null);

(statearr_17354_18929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (1))){
var state_17351__$1 = state_17351;
var statearr_17355_18930 = state_17351__$1;
(statearr_17355_18930[(2)] = null);

(statearr_17355_18930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (4))){
var inst_17245 = (state_17351[(7)]);
var inst_17244 = (state_17351[(8)]);
var inst_17250 = (inst_17245 < inst_17244);
var state_17351__$1 = state_17351;
if(cljs.core.truth_(inst_17250)){
var statearr_17356_18931 = state_17351__$1;
(statearr_17356_18931[(1)] = (6));

} else {
var statearr_17357_18932 = state_17351__$1;
(statearr_17357_18932[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (15))){
var inst_17337 = (state_17351[(9)]);
var inst_17342 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17337);
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17351__$1,(17),out,inst_17342);
} else {
if((state_val_17352 === (13))){
var inst_17337 = (state_17351[(9)]);
var inst_17337__$1 = (state_17351[(2)]);
var inst_17338 = cljs.core.some(cljs.core.nil_QMARK_,inst_17337__$1);
var state_17351__$1 = (function (){var statearr_17358 = state_17351;
(statearr_17358[(9)] = inst_17337__$1);

return statearr_17358;
})();
if(cljs.core.truth_(inst_17338)){
var statearr_17359_18933 = state_17351__$1;
(statearr_17359_18933[(1)] = (14));

} else {
var statearr_17360_18934 = state_17351__$1;
(statearr_17360_18934[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (6))){
var state_17351__$1 = state_17351;
var statearr_17362_18935 = state_17351__$1;
(statearr_17362_18935[(2)] = null);

(statearr_17362_18935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (17))){
var inst_17344 = (state_17351[(2)]);
var state_17351__$1 = (function (){var statearr_17367 = state_17351;
(statearr_17367[(10)] = inst_17344);

return statearr_17367;
})();
var statearr_17368_18936 = state_17351__$1;
(statearr_17368_18936[(2)] = null);

(statearr_17368_18936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (3))){
var inst_17349 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17351__$1,inst_17349);
} else {
if((state_val_17352 === (12))){
var _ = (function (){var statearr_17371 = state_17351;
(statearr_17371[(4)] = cljs.core.rest((state_17351[(4)])));

return statearr_17371;
})();
var state_17351__$1 = state_17351;
var ex17365 = (state_17351__$1[(2)]);
var statearr_17375_18937 = state_17351__$1;
(statearr_17375_18937[(5)] = ex17365);


if((ex17365 instanceof Object)){
var statearr_17376_18938 = state_17351__$1;
(statearr_17376_18938[(1)] = (11));

(statearr_17376_18938[(5)] = null);

} else {
throw ex17365;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (2))){
var inst_17243 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17244 = cnt;
var inst_17245 = (0);
var state_17351__$1 = (function (){var statearr_17377 = state_17351;
(statearr_17377[(7)] = inst_17245);

(statearr_17377[(11)] = inst_17243);

(statearr_17377[(8)] = inst_17244);

return statearr_17377;
})();
var statearr_17378_18940 = state_17351__$1;
(statearr_17378_18940[(2)] = null);

(statearr_17378_18940[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (11))){
var inst_17315 = (state_17351[(2)]);
var inst_17316 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17351__$1 = (function (){var statearr_17386 = state_17351;
(statearr_17386[(12)] = inst_17315);

return statearr_17386;
})();
var statearr_17387_18941 = state_17351__$1;
(statearr_17387_18941[(2)] = inst_17316);

(statearr_17387_18941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (9))){
var inst_17245 = (state_17351[(7)]);
var _ = (function (){var statearr_17400 = state_17351;
(statearr_17400[(4)] = cljs.core.cons((12),(state_17351[(4)])));

return statearr_17400;
})();
var inst_17323 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17245) : chs__$1.call(null,inst_17245));
var inst_17324 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17245) : done.call(null,inst_17245));
var inst_17325 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17323,inst_17324);
var ___$1 = (function (){var statearr_17408 = state_17351;
(statearr_17408[(4)] = cljs.core.rest((state_17351[(4)])));

return statearr_17408;
})();
var state_17351__$1 = state_17351;
var statearr_17412_18942 = state_17351__$1;
(statearr_17412_18942[(2)] = inst_17325);

(statearr_17412_18942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (5))){
var inst_17335 = (state_17351[(2)]);
var state_17351__$1 = (function (){var statearr_17416 = state_17351;
(statearr_17416[(13)] = inst_17335);

return statearr_17416;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17351__$1,(13),dchan);
} else {
if((state_val_17352 === (14))){
var inst_17340 = cljs.core.async.close_BANG_(out);
var state_17351__$1 = state_17351;
var statearr_17420_18943 = state_17351__$1;
(statearr_17420_18943[(2)] = inst_17340);

(statearr_17420_18943[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (16))){
var inst_17347 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17422_18953 = state_17351__$1;
(statearr_17422_18953[(2)] = inst_17347);

(statearr_17422_18953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (10))){
var inst_17245 = (state_17351[(7)]);
var inst_17328 = (state_17351[(2)]);
var inst_17329 = (inst_17245 + (1));
var inst_17245__$1 = inst_17329;
var state_17351__$1 = (function (){var statearr_17426 = state_17351;
(statearr_17426[(14)] = inst_17328);

(statearr_17426[(7)] = inst_17245__$1);

return statearr_17426;
})();
var statearr_17427_18957 = state_17351__$1;
(statearr_17427_18957[(2)] = null);

(statearr_17427_18957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17352 === (8))){
var inst_17333 = (state_17351[(2)]);
var state_17351__$1 = state_17351;
var statearr_17428_18958 = state_17351__$1;
(statearr_17428_18958[(2)] = inst_17333);

(statearr_17428_18958[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14565__auto__ = null;
var cljs$core$async$state_machine__14565__auto____0 = (function (){
var statearr_17429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17429[(0)] = cljs$core$async$state_machine__14565__auto__);

(statearr_17429[(1)] = (1));

return statearr_17429;
});
var cljs$core$async$state_machine__14565__auto____1 = (function (state_17351){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_17351);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e17430){var ex__14568__auto__ = e17430;
var statearr_17431_18963 = state_17351;
(statearr_17431_18963[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_17351[(4)]))){
var statearr_17432_18964 = state_17351;
(statearr_17432_18964[(1)] = cljs.core.first((state_17351[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18965 = state_17351;
state_17351 = G__18965;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$state_machine__14565__auto__ = function(state_17351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14565__auto____1.call(this,state_17351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14565__auto____0;
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14565__auto____1;
return cljs$core$async$state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_17435 = f__14926__auto__();
(statearr_17435[(6)] = c__14925__auto___18928);

return statearr_17435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17438 = arguments.length;
switch (G__17438) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14925__auto___18967 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_17483){
var state_val_17485 = (state_17483[(1)]);
if((state_val_17485 === (7))){
var inst_17462 = (state_17483[(7)]);
var inst_17458 = (state_17483[(8)]);
var inst_17458__$1 = (state_17483[(2)]);
var inst_17462__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17458__$1,(0),null);
var inst_17463 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17458__$1,(1),null);
var inst_17465 = (inst_17462__$1 == null);
var state_17483__$1 = (function (){var statearr_17492 = state_17483;
(statearr_17492[(9)] = inst_17463);

(statearr_17492[(7)] = inst_17462__$1);

(statearr_17492[(8)] = inst_17458__$1);

return statearr_17492;
})();
if(cljs.core.truth_(inst_17465)){
var statearr_17493_18968 = state_17483__$1;
(statearr_17493_18968[(1)] = (8));

} else {
var statearr_17494_18969 = state_17483__$1;
(statearr_17494_18969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (1))){
var inst_17448 = cljs.core.vec(chs);
var inst_17449 = inst_17448;
var state_17483__$1 = (function (){var statearr_17495 = state_17483;
(statearr_17495[(10)] = inst_17449);

return statearr_17495;
})();
var statearr_17496_18971 = state_17483__$1;
(statearr_17496_18971[(2)] = null);

(statearr_17496_18971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (4))){
var inst_17449 = (state_17483[(10)]);
var state_17483__$1 = state_17483;
return cljs.core.async.ioc_alts_BANG_(state_17483__$1,(7),inst_17449);
} else {
if((state_val_17485 === (6))){
var inst_17479 = (state_17483[(2)]);
var state_17483__$1 = state_17483;
var statearr_17499_18972 = state_17483__$1;
(statearr_17499_18972[(2)] = inst_17479);

(statearr_17499_18972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (3))){
var inst_17481 = (state_17483[(2)]);
var state_17483__$1 = state_17483;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17483__$1,inst_17481);
} else {
if((state_val_17485 === (2))){
var inst_17449 = (state_17483[(10)]);
var inst_17451 = cljs.core.count(inst_17449);
var inst_17452 = (inst_17451 > (0));
var state_17483__$1 = state_17483;
if(cljs.core.truth_(inst_17452)){
var statearr_17503_18973 = state_17483__$1;
(statearr_17503_18973[(1)] = (4));

} else {
var statearr_17504_18974 = state_17483__$1;
(statearr_17504_18974[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (11))){
var inst_17449 = (state_17483[(10)]);
var inst_17472 = (state_17483[(2)]);
var tmp17500 = inst_17449;
var inst_17449__$1 = tmp17500;
var state_17483__$1 = (function (){var statearr_17505 = state_17483;
(statearr_17505[(11)] = inst_17472);

(statearr_17505[(10)] = inst_17449__$1);

return statearr_17505;
})();
var statearr_17506_18975 = state_17483__$1;
(statearr_17506_18975[(2)] = null);

(statearr_17506_18975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (9))){
var inst_17462 = (state_17483[(7)]);
var state_17483__$1 = state_17483;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17483__$1,(11),out,inst_17462);
} else {
if((state_val_17485 === (5))){
var inst_17477 = cljs.core.async.close_BANG_(out);
var state_17483__$1 = state_17483;
var statearr_17512_18976 = state_17483__$1;
(statearr_17512_18976[(2)] = inst_17477);

(statearr_17512_18976[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (10))){
var inst_17475 = (state_17483[(2)]);
var state_17483__$1 = state_17483;
var statearr_17513_18977 = state_17483__$1;
(statearr_17513_18977[(2)] = inst_17475);

(statearr_17513_18977[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17485 === (8))){
var inst_17463 = (state_17483[(9)]);
var inst_17462 = (state_17483[(7)]);
var inst_17458 = (state_17483[(8)]);
var inst_17449 = (state_17483[(10)]);
var inst_17467 = (function (){var cs = inst_17449;
var vec__17454 = inst_17458;
var v = inst_17462;
var c = inst_17463;
return (function (p1__17436_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17436_SHARP_);
});
})();
var inst_17468 = cljs.core.filterv(inst_17467,inst_17449);
var inst_17449__$1 = inst_17468;
var state_17483__$1 = (function (){var statearr_17516 = state_17483;
(statearr_17516[(10)] = inst_17449__$1);

return statearr_17516;
})();
var statearr_17517_18978 = state_17483__$1;
(statearr_17517_18978[(2)] = null);

(statearr_17517_18978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14565__auto__ = null;
var cljs$core$async$state_machine__14565__auto____0 = (function (){
var statearr_17521 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17521[(0)] = cljs$core$async$state_machine__14565__auto__);

(statearr_17521[(1)] = (1));

return statearr_17521;
});
var cljs$core$async$state_machine__14565__auto____1 = (function (state_17483){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_17483);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e17522){var ex__14568__auto__ = e17522;
var statearr_17523_18979 = state_17483;
(statearr_17523_18979[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_17483[(4)]))){
var statearr_17524_18980 = state_17483;
(statearr_17524_18980[(1)] = cljs.core.first((state_17483[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18981 = state_17483;
state_17483 = G__18981;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$state_machine__14565__auto__ = function(state_17483){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14565__auto____1.call(this,state_17483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14565__auto____0;
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14565__auto____1;
return cljs$core$async$state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_17525 = f__14926__auto__();
(statearr_17525[(6)] = c__14925__auto___18967);

return statearr_17525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17538 = arguments.length;
switch (G__17538) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14925__auto___18983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_17596){
var state_val_17597 = (state_17596[(1)]);
if((state_val_17597 === (7))){
var inst_17561 = (state_17596[(7)]);
var inst_17561__$1 = (state_17596[(2)]);
var inst_17562 = (inst_17561__$1 == null);
var inst_17566 = cljs.core.not(inst_17562);
var state_17596__$1 = (function (){var statearr_17601 = state_17596;
(statearr_17601[(7)] = inst_17561__$1);

return statearr_17601;
})();
if(inst_17566){
var statearr_17602_18984 = state_17596__$1;
(statearr_17602_18984[(1)] = (8));

} else {
var statearr_17603_18985 = state_17596__$1;
(statearr_17603_18985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (1))){
var inst_17556 = (0);
var state_17596__$1 = (function (){var statearr_17606 = state_17596;
(statearr_17606[(8)] = inst_17556);

return statearr_17606;
})();
var statearr_17607_18986 = state_17596__$1;
(statearr_17607_18986[(2)] = null);

(statearr_17607_18986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (4))){
var state_17596__$1 = state_17596;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17596__$1,(7),ch);
} else {
if((state_val_17597 === (6))){
var inst_17582 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
var statearr_17613_18987 = state_17596__$1;
(statearr_17613_18987[(2)] = inst_17582);

(statearr_17613_18987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (3))){
var inst_17584 = (state_17596[(2)]);
var inst_17589 = cljs.core.async.close_BANG_(out);
var state_17596__$1 = (function (){var statearr_17614 = state_17596;
(statearr_17614[(9)] = inst_17584);

return statearr_17614;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17596__$1,inst_17589);
} else {
if((state_val_17597 === (2))){
var inst_17556 = (state_17596[(8)]);
var inst_17558 = (inst_17556 < n);
var state_17596__$1 = state_17596;
if(cljs.core.truth_(inst_17558)){
var statearr_17615_18988 = state_17596__$1;
(statearr_17615_18988[(1)] = (4));

} else {
var statearr_17616_18989 = state_17596__$1;
(statearr_17616_18989[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (11))){
var inst_17556 = (state_17596[(8)]);
var inst_17570 = (state_17596[(2)]);
var inst_17575 = (inst_17556 + (1));
var inst_17556__$1 = inst_17575;
var state_17596__$1 = (function (){var statearr_17619 = state_17596;
(statearr_17619[(10)] = inst_17570);

(statearr_17619[(8)] = inst_17556__$1);

return statearr_17619;
})();
var statearr_17623_18990 = state_17596__$1;
(statearr_17623_18990[(2)] = null);

(statearr_17623_18990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (9))){
var state_17596__$1 = state_17596;
var statearr_17624_18991 = state_17596__$1;
(statearr_17624_18991[(2)] = null);

(statearr_17624_18991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (5))){
var state_17596__$1 = state_17596;
var statearr_17625_18992 = state_17596__$1;
(statearr_17625_18992[(2)] = null);

(statearr_17625_18992[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (10))){
var inst_17579 = (state_17596[(2)]);
var state_17596__$1 = state_17596;
var statearr_17626_18993 = state_17596__$1;
(statearr_17626_18993[(2)] = inst_17579);

(statearr_17626_18993[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17597 === (8))){
var inst_17561 = (state_17596[(7)]);
var state_17596__$1 = state_17596;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17596__$1,(11),out,inst_17561);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14565__auto__ = null;
var cljs$core$async$state_machine__14565__auto____0 = (function (){
var statearr_17627 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17627[(0)] = cljs$core$async$state_machine__14565__auto__);

(statearr_17627[(1)] = (1));

return statearr_17627;
});
var cljs$core$async$state_machine__14565__auto____1 = (function (state_17596){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_17596);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e17632){var ex__14568__auto__ = e17632;
var statearr_17633_18994 = state_17596;
(statearr_17633_18994[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_17596[(4)]))){
var statearr_17634_18995 = state_17596;
(statearr_17634_18995[(1)] = cljs.core.first((state_17596[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18996 = state_17596;
state_17596 = G__18996;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$state_machine__14565__auto__ = function(state_17596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14565__auto____1.call(this,state_17596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14565__auto____0;
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14565__auto____1;
return cljs$core$async$state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_17637 = f__14926__auto__();
(statearr_17637[(6)] = c__14925__auto___18983);

return statearr_17637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17647 = (function (f,ch,meta17641,_,fn1,meta17648){
this.f = f;
this.ch = ch;
this.meta17641 = meta17641;
this._ = _;
this.fn1 = fn1;
this.meta17648 = meta17648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17649,meta17648__$1){
var self__ = this;
var _17649__$1 = this;
return (new cljs.core.async.t_cljs$core$async17647(self__.f,self__.ch,self__.meta17641,self__._,self__.fn1,meta17648__$1));
}));

(cljs.core.async.t_cljs$core$async17647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17649){
var self__ = this;
var _17649__$1 = this;
return self__.meta17648;
}));

(cljs.core.async.t_cljs$core$async17647.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17647.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17639_SHARP_){
var G__17651 = (((p1__17639_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17639_SHARP_) : self__.f.call(null,p1__17639_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17651) : f1.call(null,G__17651));
});
}));

(cljs.core.async.t_cljs$core$async17647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17641","meta17641",1704341620,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17640","cljs.core.async/t_cljs$core$async17640",595823011,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17648","meta17648",-1105805055,null)], null);
}));

(cljs.core.async.t_cljs$core$async17647.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17647");

(cljs.core.async.t_cljs$core$async17647.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17647");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17647.
 */
cljs.core.async.__GT_t_cljs$core$async17647 = (function cljs$core$async$__GT_t_cljs$core$async17647(f,ch,meta17641,_,fn1,meta17648){
return (new cljs.core.async.t_cljs$core$async17647(f,ch,meta17641,_,fn1,meta17648));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17640 = (function (f,ch,meta17641){
this.f = f;
this.ch = ch;
this.meta17641 = meta17641;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17642,meta17641__$1){
var self__ = this;
var _17642__$1 = this;
return (new cljs.core.async.t_cljs$core$async17640(self__.f,self__.ch,meta17641__$1));
}));

(cljs.core.async.t_cljs$core$async17640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17642){
var self__ = this;
var _17642__$1 = this;
return self__.meta17641;
}));

(cljs.core.async.t_cljs$core$async17640.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17640.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17640.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17640.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17640.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17647(self__.f,self__.ch,self__.meta17641,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17655 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17655) : self__.f.call(null,G__17655));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17640.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17640.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17640.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17641","meta17641",1704341620,null)], null);
}));

(cljs.core.async.t_cljs$core$async17640.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17640.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17640");

(cljs.core.async.t_cljs$core$async17640.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17640");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17640.
 */
cljs.core.async.__GT_t_cljs$core$async17640 = (function cljs$core$async$__GT_t_cljs$core$async17640(f,ch,meta17641){
return (new cljs.core.async.t_cljs$core$async17640(f,ch,meta17641));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17640(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17656 = (function (f,ch,meta17657){
this.f = f;
this.ch = ch;
this.meta17657 = meta17657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17658,meta17657__$1){
var self__ = this;
var _17658__$1 = this;
return (new cljs.core.async.t_cljs$core$async17656(self__.f,self__.ch,meta17657__$1));
}));

(cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17658){
var self__ = this;
var _17658__$1 = this;
return self__.meta17657;
}));

(cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17657","meta17657",1205473490,null)], null);
}));

(cljs.core.async.t_cljs$core$async17656.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17656");

(cljs.core.async.t_cljs$core$async17656.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17656");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17656.
 */
cljs.core.async.__GT_t_cljs$core$async17656 = (function cljs$core$async$__GT_t_cljs$core$async17656(f,ch,meta17657){
return (new cljs.core.async.t_cljs$core$async17656(f,ch,meta17657));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17656(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17660 = (function (p,ch,meta17661){
this.p = p;
this.ch = ch;
this.meta17661 = meta17661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17662,meta17661__$1){
var self__ = this;
var _17662__$1 = this;
return (new cljs.core.async.t_cljs$core$async17660(self__.p,self__.ch,meta17661__$1));
}));

(cljs.core.async.t_cljs$core$async17660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17662){
var self__ = this;
var _17662__$1 = this;
return self__.meta17661;
}));

(cljs.core.async.t_cljs$core$async17660.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17660.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17660.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17660.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17660.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17660.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17660.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17660.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17661","meta17661",1725757830,null)], null);
}));

(cljs.core.async.t_cljs$core$async17660.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17660");

(cljs.core.async.t_cljs$core$async17660.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17660");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17660.
 */
cljs.core.async.__GT_t_cljs$core$async17660 = (function cljs$core$async$__GT_t_cljs$core$async17660(p,ch,meta17661){
return (new cljs.core.async.t_cljs$core$async17660(p,ch,meta17661));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17660(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17671 = arguments.length;
switch (G__17671) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14925__auto___19005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_17706){
var state_val_17707 = (state_17706[(1)]);
if((state_val_17707 === (7))){
var inst_17702 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17714_19006 = state_17706__$1;
(statearr_17714_19006[(2)] = inst_17702);

(statearr_17714_19006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (1))){
var state_17706__$1 = state_17706;
var statearr_17729_19007 = state_17706__$1;
(statearr_17729_19007[(2)] = null);

(statearr_17729_19007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (4))){
var inst_17688 = (state_17706[(7)]);
var inst_17688__$1 = (state_17706[(2)]);
var inst_17689 = (inst_17688__$1 == null);
var state_17706__$1 = (function (){var statearr_17736 = state_17706;
(statearr_17736[(7)] = inst_17688__$1);

return statearr_17736;
})();
if(cljs.core.truth_(inst_17689)){
var statearr_17737_19012 = state_17706__$1;
(statearr_17737_19012[(1)] = (5));

} else {
var statearr_17738_19013 = state_17706__$1;
(statearr_17738_19013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (6))){
var inst_17688 = (state_17706[(7)]);
var inst_17693 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17688) : p.call(null,inst_17688));
var state_17706__$1 = state_17706;
if(cljs.core.truth_(inst_17693)){
var statearr_17742_19014 = state_17706__$1;
(statearr_17742_19014[(1)] = (8));

} else {
var statearr_17746_19015 = state_17706__$1;
(statearr_17746_19015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (3))){
var inst_17704 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17706__$1,inst_17704);
} else {
if((state_val_17707 === (2))){
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17706__$1,(4),ch);
} else {
if((state_val_17707 === (11))){
var inst_17696 = (state_17706[(2)]);
var state_17706__$1 = state_17706;
var statearr_17747_19016 = state_17706__$1;
(statearr_17747_19016[(2)] = inst_17696);

(statearr_17747_19016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (9))){
var state_17706__$1 = state_17706;
var statearr_17751_19017 = state_17706__$1;
(statearr_17751_19017[(2)] = null);

(statearr_17751_19017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (5))){
var inst_17691 = cljs.core.async.close_BANG_(out);
var state_17706__$1 = state_17706;
var statearr_17752_19018 = state_17706__$1;
(statearr_17752_19018[(2)] = inst_17691);

(statearr_17752_19018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (10))){
var inst_17699 = (state_17706[(2)]);
var state_17706__$1 = (function (){var statearr_17753 = state_17706;
(statearr_17753[(8)] = inst_17699);

return statearr_17753;
})();
var statearr_17754_19019 = state_17706__$1;
(statearr_17754_19019[(2)] = null);

(statearr_17754_19019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17707 === (8))){
var inst_17688 = (state_17706[(7)]);
var state_17706__$1 = state_17706;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17706__$1,(11),out,inst_17688);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14565__auto__ = null;
var cljs$core$async$state_machine__14565__auto____0 = (function (){
var statearr_17755 = [null,null,null,null,null,null,null,null,null];
(statearr_17755[(0)] = cljs$core$async$state_machine__14565__auto__);

(statearr_17755[(1)] = (1));

return statearr_17755;
});
var cljs$core$async$state_machine__14565__auto____1 = (function (state_17706){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_17706);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e17756){var ex__14568__auto__ = e17756;
var statearr_17757_19020 = state_17706;
(statearr_17757_19020[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_17706[(4)]))){
var statearr_17758_19021 = state_17706;
(statearr_17758_19021[(1)] = cljs.core.first((state_17706[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19022 = state_17706;
state_17706 = G__19022;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$state_machine__14565__auto__ = function(state_17706){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14565__auto____1.call(this,state_17706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14565__auto____0;
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14565__auto____1;
return cljs$core$async$state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_17759 = f__14926__auto__();
(statearr_17759[(6)] = c__14925__auto___19005);

return statearr_17759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17761 = arguments.length;
switch (G__17761) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14925__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_17826){
var state_val_17827 = (state_17826[(1)]);
if((state_val_17827 === (7))){
var inst_17822 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
var statearr_17828_19027 = state_17826__$1;
(statearr_17828_19027[(2)] = inst_17822);

(statearr_17828_19027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (20))){
var inst_17789 = (state_17826[(7)]);
var inst_17803 = (state_17826[(2)]);
var inst_17804 = cljs.core.next(inst_17789);
var inst_17775 = inst_17804;
var inst_17776 = null;
var inst_17777 = (0);
var inst_17778 = (0);
var state_17826__$1 = (function (){var statearr_17829 = state_17826;
(statearr_17829[(8)] = inst_17803);

(statearr_17829[(9)] = inst_17777);

(statearr_17829[(10)] = inst_17775);

(statearr_17829[(11)] = inst_17778);

(statearr_17829[(12)] = inst_17776);

return statearr_17829;
})();
var statearr_17830_19028 = state_17826__$1;
(statearr_17830_19028[(2)] = null);

(statearr_17830_19028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (1))){
var state_17826__$1 = state_17826;
var statearr_17831_19029 = state_17826__$1;
(statearr_17831_19029[(2)] = null);

(statearr_17831_19029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (4))){
var inst_17764 = (state_17826[(13)]);
var inst_17764__$1 = (state_17826[(2)]);
var inst_17765 = (inst_17764__$1 == null);
var state_17826__$1 = (function (){var statearr_17832 = state_17826;
(statearr_17832[(13)] = inst_17764__$1);

return statearr_17832;
})();
if(cljs.core.truth_(inst_17765)){
var statearr_17833_19030 = state_17826__$1;
(statearr_17833_19030[(1)] = (5));

} else {
var statearr_17834_19031 = state_17826__$1;
(statearr_17834_19031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (15))){
var state_17826__$1 = state_17826;
var statearr_17838_19033 = state_17826__$1;
(statearr_17838_19033[(2)] = null);

(statearr_17838_19033[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (21))){
var state_17826__$1 = state_17826;
var statearr_17839_19037 = state_17826__$1;
(statearr_17839_19037[(2)] = null);

(statearr_17839_19037[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (13))){
var inst_17777 = (state_17826[(9)]);
var inst_17775 = (state_17826[(10)]);
var inst_17778 = (state_17826[(11)]);
var inst_17776 = (state_17826[(12)]);
var inst_17785 = (state_17826[(2)]);
var inst_17786 = (inst_17778 + (1));
var tmp17835 = inst_17777;
var tmp17836 = inst_17775;
var tmp17837 = inst_17776;
var inst_17775__$1 = tmp17836;
var inst_17776__$1 = tmp17837;
var inst_17777__$1 = tmp17835;
var inst_17778__$1 = inst_17786;
var state_17826__$1 = (function (){var statearr_17843 = state_17826;
(statearr_17843[(9)] = inst_17777__$1);

(statearr_17843[(14)] = inst_17785);

(statearr_17843[(10)] = inst_17775__$1);

(statearr_17843[(11)] = inst_17778__$1);

(statearr_17843[(12)] = inst_17776__$1);

return statearr_17843;
})();
var statearr_17844_19045 = state_17826__$1;
(statearr_17844_19045[(2)] = null);

(statearr_17844_19045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (22))){
var state_17826__$1 = state_17826;
var statearr_17845_19047 = state_17826__$1;
(statearr_17845_19047[(2)] = null);

(statearr_17845_19047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (6))){
var inst_17764 = (state_17826[(13)]);
var inst_17773 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17764) : f.call(null,inst_17764));
var inst_17774 = cljs.core.seq(inst_17773);
var inst_17775 = inst_17774;
var inst_17776 = null;
var inst_17777 = (0);
var inst_17778 = (0);
var state_17826__$1 = (function (){var statearr_17846 = state_17826;
(statearr_17846[(9)] = inst_17777);

(statearr_17846[(10)] = inst_17775);

(statearr_17846[(11)] = inst_17778);

(statearr_17846[(12)] = inst_17776);

return statearr_17846;
})();
var statearr_17847_19048 = state_17826__$1;
(statearr_17847_19048[(2)] = null);

(statearr_17847_19048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (17))){
var inst_17789 = (state_17826[(7)]);
var inst_17796 = cljs.core.chunk_first(inst_17789);
var inst_17797 = cljs.core.chunk_rest(inst_17789);
var inst_17798 = cljs.core.count(inst_17796);
var inst_17775 = inst_17797;
var inst_17776 = inst_17796;
var inst_17777 = inst_17798;
var inst_17778 = (0);
var state_17826__$1 = (function (){var statearr_17848 = state_17826;
(statearr_17848[(9)] = inst_17777);

(statearr_17848[(10)] = inst_17775);

(statearr_17848[(11)] = inst_17778);

(statearr_17848[(12)] = inst_17776);

return statearr_17848;
})();
var statearr_17849_19049 = state_17826__$1;
(statearr_17849_19049[(2)] = null);

(statearr_17849_19049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (3))){
var inst_17824 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17826__$1,inst_17824);
} else {
if((state_val_17827 === (12))){
var inst_17812 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
var statearr_17850_19056 = state_17826__$1;
(statearr_17850_19056[(2)] = inst_17812);

(statearr_17850_19056[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (2))){
var state_17826__$1 = state_17826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17826__$1,(4),in$);
} else {
if((state_val_17827 === (23))){
var inst_17820 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
var statearr_17851_19057 = state_17826__$1;
(statearr_17851_19057[(2)] = inst_17820);

(statearr_17851_19057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (19))){
var inst_17807 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
var statearr_17852_19059 = state_17826__$1;
(statearr_17852_19059[(2)] = inst_17807);

(statearr_17852_19059[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (11))){
var inst_17775 = (state_17826[(10)]);
var inst_17789 = (state_17826[(7)]);
var inst_17789__$1 = cljs.core.seq(inst_17775);
var state_17826__$1 = (function (){var statearr_17853 = state_17826;
(statearr_17853[(7)] = inst_17789__$1);

return statearr_17853;
})();
if(inst_17789__$1){
var statearr_17857_19060 = state_17826__$1;
(statearr_17857_19060[(1)] = (14));

} else {
var statearr_17858_19061 = state_17826__$1;
(statearr_17858_19061[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (9))){
var inst_17814 = (state_17826[(2)]);
var inst_17815 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17826__$1 = (function (){var statearr_17862 = state_17826;
(statearr_17862[(15)] = inst_17814);

return statearr_17862;
})();
if(cljs.core.truth_(inst_17815)){
var statearr_17864_19062 = state_17826__$1;
(statearr_17864_19062[(1)] = (21));

} else {
var statearr_17866_19063 = state_17826__$1;
(statearr_17866_19063[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (5))){
var inst_17767 = cljs.core.async.close_BANG_(out);
var state_17826__$1 = state_17826;
var statearr_17870_19064 = state_17826__$1;
(statearr_17870_19064[(2)] = inst_17767);

(statearr_17870_19064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (14))){
var inst_17789 = (state_17826[(7)]);
var inst_17791 = cljs.core.chunked_seq_QMARK_(inst_17789);
var state_17826__$1 = state_17826;
if(inst_17791){
var statearr_17871_19071 = state_17826__$1;
(statearr_17871_19071[(1)] = (17));

} else {
var statearr_17872_19072 = state_17826__$1;
(statearr_17872_19072[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (16))){
var inst_17810 = (state_17826[(2)]);
var state_17826__$1 = state_17826;
var statearr_17876_19074 = state_17826__$1;
(statearr_17876_19074[(2)] = inst_17810);

(statearr_17876_19074[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17827 === (10))){
var inst_17778 = (state_17826[(11)]);
var inst_17776 = (state_17826[(12)]);
var inst_17783 = cljs.core._nth(inst_17776,inst_17778);
var state_17826__$1 = state_17826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17826__$1,(13),out,inst_17783);
} else {
if((state_val_17827 === (18))){
var inst_17789 = (state_17826[(7)]);
var inst_17801 = cljs.core.first(inst_17789);
var state_17826__$1 = state_17826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17826__$1,(20),out,inst_17801);
} else {
if((state_val_17827 === (8))){
var inst_17777 = (state_17826[(9)]);
var inst_17778 = (state_17826[(11)]);
var inst_17780 = (inst_17778 < inst_17777);
var inst_17781 = inst_17780;
var state_17826__$1 = state_17826;
if(cljs.core.truth_(inst_17781)){
var statearr_17887_19079 = state_17826__$1;
(statearr_17887_19079[(1)] = (10));

} else {
var statearr_17888_19080 = state_17826__$1;
(statearr_17888_19080[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14565__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14565__auto____0 = (function (){
var statearr_17889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17889[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14565__auto__);

(statearr_17889[(1)] = (1));

return statearr_17889;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14565__auto____1 = (function (state_17826){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_17826);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e17893){var ex__14568__auto__ = e17893;
var statearr_17894_19092 = state_17826;
(statearr_17894_19092[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_17826[(4)]))){
var statearr_17895_19093 = state_17826;
(statearr_17895_19093[(1)] = cljs.core.first((state_17826[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19094 = state_17826;
state_17826 = G__19094;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14565__auto__ = function(state_17826){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14565__auto____1.call(this,state_17826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14565__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14565__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_17896 = f__14926__auto__();
(statearr_17896[(6)] = c__14925__auto__);

return statearr_17896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));

return c__14925__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17898 = arguments.length;
switch (G__17898) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17906 = arguments.length;
switch (G__17906) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17908 = arguments.length;
switch (G__17908) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14925__auto___19107 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_17935){
var state_val_17936 = (state_17935[(1)]);
if((state_val_17936 === (7))){
var inst_17930 = (state_17935[(2)]);
var state_17935__$1 = state_17935;
var statearr_17937_19108 = state_17935__$1;
(statearr_17937_19108[(2)] = inst_17930);

(statearr_17937_19108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17936 === (1))){
var inst_17912 = null;
var state_17935__$1 = (function (){var statearr_17938 = state_17935;
(statearr_17938[(7)] = inst_17912);

return statearr_17938;
})();
var statearr_17939_19110 = state_17935__$1;
(statearr_17939_19110[(2)] = null);

(statearr_17939_19110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17936 === (4))){
var inst_17915 = (state_17935[(8)]);
var inst_17915__$1 = (state_17935[(2)]);
var inst_17916 = (inst_17915__$1 == null);
var inst_17917 = cljs.core.not(inst_17916);
var state_17935__$1 = (function (){var statearr_17940 = state_17935;
(statearr_17940[(8)] = inst_17915__$1);

return statearr_17940;
})();
if(inst_17917){
var statearr_17941_19111 = state_17935__$1;
(statearr_17941_19111[(1)] = (5));

} else {
var statearr_17945_19113 = state_17935__$1;
(statearr_17945_19113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17936 === (6))){
var state_17935__$1 = state_17935;
var statearr_17946_19114 = state_17935__$1;
(statearr_17946_19114[(2)] = null);

(statearr_17946_19114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17936 === (3))){
var inst_17932 = (state_17935[(2)]);
var inst_17933 = cljs.core.async.close_BANG_(out);
var state_17935__$1 = (function (){var statearr_17947 = state_17935;
(statearr_17947[(9)] = inst_17932);

return statearr_17947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17935__$1,inst_17933);
} else {
if((state_val_17936 === (2))){
var state_17935__$1 = state_17935;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17935__$1,(4),ch);
} else {
if((state_val_17936 === (11))){
var inst_17915 = (state_17935[(8)]);
var inst_17924 = (state_17935[(2)]);
var inst_17912 = inst_17915;
var state_17935__$1 = (function (){var statearr_17948 = state_17935;
(statearr_17948[(7)] = inst_17912);

(statearr_17948[(10)] = inst_17924);

return statearr_17948;
})();
var statearr_17949_19119 = state_17935__$1;
(statearr_17949_19119[(2)] = null);

(statearr_17949_19119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17936 === (9))){
var inst_17915 = (state_17935[(8)]);
var state_17935__$1 = state_17935;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17935__$1,(11),out,inst_17915);
} else {
if((state_val_17936 === (5))){
var inst_17912 = (state_17935[(7)]);
var inst_17915 = (state_17935[(8)]);
var inst_17919 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17915,inst_17912);
var state_17935__$1 = state_17935;
if(inst_17919){
var statearr_17951_19120 = state_17935__$1;
(statearr_17951_19120[(1)] = (8));

} else {
var statearr_17952_19121 = state_17935__$1;
(statearr_17952_19121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17936 === (10))){
var inst_17927 = (state_17935[(2)]);
var state_17935__$1 = state_17935;
var statearr_17953_19122 = state_17935__$1;
(statearr_17953_19122[(2)] = inst_17927);

(statearr_17953_19122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17936 === (8))){
var inst_17912 = (state_17935[(7)]);
var tmp17950 = inst_17912;
var inst_17912__$1 = tmp17950;
var state_17935__$1 = (function (){var statearr_17954 = state_17935;
(statearr_17954[(7)] = inst_17912__$1);

return statearr_17954;
})();
var statearr_17955_19124 = state_17935__$1;
(statearr_17955_19124[(2)] = null);

(statearr_17955_19124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14565__auto__ = null;
var cljs$core$async$state_machine__14565__auto____0 = (function (){
var statearr_17956 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17956[(0)] = cljs$core$async$state_machine__14565__auto__);

(statearr_17956[(1)] = (1));

return statearr_17956;
});
var cljs$core$async$state_machine__14565__auto____1 = (function (state_17935){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_17935);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e17957){var ex__14568__auto__ = e17957;
var statearr_17958_19125 = state_17935;
(statearr_17958_19125[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_17935[(4)]))){
var statearr_17962_19126 = state_17935;
(statearr_17962_19126[(1)] = cljs.core.first((state_17935[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19127 = state_17935;
state_17935 = G__19127;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$state_machine__14565__auto__ = function(state_17935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14565__auto____1.call(this,state_17935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14565__auto____0;
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14565__auto____1;
return cljs$core$async$state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_17963 = f__14926__auto__();
(statearr_17963[(6)] = c__14925__auto___19107);

return statearr_17963;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17965 = arguments.length;
switch (G__17965) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14925__auto___19129 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_18023){
var state_val_18024 = (state_18023[(1)]);
if((state_val_18024 === (7))){
var inst_18019 = (state_18023[(2)]);
var state_18023__$1 = state_18023;
var statearr_18025_19130 = state_18023__$1;
(statearr_18025_19130[(2)] = inst_18019);

(statearr_18025_19130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (1))){
var inst_17972 = (new Array(n));
var inst_17973 = inst_17972;
var inst_17974 = (0);
var state_18023__$1 = (function (){var statearr_18029 = state_18023;
(statearr_18029[(7)] = inst_17974);

(statearr_18029[(8)] = inst_17973);

return statearr_18029;
})();
var statearr_18030_19131 = state_18023__$1;
(statearr_18030_19131[(2)] = null);

(statearr_18030_19131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (4))){
var inst_17977 = (state_18023[(9)]);
var inst_17977__$1 = (state_18023[(2)]);
var inst_17978 = (inst_17977__$1 == null);
var inst_17979 = cljs.core.not(inst_17978);
var state_18023__$1 = (function (){var statearr_18031 = state_18023;
(statearr_18031[(9)] = inst_17977__$1);

return statearr_18031;
})();
if(inst_17979){
var statearr_18032_19133 = state_18023__$1;
(statearr_18032_19133[(1)] = (5));

} else {
var statearr_18033_19134 = state_18023__$1;
(statearr_18033_19134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (15))){
var inst_18013 = (state_18023[(2)]);
var state_18023__$1 = state_18023;
var statearr_18034_19136 = state_18023__$1;
(statearr_18034_19136[(2)] = inst_18013);

(statearr_18034_19136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (13))){
var state_18023__$1 = state_18023;
var statearr_18051_19137 = state_18023__$1;
(statearr_18051_19137[(2)] = null);

(statearr_18051_19137[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (6))){
var inst_17974 = (state_18023[(7)]);
var inst_18009 = (inst_17974 > (0));
var state_18023__$1 = state_18023;
if(cljs.core.truth_(inst_18009)){
var statearr_18065_19138 = state_18023__$1;
(statearr_18065_19138[(1)] = (12));

} else {
var statearr_18066_19139 = state_18023__$1;
(statearr_18066_19139[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (3))){
var inst_18021 = (state_18023[(2)]);
var state_18023__$1 = state_18023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18023__$1,inst_18021);
} else {
if((state_val_18024 === (12))){
var inst_17973 = (state_18023[(8)]);
var inst_18011 = cljs.core.vec(inst_17973);
var state_18023__$1 = state_18023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18023__$1,(15),out,inst_18011);
} else {
if((state_val_18024 === (2))){
var state_18023__$1 = state_18023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18023__$1,(4),ch);
} else {
if((state_val_18024 === (11))){
var inst_17991 = (state_18023[(2)]);
var inst_17992 = (new Array(n));
var inst_17973 = inst_17992;
var inst_17974 = (0);
var state_18023__$1 = (function (){var statearr_18090 = state_18023;
(statearr_18090[(7)] = inst_17974);

(statearr_18090[(10)] = inst_17991);

(statearr_18090[(8)] = inst_17973);

return statearr_18090;
})();
var statearr_18095_19140 = state_18023__$1;
(statearr_18095_19140[(2)] = null);

(statearr_18095_19140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (9))){
var inst_17973 = (state_18023[(8)]);
var inst_17989 = cljs.core.vec(inst_17973);
var state_18023__$1 = state_18023;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18023__$1,(11),out,inst_17989);
} else {
if((state_val_18024 === (5))){
var inst_17974 = (state_18023[(7)]);
var inst_17984 = (state_18023[(11)]);
var inst_17977 = (state_18023[(9)]);
var inst_17973 = (state_18023[(8)]);
var inst_17982 = (inst_17973[inst_17974] = inst_17977);
var inst_17984__$1 = (inst_17974 + (1));
var inst_17985 = (inst_17984__$1 < n);
var state_18023__$1 = (function (){var statearr_18098 = state_18023;
(statearr_18098[(11)] = inst_17984__$1);

(statearr_18098[(12)] = inst_17982);

return statearr_18098;
})();
if(cljs.core.truth_(inst_17985)){
var statearr_18105_19141 = state_18023__$1;
(statearr_18105_19141[(1)] = (8));

} else {
var statearr_18106_19142 = state_18023__$1;
(statearr_18106_19142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (14))){
var inst_18016 = (state_18023[(2)]);
var inst_18017 = cljs.core.async.close_BANG_(out);
var state_18023__$1 = (function (){var statearr_18108 = state_18023;
(statearr_18108[(13)] = inst_18016);

return statearr_18108;
})();
var statearr_18109_19146 = state_18023__$1;
(statearr_18109_19146[(2)] = inst_18017);

(statearr_18109_19146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (10))){
var inst_17995 = (state_18023[(2)]);
var state_18023__$1 = state_18023;
var statearr_18110_19147 = state_18023__$1;
(statearr_18110_19147[(2)] = inst_17995);

(statearr_18110_19147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18024 === (8))){
var inst_17984 = (state_18023[(11)]);
var inst_17973 = (state_18023[(8)]);
var tmp18107 = inst_17973;
var inst_17973__$1 = tmp18107;
var inst_17974 = inst_17984;
var state_18023__$1 = (function (){var statearr_18120 = state_18023;
(statearr_18120[(7)] = inst_17974);

(statearr_18120[(8)] = inst_17973__$1);

return statearr_18120;
})();
var statearr_18121_19149 = state_18023__$1;
(statearr_18121_19149[(2)] = null);

(statearr_18121_19149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14565__auto__ = null;
var cljs$core$async$state_machine__14565__auto____0 = (function (){
var statearr_18122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18122[(0)] = cljs$core$async$state_machine__14565__auto__);

(statearr_18122[(1)] = (1));

return statearr_18122;
});
var cljs$core$async$state_machine__14565__auto____1 = (function (state_18023){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_18023);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e18123){var ex__14568__auto__ = e18123;
var statearr_18127_19150 = state_18023;
(statearr_18127_19150[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_18023[(4)]))){
var statearr_18130_19151 = state_18023;
(statearr_18130_19151[(1)] = cljs.core.first((state_18023[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19152 = state_18023;
state_18023 = G__19152;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$state_machine__14565__auto__ = function(state_18023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14565__auto____1.call(this,state_18023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14565__auto____0;
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14565__auto____1;
return cljs$core$async$state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_18145 = f__14926__auto__();
(statearr_18145[(6)] = c__14925__auto___19129);

return statearr_18145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18158 = arguments.length;
switch (G__18158) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14925__auto___19154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14926__auto__ = (function (){var switch__14564__auto__ = (function (state_18212){
var state_val_18213 = (state_18212[(1)]);
if((state_val_18213 === (7))){
var inst_18208 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18214_19157 = state_18212__$1;
(statearr_18214_19157[(2)] = inst_18208);

(statearr_18214_19157[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (1))){
var inst_18159 = [];
var inst_18160 = inst_18159;
var inst_18161 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18212__$1 = (function (){var statearr_18215 = state_18212;
(statearr_18215[(7)] = inst_18160);

(statearr_18215[(8)] = inst_18161);

return statearr_18215;
})();
var statearr_18216_19158 = state_18212__$1;
(statearr_18216_19158[(2)] = null);

(statearr_18216_19158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (4))){
var inst_18164 = (state_18212[(9)]);
var inst_18164__$1 = (state_18212[(2)]);
var inst_18171 = (inst_18164__$1 == null);
var inst_18172 = cljs.core.not(inst_18171);
var state_18212__$1 = (function (){var statearr_18226 = state_18212;
(statearr_18226[(9)] = inst_18164__$1);

return statearr_18226;
})();
if(inst_18172){
var statearr_18227_19160 = state_18212__$1;
(statearr_18227_19160[(1)] = (5));

} else {
var statearr_18228_19161 = state_18212__$1;
(statearr_18228_19161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (15))){
var inst_18160 = (state_18212[(7)]);
var inst_18200 = cljs.core.vec(inst_18160);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18212__$1,(18),out,inst_18200);
} else {
if((state_val_18213 === (13))){
var inst_18195 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18232_19162 = state_18212__$1;
(statearr_18232_19162[(2)] = inst_18195);

(statearr_18232_19162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (6))){
var inst_18160 = (state_18212[(7)]);
var inst_18197 = inst_18160.length;
var inst_18198 = (inst_18197 > (0));
var state_18212__$1 = state_18212;
if(cljs.core.truth_(inst_18198)){
var statearr_18234_19164 = state_18212__$1;
(statearr_18234_19164[(1)] = (15));

} else {
var statearr_18235_19165 = state_18212__$1;
(statearr_18235_19165[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (17))){
var inst_18205 = (state_18212[(2)]);
var inst_18206 = cljs.core.async.close_BANG_(out);
var state_18212__$1 = (function (){var statearr_18236 = state_18212;
(statearr_18236[(10)] = inst_18205);

return statearr_18236;
})();
var statearr_18237_19166 = state_18212__$1;
(statearr_18237_19166[(2)] = inst_18206);

(statearr_18237_19166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (3))){
var inst_18210 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18212__$1,inst_18210);
} else {
if((state_val_18213 === (12))){
var inst_18160 = (state_18212[(7)]);
var inst_18187 = cljs.core.vec(inst_18160);
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18212__$1,(14),out,inst_18187);
} else {
if((state_val_18213 === (2))){
var state_18212__$1 = state_18212;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18212__$1,(4),ch);
} else {
if((state_val_18213 === (11))){
var inst_18175 = (state_18212[(11)]);
var inst_18160 = (state_18212[(7)]);
var inst_18164 = (state_18212[(9)]);
var inst_18184 = inst_18160.push(inst_18164);
var tmp18238 = inst_18160;
var inst_18160__$1 = tmp18238;
var inst_18161 = inst_18175;
var state_18212__$1 = (function (){var statearr_18239 = state_18212;
(statearr_18239[(7)] = inst_18160__$1);

(statearr_18239[(8)] = inst_18161);

(statearr_18239[(12)] = inst_18184);

return statearr_18239;
})();
var statearr_18240_19171 = state_18212__$1;
(statearr_18240_19171[(2)] = null);

(statearr_18240_19171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (9))){
var inst_18161 = (state_18212[(8)]);
var inst_18180 = cljs.core.keyword_identical_QMARK_(inst_18161,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18212__$1 = state_18212;
var statearr_18241_19172 = state_18212__$1;
(statearr_18241_19172[(2)] = inst_18180);

(statearr_18241_19172[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (5))){
var inst_18175 = (state_18212[(11)]);
var inst_18164 = (state_18212[(9)]);
var inst_18161 = (state_18212[(8)]);
var inst_18177 = (state_18212[(13)]);
var inst_18175__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18164) : f.call(null,inst_18164));
var inst_18177__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18175__$1,inst_18161);
var state_18212__$1 = (function (){var statearr_18242 = state_18212;
(statearr_18242[(11)] = inst_18175__$1);

(statearr_18242[(13)] = inst_18177__$1);

return statearr_18242;
})();
if(inst_18177__$1){
var statearr_18243_19174 = state_18212__$1;
(statearr_18243_19174[(1)] = (8));

} else {
var statearr_18244_19175 = state_18212__$1;
(statearr_18244_19175[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (14))){
var inst_18175 = (state_18212[(11)]);
var inst_18164 = (state_18212[(9)]);
var inst_18189 = (state_18212[(2)]);
var inst_18190 = [];
var inst_18192 = inst_18190.push(inst_18164);
var inst_18160 = inst_18190;
var inst_18161 = inst_18175;
var state_18212__$1 = (function (){var statearr_18245 = state_18212;
(statearr_18245[(7)] = inst_18160);

(statearr_18245[(8)] = inst_18161);

(statearr_18245[(14)] = inst_18192);

(statearr_18245[(15)] = inst_18189);

return statearr_18245;
})();
var statearr_18249_19176 = state_18212__$1;
(statearr_18249_19176[(2)] = null);

(statearr_18249_19176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (16))){
var state_18212__$1 = state_18212;
var statearr_18250_19177 = state_18212__$1;
(statearr_18250_19177[(2)] = null);

(statearr_18250_19177[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (10))){
var inst_18182 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
if(cljs.core.truth_(inst_18182)){
var statearr_18251_19178 = state_18212__$1;
(statearr_18251_19178[(1)] = (11));

} else {
var statearr_18252_19179 = state_18212__$1;
(statearr_18252_19179[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (18))){
var inst_18202 = (state_18212[(2)]);
var state_18212__$1 = state_18212;
var statearr_18253_19183 = state_18212__$1;
(statearr_18253_19183[(2)] = inst_18202);

(statearr_18253_19183[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18213 === (8))){
var inst_18177 = (state_18212[(13)]);
var state_18212__$1 = state_18212;
var statearr_18259_19184 = state_18212__$1;
(statearr_18259_19184[(2)] = inst_18177);

(statearr_18259_19184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14565__auto__ = null;
var cljs$core$async$state_machine__14565__auto____0 = (function (){
var statearr_18260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18260[(0)] = cljs$core$async$state_machine__14565__auto__);

(statearr_18260[(1)] = (1));

return statearr_18260;
});
var cljs$core$async$state_machine__14565__auto____1 = (function (state_18212){
while(true){
var ret_value__14566__auto__ = (function (){try{while(true){
var result__14567__auto__ = switch__14564__auto__(state_18212);
if(cljs.core.keyword_identical_QMARK_(result__14567__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14567__auto__;
}
break;
}
}catch (e18261){var ex__14568__auto__ = e18261;
var statearr_18262_19185 = state_18212;
(statearr_18262_19185[(2)] = ex__14568__auto__);


if(cljs.core.seq((state_18212[(4)]))){
var statearr_18266_19186 = state_18212;
(statearr_18266_19186[(1)] = cljs.core.first((state_18212[(4)])));

} else {
throw ex__14568__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14566__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19187 = state_18212;
state_18212 = G__19187;
continue;
} else {
return ret_value__14566__auto__;
}
break;
}
});
cljs$core$async$state_machine__14565__auto__ = function(state_18212){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14565__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14565__auto____1.call(this,state_18212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14565__auto____0;
cljs$core$async$state_machine__14565__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14565__auto____1;
return cljs$core$async$state_machine__14565__auto__;
})()
})();
var state__14927__auto__ = (function (){var statearr_18268 = f__14926__auto__();
(statearr_18268[(6)] = c__14925__auto___19154);

return statearr_18268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14927__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
