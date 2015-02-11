// Compiled by ClojureScript 0.0-2755 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t9673 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9673 = (function (f,fn_handler,meta9674){
this.f = f;
this.fn_handler = fn_handler;
this.meta9674 = meta9674;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9673.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9673.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t9673.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t9673.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9675){
var self__ = this;
var _9675__$1 = this;
return self__.meta9674;
});

cljs.core.async.t9673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9675,meta9674__$1){
var self__ = this;
var _9675__$1 = this;
return (new cljs.core.async.t9673(self__.f,self__.fn_handler,meta9674__$1));
});

cljs.core.async.t9673.cljs$lang$type = true;

cljs.core.async.t9673.cljs$lang$ctorStr = "cljs.core.async/t9673";

cljs.core.async.t9673.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t9673");
});

cljs.core.async.__GT_t9673 = (function __GT_t9673(f__$1,fn_handler__$1,meta9674){
return (new cljs.core.async.t9673(f__$1,fn_handler__$1,meta9674));
});

}

return (new cljs.core.async.t9673(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__9677 = buff;
if(G__9677){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__9677.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__9677.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9677);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9677);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9678 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9678);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9678,ret){
return (function (){
return fn1.call(null,val_9678);
});})(val_9678,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4659__auto___9679 = n;
var x_9680 = (0);
while(true){
if((x_9680 < n__4659__auto___9679)){
(a[x_9680] = (0));

var G__9681 = (x_9680 + (1));
x_9680 = G__9681;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9682 = (i + (1));
i = G__9682;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t9686 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9686 = (function (flag,alt_flag,meta9687){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9687 = meta9687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9686.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t9686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t9686.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9688){
var self__ = this;
var _9688__$1 = this;
return self__.meta9687;
});})(flag))
;

cljs.core.async.t9686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9688,meta9687__$1){
var self__ = this;
var _9688__$1 = this;
return (new cljs.core.async.t9686(self__.flag,self__.alt_flag,meta9687__$1));
});})(flag))
;

cljs.core.async.t9686.cljs$lang$type = true;

cljs.core.async.t9686.cljs$lang$ctorStr = "cljs.core.async/t9686";

cljs.core.async.t9686.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t9686");
});})(flag))
;

cljs.core.async.__GT_t9686 = ((function (flag){
return (function __GT_t9686(flag__$1,alt_flag__$1,meta9687){
return (new cljs.core.async.t9686(flag__$1,alt_flag__$1,meta9687));
});})(flag))
;

}

return (new cljs.core.async.t9686(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t9692 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t9692 = (function (cb,flag,alt_handler,meta9693){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9693 = meta9693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9692.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t9692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t9692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t9692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9694){
var self__ = this;
var _9694__$1 = this;
return self__.meta9693;
});

cljs.core.async.t9692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9694,meta9693__$1){
var self__ = this;
var _9694__$1 = this;
return (new cljs.core.async.t9692(self__.cb,self__.flag,self__.alt_handler,meta9693__$1));
});

cljs.core.async.t9692.cljs$lang$type = true;

cljs.core.async.t9692.cljs$lang$ctorStr = "cljs.core.async/t9692";

cljs.core.async.t9692.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t9692");
});

cljs.core.async.__GT_t9692 = (function __GT_t9692(cb__$1,flag__$1,alt_handler__$1,meta9693){
return (new cljs.core.async.t9692(cb__$1,flag__$1,alt_handler__$1,meta9693));
});

}

return (new cljs.core.async.t9692(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9695_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9695_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9696_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9696_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3772__auto__ = wport;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9697 = (i + (1));
i = G__9697;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3772__auto__ = ret;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3760__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3760__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3760__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9698){
var map__9700 = p__9698;
var map__9700__$1 = ((cljs.core.seq_QMARK_.call(null,map__9700))?cljs.core.apply.call(null,cljs.core.hash_map,map__9700):map__9700);
var opts = map__9700__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__9698 = null;
if (arguments.length > 1) {
var G__9701__i = 0, G__9701__a = new Array(arguments.length -  1);
while (G__9701__i < G__9701__a.length) {G__9701__a[G__9701__i] = arguments[G__9701__i + 1]; ++G__9701__i;}
  p__9698 = new cljs.core.IndexedSeq(G__9701__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__9698);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9702){
var ports = cljs.core.first(arglist__9702);
var p__9698 = cljs.core.rest(arglist__9702);
return alts_BANG___delegate(ports,p__9698);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6876__auto___9797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___9797){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___9797){
return (function (state_9773){
var state_val_9774 = (state_9773[(1)]);
if((state_val_9774 === (7))){
var inst_9769 = (state_9773[(2)]);
var state_9773__$1 = state_9773;
var statearr_9775_9798 = state_9773__$1;
(statearr_9775_9798[(2)] = inst_9769);

(statearr_9775_9798[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (1))){
var state_9773__$1 = state_9773;
var statearr_9776_9799 = state_9773__$1;
(statearr_9776_9799[(2)] = null);

(statearr_9776_9799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (4))){
var inst_9752 = (state_9773[(7)]);
var inst_9752__$1 = (state_9773[(2)]);
var inst_9753 = (inst_9752__$1 == null);
var state_9773__$1 = (function (){var statearr_9777 = state_9773;
(statearr_9777[(7)] = inst_9752__$1);

return statearr_9777;
})();
if(cljs.core.truth_(inst_9753)){
var statearr_9778_9800 = state_9773__$1;
(statearr_9778_9800[(1)] = (5));

} else {
var statearr_9779_9801 = state_9773__$1;
(statearr_9779_9801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (13))){
var state_9773__$1 = state_9773;
var statearr_9780_9802 = state_9773__$1;
(statearr_9780_9802[(2)] = null);

(statearr_9780_9802[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (6))){
var inst_9752 = (state_9773[(7)]);
var state_9773__$1 = state_9773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9773__$1,(11),to,inst_9752);
} else {
if((state_val_9774 === (3))){
var inst_9771 = (state_9773[(2)]);
var state_9773__$1 = state_9773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9773__$1,inst_9771);
} else {
if((state_val_9774 === (12))){
var state_9773__$1 = state_9773;
var statearr_9781_9803 = state_9773__$1;
(statearr_9781_9803[(2)] = null);

(statearr_9781_9803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (2))){
var state_9773__$1 = state_9773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9773__$1,(4),from);
} else {
if((state_val_9774 === (11))){
var inst_9762 = (state_9773[(2)]);
var state_9773__$1 = state_9773;
if(cljs.core.truth_(inst_9762)){
var statearr_9782_9804 = state_9773__$1;
(statearr_9782_9804[(1)] = (12));

} else {
var statearr_9783_9805 = state_9773__$1;
(statearr_9783_9805[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (9))){
var state_9773__$1 = state_9773;
var statearr_9784_9806 = state_9773__$1;
(statearr_9784_9806[(2)] = null);

(statearr_9784_9806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (5))){
var state_9773__$1 = state_9773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9785_9807 = state_9773__$1;
(statearr_9785_9807[(1)] = (8));

} else {
var statearr_9786_9808 = state_9773__$1;
(statearr_9786_9808[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (14))){
var inst_9767 = (state_9773[(2)]);
var state_9773__$1 = state_9773;
var statearr_9787_9809 = state_9773__$1;
(statearr_9787_9809[(2)] = inst_9767);

(statearr_9787_9809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (10))){
var inst_9759 = (state_9773[(2)]);
var state_9773__$1 = state_9773;
var statearr_9788_9810 = state_9773__$1;
(statearr_9788_9810[(2)] = inst_9759);

(statearr_9788_9810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (8))){
var inst_9756 = cljs.core.async.close_BANG_.call(null,to);
var state_9773__$1 = state_9773;
var statearr_9789_9811 = state_9773__$1;
(statearr_9789_9811[(2)] = inst_9756);

(statearr_9789_9811[(1)] = (10));


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
});})(c__6876__auto___9797))
;
return ((function (switch__6820__auto__,c__6876__auto___9797){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_9793 = [null,null,null,null,null,null,null,null];
(statearr_9793[(0)] = state_machine__6821__auto__);

(statearr_9793[(1)] = (1));

return statearr_9793;
});
var state_machine__6821__auto____1 = (function (state_9773){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_9773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e9794){if((e9794 instanceof Object)){
var ex__6824__auto__ = e9794;
var statearr_9795_9812 = state_9773;
(statearr_9795_9812[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9813 = state_9773;
state_9773 = G__9813;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_9773){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_9773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___9797))
})();
var state__6878__auto__ = (function (){var statearr_9796 = f__6877__auto__.call(null);
(statearr_9796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___9797);

return statearr_9796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___9797))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9997){
var vec__9998 = p__9997;
var v = cljs.core.nth.call(null,vec__9998,(0),null);
var p = cljs.core.nth.call(null,vec__9998,(1),null);
var job = vec__9998;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6876__auto___10180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___10180,res,vec__9998,v,p,job,jobs,results){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___10180,res,vec__9998,v,p,job,jobs,results){
return (function (state_10003){
var state_val_10004 = (state_10003[(1)]);
if((state_val_10004 === (2))){
var inst_10000 = (state_10003[(2)]);
var inst_10001 = cljs.core.async.close_BANG_.call(null,res);
var state_10003__$1 = (function (){var statearr_10005 = state_10003;
(statearr_10005[(7)] = inst_10000);

return statearr_10005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10003__$1,inst_10001);
} else {
if((state_val_10004 === (1))){
var state_10003__$1 = state_10003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10003__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6876__auto___10180,res,vec__9998,v,p,job,jobs,results))
;
return ((function (switch__6820__auto__,c__6876__auto___10180,res,vec__9998,v,p,job,jobs,results){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_10009 = [null,null,null,null,null,null,null,null];
(statearr_10009[(0)] = state_machine__6821__auto__);

(statearr_10009[(1)] = (1));

return statearr_10009;
});
var state_machine__6821__auto____1 = (function (state_10003){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_10003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e10010){if((e10010 instanceof Object)){
var ex__6824__auto__ = e10010;
var statearr_10011_10181 = state_10003;
(statearr_10011_10181[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10182 = state_10003;
state_10003 = G__10182;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_10003){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_10003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___10180,res,vec__9998,v,p,job,jobs,results))
})();
var state__6878__auto__ = (function (){var statearr_10012 = f__6877__auto__.call(null);
(statearr_10012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___10180);

return statearr_10012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___10180,res,vec__9998,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10013){
var vec__10014 = p__10013;
var v = cljs.core.nth.call(null,vec__10014,(0),null);
var p = cljs.core.nth.call(null,vec__10014,(1),null);
var job = vec__10014;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4659__auto___10183 = n;
var __10184 = (0);
while(true){
if((__10184 < n__4659__auto___10183)){
var G__10015_10185 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10015_10185) {
case "async":
var c__6876__auto___10187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10184,c__6876__auto___10187,G__10015_10185,n__4659__auto___10183,jobs,results,process,async){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (__10184,c__6876__auto___10187,G__10015_10185,n__4659__auto___10183,jobs,results,process,async){
return (function (state_10028){
var state_val_10029 = (state_10028[(1)]);
if((state_val_10029 === (7))){
var inst_10024 = (state_10028[(2)]);
var state_10028__$1 = state_10028;
var statearr_10030_10188 = state_10028__$1;
(statearr_10030_10188[(2)] = inst_10024);

(statearr_10030_10188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10029 === (6))){
var state_10028__$1 = state_10028;
var statearr_10031_10189 = state_10028__$1;
(statearr_10031_10189[(2)] = null);

(statearr_10031_10189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10029 === (5))){
var state_10028__$1 = state_10028;
var statearr_10032_10190 = state_10028__$1;
(statearr_10032_10190[(2)] = null);

(statearr_10032_10190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10029 === (4))){
var inst_10018 = (state_10028[(2)]);
var inst_10019 = async.call(null,inst_10018);
var state_10028__$1 = state_10028;
if(cljs.core.truth_(inst_10019)){
var statearr_10033_10191 = state_10028__$1;
(statearr_10033_10191[(1)] = (5));

} else {
var statearr_10034_10192 = state_10028__$1;
(statearr_10034_10192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10029 === (3))){
var inst_10026 = (state_10028[(2)]);
var state_10028__$1 = state_10028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10028__$1,inst_10026);
} else {
if((state_val_10029 === (2))){
var state_10028__$1 = state_10028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10028__$1,(4),jobs);
} else {
if((state_val_10029 === (1))){
var state_10028__$1 = state_10028;
var statearr_10035_10193 = state_10028__$1;
(statearr_10035_10193[(2)] = null);

(statearr_10035_10193[(1)] = (2));


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
});})(__10184,c__6876__auto___10187,G__10015_10185,n__4659__auto___10183,jobs,results,process,async))
;
return ((function (__10184,switch__6820__auto__,c__6876__auto___10187,G__10015_10185,n__4659__auto___10183,jobs,results,process,async){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_10039 = [null,null,null,null,null,null,null];
(statearr_10039[(0)] = state_machine__6821__auto__);

(statearr_10039[(1)] = (1));

return statearr_10039;
});
var state_machine__6821__auto____1 = (function (state_10028){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_10028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e10040){if((e10040 instanceof Object)){
var ex__6824__auto__ = e10040;
var statearr_10041_10194 = state_10028;
(statearr_10041_10194[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10195 = state_10028;
state_10028 = G__10195;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_10028){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_10028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(__10184,switch__6820__auto__,c__6876__auto___10187,G__10015_10185,n__4659__auto___10183,jobs,results,process,async))
})();
var state__6878__auto__ = (function (){var statearr_10042 = f__6877__auto__.call(null);
(statearr_10042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___10187);

return statearr_10042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(__10184,c__6876__auto___10187,G__10015_10185,n__4659__auto___10183,jobs,results,process,async))
);


break;
case "compute":
var c__6876__auto___10196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10184,c__6876__auto___10196,G__10015_10185,n__4659__auto___10183,jobs,results,process,async){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (__10184,c__6876__auto___10196,G__10015_10185,n__4659__auto___10183,jobs,results,process,async){
return (function (state_10055){
var state_val_10056 = (state_10055[(1)]);
if((state_val_10056 === (7))){
var inst_10051 = (state_10055[(2)]);
var state_10055__$1 = state_10055;
var statearr_10057_10197 = state_10055__$1;
(statearr_10057_10197[(2)] = inst_10051);

(statearr_10057_10197[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10056 === (6))){
var state_10055__$1 = state_10055;
var statearr_10058_10198 = state_10055__$1;
(statearr_10058_10198[(2)] = null);

(statearr_10058_10198[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10056 === (5))){
var state_10055__$1 = state_10055;
var statearr_10059_10199 = state_10055__$1;
(statearr_10059_10199[(2)] = null);

(statearr_10059_10199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10056 === (4))){
var inst_10045 = (state_10055[(2)]);
var inst_10046 = process.call(null,inst_10045);
var state_10055__$1 = state_10055;
if(cljs.core.truth_(inst_10046)){
var statearr_10060_10200 = state_10055__$1;
(statearr_10060_10200[(1)] = (5));

} else {
var statearr_10061_10201 = state_10055__$1;
(statearr_10061_10201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10056 === (3))){
var inst_10053 = (state_10055[(2)]);
var state_10055__$1 = state_10055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10055__$1,inst_10053);
} else {
if((state_val_10056 === (2))){
var state_10055__$1 = state_10055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10055__$1,(4),jobs);
} else {
if((state_val_10056 === (1))){
var state_10055__$1 = state_10055;
var statearr_10062_10202 = state_10055__$1;
(statearr_10062_10202[(2)] = null);

(statearr_10062_10202[(1)] = (2));


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
});})(__10184,c__6876__auto___10196,G__10015_10185,n__4659__auto___10183,jobs,results,process,async))
;
return ((function (__10184,switch__6820__auto__,c__6876__auto___10196,G__10015_10185,n__4659__auto___10183,jobs,results,process,async){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_10066 = [null,null,null,null,null,null,null];
(statearr_10066[(0)] = state_machine__6821__auto__);

(statearr_10066[(1)] = (1));

return statearr_10066;
});
var state_machine__6821__auto____1 = (function (state_10055){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_10055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e10067){if((e10067 instanceof Object)){
var ex__6824__auto__ = e10067;
var statearr_10068_10203 = state_10055;
(statearr_10068_10203[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10204 = state_10055;
state_10055 = G__10204;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_10055){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_10055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(__10184,switch__6820__auto__,c__6876__auto___10196,G__10015_10185,n__4659__auto___10183,jobs,results,process,async))
})();
var state__6878__auto__ = (function (){var statearr_10069 = f__6877__auto__.call(null);
(statearr_10069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___10196);

return statearr_10069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(__10184,c__6876__auto___10196,G__10015_10185,n__4659__auto___10183,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__10205 = (__10184 + (1));
__10184 = G__10205;
continue;
} else {
}
break;
}

var c__6876__auto___10206 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___10206,jobs,results,process,async){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___10206,jobs,results,process,async){
return (function (state_10091){
var state_val_10092 = (state_10091[(1)]);
if((state_val_10092 === (9))){
var inst_10084 = (state_10091[(2)]);
var state_10091__$1 = (function (){var statearr_10093 = state_10091;
(statearr_10093[(7)] = inst_10084);

return statearr_10093;
})();
var statearr_10094_10207 = state_10091__$1;
(statearr_10094_10207[(2)] = null);

(statearr_10094_10207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10092 === (8))){
var inst_10077 = (state_10091[(8)]);
var inst_10082 = (state_10091[(2)]);
var state_10091__$1 = (function (){var statearr_10095 = state_10091;
(statearr_10095[(9)] = inst_10082);

return statearr_10095;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10091__$1,(9),results,inst_10077);
} else {
if((state_val_10092 === (7))){
var inst_10087 = (state_10091[(2)]);
var state_10091__$1 = state_10091;
var statearr_10096_10208 = state_10091__$1;
(statearr_10096_10208[(2)] = inst_10087);

(statearr_10096_10208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10092 === (6))){
var inst_10077 = (state_10091[(8)]);
var inst_10072 = (state_10091[(10)]);
var inst_10077__$1 = cljs.core.async.chan.call(null,(1));
var inst_10078 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10079 = [inst_10072,inst_10077__$1];
var inst_10080 = (new cljs.core.PersistentVector(null,2,(5),inst_10078,inst_10079,null));
var state_10091__$1 = (function (){var statearr_10097 = state_10091;
(statearr_10097[(8)] = inst_10077__$1);

return statearr_10097;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10091__$1,(8),jobs,inst_10080);
} else {
if((state_val_10092 === (5))){
var inst_10075 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10091__$1 = state_10091;
var statearr_10098_10209 = state_10091__$1;
(statearr_10098_10209[(2)] = inst_10075);

(statearr_10098_10209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10092 === (4))){
var inst_10072 = (state_10091[(10)]);
var inst_10072__$1 = (state_10091[(2)]);
var inst_10073 = (inst_10072__$1 == null);
var state_10091__$1 = (function (){var statearr_10099 = state_10091;
(statearr_10099[(10)] = inst_10072__$1);

return statearr_10099;
})();
if(cljs.core.truth_(inst_10073)){
var statearr_10100_10210 = state_10091__$1;
(statearr_10100_10210[(1)] = (5));

} else {
var statearr_10101_10211 = state_10091__$1;
(statearr_10101_10211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10092 === (3))){
var inst_10089 = (state_10091[(2)]);
var state_10091__$1 = state_10091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10091__$1,inst_10089);
} else {
if((state_val_10092 === (2))){
var state_10091__$1 = state_10091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10091__$1,(4),from);
} else {
if((state_val_10092 === (1))){
var state_10091__$1 = state_10091;
var statearr_10102_10212 = state_10091__$1;
(statearr_10102_10212[(2)] = null);

(statearr_10102_10212[(1)] = (2));


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
});})(c__6876__auto___10206,jobs,results,process,async))
;
return ((function (switch__6820__auto__,c__6876__auto___10206,jobs,results,process,async){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_10106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10106[(0)] = state_machine__6821__auto__);

(statearr_10106[(1)] = (1));

return statearr_10106;
});
var state_machine__6821__auto____1 = (function (state_10091){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_10091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e10107){if((e10107 instanceof Object)){
var ex__6824__auto__ = e10107;
var statearr_10108_10213 = state_10091;
(statearr_10108_10213[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10214 = state_10091;
state_10091 = G__10214;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_10091){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_10091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___10206,jobs,results,process,async))
})();
var state__6878__auto__ = (function (){var statearr_10109 = f__6877__auto__.call(null);
(statearr_10109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___10206);

return statearr_10109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___10206,jobs,results,process,async))
);


var c__6876__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto__,jobs,results,process,async){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto__,jobs,results,process,async){
return (function (state_10147){
var state_val_10148 = (state_10147[(1)]);
if((state_val_10148 === (7))){
var inst_10143 = (state_10147[(2)]);
var state_10147__$1 = state_10147;
var statearr_10149_10215 = state_10147__$1;
(statearr_10149_10215[(2)] = inst_10143);

(statearr_10149_10215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (20))){
var state_10147__$1 = state_10147;
var statearr_10150_10216 = state_10147__$1;
(statearr_10150_10216[(2)] = null);

(statearr_10150_10216[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (1))){
var state_10147__$1 = state_10147;
var statearr_10151_10217 = state_10147__$1;
(statearr_10151_10217[(2)] = null);

(statearr_10151_10217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (4))){
var inst_10112 = (state_10147[(7)]);
var inst_10112__$1 = (state_10147[(2)]);
var inst_10113 = (inst_10112__$1 == null);
var state_10147__$1 = (function (){var statearr_10152 = state_10147;
(statearr_10152[(7)] = inst_10112__$1);

return statearr_10152;
})();
if(cljs.core.truth_(inst_10113)){
var statearr_10153_10218 = state_10147__$1;
(statearr_10153_10218[(1)] = (5));

} else {
var statearr_10154_10219 = state_10147__$1;
(statearr_10154_10219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (15))){
var inst_10125 = (state_10147[(8)]);
var state_10147__$1 = state_10147;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10147__$1,(18),to,inst_10125);
} else {
if((state_val_10148 === (21))){
var inst_10138 = (state_10147[(2)]);
var state_10147__$1 = state_10147;
var statearr_10155_10220 = state_10147__$1;
(statearr_10155_10220[(2)] = inst_10138);

(statearr_10155_10220[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (13))){
var inst_10140 = (state_10147[(2)]);
var state_10147__$1 = (function (){var statearr_10156 = state_10147;
(statearr_10156[(9)] = inst_10140);

return statearr_10156;
})();
var statearr_10157_10221 = state_10147__$1;
(statearr_10157_10221[(2)] = null);

(statearr_10157_10221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (6))){
var inst_10112 = (state_10147[(7)]);
var state_10147__$1 = state_10147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10147__$1,(11),inst_10112);
} else {
if((state_val_10148 === (17))){
var inst_10133 = (state_10147[(2)]);
var state_10147__$1 = state_10147;
if(cljs.core.truth_(inst_10133)){
var statearr_10158_10222 = state_10147__$1;
(statearr_10158_10222[(1)] = (19));

} else {
var statearr_10159_10223 = state_10147__$1;
(statearr_10159_10223[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (3))){
var inst_10145 = (state_10147[(2)]);
var state_10147__$1 = state_10147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10147__$1,inst_10145);
} else {
if((state_val_10148 === (12))){
var inst_10122 = (state_10147[(10)]);
var state_10147__$1 = state_10147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10147__$1,(14),inst_10122);
} else {
if((state_val_10148 === (2))){
var state_10147__$1 = state_10147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10147__$1,(4),results);
} else {
if((state_val_10148 === (19))){
var state_10147__$1 = state_10147;
var statearr_10160_10224 = state_10147__$1;
(statearr_10160_10224[(2)] = null);

(statearr_10160_10224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (11))){
var inst_10122 = (state_10147[(2)]);
var state_10147__$1 = (function (){var statearr_10161 = state_10147;
(statearr_10161[(10)] = inst_10122);

return statearr_10161;
})();
var statearr_10162_10225 = state_10147__$1;
(statearr_10162_10225[(2)] = null);

(statearr_10162_10225[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (9))){
var state_10147__$1 = state_10147;
var statearr_10163_10226 = state_10147__$1;
(statearr_10163_10226[(2)] = null);

(statearr_10163_10226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (5))){
var state_10147__$1 = state_10147;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10164_10227 = state_10147__$1;
(statearr_10164_10227[(1)] = (8));

} else {
var statearr_10165_10228 = state_10147__$1;
(statearr_10165_10228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (14))){
var inst_10125 = (state_10147[(8)]);
var inst_10127 = (state_10147[(11)]);
var inst_10125__$1 = (state_10147[(2)]);
var inst_10126 = (inst_10125__$1 == null);
var inst_10127__$1 = cljs.core.not.call(null,inst_10126);
var state_10147__$1 = (function (){var statearr_10166 = state_10147;
(statearr_10166[(8)] = inst_10125__$1);

(statearr_10166[(11)] = inst_10127__$1);

return statearr_10166;
})();
if(inst_10127__$1){
var statearr_10167_10229 = state_10147__$1;
(statearr_10167_10229[(1)] = (15));

} else {
var statearr_10168_10230 = state_10147__$1;
(statearr_10168_10230[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (16))){
var inst_10127 = (state_10147[(11)]);
var state_10147__$1 = state_10147;
var statearr_10169_10231 = state_10147__$1;
(statearr_10169_10231[(2)] = inst_10127);

(statearr_10169_10231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (10))){
var inst_10119 = (state_10147[(2)]);
var state_10147__$1 = state_10147;
var statearr_10170_10232 = state_10147__$1;
(statearr_10170_10232[(2)] = inst_10119);

(statearr_10170_10232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (18))){
var inst_10130 = (state_10147[(2)]);
var state_10147__$1 = state_10147;
var statearr_10171_10233 = state_10147__$1;
(statearr_10171_10233[(2)] = inst_10130);

(statearr_10171_10233[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10148 === (8))){
var inst_10116 = cljs.core.async.close_BANG_.call(null,to);
var state_10147__$1 = state_10147;
var statearr_10172_10234 = state_10147__$1;
(statearr_10172_10234[(2)] = inst_10116);

(statearr_10172_10234[(1)] = (10));


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
});})(c__6876__auto__,jobs,results,process,async))
;
return ((function (switch__6820__auto__,c__6876__auto__,jobs,results,process,async){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_10176 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10176[(0)] = state_machine__6821__auto__);

(statearr_10176[(1)] = (1));

return statearr_10176;
});
var state_machine__6821__auto____1 = (function (state_10147){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_10147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e10177){if((e10177 instanceof Object)){
var ex__6824__auto__ = e10177;
var statearr_10178_10235 = state_10147;
(statearr_10178_10235[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10236 = state_10147;
state_10147 = G__10236;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_10147){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_10147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto__,jobs,results,process,async))
})();
var state__6878__auto__ = (function (){var statearr_10179 = f__6877__auto__.call(null);
(statearr_10179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto__);

return statearr_10179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto__,jobs,results,process,async))
);

return c__6876__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6876__auto___10337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___10337,tc,fc){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___10337,tc,fc){
return (function (state_10312){
var state_val_10313 = (state_10312[(1)]);
if((state_val_10313 === (7))){
var inst_10308 = (state_10312[(2)]);
var state_10312__$1 = state_10312;
var statearr_10314_10338 = state_10312__$1;
(statearr_10314_10338[(2)] = inst_10308);

(statearr_10314_10338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10313 === (1))){
var state_10312__$1 = state_10312;
var statearr_10315_10339 = state_10312__$1;
(statearr_10315_10339[(2)] = null);

(statearr_10315_10339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10313 === (4))){
var inst_10289 = (state_10312[(7)]);
var inst_10289__$1 = (state_10312[(2)]);
var inst_10290 = (inst_10289__$1 == null);
var state_10312__$1 = (function (){var statearr_10316 = state_10312;
(statearr_10316[(7)] = inst_10289__$1);

return statearr_10316;
})();
if(cljs.core.truth_(inst_10290)){
var statearr_10317_10340 = state_10312__$1;
(statearr_10317_10340[(1)] = (5));

} else {
var statearr_10318_10341 = state_10312__$1;
(statearr_10318_10341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10313 === (13))){
var state_10312__$1 = state_10312;
var statearr_10319_10342 = state_10312__$1;
(statearr_10319_10342[(2)] = null);

(statearr_10319_10342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10313 === (6))){
var inst_10289 = (state_10312[(7)]);
var inst_10295 = p.call(null,inst_10289);
var state_10312__$1 = state_10312;
if(cljs.core.truth_(inst_10295)){
var statearr_10320_10343 = state_10312__$1;
(statearr_10320_10343[(1)] = (9));

} else {
var statearr_10321_10344 = state_10312__$1;
(statearr_10321_10344[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10313 === (3))){
var inst_10310 = (state_10312[(2)]);
var state_10312__$1 = state_10312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10312__$1,inst_10310);
} else {
if((state_val_10313 === (12))){
var state_10312__$1 = state_10312;
var statearr_10322_10345 = state_10312__$1;
(statearr_10322_10345[(2)] = null);

(statearr_10322_10345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10313 === (2))){
var state_10312__$1 = state_10312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10312__$1,(4),ch);
} else {
if((state_val_10313 === (11))){
var inst_10289 = (state_10312[(7)]);
var inst_10299 = (state_10312[(2)]);
var state_10312__$1 = state_10312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10312__$1,(8),inst_10299,inst_10289);
} else {
if((state_val_10313 === (9))){
var state_10312__$1 = state_10312;
var statearr_10323_10346 = state_10312__$1;
(statearr_10323_10346[(2)] = tc);

(statearr_10323_10346[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10313 === (5))){
var inst_10292 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10293 = cljs.core.async.close_BANG_.call(null,fc);
var state_10312__$1 = (function (){var statearr_10324 = state_10312;
(statearr_10324[(8)] = inst_10292);

return statearr_10324;
})();
var statearr_10325_10347 = state_10312__$1;
(statearr_10325_10347[(2)] = inst_10293);

(statearr_10325_10347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10313 === (14))){
var inst_10306 = (state_10312[(2)]);
var state_10312__$1 = state_10312;
var statearr_10326_10348 = state_10312__$1;
(statearr_10326_10348[(2)] = inst_10306);

(statearr_10326_10348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10313 === (10))){
var state_10312__$1 = state_10312;
var statearr_10327_10349 = state_10312__$1;
(statearr_10327_10349[(2)] = fc);

(statearr_10327_10349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10313 === (8))){
var inst_10301 = (state_10312[(2)]);
var state_10312__$1 = state_10312;
if(cljs.core.truth_(inst_10301)){
var statearr_10328_10350 = state_10312__$1;
(statearr_10328_10350[(1)] = (12));

} else {
var statearr_10329_10351 = state_10312__$1;
(statearr_10329_10351[(1)] = (13));

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
});})(c__6876__auto___10337,tc,fc))
;
return ((function (switch__6820__auto__,c__6876__auto___10337,tc,fc){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_10333 = [null,null,null,null,null,null,null,null,null];
(statearr_10333[(0)] = state_machine__6821__auto__);

(statearr_10333[(1)] = (1));

return statearr_10333;
});
var state_machine__6821__auto____1 = (function (state_10312){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_10312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e10334){if((e10334 instanceof Object)){
var ex__6824__auto__ = e10334;
var statearr_10335_10352 = state_10312;
(statearr_10335_10352[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10353 = state_10312;
state_10312 = G__10353;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_10312){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_10312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___10337,tc,fc))
})();
var state__6878__auto__ = (function (){var statearr_10336 = f__6877__auto__.call(null);
(statearr_10336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___10337);

return statearr_10336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___10337,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6876__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto__){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto__){
return (function (state_10400){
var state_val_10401 = (state_10400[(1)]);
if((state_val_10401 === (7))){
var inst_10396 = (state_10400[(2)]);
var state_10400__$1 = state_10400;
var statearr_10402_10418 = state_10400__$1;
(statearr_10402_10418[(2)] = inst_10396);

(statearr_10402_10418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10401 === (6))){
var inst_10386 = (state_10400[(7)]);
var inst_10389 = (state_10400[(8)]);
var inst_10393 = f.call(null,inst_10386,inst_10389);
var inst_10386__$1 = inst_10393;
var state_10400__$1 = (function (){var statearr_10403 = state_10400;
(statearr_10403[(7)] = inst_10386__$1);

return statearr_10403;
})();
var statearr_10404_10419 = state_10400__$1;
(statearr_10404_10419[(2)] = null);

(statearr_10404_10419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10401 === (5))){
var inst_10386 = (state_10400[(7)]);
var state_10400__$1 = state_10400;
var statearr_10405_10420 = state_10400__$1;
(statearr_10405_10420[(2)] = inst_10386);

(statearr_10405_10420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10401 === (4))){
var inst_10389 = (state_10400[(8)]);
var inst_10389__$1 = (state_10400[(2)]);
var inst_10390 = (inst_10389__$1 == null);
var state_10400__$1 = (function (){var statearr_10406 = state_10400;
(statearr_10406[(8)] = inst_10389__$1);

return statearr_10406;
})();
if(cljs.core.truth_(inst_10390)){
var statearr_10407_10421 = state_10400__$1;
(statearr_10407_10421[(1)] = (5));

} else {
var statearr_10408_10422 = state_10400__$1;
(statearr_10408_10422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10401 === (3))){
var inst_10398 = (state_10400[(2)]);
var state_10400__$1 = state_10400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10400__$1,inst_10398);
} else {
if((state_val_10401 === (2))){
var state_10400__$1 = state_10400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10400__$1,(4),ch);
} else {
if((state_val_10401 === (1))){
var inst_10386 = init;
var state_10400__$1 = (function (){var statearr_10409 = state_10400;
(statearr_10409[(7)] = inst_10386);

return statearr_10409;
})();
var statearr_10410_10423 = state_10400__$1;
(statearr_10410_10423[(2)] = null);

(statearr_10410_10423[(1)] = (2));


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
});})(c__6876__auto__))
;
return ((function (switch__6820__auto__,c__6876__auto__){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_10414 = [null,null,null,null,null,null,null,null,null];
(statearr_10414[(0)] = state_machine__6821__auto__);

(statearr_10414[(1)] = (1));

return statearr_10414;
});
var state_machine__6821__auto____1 = (function (state_10400){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_10400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e10415){if((e10415 instanceof Object)){
var ex__6824__auto__ = e10415;
var statearr_10416_10424 = state_10400;
(statearr_10416_10424[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10425 = state_10400;
state_10400 = G__10425;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_10400){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_10400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto__))
})();
var state__6878__auto__ = (function (){var statearr_10417 = f__6877__auto__.call(null);
(statearr_10417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto__);

return statearr_10417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto__))
);

return c__6876__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6876__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto__){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto__){
return (function (state_10499){
var state_val_10500 = (state_10499[(1)]);
if((state_val_10500 === (7))){
var inst_10481 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10501_10524 = state_10499__$1;
(statearr_10501_10524[(2)] = inst_10481);

(statearr_10501_10524[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (1))){
var inst_10475 = cljs.core.seq.call(null,coll);
var inst_10476 = inst_10475;
var state_10499__$1 = (function (){var statearr_10502 = state_10499;
(statearr_10502[(7)] = inst_10476);

return statearr_10502;
})();
var statearr_10503_10525 = state_10499__$1;
(statearr_10503_10525[(2)] = null);

(statearr_10503_10525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (4))){
var inst_10476 = (state_10499[(7)]);
var inst_10479 = cljs.core.first.call(null,inst_10476);
var state_10499__$1 = state_10499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10499__$1,(7),ch,inst_10479);
} else {
if((state_val_10500 === (13))){
var inst_10493 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10504_10526 = state_10499__$1;
(statearr_10504_10526[(2)] = inst_10493);

(statearr_10504_10526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (6))){
var inst_10484 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
if(cljs.core.truth_(inst_10484)){
var statearr_10505_10527 = state_10499__$1;
(statearr_10505_10527[(1)] = (8));

} else {
var statearr_10506_10528 = state_10499__$1;
(statearr_10506_10528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (3))){
var inst_10497 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10499__$1,inst_10497);
} else {
if((state_val_10500 === (12))){
var state_10499__$1 = state_10499;
var statearr_10507_10529 = state_10499__$1;
(statearr_10507_10529[(2)] = null);

(statearr_10507_10529[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (2))){
var inst_10476 = (state_10499[(7)]);
var state_10499__$1 = state_10499;
if(cljs.core.truth_(inst_10476)){
var statearr_10508_10530 = state_10499__$1;
(statearr_10508_10530[(1)] = (4));

} else {
var statearr_10509_10531 = state_10499__$1;
(statearr_10509_10531[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (11))){
var inst_10490 = cljs.core.async.close_BANG_.call(null,ch);
var state_10499__$1 = state_10499;
var statearr_10510_10532 = state_10499__$1;
(statearr_10510_10532[(2)] = inst_10490);

(statearr_10510_10532[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (9))){
var state_10499__$1 = state_10499;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10511_10533 = state_10499__$1;
(statearr_10511_10533[(1)] = (11));

} else {
var statearr_10512_10534 = state_10499__$1;
(statearr_10512_10534[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (5))){
var inst_10476 = (state_10499[(7)]);
var state_10499__$1 = state_10499;
var statearr_10513_10535 = state_10499__$1;
(statearr_10513_10535[(2)] = inst_10476);

(statearr_10513_10535[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (10))){
var inst_10495 = (state_10499[(2)]);
var state_10499__$1 = state_10499;
var statearr_10514_10536 = state_10499__$1;
(statearr_10514_10536[(2)] = inst_10495);

(statearr_10514_10536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10500 === (8))){
var inst_10476 = (state_10499[(7)]);
var inst_10486 = cljs.core.next.call(null,inst_10476);
var inst_10476__$1 = inst_10486;
var state_10499__$1 = (function (){var statearr_10515 = state_10499;
(statearr_10515[(7)] = inst_10476__$1);

return statearr_10515;
})();
var statearr_10516_10537 = state_10499__$1;
(statearr_10516_10537[(2)] = null);

(statearr_10516_10537[(1)] = (2));


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
});})(c__6876__auto__))
;
return ((function (switch__6820__auto__,c__6876__auto__){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_10520 = [null,null,null,null,null,null,null,null];
(statearr_10520[(0)] = state_machine__6821__auto__);

(statearr_10520[(1)] = (1));

return statearr_10520;
});
var state_machine__6821__auto____1 = (function (state_10499){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_10499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e10521){if((e10521 instanceof Object)){
var ex__6824__auto__ = e10521;
var statearr_10522_10538 = state_10499;
(statearr_10522_10538[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10539 = state_10499;
state_10499 = G__10539;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_10499){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_10499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto__))
})();
var state__6878__auto__ = (function (){var statearr_10523 = f__6877__auto__.call(null);
(statearr_10523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto__);

return statearr_10523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto__))
);

return c__6876__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj10541 = {};
return obj10541;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3760__auto__ = _;
if(and__3760__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4416__auto__ = (((_ == null))?null:_);
return (function (){var or__3772__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj10543 = {};
return obj10543;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t10765 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t10765 = (function (cs,ch,mult,meta10766){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10766 = meta10766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10765.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t10765.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t10765.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t10765.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t10765.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t10765.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t10765.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10767){
var self__ = this;
var _10767__$1 = this;
return self__.meta10766;
});})(cs))
;

cljs.core.async.t10765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10767,meta10766__$1){
var self__ = this;
var _10767__$1 = this;
return (new cljs.core.async.t10765(self__.cs,self__.ch,self__.mult,meta10766__$1));
});})(cs))
;

cljs.core.async.t10765.cljs$lang$type = true;

cljs.core.async.t10765.cljs$lang$ctorStr = "cljs.core.async/t10765";

cljs.core.async.t10765.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t10765");
});})(cs))
;

cljs.core.async.__GT_t10765 = ((function (cs){
return (function __GT_t10765(cs__$1,ch__$1,mult__$1,meta10766){
return (new cljs.core.async.t10765(cs__$1,ch__$1,mult__$1,meta10766));
});})(cs))
;

}

return (new cljs.core.async.t10765(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6876__auto___10986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___10986,cs,m,dchan,dctr,done){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___10986,cs,m,dchan,dctr,done){
return (function (state_10898){
var state_val_10899 = (state_10898[(1)]);
if((state_val_10899 === (7))){
var inst_10894 = (state_10898[(2)]);
var state_10898__$1 = state_10898;
var statearr_10900_10987 = state_10898__$1;
(statearr_10900_10987[(2)] = inst_10894);

(statearr_10900_10987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (20))){
var inst_10799 = (state_10898[(7)]);
var inst_10809 = cljs.core.first.call(null,inst_10799);
var inst_10810 = cljs.core.nth.call(null,inst_10809,(0),null);
var inst_10811 = cljs.core.nth.call(null,inst_10809,(1),null);
var state_10898__$1 = (function (){var statearr_10901 = state_10898;
(statearr_10901[(8)] = inst_10810);

return statearr_10901;
})();
if(cljs.core.truth_(inst_10811)){
var statearr_10902_10988 = state_10898__$1;
(statearr_10902_10988[(1)] = (22));

} else {
var statearr_10903_10989 = state_10898__$1;
(statearr_10903_10989[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (27))){
var inst_10846 = (state_10898[(9)]);
var inst_10839 = (state_10898[(10)]);
var inst_10770 = (state_10898[(11)]);
var inst_10841 = (state_10898[(12)]);
var inst_10846__$1 = cljs.core._nth.call(null,inst_10839,inst_10841);
var inst_10847 = cljs.core.async.put_BANG_.call(null,inst_10846__$1,inst_10770,done);
var state_10898__$1 = (function (){var statearr_10904 = state_10898;
(statearr_10904[(9)] = inst_10846__$1);

return statearr_10904;
})();
if(cljs.core.truth_(inst_10847)){
var statearr_10905_10990 = state_10898__$1;
(statearr_10905_10990[(1)] = (30));

} else {
var statearr_10906_10991 = state_10898__$1;
(statearr_10906_10991[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (1))){
var state_10898__$1 = state_10898;
var statearr_10907_10992 = state_10898__$1;
(statearr_10907_10992[(2)] = null);

(statearr_10907_10992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (24))){
var inst_10799 = (state_10898[(7)]);
var inst_10816 = (state_10898[(2)]);
var inst_10817 = cljs.core.next.call(null,inst_10799);
var inst_10779 = inst_10817;
var inst_10780 = null;
var inst_10781 = (0);
var inst_10782 = (0);
var state_10898__$1 = (function (){var statearr_10908 = state_10898;
(statearr_10908[(13)] = inst_10781);

(statearr_10908[(14)] = inst_10779);

(statearr_10908[(15)] = inst_10780);

(statearr_10908[(16)] = inst_10816);

(statearr_10908[(17)] = inst_10782);

return statearr_10908;
})();
var statearr_10909_10993 = state_10898__$1;
(statearr_10909_10993[(2)] = null);

(statearr_10909_10993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (39))){
var state_10898__$1 = state_10898;
var statearr_10913_10994 = state_10898__$1;
(statearr_10913_10994[(2)] = null);

(statearr_10913_10994[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (4))){
var inst_10770 = (state_10898[(11)]);
var inst_10770__$1 = (state_10898[(2)]);
var inst_10771 = (inst_10770__$1 == null);
var state_10898__$1 = (function (){var statearr_10914 = state_10898;
(statearr_10914[(11)] = inst_10770__$1);

return statearr_10914;
})();
if(cljs.core.truth_(inst_10771)){
var statearr_10915_10995 = state_10898__$1;
(statearr_10915_10995[(1)] = (5));

} else {
var statearr_10916_10996 = state_10898__$1;
(statearr_10916_10996[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (15))){
var inst_10781 = (state_10898[(13)]);
var inst_10779 = (state_10898[(14)]);
var inst_10780 = (state_10898[(15)]);
var inst_10782 = (state_10898[(17)]);
var inst_10795 = (state_10898[(2)]);
var inst_10796 = (inst_10782 + (1));
var tmp10910 = inst_10781;
var tmp10911 = inst_10779;
var tmp10912 = inst_10780;
var inst_10779__$1 = tmp10911;
var inst_10780__$1 = tmp10912;
var inst_10781__$1 = tmp10910;
var inst_10782__$1 = inst_10796;
var state_10898__$1 = (function (){var statearr_10917 = state_10898;
(statearr_10917[(13)] = inst_10781__$1);

(statearr_10917[(14)] = inst_10779__$1);

(statearr_10917[(18)] = inst_10795);

(statearr_10917[(15)] = inst_10780__$1);

(statearr_10917[(17)] = inst_10782__$1);

return statearr_10917;
})();
var statearr_10918_10997 = state_10898__$1;
(statearr_10918_10997[(2)] = null);

(statearr_10918_10997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (21))){
var inst_10820 = (state_10898[(2)]);
var state_10898__$1 = state_10898;
var statearr_10922_10998 = state_10898__$1;
(statearr_10922_10998[(2)] = inst_10820);

(statearr_10922_10998[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (31))){
var inst_10846 = (state_10898[(9)]);
var inst_10850 = done.call(null,null);
var inst_10851 = cljs.core.async.untap_STAR_.call(null,m,inst_10846);
var state_10898__$1 = (function (){var statearr_10923 = state_10898;
(statearr_10923[(19)] = inst_10850);

return statearr_10923;
})();
var statearr_10924_10999 = state_10898__$1;
(statearr_10924_10999[(2)] = inst_10851);

(statearr_10924_10999[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (32))){
var inst_10840 = (state_10898[(20)]);
var inst_10839 = (state_10898[(10)]);
var inst_10838 = (state_10898[(21)]);
var inst_10841 = (state_10898[(12)]);
var inst_10853 = (state_10898[(2)]);
var inst_10854 = (inst_10841 + (1));
var tmp10919 = inst_10840;
var tmp10920 = inst_10839;
var tmp10921 = inst_10838;
var inst_10838__$1 = tmp10921;
var inst_10839__$1 = tmp10920;
var inst_10840__$1 = tmp10919;
var inst_10841__$1 = inst_10854;
var state_10898__$1 = (function (){var statearr_10925 = state_10898;
(statearr_10925[(22)] = inst_10853);

(statearr_10925[(20)] = inst_10840__$1);

(statearr_10925[(10)] = inst_10839__$1);

(statearr_10925[(21)] = inst_10838__$1);

(statearr_10925[(12)] = inst_10841__$1);

return statearr_10925;
})();
var statearr_10926_11000 = state_10898__$1;
(statearr_10926_11000[(2)] = null);

(statearr_10926_11000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (40))){
var inst_10866 = (state_10898[(23)]);
var inst_10870 = done.call(null,null);
var inst_10871 = cljs.core.async.untap_STAR_.call(null,m,inst_10866);
var state_10898__$1 = (function (){var statearr_10927 = state_10898;
(statearr_10927[(24)] = inst_10870);

return statearr_10927;
})();
var statearr_10928_11001 = state_10898__$1;
(statearr_10928_11001[(2)] = inst_10871);

(statearr_10928_11001[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (33))){
var inst_10857 = (state_10898[(25)]);
var inst_10859 = cljs.core.chunked_seq_QMARK_.call(null,inst_10857);
var state_10898__$1 = state_10898;
if(inst_10859){
var statearr_10929_11002 = state_10898__$1;
(statearr_10929_11002[(1)] = (36));

} else {
var statearr_10930_11003 = state_10898__$1;
(statearr_10930_11003[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (13))){
var inst_10789 = (state_10898[(26)]);
var inst_10792 = cljs.core.async.close_BANG_.call(null,inst_10789);
var state_10898__$1 = state_10898;
var statearr_10931_11004 = state_10898__$1;
(statearr_10931_11004[(2)] = inst_10792);

(statearr_10931_11004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (22))){
var inst_10810 = (state_10898[(8)]);
var inst_10813 = cljs.core.async.close_BANG_.call(null,inst_10810);
var state_10898__$1 = state_10898;
var statearr_10932_11005 = state_10898__$1;
(statearr_10932_11005[(2)] = inst_10813);

(statearr_10932_11005[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (36))){
var inst_10857 = (state_10898[(25)]);
var inst_10861 = cljs.core.chunk_first.call(null,inst_10857);
var inst_10862 = cljs.core.chunk_rest.call(null,inst_10857);
var inst_10863 = cljs.core.count.call(null,inst_10861);
var inst_10838 = inst_10862;
var inst_10839 = inst_10861;
var inst_10840 = inst_10863;
var inst_10841 = (0);
var state_10898__$1 = (function (){var statearr_10933 = state_10898;
(statearr_10933[(20)] = inst_10840);

(statearr_10933[(10)] = inst_10839);

(statearr_10933[(21)] = inst_10838);

(statearr_10933[(12)] = inst_10841);

return statearr_10933;
})();
var statearr_10934_11006 = state_10898__$1;
(statearr_10934_11006[(2)] = null);

(statearr_10934_11006[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (41))){
var inst_10857 = (state_10898[(25)]);
var inst_10873 = (state_10898[(2)]);
var inst_10874 = cljs.core.next.call(null,inst_10857);
var inst_10838 = inst_10874;
var inst_10839 = null;
var inst_10840 = (0);
var inst_10841 = (0);
var state_10898__$1 = (function (){var statearr_10935 = state_10898;
(statearr_10935[(20)] = inst_10840);

(statearr_10935[(10)] = inst_10839);

(statearr_10935[(21)] = inst_10838);

(statearr_10935[(27)] = inst_10873);

(statearr_10935[(12)] = inst_10841);

return statearr_10935;
})();
var statearr_10936_11007 = state_10898__$1;
(statearr_10936_11007[(2)] = null);

(statearr_10936_11007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (43))){
var state_10898__$1 = state_10898;
var statearr_10937_11008 = state_10898__$1;
(statearr_10937_11008[(2)] = null);

(statearr_10937_11008[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (29))){
var inst_10882 = (state_10898[(2)]);
var state_10898__$1 = state_10898;
var statearr_10938_11009 = state_10898__$1;
(statearr_10938_11009[(2)] = inst_10882);

(statearr_10938_11009[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (44))){
var inst_10891 = (state_10898[(2)]);
var state_10898__$1 = (function (){var statearr_10939 = state_10898;
(statearr_10939[(28)] = inst_10891);

return statearr_10939;
})();
var statearr_10940_11010 = state_10898__$1;
(statearr_10940_11010[(2)] = null);

(statearr_10940_11010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (6))){
var inst_10830 = (state_10898[(29)]);
var inst_10829 = cljs.core.deref.call(null,cs);
var inst_10830__$1 = cljs.core.keys.call(null,inst_10829);
var inst_10831 = cljs.core.count.call(null,inst_10830__$1);
var inst_10832 = cljs.core.reset_BANG_.call(null,dctr,inst_10831);
var inst_10837 = cljs.core.seq.call(null,inst_10830__$1);
var inst_10838 = inst_10837;
var inst_10839 = null;
var inst_10840 = (0);
var inst_10841 = (0);
var state_10898__$1 = (function (){var statearr_10941 = state_10898;
(statearr_10941[(29)] = inst_10830__$1);

(statearr_10941[(20)] = inst_10840);

(statearr_10941[(30)] = inst_10832);

(statearr_10941[(10)] = inst_10839);

(statearr_10941[(21)] = inst_10838);

(statearr_10941[(12)] = inst_10841);

return statearr_10941;
})();
var statearr_10942_11011 = state_10898__$1;
(statearr_10942_11011[(2)] = null);

(statearr_10942_11011[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (28))){
var inst_10857 = (state_10898[(25)]);
var inst_10838 = (state_10898[(21)]);
var inst_10857__$1 = cljs.core.seq.call(null,inst_10838);
var state_10898__$1 = (function (){var statearr_10943 = state_10898;
(statearr_10943[(25)] = inst_10857__$1);

return statearr_10943;
})();
if(inst_10857__$1){
var statearr_10944_11012 = state_10898__$1;
(statearr_10944_11012[(1)] = (33));

} else {
var statearr_10945_11013 = state_10898__$1;
(statearr_10945_11013[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (25))){
var inst_10840 = (state_10898[(20)]);
var inst_10841 = (state_10898[(12)]);
var inst_10843 = (inst_10841 < inst_10840);
var inst_10844 = inst_10843;
var state_10898__$1 = state_10898;
if(cljs.core.truth_(inst_10844)){
var statearr_10946_11014 = state_10898__$1;
(statearr_10946_11014[(1)] = (27));

} else {
var statearr_10947_11015 = state_10898__$1;
(statearr_10947_11015[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (34))){
var state_10898__$1 = state_10898;
var statearr_10948_11016 = state_10898__$1;
(statearr_10948_11016[(2)] = null);

(statearr_10948_11016[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (17))){
var state_10898__$1 = state_10898;
var statearr_10949_11017 = state_10898__$1;
(statearr_10949_11017[(2)] = null);

(statearr_10949_11017[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (3))){
var inst_10896 = (state_10898[(2)]);
var state_10898__$1 = state_10898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10898__$1,inst_10896);
} else {
if((state_val_10899 === (12))){
var inst_10825 = (state_10898[(2)]);
var state_10898__$1 = state_10898;
var statearr_10950_11018 = state_10898__$1;
(statearr_10950_11018[(2)] = inst_10825);

(statearr_10950_11018[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (2))){
var state_10898__$1 = state_10898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10898__$1,(4),ch);
} else {
if((state_val_10899 === (23))){
var state_10898__$1 = state_10898;
var statearr_10951_11019 = state_10898__$1;
(statearr_10951_11019[(2)] = null);

(statearr_10951_11019[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (35))){
var inst_10880 = (state_10898[(2)]);
var state_10898__$1 = state_10898;
var statearr_10952_11020 = state_10898__$1;
(statearr_10952_11020[(2)] = inst_10880);

(statearr_10952_11020[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (19))){
var inst_10799 = (state_10898[(7)]);
var inst_10803 = cljs.core.chunk_first.call(null,inst_10799);
var inst_10804 = cljs.core.chunk_rest.call(null,inst_10799);
var inst_10805 = cljs.core.count.call(null,inst_10803);
var inst_10779 = inst_10804;
var inst_10780 = inst_10803;
var inst_10781 = inst_10805;
var inst_10782 = (0);
var state_10898__$1 = (function (){var statearr_10953 = state_10898;
(statearr_10953[(13)] = inst_10781);

(statearr_10953[(14)] = inst_10779);

(statearr_10953[(15)] = inst_10780);

(statearr_10953[(17)] = inst_10782);

return statearr_10953;
})();
var statearr_10954_11021 = state_10898__$1;
(statearr_10954_11021[(2)] = null);

(statearr_10954_11021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (11))){
var inst_10779 = (state_10898[(14)]);
var inst_10799 = (state_10898[(7)]);
var inst_10799__$1 = cljs.core.seq.call(null,inst_10779);
var state_10898__$1 = (function (){var statearr_10955 = state_10898;
(statearr_10955[(7)] = inst_10799__$1);

return statearr_10955;
})();
if(inst_10799__$1){
var statearr_10956_11022 = state_10898__$1;
(statearr_10956_11022[(1)] = (16));

} else {
var statearr_10957_11023 = state_10898__$1;
(statearr_10957_11023[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (9))){
var inst_10827 = (state_10898[(2)]);
var state_10898__$1 = state_10898;
var statearr_10958_11024 = state_10898__$1;
(statearr_10958_11024[(2)] = inst_10827);

(statearr_10958_11024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (5))){
var inst_10777 = cljs.core.deref.call(null,cs);
var inst_10778 = cljs.core.seq.call(null,inst_10777);
var inst_10779 = inst_10778;
var inst_10780 = null;
var inst_10781 = (0);
var inst_10782 = (0);
var state_10898__$1 = (function (){var statearr_10959 = state_10898;
(statearr_10959[(13)] = inst_10781);

(statearr_10959[(14)] = inst_10779);

(statearr_10959[(15)] = inst_10780);

(statearr_10959[(17)] = inst_10782);

return statearr_10959;
})();
var statearr_10960_11025 = state_10898__$1;
(statearr_10960_11025[(2)] = null);

(statearr_10960_11025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (14))){
var state_10898__$1 = state_10898;
var statearr_10961_11026 = state_10898__$1;
(statearr_10961_11026[(2)] = null);

(statearr_10961_11026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (45))){
var inst_10888 = (state_10898[(2)]);
var state_10898__$1 = state_10898;
var statearr_10962_11027 = state_10898__$1;
(statearr_10962_11027[(2)] = inst_10888);

(statearr_10962_11027[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (26))){
var inst_10830 = (state_10898[(29)]);
var inst_10884 = (state_10898[(2)]);
var inst_10885 = cljs.core.seq.call(null,inst_10830);
var state_10898__$1 = (function (){var statearr_10963 = state_10898;
(statearr_10963[(31)] = inst_10884);

return statearr_10963;
})();
if(inst_10885){
var statearr_10964_11028 = state_10898__$1;
(statearr_10964_11028[(1)] = (42));

} else {
var statearr_10965_11029 = state_10898__$1;
(statearr_10965_11029[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (16))){
var inst_10799 = (state_10898[(7)]);
var inst_10801 = cljs.core.chunked_seq_QMARK_.call(null,inst_10799);
var state_10898__$1 = state_10898;
if(inst_10801){
var statearr_10966_11030 = state_10898__$1;
(statearr_10966_11030[(1)] = (19));

} else {
var statearr_10967_11031 = state_10898__$1;
(statearr_10967_11031[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (38))){
var inst_10877 = (state_10898[(2)]);
var state_10898__$1 = state_10898;
var statearr_10968_11032 = state_10898__$1;
(statearr_10968_11032[(2)] = inst_10877);

(statearr_10968_11032[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (30))){
var state_10898__$1 = state_10898;
var statearr_10969_11033 = state_10898__$1;
(statearr_10969_11033[(2)] = null);

(statearr_10969_11033[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (10))){
var inst_10780 = (state_10898[(15)]);
var inst_10782 = (state_10898[(17)]);
var inst_10788 = cljs.core._nth.call(null,inst_10780,inst_10782);
var inst_10789 = cljs.core.nth.call(null,inst_10788,(0),null);
var inst_10790 = cljs.core.nth.call(null,inst_10788,(1),null);
var state_10898__$1 = (function (){var statearr_10970 = state_10898;
(statearr_10970[(26)] = inst_10789);

return statearr_10970;
})();
if(cljs.core.truth_(inst_10790)){
var statearr_10971_11034 = state_10898__$1;
(statearr_10971_11034[(1)] = (13));

} else {
var statearr_10972_11035 = state_10898__$1;
(statearr_10972_11035[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (18))){
var inst_10823 = (state_10898[(2)]);
var state_10898__$1 = state_10898;
var statearr_10973_11036 = state_10898__$1;
(statearr_10973_11036[(2)] = inst_10823);

(statearr_10973_11036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (42))){
var state_10898__$1 = state_10898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10898__$1,(45),dchan);
} else {
if((state_val_10899 === (37))){
var inst_10857 = (state_10898[(25)]);
var inst_10866 = (state_10898[(23)]);
var inst_10770 = (state_10898[(11)]);
var inst_10866__$1 = cljs.core.first.call(null,inst_10857);
var inst_10867 = cljs.core.async.put_BANG_.call(null,inst_10866__$1,inst_10770,done);
var state_10898__$1 = (function (){var statearr_10974 = state_10898;
(statearr_10974[(23)] = inst_10866__$1);

return statearr_10974;
})();
if(cljs.core.truth_(inst_10867)){
var statearr_10975_11037 = state_10898__$1;
(statearr_10975_11037[(1)] = (39));

} else {
var statearr_10976_11038 = state_10898__$1;
(statearr_10976_11038[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10899 === (8))){
var inst_10781 = (state_10898[(13)]);
var inst_10782 = (state_10898[(17)]);
var inst_10784 = (inst_10782 < inst_10781);
var inst_10785 = inst_10784;
var state_10898__$1 = state_10898;
if(cljs.core.truth_(inst_10785)){
var statearr_10977_11039 = state_10898__$1;
(statearr_10977_11039[(1)] = (10));

} else {
var statearr_10978_11040 = state_10898__$1;
(statearr_10978_11040[(1)] = (11));

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
});})(c__6876__auto___10986,cs,m,dchan,dctr,done))
;
return ((function (switch__6820__auto__,c__6876__auto___10986,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_10982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10982[(0)] = state_machine__6821__auto__);

(statearr_10982[(1)] = (1));

return statearr_10982;
});
var state_machine__6821__auto____1 = (function (state_10898){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_10898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e10983){if((e10983 instanceof Object)){
var ex__6824__auto__ = e10983;
var statearr_10984_11041 = state_10898;
(statearr_10984_11041[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11042 = state_10898;
state_10898 = G__11042;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_10898){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_10898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___10986,cs,m,dchan,dctr,done))
})();
var state__6878__auto__ = (function (){var statearr_10985 = f__6877__auto__.call(null);
(statearr_10985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___10986);

return statearr_10985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___10986,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj11044 = {};
return obj11044;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__11045){
var map__11050 = p__11045;
var map__11050__$1 = ((cljs.core.seq_QMARK_.call(null,map__11050))?cljs.core.apply.call(null,cljs.core.hash_map,map__11050):map__11050);
var opts = map__11050__$1;
var statearr_11051_11054 = state;
(statearr_11051_11054[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__11050,map__11050__$1,opts){
return (function (val){
var statearr_11052_11055 = state;
(statearr_11052_11055[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11050,map__11050__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_11053_11056 = state;
(statearr_11053_11056[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__11045 = null;
if (arguments.length > 3) {
var G__11057__i = 0, G__11057__a = new Array(arguments.length -  3);
while (G__11057__i < G__11057__a.length) {G__11057__a[G__11057__i] = arguments[G__11057__i + 3]; ++G__11057__i;}
  p__11045 = new cljs.core.IndexedSeq(G__11057__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__11045);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__11058){
var state = cljs.core.first(arglist__11058);
arglist__11058 = cljs.core.next(arglist__11058);
var cont_block = cljs.core.first(arglist__11058);
arglist__11058 = cljs.core.next(arglist__11058);
var ports = cljs.core.first(arglist__11058);
var p__11045 = cljs.core.rest(arglist__11058);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__11045);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t11178 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11178 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11179){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11179 = meta11179;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11178.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t11178.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11178.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11178.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11178.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11178.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11178.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11178.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11178.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11180){
var self__ = this;
var _11180__$1 = this;
return self__.meta11179;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11180,meta11179__$1){
var self__ = this;
var _11180__$1 = this;
return (new cljs.core.async.t11178(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11179__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t11178.cljs$lang$type = true;

cljs.core.async.t11178.cljs$lang$ctorStr = "cljs.core.async/t11178";

cljs.core.async.t11178.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t11178");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t11178 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11178(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11179){
return (new cljs.core.async.t11178(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11179));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t11178(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/out/cljs/core/async.cljs"], null)));
})()
;
var c__6876__auto___11297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___11297,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___11297,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11250){
var state_val_11251 = (state_11250[(1)]);
if((state_val_11251 === (7))){
var inst_11194 = (state_11250[(7)]);
var inst_11199 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11194);
var state_11250__$1 = state_11250;
var statearr_11252_11298 = state_11250__$1;
(statearr_11252_11298[(2)] = inst_11199);

(statearr_11252_11298[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (20))){
var inst_11209 = (state_11250[(8)]);
var state_11250__$1 = state_11250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11250__$1,(23),out,inst_11209);
} else {
if((state_val_11251 === (1))){
var inst_11184 = (state_11250[(9)]);
var inst_11184__$1 = calc_state.call(null);
var inst_11185 = cljs.core.seq_QMARK_.call(null,inst_11184__$1);
var state_11250__$1 = (function (){var statearr_11253 = state_11250;
(statearr_11253[(9)] = inst_11184__$1);

return statearr_11253;
})();
if(inst_11185){
var statearr_11254_11299 = state_11250__$1;
(statearr_11254_11299[(1)] = (2));

} else {
var statearr_11255_11300 = state_11250__$1;
(statearr_11255_11300[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (24))){
var inst_11202 = (state_11250[(10)]);
var inst_11194 = inst_11202;
var state_11250__$1 = (function (){var statearr_11256 = state_11250;
(statearr_11256[(7)] = inst_11194);

return statearr_11256;
})();
var statearr_11257_11301 = state_11250__$1;
(statearr_11257_11301[(2)] = null);

(statearr_11257_11301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (4))){
var inst_11184 = (state_11250[(9)]);
var inst_11190 = (state_11250[(2)]);
var inst_11191 = cljs.core.get.call(null,inst_11190,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11192 = cljs.core.get.call(null,inst_11190,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11193 = cljs.core.get.call(null,inst_11190,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11194 = inst_11184;
var state_11250__$1 = (function (){var statearr_11258 = state_11250;
(statearr_11258[(11)] = inst_11192);

(statearr_11258[(7)] = inst_11194);

(statearr_11258[(12)] = inst_11193);

(statearr_11258[(13)] = inst_11191);

return statearr_11258;
})();
var statearr_11259_11302 = state_11250__$1;
(statearr_11259_11302[(2)] = null);

(statearr_11259_11302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (15))){
var state_11250__$1 = state_11250;
var statearr_11260_11303 = state_11250__$1;
(statearr_11260_11303[(2)] = null);

(statearr_11260_11303[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (21))){
var inst_11202 = (state_11250[(10)]);
var inst_11194 = inst_11202;
var state_11250__$1 = (function (){var statearr_11261 = state_11250;
(statearr_11261[(7)] = inst_11194);

return statearr_11261;
})();
var statearr_11262_11304 = state_11250__$1;
(statearr_11262_11304[(2)] = null);

(statearr_11262_11304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (13))){
var inst_11246 = (state_11250[(2)]);
var state_11250__$1 = state_11250;
var statearr_11263_11305 = state_11250__$1;
(statearr_11263_11305[(2)] = inst_11246);

(statearr_11263_11305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (22))){
var inst_11244 = (state_11250[(2)]);
var state_11250__$1 = state_11250;
var statearr_11264_11306 = state_11250__$1;
(statearr_11264_11306[(2)] = inst_11244);

(statearr_11264_11306[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (6))){
var inst_11248 = (state_11250[(2)]);
var state_11250__$1 = state_11250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11250__$1,inst_11248);
} else {
if((state_val_11251 === (25))){
var state_11250__$1 = state_11250;
var statearr_11265_11307 = state_11250__$1;
(statearr_11265_11307[(2)] = null);

(statearr_11265_11307[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (17))){
var inst_11224 = (state_11250[(14)]);
var state_11250__$1 = state_11250;
var statearr_11266_11308 = state_11250__$1;
(statearr_11266_11308[(2)] = inst_11224);

(statearr_11266_11308[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (3))){
var inst_11184 = (state_11250[(9)]);
var state_11250__$1 = state_11250;
var statearr_11267_11309 = state_11250__$1;
(statearr_11267_11309[(2)] = inst_11184);

(statearr_11267_11309[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (12))){
var inst_11205 = (state_11250[(15)]);
var inst_11210 = (state_11250[(16)]);
var inst_11224 = (state_11250[(14)]);
var inst_11224__$1 = inst_11205.call(null,inst_11210);
var state_11250__$1 = (function (){var statearr_11268 = state_11250;
(statearr_11268[(14)] = inst_11224__$1);

return statearr_11268;
})();
if(cljs.core.truth_(inst_11224__$1)){
var statearr_11269_11310 = state_11250__$1;
(statearr_11269_11310[(1)] = (17));

} else {
var statearr_11270_11311 = state_11250__$1;
(statearr_11270_11311[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (2))){
var inst_11184 = (state_11250[(9)]);
var inst_11187 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11184);
var state_11250__$1 = state_11250;
var statearr_11271_11312 = state_11250__$1;
(statearr_11271_11312[(2)] = inst_11187);

(statearr_11271_11312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (23))){
var inst_11235 = (state_11250[(2)]);
var state_11250__$1 = state_11250;
if(cljs.core.truth_(inst_11235)){
var statearr_11272_11313 = state_11250__$1;
(statearr_11272_11313[(1)] = (24));

} else {
var statearr_11273_11314 = state_11250__$1;
(statearr_11273_11314[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (19))){
var inst_11232 = (state_11250[(2)]);
var state_11250__$1 = state_11250;
if(cljs.core.truth_(inst_11232)){
var statearr_11274_11315 = state_11250__$1;
(statearr_11274_11315[(1)] = (20));

} else {
var statearr_11275_11316 = state_11250__$1;
(statearr_11275_11316[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (11))){
var inst_11209 = (state_11250[(8)]);
var inst_11215 = (inst_11209 == null);
var state_11250__$1 = state_11250;
if(cljs.core.truth_(inst_11215)){
var statearr_11276_11317 = state_11250__$1;
(statearr_11276_11317[(1)] = (14));

} else {
var statearr_11277_11318 = state_11250__$1;
(statearr_11277_11318[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (9))){
var inst_11202 = (state_11250[(10)]);
var inst_11202__$1 = (state_11250[(2)]);
var inst_11203 = cljs.core.get.call(null,inst_11202__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11204 = cljs.core.get.call(null,inst_11202__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11205 = cljs.core.get.call(null,inst_11202__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_11250__$1 = (function (){var statearr_11278 = state_11250;
(statearr_11278[(15)] = inst_11205);

(statearr_11278[(17)] = inst_11204);

(statearr_11278[(10)] = inst_11202__$1);

return statearr_11278;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11250__$1,(10),inst_11203);
} else {
if((state_val_11251 === (5))){
var inst_11194 = (state_11250[(7)]);
var inst_11197 = cljs.core.seq_QMARK_.call(null,inst_11194);
var state_11250__$1 = state_11250;
if(inst_11197){
var statearr_11279_11319 = state_11250__$1;
(statearr_11279_11319[(1)] = (7));

} else {
var statearr_11280_11320 = state_11250__$1;
(statearr_11280_11320[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (14))){
var inst_11210 = (state_11250[(16)]);
var inst_11217 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11210);
var state_11250__$1 = state_11250;
var statearr_11281_11321 = state_11250__$1;
(statearr_11281_11321[(2)] = inst_11217);

(statearr_11281_11321[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (26))){
var inst_11240 = (state_11250[(2)]);
var state_11250__$1 = state_11250;
var statearr_11282_11322 = state_11250__$1;
(statearr_11282_11322[(2)] = inst_11240);

(statearr_11282_11322[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (16))){
var inst_11220 = (state_11250[(2)]);
var inst_11221 = calc_state.call(null);
var inst_11194 = inst_11221;
var state_11250__$1 = (function (){var statearr_11283 = state_11250;
(statearr_11283[(18)] = inst_11220);

(statearr_11283[(7)] = inst_11194);

return statearr_11283;
})();
var statearr_11284_11323 = state_11250__$1;
(statearr_11284_11323[(2)] = null);

(statearr_11284_11323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (10))){
var inst_11209 = (state_11250[(8)]);
var inst_11210 = (state_11250[(16)]);
var inst_11208 = (state_11250[(2)]);
var inst_11209__$1 = cljs.core.nth.call(null,inst_11208,(0),null);
var inst_11210__$1 = cljs.core.nth.call(null,inst_11208,(1),null);
var inst_11211 = (inst_11209__$1 == null);
var inst_11212 = cljs.core._EQ_.call(null,inst_11210__$1,change);
var inst_11213 = (inst_11211) || (inst_11212);
var state_11250__$1 = (function (){var statearr_11285 = state_11250;
(statearr_11285[(8)] = inst_11209__$1);

(statearr_11285[(16)] = inst_11210__$1);

return statearr_11285;
})();
if(cljs.core.truth_(inst_11213)){
var statearr_11286_11324 = state_11250__$1;
(statearr_11286_11324[(1)] = (11));

} else {
var statearr_11287_11325 = state_11250__$1;
(statearr_11287_11325[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (18))){
var inst_11205 = (state_11250[(15)]);
var inst_11204 = (state_11250[(17)]);
var inst_11210 = (state_11250[(16)]);
var inst_11227 = cljs.core.empty_QMARK_.call(null,inst_11205);
var inst_11228 = inst_11204.call(null,inst_11210);
var inst_11229 = cljs.core.not.call(null,inst_11228);
var inst_11230 = (inst_11227) && (inst_11229);
var state_11250__$1 = state_11250;
var statearr_11288_11326 = state_11250__$1;
(statearr_11288_11326[(2)] = inst_11230);

(statearr_11288_11326[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11251 === (8))){
var inst_11194 = (state_11250[(7)]);
var state_11250__$1 = state_11250;
var statearr_11289_11327 = state_11250__$1;
(statearr_11289_11327[(2)] = inst_11194);

(statearr_11289_11327[(1)] = (9));


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
});})(c__6876__auto___11297,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6820__auto__,c__6876__auto___11297,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_11293 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11293[(0)] = state_machine__6821__auto__);

(statearr_11293[(1)] = (1));

return statearr_11293;
});
var state_machine__6821__auto____1 = (function (state_11250){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_11250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e11294){if((e11294 instanceof Object)){
var ex__6824__auto__ = e11294;
var statearr_11295_11328 = state_11250;
(statearr_11295_11328[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11329 = state_11250;
state_11250 = G__11329;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_11250){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_11250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___11297,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6878__auto__ = (function (){var statearr_11296 = f__6877__auto__.call(null);
(statearr_11296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___11297);

return statearr_11296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___11297,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj11331 = {};
return obj11331;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3760__auto__ = p;
if(and__3760__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3760__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4416__auto__ = (((p == null))?null:p);
return (function (){var or__3772__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3760__auto__ = p;
if(and__3760__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3760__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4416__auto__ = (((p == null))?null:p);
return (function (){var or__3772__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3760__auto__ = p;
if(and__3760__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4416__auto__ = (((p == null))?null:p);
return (function (){var or__3772__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3760__auto__ = p;
if(and__3760__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4416__auto__ = (((p == null))?null:p);
return (function (){var or__3772__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3772__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3772__auto__,mults){
return (function (p1__11332_SHARP_){
if(cljs.core.truth_(p1__11332_SHARP_.call(null,topic))){
return p1__11332_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11332_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3772__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t11455 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11455 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11456){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11456 = meta11456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11455.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t11455.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t11455.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t11455.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t11455.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t11455.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t11455.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t11455.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11457){
var self__ = this;
var _11457__$1 = this;
return self__.meta11456;
});})(mults,ensure_mult))
;

cljs.core.async.t11455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11457,meta11456__$1){
var self__ = this;
var _11457__$1 = this;
return (new cljs.core.async.t11455(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11456__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t11455.cljs$lang$type = true;

cljs.core.async.t11455.cljs$lang$ctorStr = "cljs.core.async/t11455";

cljs.core.async.t11455.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t11455");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t11455 = ((function (mults,ensure_mult){
return (function __GT_t11455(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11456){
return (new cljs.core.async.t11455(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11456));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t11455(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/out/cljs/core/async.cljs"], null)));
})()
;
var c__6876__auto___11577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___11577,mults,ensure_mult,p){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___11577,mults,ensure_mult,p){
return (function (state_11529){
var state_val_11530 = (state_11529[(1)]);
if((state_val_11530 === (7))){
var inst_11525 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
var statearr_11531_11578 = state_11529__$1;
(statearr_11531_11578[(2)] = inst_11525);

(statearr_11531_11578[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (20))){
var state_11529__$1 = state_11529;
var statearr_11532_11579 = state_11529__$1;
(statearr_11532_11579[(2)] = null);

(statearr_11532_11579[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (1))){
var state_11529__$1 = state_11529;
var statearr_11533_11580 = state_11529__$1;
(statearr_11533_11580[(2)] = null);

(statearr_11533_11580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (24))){
var inst_11508 = (state_11529[(7)]);
var inst_11517 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11508);
var state_11529__$1 = state_11529;
var statearr_11534_11581 = state_11529__$1;
(statearr_11534_11581[(2)] = inst_11517);

(statearr_11534_11581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (4))){
var inst_11460 = (state_11529[(8)]);
var inst_11460__$1 = (state_11529[(2)]);
var inst_11461 = (inst_11460__$1 == null);
var state_11529__$1 = (function (){var statearr_11535 = state_11529;
(statearr_11535[(8)] = inst_11460__$1);

return statearr_11535;
})();
if(cljs.core.truth_(inst_11461)){
var statearr_11536_11582 = state_11529__$1;
(statearr_11536_11582[(1)] = (5));

} else {
var statearr_11537_11583 = state_11529__$1;
(statearr_11537_11583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (15))){
var inst_11502 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
var statearr_11538_11584 = state_11529__$1;
(statearr_11538_11584[(2)] = inst_11502);

(statearr_11538_11584[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (21))){
var inst_11522 = (state_11529[(2)]);
var state_11529__$1 = (function (){var statearr_11539 = state_11529;
(statearr_11539[(9)] = inst_11522);

return statearr_11539;
})();
var statearr_11540_11585 = state_11529__$1;
(statearr_11540_11585[(2)] = null);

(statearr_11540_11585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (13))){
var inst_11484 = (state_11529[(10)]);
var inst_11486 = cljs.core.chunked_seq_QMARK_.call(null,inst_11484);
var state_11529__$1 = state_11529;
if(inst_11486){
var statearr_11541_11586 = state_11529__$1;
(statearr_11541_11586[(1)] = (16));

} else {
var statearr_11542_11587 = state_11529__$1;
(statearr_11542_11587[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (22))){
var inst_11514 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
if(cljs.core.truth_(inst_11514)){
var statearr_11543_11588 = state_11529__$1;
(statearr_11543_11588[(1)] = (23));

} else {
var statearr_11544_11589 = state_11529__$1;
(statearr_11544_11589[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (6))){
var inst_11460 = (state_11529[(8)]);
var inst_11508 = (state_11529[(7)]);
var inst_11510 = (state_11529[(11)]);
var inst_11508__$1 = topic_fn.call(null,inst_11460);
var inst_11509 = cljs.core.deref.call(null,mults);
var inst_11510__$1 = cljs.core.get.call(null,inst_11509,inst_11508__$1);
var state_11529__$1 = (function (){var statearr_11545 = state_11529;
(statearr_11545[(7)] = inst_11508__$1);

(statearr_11545[(11)] = inst_11510__$1);

return statearr_11545;
})();
if(cljs.core.truth_(inst_11510__$1)){
var statearr_11546_11590 = state_11529__$1;
(statearr_11546_11590[(1)] = (19));

} else {
var statearr_11547_11591 = state_11529__$1;
(statearr_11547_11591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (25))){
var inst_11519 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
var statearr_11548_11592 = state_11529__$1;
(statearr_11548_11592[(2)] = inst_11519);

(statearr_11548_11592[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (17))){
var inst_11484 = (state_11529[(10)]);
var inst_11493 = cljs.core.first.call(null,inst_11484);
var inst_11494 = cljs.core.async.muxch_STAR_.call(null,inst_11493);
var inst_11495 = cljs.core.async.close_BANG_.call(null,inst_11494);
var inst_11496 = cljs.core.next.call(null,inst_11484);
var inst_11470 = inst_11496;
var inst_11471 = null;
var inst_11472 = (0);
var inst_11473 = (0);
var state_11529__$1 = (function (){var statearr_11549 = state_11529;
(statearr_11549[(12)] = inst_11472);

(statearr_11549[(13)] = inst_11471);

(statearr_11549[(14)] = inst_11470);

(statearr_11549[(15)] = inst_11495);

(statearr_11549[(16)] = inst_11473);

return statearr_11549;
})();
var statearr_11550_11593 = state_11529__$1;
(statearr_11550_11593[(2)] = null);

(statearr_11550_11593[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (3))){
var inst_11527 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11529__$1,inst_11527);
} else {
if((state_val_11530 === (12))){
var inst_11504 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
var statearr_11551_11594 = state_11529__$1;
(statearr_11551_11594[(2)] = inst_11504);

(statearr_11551_11594[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (2))){
var state_11529__$1 = state_11529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11529__$1,(4),ch);
} else {
if((state_val_11530 === (23))){
var state_11529__$1 = state_11529;
var statearr_11552_11595 = state_11529__$1;
(statearr_11552_11595[(2)] = null);

(statearr_11552_11595[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (19))){
var inst_11460 = (state_11529[(8)]);
var inst_11510 = (state_11529[(11)]);
var inst_11512 = cljs.core.async.muxch_STAR_.call(null,inst_11510);
var state_11529__$1 = state_11529;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11529__$1,(22),inst_11512,inst_11460);
} else {
if((state_val_11530 === (11))){
var inst_11484 = (state_11529[(10)]);
var inst_11470 = (state_11529[(14)]);
var inst_11484__$1 = cljs.core.seq.call(null,inst_11470);
var state_11529__$1 = (function (){var statearr_11553 = state_11529;
(statearr_11553[(10)] = inst_11484__$1);

return statearr_11553;
})();
if(inst_11484__$1){
var statearr_11554_11596 = state_11529__$1;
(statearr_11554_11596[(1)] = (13));

} else {
var statearr_11555_11597 = state_11529__$1;
(statearr_11555_11597[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (9))){
var inst_11506 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
var statearr_11556_11598 = state_11529__$1;
(statearr_11556_11598[(2)] = inst_11506);

(statearr_11556_11598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (5))){
var inst_11467 = cljs.core.deref.call(null,mults);
var inst_11468 = cljs.core.vals.call(null,inst_11467);
var inst_11469 = cljs.core.seq.call(null,inst_11468);
var inst_11470 = inst_11469;
var inst_11471 = null;
var inst_11472 = (0);
var inst_11473 = (0);
var state_11529__$1 = (function (){var statearr_11557 = state_11529;
(statearr_11557[(12)] = inst_11472);

(statearr_11557[(13)] = inst_11471);

(statearr_11557[(14)] = inst_11470);

(statearr_11557[(16)] = inst_11473);

return statearr_11557;
})();
var statearr_11558_11599 = state_11529__$1;
(statearr_11558_11599[(2)] = null);

(statearr_11558_11599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (14))){
var state_11529__$1 = state_11529;
var statearr_11562_11600 = state_11529__$1;
(statearr_11562_11600[(2)] = null);

(statearr_11562_11600[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (16))){
var inst_11484 = (state_11529[(10)]);
var inst_11488 = cljs.core.chunk_first.call(null,inst_11484);
var inst_11489 = cljs.core.chunk_rest.call(null,inst_11484);
var inst_11490 = cljs.core.count.call(null,inst_11488);
var inst_11470 = inst_11489;
var inst_11471 = inst_11488;
var inst_11472 = inst_11490;
var inst_11473 = (0);
var state_11529__$1 = (function (){var statearr_11563 = state_11529;
(statearr_11563[(12)] = inst_11472);

(statearr_11563[(13)] = inst_11471);

(statearr_11563[(14)] = inst_11470);

(statearr_11563[(16)] = inst_11473);

return statearr_11563;
})();
var statearr_11564_11601 = state_11529__$1;
(statearr_11564_11601[(2)] = null);

(statearr_11564_11601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (10))){
var inst_11472 = (state_11529[(12)]);
var inst_11471 = (state_11529[(13)]);
var inst_11470 = (state_11529[(14)]);
var inst_11473 = (state_11529[(16)]);
var inst_11478 = cljs.core._nth.call(null,inst_11471,inst_11473);
var inst_11479 = cljs.core.async.muxch_STAR_.call(null,inst_11478);
var inst_11480 = cljs.core.async.close_BANG_.call(null,inst_11479);
var inst_11481 = (inst_11473 + (1));
var tmp11559 = inst_11472;
var tmp11560 = inst_11471;
var tmp11561 = inst_11470;
var inst_11470__$1 = tmp11561;
var inst_11471__$1 = tmp11560;
var inst_11472__$1 = tmp11559;
var inst_11473__$1 = inst_11481;
var state_11529__$1 = (function (){var statearr_11565 = state_11529;
(statearr_11565[(17)] = inst_11480);

(statearr_11565[(12)] = inst_11472__$1);

(statearr_11565[(13)] = inst_11471__$1);

(statearr_11565[(14)] = inst_11470__$1);

(statearr_11565[(16)] = inst_11473__$1);

return statearr_11565;
})();
var statearr_11566_11602 = state_11529__$1;
(statearr_11566_11602[(2)] = null);

(statearr_11566_11602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (18))){
var inst_11499 = (state_11529[(2)]);
var state_11529__$1 = state_11529;
var statearr_11567_11603 = state_11529__$1;
(statearr_11567_11603[(2)] = inst_11499);

(statearr_11567_11603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11530 === (8))){
var inst_11472 = (state_11529[(12)]);
var inst_11473 = (state_11529[(16)]);
var inst_11475 = (inst_11473 < inst_11472);
var inst_11476 = inst_11475;
var state_11529__$1 = state_11529;
if(cljs.core.truth_(inst_11476)){
var statearr_11568_11604 = state_11529__$1;
(statearr_11568_11604[(1)] = (10));

} else {
var statearr_11569_11605 = state_11529__$1;
(statearr_11569_11605[(1)] = (11));

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
});})(c__6876__auto___11577,mults,ensure_mult,p))
;
return ((function (switch__6820__auto__,c__6876__auto___11577,mults,ensure_mult,p){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_11573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11573[(0)] = state_machine__6821__auto__);

(statearr_11573[(1)] = (1));

return statearr_11573;
});
var state_machine__6821__auto____1 = (function (state_11529){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_11529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e11574){if((e11574 instanceof Object)){
var ex__6824__auto__ = e11574;
var statearr_11575_11606 = state_11529;
(statearr_11575_11606[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11607 = state_11529;
state_11529 = G__11607;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_11529){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_11529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___11577,mults,ensure_mult,p))
})();
var state__6878__auto__ = (function (){var statearr_11576 = f__6877__auto__.call(null);
(statearr_11576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___11577);

return statearr_11576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___11577,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6876__auto___11744 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___11744,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___11744,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11714){
var state_val_11715 = (state_11714[(1)]);
if((state_val_11715 === (7))){
var state_11714__$1 = state_11714;
var statearr_11716_11745 = state_11714__$1;
(statearr_11716_11745[(2)] = null);

(statearr_11716_11745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (1))){
var state_11714__$1 = state_11714;
var statearr_11717_11746 = state_11714__$1;
(statearr_11717_11746[(2)] = null);

(statearr_11717_11746[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (4))){
var inst_11678 = (state_11714[(7)]);
var inst_11680 = (inst_11678 < cnt);
var state_11714__$1 = state_11714;
if(cljs.core.truth_(inst_11680)){
var statearr_11718_11747 = state_11714__$1;
(statearr_11718_11747[(1)] = (6));

} else {
var statearr_11719_11748 = state_11714__$1;
(statearr_11719_11748[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (15))){
var inst_11710 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
var statearr_11720_11749 = state_11714__$1;
(statearr_11720_11749[(2)] = inst_11710);

(statearr_11720_11749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (13))){
var inst_11703 = cljs.core.async.close_BANG_.call(null,out);
var state_11714__$1 = state_11714;
var statearr_11721_11750 = state_11714__$1;
(statearr_11721_11750[(2)] = inst_11703);

(statearr_11721_11750[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (6))){
var state_11714__$1 = state_11714;
var statearr_11722_11751 = state_11714__$1;
(statearr_11722_11751[(2)] = null);

(statearr_11722_11751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (3))){
var inst_11712 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11714__$1,inst_11712);
} else {
if((state_val_11715 === (12))){
var inst_11700 = (state_11714[(8)]);
var inst_11700__$1 = (state_11714[(2)]);
var inst_11701 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11700__$1);
var state_11714__$1 = (function (){var statearr_11723 = state_11714;
(statearr_11723[(8)] = inst_11700__$1);

return statearr_11723;
})();
if(cljs.core.truth_(inst_11701)){
var statearr_11724_11752 = state_11714__$1;
(statearr_11724_11752[(1)] = (13));

} else {
var statearr_11725_11753 = state_11714__$1;
(statearr_11725_11753[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (2))){
var inst_11677 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11678 = (0);
var state_11714__$1 = (function (){var statearr_11726 = state_11714;
(statearr_11726[(9)] = inst_11677);

(statearr_11726[(7)] = inst_11678);

return statearr_11726;
})();
var statearr_11727_11754 = state_11714__$1;
(statearr_11727_11754[(2)] = null);

(statearr_11727_11754[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (11))){
var inst_11678 = (state_11714[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11714,(10),Object,null,(9));
var inst_11687 = chs__$1.call(null,inst_11678);
var inst_11688 = done.call(null,inst_11678);
var inst_11689 = cljs.core.async.take_BANG_.call(null,inst_11687,inst_11688);
var state_11714__$1 = state_11714;
var statearr_11728_11755 = state_11714__$1;
(statearr_11728_11755[(2)] = inst_11689);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (9))){
var inst_11678 = (state_11714[(7)]);
var inst_11691 = (state_11714[(2)]);
var inst_11692 = (inst_11678 + (1));
var inst_11678__$1 = inst_11692;
var state_11714__$1 = (function (){var statearr_11729 = state_11714;
(statearr_11729[(10)] = inst_11691);

(statearr_11729[(7)] = inst_11678__$1);

return statearr_11729;
})();
var statearr_11730_11756 = state_11714__$1;
(statearr_11730_11756[(2)] = null);

(statearr_11730_11756[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (5))){
var inst_11698 = (state_11714[(2)]);
var state_11714__$1 = (function (){var statearr_11731 = state_11714;
(statearr_11731[(11)] = inst_11698);

return statearr_11731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11714__$1,(12),dchan);
} else {
if((state_val_11715 === (14))){
var inst_11700 = (state_11714[(8)]);
var inst_11705 = cljs.core.apply.call(null,f,inst_11700);
var state_11714__$1 = state_11714;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11714__$1,(16),out,inst_11705);
} else {
if((state_val_11715 === (16))){
var inst_11707 = (state_11714[(2)]);
var state_11714__$1 = (function (){var statearr_11732 = state_11714;
(statearr_11732[(12)] = inst_11707);

return statearr_11732;
})();
var statearr_11733_11757 = state_11714__$1;
(statearr_11733_11757[(2)] = null);

(statearr_11733_11757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (10))){
var inst_11682 = (state_11714[(2)]);
var inst_11683 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11714__$1 = (function (){var statearr_11734 = state_11714;
(statearr_11734[(13)] = inst_11682);

return statearr_11734;
})();
var statearr_11735_11758 = state_11714__$1;
(statearr_11735_11758[(2)] = inst_11683);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11714__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11715 === (8))){
var inst_11696 = (state_11714[(2)]);
var state_11714__$1 = state_11714;
var statearr_11736_11759 = state_11714__$1;
(statearr_11736_11759[(2)] = inst_11696);

(statearr_11736_11759[(1)] = (5));


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
});})(c__6876__auto___11744,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6820__auto__,c__6876__auto___11744,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_11740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11740[(0)] = state_machine__6821__auto__);

(statearr_11740[(1)] = (1));

return statearr_11740;
});
var state_machine__6821__auto____1 = (function (state_11714){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_11714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e11741){if((e11741 instanceof Object)){
var ex__6824__auto__ = e11741;
var statearr_11742_11760 = state_11714;
(statearr_11742_11760[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11761 = state_11714;
state_11714 = G__11761;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_11714){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_11714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___11744,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6878__auto__ = (function (){var statearr_11743 = f__6877__auto__.call(null);
(statearr_11743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___11744);

return statearr_11743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___11744,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6876__auto___11869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___11869,out){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___11869,out){
return (function (state_11845){
var state_val_11846 = (state_11845[(1)]);
if((state_val_11846 === (7))){
var inst_11825 = (state_11845[(7)]);
var inst_11824 = (state_11845[(8)]);
var inst_11824__$1 = (state_11845[(2)]);
var inst_11825__$1 = cljs.core.nth.call(null,inst_11824__$1,(0),null);
var inst_11826 = cljs.core.nth.call(null,inst_11824__$1,(1),null);
var inst_11827 = (inst_11825__$1 == null);
var state_11845__$1 = (function (){var statearr_11847 = state_11845;
(statearr_11847[(9)] = inst_11826);

(statearr_11847[(7)] = inst_11825__$1);

(statearr_11847[(8)] = inst_11824__$1);

return statearr_11847;
})();
if(cljs.core.truth_(inst_11827)){
var statearr_11848_11870 = state_11845__$1;
(statearr_11848_11870[(1)] = (8));

} else {
var statearr_11849_11871 = state_11845__$1;
(statearr_11849_11871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (1))){
var inst_11816 = cljs.core.vec.call(null,chs);
var inst_11817 = inst_11816;
var state_11845__$1 = (function (){var statearr_11850 = state_11845;
(statearr_11850[(10)] = inst_11817);

return statearr_11850;
})();
var statearr_11851_11872 = state_11845__$1;
(statearr_11851_11872[(2)] = null);

(statearr_11851_11872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (4))){
var inst_11817 = (state_11845[(10)]);
var state_11845__$1 = state_11845;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11845__$1,(7),inst_11817);
} else {
if((state_val_11846 === (6))){
var inst_11841 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11852_11873 = state_11845__$1;
(statearr_11852_11873[(2)] = inst_11841);

(statearr_11852_11873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (3))){
var inst_11843 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11845__$1,inst_11843);
} else {
if((state_val_11846 === (2))){
var inst_11817 = (state_11845[(10)]);
var inst_11819 = cljs.core.count.call(null,inst_11817);
var inst_11820 = (inst_11819 > (0));
var state_11845__$1 = state_11845;
if(cljs.core.truth_(inst_11820)){
var statearr_11854_11874 = state_11845__$1;
(statearr_11854_11874[(1)] = (4));

} else {
var statearr_11855_11875 = state_11845__$1;
(statearr_11855_11875[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (11))){
var inst_11817 = (state_11845[(10)]);
var inst_11834 = (state_11845[(2)]);
var tmp11853 = inst_11817;
var inst_11817__$1 = tmp11853;
var state_11845__$1 = (function (){var statearr_11856 = state_11845;
(statearr_11856[(11)] = inst_11834);

(statearr_11856[(10)] = inst_11817__$1);

return statearr_11856;
})();
var statearr_11857_11876 = state_11845__$1;
(statearr_11857_11876[(2)] = null);

(statearr_11857_11876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (9))){
var inst_11825 = (state_11845[(7)]);
var state_11845__$1 = state_11845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11845__$1,(11),out,inst_11825);
} else {
if((state_val_11846 === (5))){
var inst_11839 = cljs.core.async.close_BANG_.call(null,out);
var state_11845__$1 = state_11845;
var statearr_11858_11877 = state_11845__$1;
(statearr_11858_11877[(2)] = inst_11839);

(statearr_11858_11877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (10))){
var inst_11837 = (state_11845[(2)]);
var state_11845__$1 = state_11845;
var statearr_11859_11878 = state_11845__$1;
(statearr_11859_11878[(2)] = inst_11837);

(statearr_11859_11878[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11846 === (8))){
var inst_11826 = (state_11845[(9)]);
var inst_11825 = (state_11845[(7)]);
var inst_11824 = (state_11845[(8)]);
var inst_11817 = (state_11845[(10)]);
var inst_11829 = (function (){var c = inst_11826;
var v = inst_11825;
var vec__11822 = inst_11824;
var cs = inst_11817;
return ((function (c,v,vec__11822,cs,inst_11826,inst_11825,inst_11824,inst_11817,state_val_11846,c__6876__auto___11869,out){
return (function (p1__11762_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11762_SHARP_);
});
;})(c,v,vec__11822,cs,inst_11826,inst_11825,inst_11824,inst_11817,state_val_11846,c__6876__auto___11869,out))
})();
var inst_11830 = cljs.core.filterv.call(null,inst_11829,inst_11817);
var inst_11817__$1 = inst_11830;
var state_11845__$1 = (function (){var statearr_11860 = state_11845;
(statearr_11860[(10)] = inst_11817__$1);

return statearr_11860;
})();
var statearr_11861_11879 = state_11845__$1;
(statearr_11861_11879[(2)] = null);

(statearr_11861_11879[(1)] = (2));


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
});})(c__6876__auto___11869,out))
;
return ((function (switch__6820__auto__,c__6876__auto___11869,out){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_11865 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11865[(0)] = state_machine__6821__auto__);

(statearr_11865[(1)] = (1));

return statearr_11865;
});
var state_machine__6821__auto____1 = (function (state_11845){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_11845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e11866){if((e11866 instanceof Object)){
var ex__6824__auto__ = e11866;
var statearr_11867_11880 = state_11845;
(statearr_11867_11880[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11881 = state_11845;
state_11845 = G__11881;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_11845){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_11845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___11869,out))
})();
var state__6878__auto__ = (function (){var statearr_11868 = f__6877__auto__.call(null);
(statearr_11868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___11869);

return statearr_11868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___11869,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6876__auto___11974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___11974,out){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___11974,out){
return (function (state_11951){
var state_val_11952 = (state_11951[(1)]);
if((state_val_11952 === (7))){
var inst_11933 = (state_11951[(7)]);
var inst_11933__$1 = (state_11951[(2)]);
var inst_11934 = (inst_11933__$1 == null);
var inst_11935 = cljs.core.not.call(null,inst_11934);
var state_11951__$1 = (function (){var statearr_11953 = state_11951;
(statearr_11953[(7)] = inst_11933__$1);

return statearr_11953;
})();
if(inst_11935){
var statearr_11954_11975 = state_11951__$1;
(statearr_11954_11975[(1)] = (8));

} else {
var statearr_11955_11976 = state_11951__$1;
(statearr_11955_11976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (1))){
var inst_11928 = (0);
var state_11951__$1 = (function (){var statearr_11956 = state_11951;
(statearr_11956[(8)] = inst_11928);

return statearr_11956;
})();
var statearr_11957_11977 = state_11951__$1;
(statearr_11957_11977[(2)] = null);

(statearr_11957_11977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (4))){
var state_11951__$1 = state_11951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11951__$1,(7),ch);
} else {
if((state_val_11952 === (6))){
var inst_11946 = (state_11951[(2)]);
var state_11951__$1 = state_11951;
var statearr_11958_11978 = state_11951__$1;
(statearr_11958_11978[(2)] = inst_11946);

(statearr_11958_11978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (3))){
var inst_11948 = (state_11951[(2)]);
var inst_11949 = cljs.core.async.close_BANG_.call(null,out);
var state_11951__$1 = (function (){var statearr_11959 = state_11951;
(statearr_11959[(9)] = inst_11948);

return statearr_11959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11951__$1,inst_11949);
} else {
if((state_val_11952 === (2))){
var inst_11928 = (state_11951[(8)]);
var inst_11930 = (inst_11928 < n);
var state_11951__$1 = state_11951;
if(cljs.core.truth_(inst_11930)){
var statearr_11960_11979 = state_11951__$1;
(statearr_11960_11979[(1)] = (4));

} else {
var statearr_11961_11980 = state_11951__$1;
(statearr_11961_11980[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (11))){
var inst_11928 = (state_11951[(8)]);
var inst_11938 = (state_11951[(2)]);
var inst_11939 = (inst_11928 + (1));
var inst_11928__$1 = inst_11939;
var state_11951__$1 = (function (){var statearr_11962 = state_11951;
(statearr_11962[(8)] = inst_11928__$1);

(statearr_11962[(10)] = inst_11938);

return statearr_11962;
})();
var statearr_11963_11981 = state_11951__$1;
(statearr_11963_11981[(2)] = null);

(statearr_11963_11981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (9))){
var state_11951__$1 = state_11951;
var statearr_11964_11982 = state_11951__$1;
(statearr_11964_11982[(2)] = null);

(statearr_11964_11982[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (5))){
var state_11951__$1 = state_11951;
var statearr_11965_11983 = state_11951__$1;
(statearr_11965_11983[(2)] = null);

(statearr_11965_11983[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (10))){
var inst_11943 = (state_11951[(2)]);
var state_11951__$1 = state_11951;
var statearr_11966_11984 = state_11951__$1;
(statearr_11966_11984[(2)] = inst_11943);

(statearr_11966_11984[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11952 === (8))){
var inst_11933 = (state_11951[(7)]);
var state_11951__$1 = state_11951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11951__$1,(11),out,inst_11933);
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
});})(c__6876__auto___11974,out))
;
return ((function (switch__6820__auto__,c__6876__auto___11974,out){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_11970 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11970[(0)] = state_machine__6821__auto__);

(statearr_11970[(1)] = (1));

return statearr_11970;
});
var state_machine__6821__auto____1 = (function (state_11951){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_11951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e11971){if((e11971 instanceof Object)){
var ex__6824__auto__ = e11971;
var statearr_11972_11985 = state_11951;
(statearr_11972_11985[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11986 = state_11951;
state_11951 = G__11986;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_11951){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_11951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___11974,out))
})();
var state__6878__auto__ = (function (){var statearr_11973 = f__6877__auto__.call(null);
(statearr_11973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___11974);

return statearr_11973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___11974,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t11994 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11994 = (function (ch,f,map_LT_,meta11995){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11995 = meta11995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11994.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t11994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t11994.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t11994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t11997 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t11997 = (function (fn1,_,meta11995,map_LT_,f,ch,meta11998){
this.fn1 = fn1;
this._ = _;
this.meta11995 = meta11995;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11998 = meta11998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11997.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t11997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t11997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11987_SHARP_){
return f1.call(null,(((p1__11987_SHARP_ == null))?null:self__.f.call(null,p1__11987_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t11997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11999){
var self__ = this;
var _11999__$1 = this;
return self__.meta11998;
});})(___$1))
;

cljs.core.async.t11997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11999,meta11998__$1){
var self__ = this;
var _11999__$1 = this;
return (new cljs.core.async.t11997(self__.fn1,self__._,self__.meta11995,self__.map_LT_,self__.f,self__.ch,meta11998__$1));
});})(___$1))
;

cljs.core.async.t11997.cljs$lang$type = true;

cljs.core.async.t11997.cljs$lang$ctorStr = "cljs.core.async/t11997";

cljs.core.async.t11997.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t11997");
});})(___$1))
;

cljs.core.async.__GT_t11997 = ((function (___$1){
return (function __GT_t11997(fn1__$1,___$2,meta11995__$1,map_LT___$1,f__$1,ch__$1,meta11998){
return (new cljs.core.async.t11997(fn1__$1,___$2,meta11995__$1,map_LT___$1,f__$1,ch__$1,meta11998));
});})(___$1))
;

}

return (new cljs.core.async.t11997(fn1,___$1,self__.meta11995,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3760__auto__ = ret;
if(cljs.core.truth_(and__3760__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3760__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t11994.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t11994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t11994.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t11994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11996){
var self__ = this;
var _11996__$1 = this;
return self__.meta11995;
});

cljs.core.async.t11994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11996,meta11995__$1){
var self__ = this;
var _11996__$1 = this;
return (new cljs.core.async.t11994(self__.ch,self__.f,self__.map_LT_,meta11995__$1));
});

cljs.core.async.t11994.cljs$lang$type = true;

cljs.core.async.t11994.cljs$lang$ctorStr = "cljs.core.async/t11994";

cljs.core.async.t11994.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t11994");
});

cljs.core.async.__GT_t11994 = (function __GT_t11994(ch__$1,f__$1,map_LT___$1,meta11995){
return (new cljs.core.async.t11994(ch__$1,f__$1,map_LT___$1,meta11995));
});

}

return (new cljs.core.async.t11994(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t12003 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12003 = (function (ch,f,map_GT_,meta12004){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12004 = meta12004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12003.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12003.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t12003.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12003.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12003.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12003.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12005){
var self__ = this;
var _12005__$1 = this;
return self__.meta12004;
});

cljs.core.async.t12003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12005,meta12004__$1){
var self__ = this;
var _12005__$1 = this;
return (new cljs.core.async.t12003(self__.ch,self__.f,self__.map_GT_,meta12004__$1));
});

cljs.core.async.t12003.cljs$lang$type = true;

cljs.core.async.t12003.cljs$lang$ctorStr = "cljs.core.async/t12003";

cljs.core.async.t12003.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t12003");
});

cljs.core.async.__GT_t12003 = (function __GT_t12003(ch__$1,f__$1,map_GT___$1,meta12004){
return (new cljs.core.async.t12003(ch__$1,f__$1,map_GT___$1,meta12004));
});

}

return (new cljs.core.async.t12003(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t12009 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t12009 = (function (ch,p,filter_GT_,meta12010){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12010 = meta12010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12009.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t12009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t12009.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t12009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t12009.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t12009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t12009.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t12009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12011){
var self__ = this;
var _12011__$1 = this;
return self__.meta12010;
});

cljs.core.async.t12009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12011,meta12010__$1){
var self__ = this;
var _12011__$1 = this;
return (new cljs.core.async.t12009(self__.ch,self__.p,self__.filter_GT_,meta12010__$1));
});

cljs.core.async.t12009.cljs$lang$type = true;

cljs.core.async.t12009.cljs$lang$ctorStr = "cljs.core.async/t12009";

cljs.core.async.t12009.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t12009");
});

cljs.core.async.__GT_t12009 = (function __GT_t12009(ch__$1,p__$1,filter_GT___$1,meta12010){
return (new cljs.core.async.t12009(ch__$1,p__$1,filter_GT___$1,meta12010));
});

}

return (new cljs.core.async.t12009(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6876__auto___12094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___12094,out){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___12094,out){
return (function (state_12073){
var state_val_12074 = (state_12073[(1)]);
if((state_val_12074 === (7))){
var inst_12069 = (state_12073[(2)]);
var state_12073__$1 = state_12073;
var statearr_12075_12095 = state_12073__$1;
(statearr_12075_12095[(2)] = inst_12069);

(statearr_12075_12095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12074 === (1))){
var state_12073__$1 = state_12073;
var statearr_12076_12096 = state_12073__$1;
(statearr_12076_12096[(2)] = null);

(statearr_12076_12096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12074 === (4))){
var inst_12055 = (state_12073[(7)]);
var inst_12055__$1 = (state_12073[(2)]);
var inst_12056 = (inst_12055__$1 == null);
var state_12073__$1 = (function (){var statearr_12077 = state_12073;
(statearr_12077[(7)] = inst_12055__$1);

return statearr_12077;
})();
if(cljs.core.truth_(inst_12056)){
var statearr_12078_12097 = state_12073__$1;
(statearr_12078_12097[(1)] = (5));

} else {
var statearr_12079_12098 = state_12073__$1;
(statearr_12079_12098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12074 === (6))){
var inst_12055 = (state_12073[(7)]);
var inst_12060 = p.call(null,inst_12055);
var state_12073__$1 = state_12073;
if(cljs.core.truth_(inst_12060)){
var statearr_12080_12099 = state_12073__$1;
(statearr_12080_12099[(1)] = (8));

} else {
var statearr_12081_12100 = state_12073__$1;
(statearr_12081_12100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12074 === (3))){
var inst_12071 = (state_12073[(2)]);
var state_12073__$1 = state_12073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12073__$1,inst_12071);
} else {
if((state_val_12074 === (2))){
var state_12073__$1 = state_12073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12073__$1,(4),ch);
} else {
if((state_val_12074 === (11))){
var inst_12063 = (state_12073[(2)]);
var state_12073__$1 = state_12073;
var statearr_12082_12101 = state_12073__$1;
(statearr_12082_12101[(2)] = inst_12063);

(statearr_12082_12101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12074 === (9))){
var state_12073__$1 = state_12073;
var statearr_12083_12102 = state_12073__$1;
(statearr_12083_12102[(2)] = null);

(statearr_12083_12102[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12074 === (5))){
var inst_12058 = cljs.core.async.close_BANG_.call(null,out);
var state_12073__$1 = state_12073;
var statearr_12084_12103 = state_12073__$1;
(statearr_12084_12103[(2)] = inst_12058);

(statearr_12084_12103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12074 === (10))){
var inst_12066 = (state_12073[(2)]);
var state_12073__$1 = (function (){var statearr_12085 = state_12073;
(statearr_12085[(8)] = inst_12066);

return statearr_12085;
})();
var statearr_12086_12104 = state_12073__$1;
(statearr_12086_12104[(2)] = null);

(statearr_12086_12104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12074 === (8))){
var inst_12055 = (state_12073[(7)]);
var state_12073__$1 = state_12073;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12073__$1,(11),out,inst_12055);
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
});})(c__6876__auto___12094,out))
;
return ((function (switch__6820__auto__,c__6876__auto___12094,out){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_12090 = [null,null,null,null,null,null,null,null,null];
(statearr_12090[(0)] = state_machine__6821__auto__);

(statearr_12090[(1)] = (1));

return statearr_12090;
});
var state_machine__6821__auto____1 = (function (state_12073){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_12073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e12091){if((e12091 instanceof Object)){
var ex__6824__auto__ = e12091;
var statearr_12092_12105 = state_12073;
(statearr_12092_12105[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12106 = state_12073;
state_12073 = G__12106;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_12073){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_12073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___12094,out))
})();
var state__6878__auto__ = (function (){var statearr_12093 = f__6877__auto__.call(null);
(statearr_12093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___12094);

return statearr_12093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___12094,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6876__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto__){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto__){
return (function (state_12272){
var state_val_12273 = (state_12272[(1)]);
if((state_val_12273 === (7))){
var inst_12268 = (state_12272[(2)]);
var state_12272__$1 = state_12272;
var statearr_12274_12315 = state_12272__$1;
(statearr_12274_12315[(2)] = inst_12268);

(statearr_12274_12315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (20))){
var inst_12238 = (state_12272[(7)]);
var inst_12249 = (state_12272[(2)]);
var inst_12250 = cljs.core.next.call(null,inst_12238);
var inst_12224 = inst_12250;
var inst_12225 = null;
var inst_12226 = (0);
var inst_12227 = (0);
var state_12272__$1 = (function (){var statearr_12275 = state_12272;
(statearr_12275[(8)] = inst_12227);

(statearr_12275[(9)] = inst_12249);

(statearr_12275[(10)] = inst_12226);

(statearr_12275[(11)] = inst_12224);

(statearr_12275[(12)] = inst_12225);

return statearr_12275;
})();
var statearr_12276_12316 = state_12272__$1;
(statearr_12276_12316[(2)] = null);

(statearr_12276_12316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (1))){
var state_12272__$1 = state_12272;
var statearr_12277_12317 = state_12272__$1;
(statearr_12277_12317[(2)] = null);

(statearr_12277_12317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (4))){
var inst_12213 = (state_12272[(13)]);
var inst_12213__$1 = (state_12272[(2)]);
var inst_12214 = (inst_12213__$1 == null);
var state_12272__$1 = (function (){var statearr_12278 = state_12272;
(statearr_12278[(13)] = inst_12213__$1);

return statearr_12278;
})();
if(cljs.core.truth_(inst_12214)){
var statearr_12279_12318 = state_12272__$1;
(statearr_12279_12318[(1)] = (5));

} else {
var statearr_12280_12319 = state_12272__$1;
(statearr_12280_12319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (15))){
var state_12272__$1 = state_12272;
var statearr_12284_12320 = state_12272__$1;
(statearr_12284_12320[(2)] = null);

(statearr_12284_12320[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (21))){
var state_12272__$1 = state_12272;
var statearr_12285_12321 = state_12272__$1;
(statearr_12285_12321[(2)] = null);

(statearr_12285_12321[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (13))){
var inst_12227 = (state_12272[(8)]);
var inst_12226 = (state_12272[(10)]);
var inst_12224 = (state_12272[(11)]);
var inst_12225 = (state_12272[(12)]);
var inst_12234 = (state_12272[(2)]);
var inst_12235 = (inst_12227 + (1));
var tmp12281 = inst_12226;
var tmp12282 = inst_12224;
var tmp12283 = inst_12225;
var inst_12224__$1 = tmp12282;
var inst_12225__$1 = tmp12283;
var inst_12226__$1 = tmp12281;
var inst_12227__$1 = inst_12235;
var state_12272__$1 = (function (){var statearr_12286 = state_12272;
(statearr_12286[(8)] = inst_12227__$1);

(statearr_12286[(10)] = inst_12226__$1);

(statearr_12286[(11)] = inst_12224__$1);

(statearr_12286[(12)] = inst_12225__$1);

(statearr_12286[(14)] = inst_12234);

return statearr_12286;
})();
var statearr_12287_12322 = state_12272__$1;
(statearr_12287_12322[(2)] = null);

(statearr_12287_12322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (22))){
var state_12272__$1 = state_12272;
var statearr_12288_12323 = state_12272__$1;
(statearr_12288_12323[(2)] = null);

(statearr_12288_12323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (6))){
var inst_12213 = (state_12272[(13)]);
var inst_12222 = f.call(null,inst_12213);
var inst_12223 = cljs.core.seq.call(null,inst_12222);
var inst_12224 = inst_12223;
var inst_12225 = null;
var inst_12226 = (0);
var inst_12227 = (0);
var state_12272__$1 = (function (){var statearr_12289 = state_12272;
(statearr_12289[(8)] = inst_12227);

(statearr_12289[(10)] = inst_12226);

(statearr_12289[(11)] = inst_12224);

(statearr_12289[(12)] = inst_12225);

return statearr_12289;
})();
var statearr_12290_12324 = state_12272__$1;
(statearr_12290_12324[(2)] = null);

(statearr_12290_12324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (17))){
var inst_12238 = (state_12272[(7)]);
var inst_12242 = cljs.core.chunk_first.call(null,inst_12238);
var inst_12243 = cljs.core.chunk_rest.call(null,inst_12238);
var inst_12244 = cljs.core.count.call(null,inst_12242);
var inst_12224 = inst_12243;
var inst_12225 = inst_12242;
var inst_12226 = inst_12244;
var inst_12227 = (0);
var state_12272__$1 = (function (){var statearr_12291 = state_12272;
(statearr_12291[(8)] = inst_12227);

(statearr_12291[(10)] = inst_12226);

(statearr_12291[(11)] = inst_12224);

(statearr_12291[(12)] = inst_12225);

return statearr_12291;
})();
var statearr_12292_12325 = state_12272__$1;
(statearr_12292_12325[(2)] = null);

(statearr_12292_12325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (3))){
var inst_12270 = (state_12272[(2)]);
var state_12272__$1 = state_12272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12272__$1,inst_12270);
} else {
if((state_val_12273 === (12))){
var inst_12258 = (state_12272[(2)]);
var state_12272__$1 = state_12272;
var statearr_12293_12326 = state_12272__$1;
(statearr_12293_12326[(2)] = inst_12258);

(statearr_12293_12326[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (2))){
var state_12272__$1 = state_12272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12272__$1,(4),in$);
} else {
if((state_val_12273 === (23))){
var inst_12266 = (state_12272[(2)]);
var state_12272__$1 = state_12272;
var statearr_12294_12327 = state_12272__$1;
(statearr_12294_12327[(2)] = inst_12266);

(statearr_12294_12327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (19))){
var inst_12253 = (state_12272[(2)]);
var state_12272__$1 = state_12272;
var statearr_12295_12328 = state_12272__$1;
(statearr_12295_12328[(2)] = inst_12253);

(statearr_12295_12328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (11))){
var inst_12224 = (state_12272[(11)]);
var inst_12238 = (state_12272[(7)]);
var inst_12238__$1 = cljs.core.seq.call(null,inst_12224);
var state_12272__$1 = (function (){var statearr_12296 = state_12272;
(statearr_12296[(7)] = inst_12238__$1);

return statearr_12296;
})();
if(inst_12238__$1){
var statearr_12297_12329 = state_12272__$1;
(statearr_12297_12329[(1)] = (14));

} else {
var statearr_12298_12330 = state_12272__$1;
(statearr_12298_12330[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (9))){
var inst_12260 = (state_12272[(2)]);
var inst_12261 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12272__$1 = (function (){var statearr_12299 = state_12272;
(statearr_12299[(15)] = inst_12260);

return statearr_12299;
})();
if(cljs.core.truth_(inst_12261)){
var statearr_12300_12331 = state_12272__$1;
(statearr_12300_12331[(1)] = (21));

} else {
var statearr_12301_12332 = state_12272__$1;
(statearr_12301_12332[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (5))){
var inst_12216 = cljs.core.async.close_BANG_.call(null,out);
var state_12272__$1 = state_12272;
var statearr_12302_12333 = state_12272__$1;
(statearr_12302_12333[(2)] = inst_12216);

(statearr_12302_12333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (14))){
var inst_12238 = (state_12272[(7)]);
var inst_12240 = cljs.core.chunked_seq_QMARK_.call(null,inst_12238);
var state_12272__$1 = state_12272;
if(inst_12240){
var statearr_12303_12334 = state_12272__$1;
(statearr_12303_12334[(1)] = (17));

} else {
var statearr_12304_12335 = state_12272__$1;
(statearr_12304_12335[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (16))){
var inst_12256 = (state_12272[(2)]);
var state_12272__$1 = state_12272;
var statearr_12305_12336 = state_12272__$1;
(statearr_12305_12336[(2)] = inst_12256);

(statearr_12305_12336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12273 === (10))){
var inst_12227 = (state_12272[(8)]);
var inst_12225 = (state_12272[(12)]);
var inst_12232 = cljs.core._nth.call(null,inst_12225,inst_12227);
var state_12272__$1 = state_12272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12272__$1,(13),out,inst_12232);
} else {
if((state_val_12273 === (18))){
var inst_12238 = (state_12272[(7)]);
var inst_12247 = cljs.core.first.call(null,inst_12238);
var state_12272__$1 = state_12272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12272__$1,(20),out,inst_12247);
} else {
if((state_val_12273 === (8))){
var inst_12227 = (state_12272[(8)]);
var inst_12226 = (state_12272[(10)]);
var inst_12229 = (inst_12227 < inst_12226);
var inst_12230 = inst_12229;
var state_12272__$1 = state_12272;
if(cljs.core.truth_(inst_12230)){
var statearr_12306_12337 = state_12272__$1;
(statearr_12306_12337[(1)] = (10));

} else {
var statearr_12307_12338 = state_12272__$1;
(statearr_12307_12338[(1)] = (11));

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
});})(c__6876__auto__))
;
return ((function (switch__6820__auto__,c__6876__auto__){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_12311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12311[(0)] = state_machine__6821__auto__);

(statearr_12311[(1)] = (1));

return statearr_12311;
});
var state_machine__6821__auto____1 = (function (state_12272){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_12272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e12312){if((e12312 instanceof Object)){
var ex__6824__auto__ = e12312;
var statearr_12313_12339 = state_12272;
(statearr_12313_12339[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12340 = state_12272;
state_12272 = G__12340;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_12272){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_12272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto__))
})();
var state__6878__auto__ = (function (){var statearr_12314 = f__6877__auto__.call(null);
(statearr_12314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto__);

return statearr_12314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto__))
);

return c__6876__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6876__auto___12437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___12437,out){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___12437,out){
return (function (state_12412){
var state_val_12413 = (state_12412[(1)]);
if((state_val_12413 === (7))){
var inst_12407 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12414_12438 = state_12412__$1;
(statearr_12414_12438[(2)] = inst_12407);

(statearr_12414_12438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (1))){
var inst_12389 = null;
var state_12412__$1 = (function (){var statearr_12415 = state_12412;
(statearr_12415[(7)] = inst_12389);

return statearr_12415;
})();
var statearr_12416_12439 = state_12412__$1;
(statearr_12416_12439[(2)] = null);

(statearr_12416_12439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (4))){
var inst_12392 = (state_12412[(8)]);
var inst_12392__$1 = (state_12412[(2)]);
var inst_12393 = (inst_12392__$1 == null);
var inst_12394 = cljs.core.not.call(null,inst_12393);
var state_12412__$1 = (function (){var statearr_12417 = state_12412;
(statearr_12417[(8)] = inst_12392__$1);

return statearr_12417;
})();
if(inst_12394){
var statearr_12418_12440 = state_12412__$1;
(statearr_12418_12440[(1)] = (5));

} else {
var statearr_12419_12441 = state_12412__$1;
(statearr_12419_12441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (6))){
var state_12412__$1 = state_12412;
var statearr_12420_12442 = state_12412__$1;
(statearr_12420_12442[(2)] = null);

(statearr_12420_12442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (3))){
var inst_12409 = (state_12412[(2)]);
var inst_12410 = cljs.core.async.close_BANG_.call(null,out);
var state_12412__$1 = (function (){var statearr_12421 = state_12412;
(statearr_12421[(9)] = inst_12409);

return statearr_12421;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12412__$1,inst_12410);
} else {
if((state_val_12413 === (2))){
var state_12412__$1 = state_12412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12412__$1,(4),ch);
} else {
if((state_val_12413 === (11))){
var inst_12392 = (state_12412[(8)]);
var inst_12401 = (state_12412[(2)]);
var inst_12389 = inst_12392;
var state_12412__$1 = (function (){var statearr_12422 = state_12412;
(statearr_12422[(10)] = inst_12401);

(statearr_12422[(7)] = inst_12389);

return statearr_12422;
})();
var statearr_12423_12443 = state_12412__$1;
(statearr_12423_12443[(2)] = null);

(statearr_12423_12443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (9))){
var inst_12392 = (state_12412[(8)]);
var state_12412__$1 = state_12412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12412__$1,(11),out,inst_12392);
} else {
if((state_val_12413 === (5))){
var inst_12389 = (state_12412[(7)]);
var inst_12392 = (state_12412[(8)]);
var inst_12396 = cljs.core._EQ_.call(null,inst_12392,inst_12389);
var state_12412__$1 = state_12412;
if(inst_12396){
var statearr_12425_12444 = state_12412__$1;
(statearr_12425_12444[(1)] = (8));

} else {
var statearr_12426_12445 = state_12412__$1;
(statearr_12426_12445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (10))){
var inst_12404 = (state_12412[(2)]);
var state_12412__$1 = state_12412;
var statearr_12427_12446 = state_12412__$1;
(statearr_12427_12446[(2)] = inst_12404);

(statearr_12427_12446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12413 === (8))){
var inst_12389 = (state_12412[(7)]);
var tmp12424 = inst_12389;
var inst_12389__$1 = tmp12424;
var state_12412__$1 = (function (){var statearr_12428 = state_12412;
(statearr_12428[(7)] = inst_12389__$1);

return statearr_12428;
})();
var statearr_12429_12447 = state_12412__$1;
(statearr_12429_12447[(2)] = null);

(statearr_12429_12447[(1)] = (2));


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
});})(c__6876__auto___12437,out))
;
return ((function (switch__6820__auto__,c__6876__auto___12437,out){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_12433 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12433[(0)] = state_machine__6821__auto__);

(statearr_12433[(1)] = (1));

return statearr_12433;
});
var state_machine__6821__auto____1 = (function (state_12412){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_12412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e12434){if((e12434 instanceof Object)){
var ex__6824__auto__ = e12434;
var statearr_12435_12448 = state_12412;
(statearr_12435_12448[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12449 = state_12412;
state_12412 = G__12449;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_12412){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_12412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___12437,out))
})();
var state__6878__auto__ = (function (){var statearr_12436 = f__6877__auto__.call(null);
(statearr_12436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___12437);

return statearr_12436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___12437,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6876__auto___12584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___12584,out){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___12584,out){
return (function (state_12554){
var state_val_12555 = (state_12554[(1)]);
if((state_val_12555 === (7))){
var inst_12550 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
var statearr_12556_12585 = state_12554__$1;
(statearr_12556_12585[(2)] = inst_12550);

(statearr_12556_12585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (1))){
var inst_12517 = (new Array(n));
var inst_12518 = inst_12517;
var inst_12519 = (0);
var state_12554__$1 = (function (){var statearr_12557 = state_12554;
(statearr_12557[(7)] = inst_12518);

(statearr_12557[(8)] = inst_12519);

return statearr_12557;
})();
var statearr_12558_12586 = state_12554__$1;
(statearr_12558_12586[(2)] = null);

(statearr_12558_12586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (4))){
var inst_12522 = (state_12554[(9)]);
var inst_12522__$1 = (state_12554[(2)]);
var inst_12523 = (inst_12522__$1 == null);
var inst_12524 = cljs.core.not.call(null,inst_12523);
var state_12554__$1 = (function (){var statearr_12559 = state_12554;
(statearr_12559[(9)] = inst_12522__$1);

return statearr_12559;
})();
if(inst_12524){
var statearr_12560_12587 = state_12554__$1;
(statearr_12560_12587[(1)] = (5));

} else {
var statearr_12561_12588 = state_12554__$1;
(statearr_12561_12588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (15))){
var inst_12544 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
var statearr_12562_12589 = state_12554__$1;
(statearr_12562_12589[(2)] = inst_12544);

(statearr_12562_12589[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (13))){
var state_12554__$1 = state_12554;
var statearr_12563_12590 = state_12554__$1;
(statearr_12563_12590[(2)] = null);

(statearr_12563_12590[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (6))){
var inst_12519 = (state_12554[(8)]);
var inst_12540 = (inst_12519 > (0));
var state_12554__$1 = state_12554;
if(cljs.core.truth_(inst_12540)){
var statearr_12564_12591 = state_12554__$1;
(statearr_12564_12591[(1)] = (12));

} else {
var statearr_12565_12592 = state_12554__$1;
(statearr_12565_12592[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (3))){
var inst_12552 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12554__$1,inst_12552);
} else {
if((state_val_12555 === (12))){
var inst_12518 = (state_12554[(7)]);
var inst_12542 = cljs.core.vec.call(null,inst_12518);
var state_12554__$1 = state_12554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12554__$1,(15),out,inst_12542);
} else {
if((state_val_12555 === (2))){
var state_12554__$1 = state_12554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12554__$1,(4),ch);
} else {
if((state_val_12555 === (11))){
var inst_12534 = (state_12554[(2)]);
var inst_12535 = (new Array(n));
var inst_12518 = inst_12535;
var inst_12519 = (0);
var state_12554__$1 = (function (){var statearr_12566 = state_12554;
(statearr_12566[(7)] = inst_12518);

(statearr_12566[(10)] = inst_12534);

(statearr_12566[(8)] = inst_12519);

return statearr_12566;
})();
var statearr_12567_12593 = state_12554__$1;
(statearr_12567_12593[(2)] = null);

(statearr_12567_12593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (9))){
var inst_12518 = (state_12554[(7)]);
var inst_12532 = cljs.core.vec.call(null,inst_12518);
var state_12554__$1 = state_12554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12554__$1,(11),out,inst_12532);
} else {
if((state_val_12555 === (5))){
var inst_12518 = (state_12554[(7)]);
var inst_12527 = (state_12554[(11)]);
var inst_12519 = (state_12554[(8)]);
var inst_12522 = (state_12554[(9)]);
var inst_12526 = (inst_12518[inst_12519] = inst_12522);
var inst_12527__$1 = (inst_12519 + (1));
var inst_12528 = (inst_12527__$1 < n);
var state_12554__$1 = (function (){var statearr_12568 = state_12554;
(statearr_12568[(12)] = inst_12526);

(statearr_12568[(11)] = inst_12527__$1);

return statearr_12568;
})();
if(cljs.core.truth_(inst_12528)){
var statearr_12569_12594 = state_12554__$1;
(statearr_12569_12594[(1)] = (8));

} else {
var statearr_12570_12595 = state_12554__$1;
(statearr_12570_12595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (14))){
var inst_12547 = (state_12554[(2)]);
var inst_12548 = cljs.core.async.close_BANG_.call(null,out);
var state_12554__$1 = (function (){var statearr_12572 = state_12554;
(statearr_12572[(13)] = inst_12547);

return statearr_12572;
})();
var statearr_12573_12596 = state_12554__$1;
(statearr_12573_12596[(2)] = inst_12548);

(statearr_12573_12596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (10))){
var inst_12538 = (state_12554[(2)]);
var state_12554__$1 = state_12554;
var statearr_12574_12597 = state_12554__$1;
(statearr_12574_12597[(2)] = inst_12538);

(statearr_12574_12597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12555 === (8))){
var inst_12518 = (state_12554[(7)]);
var inst_12527 = (state_12554[(11)]);
var tmp12571 = inst_12518;
var inst_12518__$1 = tmp12571;
var inst_12519 = inst_12527;
var state_12554__$1 = (function (){var statearr_12575 = state_12554;
(statearr_12575[(7)] = inst_12518__$1);

(statearr_12575[(8)] = inst_12519);

return statearr_12575;
})();
var statearr_12576_12598 = state_12554__$1;
(statearr_12576_12598[(2)] = null);

(statearr_12576_12598[(1)] = (2));


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
});})(c__6876__auto___12584,out))
;
return ((function (switch__6820__auto__,c__6876__auto___12584,out){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_12580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12580[(0)] = state_machine__6821__auto__);

(statearr_12580[(1)] = (1));

return statearr_12580;
});
var state_machine__6821__auto____1 = (function (state_12554){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_12554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e12581){if((e12581 instanceof Object)){
var ex__6824__auto__ = e12581;
var statearr_12582_12599 = state_12554;
(statearr_12582_12599[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12600 = state_12554;
state_12554 = G__12600;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_12554){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_12554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___12584,out))
})();
var state__6878__auto__ = (function (){var statearr_12583 = f__6877__auto__.call(null);
(statearr_12583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___12584);

return statearr_12583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___12584,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6876__auto___12743 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto___12743,out){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto___12743,out){
return (function (state_12713){
var state_val_12714 = (state_12713[(1)]);
if((state_val_12714 === (7))){
var inst_12709 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
var statearr_12715_12744 = state_12713__$1;
(statearr_12715_12744[(2)] = inst_12709);

(statearr_12715_12744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (1))){
var inst_12672 = [];
var inst_12673 = inst_12672;
var inst_12674 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12713__$1 = (function (){var statearr_12716 = state_12713;
(statearr_12716[(7)] = inst_12673);

(statearr_12716[(8)] = inst_12674);

return statearr_12716;
})();
var statearr_12717_12745 = state_12713__$1;
(statearr_12717_12745[(2)] = null);

(statearr_12717_12745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (4))){
var inst_12677 = (state_12713[(9)]);
var inst_12677__$1 = (state_12713[(2)]);
var inst_12678 = (inst_12677__$1 == null);
var inst_12679 = cljs.core.not.call(null,inst_12678);
var state_12713__$1 = (function (){var statearr_12718 = state_12713;
(statearr_12718[(9)] = inst_12677__$1);

return statearr_12718;
})();
if(inst_12679){
var statearr_12719_12746 = state_12713__$1;
(statearr_12719_12746[(1)] = (5));

} else {
var statearr_12720_12747 = state_12713__$1;
(statearr_12720_12747[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (15))){
var inst_12703 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
var statearr_12721_12748 = state_12713__$1;
(statearr_12721_12748[(2)] = inst_12703);

(statearr_12721_12748[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (13))){
var state_12713__$1 = state_12713;
var statearr_12722_12749 = state_12713__$1;
(statearr_12722_12749[(2)] = null);

(statearr_12722_12749[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (6))){
var inst_12673 = (state_12713[(7)]);
var inst_12698 = inst_12673.length;
var inst_12699 = (inst_12698 > (0));
var state_12713__$1 = state_12713;
if(cljs.core.truth_(inst_12699)){
var statearr_12723_12750 = state_12713__$1;
(statearr_12723_12750[(1)] = (12));

} else {
var statearr_12724_12751 = state_12713__$1;
(statearr_12724_12751[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (3))){
var inst_12711 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12713__$1,inst_12711);
} else {
if((state_val_12714 === (12))){
var inst_12673 = (state_12713[(7)]);
var inst_12701 = cljs.core.vec.call(null,inst_12673);
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12713__$1,(15),out,inst_12701);
} else {
if((state_val_12714 === (2))){
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12713__$1,(4),ch);
} else {
if((state_val_12714 === (11))){
var inst_12681 = (state_12713[(10)]);
var inst_12677 = (state_12713[(9)]);
var inst_12691 = (state_12713[(2)]);
var inst_12692 = [];
var inst_12693 = inst_12692.push(inst_12677);
var inst_12673 = inst_12692;
var inst_12674 = inst_12681;
var state_12713__$1 = (function (){var statearr_12725 = state_12713;
(statearr_12725[(11)] = inst_12693);

(statearr_12725[(7)] = inst_12673);

(statearr_12725[(8)] = inst_12674);

(statearr_12725[(12)] = inst_12691);

return statearr_12725;
})();
var statearr_12726_12752 = state_12713__$1;
(statearr_12726_12752[(2)] = null);

(statearr_12726_12752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (9))){
var inst_12673 = (state_12713[(7)]);
var inst_12689 = cljs.core.vec.call(null,inst_12673);
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12713__$1,(11),out,inst_12689);
} else {
if((state_val_12714 === (5))){
var inst_12674 = (state_12713[(8)]);
var inst_12681 = (state_12713[(10)]);
var inst_12677 = (state_12713[(9)]);
var inst_12681__$1 = f.call(null,inst_12677);
var inst_12682 = cljs.core._EQ_.call(null,inst_12681__$1,inst_12674);
var inst_12683 = cljs.core.keyword_identical_QMARK_.call(null,inst_12674,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12684 = (inst_12682) || (inst_12683);
var state_12713__$1 = (function (){var statearr_12727 = state_12713;
(statearr_12727[(10)] = inst_12681__$1);

return statearr_12727;
})();
if(cljs.core.truth_(inst_12684)){
var statearr_12728_12753 = state_12713__$1;
(statearr_12728_12753[(1)] = (8));

} else {
var statearr_12729_12754 = state_12713__$1;
(statearr_12729_12754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (14))){
var inst_12706 = (state_12713[(2)]);
var inst_12707 = cljs.core.async.close_BANG_.call(null,out);
var state_12713__$1 = (function (){var statearr_12731 = state_12713;
(statearr_12731[(13)] = inst_12706);

return statearr_12731;
})();
var statearr_12732_12755 = state_12713__$1;
(statearr_12732_12755[(2)] = inst_12707);

(statearr_12732_12755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (10))){
var inst_12696 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
var statearr_12733_12756 = state_12713__$1;
(statearr_12733_12756[(2)] = inst_12696);

(statearr_12733_12756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (8))){
var inst_12673 = (state_12713[(7)]);
var inst_12681 = (state_12713[(10)]);
var inst_12677 = (state_12713[(9)]);
var inst_12686 = inst_12673.push(inst_12677);
var tmp12730 = inst_12673;
var inst_12673__$1 = tmp12730;
var inst_12674 = inst_12681;
var state_12713__$1 = (function (){var statearr_12734 = state_12713;
(statearr_12734[(7)] = inst_12673__$1);

(statearr_12734[(8)] = inst_12674);

(statearr_12734[(14)] = inst_12686);

return statearr_12734;
})();
var statearr_12735_12757 = state_12713__$1;
(statearr_12735_12757[(2)] = null);

(statearr_12735_12757[(1)] = (2));


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
});})(c__6876__auto___12743,out))
;
return ((function (switch__6820__auto__,c__6876__auto___12743,out){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_12739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12739[(0)] = state_machine__6821__auto__);

(statearr_12739[(1)] = (1));

return statearr_12739;
});
var state_machine__6821__auto____1 = (function (state_12713){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_12713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e12740){if((e12740 instanceof Object)){
var ex__6824__auto__ = e12740;
var statearr_12741_12758 = state_12713;
(statearr_12741_12758[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12740;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12759 = state_12713;
state_12713 = G__12759;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_12713){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_12713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto___12743,out))
})();
var state__6878__auto__ = (function (){var statearr_12742 = f__6877__auto__.call(null);
(statearr_12742[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto___12743);

return statearr_12742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto___12743,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map