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
if(typeof cljs.core.async.t16706 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16706 = (function (f,fn_handler,meta16707){
this.f = f;
this.fn_handler = fn_handler;
this.meta16707 = meta16707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16706.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16706.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16706.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16708){
var self__ = this;
var _16708__$1 = this;
return self__.meta16707;
});

cljs.core.async.t16706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16708,meta16707__$1){
var self__ = this;
var _16708__$1 = this;
return (new cljs.core.async.t16706(self__.f,self__.fn_handler,meta16707__$1));
});

cljs.core.async.t16706.cljs$lang$type = true;

cljs.core.async.t16706.cljs$lang$ctorStr = "cljs.core.async/t16706";

cljs.core.async.t16706.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t16706");
});

cljs.core.async.__GT_t16706 = (function __GT_t16706(f__$1,fn_handler__$1,meta16707){
return (new cljs.core.async.t16706(f__$1,fn_handler__$1,meta16707));
});

}

return (new cljs.core.async.t16706(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/resources/public/cljs/core/async.cljs"], null)));
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
var G__16710 = buff;
if(G__16710){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__16710.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16710.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16710);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16710);
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
var val_16711 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16711);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16711,ret){
return (function (){
return fn1.call(null,val_16711);
});})(val_16711,ret))
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
var n__4659__auto___16712 = n;
var x_16713 = (0);
while(true){
if((x_16713 < n__4659__auto___16712)){
(a[x_16713] = (0));

var G__16714 = (x_16713 + (1));
x_16713 = G__16714;
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

var G__16715 = (i + (1));
i = G__16715;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16719 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16719 = (function (flag,alt_flag,meta16720){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16720 = meta16720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16719.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16719.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16719.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16721){
var self__ = this;
var _16721__$1 = this;
return self__.meta16720;
});})(flag))
;

cljs.core.async.t16719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16721,meta16720__$1){
var self__ = this;
var _16721__$1 = this;
return (new cljs.core.async.t16719(self__.flag,self__.alt_flag,meta16720__$1));
});})(flag))
;

cljs.core.async.t16719.cljs$lang$type = true;

cljs.core.async.t16719.cljs$lang$ctorStr = "cljs.core.async/t16719";

cljs.core.async.t16719.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t16719");
});})(flag))
;

cljs.core.async.__GT_t16719 = ((function (flag){
return (function __GT_t16719(flag__$1,alt_flag__$1,meta16720){
return (new cljs.core.async.t16719(flag__$1,alt_flag__$1,meta16720));
});})(flag))
;

}

return (new cljs.core.async.t16719(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/resources/public/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16725 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16725 = (function (cb,flag,alt_handler,meta16726){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16726 = meta16726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16725.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16725.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16725.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16727){
var self__ = this;
var _16727__$1 = this;
return self__.meta16726;
});

cljs.core.async.t16725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16727,meta16726__$1){
var self__ = this;
var _16727__$1 = this;
return (new cljs.core.async.t16725(self__.cb,self__.flag,self__.alt_handler,meta16726__$1));
});

cljs.core.async.t16725.cljs$lang$type = true;

cljs.core.async.t16725.cljs$lang$ctorStr = "cljs.core.async/t16725";

cljs.core.async.t16725.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t16725");
});

cljs.core.async.__GT_t16725 = (function __GT_t16725(cb__$1,flag__$1,alt_handler__$1,meta16726){
return (new cljs.core.async.t16725(cb__$1,flag__$1,alt_handler__$1,meta16726));
});

}

return (new cljs.core.async.t16725(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/resources/public/cljs/core/async.cljs"], null)));
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
return (function (p1__16728_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16728_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16729_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16729_SHARP_,port], null));
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
var G__16730 = (i + (1));
i = G__16730;
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
var alts_BANG___delegate = function (ports,p__16731){
var map__16733 = p__16731;
var map__16733__$1 = ((cljs.core.seq_QMARK_.call(null,map__16733))?cljs.core.apply.call(null,cljs.core.hash_map,map__16733):map__16733);
var opts = map__16733__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16731 = null;
if (arguments.length > 1) {
var G__16734__i = 0, G__16734__a = new Array(arguments.length -  1);
while (G__16734__i < G__16734__a.length) {G__16734__a[G__16734__i] = arguments[G__16734__i + 1]; ++G__16734__i;}
  p__16731 = new cljs.core.IndexedSeq(G__16734__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__16731);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16735){
var ports = cljs.core.first(arglist__16735);
var p__16731 = cljs.core.rest(arglist__16735);
return alts_BANG___delegate(ports,p__16731);
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
var c__7186__auto___16830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___16830){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___16830){
return (function (state_16806){
var state_val_16807 = (state_16806[(1)]);
if((state_val_16807 === (7))){
var inst_16802 = (state_16806[(2)]);
var state_16806__$1 = state_16806;
var statearr_16808_16831 = state_16806__$1;
(statearr_16808_16831[(2)] = inst_16802);

(statearr_16808_16831[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (1))){
var state_16806__$1 = state_16806;
var statearr_16809_16832 = state_16806__$1;
(statearr_16809_16832[(2)] = null);

(statearr_16809_16832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (4))){
var inst_16785 = (state_16806[(7)]);
var inst_16785__$1 = (state_16806[(2)]);
var inst_16786 = (inst_16785__$1 == null);
var state_16806__$1 = (function (){var statearr_16810 = state_16806;
(statearr_16810[(7)] = inst_16785__$1);

return statearr_16810;
})();
if(cljs.core.truth_(inst_16786)){
var statearr_16811_16833 = state_16806__$1;
(statearr_16811_16833[(1)] = (5));

} else {
var statearr_16812_16834 = state_16806__$1;
(statearr_16812_16834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (13))){
var state_16806__$1 = state_16806;
var statearr_16813_16835 = state_16806__$1;
(statearr_16813_16835[(2)] = null);

(statearr_16813_16835[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (6))){
var inst_16785 = (state_16806[(7)]);
var state_16806__$1 = state_16806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16806__$1,(11),to,inst_16785);
} else {
if((state_val_16807 === (3))){
var inst_16804 = (state_16806[(2)]);
var state_16806__$1 = state_16806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16806__$1,inst_16804);
} else {
if((state_val_16807 === (12))){
var state_16806__$1 = state_16806;
var statearr_16814_16836 = state_16806__$1;
(statearr_16814_16836[(2)] = null);

(statearr_16814_16836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (2))){
var state_16806__$1 = state_16806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16806__$1,(4),from);
} else {
if((state_val_16807 === (11))){
var inst_16795 = (state_16806[(2)]);
var state_16806__$1 = state_16806;
if(cljs.core.truth_(inst_16795)){
var statearr_16815_16837 = state_16806__$1;
(statearr_16815_16837[(1)] = (12));

} else {
var statearr_16816_16838 = state_16806__$1;
(statearr_16816_16838[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (9))){
var state_16806__$1 = state_16806;
var statearr_16817_16839 = state_16806__$1;
(statearr_16817_16839[(2)] = null);

(statearr_16817_16839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (5))){
var state_16806__$1 = state_16806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16818_16840 = state_16806__$1;
(statearr_16818_16840[(1)] = (8));

} else {
var statearr_16819_16841 = state_16806__$1;
(statearr_16819_16841[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (14))){
var inst_16800 = (state_16806[(2)]);
var state_16806__$1 = state_16806;
var statearr_16820_16842 = state_16806__$1;
(statearr_16820_16842[(2)] = inst_16800);

(statearr_16820_16842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (10))){
var inst_16792 = (state_16806[(2)]);
var state_16806__$1 = state_16806;
var statearr_16821_16843 = state_16806__$1;
(statearr_16821_16843[(2)] = inst_16792);

(statearr_16821_16843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16807 === (8))){
var inst_16789 = cljs.core.async.close_BANG_.call(null,to);
var state_16806__$1 = state_16806;
var statearr_16822_16844 = state_16806__$1;
(statearr_16822_16844[(2)] = inst_16789);

(statearr_16822_16844[(1)] = (10));


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
});})(c__7186__auto___16830))
;
return ((function (switch__7130__auto__,c__7186__auto___16830){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_16826 = [null,null,null,null,null,null,null,null];
(statearr_16826[(0)] = state_machine__7131__auto__);

(statearr_16826[(1)] = (1));

return statearr_16826;
});
var state_machine__7131__auto____1 = (function (state_16806){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_16806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e16827){if((e16827 instanceof Object)){
var ex__7134__auto__ = e16827;
var statearr_16828_16845 = state_16806;
(statearr_16828_16845[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16846 = state_16806;
state_16806 = G__16846;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_16806){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_16806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___16830))
})();
var state__7188__auto__ = (function (){var statearr_16829 = f__7187__auto__.call(null);
(statearr_16829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___16830);

return statearr_16829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___16830))
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
return (function (p__17030){
var vec__17031 = p__17030;
var v = cljs.core.nth.call(null,vec__17031,(0),null);
var p = cljs.core.nth.call(null,vec__17031,(1),null);
var job = vec__17031;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7186__auto___17213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___17213,res,vec__17031,v,p,job,jobs,results){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___17213,res,vec__17031,v,p,job,jobs,results){
return (function (state_17036){
var state_val_17037 = (state_17036[(1)]);
if((state_val_17037 === (2))){
var inst_17033 = (state_17036[(2)]);
var inst_17034 = cljs.core.async.close_BANG_.call(null,res);
var state_17036__$1 = (function (){var statearr_17038 = state_17036;
(statearr_17038[(7)] = inst_17033);

return statearr_17038;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17036__$1,inst_17034);
} else {
if((state_val_17037 === (1))){
var state_17036__$1 = state_17036;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17036__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7186__auto___17213,res,vec__17031,v,p,job,jobs,results))
;
return ((function (switch__7130__auto__,c__7186__auto___17213,res,vec__17031,v,p,job,jobs,results){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_17042 = [null,null,null,null,null,null,null,null];
(statearr_17042[(0)] = state_machine__7131__auto__);

(statearr_17042[(1)] = (1));

return statearr_17042;
});
var state_machine__7131__auto____1 = (function (state_17036){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_17036);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e17043){if((e17043 instanceof Object)){
var ex__7134__auto__ = e17043;
var statearr_17044_17214 = state_17036;
(statearr_17044_17214[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17036);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17215 = state_17036;
state_17036 = G__17215;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_17036){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_17036);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___17213,res,vec__17031,v,p,job,jobs,results))
})();
var state__7188__auto__ = (function (){var statearr_17045 = f__7187__auto__.call(null);
(statearr_17045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___17213);

return statearr_17045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___17213,res,vec__17031,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17046){
var vec__17047 = p__17046;
var v = cljs.core.nth.call(null,vec__17047,(0),null);
var p = cljs.core.nth.call(null,vec__17047,(1),null);
var job = vec__17047;
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
var n__4659__auto___17216 = n;
var __17217 = (0);
while(true){
if((__17217 < n__4659__auto___17216)){
var G__17048_17218 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__17048_17218) {
case "async":
var c__7186__auto___17220 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17217,c__7186__auto___17220,G__17048_17218,n__4659__auto___17216,jobs,results,process,async){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (__17217,c__7186__auto___17220,G__17048_17218,n__4659__auto___17216,jobs,results,process,async){
return (function (state_17061){
var state_val_17062 = (state_17061[(1)]);
if((state_val_17062 === (7))){
var inst_17057 = (state_17061[(2)]);
var state_17061__$1 = state_17061;
var statearr_17063_17221 = state_17061__$1;
(statearr_17063_17221[(2)] = inst_17057);

(statearr_17063_17221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17062 === (6))){
var state_17061__$1 = state_17061;
var statearr_17064_17222 = state_17061__$1;
(statearr_17064_17222[(2)] = null);

(statearr_17064_17222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17062 === (5))){
var state_17061__$1 = state_17061;
var statearr_17065_17223 = state_17061__$1;
(statearr_17065_17223[(2)] = null);

(statearr_17065_17223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17062 === (4))){
var inst_17051 = (state_17061[(2)]);
var inst_17052 = async.call(null,inst_17051);
var state_17061__$1 = state_17061;
if(cljs.core.truth_(inst_17052)){
var statearr_17066_17224 = state_17061__$1;
(statearr_17066_17224[(1)] = (5));

} else {
var statearr_17067_17225 = state_17061__$1;
(statearr_17067_17225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17062 === (3))){
var inst_17059 = (state_17061[(2)]);
var state_17061__$1 = state_17061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17061__$1,inst_17059);
} else {
if((state_val_17062 === (2))){
var state_17061__$1 = state_17061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17061__$1,(4),jobs);
} else {
if((state_val_17062 === (1))){
var state_17061__$1 = state_17061;
var statearr_17068_17226 = state_17061__$1;
(statearr_17068_17226[(2)] = null);

(statearr_17068_17226[(1)] = (2));


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
});})(__17217,c__7186__auto___17220,G__17048_17218,n__4659__auto___17216,jobs,results,process,async))
;
return ((function (__17217,switch__7130__auto__,c__7186__auto___17220,G__17048_17218,n__4659__auto___17216,jobs,results,process,async){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_17072 = [null,null,null,null,null,null,null];
(statearr_17072[(0)] = state_machine__7131__auto__);

(statearr_17072[(1)] = (1));

return statearr_17072;
});
var state_machine__7131__auto____1 = (function (state_17061){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_17061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e17073){if((e17073 instanceof Object)){
var ex__7134__auto__ = e17073;
var statearr_17074_17227 = state_17061;
(statearr_17074_17227[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17228 = state_17061;
state_17061 = G__17228;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_17061){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_17061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(__17217,switch__7130__auto__,c__7186__auto___17220,G__17048_17218,n__4659__auto___17216,jobs,results,process,async))
})();
var state__7188__auto__ = (function (){var statearr_17075 = f__7187__auto__.call(null);
(statearr_17075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___17220);

return statearr_17075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(__17217,c__7186__auto___17220,G__17048_17218,n__4659__auto___17216,jobs,results,process,async))
);


break;
case "compute":
var c__7186__auto___17229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17217,c__7186__auto___17229,G__17048_17218,n__4659__auto___17216,jobs,results,process,async){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (__17217,c__7186__auto___17229,G__17048_17218,n__4659__auto___17216,jobs,results,process,async){
return (function (state_17088){
var state_val_17089 = (state_17088[(1)]);
if((state_val_17089 === (7))){
var inst_17084 = (state_17088[(2)]);
var state_17088__$1 = state_17088;
var statearr_17090_17230 = state_17088__$1;
(statearr_17090_17230[(2)] = inst_17084);

(statearr_17090_17230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (6))){
var state_17088__$1 = state_17088;
var statearr_17091_17231 = state_17088__$1;
(statearr_17091_17231[(2)] = null);

(statearr_17091_17231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (5))){
var state_17088__$1 = state_17088;
var statearr_17092_17232 = state_17088__$1;
(statearr_17092_17232[(2)] = null);

(statearr_17092_17232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (4))){
var inst_17078 = (state_17088[(2)]);
var inst_17079 = process.call(null,inst_17078);
var state_17088__$1 = state_17088;
if(cljs.core.truth_(inst_17079)){
var statearr_17093_17233 = state_17088__$1;
(statearr_17093_17233[(1)] = (5));

} else {
var statearr_17094_17234 = state_17088__$1;
(statearr_17094_17234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17089 === (3))){
var inst_17086 = (state_17088[(2)]);
var state_17088__$1 = state_17088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17088__$1,inst_17086);
} else {
if((state_val_17089 === (2))){
var state_17088__$1 = state_17088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17088__$1,(4),jobs);
} else {
if((state_val_17089 === (1))){
var state_17088__$1 = state_17088;
var statearr_17095_17235 = state_17088__$1;
(statearr_17095_17235[(2)] = null);

(statearr_17095_17235[(1)] = (2));


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
});})(__17217,c__7186__auto___17229,G__17048_17218,n__4659__auto___17216,jobs,results,process,async))
;
return ((function (__17217,switch__7130__auto__,c__7186__auto___17229,G__17048_17218,n__4659__auto___17216,jobs,results,process,async){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_17099 = [null,null,null,null,null,null,null];
(statearr_17099[(0)] = state_machine__7131__auto__);

(statearr_17099[(1)] = (1));

return statearr_17099;
});
var state_machine__7131__auto____1 = (function (state_17088){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_17088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e17100){if((e17100 instanceof Object)){
var ex__7134__auto__ = e17100;
var statearr_17101_17236 = state_17088;
(statearr_17101_17236[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17237 = state_17088;
state_17088 = G__17237;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_17088){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_17088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(__17217,switch__7130__auto__,c__7186__auto___17229,G__17048_17218,n__4659__auto___17216,jobs,results,process,async))
})();
var state__7188__auto__ = (function (){var statearr_17102 = f__7187__auto__.call(null);
(statearr_17102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___17229);

return statearr_17102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(__17217,c__7186__auto___17229,G__17048_17218,n__4659__auto___17216,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__17238 = (__17217 + (1));
__17217 = G__17238;
continue;
} else {
}
break;
}

var c__7186__auto___17239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___17239,jobs,results,process,async){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___17239,jobs,results,process,async){
return (function (state_17124){
var state_val_17125 = (state_17124[(1)]);
if((state_val_17125 === (9))){
var inst_17117 = (state_17124[(2)]);
var state_17124__$1 = (function (){var statearr_17126 = state_17124;
(statearr_17126[(7)] = inst_17117);

return statearr_17126;
})();
var statearr_17127_17240 = state_17124__$1;
(statearr_17127_17240[(2)] = null);

(statearr_17127_17240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (8))){
var inst_17110 = (state_17124[(8)]);
var inst_17115 = (state_17124[(2)]);
var state_17124__$1 = (function (){var statearr_17128 = state_17124;
(statearr_17128[(9)] = inst_17115);

return statearr_17128;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17124__$1,(9),results,inst_17110);
} else {
if((state_val_17125 === (7))){
var inst_17120 = (state_17124[(2)]);
var state_17124__$1 = state_17124;
var statearr_17129_17241 = state_17124__$1;
(statearr_17129_17241[(2)] = inst_17120);

(statearr_17129_17241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (6))){
var inst_17105 = (state_17124[(10)]);
var inst_17110 = (state_17124[(8)]);
var inst_17110__$1 = cljs.core.async.chan.call(null,(1));
var inst_17111 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17112 = [inst_17105,inst_17110__$1];
var inst_17113 = (new cljs.core.PersistentVector(null,2,(5),inst_17111,inst_17112,null));
var state_17124__$1 = (function (){var statearr_17130 = state_17124;
(statearr_17130[(8)] = inst_17110__$1);

return statearr_17130;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17124__$1,(8),jobs,inst_17113);
} else {
if((state_val_17125 === (5))){
var inst_17108 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17124__$1 = state_17124;
var statearr_17131_17242 = state_17124__$1;
(statearr_17131_17242[(2)] = inst_17108);

(statearr_17131_17242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (4))){
var inst_17105 = (state_17124[(10)]);
var inst_17105__$1 = (state_17124[(2)]);
var inst_17106 = (inst_17105__$1 == null);
var state_17124__$1 = (function (){var statearr_17132 = state_17124;
(statearr_17132[(10)] = inst_17105__$1);

return statearr_17132;
})();
if(cljs.core.truth_(inst_17106)){
var statearr_17133_17243 = state_17124__$1;
(statearr_17133_17243[(1)] = (5));

} else {
var statearr_17134_17244 = state_17124__$1;
(statearr_17134_17244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17125 === (3))){
var inst_17122 = (state_17124[(2)]);
var state_17124__$1 = state_17124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17124__$1,inst_17122);
} else {
if((state_val_17125 === (2))){
var state_17124__$1 = state_17124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17124__$1,(4),from);
} else {
if((state_val_17125 === (1))){
var state_17124__$1 = state_17124;
var statearr_17135_17245 = state_17124__$1;
(statearr_17135_17245[(2)] = null);

(statearr_17135_17245[(1)] = (2));


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
});})(c__7186__auto___17239,jobs,results,process,async))
;
return ((function (switch__7130__auto__,c__7186__auto___17239,jobs,results,process,async){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_17139 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17139[(0)] = state_machine__7131__auto__);

(statearr_17139[(1)] = (1));

return statearr_17139;
});
var state_machine__7131__auto____1 = (function (state_17124){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_17124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e17140){if((e17140 instanceof Object)){
var ex__7134__auto__ = e17140;
var statearr_17141_17246 = state_17124;
(statearr_17141_17246[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17247 = state_17124;
state_17124 = G__17247;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_17124){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_17124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___17239,jobs,results,process,async))
})();
var state__7188__auto__ = (function (){var statearr_17142 = f__7187__auto__.call(null);
(statearr_17142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___17239);

return statearr_17142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___17239,jobs,results,process,async))
);


var c__7186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto__,jobs,results,process,async){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto__,jobs,results,process,async){
return (function (state_17180){
var state_val_17181 = (state_17180[(1)]);
if((state_val_17181 === (7))){
var inst_17176 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
var statearr_17182_17248 = state_17180__$1;
(statearr_17182_17248[(2)] = inst_17176);

(statearr_17182_17248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (20))){
var state_17180__$1 = state_17180;
var statearr_17183_17249 = state_17180__$1;
(statearr_17183_17249[(2)] = null);

(statearr_17183_17249[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (1))){
var state_17180__$1 = state_17180;
var statearr_17184_17250 = state_17180__$1;
(statearr_17184_17250[(2)] = null);

(statearr_17184_17250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (4))){
var inst_17145 = (state_17180[(7)]);
var inst_17145__$1 = (state_17180[(2)]);
var inst_17146 = (inst_17145__$1 == null);
var state_17180__$1 = (function (){var statearr_17185 = state_17180;
(statearr_17185[(7)] = inst_17145__$1);

return statearr_17185;
})();
if(cljs.core.truth_(inst_17146)){
var statearr_17186_17251 = state_17180__$1;
(statearr_17186_17251[(1)] = (5));

} else {
var statearr_17187_17252 = state_17180__$1;
(statearr_17187_17252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (15))){
var inst_17158 = (state_17180[(8)]);
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17180__$1,(18),to,inst_17158);
} else {
if((state_val_17181 === (21))){
var inst_17171 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
var statearr_17188_17253 = state_17180__$1;
(statearr_17188_17253[(2)] = inst_17171);

(statearr_17188_17253[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (13))){
var inst_17173 = (state_17180[(2)]);
var state_17180__$1 = (function (){var statearr_17189 = state_17180;
(statearr_17189[(9)] = inst_17173);

return statearr_17189;
})();
var statearr_17190_17254 = state_17180__$1;
(statearr_17190_17254[(2)] = null);

(statearr_17190_17254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (6))){
var inst_17145 = (state_17180[(7)]);
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17180__$1,(11),inst_17145);
} else {
if((state_val_17181 === (17))){
var inst_17166 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
if(cljs.core.truth_(inst_17166)){
var statearr_17191_17255 = state_17180__$1;
(statearr_17191_17255[(1)] = (19));

} else {
var statearr_17192_17256 = state_17180__$1;
(statearr_17192_17256[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (3))){
var inst_17178 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17180__$1,inst_17178);
} else {
if((state_val_17181 === (12))){
var inst_17155 = (state_17180[(10)]);
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17180__$1,(14),inst_17155);
} else {
if((state_val_17181 === (2))){
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17180__$1,(4),results);
} else {
if((state_val_17181 === (19))){
var state_17180__$1 = state_17180;
var statearr_17193_17257 = state_17180__$1;
(statearr_17193_17257[(2)] = null);

(statearr_17193_17257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (11))){
var inst_17155 = (state_17180[(2)]);
var state_17180__$1 = (function (){var statearr_17194 = state_17180;
(statearr_17194[(10)] = inst_17155);

return statearr_17194;
})();
var statearr_17195_17258 = state_17180__$1;
(statearr_17195_17258[(2)] = null);

(statearr_17195_17258[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (9))){
var state_17180__$1 = state_17180;
var statearr_17196_17259 = state_17180__$1;
(statearr_17196_17259[(2)] = null);

(statearr_17196_17259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (5))){
var state_17180__$1 = state_17180;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17197_17260 = state_17180__$1;
(statearr_17197_17260[(1)] = (8));

} else {
var statearr_17198_17261 = state_17180__$1;
(statearr_17198_17261[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (14))){
var inst_17158 = (state_17180[(8)]);
var inst_17160 = (state_17180[(11)]);
var inst_17158__$1 = (state_17180[(2)]);
var inst_17159 = (inst_17158__$1 == null);
var inst_17160__$1 = cljs.core.not.call(null,inst_17159);
var state_17180__$1 = (function (){var statearr_17199 = state_17180;
(statearr_17199[(8)] = inst_17158__$1);

(statearr_17199[(11)] = inst_17160__$1);

return statearr_17199;
})();
if(inst_17160__$1){
var statearr_17200_17262 = state_17180__$1;
(statearr_17200_17262[(1)] = (15));

} else {
var statearr_17201_17263 = state_17180__$1;
(statearr_17201_17263[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (16))){
var inst_17160 = (state_17180[(11)]);
var state_17180__$1 = state_17180;
var statearr_17202_17264 = state_17180__$1;
(statearr_17202_17264[(2)] = inst_17160);

(statearr_17202_17264[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (10))){
var inst_17152 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
var statearr_17203_17265 = state_17180__$1;
(statearr_17203_17265[(2)] = inst_17152);

(statearr_17203_17265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (18))){
var inst_17163 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
var statearr_17204_17266 = state_17180__$1;
(statearr_17204_17266[(2)] = inst_17163);

(statearr_17204_17266[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (8))){
var inst_17149 = cljs.core.async.close_BANG_.call(null,to);
var state_17180__$1 = state_17180;
var statearr_17205_17267 = state_17180__$1;
(statearr_17205_17267[(2)] = inst_17149);

(statearr_17205_17267[(1)] = (10));


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
});})(c__7186__auto__,jobs,results,process,async))
;
return ((function (switch__7130__auto__,c__7186__auto__,jobs,results,process,async){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_17209 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17209[(0)] = state_machine__7131__auto__);

(statearr_17209[(1)] = (1));

return statearr_17209;
});
var state_machine__7131__auto____1 = (function (state_17180){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_17180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e17210){if((e17210 instanceof Object)){
var ex__7134__auto__ = e17210;
var statearr_17211_17268 = state_17180;
(statearr_17211_17268[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17269 = state_17180;
state_17180 = G__17269;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_17180){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_17180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto__,jobs,results,process,async))
})();
var state__7188__auto__ = (function (){var statearr_17212 = f__7187__auto__.call(null);
(statearr_17212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto__);

return statearr_17212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto__,jobs,results,process,async))
);

return c__7186__auto__;
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
var c__7186__auto___17370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___17370,tc,fc){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___17370,tc,fc){
return (function (state_17345){
var state_val_17346 = (state_17345[(1)]);
if((state_val_17346 === (7))){
var inst_17341 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17347_17371 = state_17345__$1;
(statearr_17347_17371[(2)] = inst_17341);

(statearr_17347_17371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (1))){
var state_17345__$1 = state_17345;
var statearr_17348_17372 = state_17345__$1;
(statearr_17348_17372[(2)] = null);

(statearr_17348_17372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (4))){
var inst_17322 = (state_17345[(7)]);
var inst_17322__$1 = (state_17345[(2)]);
var inst_17323 = (inst_17322__$1 == null);
var state_17345__$1 = (function (){var statearr_17349 = state_17345;
(statearr_17349[(7)] = inst_17322__$1);

return statearr_17349;
})();
if(cljs.core.truth_(inst_17323)){
var statearr_17350_17373 = state_17345__$1;
(statearr_17350_17373[(1)] = (5));

} else {
var statearr_17351_17374 = state_17345__$1;
(statearr_17351_17374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (13))){
var state_17345__$1 = state_17345;
var statearr_17352_17375 = state_17345__$1;
(statearr_17352_17375[(2)] = null);

(statearr_17352_17375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (6))){
var inst_17322 = (state_17345[(7)]);
var inst_17328 = p.call(null,inst_17322);
var state_17345__$1 = state_17345;
if(cljs.core.truth_(inst_17328)){
var statearr_17353_17376 = state_17345__$1;
(statearr_17353_17376[(1)] = (9));

} else {
var statearr_17354_17377 = state_17345__$1;
(statearr_17354_17377[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (3))){
var inst_17343 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17345__$1,inst_17343);
} else {
if((state_val_17346 === (12))){
var state_17345__$1 = state_17345;
var statearr_17355_17378 = state_17345__$1;
(statearr_17355_17378[(2)] = null);

(statearr_17355_17378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (2))){
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17345__$1,(4),ch);
} else {
if((state_val_17346 === (11))){
var inst_17322 = (state_17345[(7)]);
var inst_17332 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17345__$1,(8),inst_17332,inst_17322);
} else {
if((state_val_17346 === (9))){
var state_17345__$1 = state_17345;
var statearr_17356_17379 = state_17345__$1;
(statearr_17356_17379[(2)] = tc);

(statearr_17356_17379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (5))){
var inst_17325 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17326 = cljs.core.async.close_BANG_.call(null,fc);
var state_17345__$1 = (function (){var statearr_17357 = state_17345;
(statearr_17357[(8)] = inst_17325);

return statearr_17357;
})();
var statearr_17358_17380 = state_17345__$1;
(statearr_17358_17380[(2)] = inst_17326);

(statearr_17358_17380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (14))){
var inst_17339 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
var statearr_17359_17381 = state_17345__$1;
(statearr_17359_17381[(2)] = inst_17339);

(statearr_17359_17381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (10))){
var state_17345__$1 = state_17345;
var statearr_17360_17382 = state_17345__$1;
(statearr_17360_17382[(2)] = fc);

(statearr_17360_17382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17346 === (8))){
var inst_17334 = (state_17345[(2)]);
var state_17345__$1 = state_17345;
if(cljs.core.truth_(inst_17334)){
var statearr_17361_17383 = state_17345__$1;
(statearr_17361_17383[(1)] = (12));

} else {
var statearr_17362_17384 = state_17345__$1;
(statearr_17362_17384[(1)] = (13));

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
});})(c__7186__auto___17370,tc,fc))
;
return ((function (switch__7130__auto__,c__7186__auto___17370,tc,fc){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_17366 = [null,null,null,null,null,null,null,null,null];
(statearr_17366[(0)] = state_machine__7131__auto__);

(statearr_17366[(1)] = (1));

return statearr_17366;
});
var state_machine__7131__auto____1 = (function (state_17345){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_17345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e17367){if((e17367 instanceof Object)){
var ex__7134__auto__ = e17367;
var statearr_17368_17385 = state_17345;
(statearr_17368_17385[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17386 = state_17345;
state_17345 = G__17386;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_17345){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_17345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___17370,tc,fc))
})();
var state__7188__auto__ = (function (){var statearr_17369 = f__7187__auto__.call(null);
(statearr_17369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___17370);

return statearr_17369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___17370,tc,fc))
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
var c__7186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto__){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto__){
return (function (state_17433){
var state_val_17434 = (state_17433[(1)]);
if((state_val_17434 === (7))){
var inst_17429 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
var statearr_17435_17451 = state_17433__$1;
(statearr_17435_17451[(2)] = inst_17429);

(statearr_17435_17451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (6))){
var inst_17419 = (state_17433[(7)]);
var inst_17422 = (state_17433[(8)]);
var inst_17426 = f.call(null,inst_17419,inst_17422);
var inst_17419__$1 = inst_17426;
var state_17433__$1 = (function (){var statearr_17436 = state_17433;
(statearr_17436[(7)] = inst_17419__$1);

return statearr_17436;
})();
var statearr_17437_17452 = state_17433__$1;
(statearr_17437_17452[(2)] = null);

(statearr_17437_17452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (5))){
var inst_17419 = (state_17433[(7)]);
var state_17433__$1 = state_17433;
var statearr_17438_17453 = state_17433__$1;
(statearr_17438_17453[(2)] = inst_17419);

(statearr_17438_17453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (4))){
var inst_17422 = (state_17433[(8)]);
var inst_17422__$1 = (state_17433[(2)]);
var inst_17423 = (inst_17422__$1 == null);
var state_17433__$1 = (function (){var statearr_17439 = state_17433;
(statearr_17439[(8)] = inst_17422__$1);

return statearr_17439;
})();
if(cljs.core.truth_(inst_17423)){
var statearr_17440_17454 = state_17433__$1;
(statearr_17440_17454[(1)] = (5));

} else {
var statearr_17441_17455 = state_17433__$1;
(statearr_17441_17455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17434 === (3))){
var inst_17431 = (state_17433[(2)]);
var state_17433__$1 = state_17433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17433__$1,inst_17431);
} else {
if((state_val_17434 === (2))){
var state_17433__$1 = state_17433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17433__$1,(4),ch);
} else {
if((state_val_17434 === (1))){
var inst_17419 = init;
var state_17433__$1 = (function (){var statearr_17442 = state_17433;
(statearr_17442[(7)] = inst_17419);

return statearr_17442;
})();
var statearr_17443_17456 = state_17433__$1;
(statearr_17443_17456[(2)] = null);

(statearr_17443_17456[(1)] = (2));


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
});})(c__7186__auto__))
;
return ((function (switch__7130__auto__,c__7186__auto__){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_17447 = [null,null,null,null,null,null,null,null,null];
(statearr_17447[(0)] = state_machine__7131__auto__);

(statearr_17447[(1)] = (1));

return statearr_17447;
});
var state_machine__7131__auto____1 = (function (state_17433){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_17433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e17448){if((e17448 instanceof Object)){
var ex__7134__auto__ = e17448;
var statearr_17449_17457 = state_17433;
(statearr_17449_17457[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17458 = state_17433;
state_17433 = G__17458;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_17433){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_17433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto__))
})();
var state__7188__auto__ = (function (){var statearr_17450 = f__7187__auto__.call(null);
(statearr_17450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto__);

return statearr_17450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto__))
);

return c__7186__auto__;
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
var c__7186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto__){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto__){
return (function (state_17532){
var state_val_17533 = (state_17532[(1)]);
if((state_val_17533 === (7))){
var inst_17514 = (state_17532[(2)]);
var state_17532__$1 = state_17532;
var statearr_17534_17557 = state_17532__$1;
(statearr_17534_17557[(2)] = inst_17514);

(statearr_17534_17557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (1))){
var inst_17508 = cljs.core.seq.call(null,coll);
var inst_17509 = inst_17508;
var state_17532__$1 = (function (){var statearr_17535 = state_17532;
(statearr_17535[(7)] = inst_17509);

return statearr_17535;
})();
var statearr_17536_17558 = state_17532__$1;
(statearr_17536_17558[(2)] = null);

(statearr_17536_17558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (4))){
var inst_17509 = (state_17532[(7)]);
var inst_17512 = cljs.core.first.call(null,inst_17509);
var state_17532__$1 = state_17532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17532__$1,(7),ch,inst_17512);
} else {
if((state_val_17533 === (13))){
var inst_17526 = (state_17532[(2)]);
var state_17532__$1 = state_17532;
var statearr_17537_17559 = state_17532__$1;
(statearr_17537_17559[(2)] = inst_17526);

(statearr_17537_17559[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (6))){
var inst_17517 = (state_17532[(2)]);
var state_17532__$1 = state_17532;
if(cljs.core.truth_(inst_17517)){
var statearr_17538_17560 = state_17532__$1;
(statearr_17538_17560[(1)] = (8));

} else {
var statearr_17539_17561 = state_17532__$1;
(statearr_17539_17561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (3))){
var inst_17530 = (state_17532[(2)]);
var state_17532__$1 = state_17532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17532__$1,inst_17530);
} else {
if((state_val_17533 === (12))){
var state_17532__$1 = state_17532;
var statearr_17540_17562 = state_17532__$1;
(statearr_17540_17562[(2)] = null);

(statearr_17540_17562[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (2))){
var inst_17509 = (state_17532[(7)]);
var state_17532__$1 = state_17532;
if(cljs.core.truth_(inst_17509)){
var statearr_17541_17563 = state_17532__$1;
(statearr_17541_17563[(1)] = (4));

} else {
var statearr_17542_17564 = state_17532__$1;
(statearr_17542_17564[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (11))){
var inst_17523 = cljs.core.async.close_BANG_.call(null,ch);
var state_17532__$1 = state_17532;
var statearr_17543_17565 = state_17532__$1;
(statearr_17543_17565[(2)] = inst_17523);

(statearr_17543_17565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (9))){
var state_17532__$1 = state_17532;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17544_17566 = state_17532__$1;
(statearr_17544_17566[(1)] = (11));

} else {
var statearr_17545_17567 = state_17532__$1;
(statearr_17545_17567[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (5))){
var inst_17509 = (state_17532[(7)]);
var state_17532__$1 = state_17532;
var statearr_17546_17568 = state_17532__$1;
(statearr_17546_17568[(2)] = inst_17509);

(statearr_17546_17568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (10))){
var inst_17528 = (state_17532[(2)]);
var state_17532__$1 = state_17532;
var statearr_17547_17569 = state_17532__$1;
(statearr_17547_17569[(2)] = inst_17528);

(statearr_17547_17569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17533 === (8))){
var inst_17509 = (state_17532[(7)]);
var inst_17519 = cljs.core.next.call(null,inst_17509);
var inst_17509__$1 = inst_17519;
var state_17532__$1 = (function (){var statearr_17548 = state_17532;
(statearr_17548[(7)] = inst_17509__$1);

return statearr_17548;
})();
var statearr_17549_17570 = state_17532__$1;
(statearr_17549_17570[(2)] = null);

(statearr_17549_17570[(1)] = (2));


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
});})(c__7186__auto__))
;
return ((function (switch__7130__auto__,c__7186__auto__){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_17553 = [null,null,null,null,null,null,null,null];
(statearr_17553[(0)] = state_machine__7131__auto__);

(statearr_17553[(1)] = (1));

return statearr_17553;
});
var state_machine__7131__auto____1 = (function (state_17532){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_17532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e17554){if((e17554 instanceof Object)){
var ex__7134__auto__ = e17554;
var statearr_17555_17571 = state_17532;
(statearr_17555_17571[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17572 = state_17532;
state_17532 = G__17572;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_17532){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_17532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto__))
})();
var state__7188__auto__ = (function (){var statearr_17556 = f__7187__auto__.call(null);
(statearr_17556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto__);

return statearr_17556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto__))
);

return c__7186__auto__;
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

cljs.core.async.Mux = (function (){var obj17574 = {};
return obj17574;
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


cljs.core.async.Mult = (function (){var obj17576 = {};
return obj17576;
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
if(typeof cljs.core.async.t17798 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17798 = (function (cs,ch,mult,meta17799){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17799 = meta17799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17798.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17798.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17798.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17798.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17798.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17798.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17800){
var self__ = this;
var _17800__$1 = this;
return self__.meta17799;
});})(cs))
;

cljs.core.async.t17798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17800,meta17799__$1){
var self__ = this;
var _17800__$1 = this;
return (new cljs.core.async.t17798(self__.cs,self__.ch,self__.mult,meta17799__$1));
});})(cs))
;

cljs.core.async.t17798.cljs$lang$type = true;

cljs.core.async.t17798.cljs$lang$ctorStr = "cljs.core.async/t17798";

cljs.core.async.t17798.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t17798");
});})(cs))
;

cljs.core.async.__GT_t17798 = ((function (cs){
return (function __GT_t17798(cs__$1,ch__$1,mult__$1,meta17799){
return (new cljs.core.async.t17798(cs__$1,ch__$1,mult__$1,meta17799));
});})(cs))
;

}

return (new cljs.core.async.t17798(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/resources/public/cljs/core/async.cljs"], null)));
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
var c__7186__auto___18019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___18019,cs,m,dchan,dctr,done){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___18019,cs,m,dchan,dctr,done){
return (function (state_17931){
var state_val_17932 = (state_17931[(1)]);
if((state_val_17932 === (7))){
var inst_17927 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
var statearr_17933_18020 = state_17931__$1;
(statearr_17933_18020[(2)] = inst_17927);

(statearr_17933_18020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (20))){
var inst_17832 = (state_17931[(7)]);
var inst_17842 = cljs.core.first.call(null,inst_17832);
var inst_17843 = cljs.core.nth.call(null,inst_17842,(0),null);
var inst_17844 = cljs.core.nth.call(null,inst_17842,(1),null);
var state_17931__$1 = (function (){var statearr_17934 = state_17931;
(statearr_17934[(8)] = inst_17843);

return statearr_17934;
})();
if(cljs.core.truth_(inst_17844)){
var statearr_17935_18021 = state_17931__$1;
(statearr_17935_18021[(1)] = (22));

} else {
var statearr_17936_18022 = state_17931__$1;
(statearr_17936_18022[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (27))){
var inst_17803 = (state_17931[(9)]);
var inst_17879 = (state_17931[(10)]);
var inst_17872 = (state_17931[(11)]);
var inst_17874 = (state_17931[(12)]);
var inst_17879__$1 = cljs.core._nth.call(null,inst_17872,inst_17874);
var inst_17880 = cljs.core.async.put_BANG_.call(null,inst_17879__$1,inst_17803,done);
var state_17931__$1 = (function (){var statearr_17937 = state_17931;
(statearr_17937[(10)] = inst_17879__$1);

return statearr_17937;
})();
if(cljs.core.truth_(inst_17880)){
var statearr_17938_18023 = state_17931__$1;
(statearr_17938_18023[(1)] = (30));

} else {
var statearr_17939_18024 = state_17931__$1;
(statearr_17939_18024[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (1))){
var state_17931__$1 = state_17931;
var statearr_17940_18025 = state_17931__$1;
(statearr_17940_18025[(2)] = null);

(statearr_17940_18025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (24))){
var inst_17832 = (state_17931[(7)]);
var inst_17849 = (state_17931[(2)]);
var inst_17850 = cljs.core.next.call(null,inst_17832);
var inst_17812 = inst_17850;
var inst_17813 = null;
var inst_17814 = (0);
var inst_17815 = (0);
var state_17931__$1 = (function (){var statearr_17941 = state_17931;
(statearr_17941[(13)] = inst_17812);

(statearr_17941[(14)] = inst_17813);

(statearr_17941[(15)] = inst_17849);

(statearr_17941[(16)] = inst_17814);

(statearr_17941[(17)] = inst_17815);

return statearr_17941;
})();
var statearr_17942_18026 = state_17931__$1;
(statearr_17942_18026[(2)] = null);

(statearr_17942_18026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (39))){
var state_17931__$1 = state_17931;
var statearr_17946_18027 = state_17931__$1;
(statearr_17946_18027[(2)] = null);

(statearr_17946_18027[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (4))){
var inst_17803 = (state_17931[(9)]);
var inst_17803__$1 = (state_17931[(2)]);
var inst_17804 = (inst_17803__$1 == null);
var state_17931__$1 = (function (){var statearr_17947 = state_17931;
(statearr_17947[(9)] = inst_17803__$1);

return statearr_17947;
})();
if(cljs.core.truth_(inst_17804)){
var statearr_17948_18028 = state_17931__$1;
(statearr_17948_18028[(1)] = (5));

} else {
var statearr_17949_18029 = state_17931__$1;
(statearr_17949_18029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (15))){
var inst_17812 = (state_17931[(13)]);
var inst_17813 = (state_17931[(14)]);
var inst_17814 = (state_17931[(16)]);
var inst_17815 = (state_17931[(17)]);
var inst_17828 = (state_17931[(2)]);
var inst_17829 = (inst_17815 + (1));
var tmp17943 = inst_17812;
var tmp17944 = inst_17813;
var tmp17945 = inst_17814;
var inst_17812__$1 = tmp17943;
var inst_17813__$1 = tmp17944;
var inst_17814__$1 = tmp17945;
var inst_17815__$1 = inst_17829;
var state_17931__$1 = (function (){var statearr_17950 = state_17931;
(statearr_17950[(13)] = inst_17812__$1);

(statearr_17950[(14)] = inst_17813__$1);

(statearr_17950[(18)] = inst_17828);

(statearr_17950[(16)] = inst_17814__$1);

(statearr_17950[(17)] = inst_17815__$1);

return statearr_17950;
})();
var statearr_17951_18030 = state_17931__$1;
(statearr_17951_18030[(2)] = null);

(statearr_17951_18030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (21))){
var inst_17853 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
var statearr_17955_18031 = state_17931__$1;
(statearr_17955_18031[(2)] = inst_17853);

(statearr_17955_18031[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (31))){
var inst_17879 = (state_17931[(10)]);
var inst_17883 = done.call(null,null);
var inst_17884 = cljs.core.async.untap_STAR_.call(null,m,inst_17879);
var state_17931__$1 = (function (){var statearr_17956 = state_17931;
(statearr_17956[(19)] = inst_17883);

return statearr_17956;
})();
var statearr_17957_18032 = state_17931__$1;
(statearr_17957_18032[(2)] = inst_17884);

(statearr_17957_18032[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (32))){
var inst_17872 = (state_17931[(11)]);
var inst_17874 = (state_17931[(12)]);
var inst_17871 = (state_17931[(20)]);
var inst_17873 = (state_17931[(21)]);
var inst_17886 = (state_17931[(2)]);
var inst_17887 = (inst_17874 + (1));
var tmp17952 = inst_17872;
var tmp17953 = inst_17871;
var tmp17954 = inst_17873;
var inst_17871__$1 = tmp17953;
var inst_17872__$1 = tmp17952;
var inst_17873__$1 = tmp17954;
var inst_17874__$1 = inst_17887;
var state_17931__$1 = (function (){var statearr_17958 = state_17931;
(statearr_17958[(11)] = inst_17872__$1);

(statearr_17958[(12)] = inst_17874__$1);

(statearr_17958[(22)] = inst_17886);

(statearr_17958[(20)] = inst_17871__$1);

(statearr_17958[(21)] = inst_17873__$1);

return statearr_17958;
})();
var statearr_17959_18033 = state_17931__$1;
(statearr_17959_18033[(2)] = null);

(statearr_17959_18033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (40))){
var inst_17899 = (state_17931[(23)]);
var inst_17903 = done.call(null,null);
var inst_17904 = cljs.core.async.untap_STAR_.call(null,m,inst_17899);
var state_17931__$1 = (function (){var statearr_17960 = state_17931;
(statearr_17960[(24)] = inst_17903);

return statearr_17960;
})();
var statearr_17961_18034 = state_17931__$1;
(statearr_17961_18034[(2)] = inst_17904);

(statearr_17961_18034[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (33))){
var inst_17890 = (state_17931[(25)]);
var inst_17892 = cljs.core.chunked_seq_QMARK_.call(null,inst_17890);
var state_17931__$1 = state_17931;
if(inst_17892){
var statearr_17962_18035 = state_17931__$1;
(statearr_17962_18035[(1)] = (36));

} else {
var statearr_17963_18036 = state_17931__$1;
(statearr_17963_18036[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (13))){
var inst_17822 = (state_17931[(26)]);
var inst_17825 = cljs.core.async.close_BANG_.call(null,inst_17822);
var state_17931__$1 = state_17931;
var statearr_17964_18037 = state_17931__$1;
(statearr_17964_18037[(2)] = inst_17825);

(statearr_17964_18037[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (22))){
var inst_17843 = (state_17931[(8)]);
var inst_17846 = cljs.core.async.close_BANG_.call(null,inst_17843);
var state_17931__$1 = state_17931;
var statearr_17965_18038 = state_17931__$1;
(statearr_17965_18038[(2)] = inst_17846);

(statearr_17965_18038[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (36))){
var inst_17890 = (state_17931[(25)]);
var inst_17894 = cljs.core.chunk_first.call(null,inst_17890);
var inst_17895 = cljs.core.chunk_rest.call(null,inst_17890);
var inst_17896 = cljs.core.count.call(null,inst_17894);
var inst_17871 = inst_17895;
var inst_17872 = inst_17894;
var inst_17873 = inst_17896;
var inst_17874 = (0);
var state_17931__$1 = (function (){var statearr_17966 = state_17931;
(statearr_17966[(11)] = inst_17872);

(statearr_17966[(12)] = inst_17874);

(statearr_17966[(20)] = inst_17871);

(statearr_17966[(21)] = inst_17873);

return statearr_17966;
})();
var statearr_17967_18039 = state_17931__$1;
(statearr_17967_18039[(2)] = null);

(statearr_17967_18039[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (41))){
var inst_17890 = (state_17931[(25)]);
var inst_17906 = (state_17931[(2)]);
var inst_17907 = cljs.core.next.call(null,inst_17890);
var inst_17871 = inst_17907;
var inst_17872 = null;
var inst_17873 = (0);
var inst_17874 = (0);
var state_17931__$1 = (function (){var statearr_17968 = state_17931;
(statearr_17968[(27)] = inst_17906);

(statearr_17968[(11)] = inst_17872);

(statearr_17968[(12)] = inst_17874);

(statearr_17968[(20)] = inst_17871);

(statearr_17968[(21)] = inst_17873);

return statearr_17968;
})();
var statearr_17969_18040 = state_17931__$1;
(statearr_17969_18040[(2)] = null);

(statearr_17969_18040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (43))){
var state_17931__$1 = state_17931;
var statearr_17970_18041 = state_17931__$1;
(statearr_17970_18041[(2)] = null);

(statearr_17970_18041[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (29))){
var inst_17915 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
var statearr_17971_18042 = state_17931__$1;
(statearr_17971_18042[(2)] = inst_17915);

(statearr_17971_18042[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (44))){
var inst_17924 = (state_17931[(2)]);
var state_17931__$1 = (function (){var statearr_17972 = state_17931;
(statearr_17972[(28)] = inst_17924);

return statearr_17972;
})();
var statearr_17973_18043 = state_17931__$1;
(statearr_17973_18043[(2)] = null);

(statearr_17973_18043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (6))){
var inst_17863 = (state_17931[(29)]);
var inst_17862 = cljs.core.deref.call(null,cs);
var inst_17863__$1 = cljs.core.keys.call(null,inst_17862);
var inst_17864 = cljs.core.count.call(null,inst_17863__$1);
var inst_17865 = cljs.core.reset_BANG_.call(null,dctr,inst_17864);
var inst_17870 = cljs.core.seq.call(null,inst_17863__$1);
var inst_17871 = inst_17870;
var inst_17872 = null;
var inst_17873 = (0);
var inst_17874 = (0);
var state_17931__$1 = (function (){var statearr_17974 = state_17931;
(statearr_17974[(11)] = inst_17872);

(statearr_17974[(12)] = inst_17874);

(statearr_17974[(30)] = inst_17865);

(statearr_17974[(20)] = inst_17871);

(statearr_17974[(21)] = inst_17873);

(statearr_17974[(29)] = inst_17863__$1);

return statearr_17974;
})();
var statearr_17975_18044 = state_17931__$1;
(statearr_17975_18044[(2)] = null);

(statearr_17975_18044[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (28))){
var inst_17890 = (state_17931[(25)]);
var inst_17871 = (state_17931[(20)]);
var inst_17890__$1 = cljs.core.seq.call(null,inst_17871);
var state_17931__$1 = (function (){var statearr_17976 = state_17931;
(statearr_17976[(25)] = inst_17890__$1);

return statearr_17976;
})();
if(inst_17890__$1){
var statearr_17977_18045 = state_17931__$1;
(statearr_17977_18045[(1)] = (33));

} else {
var statearr_17978_18046 = state_17931__$1;
(statearr_17978_18046[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (25))){
var inst_17874 = (state_17931[(12)]);
var inst_17873 = (state_17931[(21)]);
var inst_17876 = (inst_17874 < inst_17873);
var inst_17877 = inst_17876;
var state_17931__$1 = state_17931;
if(cljs.core.truth_(inst_17877)){
var statearr_17979_18047 = state_17931__$1;
(statearr_17979_18047[(1)] = (27));

} else {
var statearr_17980_18048 = state_17931__$1;
(statearr_17980_18048[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (34))){
var state_17931__$1 = state_17931;
var statearr_17981_18049 = state_17931__$1;
(statearr_17981_18049[(2)] = null);

(statearr_17981_18049[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (17))){
var state_17931__$1 = state_17931;
var statearr_17982_18050 = state_17931__$1;
(statearr_17982_18050[(2)] = null);

(statearr_17982_18050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (3))){
var inst_17929 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17931__$1,inst_17929);
} else {
if((state_val_17932 === (12))){
var inst_17858 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
var statearr_17983_18051 = state_17931__$1;
(statearr_17983_18051[(2)] = inst_17858);

(statearr_17983_18051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (2))){
var state_17931__$1 = state_17931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17931__$1,(4),ch);
} else {
if((state_val_17932 === (23))){
var state_17931__$1 = state_17931;
var statearr_17984_18052 = state_17931__$1;
(statearr_17984_18052[(2)] = null);

(statearr_17984_18052[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (35))){
var inst_17913 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
var statearr_17985_18053 = state_17931__$1;
(statearr_17985_18053[(2)] = inst_17913);

(statearr_17985_18053[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (19))){
var inst_17832 = (state_17931[(7)]);
var inst_17836 = cljs.core.chunk_first.call(null,inst_17832);
var inst_17837 = cljs.core.chunk_rest.call(null,inst_17832);
var inst_17838 = cljs.core.count.call(null,inst_17836);
var inst_17812 = inst_17837;
var inst_17813 = inst_17836;
var inst_17814 = inst_17838;
var inst_17815 = (0);
var state_17931__$1 = (function (){var statearr_17986 = state_17931;
(statearr_17986[(13)] = inst_17812);

(statearr_17986[(14)] = inst_17813);

(statearr_17986[(16)] = inst_17814);

(statearr_17986[(17)] = inst_17815);

return statearr_17986;
})();
var statearr_17987_18054 = state_17931__$1;
(statearr_17987_18054[(2)] = null);

(statearr_17987_18054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (11))){
var inst_17812 = (state_17931[(13)]);
var inst_17832 = (state_17931[(7)]);
var inst_17832__$1 = cljs.core.seq.call(null,inst_17812);
var state_17931__$1 = (function (){var statearr_17988 = state_17931;
(statearr_17988[(7)] = inst_17832__$1);

return statearr_17988;
})();
if(inst_17832__$1){
var statearr_17989_18055 = state_17931__$1;
(statearr_17989_18055[(1)] = (16));

} else {
var statearr_17990_18056 = state_17931__$1;
(statearr_17990_18056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (9))){
var inst_17860 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
var statearr_17991_18057 = state_17931__$1;
(statearr_17991_18057[(2)] = inst_17860);

(statearr_17991_18057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (5))){
var inst_17810 = cljs.core.deref.call(null,cs);
var inst_17811 = cljs.core.seq.call(null,inst_17810);
var inst_17812 = inst_17811;
var inst_17813 = null;
var inst_17814 = (0);
var inst_17815 = (0);
var state_17931__$1 = (function (){var statearr_17992 = state_17931;
(statearr_17992[(13)] = inst_17812);

(statearr_17992[(14)] = inst_17813);

(statearr_17992[(16)] = inst_17814);

(statearr_17992[(17)] = inst_17815);

return statearr_17992;
})();
var statearr_17993_18058 = state_17931__$1;
(statearr_17993_18058[(2)] = null);

(statearr_17993_18058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (14))){
var state_17931__$1 = state_17931;
var statearr_17994_18059 = state_17931__$1;
(statearr_17994_18059[(2)] = null);

(statearr_17994_18059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (45))){
var inst_17921 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
var statearr_17995_18060 = state_17931__$1;
(statearr_17995_18060[(2)] = inst_17921);

(statearr_17995_18060[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (26))){
var inst_17863 = (state_17931[(29)]);
var inst_17917 = (state_17931[(2)]);
var inst_17918 = cljs.core.seq.call(null,inst_17863);
var state_17931__$1 = (function (){var statearr_17996 = state_17931;
(statearr_17996[(31)] = inst_17917);

return statearr_17996;
})();
if(inst_17918){
var statearr_17997_18061 = state_17931__$1;
(statearr_17997_18061[(1)] = (42));

} else {
var statearr_17998_18062 = state_17931__$1;
(statearr_17998_18062[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (16))){
var inst_17832 = (state_17931[(7)]);
var inst_17834 = cljs.core.chunked_seq_QMARK_.call(null,inst_17832);
var state_17931__$1 = state_17931;
if(inst_17834){
var statearr_17999_18063 = state_17931__$1;
(statearr_17999_18063[(1)] = (19));

} else {
var statearr_18000_18064 = state_17931__$1;
(statearr_18000_18064[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (38))){
var inst_17910 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
var statearr_18001_18065 = state_17931__$1;
(statearr_18001_18065[(2)] = inst_17910);

(statearr_18001_18065[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (30))){
var state_17931__$1 = state_17931;
var statearr_18002_18066 = state_17931__$1;
(statearr_18002_18066[(2)] = null);

(statearr_18002_18066[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (10))){
var inst_17813 = (state_17931[(14)]);
var inst_17815 = (state_17931[(17)]);
var inst_17821 = cljs.core._nth.call(null,inst_17813,inst_17815);
var inst_17822 = cljs.core.nth.call(null,inst_17821,(0),null);
var inst_17823 = cljs.core.nth.call(null,inst_17821,(1),null);
var state_17931__$1 = (function (){var statearr_18003 = state_17931;
(statearr_18003[(26)] = inst_17822);

return statearr_18003;
})();
if(cljs.core.truth_(inst_17823)){
var statearr_18004_18067 = state_17931__$1;
(statearr_18004_18067[(1)] = (13));

} else {
var statearr_18005_18068 = state_17931__$1;
(statearr_18005_18068[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (18))){
var inst_17856 = (state_17931[(2)]);
var state_17931__$1 = state_17931;
var statearr_18006_18069 = state_17931__$1;
(statearr_18006_18069[(2)] = inst_17856);

(statearr_18006_18069[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (42))){
var state_17931__$1 = state_17931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17931__$1,(45),dchan);
} else {
if((state_val_17932 === (37))){
var inst_17803 = (state_17931[(9)]);
var inst_17890 = (state_17931[(25)]);
var inst_17899 = (state_17931[(23)]);
var inst_17899__$1 = cljs.core.first.call(null,inst_17890);
var inst_17900 = cljs.core.async.put_BANG_.call(null,inst_17899__$1,inst_17803,done);
var state_17931__$1 = (function (){var statearr_18007 = state_17931;
(statearr_18007[(23)] = inst_17899__$1);

return statearr_18007;
})();
if(cljs.core.truth_(inst_17900)){
var statearr_18008_18070 = state_17931__$1;
(statearr_18008_18070[(1)] = (39));

} else {
var statearr_18009_18071 = state_17931__$1;
(statearr_18009_18071[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17932 === (8))){
var inst_17814 = (state_17931[(16)]);
var inst_17815 = (state_17931[(17)]);
var inst_17817 = (inst_17815 < inst_17814);
var inst_17818 = inst_17817;
var state_17931__$1 = state_17931;
if(cljs.core.truth_(inst_17818)){
var statearr_18010_18072 = state_17931__$1;
(statearr_18010_18072[(1)] = (10));

} else {
var statearr_18011_18073 = state_17931__$1;
(statearr_18011_18073[(1)] = (11));

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
});})(c__7186__auto___18019,cs,m,dchan,dctr,done))
;
return ((function (switch__7130__auto__,c__7186__auto___18019,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_18015 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18015[(0)] = state_machine__7131__auto__);

(statearr_18015[(1)] = (1));

return statearr_18015;
});
var state_machine__7131__auto____1 = (function (state_17931){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_17931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e18016){if((e18016 instanceof Object)){
var ex__7134__auto__ = e18016;
var statearr_18017_18074 = state_17931;
(statearr_18017_18074[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18075 = state_17931;
state_17931 = G__18075;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_17931){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_17931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___18019,cs,m,dchan,dctr,done))
})();
var state__7188__auto__ = (function (){var statearr_18018 = f__7187__auto__.call(null);
(statearr_18018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___18019);

return statearr_18018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___18019,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj18077 = {};
return obj18077;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__18078){
var map__18083 = p__18078;
var map__18083__$1 = ((cljs.core.seq_QMARK_.call(null,map__18083))?cljs.core.apply.call(null,cljs.core.hash_map,map__18083):map__18083);
var opts = map__18083__$1;
var statearr_18084_18087 = state;
(statearr_18084_18087[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__18083,map__18083__$1,opts){
return (function (val){
var statearr_18085_18088 = state;
(statearr_18085_18088[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18083,map__18083__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_18086_18089 = state;
(statearr_18086_18089[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__18078 = null;
if (arguments.length > 3) {
var G__18090__i = 0, G__18090__a = new Array(arguments.length -  3);
while (G__18090__i < G__18090__a.length) {G__18090__a[G__18090__i] = arguments[G__18090__i + 3]; ++G__18090__i;}
  p__18078 = new cljs.core.IndexedSeq(G__18090__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__18078);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__18091){
var state = cljs.core.first(arglist__18091);
arglist__18091 = cljs.core.next(arglist__18091);
var cont_block = cljs.core.first(arglist__18091);
arglist__18091 = cljs.core.next(arglist__18091);
var ports = cljs.core.first(arglist__18091);
var p__18078 = cljs.core.rest(arglist__18091);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__18078);
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
if(typeof cljs.core.async.t18211 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18211 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18212){
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
this.meta18212 = meta18212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18211.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t18211.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18211.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18211.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18211.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18211.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t18211.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18213){
var self__ = this;
var _18213__$1 = this;
return self__.meta18212;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18213,meta18212__$1){
var self__ = this;
var _18213__$1 = this;
return (new cljs.core.async.t18211(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18212__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t18211.cljs$lang$type = true;

cljs.core.async.t18211.cljs$lang$ctorStr = "cljs.core.async/t18211";

cljs.core.async.t18211.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t18211");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t18211 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t18211(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18212){
return (new cljs.core.async.t18211(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18212));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t18211(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/resources/public/cljs/core/async.cljs"], null)));
})()
;
var c__7186__auto___18330 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___18330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___18330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18283){
var state_val_18284 = (state_18283[(1)]);
if((state_val_18284 === (7))){
var inst_18227 = (state_18283[(7)]);
var inst_18232 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18227);
var state_18283__$1 = state_18283;
var statearr_18285_18331 = state_18283__$1;
(statearr_18285_18331[(2)] = inst_18232);

(statearr_18285_18331[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (20))){
var inst_18242 = (state_18283[(8)]);
var state_18283__$1 = state_18283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18283__$1,(23),out,inst_18242);
} else {
if((state_val_18284 === (1))){
var inst_18217 = (state_18283[(9)]);
var inst_18217__$1 = calc_state.call(null);
var inst_18218 = cljs.core.seq_QMARK_.call(null,inst_18217__$1);
var state_18283__$1 = (function (){var statearr_18286 = state_18283;
(statearr_18286[(9)] = inst_18217__$1);

return statearr_18286;
})();
if(inst_18218){
var statearr_18287_18332 = state_18283__$1;
(statearr_18287_18332[(1)] = (2));

} else {
var statearr_18288_18333 = state_18283__$1;
(statearr_18288_18333[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (24))){
var inst_18235 = (state_18283[(10)]);
var inst_18227 = inst_18235;
var state_18283__$1 = (function (){var statearr_18289 = state_18283;
(statearr_18289[(7)] = inst_18227);

return statearr_18289;
})();
var statearr_18290_18334 = state_18283__$1;
(statearr_18290_18334[(2)] = null);

(statearr_18290_18334[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (4))){
var inst_18217 = (state_18283[(9)]);
var inst_18223 = (state_18283[(2)]);
var inst_18224 = cljs.core.get.call(null,inst_18223,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18225 = cljs.core.get.call(null,inst_18223,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18226 = cljs.core.get.call(null,inst_18223,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18227 = inst_18217;
var state_18283__$1 = (function (){var statearr_18291 = state_18283;
(statearr_18291[(11)] = inst_18224);

(statearr_18291[(12)] = inst_18225);

(statearr_18291[(7)] = inst_18227);

(statearr_18291[(13)] = inst_18226);

return statearr_18291;
})();
var statearr_18292_18335 = state_18283__$1;
(statearr_18292_18335[(2)] = null);

(statearr_18292_18335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (15))){
var state_18283__$1 = state_18283;
var statearr_18293_18336 = state_18283__$1;
(statearr_18293_18336[(2)] = null);

(statearr_18293_18336[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (21))){
var inst_18235 = (state_18283[(10)]);
var inst_18227 = inst_18235;
var state_18283__$1 = (function (){var statearr_18294 = state_18283;
(statearr_18294[(7)] = inst_18227);

return statearr_18294;
})();
var statearr_18295_18337 = state_18283__$1;
(statearr_18295_18337[(2)] = null);

(statearr_18295_18337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (13))){
var inst_18279 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
var statearr_18296_18338 = state_18283__$1;
(statearr_18296_18338[(2)] = inst_18279);

(statearr_18296_18338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (22))){
var inst_18277 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
var statearr_18297_18339 = state_18283__$1;
(statearr_18297_18339[(2)] = inst_18277);

(statearr_18297_18339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (6))){
var inst_18281 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18283__$1,inst_18281);
} else {
if((state_val_18284 === (25))){
var state_18283__$1 = state_18283;
var statearr_18298_18340 = state_18283__$1;
(statearr_18298_18340[(2)] = null);

(statearr_18298_18340[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (17))){
var inst_18257 = (state_18283[(14)]);
var state_18283__$1 = state_18283;
var statearr_18299_18341 = state_18283__$1;
(statearr_18299_18341[(2)] = inst_18257);

(statearr_18299_18341[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (3))){
var inst_18217 = (state_18283[(9)]);
var state_18283__$1 = state_18283;
var statearr_18300_18342 = state_18283__$1;
(statearr_18300_18342[(2)] = inst_18217);

(statearr_18300_18342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (12))){
var inst_18243 = (state_18283[(15)]);
var inst_18238 = (state_18283[(16)]);
var inst_18257 = (state_18283[(14)]);
var inst_18257__$1 = inst_18238.call(null,inst_18243);
var state_18283__$1 = (function (){var statearr_18301 = state_18283;
(statearr_18301[(14)] = inst_18257__$1);

return statearr_18301;
})();
if(cljs.core.truth_(inst_18257__$1)){
var statearr_18302_18343 = state_18283__$1;
(statearr_18302_18343[(1)] = (17));

} else {
var statearr_18303_18344 = state_18283__$1;
(statearr_18303_18344[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (2))){
var inst_18217 = (state_18283[(9)]);
var inst_18220 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18217);
var state_18283__$1 = state_18283;
var statearr_18304_18345 = state_18283__$1;
(statearr_18304_18345[(2)] = inst_18220);

(statearr_18304_18345[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (23))){
var inst_18268 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
if(cljs.core.truth_(inst_18268)){
var statearr_18305_18346 = state_18283__$1;
(statearr_18305_18346[(1)] = (24));

} else {
var statearr_18306_18347 = state_18283__$1;
(statearr_18306_18347[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (19))){
var inst_18265 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
if(cljs.core.truth_(inst_18265)){
var statearr_18307_18348 = state_18283__$1;
(statearr_18307_18348[(1)] = (20));

} else {
var statearr_18308_18349 = state_18283__$1;
(statearr_18308_18349[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (11))){
var inst_18242 = (state_18283[(8)]);
var inst_18248 = (inst_18242 == null);
var state_18283__$1 = state_18283;
if(cljs.core.truth_(inst_18248)){
var statearr_18309_18350 = state_18283__$1;
(statearr_18309_18350[(1)] = (14));

} else {
var statearr_18310_18351 = state_18283__$1;
(statearr_18310_18351[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (9))){
var inst_18235 = (state_18283[(10)]);
var inst_18235__$1 = (state_18283[(2)]);
var inst_18236 = cljs.core.get.call(null,inst_18235__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18237 = cljs.core.get.call(null,inst_18235__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18238 = cljs.core.get.call(null,inst_18235__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_18283__$1 = (function (){var statearr_18311 = state_18283;
(statearr_18311[(16)] = inst_18238);

(statearr_18311[(17)] = inst_18237);

(statearr_18311[(10)] = inst_18235__$1);

return statearr_18311;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18283__$1,(10),inst_18236);
} else {
if((state_val_18284 === (5))){
var inst_18227 = (state_18283[(7)]);
var inst_18230 = cljs.core.seq_QMARK_.call(null,inst_18227);
var state_18283__$1 = state_18283;
if(inst_18230){
var statearr_18312_18352 = state_18283__$1;
(statearr_18312_18352[(1)] = (7));

} else {
var statearr_18313_18353 = state_18283__$1;
(statearr_18313_18353[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (14))){
var inst_18243 = (state_18283[(15)]);
var inst_18250 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18243);
var state_18283__$1 = state_18283;
var statearr_18314_18354 = state_18283__$1;
(statearr_18314_18354[(2)] = inst_18250);

(statearr_18314_18354[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (26))){
var inst_18273 = (state_18283[(2)]);
var state_18283__$1 = state_18283;
var statearr_18315_18355 = state_18283__$1;
(statearr_18315_18355[(2)] = inst_18273);

(statearr_18315_18355[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (16))){
var inst_18253 = (state_18283[(2)]);
var inst_18254 = calc_state.call(null);
var inst_18227 = inst_18254;
var state_18283__$1 = (function (){var statearr_18316 = state_18283;
(statearr_18316[(18)] = inst_18253);

(statearr_18316[(7)] = inst_18227);

return statearr_18316;
})();
var statearr_18317_18356 = state_18283__$1;
(statearr_18317_18356[(2)] = null);

(statearr_18317_18356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (10))){
var inst_18243 = (state_18283[(15)]);
var inst_18242 = (state_18283[(8)]);
var inst_18241 = (state_18283[(2)]);
var inst_18242__$1 = cljs.core.nth.call(null,inst_18241,(0),null);
var inst_18243__$1 = cljs.core.nth.call(null,inst_18241,(1),null);
var inst_18244 = (inst_18242__$1 == null);
var inst_18245 = cljs.core._EQ_.call(null,inst_18243__$1,change);
var inst_18246 = (inst_18244) || (inst_18245);
var state_18283__$1 = (function (){var statearr_18318 = state_18283;
(statearr_18318[(15)] = inst_18243__$1);

(statearr_18318[(8)] = inst_18242__$1);

return statearr_18318;
})();
if(cljs.core.truth_(inst_18246)){
var statearr_18319_18357 = state_18283__$1;
(statearr_18319_18357[(1)] = (11));

} else {
var statearr_18320_18358 = state_18283__$1;
(statearr_18320_18358[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (18))){
var inst_18243 = (state_18283[(15)]);
var inst_18238 = (state_18283[(16)]);
var inst_18237 = (state_18283[(17)]);
var inst_18260 = cljs.core.empty_QMARK_.call(null,inst_18238);
var inst_18261 = inst_18237.call(null,inst_18243);
var inst_18262 = cljs.core.not.call(null,inst_18261);
var inst_18263 = (inst_18260) && (inst_18262);
var state_18283__$1 = state_18283;
var statearr_18321_18359 = state_18283__$1;
(statearr_18321_18359[(2)] = inst_18263);

(statearr_18321_18359[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18284 === (8))){
var inst_18227 = (state_18283[(7)]);
var state_18283__$1 = state_18283;
var statearr_18322_18360 = state_18283__$1;
(statearr_18322_18360[(2)] = inst_18227);

(statearr_18322_18360[(1)] = (9));


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
});})(c__7186__auto___18330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7130__auto__,c__7186__auto___18330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_18326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18326[(0)] = state_machine__7131__auto__);

(statearr_18326[(1)] = (1));

return statearr_18326;
});
var state_machine__7131__auto____1 = (function (state_18283){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_18283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e18327){if((e18327 instanceof Object)){
var ex__7134__auto__ = e18327;
var statearr_18328_18361 = state_18283;
(statearr_18328_18361[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18327;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18362 = state_18283;
state_18283 = G__18362;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_18283){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_18283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___18330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7188__auto__ = (function (){var statearr_18329 = f__7187__auto__.call(null);
(statearr_18329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___18330);

return statearr_18329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___18330,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18364 = {};
return obj18364;
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
return (function (p1__18365_SHARP_){
if(cljs.core.truth_(p1__18365_SHARP_.call(null,topic))){
return p1__18365_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18365_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3772__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18488 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18488 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18489){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18489 = meta18489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18488.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18488.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18488.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18488.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18488.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18488.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18488.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18490){
var self__ = this;
var _18490__$1 = this;
return self__.meta18489;
});})(mults,ensure_mult))
;

cljs.core.async.t18488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18490,meta18489__$1){
var self__ = this;
var _18490__$1 = this;
return (new cljs.core.async.t18488(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18489__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18488.cljs$lang$type = true;

cljs.core.async.t18488.cljs$lang$ctorStr = "cljs.core.async/t18488";

cljs.core.async.t18488.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t18488");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18488 = ((function (mults,ensure_mult){
return (function __GT_t18488(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18489){
return (new cljs.core.async.t18488(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18489));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18488(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/resources/public/cljs/core/async.cljs"], null)));
})()
;
var c__7186__auto___18610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___18610,mults,ensure_mult,p){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___18610,mults,ensure_mult,p){
return (function (state_18562){
var state_val_18563 = (state_18562[(1)]);
if((state_val_18563 === (7))){
var inst_18558 = (state_18562[(2)]);
var state_18562__$1 = state_18562;
var statearr_18564_18611 = state_18562__$1;
(statearr_18564_18611[(2)] = inst_18558);

(statearr_18564_18611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (20))){
var state_18562__$1 = state_18562;
var statearr_18565_18612 = state_18562__$1;
(statearr_18565_18612[(2)] = null);

(statearr_18565_18612[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (1))){
var state_18562__$1 = state_18562;
var statearr_18566_18613 = state_18562__$1;
(statearr_18566_18613[(2)] = null);

(statearr_18566_18613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (24))){
var inst_18541 = (state_18562[(7)]);
var inst_18550 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18541);
var state_18562__$1 = state_18562;
var statearr_18567_18614 = state_18562__$1;
(statearr_18567_18614[(2)] = inst_18550);

(statearr_18567_18614[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (4))){
var inst_18493 = (state_18562[(8)]);
var inst_18493__$1 = (state_18562[(2)]);
var inst_18494 = (inst_18493__$1 == null);
var state_18562__$1 = (function (){var statearr_18568 = state_18562;
(statearr_18568[(8)] = inst_18493__$1);

return statearr_18568;
})();
if(cljs.core.truth_(inst_18494)){
var statearr_18569_18615 = state_18562__$1;
(statearr_18569_18615[(1)] = (5));

} else {
var statearr_18570_18616 = state_18562__$1;
(statearr_18570_18616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (15))){
var inst_18535 = (state_18562[(2)]);
var state_18562__$1 = state_18562;
var statearr_18571_18617 = state_18562__$1;
(statearr_18571_18617[(2)] = inst_18535);

(statearr_18571_18617[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (21))){
var inst_18555 = (state_18562[(2)]);
var state_18562__$1 = (function (){var statearr_18572 = state_18562;
(statearr_18572[(9)] = inst_18555);

return statearr_18572;
})();
var statearr_18573_18618 = state_18562__$1;
(statearr_18573_18618[(2)] = null);

(statearr_18573_18618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (13))){
var inst_18517 = (state_18562[(10)]);
var inst_18519 = cljs.core.chunked_seq_QMARK_.call(null,inst_18517);
var state_18562__$1 = state_18562;
if(inst_18519){
var statearr_18574_18619 = state_18562__$1;
(statearr_18574_18619[(1)] = (16));

} else {
var statearr_18575_18620 = state_18562__$1;
(statearr_18575_18620[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (22))){
var inst_18547 = (state_18562[(2)]);
var state_18562__$1 = state_18562;
if(cljs.core.truth_(inst_18547)){
var statearr_18576_18621 = state_18562__$1;
(statearr_18576_18621[(1)] = (23));

} else {
var statearr_18577_18622 = state_18562__$1;
(statearr_18577_18622[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (6))){
var inst_18493 = (state_18562[(8)]);
var inst_18543 = (state_18562[(11)]);
var inst_18541 = (state_18562[(7)]);
var inst_18541__$1 = topic_fn.call(null,inst_18493);
var inst_18542 = cljs.core.deref.call(null,mults);
var inst_18543__$1 = cljs.core.get.call(null,inst_18542,inst_18541__$1);
var state_18562__$1 = (function (){var statearr_18578 = state_18562;
(statearr_18578[(11)] = inst_18543__$1);

(statearr_18578[(7)] = inst_18541__$1);

return statearr_18578;
})();
if(cljs.core.truth_(inst_18543__$1)){
var statearr_18579_18623 = state_18562__$1;
(statearr_18579_18623[(1)] = (19));

} else {
var statearr_18580_18624 = state_18562__$1;
(statearr_18580_18624[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (25))){
var inst_18552 = (state_18562[(2)]);
var state_18562__$1 = state_18562;
var statearr_18581_18625 = state_18562__$1;
(statearr_18581_18625[(2)] = inst_18552);

(statearr_18581_18625[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (17))){
var inst_18517 = (state_18562[(10)]);
var inst_18526 = cljs.core.first.call(null,inst_18517);
var inst_18527 = cljs.core.async.muxch_STAR_.call(null,inst_18526);
var inst_18528 = cljs.core.async.close_BANG_.call(null,inst_18527);
var inst_18529 = cljs.core.next.call(null,inst_18517);
var inst_18503 = inst_18529;
var inst_18504 = null;
var inst_18505 = (0);
var inst_18506 = (0);
var state_18562__$1 = (function (){var statearr_18582 = state_18562;
(statearr_18582[(12)] = inst_18506);

(statearr_18582[(13)] = inst_18528);

(statearr_18582[(14)] = inst_18505);

(statearr_18582[(15)] = inst_18503);

(statearr_18582[(16)] = inst_18504);

return statearr_18582;
})();
var statearr_18583_18626 = state_18562__$1;
(statearr_18583_18626[(2)] = null);

(statearr_18583_18626[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (3))){
var inst_18560 = (state_18562[(2)]);
var state_18562__$1 = state_18562;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18562__$1,inst_18560);
} else {
if((state_val_18563 === (12))){
var inst_18537 = (state_18562[(2)]);
var state_18562__$1 = state_18562;
var statearr_18584_18627 = state_18562__$1;
(statearr_18584_18627[(2)] = inst_18537);

(statearr_18584_18627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (2))){
var state_18562__$1 = state_18562;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18562__$1,(4),ch);
} else {
if((state_val_18563 === (23))){
var state_18562__$1 = state_18562;
var statearr_18585_18628 = state_18562__$1;
(statearr_18585_18628[(2)] = null);

(statearr_18585_18628[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (19))){
var inst_18493 = (state_18562[(8)]);
var inst_18543 = (state_18562[(11)]);
var inst_18545 = cljs.core.async.muxch_STAR_.call(null,inst_18543);
var state_18562__$1 = state_18562;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18562__$1,(22),inst_18545,inst_18493);
} else {
if((state_val_18563 === (11))){
var inst_18517 = (state_18562[(10)]);
var inst_18503 = (state_18562[(15)]);
var inst_18517__$1 = cljs.core.seq.call(null,inst_18503);
var state_18562__$1 = (function (){var statearr_18586 = state_18562;
(statearr_18586[(10)] = inst_18517__$1);

return statearr_18586;
})();
if(inst_18517__$1){
var statearr_18587_18629 = state_18562__$1;
(statearr_18587_18629[(1)] = (13));

} else {
var statearr_18588_18630 = state_18562__$1;
(statearr_18588_18630[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (9))){
var inst_18539 = (state_18562[(2)]);
var state_18562__$1 = state_18562;
var statearr_18589_18631 = state_18562__$1;
(statearr_18589_18631[(2)] = inst_18539);

(statearr_18589_18631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (5))){
var inst_18500 = cljs.core.deref.call(null,mults);
var inst_18501 = cljs.core.vals.call(null,inst_18500);
var inst_18502 = cljs.core.seq.call(null,inst_18501);
var inst_18503 = inst_18502;
var inst_18504 = null;
var inst_18505 = (0);
var inst_18506 = (0);
var state_18562__$1 = (function (){var statearr_18590 = state_18562;
(statearr_18590[(12)] = inst_18506);

(statearr_18590[(14)] = inst_18505);

(statearr_18590[(15)] = inst_18503);

(statearr_18590[(16)] = inst_18504);

return statearr_18590;
})();
var statearr_18591_18632 = state_18562__$1;
(statearr_18591_18632[(2)] = null);

(statearr_18591_18632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (14))){
var state_18562__$1 = state_18562;
var statearr_18595_18633 = state_18562__$1;
(statearr_18595_18633[(2)] = null);

(statearr_18595_18633[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (16))){
var inst_18517 = (state_18562[(10)]);
var inst_18521 = cljs.core.chunk_first.call(null,inst_18517);
var inst_18522 = cljs.core.chunk_rest.call(null,inst_18517);
var inst_18523 = cljs.core.count.call(null,inst_18521);
var inst_18503 = inst_18522;
var inst_18504 = inst_18521;
var inst_18505 = inst_18523;
var inst_18506 = (0);
var state_18562__$1 = (function (){var statearr_18596 = state_18562;
(statearr_18596[(12)] = inst_18506);

(statearr_18596[(14)] = inst_18505);

(statearr_18596[(15)] = inst_18503);

(statearr_18596[(16)] = inst_18504);

return statearr_18596;
})();
var statearr_18597_18634 = state_18562__$1;
(statearr_18597_18634[(2)] = null);

(statearr_18597_18634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (10))){
var inst_18506 = (state_18562[(12)]);
var inst_18505 = (state_18562[(14)]);
var inst_18503 = (state_18562[(15)]);
var inst_18504 = (state_18562[(16)]);
var inst_18511 = cljs.core._nth.call(null,inst_18504,inst_18506);
var inst_18512 = cljs.core.async.muxch_STAR_.call(null,inst_18511);
var inst_18513 = cljs.core.async.close_BANG_.call(null,inst_18512);
var inst_18514 = (inst_18506 + (1));
var tmp18592 = inst_18505;
var tmp18593 = inst_18503;
var tmp18594 = inst_18504;
var inst_18503__$1 = tmp18593;
var inst_18504__$1 = tmp18594;
var inst_18505__$1 = tmp18592;
var inst_18506__$1 = inst_18514;
var state_18562__$1 = (function (){var statearr_18598 = state_18562;
(statearr_18598[(12)] = inst_18506__$1);

(statearr_18598[(17)] = inst_18513);

(statearr_18598[(14)] = inst_18505__$1);

(statearr_18598[(15)] = inst_18503__$1);

(statearr_18598[(16)] = inst_18504__$1);

return statearr_18598;
})();
var statearr_18599_18635 = state_18562__$1;
(statearr_18599_18635[(2)] = null);

(statearr_18599_18635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (18))){
var inst_18532 = (state_18562[(2)]);
var state_18562__$1 = state_18562;
var statearr_18600_18636 = state_18562__$1;
(statearr_18600_18636[(2)] = inst_18532);

(statearr_18600_18636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18563 === (8))){
var inst_18506 = (state_18562[(12)]);
var inst_18505 = (state_18562[(14)]);
var inst_18508 = (inst_18506 < inst_18505);
var inst_18509 = inst_18508;
var state_18562__$1 = state_18562;
if(cljs.core.truth_(inst_18509)){
var statearr_18601_18637 = state_18562__$1;
(statearr_18601_18637[(1)] = (10));

} else {
var statearr_18602_18638 = state_18562__$1;
(statearr_18602_18638[(1)] = (11));

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
});})(c__7186__auto___18610,mults,ensure_mult,p))
;
return ((function (switch__7130__auto__,c__7186__auto___18610,mults,ensure_mult,p){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_18606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18606[(0)] = state_machine__7131__auto__);

(statearr_18606[(1)] = (1));

return statearr_18606;
});
var state_machine__7131__auto____1 = (function (state_18562){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_18562);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e18607){if((e18607 instanceof Object)){
var ex__7134__auto__ = e18607;
var statearr_18608_18639 = state_18562;
(statearr_18608_18639[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18562);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18607;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18640 = state_18562;
state_18562 = G__18640;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_18562){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_18562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___18610,mults,ensure_mult,p))
})();
var state__7188__auto__ = (function (){var statearr_18609 = f__7187__auto__.call(null);
(statearr_18609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___18610);

return statearr_18609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___18610,mults,ensure_mult,p))
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
var c__7186__auto___18777 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___18777,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___18777,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18747){
var state_val_18748 = (state_18747[(1)]);
if((state_val_18748 === (7))){
var state_18747__$1 = state_18747;
var statearr_18749_18778 = state_18747__$1;
(statearr_18749_18778[(2)] = null);

(statearr_18749_18778[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18748 === (1))){
var state_18747__$1 = state_18747;
var statearr_18750_18779 = state_18747__$1;
(statearr_18750_18779[(2)] = null);

(statearr_18750_18779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18748 === (4))){
var inst_18711 = (state_18747[(7)]);
var inst_18713 = (inst_18711 < cnt);
var state_18747__$1 = state_18747;
if(cljs.core.truth_(inst_18713)){
var statearr_18751_18780 = state_18747__$1;
(statearr_18751_18780[(1)] = (6));

} else {
var statearr_18752_18781 = state_18747__$1;
(statearr_18752_18781[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18748 === (15))){
var inst_18743 = (state_18747[(2)]);
var state_18747__$1 = state_18747;
var statearr_18753_18782 = state_18747__$1;
(statearr_18753_18782[(2)] = inst_18743);

(statearr_18753_18782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18748 === (13))){
var inst_18736 = cljs.core.async.close_BANG_.call(null,out);
var state_18747__$1 = state_18747;
var statearr_18754_18783 = state_18747__$1;
(statearr_18754_18783[(2)] = inst_18736);

(statearr_18754_18783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18748 === (6))){
var state_18747__$1 = state_18747;
var statearr_18755_18784 = state_18747__$1;
(statearr_18755_18784[(2)] = null);

(statearr_18755_18784[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18748 === (3))){
var inst_18745 = (state_18747[(2)]);
var state_18747__$1 = state_18747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18747__$1,inst_18745);
} else {
if((state_val_18748 === (12))){
var inst_18733 = (state_18747[(8)]);
var inst_18733__$1 = (state_18747[(2)]);
var inst_18734 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18733__$1);
var state_18747__$1 = (function (){var statearr_18756 = state_18747;
(statearr_18756[(8)] = inst_18733__$1);

return statearr_18756;
})();
if(cljs.core.truth_(inst_18734)){
var statearr_18757_18785 = state_18747__$1;
(statearr_18757_18785[(1)] = (13));

} else {
var statearr_18758_18786 = state_18747__$1;
(statearr_18758_18786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18748 === (2))){
var inst_18710 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18711 = (0);
var state_18747__$1 = (function (){var statearr_18759 = state_18747;
(statearr_18759[(7)] = inst_18711);

(statearr_18759[(9)] = inst_18710);

return statearr_18759;
})();
var statearr_18760_18787 = state_18747__$1;
(statearr_18760_18787[(2)] = null);

(statearr_18760_18787[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18748 === (11))){
var inst_18711 = (state_18747[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18747,(10),Object,null,(9));
var inst_18720 = chs__$1.call(null,inst_18711);
var inst_18721 = done.call(null,inst_18711);
var inst_18722 = cljs.core.async.take_BANG_.call(null,inst_18720,inst_18721);
var state_18747__$1 = state_18747;
var statearr_18761_18788 = state_18747__$1;
(statearr_18761_18788[(2)] = inst_18722);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18747__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18748 === (9))){
var inst_18711 = (state_18747[(7)]);
var inst_18724 = (state_18747[(2)]);
var inst_18725 = (inst_18711 + (1));
var inst_18711__$1 = inst_18725;
var state_18747__$1 = (function (){var statearr_18762 = state_18747;
(statearr_18762[(7)] = inst_18711__$1);

(statearr_18762[(10)] = inst_18724);

return statearr_18762;
})();
var statearr_18763_18789 = state_18747__$1;
(statearr_18763_18789[(2)] = null);

(statearr_18763_18789[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18748 === (5))){
var inst_18731 = (state_18747[(2)]);
var state_18747__$1 = (function (){var statearr_18764 = state_18747;
(statearr_18764[(11)] = inst_18731);

return statearr_18764;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18747__$1,(12),dchan);
} else {
if((state_val_18748 === (14))){
var inst_18733 = (state_18747[(8)]);
var inst_18738 = cljs.core.apply.call(null,f,inst_18733);
var state_18747__$1 = state_18747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18747__$1,(16),out,inst_18738);
} else {
if((state_val_18748 === (16))){
var inst_18740 = (state_18747[(2)]);
var state_18747__$1 = (function (){var statearr_18765 = state_18747;
(statearr_18765[(12)] = inst_18740);

return statearr_18765;
})();
var statearr_18766_18790 = state_18747__$1;
(statearr_18766_18790[(2)] = null);

(statearr_18766_18790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18748 === (10))){
var inst_18715 = (state_18747[(2)]);
var inst_18716 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18747__$1 = (function (){var statearr_18767 = state_18747;
(statearr_18767[(13)] = inst_18715);

return statearr_18767;
})();
var statearr_18768_18791 = state_18747__$1;
(statearr_18768_18791[(2)] = inst_18716);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18747__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18748 === (8))){
var inst_18729 = (state_18747[(2)]);
var state_18747__$1 = state_18747;
var statearr_18769_18792 = state_18747__$1;
(statearr_18769_18792[(2)] = inst_18729);

(statearr_18769_18792[(1)] = (5));


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
});})(c__7186__auto___18777,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7130__auto__,c__7186__auto___18777,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_18773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18773[(0)] = state_machine__7131__auto__);

(statearr_18773[(1)] = (1));

return statearr_18773;
});
var state_machine__7131__auto____1 = (function (state_18747){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_18747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e18774){if((e18774 instanceof Object)){
var ex__7134__auto__ = e18774;
var statearr_18775_18793 = state_18747;
(statearr_18775_18793[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18794 = state_18747;
state_18747 = G__18794;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_18747){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_18747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___18777,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7188__auto__ = (function (){var statearr_18776 = f__7187__auto__.call(null);
(statearr_18776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___18777);

return statearr_18776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___18777,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__7186__auto___18902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___18902,out){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___18902,out){
return (function (state_18878){
var state_val_18879 = (state_18878[(1)]);
if((state_val_18879 === (7))){
var inst_18858 = (state_18878[(7)]);
var inst_18857 = (state_18878[(8)]);
var inst_18857__$1 = (state_18878[(2)]);
var inst_18858__$1 = cljs.core.nth.call(null,inst_18857__$1,(0),null);
var inst_18859 = cljs.core.nth.call(null,inst_18857__$1,(1),null);
var inst_18860 = (inst_18858__$1 == null);
var state_18878__$1 = (function (){var statearr_18880 = state_18878;
(statearr_18880[(7)] = inst_18858__$1);

(statearr_18880[(8)] = inst_18857__$1);

(statearr_18880[(9)] = inst_18859);

return statearr_18880;
})();
if(cljs.core.truth_(inst_18860)){
var statearr_18881_18903 = state_18878__$1;
(statearr_18881_18903[(1)] = (8));

} else {
var statearr_18882_18904 = state_18878__$1;
(statearr_18882_18904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (1))){
var inst_18849 = cljs.core.vec.call(null,chs);
var inst_18850 = inst_18849;
var state_18878__$1 = (function (){var statearr_18883 = state_18878;
(statearr_18883[(10)] = inst_18850);

return statearr_18883;
})();
var statearr_18884_18905 = state_18878__$1;
(statearr_18884_18905[(2)] = null);

(statearr_18884_18905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (4))){
var inst_18850 = (state_18878[(10)]);
var state_18878__$1 = state_18878;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18878__$1,(7),inst_18850);
} else {
if((state_val_18879 === (6))){
var inst_18874 = (state_18878[(2)]);
var state_18878__$1 = state_18878;
var statearr_18885_18906 = state_18878__$1;
(statearr_18885_18906[(2)] = inst_18874);

(statearr_18885_18906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (3))){
var inst_18876 = (state_18878[(2)]);
var state_18878__$1 = state_18878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18878__$1,inst_18876);
} else {
if((state_val_18879 === (2))){
var inst_18850 = (state_18878[(10)]);
var inst_18852 = cljs.core.count.call(null,inst_18850);
var inst_18853 = (inst_18852 > (0));
var state_18878__$1 = state_18878;
if(cljs.core.truth_(inst_18853)){
var statearr_18887_18907 = state_18878__$1;
(statearr_18887_18907[(1)] = (4));

} else {
var statearr_18888_18908 = state_18878__$1;
(statearr_18888_18908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (11))){
var inst_18850 = (state_18878[(10)]);
var inst_18867 = (state_18878[(2)]);
var tmp18886 = inst_18850;
var inst_18850__$1 = tmp18886;
var state_18878__$1 = (function (){var statearr_18889 = state_18878;
(statearr_18889[(10)] = inst_18850__$1);

(statearr_18889[(11)] = inst_18867);

return statearr_18889;
})();
var statearr_18890_18909 = state_18878__$1;
(statearr_18890_18909[(2)] = null);

(statearr_18890_18909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (9))){
var inst_18858 = (state_18878[(7)]);
var state_18878__$1 = state_18878;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18878__$1,(11),out,inst_18858);
} else {
if((state_val_18879 === (5))){
var inst_18872 = cljs.core.async.close_BANG_.call(null,out);
var state_18878__$1 = state_18878;
var statearr_18891_18910 = state_18878__$1;
(statearr_18891_18910[(2)] = inst_18872);

(statearr_18891_18910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (10))){
var inst_18870 = (state_18878[(2)]);
var state_18878__$1 = state_18878;
var statearr_18892_18911 = state_18878__$1;
(statearr_18892_18911[(2)] = inst_18870);

(statearr_18892_18911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18879 === (8))){
var inst_18858 = (state_18878[(7)]);
var inst_18857 = (state_18878[(8)]);
var inst_18859 = (state_18878[(9)]);
var inst_18850 = (state_18878[(10)]);
var inst_18862 = (function (){var c = inst_18859;
var v = inst_18858;
var vec__18855 = inst_18857;
var cs = inst_18850;
return ((function (c,v,vec__18855,cs,inst_18858,inst_18857,inst_18859,inst_18850,state_val_18879,c__7186__auto___18902,out){
return (function (p1__18795_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18795_SHARP_);
});
;})(c,v,vec__18855,cs,inst_18858,inst_18857,inst_18859,inst_18850,state_val_18879,c__7186__auto___18902,out))
})();
var inst_18863 = cljs.core.filterv.call(null,inst_18862,inst_18850);
var inst_18850__$1 = inst_18863;
var state_18878__$1 = (function (){var statearr_18893 = state_18878;
(statearr_18893[(10)] = inst_18850__$1);

return statearr_18893;
})();
var statearr_18894_18912 = state_18878__$1;
(statearr_18894_18912[(2)] = null);

(statearr_18894_18912[(1)] = (2));


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
});})(c__7186__auto___18902,out))
;
return ((function (switch__7130__auto__,c__7186__auto___18902,out){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_18898 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18898[(0)] = state_machine__7131__auto__);

(statearr_18898[(1)] = (1));

return statearr_18898;
});
var state_machine__7131__auto____1 = (function (state_18878){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_18878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e18899){if((e18899 instanceof Object)){
var ex__7134__auto__ = e18899;
var statearr_18900_18913 = state_18878;
(statearr_18900_18913[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18914 = state_18878;
state_18878 = G__18914;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_18878){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_18878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___18902,out))
})();
var state__7188__auto__ = (function (){var statearr_18901 = f__7187__auto__.call(null);
(statearr_18901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___18902);

return statearr_18901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___18902,out))
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
var c__7186__auto___19007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___19007,out){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___19007,out){
return (function (state_18984){
var state_val_18985 = (state_18984[(1)]);
if((state_val_18985 === (7))){
var inst_18966 = (state_18984[(7)]);
var inst_18966__$1 = (state_18984[(2)]);
var inst_18967 = (inst_18966__$1 == null);
var inst_18968 = cljs.core.not.call(null,inst_18967);
var state_18984__$1 = (function (){var statearr_18986 = state_18984;
(statearr_18986[(7)] = inst_18966__$1);

return statearr_18986;
})();
if(inst_18968){
var statearr_18987_19008 = state_18984__$1;
(statearr_18987_19008[(1)] = (8));

} else {
var statearr_18988_19009 = state_18984__$1;
(statearr_18988_19009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (1))){
var inst_18961 = (0);
var state_18984__$1 = (function (){var statearr_18989 = state_18984;
(statearr_18989[(8)] = inst_18961);

return statearr_18989;
})();
var statearr_18990_19010 = state_18984__$1;
(statearr_18990_19010[(2)] = null);

(statearr_18990_19010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (4))){
var state_18984__$1 = state_18984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18984__$1,(7),ch);
} else {
if((state_val_18985 === (6))){
var inst_18979 = (state_18984[(2)]);
var state_18984__$1 = state_18984;
var statearr_18991_19011 = state_18984__$1;
(statearr_18991_19011[(2)] = inst_18979);

(statearr_18991_19011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (3))){
var inst_18981 = (state_18984[(2)]);
var inst_18982 = cljs.core.async.close_BANG_.call(null,out);
var state_18984__$1 = (function (){var statearr_18992 = state_18984;
(statearr_18992[(9)] = inst_18981);

return statearr_18992;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18984__$1,inst_18982);
} else {
if((state_val_18985 === (2))){
var inst_18961 = (state_18984[(8)]);
var inst_18963 = (inst_18961 < n);
var state_18984__$1 = state_18984;
if(cljs.core.truth_(inst_18963)){
var statearr_18993_19012 = state_18984__$1;
(statearr_18993_19012[(1)] = (4));

} else {
var statearr_18994_19013 = state_18984__$1;
(statearr_18994_19013[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (11))){
var inst_18961 = (state_18984[(8)]);
var inst_18971 = (state_18984[(2)]);
var inst_18972 = (inst_18961 + (1));
var inst_18961__$1 = inst_18972;
var state_18984__$1 = (function (){var statearr_18995 = state_18984;
(statearr_18995[(10)] = inst_18971);

(statearr_18995[(8)] = inst_18961__$1);

return statearr_18995;
})();
var statearr_18996_19014 = state_18984__$1;
(statearr_18996_19014[(2)] = null);

(statearr_18996_19014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (9))){
var state_18984__$1 = state_18984;
var statearr_18997_19015 = state_18984__$1;
(statearr_18997_19015[(2)] = null);

(statearr_18997_19015[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (5))){
var state_18984__$1 = state_18984;
var statearr_18998_19016 = state_18984__$1;
(statearr_18998_19016[(2)] = null);

(statearr_18998_19016[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (10))){
var inst_18976 = (state_18984[(2)]);
var state_18984__$1 = state_18984;
var statearr_18999_19017 = state_18984__$1;
(statearr_18999_19017[(2)] = inst_18976);

(statearr_18999_19017[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18985 === (8))){
var inst_18966 = (state_18984[(7)]);
var state_18984__$1 = state_18984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18984__$1,(11),out,inst_18966);
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
});})(c__7186__auto___19007,out))
;
return ((function (switch__7130__auto__,c__7186__auto___19007,out){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_19003 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19003[(0)] = state_machine__7131__auto__);

(statearr_19003[(1)] = (1));

return statearr_19003;
});
var state_machine__7131__auto____1 = (function (state_18984){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_18984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e19004){if((e19004 instanceof Object)){
var ex__7134__auto__ = e19004;
var statearr_19005_19018 = state_18984;
(statearr_19005_19018[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19019 = state_18984;
state_18984 = G__19019;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_18984){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_18984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___19007,out))
})();
var state__7188__auto__ = (function (){var statearr_19006 = f__7187__auto__.call(null);
(statearr_19006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___19007);

return statearr_19006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___19007,out))
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
if(typeof cljs.core.async.t19027 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19027 = (function (ch,f,map_LT_,meta19028){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta19028 = meta19028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19027.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19027.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t19027.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19027.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t19030 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19030 = (function (fn1,_,meta19028,map_LT_,f,ch,meta19031){
this.fn1 = fn1;
this._ = _;
this.meta19028 = meta19028;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta19031 = meta19031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19030.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t19030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__19020_SHARP_){
return f1.call(null,(((p1__19020_SHARP_ == null))?null:self__.f.call(null,p1__19020_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t19030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_19032){
var self__ = this;
var _19032__$1 = this;
return self__.meta19031;
});})(___$1))
;

cljs.core.async.t19030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_19032,meta19031__$1){
var self__ = this;
var _19032__$1 = this;
return (new cljs.core.async.t19030(self__.fn1,self__._,self__.meta19028,self__.map_LT_,self__.f,self__.ch,meta19031__$1));
});})(___$1))
;

cljs.core.async.t19030.cljs$lang$type = true;

cljs.core.async.t19030.cljs$lang$ctorStr = "cljs.core.async/t19030";

cljs.core.async.t19030.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t19030");
});})(___$1))
;

cljs.core.async.__GT_t19030 = ((function (___$1){
return (function __GT_t19030(fn1__$1,___$2,meta19028__$1,map_LT___$1,f__$1,ch__$1,meta19031){
return (new cljs.core.async.t19030(fn1__$1,___$2,meta19028__$1,map_LT___$1,f__$1,ch__$1,meta19031));
});})(___$1))
;

}

return (new cljs.core.async.t19030(fn1,___$1,self__.meta19028,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/resources/public/cljs/core/async.cljs"], null)));
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

cljs.core.async.t19027.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19027.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19027.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19029){
var self__ = this;
var _19029__$1 = this;
return self__.meta19028;
});

cljs.core.async.t19027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19029,meta19028__$1){
var self__ = this;
var _19029__$1 = this;
return (new cljs.core.async.t19027(self__.ch,self__.f,self__.map_LT_,meta19028__$1));
});

cljs.core.async.t19027.cljs$lang$type = true;

cljs.core.async.t19027.cljs$lang$ctorStr = "cljs.core.async/t19027";

cljs.core.async.t19027.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t19027");
});

cljs.core.async.__GT_t19027 = (function __GT_t19027(ch__$1,f__$1,map_LT___$1,meta19028){
return (new cljs.core.async.t19027(ch__$1,f__$1,map_LT___$1,meta19028));
});

}

return (new cljs.core.async.t19027(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/resources/public/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t19036 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19036 = (function (ch,f,map_GT_,meta19037){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta19037 = meta19037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19036.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19036.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t19036.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19036.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19036.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19036.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19038){
var self__ = this;
var _19038__$1 = this;
return self__.meta19037;
});

cljs.core.async.t19036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19038,meta19037__$1){
var self__ = this;
var _19038__$1 = this;
return (new cljs.core.async.t19036(self__.ch,self__.f,self__.map_GT_,meta19037__$1));
});

cljs.core.async.t19036.cljs$lang$type = true;

cljs.core.async.t19036.cljs$lang$ctorStr = "cljs.core.async/t19036";

cljs.core.async.t19036.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t19036");
});

cljs.core.async.__GT_t19036 = (function __GT_t19036(ch__$1,f__$1,map_GT___$1,meta19037){
return (new cljs.core.async.t19036(ch__$1,f__$1,map_GT___$1,meta19037));
});

}

return (new cljs.core.async.t19036(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/resources/public/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t19042 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19042 = (function (ch,p,filter_GT_,meta19043){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta19043 = meta19043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19042.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t19042.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t19042.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t19042.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t19042.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t19042.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t19042.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t19042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19044){
var self__ = this;
var _19044__$1 = this;
return self__.meta19043;
});

cljs.core.async.t19042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19044,meta19043__$1){
var self__ = this;
var _19044__$1 = this;
return (new cljs.core.async.t19042(self__.ch,self__.p,self__.filter_GT_,meta19043__$1));
});

cljs.core.async.t19042.cljs$lang$type = true;

cljs.core.async.t19042.cljs$lang$ctorStr = "cljs.core.async/t19042";

cljs.core.async.t19042.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t19042");
});

cljs.core.async.__GT_t19042 = (function __GT_t19042(ch__$1,p__$1,filter_GT___$1,meta19043){
return (new cljs.core.async.t19042(ch__$1,p__$1,filter_GT___$1,meta19043));
});

}

return (new cljs.core.async.t19042(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/resources/public/cljs/core/async.cljs"], null)));
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
var c__7186__auto___19127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___19127,out){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___19127,out){
return (function (state_19106){
var state_val_19107 = (state_19106[(1)]);
if((state_val_19107 === (7))){
var inst_19102 = (state_19106[(2)]);
var state_19106__$1 = state_19106;
var statearr_19108_19128 = state_19106__$1;
(statearr_19108_19128[(2)] = inst_19102);

(statearr_19108_19128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (1))){
var state_19106__$1 = state_19106;
var statearr_19109_19129 = state_19106__$1;
(statearr_19109_19129[(2)] = null);

(statearr_19109_19129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (4))){
var inst_19088 = (state_19106[(7)]);
var inst_19088__$1 = (state_19106[(2)]);
var inst_19089 = (inst_19088__$1 == null);
var state_19106__$1 = (function (){var statearr_19110 = state_19106;
(statearr_19110[(7)] = inst_19088__$1);

return statearr_19110;
})();
if(cljs.core.truth_(inst_19089)){
var statearr_19111_19130 = state_19106__$1;
(statearr_19111_19130[(1)] = (5));

} else {
var statearr_19112_19131 = state_19106__$1;
(statearr_19112_19131[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (6))){
var inst_19088 = (state_19106[(7)]);
var inst_19093 = p.call(null,inst_19088);
var state_19106__$1 = state_19106;
if(cljs.core.truth_(inst_19093)){
var statearr_19113_19132 = state_19106__$1;
(statearr_19113_19132[(1)] = (8));

} else {
var statearr_19114_19133 = state_19106__$1;
(statearr_19114_19133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (3))){
var inst_19104 = (state_19106[(2)]);
var state_19106__$1 = state_19106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19106__$1,inst_19104);
} else {
if((state_val_19107 === (2))){
var state_19106__$1 = state_19106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19106__$1,(4),ch);
} else {
if((state_val_19107 === (11))){
var inst_19096 = (state_19106[(2)]);
var state_19106__$1 = state_19106;
var statearr_19115_19134 = state_19106__$1;
(statearr_19115_19134[(2)] = inst_19096);

(statearr_19115_19134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (9))){
var state_19106__$1 = state_19106;
var statearr_19116_19135 = state_19106__$1;
(statearr_19116_19135[(2)] = null);

(statearr_19116_19135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (5))){
var inst_19091 = cljs.core.async.close_BANG_.call(null,out);
var state_19106__$1 = state_19106;
var statearr_19117_19136 = state_19106__$1;
(statearr_19117_19136[(2)] = inst_19091);

(statearr_19117_19136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (10))){
var inst_19099 = (state_19106[(2)]);
var state_19106__$1 = (function (){var statearr_19118 = state_19106;
(statearr_19118[(8)] = inst_19099);

return statearr_19118;
})();
var statearr_19119_19137 = state_19106__$1;
(statearr_19119_19137[(2)] = null);

(statearr_19119_19137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19107 === (8))){
var inst_19088 = (state_19106[(7)]);
var state_19106__$1 = state_19106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19106__$1,(11),out,inst_19088);
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
});})(c__7186__auto___19127,out))
;
return ((function (switch__7130__auto__,c__7186__auto___19127,out){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_19123 = [null,null,null,null,null,null,null,null,null];
(statearr_19123[(0)] = state_machine__7131__auto__);

(statearr_19123[(1)] = (1));

return statearr_19123;
});
var state_machine__7131__auto____1 = (function (state_19106){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_19106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e19124){if((e19124 instanceof Object)){
var ex__7134__auto__ = e19124;
var statearr_19125_19138 = state_19106;
(statearr_19125_19138[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19139 = state_19106;
state_19106 = G__19139;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_19106){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_19106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___19127,out))
})();
var state__7188__auto__ = (function (){var statearr_19126 = f__7187__auto__.call(null);
(statearr_19126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___19127);

return statearr_19126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___19127,out))
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
var c__7186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto__){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto__){
return (function (state_19305){
var state_val_19306 = (state_19305[(1)]);
if((state_val_19306 === (7))){
var inst_19301 = (state_19305[(2)]);
var state_19305__$1 = state_19305;
var statearr_19307_19348 = state_19305__$1;
(statearr_19307_19348[(2)] = inst_19301);

(statearr_19307_19348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (20))){
var inst_19271 = (state_19305[(7)]);
var inst_19282 = (state_19305[(2)]);
var inst_19283 = cljs.core.next.call(null,inst_19271);
var inst_19257 = inst_19283;
var inst_19258 = null;
var inst_19259 = (0);
var inst_19260 = (0);
var state_19305__$1 = (function (){var statearr_19308 = state_19305;
(statearr_19308[(8)] = inst_19257);

(statearr_19308[(9)] = inst_19282);

(statearr_19308[(10)] = inst_19258);

(statearr_19308[(11)] = inst_19260);

(statearr_19308[(12)] = inst_19259);

return statearr_19308;
})();
var statearr_19309_19349 = state_19305__$1;
(statearr_19309_19349[(2)] = null);

(statearr_19309_19349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (1))){
var state_19305__$1 = state_19305;
var statearr_19310_19350 = state_19305__$1;
(statearr_19310_19350[(2)] = null);

(statearr_19310_19350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (4))){
var inst_19246 = (state_19305[(13)]);
var inst_19246__$1 = (state_19305[(2)]);
var inst_19247 = (inst_19246__$1 == null);
var state_19305__$1 = (function (){var statearr_19311 = state_19305;
(statearr_19311[(13)] = inst_19246__$1);

return statearr_19311;
})();
if(cljs.core.truth_(inst_19247)){
var statearr_19312_19351 = state_19305__$1;
(statearr_19312_19351[(1)] = (5));

} else {
var statearr_19313_19352 = state_19305__$1;
(statearr_19313_19352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (15))){
var state_19305__$1 = state_19305;
var statearr_19317_19353 = state_19305__$1;
(statearr_19317_19353[(2)] = null);

(statearr_19317_19353[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (21))){
var state_19305__$1 = state_19305;
var statearr_19318_19354 = state_19305__$1;
(statearr_19318_19354[(2)] = null);

(statearr_19318_19354[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (13))){
var inst_19257 = (state_19305[(8)]);
var inst_19258 = (state_19305[(10)]);
var inst_19260 = (state_19305[(11)]);
var inst_19259 = (state_19305[(12)]);
var inst_19267 = (state_19305[(2)]);
var inst_19268 = (inst_19260 + (1));
var tmp19314 = inst_19257;
var tmp19315 = inst_19258;
var tmp19316 = inst_19259;
var inst_19257__$1 = tmp19314;
var inst_19258__$1 = tmp19315;
var inst_19259__$1 = tmp19316;
var inst_19260__$1 = inst_19268;
var state_19305__$1 = (function (){var statearr_19319 = state_19305;
(statearr_19319[(8)] = inst_19257__$1);

(statearr_19319[(10)] = inst_19258__$1);

(statearr_19319[(14)] = inst_19267);

(statearr_19319[(11)] = inst_19260__$1);

(statearr_19319[(12)] = inst_19259__$1);

return statearr_19319;
})();
var statearr_19320_19355 = state_19305__$1;
(statearr_19320_19355[(2)] = null);

(statearr_19320_19355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (22))){
var state_19305__$1 = state_19305;
var statearr_19321_19356 = state_19305__$1;
(statearr_19321_19356[(2)] = null);

(statearr_19321_19356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (6))){
var inst_19246 = (state_19305[(13)]);
var inst_19255 = f.call(null,inst_19246);
var inst_19256 = cljs.core.seq.call(null,inst_19255);
var inst_19257 = inst_19256;
var inst_19258 = null;
var inst_19259 = (0);
var inst_19260 = (0);
var state_19305__$1 = (function (){var statearr_19322 = state_19305;
(statearr_19322[(8)] = inst_19257);

(statearr_19322[(10)] = inst_19258);

(statearr_19322[(11)] = inst_19260);

(statearr_19322[(12)] = inst_19259);

return statearr_19322;
})();
var statearr_19323_19357 = state_19305__$1;
(statearr_19323_19357[(2)] = null);

(statearr_19323_19357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (17))){
var inst_19271 = (state_19305[(7)]);
var inst_19275 = cljs.core.chunk_first.call(null,inst_19271);
var inst_19276 = cljs.core.chunk_rest.call(null,inst_19271);
var inst_19277 = cljs.core.count.call(null,inst_19275);
var inst_19257 = inst_19276;
var inst_19258 = inst_19275;
var inst_19259 = inst_19277;
var inst_19260 = (0);
var state_19305__$1 = (function (){var statearr_19324 = state_19305;
(statearr_19324[(8)] = inst_19257);

(statearr_19324[(10)] = inst_19258);

(statearr_19324[(11)] = inst_19260);

(statearr_19324[(12)] = inst_19259);

return statearr_19324;
})();
var statearr_19325_19358 = state_19305__$1;
(statearr_19325_19358[(2)] = null);

(statearr_19325_19358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (3))){
var inst_19303 = (state_19305[(2)]);
var state_19305__$1 = state_19305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19305__$1,inst_19303);
} else {
if((state_val_19306 === (12))){
var inst_19291 = (state_19305[(2)]);
var state_19305__$1 = state_19305;
var statearr_19326_19359 = state_19305__$1;
(statearr_19326_19359[(2)] = inst_19291);

(statearr_19326_19359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (2))){
var state_19305__$1 = state_19305;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19305__$1,(4),in$);
} else {
if((state_val_19306 === (23))){
var inst_19299 = (state_19305[(2)]);
var state_19305__$1 = state_19305;
var statearr_19327_19360 = state_19305__$1;
(statearr_19327_19360[(2)] = inst_19299);

(statearr_19327_19360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (19))){
var inst_19286 = (state_19305[(2)]);
var state_19305__$1 = state_19305;
var statearr_19328_19361 = state_19305__$1;
(statearr_19328_19361[(2)] = inst_19286);

(statearr_19328_19361[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (11))){
var inst_19257 = (state_19305[(8)]);
var inst_19271 = (state_19305[(7)]);
var inst_19271__$1 = cljs.core.seq.call(null,inst_19257);
var state_19305__$1 = (function (){var statearr_19329 = state_19305;
(statearr_19329[(7)] = inst_19271__$1);

return statearr_19329;
})();
if(inst_19271__$1){
var statearr_19330_19362 = state_19305__$1;
(statearr_19330_19362[(1)] = (14));

} else {
var statearr_19331_19363 = state_19305__$1;
(statearr_19331_19363[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (9))){
var inst_19293 = (state_19305[(2)]);
var inst_19294 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19305__$1 = (function (){var statearr_19332 = state_19305;
(statearr_19332[(15)] = inst_19293);

return statearr_19332;
})();
if(cljs.core.truth_(inst_19294)){
var statearr_19333_19364 = state_19305__$1;
(statearr_19333_19364[(1)] = (21));

} else {
var statearr_19334_19365 = state_19305__$1;
(statearr_19334_19365[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (5))){
var inst_19249 = cljs.core.async.close_BANG_.call(null,out);
var state_19305__$1 = state_19305;
var statearr_19335_19366 = state_19305__$1;
(statearr_19335_19366[(2)] = inst_19249);

(statearr_19335_19366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (14))){
var inst_19271 = (state_19305[(7)]);
var inst_19273 = cljs.core.chunked_seq_QMARK_.call(null,inst_19271);
var state_19305__$1 = state_19305;
if(inst_19273){
var statearr_19336_19367 = state_19305__$1;
(statearr_19336_19367[(1)] = (17));

} else {
var statearr_19337_19368 = state_19305__$1;
(statearr_19337_19368[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (16))){
var inst_19289 = (state_19305[(2)]);
var state_19305__$1 = state_19305;
var statearr_19338_19369 = state_19305__$1;
(statearr_19338_19369[(2)] = inst_19289);

(statearr_19338_19369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19306 === (10))){
var inst_19258 = (state_19305[(10)]);
var inst_19260 = (state_19305[(11)]);
var inst_19265 = cljs.core._nth.call(null,inst_19258,inst_19260);
var state_19305__$1 = state_19305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19305__$1,(13),out,inst_19265);
} else {
if((state_val_19306 === (18))){
var inst_19271 = (state_19305[(7)]);
var inst_19280 = cljs.core.first.call(null,inst_19271);
var state_19305__$1 = state_19305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19305__$1,(20),out,inst_19280);
} else {
if((state_val_19306 === (8))){
var inst_19260 = (state_19305[(11)]);
var inst_19259 = (state_19305[(12)]);
var inst_19262 = (inst_19260 < inst_19259);
var inst_19263 = inst_19262;
var state_19305__$1 = state_19305;
if(cljs.core.truth_(inst_19263)){
var statearr_19339_19370 = state_19305__$1;
(statearr_19339_19370[(1)] = (10));

} else {
var statearr_19340_19371 = state_19305__$1;
(statearr_19340_19371[(1)] = (11));

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
});})(c__7186__auto__))
;
return ((function (switch__7130__auto__,c__7186__auto__){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_19344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19344[(0)] = state_machine__7131__auto__);

(statearr_19344[(1)] = (1));

return statearr_19344;
});
var state_machine__7131__auto____1 = (function (state_19305){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_19305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e19345){if((e19345 instanceof Object)){
var ex__7134__auto__ = e19345;
var statearr_19346_19372 = state_19305;
(statearr_19346_19372[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19373 = state_19305;
state_19305 = G__19373;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_19305){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_19305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto__))
})();
var state__7188__auto__ = (function (){var statearr_19347 = f__7187__auto__.call(null);
(statearr_19347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto__);

return statearr_19347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto__))
);

return c__7186__auto__;
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
var c__7186__auto___19470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___19470,out){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___19470,out){
return (function (state_19445){
var state_val_19446 = (state_19445[(1)]);
if((state_val_19446 === (7))){
var inst_19440 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
var statearr_19447_19471 = state_19445__$1;
(statearr_19447_19471[(2)] = inst_19440);

(statearr_19447_19471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (1))){
var inst_19422 = null;
var state_19445__$1 = (function (){var statearr_19448 = state_19445;
(statearr_19448[(7)] = inst_19422);

return statearr_19448;
})();
var statearr_19449_19472 = state_19445__$1;
(statearr_19449_19472[(2)] = null);

(statearr_19449_19472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (4))){
var inst_19425 = (state_19445[(8)]);
var inst_19425__$1 = (state_19445[(2)]);
var inst_19426 = (inst_19425__$1 == null);
var inst_19427 = cljs.core.not.call(null,inst_19426);
var state_19445__$1 = (function (){var statearr_19450 = state_19445;
(statearr_19450[(8)] = inst_19425__$1);

return statearr_19450;
})();
if(inst_19427){
var statearr_19451_19473 = state_19445__$1;
(statearr_19451_19473[(1)] = (5));

} else {
var statearr_19452_19474 = state_19445__$1;
(statearr_19452_19474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (6))){
var state_19445__$1 = state_19445;
var statearr_19453_19475 = state_19445__$1;
(statearr_19453_19475[(2)] = null);

(statearr_19453_19475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (3))){
var inst_19442 = (state_19445[(2)]);
var inst_19443 = cljs.core.async.close_BANG_.call(null,out);
var state_19445__$1 = (function (){var statearr_19454 = state_19445;
(statearr_19454[(9)] = inst_19442);

return statearr_19454;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19445__$1,inst_19443);
} else {
if((state_val_19446 === (2))){
var state_19445__$1 = state_19445;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19445__$1,(4),ch);
} else {
if((state_val_19446 === (11))){
var inst_19425 = (state_19445[(8)]);
var inst_19434 = (state_19445[(2)]);
var inst_19422 = inst_19425;
var state_19445__$1 = (function (){var statearr_19455 = state_19445;
(statearr_19455[(7)] = inst_19422);

(statearr_19455[(10)] = inst_19434);

return statearr_19455;
})();
var statearr_19456_19476 = state_19445__$1;
(statearr_19456_19476[(2)] = null);

(statearr_19456_19476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (9))){
var inst_19425 = (state_19445[(8)]);
var state_19445__$1 = state_19445;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19445__$1,(11),out,inst_19425);
} else {
if((state_val_19446 === (5))){
var inst_19425 = (state_19445[(8)]);
var inst_19422 = (state_19445[(7)]);
var inst_19429 = cljs.core._EQ_.call(null,inst_19425,inst_19422);
var state_19445__$1 = state_19445;
if(inst_19429){
var statearr_19458_19477 = state_19445__$1;
(statearr_19458_19477[(1)] = (8));

} else {
var statearr_19459_19478 = state_19445__$1;
(statearr_19459_19478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (10))){
var inst_19437 = (state_19445[(2)]);
var state_19445__$1 = state_19445;
var statearr_19460_19479 = state_19445__$1;
(statearr_19460_19479[(2)] = inst_19437);

(statearr_19460_19479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19446 === (8))){
var inst_19422 = (state_19445[(7)]);
var tmp19457 = inst_19422;
var inst_19422__$1 = tmp19457;
var state_19445__$1 = (function (){var statearr_19461 = state_19445;
(statearr_19461[(7)] = inst_19422__$1);

return statearr_19461;
})();
var statearr_19462_19480 = state_19445__$1;
(statearr_19462_19480[(2)] = null);

(statearr_19462_19480[(1)] = (2));


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
});})(c__7186__auto___19470,out))
;
return ((function (switch__7130__auto__,c__7186__auto___19470,out){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_19466 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19466[(0)] = state_machine__7131__auto__);

(statearr_19466[(1)] = (1));

return statearr_19466;
});
var state_machine__7131__auto____1 = (function (state_19445){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_19445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e19467){if((e19467 instanceof Object)){
var ex__7134__auto__ = e19467;
var statearr_19468_19481 = state_19445;
(statearr_19468_19481[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19482 = state_19445;
state_19445 = G__19482;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_19445){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_19445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___19470,out))
})();
var state__7188__auto__ = (function (){var statearr_19469 = f__7187__auto__.call(null);
(statearr_19469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___19470);

return statearr_19469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___19470,out))
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
var c__7186__auto___19617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___19617,out){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___19617,out){
return (function (state_19587){
var state_val_19588 = (state_19587[(1)]);
if((state_val_19588 === (7))){
var inst_19583 = (state_19587[(2)]);
var state_19587__$1 = state_19587;
var statearr_19589_19618 = state_19587__$1;
(statearr_19589_19618[(2)] = inst_19583);

(statearr_19589_19618[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (1))){
var inst_19550 = (new Array(n));
var inst_19551 = inst_19550;
var inst_19552 = (0);
var state_19587__$1 = (function (){var statearr_19590 = state_19587;
(statearr_19590[(7)] = inst_19551);

(statearr_19590[(8)] = inst_19552);

return statearr_19590;
})();
var statearr_19591_19619 = state_19587__$1;
(statearr_19591_19619[(2)] = null);

(statearr_19591_19619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (4))){
var inst_19555 = (state_19587[(9)]);
var inst_19555__$1 = (state_19587[(2)]);
var inst_19556 = (inst_19555__$1 == null);
var inst_19557 = cljs.core.not.call(null,inst_19556);
var state_19587__$1 = (function (){var statearr_19592 = state_19587;
(statearr_19592[(9)] = inst_19555__$1);

return statearr_19592;
})();
if(inst_19557){
var statearr_19593_19620 = state_19587__$1;
(statearr_19593_19620[(1)] = (5));

} else {
var statearr_19594_19621 = state_19587__$1;
(statearr_19594_19621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (15))){
var inst_19577 = (state_19587[(2)]);
var state_19587__$1 = state_19587;
var statearr_19595_19622 = state_19587__$1;
(statearr_19595_19622[(2)] = inst_19577);

(statearr_19595_19622[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (13))){
var state_19587__$1 = state_19587;
var statearr_19596_19623 = state_19587__$1;
(statearr_19596_19623[(2)] = null);

(statearr_19596_19623[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (6))){
var inst_19552 = (state_19587[(8)]);
var inst_19573 = (inst_19552 > (0));
var state_19587__$1 = state_19587;
if(cljs.core.truth_(inst_19573)){
var statearr_19597_19624 = state_19587__$1;
(statearr_19597_19624[(1)] = (12));

} else {
var statearr_19598_19625 = state_19587__$1;
(statearr_19598_19625[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (3))){
var inst_19585 = (state_19587[(2)]);
var state_19587__$1 = state_19587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19587__$1,inst_19585);
} else {
if((state_val_19588 === (12))){
var inst_19551 = (state_19587[(7)]);
var inst_19575 = cljs.core.vec.call(null,inst_19551);
var state_19587__$1 = state_19587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19587__$1,(15),out,inst_19575);
} else {
if((state_val_19588 === (2))){
var state_19587__$1 = state_19587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19587__$1,(4),ch);
} else {
if((state_val_19588 === (11))){
var inst_19567 = (state_19587[(2)]);
var inst_19568 = (new Array(n));
var inst_19551 = inst_19568;
var inst_19552 = (0);
var state_19587__$1 = (function (){var statearr_19599 = state_19587;
(statearr_19599[(10)] = inst_19567);

(statearr_19599[(7)] = inst_19551);

(statearr_19599[(8)] = inst_19552);

return statearr_19599;
})();
var statearr_19600_19626 = state_19587__$1;
(statearr_19600_19626[(2)] = null);

(statearr_19600_19626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (9))){
var inst_19551 = (state_19587[(7)]);
var inst_19565 = cljs.core.vec.call(null,inst_19551);
var state_19587__$1 = state_19587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19587__$1,(11),out,inst_19565);
} else {
if((state_val_19588 === (5))){
var inst_19555 = (state_19587[(9)]);
var inst_19551 = (state_19587[(7)]);
var inst_19552 = (state_19587[(8)]);
var inst_19560 = (state_19587[(11)]);
var inst_19559 = (inst_19551[inst_19552] = inst_19555);
var inst_19560__$1 = (inst_19552 + (1));
var inst_19561 = (inst_19560__$1 < n);
var state_19587__$1 = (function (){var statearr_19601 = state_19587;
(statearr_19601[(12)] = inst_19559);

(statearr_19601[(11)] = inst_19560__$1);

return statearr_19601;
})();
if(cljs.core.truth_(inst_19561)){
var statearr_19602_19627 = state_19587__$1;
(statearr_19602_19627[(1)] = (8));

} else {
var statearr_19603_19628 = state_19587__$1;
(statearr_19603_19628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (14))){
var inst_19580 = (state_19587[(2)]);
var inst_19581 = cljs.core.async.close_BANG_.call(null,out);
var state_19587__$1 = (function (){var statearr_19605 = state_19587;
(statearr_19605[(13)] = inst_19580);

return statearr_19605;
})();
var statearr_19606_19629 = state_19587__$1;
(statearr_19606_19629[(2)] = inst_19581);

(statearr_19606_19629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (10))){
var inst_19571 = (state_19587[(2)]);
var state_19587__$1 = state_19587;
var statearr_19607_19630 = state_19587__$1;
(statearr_19607_19630[(2)] = inst_19571);

(statearr_19607_19630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19588 === (8))){
var inst_19551 = (state_19587[(7)]);
var inst_19560 = (state_19587[(11)]);
var tmp19604 = inst_19551;
var inst_19551__$1 = tmp19604;
var inst_19552 = inst_19560;
var state_19587__$1 = (function (){var statearr_19608 = state_19587;
(statearr_19608[(7)] = inst_19551__$1);

(statearr_19608[(8)] = inst_19552);

return statearr_19608;
})();
var statearr_19609_19631 = state_19587__$1;
(statearr_19609_19631[(2)] = null);

(statearr_19609_19631[(1)] = (2));


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
});})(c__7186__auto___19617,out))
;
return ((function (switch__7130__auto__,c__7186__auto___19617,out){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_19613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19613[(0)] = state_machine__7131__auto__);

(statearr_19613[(1)] = (1));

return statearr_19613;
});
var state_machine__7131__auto____1 = (function (state_19587){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_19587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e19614){if((e19614 instanceof Object)){
var ex__7134__auto__ = e19614;
var statearr_19615_19632 = state_19587;
(statearr_19615_19632[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19633 = state_19587;
state_19587 = G__19633;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_19587){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_19587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___19617,out))
})();
var state__7188__auto__ = (function (){var statearr_19616 = f__7187__auto__.call(null);
(statearr_19616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___19617);

return statearr_19616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___19617,out))
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
var c__7186__auto___19776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto___19776,out){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto___19776,out){
return (function (state_19746){
var state_val_19747 = (state_19746[(1)]);
if((state_val_19747 === (7))){
var inst_19742 = (state_19746[(2)]);
var state_19746__$1 = state_19746;
var statearr_19748_19777 = state_19746__$1;
(statearr_19748_19777[(2)] = inst_19742);

(statearr_19748_19777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19747 === (1))){
var inst_19705 = [];
var inst_19706 = inst_19705;
var inst_19707 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19746__$1 = (function (){var statearr_19749 = state_19746;
(statearr_19749[(7)] = inst_19706);

(statearr_19749[(8)] = inst_19707);

return statearr_19749;
})();
var statearr_19750_19778 = state_19746__$1;
(statearr_19750_19778[(2)] = null);

(statearr_19750_19778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19747 === (4))){
var inst_19710 = (state_19746[(9)]);
var inst_19710__$1 = (state_19746[(2)]);
var inst_19711 = (inst_19710__$1 == null);
var inst_19712 = cljs.core.not.call(null,inst_19711);
var state_19746__$1 = (function (){var statearr_19751 = state_19746;
(statearr_19751[(9)] = inst_19710__$1);

return statearr_19751;
})();
if(inst_19712){
var statearr_19752_19779 = state_19746__$1;
(statearr_19752_19779[(1)] = (5));

} else {
var statearr_19753_19780 = state_19746__$1;
(statearr_19753_19780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19747 === (15))){
var inst_19736 = (state_19746[(2)]);
var state_19746__$1 = state_19746;
var statearr_19754_19781 = state_19746__$1;
(statearr_19754_19781[(2)] = inst_19736);

(statearr_19754_19781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19747 === (13))){
var state_19746__$1 = state_19746;
var statearr_19755_19782 = state_19746__$1;
(statearr_19755_19782[(2)] = null);

(statearr_19755_19782[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19747 === (6))){
var inst_19706 = (state_19746[(7)]);
var inst_19731 = inst_19706.length;
var inst_19732 = (inst_19731 > (0));
var state_19746__$1 = state_19746;
if(cljs.core.truth_(inst_19732)){
var statearr_19756_19783 = state_19746__$1;
(statearr_19756_19783[(1)] = (12));

} else {
var statearr_19757_19784 = state_19746__$1;
(statearr_19757_19784[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19747 === (3))){
var inst_19744 = (state_19746[(2)]);
var state_19746__$1 = state_19746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19746__$1,inst_19744);
} else {
if((state_val_19747 === (12))){
var inst_19706 = (state_19746[(7)]);
var inst_19734 = cljs.core.vec.call(null,inst_19706);
var state_19746__$1 = state_19746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19746__$1,(15),out,inst_19734);
} else {
if((state_val_19747 === (2))){
var state_19746__$1 = state_19746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19746__$1,(4),ch);
} else {
if((state_val_19747 === (11))){
var inst_19710 = (state_19746[(9)]);
var inst_19714 = (state_19746[(10)]);
var inst_19724 = (state_19746[(2)]);
var inst_19725 = [];
var inst_19726 = inst_19725.push(inst_19710);
var inst_19706 = inst_19725;
var inst_19707 = inst_19714;
var state_19746__$1 = (function (){var statearr_19758 = state_19746;
(statearr_19758[(11)] = inst_19726);

(statearr_19758[(7)] = inst_19706);

(statearr_19758[(8)] = inst_19707);

(statearr_19758[(12)] = inst_19724);

return statearr_19758;
})();
var statearr_19759_19785 = state_19746__$1;
(statearr_19759_19785[(2)] = null);

(statearr_19759_19785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19747 === (9))){
var inst_19706 = (state_19746[(7)]);
var inst_19722 = cljs.core.vec.call(null,inst_19706);
var state_19746__$1 = state_19746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19746__$1,(11),out,inst_19722);
} else {
if((state_val_19747 === (5))){
var inst_19707 = (state_19746[(8)]);
var inst_19710 = (state_19746[(9)]);
var inst_19714 = (state_19746[(10)]);
var inst_19714__$1 = f.call(null,inst_19710);
var inst_19715 = cljs.core._EQ_.call(null,inst_19714__$1,inst_19707);
var inst_19716 = cljs.core.keyword_identical_QMARK_.call(null,inst_19707,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19717 = (inst_19715) || (inst_19716);
var state_19746__$1 = (function (){var statearr_19760 = state_19746;
(statearr_19760[(10)] = inst_19714__$1);

return statearr_19760;
})();
if(cljs.core.truth_(inst_19717)){
var statearr_19761_19786 = state_19746__$1;
(statearr_19761_19786[(1)] = (8));

} else {
var statearr_19762_19787 = state_19746__$1;
(statearr_19762_19787[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19747 === (14))){
var inst_19739 = (state_19746[(2)]);
var inst_19740 = cljs.core.async.close_BANG_.call(null,out);
var state_19746__$1 = (function (){var statearr_19764 = state_19746;
(statearr_19764[(13)] = inst_19739);

return statearr_19764;
})();
var statearr_19765_19788 = state_19746__$1;
(statearr_19765_19788[(2)] = inst_19740);

(statearr_19765_19788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19747 === (10))){
var inst_19729 = (state_19746[(2)]);
var state_19746__$1 = state_19746;
var statearr_19766_19789 = state_19746__$1;
(statearr_19766_19789[(2)] = inst_19729);

(statearr_19766_19789[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19747 === (8))){
var inst_19706 = (state_19746[(7)]);
var inst_19710 = (state_19746[(9)]);
var inst_19714 = (state_19746[(10)]);
var inst_19719 = inst_19706.push(inst_19710);
var tmp19763 = inst_19706;
var inst_19706__$1 = tmp19763;
var inst_19707 = inst_19714;
var state_19746__$1 = (function (){var statearr_19767 = state_19746;
(statearr_19767[(14)] = inst_19719);

(statearr_19767[(7)] = inst_19706__$1);

(statearr_19767[(8)] = inst_19707);

return statearr_19767;
})();
var statearr_19768_19790 = state_19746__$1;
(statearr_19768_19790[(2)] = null);

(statearr_19768_19790[(1)] = (2));


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
});})(c__7186__auto___19776,out))
;
return ((function (switch__7130__auto__,c__7186__auto___19776,out){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_19772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19772[(0)] = state_machine__7131__auto__);

(statearr_19772[(1)] = (1));

return statearr_19772;
});
var state_machine__7131__auto____1 = (function (state_19746){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_19746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e19773){if((e19773 instanceof Object)){
var ex__7134__auto__ = e19773;
var statearr_19774_19791 = state_19746;
(statearr_19774_19791[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19792 = state_19746;
state_19746 = G__19792;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_19746){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_19746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto___19776,out))
})();
var state__7188__auto__ = (function (){var statearr_19775 = f__7187__auto__.call(null);
(statearr_19775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto___19776);

return statearr_19775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto___19776,out))
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