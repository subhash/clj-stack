// Compiled by ClojureScript 0.0-2755 {}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('goog.dom');
goog.require('om.dom');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

om.core.IDisplayName = (function (){var obj19919 = {};
return obj19919;
})();

om.core.display_name = (function display_name(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IDisplayName$display_name$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core.display_name[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core.display_name["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});


om.core.IInitState = (function (){var obj19921 = {};
return obj19921;
})();

om.core.init_state = (function init_state(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IInitState$init_state$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core.init_state[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core.init_state["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});


om.core.IShouldUpdate = (function (){var obj19923 = {};
return obj19923;
})();

om.core.should_update = (function should_update(this$,next_props,next_state){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IShouldUpdate$should_update$arity$3;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core.should_update[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core.should_update["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IWillMount = (function (){var obj19925 = {};
return obj19925;
})();

om.core.will_mount = (function will_mount(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IWillMount$will_mount$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core.will_mount[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core.will_mount["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IDidMount = (function (){var obj19927 = {};
return obj19927;
})();

om.core.did_mount = (function did_mount(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IDidMount$did_mount$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core.did_mount[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core.did_mount["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUnmount = (function (){var obj19929 = {};
return obj19929;
})();

om.core.will_unmount = (function will_unmount(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core.will_unmount[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core.will_unmount["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});


om.core.IWillUpdate = (function (){var obj19931 = {};
return obj19931;
})();

om.core.will_update = (function will_update(this$,next_props,next_state){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IWillUpdate$will_update$arity$3;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core.will_update[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core.will_update["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});


om.core.IDidUpdate = (function (){var obj19933 = {};
return obj19933;
})();

om.core.did_update = (function did_update(this$,prev_props,prev_state){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IDidUpdate$did_update$arity$3;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core.did_update[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core.did_update["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});


om.core.IWillReceiveProps = (function (){var obj19935 = {};
return obj19935;
})();

om.core.will_receive_props = (function will_receive_props(this$,next_props){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core.will_receive_props[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core.will_receive_props["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});


om.core.IRender = (function (){var obj19937 = {};
return obj19937;
})();

om.core.render = (function render(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IRender$render$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core.render[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core.render["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$);
}
});


om.core.IRenderProps = (function (){var obj19939 = {};
return obj19939;
})();

om.core.render_props = (function render_props(this$,props,state){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IRenderProps$render_props$arity$3;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core.render_props[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core.render_props["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderProps.render-props",this$);
}
}
})().call(null,this$,props,state);
}
});


om.core.IRenderState = (function (){var obj19941 = {};
return obj19941;
})();

om.core.render_state = (function render_state(this$,state){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IRenderState$render_state$arity$2;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core.render_state[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core.render_state["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});


om.core.ICheckState = (function (){var obj19943 = {};
return obj19943;
})();


om.core.IOmSwap = (function (){var obj19945 = {};
return obj19945;
})();

om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});


om.core.IGetState = (function (){var obj19947 = {};
return obj19947;
})();

om.core._get_state = (function() {
var _get_state = null;
var _get_state__1 = (function (this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IGetState$_get_state$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._get_state[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._get_state["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$);
}
});
var _get_state__2 = (function (this$,ks){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IGetState$_get_state$arity$2;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._get_state[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._get_state["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetState.-get-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_state__1.call(this,this$);
case 2:
return _get_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_state.cljs$core$IFn$_invoke$arity$1 = _get_state__1;
_get_state.cljs$core$IFn$_invoke$arity$2 = _get_state__2;
return _get_state;
})()
;


om.core.IGetRenderState = (function (){var obj19949 = {};
return obj19949;
})();

om.core._get_render_state = (function() {
var _get_render_state = null;
var _get_render_state__1 = (function (this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._get_render_state[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._get_render_state["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$);
}
});
var _get_render_state__2 = (function (this$,ks){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IGetRenderState$_get_render_state$arity$2;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._get_render_state[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._get_render_state["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IGetRenderState.-get-render-state",this$);
}
}
})().call(null,this$,ks);
}
});
_get_render_state = function(this$,ks){
switch(arguments.length){
case 1:
return _get_render_state__1.call(this,this$);
case 2:
return _get_render_state__2.call(this,this$,ks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_get_render_state.cljs$core$IFn$_invoke$arity$1 = _get_render_state__1;
_get_render_state.cljs$core$IFn$_invoke$arity$2 = _get_render_state__2;
return _get_render_state;
})()
;


om.core.ISetState = (function (){var obj19951 = {};
return obj19951;
})();

om.core._set_state_BANG_ = (function() {
var _set_state_BANG_ = null;
var _set_state_BANG___3 = (function (this$,val,render){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$3;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,val,render);
}
});
var _set_state_BANG___4 = (function (this$,ks,val,render){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$ISetState$_set_state_BANG_$arity$4;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._set_state_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISetState.-set-state!",this$);
}
}
})().call(null,this$,ks,val,render);
}
});
_set_state_BANG_ = function(this$,ks,val,render){
switch(arguments.length){
case 3:
return _set_state_BANG___3.call(this,this$,ks,val);
case 4:
return _set_state_BANG___4.call(this,this$,ks,val,render);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = _set_state_BANG___3;
_set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = _set_state_BANG___4;
return _set_state_BANG_;
})()
;


om.core.IRenderQueue = (function (){var obj19953 = {};
return obj19953;
})();

om.core._get_queue = (function _get_queue(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IRenderQueue$_get_queue$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._get_queue[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._get_queue["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-get-queue",this$);
}
}
})().call(null,this$);
}
});

om.core._queue_render_BANG_ = (function _queue_render_BANG_(this$,c){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-queue-render!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._empty_queue_BANG_ = (function _empty_queue_BANG_(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRenderQueue.-empty-queue!",this$);
}
}
})().call(null,this$);
}
});


om.core.IValue = (function (){var obj19955 = {};
return obj19955;
})();

om.core._value = (function _value(x){
if((function (){var and__3760__auto__ = x;
if(and__3760__auto__){
return x.om$core$IValue$_value$arity$1;
} else {
return and__3760__auto__;
}
})()){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__4416__auto__ = (((x == null))?null:x);
return (function (){var or__3772__auto__ = (om.core._value[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._value["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IValue.-value",x);
}
}
})().call(null,x);
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

om.core.ICursor = (function (){var obj19957 = {};
return obj19957;
})();

om.core._path = (function _path(cursor){
if((function (){var and__3760__auto__ = cursor;
if(and__3760__auto__){
return cursor.om$core$ICursor$_path$arity$1;
} else {
return and__3760__auto__;
}
})()){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__4416__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3772__auto__ = (om.core._path[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._path["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});

om.core._state = (function _state(cursor){
if((function (){var and__3760__auto__ = cursor;
if(and__3760__auto__){
return cursor.om$core$ICursor$_state$arity$1;
} else {
return and__3760__auto__;
}
})()){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__4416__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3772__auto__ = (om.core._state[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._state["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IToCursor = (function (){var obj19959 = {};
return obj19959;
})();

om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){
if((function (){var and__3760__auto__ = value;
if(and__3760__auto__){
return value.om$core$IToCursor$_to_cursor$arity$2;
} else {
return and__3760__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__4416__auto__ = (((value == null))?null:value);
return (function (){var or__3772__auto__ = (om.core._to_cursor[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._to_cursor["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){
if((function (){var and__3760__auto__ = value;
if(and__3760__auto__){
return value.om$core$IToCursor$_to_cursor$arity$3;
} else {
return and__3760__auto__;
}
})()){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__4416__auto__ = (((value == null))?null:value);
return (function (){var or__3772__auto__ = (om.core._to_cursor[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._to_cursor["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;


om.core.ICursorDerive = (function (){var obj19961 = {};
return obj19961;
})();

om.core._derive = (function _derive(cursor,derived,state,path){
if((function (){var and__3760__auto__ = cursor;
if(and__3760__auto__){
return cursor.om$core$ICursorDerive$_derive$arity$4;
} else {
return and__3760__auto__;
}
})()){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__4416__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3772__auto__ = (om.core._derive[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._derive["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ICursorDerive.-derive",cursor);
}
}
})().call(null,cursor,derived,state,path);
}
});

(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return om.core.to_cursor.call(null,derived,state,path);
}));
om.core.path = (function path(cursor){
return om.core._path.call(null,cursor);
});
om.core.value = (function value(cursor){
return om.core._value.call(null,cursor);
});
om.core.state = (function state(cursor){
return om.core._state.call(null,cursor);
});

om.core.ITransact = (function (){var obj19963 = {};
return obj19963;
})();

om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){
if((function (){var and__3760__auto__ = cursor;
if(and__3760__auto__){
return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else {
return and__3760__auto__;
}
})()){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__4416__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3772__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._transact_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});


om.core.INotify = (function (){var obj19965 = {};
return obj19965;
})();

om.core._listen_BANG_ = (function _listen_BANG_(x,key,tx_listen){
if((function (){var and__3760__auto__ = x;
if(and__3760__auto__){
return x.om$core$INotify$_listen_BANG_$arity$3;
} else {
return and__3760__auto__;
}
})()){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__4416__auto__ = (((x == null))?null:x);
return (function (){var or__3772__auto__ = (om.core._listen_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._listen_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-listen!",x);
}
}
})().call(null,x,key,tx_listen);
}
});

om.core._unlisten_BANG_ = (function _unlisten_BANG_(x,key){
if((function (){var and__3760__auto__ = x;
if(and__3760__auto__){
return x.om$core$INotify$_unlisten_BANG_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__4416__auto__ = (((x == null))?null:x);
return (function (){var or__3772__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-unlisten!",x);
}
}
})().call(null,x,key);
}
});

om.core._notify_BANG_ = (function _notify_BANG_(x,tx_data,root_cursor){
if((function (){var and__3760__auto__ = x;
if(and__3760__auto__){
return x.om$core$INotify$_notify_BANG_$arity$3;
} else {
return and__3760__auto__;
}
})()){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__4416__auto__ = (((x == null))?null:x);
return (function (){var or__3772__auto__ = (om.core._notify_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._notify_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"INotify.-notify!",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});


om.core.IRootProperties = (function (){var obj19967 = {};
return obj19967;
})();

om.core._set_property_BANG_ = (function _set_property_BANG_(this$,id,p,val){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._set_property_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-set-property!",this$);
}
}
})().call(null,this$,id,p,val);
}
});

om.core._remove_property_BANG_ = (function _remove_property_BANG_(this$,id,p){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-property!",this$);
}
}
})().call(null,this$,id,p);
}
});

om.core._remove_properties_BANG_ = (function _remove_properties_BANG_(this$,id){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-remove-properties!",this$);
}
}
})().call(null,this$,id);
}
});

om.core._get_property = (function _get_property(this$,id,p){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IRootProperties$_get_property$arity$3;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._get_property[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._get_property["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootProperties.-get-property",this$);
}
}
})().call(null,this$,id,p);
}
});


om.core.IRootKey = (function (){var obj19969 = {};
return obj19969;
})();

om.core._root_key = (function _root_key(cursor){
if((function (){var and__3760__auto__ = cursor;
if(and__3760__auto__){
return cursor.om$core$IRootKey$_root_key$arity$1;
} else {
return and__3760__auto__;
}
})()){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__4416__auto__ = (((cursor == null))?null:cursor);
return (function (){var or__3772__auto__ = (om.core._root_key[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._root_key["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IRootKey.-root-key",cursor);
}
}
})().call(null,cursor);
}
});


om.core.IAdapt = (function (){var obj19971 = {};
return obj19971;
})();

om.core._adapt = (function _adapt(this$,other){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IAdapt$_adapt$arity$2;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._adapt[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._adapt["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IAdapt.-adapt",this$);
}
}
})().call(null,this$,other);
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function adapt(x,other){
return om.core._adapt.call(null,x,other);
});

om.core.IOmRef = (function (){var obj19973 = {};
return obj19973;
})();

om.core._add_dep_BANG_ = (function _add_dep_BANG_(this$,c){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-add-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._remove_dep_BANG_ = (function _remove_dep_BANG_(this$,c){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-remove-dep!",this$);
}
}
})().call(null,this$,c);
}
});

om.core._refresh_deps_BANG_ = (function _refresh_deps_BANG_(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-refresh-deps!",this$);
}
}
})().call(null,this$);
}
});

om.core._get_deps = (function _get_deps(this$){
if((function (){var and__3760__auto__ = this$;
if(and__3760__auto__){
return this$.om$core$IOmRef$_get_deps$arity$1;
} else {
return and__3760__auto__;
}
})()){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__4416__auto__ = (((this$ == null))?null:this$);
return (function (){var or__3772__auto__ = (om.core._get_deps[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (om.core._get_deps["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IOmRef.-get-deps",this$);
}
}
})().call(null,this$);
}
});


om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){
var old_state = cljs.core.deref.call(null,state);
var path = cljs.core.into.call(null,om.core.path.call(null,cursor),korks);
var ret = (((function (){var G__19975 = state;
if(G__19975){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__19975.om$core$IOmSwap$;
}
})())){
return true;
} else {
if((!G__19975.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__19975);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmSwap,G__19975);
}
})())?om.core._om_swap_BANG_.call(null,state,cursor,korks,f,tag):((cljs.core.empty_QMARK_.call(null,path))?cljs.core.swap_BANG_.call(null,state,f):cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","defer","om.core/defer",-1038866178))){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"old-value","old-value",862546795),cljs.core.get_in.call(null,old_state,path),new cljs.core.Keyword(null,"new-value","new-value",1087038368),cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path),new cljs.core.Keyword(null,"old-state","old-state",1039580704),old_state,new cljs.core.Keyword(null,"new-state","new-state",-490349212),cljs.core.deref.call(null,state)], null);
if(!((tag == null))){
return om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.call(null,tx_data,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag));
} else {
return om.core.notify_STAR_.call(null,cursor,tx_data);
}
}
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){
var G__19977 = x;
if(G__19977){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__19977.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__19977.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__19977);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__19977);
}
});
om.core.component_QMARK_ = (function component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_.call(null,c)){
return node.props.children = c.call(null,node);
} else {
return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function() {
var get_props = null;
var get_props__1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

return (x.props["__om_cursor"]);
});
var get_props__2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"x","x",-555367584,null))))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__19979 = (x.props["__om_cursor"]);
var G__19979__$1 = ((cljs.core.seq.call(null,korks__$1))?cljs.core.get_in.call(null,G__19979,korks__$1):G__19979);
return G__19979__$1;
});
get_props = function(x,korks){
switch(arguments.length){
case 1:
return get_props__1.call(this,x);
case 2:
return get_props__2.call(this,x,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_props.cljs$core$IFn$_invoke$arity$1 = get_props__1;
get_props.cljs$core$IFn$_invoke$arity$2 = get_props__2;
return get_props;
})()
;
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_state.call(null,owner);
});
var get_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.call(null,owner,ks);
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_.call(null,korks))){
return cljs.core.get.call(null,get_shared.call(null,owner),korks);
} else {
if(cljs.core.empty_QMARK_.call(null,korks)){
return get_shared.call(null,owner);
} else {
return cljs.core.get_in.call(null,get_shared.call(null,owner),korks);

}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){
var state = owner.state;
var temp__4126__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var pending_state = temp__4126__auto__;
var G__19981 = state;
(G__19981["__om_prev_state"] = (state["__om_state"]));

(G__19981["__om_state"] = pending_state);

(G__19981["__om_pending_state"] = null);

return G__19981;
} else {
return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){
return merge_props_state.call(null,owner,null);
});
var merge_props_state__2 = (function (owner,props){
var props__$1 = (function (){var or__3772__auto__ = props;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return owner.props;
}
})();
var temp__4126__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4126__auto__)){
var props_state = temp__4126__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.call(null,(function (){var or__3772__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.ref_changed_QMARK_ = (function ref_changed_QMARK_(ref){
var val = om.core.value.call(null,ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,ref)),om.core.path.call(null,ref),new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
return cljs.core.not_EQ_.call(null,val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count.call(null,refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value.call(null,ref);
var ref_state = om.core.state.call(null,ref);
var ref_path = om.core.path.call(null,ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.call(null,cljs.core.deref.call(null,ref_state),ref_path,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(cljs.core.not_EQ_.call(null,ref_val,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275))){
if(cljs.core.not_EQ_.call(null,ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt.call(null,ref,om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),new cljs.core.Keyword(null,"isOmComponent","isOmComponent",-2070015162),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),new cljs.core.Keyword(null,"componentWillReceiveProps","componentWillReceiveProps",559988974),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),new cljs.core.Keyword(null,"getDisplayName","getDisplayName",1324429466),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619)],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__19983 = c;
if(G__19983){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__19983.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__19983.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__19983);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__19983);
}
})()){
var state_20004 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__3772__auto__ = (state_20004["__om_prev_state"]);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return (state_20004["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__19984 = c;
if(G__19984){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__19984.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__19984.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__19984);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__19984);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__19985 = cljs.core.seq.call(null,refs);
var chunk__19986 = null;
var count__19987 = (0);
var i__19988 = (0);
while(true){
if((i__19988 < count__19987)){
var ref = cljs.core._nth.call(null,chunk__19986,i__19988);
om.core.unobserve.call(null,this$,ref);

var G__20005 = seq__19985;
var G__20006 = chunk__19986;
var G__20007 = count__19987;
var G__20008 = (i__19988 + (1));
seq__19985 = G__20005;
chunk__19986 = G__20006;
count__19987 = G__20007;
i__19988 = G__20008;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__19985);
if(temp__4126__auto____$1){
var seq__19985__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19985__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__19985__$1);
var G__20009 = cljs.core.chunk_rest.call(null,seq__19985__$1);
var G__20010 = c__4559__auto__;
var G__20011 = cljs.core.count.call(null,c__4559__auto__);
var G__20012 = (0);
seq__19985 = G__20009;
chunk__19986 = G__20010;
count__19987 = G__20011;
i__19988 = G__20012;
continue;
} else {
var ref = cljs.core.first.call(null,seq__19985__$1);
om.core.unobserve.call(null,this$,ref);

var G__20013 = cljs.core.next.call(null,seq__19985__$1);
var G__20014 = null;
var G__20015 = (0);
var G__20016 = (0);
seq__19985 = G__20013;
chunk__19986 = G__20014;
count__19987 = G__20015;
i__19988 = G__20016;
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
}),(function (next_props){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__19989 = c;
if(G__19989){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__19989.om$core$IWillReceiveProps$;
}
})())){
return true;
} else {
if((!G__19989.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__19989);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillReceiveProps,G__19989);
}
})()){
return om.core.will_receive_props.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children.call(null,this$);
om.core.merge_props_state.call(null,this$,next_props);

if((function (){var G__19990 = c;
if(G__19990){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__19990.om$core$IShouldUpdate$;
}
})())){
return true;
} else {
if((!G__19990.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__19990);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__19990);
}
})()){
return om.core.should_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.call(null,om.core._value.call(null,cursor),om.core._value.call(null,next_cursor))){
return true;
} else {
if((om.core.cursor_QMARK_.call(null,cursor)) && (om.core.cursor_QMARK_.call(null,next_cursor)) && (cljs.core.not_EQ_.call(null,om.core._path.call(null,cursor),om.core._path.call(null,next_cursor)))){
return true;
} else {
if(cljs.core.not_EQ_.call(null,om.core._get_state.call(null,this$),om.core._get_render_state.call(null,this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__3760__auto__ = !((cljs.core.count.call(null,(state["__om_refs"])) === (0)));
if(and__3760__auto__){
return cljs.core.some.call(null,((function (and__3760__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__19982_SHARP_){
return om.core.ref_changed_QMARK_.call(null,p1__19982_SHARP_);
});})(and__3760__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__3760__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var _STAR_parent_STAR_19991 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_19992 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_19993 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_19994 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_19995 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if((function (){var G__19996 = c;
if(G__19996){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__19996.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__19996.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__19996);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__19996);
}
})()){
return om.core.render.call(null,c);
} else {
if((function (){var G__19997 = c;
if(G__19997){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__19997.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__19997.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__19997);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__19997);
}
})()){
return om.core.render_props.call(null,c,(props["__om_cursor"]),om.core.get_state.call(null,this$));
} else {
if((function (){var G__19998 = c;
if(G__19998){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__19998.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__19998.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__19998);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__19998);
}
})()){
return om.core.render_state.call(null,c,om.core.get_state.call(null,this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_19995;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_19994;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_19993;

om.core._STAR_state_STAR_ = _STAR_state_STAR_19992;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_19991;
}}),(function (next_props,next_state){
var this$ = this;
var c_20017 = om.core.children.call(null,this$);
if((function (){var G__19999 = c_20017;
if(G__19999){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__19999.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__19999.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__19999);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__19999);
}
})()){
var state_20018 = this$.state;
om.core.will_update.call(null,c_20017,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__3772__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_state": cljs.core.merge.call(null,(((function (){var G__20000 = c;
if(G__20000){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20000.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__20000.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__20000);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__20000);
}
})())?om.core.init_state.call(null,c):null),cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693))), "__om_id": (function (){var or__3772__auto__ = id;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})()};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var cursor = (this$.props["__om_cursor"]);
if((function (){var G__20001 = c;
if(G__20001){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20001.om$core$IDidMount$;
}
})())){
return true;
} else {
if((!G__20001.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__20001);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__20001);
}
})()){
return om.core.did_mount.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__20002 = c;
if(G__20002){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20002.om$core$IDisplayName$;
}
})())){
return true;
} else {
if((!G__20002.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__20002);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDisplayName,G__20002);
}
})()){
return om.core.display_name.call(null,c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_20019 = om.core.children.call(null,this$);
if((function (){var G__20003 = c_20019;
if(G__20003){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20003.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__20003.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__20003);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__20003);
}
})()){
om.core.will_mount.call(null,c_20019);
} else {
}

return om.core.merge_pending_state.call(null,this$);
})]);
om.core.specify_state_methods_BANG_ = (function specify_state_methods_BANG_(obj){
var x20021 = obj;
x20021.om$core$IGetState$ = true;

x20021.om$core$IGetState$_get_state$arity$1 = ((function (x20021){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__3772__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return (state["__om_state"]);
}
});})(x20021))
;

x20021.om$core$IGetState$_get_state$arity$2 = ((function (x20021){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x20021))
;

x20021.om$core$IGetRenderState$ = true;

x20021.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x20021){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x20021))
;

x20021.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x20021){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x20021))
;

x20021.om$core$ISetState$ = true;

x20021.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x20021){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__3760__auto__ = !((app_state == null));
if(and__3760__auto__){
return render;
} else {
return and__3760__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x20021))
;

x20021.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x20021){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.call(null,this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in.call(null,pstate,ks,val));

if(cljs.core.truth_((function (){var and__3760__auto__ = !((app_state == null));
if(and__3760__auto__){
return render;
} else {
return and__3760__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,app_state,this$__$1);
} else {
return null;
}
});})(x20021))
;

return x20021;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
om.core.react_id = (function react_id(x){
var id = (x["_rootNodeID"]);
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"id","id",252129435,null)))].join('')));
}

return id;
});
om.core.get_gstate = (function get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate.call(null,owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,owner)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923),new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1)),new cljs.core.Keyword(null,"render-state","render-state",2053902270),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973));
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.no_local_state_methods = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
var props = this$.props;
var istate = (function (){var or__3772__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__3772__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",299074693).cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",299074693)),(((function (){var G__20022 = c;
if(G__20022){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20022.om$core$IInitState$;
}
})())){
return true;
} else {
if((!G__20022.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__20022);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__20022);
}
})())?om.core.init_state.call(null,c):null));
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
(props["__om_init_state"] = null);

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);

return {"__om_id": om_id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",-285327619),(function (){
var this$ = this;
om.core.merge_props_state.call(null,this$);

var c_20031 = om.core.children.call(null,this$);
if((function (){var G__20023 = c_20031;
if(G__20023){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20023.om$core$IWillMount$;
}
})())){
return true;
} else {
if((!G__20023.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__20023);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__20023);
}
})()){
om.core.will_mount.call(null,c_20031);
} else {
}

return om.core.no_local_merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (){
var this$ = this;
var c = om.core.children.call(null,this$);
if((function (){var G__20024 = c;
if(G__20024){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20024.om$core$IWillUnmount$;
}
})())){
return true;
} else {
if((!G__20024.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__20024);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__20024);
}
})()){
om.core.will_unmount.call(null,c);
} else {
}

cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128)], null),cljs.core.dissoc,om.core.react_id.call(null,this$));

var temp__4126__auto__ = cljs.core.seq.call(null,(this$.state["__om_refs"]));
if(temp__4126__auto__){
var refs = temp__4126__auto__;
var seq__20025 = cljs.core.seq.call(null,refs);
var chunk__20026 = null;
var count__20027 = (0);
var i__20028 = (0);
while(true){
if((i__20028 < count__20027)){
var ref = cljs.core._nth.call(null,chunk__20026,i__20028);
om.core.unobserve.call(null,this$,ref);

var G__20032 = seq__20025;
var G__20033 = chunk__20026;
var G__20034 = count__20027;
var G__20035 = (i__20028 + (1));
seq__20025 = G__20032;
chunk__20026 = G__20033;
count__20027 = G__20034;
i__20028 = G__20035;
continue;
} else {
var temp__4126__auto____$1 = cljs.core.seq.call(null,seq__20025);
if(temp__4126__auto____$1){
var seq__20025__$1 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20025__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__20025__$1);
var G__20036 = cljs.core.chunk_rest.call(null,seq__20025__$1);
var G__20037 = c__4559__auto__;
var G__20038 = cljs.core.count.call(null,c__4559__auto__);
var G__20039 = (0);
seq__20025 = G__20036;
chunk__20026 = G__20037;
count__20027 = G__20038;
i__20028 = G__20039;
continue;
} else {
var ref = cljs.core.first.call(null,seq__20025__$1);
om.core.unobserve.call(null,this$,ref);

var G__20040 = cljs.core.next.call(null,seq__20025__$1);
var G__20041 = null;
var G__20042 = (0);
var G__20043 = (0);
seq__20025 = G__20040;
chunk__20026 = G__20041;
count__20027 = G__20042;
i__20028 = G__20043;
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
}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",657390932),(function (next_props,next_state){
var this$ = this;
var props_20044 = this$.props;
var c_20045 = om.core.children.call(null,this$);
if((function (){var G__20029 = c_20045;
if(G__20029){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20029.om$core$IWillUpdate$;
}
})())){
return true;
} else {
if((!G__20029.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__20029);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__20029);
}
})()){
var state_20046 = this$.state;
om.core.will_update.call(null,c_20045,om.core.get_props.call(null,{"isOmComponent": true, "props": next_props}),om.core._get_state.call(null,this$));
} else {
}

om.core.no_local_merge_pending_state.call(null,this$);

return om.core.update_refs.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children.call(null,this$);
var gstate = om.core.get_gstate.call(null,this$);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$)], null);
if((function (){var G__20030 = c;
if(G__20030){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20030.om$core$IDidUpdate$;
}
})())){
return true;
} else {
if((!G__20030.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__20030);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__20030);
}
})()){
var state_20047 = this$.state;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"isOmComponent": true, "props": prev_props}),(function (){var or__3772__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",1888227923).cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",1888227923));
} else {
return null;
}
}));
om.core.no_local_descriptor = (function no_local_descriptor(methods$){
var x20049 = cljs.core.clj__GT_js.call(null,methods$);
x20049.om$core$IGetState$ = true;

x20049.om$core$IGetState$_get_state$arity$1 = ((function (x20049){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1)], null);
var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
var or__3772__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",1525896973).cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return new cljs.core.Keyword(null,"render-state","render-state",2053902270).cljs$core$IFn$_invoke$arity$1(states);
}
});})(x20049))
;

x20049.om$core$IGetState$_get_state$arity$2 = ((function (x20049){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});})(x20049))
;

x20049.om$core$IGetRenderState$ = true;

x20049.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x20049){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",2053902270)], null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.get_gstate.call(null,this$__$1)),spath);
});})(x20049))
;

x20049.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x20049){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});})(x20049))
;

x20049.om$core$ISetState$ = true;

x20049.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x20049){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate.call(null,this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",-1313872128),om.core.react_id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",1525896973)], null);
cljs.core.swap_BANG_.call(null,om.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__3760__auto__ = !((gstate == null));
if(and__3760__auto__){
return render;
} else {
return and__3760__auto__;
}
})())){
return om.core._queue_render_BANG_.call(null,gstate,this$__$1);
} else {
return null;
}
});})(x20049))
;

x20049.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x20049){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.call(null,this$__$1,cljs.core.assoc_in.call(null,om.core._get_state.call(null,this$__$1),ks,val),render);
});})(x20049))
;

return x20049;
});
om.core.valid_QMARK_ = (function valid_QMARK_(x){
if((function (){var G__20051 = x;
if(G__20051){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20051.om$core$ICursor$;
}
})())){
return true;
} else {
if((!G__20051.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__20051);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICursor,G__20051);
}
})()){
return !(cljs.core.keyword_identical_QMARK_.call(null,cljs.core.deref.call(null,x),new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993)));
} else {
return true;
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.call(null,self__.value,k,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275));
if(!(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("om.core","not-found","om.core/not-found",1869894275)))){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc.call(null,self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc.call(null,self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (p__20053){
var vec__20054 = p__20053;
var k = cljs.core.nth.call(null,vec__20054,(0),null);
var v = cljs.core.nth.call(null,vec__20054,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__20055 = null;
var G__20055__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__20055__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__20055 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20055__2.call(this,self__,k);
case 3:
return G__20055__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20055.cljs$core$IFn$_invoke$arity$2 = G__20055__2;
G__20055.cljs$core$IFn$_invoke$arity$3 = G__20055__3;
return G__20055;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args20052){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20052)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.call(null,this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce.call(null,self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n),self__.state,cljs.core.conj.call(null,self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count.call(null,self__.value))){
return om.core._derive.call(null,this$__$1,cljs.core._nth.call(null,self__.value,n,not_found),self__.state,cljs.core.conj.call(null,self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._peek.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._pop.call(null,self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,self__.value,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty.call(null,self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_.call(null,self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_.call(null,self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive.call(null,this$__$1,cljs.core._assoc_n.call(null,self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,self__.value) > (0))){
return cljs.core.map.call(null,((function (this$__$1){
return (function (v,i){
return om.core._derive.call(null,this$__$1,v,self__.state,cljs.core.conj.call(null,self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.call(null));
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta.call(null,self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj.call(null,self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__20057 = null;
var G__20057__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__20057__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__20057 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__20057__2.call(this,self__,k);
case 3:
return G__20057__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20057.cljs$core$IFn$_invoke$arity$2 = G__20057__2;
G__20057.cljs$core$IFn$_invoke$arity$3 = G__20057__3;
return G__20057;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args20056){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20056)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.state),self__.path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){
var x20059 = cljs.core.clone.call(null,val);
x20059.cljs$core$IEquiv$ = true;

x20059.cljs$core$IEquiv$_equiv$arity$2 = ((function (x20059){
return (function (_,other){
var ___$1 = this;
if(om.core.cursor_QMARK_.call(null,other)){
return cljs.core._EQ_.call(null,val,om.core._value.call(null,other));
} else {
return cljs.core._EQ_.call(null,val,other);
}
});})(x20059))
;

x20059.om$core$ITransact$ = true;

x20059.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x20059){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_.call(null,state,this$__$1,korks,f,tag);
});})(x20059))
;

x20059.om$core$ICursor$ = true;

x20059.om$core$ICursor$_path$arity$1 = ((function (x20059){
return (function (_){
var ___$1 = this;
return path;
});})(x20059))
;

x20059.om$core$ICursor$_state$arity$1 = ((function (x20059){
return (function (_){
var ___$1 = this;
return state;
});})(x20059))
;

x20059.cljs$core$IDeref$ = true;

x20059.cljs$core$IDeref$_deref$arity$1 = ((function (x20059){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,state),path,new cljs.core.Keyword("om.core","invalid","om.core/invalid",1948827993));
});})(x20059))
;

return x20059;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){
return to_cursor.call(null,val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){
return to_cursor.call(null,val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){
if(om.core.cursor_QMARK_.call(null,val)){
return val;
} else {
if((function (){var G__20062 = val;
if(G__20062){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20062.om$core$IToCursor$;
}
})())){
return true;
} else {
if((!G__20062.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__20062);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IToCursor,G__20062);
}
})()){
return om.core._to_cursor.call(null,val,state,path);
} else {
if(cljs.core.indexed_QMARK_.call(null,val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_.call(null,val)){
return (new om.core.MapCursor(val,state,path));
} else {
if((function (){var G__20063 = val;
if(G__20063){
var bit__4453__auto__ = (G__20063.cljs$lang$protocol_mask$partition1$ & (8192));
if((bit__4453__auto__) || (G__20063.cljs$core$ICloneable$)){
return true;
} else {
if((!G__20063.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__20063);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICloneable,G__20063);
}
})()){
return om.core.to_cursor_STAR_.call(null,val,state,path);
} else {
return val;

}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){
var state = om.core._state.call(null,cursor);
return om.core._notify_BANG_.call(null,state,tx_data,om.core.to_cursor.call(null,cljs.core.deref.call(null,state),state));
});


/**
* Given an application state atom return a root cursor for it.
*/
om.core.root_cursor = (function root_cursor(atom){
if((function (){var G__20065 = atom;
if(G__20065){
var bit__4453__auto__ = (G__20065.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__4453__auto__) || (G__20065.cljs$core$IDeref$)){
return true;
} else {
if((!G__20065.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__20065);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__20065);
}
})()){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"atom","atom",1243487874,null))))].join('')));
}

return om.core.to_cursor.call(null,cljs.core.deref.call(null,atom),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.ref_sub_cursor = (function ref_sub_cursor(x,parent){
var x20067 = cljs.core.clone.call(null,x);
x20067.om$core$ITransact$ = true;

x20067.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x20067){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
om.core.commit_BANG_.call(null,cursor__$1,korks,f);

return om.core._refresh_deps_BANG_.call(null,parent);
});})(x20067))
;

x20067.om$core$ICursorDerive$ = true;

x20067.om$core$ICursorDerive$_derive$arity$4 = ((function (x20067){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.adapt.call(null,this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x20067))
;

x20067.om$core$IAdapt$ = true;

x20067.om$core$IAdapt$_adapt$arity$2 = ((function (x20067){
return (function (this$,other){
var this$__$1 = this;
return ref_sub_cursor.call(null,om.core.adapt.call(null,x,other),parent);
});})(x20067))
;

x20067.cljs$core$ICloneable$ = true;

x20067.cljs$core$ICloneable$_clone$arity$1 = ((function (x20067){
return (function (this$){
var this$__$1 = this;
return ref_sub_cursor.call(null,cljs.core.clone.call(null,x),parent);
});})(x20067))
;

return x20067;
});
/**
* Given a cursor return a reference cursor that inherits all of the
* properties and methods of the cursor. Reference cursors may be
* observed via om.core/observe.
*/
om.core.ref_cursor = (function ref_cursor(cursor){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if((function (){var G__20074 = cursor;
if(G__20074){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20074.om$core$IOmRef$;
}
})())){
return true;
} else {
if((!G__20074.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__20074);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IOmRef,G__20074);
}
})()){
return cursor;
} else {
var path = om.core.path.call(null,cursor);
var storage = cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.call(null,cljs.core.identity,cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY))),path);
var x20075 = cljs.core.clone.call(null,cursor);
x20075.om$core$ITransact$ = true;

x20075.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x20075,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
om.core.commit_BANG_.call(null,cursor__$2,korks,f);

return om.core._refresh_deps_BANG_.call(null,cursor__$2);
});})(x20075,path,storage))
;

x20075.om$core$IOmRef$ = true;

x20075.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x20075,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,storage,cljs.core.assoc,om.core.id.call(null,c),c);
});})(x20075,path,storage))
;

x20075.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x20075,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.call(null,storage,cljs.core.dissoc,om.core.id.call(null,c));
if((cljs.core.count.call(null,m) === (0))){
return cljs.core.swap_BANG_.call(null,om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x20075,path,storage))
;

x20075.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x20075,path,storage){
return (function (_){
var ___$1 = this;
var seq__20076 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,storage)));
var chunk__20077 = null;
var count__20078 = (0);
var i__20079 = (0);
while(true){
if((i__20079 < count__20078)){
var c = cljs.core._nth.call(null,chunk__20077,i__20079);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__20080 = seq__20076;
var G__20081 = chunk__20077;
var G__20082 = count__20078;
var G__20083 = (i__20079 + (1));
seq__20076 = G__20080;
chunk__20077 = G__20081;
count__20078 = G__20082;
i__20079 = G__20083;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__20076);
if(temp__4126__auto__){
var seq__20076__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20076__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__20076__$1);
var G__20084 = cljs.core.chunk_rest.call(null,seq__20076__$1);
var G__20085 = c__4559__auto__;
var G__20086 = cljs.core.count.call(null,c__4559__auto__);
var G__20087 = (0);
seq__20076 = G__20084;
chunk__20077 = G__20085;
count__20078 = G__20086;
i__20079 = G__20087;
continue;
} else {
var c = cljs.core.first.call(null,seq__20076__$1);
om.core._queue_render_BANG_.call(null,om.core.state.call(null,cursor),c);

var G__20088 = cljs.core.next.call(null,seq__20076__$1);
var G__20089 = null;
var G__20090 = (0);
var G__20091 = (0);
seq__20076 = G__20088;
chunk__20077 = G__20089;
count__20078 = G__20090;
i__20079 = G__20091;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20075,path,storage))
;

x20075.om$core$IOmRef$_get_deps$arity$1 = ((function (x20075,path,storage){
return (function (_){
var ___$1 = this;
return cljs.core.deref.call(null,storage);
});})(x20075,path,storage))
;

x20075.om$core$ICursorDerive$ = true;

x20075.om$core$ICursorDerive$_derive$arity$4 = ((function (x20075,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.call(null,derived,state,path__$1);
if(om.core.cursor_QMARK_.call(null,cursor_SINGLEQUOTE_)){
return om.core.ref_sub_cursor.call(null,cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x20075,path,storage))
;

return x20075;
}
});
om.core.add_ref_to_component_BANG_ = (function add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__3772__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.call(null,refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_.call(null,refs,ref)){
return (state["__om_refs"] = cljs.core.disj.call(null,refs,ref));
} else {
return null;
}
});
/**
* Given a component and a reference cursor have the component observe
* the reference cursor for any data changes.
*/
om.core.observe = (function observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

if(om.core.cursor_QMARK_.call(null,ref)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"ref","ref",-1364538802,null))))].join('')));
}

om.core.add_ref_to_component_BANG_.call(null,c,ref);

om.core._add_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.unobserve = (function unobserve(c,ref){
om.core.remove_ref_from_component_BANG_.call(null,c,ref);

om.core._remove_dep_BANG_.call(null,ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
om.core.get_renderT = (function get_renderT(state){
var or__3772__auto__ = state.om$render$T;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return (0);
}
});
/**
* Force a render of *all* roots. Usage of this function is almost
* never recommended.
*/
om.core.render_all = (function() {
var render_all = null;
var render_all__0 = (function (){
return render_all.call(null,null);
});
var render_all__1 = (function (state){
om.core.refresh_queued = false;

var seq__20096_20100 = cljs.core.seq.call(null,cljs.core.deref.call(null,om.core.refresh_set));
var chunk__20097_20101 = null;
var count__20098_20102 = (0);
var i__20099_20103 = (0);
while(true){
if((i__20099_20103 < count__20098_20102)){
var f_20104 = cljs.core._nth.call(null,chunk__20097_20101,i__20099_20103);
f_20104.call(null);

var G__20105 = seq__20096_20100;
var G__20106 = chunk__20097_20101;
var G__20107 = count__20098_20102;
var G__20108 = (i__20099_20103 + (1));
seq__20096_20100 = G__20105;
chunk__20097_20101 = G__20106;
count__20098_20102 = G__20107;
i__20099_20103 = G__20108;
continue;
} else {
var temp__4126__auto___20109 = cljs.core.seq.call(null,seq__20096_20100);
if(temp__4126__auto___20109){
var seq__20096_20110__$1 = temp__4126__auto___20109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20096_20110__$1)){
var c__4559__auto___20111 = cljs.core.chunk_first.call(null,seq__20096_20110__$1);
var G__20112 = cljs.core.chunk_rest.call(null,seq__20096_20110__$1);
var G__20113 = c__4559__auto___20111;
var G__20114 = cljs.core.count.call(null,c__4559__auto___20111);
var G__20115 = (0);
seq__20096_20100 = G__20112;
chunk__20097_20101 = G__20113;
count__20098_20102 = G__20114;
i__20099_20103 = G__20115;
continue;
} else {
var f_20116 = cljs.core.first.call(null,seq__20096_20110__$1);
f_20116.call(null);

var G__20117 = cljs.core.next.call(null,seq__20096_20110__$1);
var G__20118 = null;
var G__20119 = (0);
var G__20120 = (0);
seq__20096_20100 = G__20117;
chunk__20097_20101 = G__20118;
count__20098_20102 = G__20119;
i__20099_20103 = G__20120;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT.call(null,state) + (1));
}
});
render_all = function(state){
switch(arguments.length){
case 0:
return render_all__0.call(this);
case 1:
return render_all__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
render_all.cljs$core$IFn$_invoke$arity$0 = render_all__0;
render_all.cljs$core$IFn$_invoke$arity$1 = render_all__1;
return render_all;
})()
;
om.core.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_component_QMARK_ = (function valid_component_QMARK_(x,f){
if((function (){var or__3772__auto__ = (function (){var G__20127 = x;
if(G__20127){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20127.om$core$IRender$;
}
})())){
return true;
} else {
if((!G__20127.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__20127);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRender,G__20127);
}
})();
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (function (){var G__20129 = x;
if(G__20129){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto____$1 = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto____$1)){
return or__3772__auto____$1;
} else {
return G__20129.om$core$IRenderProps$;
}
})())){
return true;
} else {
if((!G__20129.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__20129);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderProps,G__20129);
}
})();
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
var G__20130 = x;
if(G__20130){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto____$2 = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto____$2)){
return or__3772__auto____$2;
} else {
return G__20130.om$core$IRenderState$;
}
})())){
return true;
} else {
if((!G__20130.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__20130);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRenderState,G__20130);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRender","IRender",590822196,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderProps","IRenderProps",2115139472,null),new cljs.core.Symbol(null,"x","x",-555367584,null)),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IRenderState","IRenderState",-897673898,null),new cljs.core.Symbol(null,"x","x",-555367584,null)))))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function valid_opts_QMARK_(m){
return cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),null,new cljs.core.Keyword(null,"fn","fn",-1175266204),null,new cljs.core.Keyword(null,"instrument","instrument",-960698844),null,new cljs.core.Keyword(null,"react-key","react-key",1337881348),null,new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"init-state","init-state",1450863212),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),null,new cljs.core.Keyword(null,"opts","opts",155075701),null,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),null,new cljs.core.Keyword(null,"shared","shared",-384145993),null], null), null),cljs.core.keys.call(null,m));
});
om.core.id = (function id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function() {
var get_descriptor = null;
var get_descriptor__1 = (function (f){
return get_descriptor.call(null,f,null);
});
var get_descriptor__2 = (function (f,descriptor){
if(((f["om$descriptor"]) == null)){
(f["om$descriptor"] = React.createFactory(React.createClass((function (){var or__3772__auto__ = descriptor;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__3772__auto____$1)){
return or__3772__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})())));
} else {
}

return (f["om$descriptor"]);
});
get_descriptor = function(f,descriptor){
switch(arguments.length){
case 1:
return get_descriptor__1.call(this,f);
case 2:
return get_descriptor__2.call(this,f,descriptor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_descriptor.cljs$core$IFn$_invoke$arity$1 = get_descriptor__1;
get_descriptor.cljs$core$IFn$_invoke$arity$2 = get_descriptor__2;
return get_descriptor;
})()
;
om.core.getf = (function() {
var getf = null;
var getf__2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
var getf__3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method.call(null,f,dv);
} else {
return f;
}
});
getf = function(f,cursor,opts){
switch(arguments.length){
case 2:
return getf__2.call(this,f,cursor);
case 3:
return getf__3.call(this,f,cursor,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
getf.cljs$core$IFn$_invoke$arity$2 = getf__2;
getf.cljs$core$IFn$_invoke$arity$3 = getf__3;
return getf;
})()
;
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){
return build_STAR_.call(null,f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(om.core.valid_opts_QMARK_.call(null,m)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.call(null,", ",cljs.core.keys.call(null,m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-opts?","valid-opts?",1000038576,null),new cljs.core.Symbol(null,"m","m",-1021758608,null))))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor));
return ctor.call(null,{"children": ((function (shared,ctor){
return (function (this$){
var ret = f.call(null,cursor,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(shared,ctor))
, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_shared": shared, "__om_cursor": cursor});
} else {
var map__20132 = m;
var map__20132__$1 = ((cljs.core.seq_QMARK_.call(null,map__20132))?cljs.core.apply.call(null,cljs.core.hash_map,map__20132):map__20132);
var opts = cljs.core.get.call(null,map__20132__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var init_state = cljs.core.get.call(null,map__20132__$1,new cljs.core.Keyword(null,"init-state","init-state",1450863212));
var state = cljs.core.get.call(null,map__20132__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var key_fn = cljs.core.get.call(null,map__20132__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var key = cljs.core.get.call(null,map__20132__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dataf = cljs.core.get.call(null,m,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4124__auto__ = new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4124__auto__)){
var i = temp__4124__auto__;
return dataf.call(null,cursor,i);
} else {
return dataf.call(null,cursor);
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.call(null,cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?key_fn.call(null,cursor_SINGLEQUOTE_):cljs.core.get.call(null,m,new cljs.core.Keyword(null,"react-key","react-key",1337881348))
));
var shared = (function (){var or__3772__auto__ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return om.core.get_shared.call(null,om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.call(null,om.core.getf.call(null,f,cursor_SINGLEQUOTE_,opts),new cljs.core.Keyword(null,"descriptor","descriptor",76122018).cljs$core$IFn$_invoke$arity$1(m));
return ctor.call(null,{"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__20132,map__20132__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__20132,map__20132__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__20132,map__20132__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = f.call(null,cursor_SINGLEQUOTE_,this$,opts);
om.core.valid_component_QMARK_.call(null,ret,f);

return ret;
});})(map__20132,map__20132__$1,opts,init_state,state,key_fn,key,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__3772__auto__ = rkey;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": new cljs.core.Keyword("om.core","index","om.core/index",-1724175434).cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_});

}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a value, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument can be
* any value and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* x - any value
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* :descriptor - a JS object of React methods, will be used to
* construct a React class per Om component function
* encountered. defaults to pure-descriptor.
* 
* Example:
* 
* (build list-of-gadgets x
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,x){
return build.call(null,f,x,null);
});
var build__3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = om.core._STAR_instrument_STAR_.call(null,f,x,m);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("om.core","pass","om.core/pass",-1453289268))){
return om.core.build_STAR_.call(null,f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.call(null,f,x,m);
}
});
build = function(f,x,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,x);
case 3:
return build__3.call(this,f,x,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of values, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){
return build_all.call(null,f,xs,null);
});
var build_all__3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_.call(null,m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"m","m",-1021758608,null)))))].join('')));
}

return cljs.core.map.call(null,(function (x,i){
return om.core.build.call(null,f,x,cljs.core.assoc.call(null,m,new cljs.core.Keyword("om.core","index","om.core/index",-1724175434),i));
}),xs,cljs.core.range.call(null));
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
om.core.setup = (function setup(state,key,tx_listen){
if((function (){var G__20141 = state;
if(G__20141){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20141.om$core$INotify$;
}
})())){
return true;
} else {
if((!G__20141.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__20141);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.INotify,G__20141);
}
})()){
} else {
var properties_20149 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var listeners_20150 = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var render_queue_20151 = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var x20142_20152 = state;
x20142_20152.om$core$IRenderQueue$ = true;

x20142_20152.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x20142_20152,properties_20149,listeners_20150,render_queue_20151){
return (function (this$){
var this$__$1 = this;
return cljs.core.deref.call(null,render_queue_20151);
});})(x20142_20152,properties_20149,listeners_20150,render_queue_20151))
;

x20142_20152.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x20142_20152,properties_20149,listeners_20150,render_queue_20151){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,render_queue_20151),c)){
return null;
} else {
cljs.core.swap_BANG_.call(null,render_queue_20151,cljs.core.conj,c);

return cljs.core.swap_BANG_.call(null,this$__$1,cljs.core.identity);
}
});})(x20142_20152,properties_20149,listeners_20150,render_queue_20151))
;

x20142_20152.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x20142_20152,properties_20149,listeners_20150,render_queue_20151){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.call(null,render_queue_20151,cljs.core.empty);
});})(x20142_20152,properties_20149,listeners_20150,render_queue_20151))
;

x20142_20152.om$core$INotify$ = true;

x20142_20152.om$core$INotify$_listen_BANG_$arity$3 = ((function (x20142_20152,properties_20149,listeners_20150,render_queue_20151){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.call(null,listeners_20150,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x20142_20152,properties_20149,listeners_20150,render_queue_20151))
;

x20142_20152.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x20142_20152,properties_20149,listeners_20150,render_queue_20151){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.call(null,listeners_20150,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x20142_20152,properties_20149,listeners_20150,render_queue_20151))
;

x20142_20152.om$core$INotify$_notify_BANG_$arity$3 = ((function (x20142_20152,properties_20149,listeners_20150,render_queue_20151){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__20143_20153 = cljs.core.seq.call(null,cljs.core.deref.call(null,listeners_20150));
var chunk__20144_20154 = null;
var count__20145_20155 = (0);
var i__20146_20156 = (0);
while(true){
if((i__20146_20156 < count__20145_20155)){
var vec__20147_20157 = cljs.core._nth.call(null,chunk__20144_20154,i__20146_20156);
var __20158 = cljs.core.nth.call(null,vec__20147_20157,(0),null);
var f_20159 = cljs.core.nth.call(null,vec__20147_20157,(1),null);
f_20159.call(null,tx_data,root_cursor);

var G__20160 = seq__20143_20153;
var G__20161 = chunk__20144_20154;
var G__20162 = count__20145_20155;
var G__20163 = (i__20146_20156 + (1));
seq__20143_20153 = G__20160;
chunk__20144_20154 = G__20161;
count__20145_20155 = G__20162;
i__20146_20156 = G__20163;
continue;
} else {
var temp__4126__auto___20164 = cljs.core.seq.call(null,seq__20143_20153);
if(temp__4126__auto___20164){
var seq__20143_20165__$1 = temp__4126__auto___20164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20143_20165__$1)){
var c__4559__auto___20166 = cljs.core.chunk_first.call(null,seq__20143_20165__$1);
var G__20167 = cljs.core.chunk_rest.call(null,seq__20143_20165__$1);
var G__20168 = c__4559__auto___20166;
var G__20169 = cljs.core.count.call(null,c__4559__auto___20166);
var G__20170 = (0);
seq__20143_20153 = G__20167;
chunk__20144_20154 = G__20168;
count__20145_20155 = G__20169;
i__20146_20156 = G__20170;
continue;
} else {
var vec__20148_20171 = cljs.core.first.call(null,seq__20143_20165__$1);
var __20172 = cljs.core.nth.call(null,vec__20148_20171,(0),null);
var f_20173 = cljs.core.nth.call(null,vec__20148_20171,(1),null);
f_20173.call(null,tx_data,root_cursor);

var G__20174 = cljs.core.next.call(null,seq__20143_20165__$1);
var G__20175 = null;
var G__20176 = (0);
var G__20177 = (0);
seq__20143_20153 = G__20174;
chunk__20144_20154 = G__20175;
count__20145_20155 = G__20176;
i__20146_20156 = G__20177;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x20142_20152,properties_20149,listeners_20150,render_queue_20151))
;

x20142_20152.om$core$IRootProperties$ = true;

x20142_20152.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x20142_20152,properties_20149,listeners_20150,render_queue_20151){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_20149,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x20142_20152,properties_20149,listeners_20150,render_queue_20151))
;

x20142_20152.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x20142_20152,properties_20149,listeners_20150,render_queue_20151){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_20149,cljs.core.dissoc,id,k);
});})(x20142_20152,properties_20149,listeners_20150,render_queue_20151))
;

x20142_20152.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x20142_20152,properties_20149,listeners_20150,render_queue_20151){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,properties_20149,cljs.core.dissoc,id);
});})(x20142_20152,properties_20149,listeners_20150,render_queue_20151))
;

x20142_20152.om$core$IRootProperties$_get_property$arity$3 = ((function (x20142_20152,properties_20149,listeners_20150,render_queue_20151){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,properties_20149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x20142_20152,properties_20149,listeners_20150,render_queue_20151))
;

}

return om.core._listen_BANG_.call(null,state,key,tx_listen);
});
om.core.tear_down = (function tear_down(state,key){
return om.core._unlisten_BANG_.call(null,state,key);
});
om.core.tag_root_key = (function tag_root_key(cursor,root_key){
if(om.core.cursor_QMARK_.call(null,cursor)){
var x20179 = cljs.core.clone.call(null,cursor);
x20179.om$core$IRootKey$ = true;

x20179.om$core$IRootKey$_root_key$arity$1 = ((function (x20179){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x20179))
;

x20179.om$core$IAdapt$ = true;

x20179.om$core$IAdapt$_adapt$arity$2 = ((function (x20179){
return (function (this$,other){
var this$__$1 = this;
return tag_root_key.call(null,om.core.adapt.call(null,cursor,other),root_key);
});})(x20179))
;

x20179.cljs$core$ICloneable$ = true;

x20179.cljs$core$ICloneable$_clone$arity$1 = ((function (x20179){
return (function (this$){
var this$__$1 = this;
return tag_root_key.call(null,cljs.core.clone.call(null,cursor),root_key);
});})(x20179))
;

return x20179;
} else {
return cursor;
}
});
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* :adapt      - a function to adapt the root cursor
* :raf        - override requestAnimationFrame based rendering. If
* false setTimeout will be use. If given a function
* will be invoked instead.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__20180){
var map__20243 = p__20180;
var map__20243__$1 = ((cljs.core.seq_QMARK_.call(null,map__20243))?cljs.core.apply.call(null,cljs.core.hash_map,map__20243):map__20243);
var options = map__20243__$1;
var raf = cljs.core.get.call(null,map__20243__$1,new cljs.core.Keyword(null,"raf","raf",-1295410152));
var adapt = cljs.core.get.call(null,map__20243__$1,new cljs.core.Keyword(null,"adapt","adapt",-1817022327));
var descriptor = cljs.core.get.call(null,map__20243__$1,new cljs.core.Keyword(null,"descriptor","descriptor",76122018));
var instrument = cljs.core.get.call(null,map__20243__$1,new cljs.core.Keyword(null,"instrument","instrument",-960698844));
var path = cljs.core.get.call(null,map__20243__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var tx_listen = cljs.core.get.call(null,map__20243__$1,new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367));
var target = cljs.core.get.call(null,map__20243__$1,new cljs.core.Keyword(null,"target","target",253001721));
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"target","target",1893533248,null)))))].join('')));
}

var roots_SINGLEQUOTE__20305 = cljs.core.deref.call(null,om.core.roots);
if(cljs.core.contains_QMARK_.call(null,roots_SINGLEQUOTE__20305,target)){
cljs.core.get.call(null,roots_SINGLEQUOTE__20305,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.call(null);
var state = (((function (){var G__20244 = value;
if(G__20244){
var bit__4453__auto__ = (G__20244.cljs$lang$protocol_mask$partition1$ & (16384));
if((bit__4453__auto__) || (G__20244.cljs$core$IAtom$)){
return true;
} else {
if((!G__20244.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__20244);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,G__20244);
}
})())?value:cljs.core.atom.call(null,value));
var state__$1 = om.core.setup.call(null,state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__3772__auto__ = adapt;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.call(null,options,new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"tx-listen","tx-listen",119130367),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"adapt","adapt",-1817022327),new cljs.core.Keyword(null,"raf","raf",-1295410152));
var ret = cljs.core.atom.call(null,null);
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__20243,map__20243__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function rootf(){
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

var value__$1 = cljs.core.deref.call(null,state__$1);
var cursor = adapt__$1.call(null,om.core.tag_root_key.call(null,(((path == null))?om.core.to_cursor.call(null,value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.call(null,cljs.core.get_in.call(null,value__$1,path),state__$1,path)),watch_key));
if(cljs.core.truth_(om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643)))){
} else {
var c_20306 = om.dom.render.call(null,(function (){var _STAR_descriptor_STAR_20275 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_20276 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_20277 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_20278 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.call(null,f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_20278;

om.core._STAR_state_STAR_ = _STAR_state_STAR_20277;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_20276;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_20275;
}})(),target);
if((cljs.core.deref.call(null,ret) == null)){
cljs.core.reset_BANG_.call(null,ret,c_20306);
} else {
}
}

var queue_20307 = om.core._get_queue.call(null,state__$1);
om.core._empty_queue_BANG_.call(null,state__$1);

if(cljs.core.empty_QMARK_.call(null,queue_20307)){
} else {
var seq__20279_20308 = cljs.core.seq.call(null,queue_20307);
var chunk__20280_20309 = null;
var count__20281_20310 = (0);
var i__20282_20311 = (0);
while(true){
if((i__20282_20311 < count__20281_20310)){
var c_20312 = cljs.core._nth.call(null,chunk__20280_20309,i__20282_20311);
if(cljs.core.truth_(c_20312.isMounted())){
var temp__4126__auto___20313 = (c_20312.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___20313)){
var next_props_20314 = temp__4126__auto___20313;
(c_20312.props["__om_cursor"] = next_props_20314);

(c_20312.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3772__auto__ = !((function (){var G__20284 = om.core.children.call(null,c_20312);
if(G__20284){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20284.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__20284.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__20284);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__20284);
}
})());
if(or__3772__auto__){
return or__3772__auto__;
} else {
return c_20312.shouldComponentUpdate(c_20312.props,c_20312.state);
}
})())){
c_20312.forceUpdate();
} else {
}
} else {
}

var G__20315 = seq__20279_20308;
var G__20316 = chunk__20280_20309;
var G__20317 = count__20281_20310;
var G__20318 = (i__20282_20311 + (1));
seq__20279_20308 = G__20315;
chunk__20280_20309 = G__20316;
count__20281_20310 = G__20317;
i__20282_20311 = G__20318;
continue;
} else {
var temp__4126__auto___20319 = cljs.core.seq.call(null,seq__20279_20308);
if(temp__4126__auto___20319){
var seq__20279_20320__$1 = temp__4126__auto___20319;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20279_20320__$1)){
var c__4559__auto___20321 = cljs.core.chunk_first.call(null,seq__20279_20320__$1);
var G__20322 = cljs.core.chunk_rest.call(null,seq__20279_20320__$1);
var G__20323 = c__4559__auto___20321;
var G__20324 = cljs.core.count.call(null,c__4559__auto___20321);
var G__20325 = (0);
seq__20279_20308 = G__20322;
chunk__20280_20309 = G__20323;
count__20281_20310 = G__20324;
i__20282_20311 = G__20325;
continue;
} else {
var c_20326 = cljs.core.first.call(null,seq__20279_20320__$1);
if(cljs.core.truth_(c_20326.isMounted())){
var temp__4126__auto___20327__$1 = (c_20326.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4126__auto___20327__$1)){
var next_props_20328 = temp__4126__auto___20327__$1;
(c_20326.props["__om_cursor"] = next_props_20328);

(c_20326.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__3772__auto__ = !((function (){var G__20286 = om.core.children.call(null,c_20326);
if(G__20286){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20286.om$core$ICheckState$;
}
})())){
return true;
} else {
if((!G__20286.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__20286);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ICheckState,G__20286);
}
})());
if(or__3772__auto__){
return or__3772__auto__;
} else {
return c_20326.shouldComponentUpdate(c_20326.props,c_20326.state);
}
})())){
c_20326.forceUpdate();
} else {
}
} else {
}

var G__20329 = cljs.core.next.call(null,seq__20279_20320__$1);
var G__20330 = null;
var G__20331 = (0);
var G__20332 = (0);
seq__20279_20308 = G__20329;
chunk__20280_20309 = G__20330;
count__20281_20310 = G__20331;
i__20282_20311 = G__20332;
continue;
}
} else {
}
}
break;
}
}

var _refs_20333 = cljs.core.deref.call(null,om.core._refs);
if(cljs.core.empty_QMARK_.call(null,_refs_20333)){
} else {
var seq__20287_20334 = cljs.core.seq.call(null,_refs_20333);
var chunk__20288_20335 = null;
var count__20289_20336 = (0);
var i__20290_20337 = (0);
while(true){
if((i__20290_20337 < count__20289_20336)){
var vec__20291_20338 = cljs.core._nth.call(null,chunk__20288_20335,i__20290_20337);
var path_20339__$1 = cljs.core.nth.call(null,vec__20291_20338,(0),null);
var cs_20340 = cljs.core.nth.call(null,vec__20291_20338,(1),null);
var cs_20341__$1 = cljs.core.deref.call(null,cs_20340);
var seq__20292_20342 = cljs.core.seq.call(null,cs_20341__$1);
var chunk__20293_20343 = null;
var count__20294_20344 = (0);
var i__20295_20345 = (0);
while(true){
if((i__20295_20345 < count__20294_20344)){
var vec__20296_20346 = cljs.core._nth.call(null,chunk__20293_20343,i__20295_20345);
var id_20347 = cljs.core.nth.call(null,vec__20296_20346,(0),null);
var c_20348 = cljs.core.nth.call(null,vec__20296_20346,(1),null);
if(cljs.core.truth_(c_20348.shouldComponentUpdate(c_20348.props,c_20348.state))){
c_20348.forceUpdate();
} else {
}

var G__20349 = seq__20292_20342;
var G__20350 = chunk__20293_20343;
var G__20351 = count__20294_20344;
var G__20352 = (i__20295_20345 + (1));
seq__20292_20342 = G__20349;
chunk__20293_20343 = G__20350;
count__20294_20344 = G__20351;
i__20295_20345 = G__20352;
continue;
} else {
var temp__4126__auto___20353 = cljs.core.seq.call(null,seq__20292_20342);
if(temp__4126__auto___20353){
var seq__20292_20354__$1 = temp__4126__auto___20353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20292_20354__$1)){
var c__4559__auto___20355 = cljs.core.chunk_first.call(null,seq__20292_20354__$1);
var G__20356 = cljs.core.chunk_rest.call(null,seq__20292_20354__$1);
var G__20357 = c__4559__auto___20355;
var G__20358 = cljs.core.count.call(null,c__4559__auto___20355);
var G__20359 = (0);
seq__20292_20342 = G__20356;
chunk__20293_20343 = G__20357;
count__20294_20344 = G__20358;
i__20295_20345 = G__20359;
continue;
} else {
var vec__20297_20360 = cljs.core.first.call(null,seq__20292_20354__$1);
var id_20361 = cljs.core.nth.call(null,vec__20297_20360,(0),null);
var c_20362 = cljs.core.nth.call(null,vec__20297_20360,(1),null);
if(cljs.core.truth_(c_20362.shouldComponentUpdate(c_20362.props,c_20362.state))){
c_20362.forceUpdate();
} else {
}

var G__20363 = cljs.core.next.call(null,seq__20292_20354__$1);
var G__20364 = null;
var G__20365 = (0);
var G__20366 = (0);
seq__20292_20342 = G__20363;
chunk__20293_20343 = G__20364;
count__20294_20344 = G__20365;
i__20295_20345 = G__20366;
continue;
}
} else {
}
}
break;
}

var G__20367 = seq__20287_20334;
var G__20368 = chunk__20288_20335;
var G__20369 = count__20289_20336;
var G__20370 = (i__20290_20337 + (1));
seq__20287_20334 = G__20367;
chunk__20288_20335 = G__20368;
count__20289_20336 = G__20369;
i__20290_20337 = G__20370;
continue;
} else {
var temp__4126__auto___20371 = cljs.core.seq.call(null,seq__20287_20334);
if(temp__4126__auto___20371){
var seq__20287_20372__$1 = temp__4126__auto___20371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20287_20372__$1)){
var c__4559__auto___20373 = cljs.core.chunk_first.call(null,seq__20287_20372__$1);
var G__20374 = cljs.core.chunk_rest.call(null,seq__20287_20372__$1);
var G__20375 = c__4559__auto___20373;
var G__20376 = cljs.core.count.call(null,c__4559__auto___20373);
var G__20377 = (0);
seq__20287_20334 = G__20374;
chunk__20288_20335 = G__20375;
count__20289_20336 = G__20376;
i__20290_20337 = G__20377;
continue;
} else {
var vec__20298_20378 = cljs.core.first.call(null,seq__20287_20372__$1);
var path_20379__$1 = cljs.core.nth.call(null,vec__20298_20378,(0),null);
var cs_20380 = cljs.core.nth.call(null,vec__20298_20378,(1),null);
var cs_20381__$1 = cljs.core.deref.call(null,cs_20380);
var seq__20299_20382 = cljs.core.seq.call(null,cs_20381__$1);
var chunk__20300_20383 = null;
var count__20301_20384 = (0);
var i__20302_20385 = (0);
while(true){
if((i__20302_20385 < count__20301_20384)){
var vec__20303_20386 = cljs.core._nth.call(null,chunk__20300_20383,i__20302_20385);
var id_20387 = cljs.core.nth.call(null,vec__20303_20386,(0),null);
var c_20388 = cljs.core.nth.call(null,vec__20303_20386,(1),null);
if(cljs.core.truth_(c_20388.shouldComponentUpdate(c_20388.props,c_20388.state))){
c_20388.forceUpdate();
} else {
}

var G__20389 = seq__20299_20382;
var G__20390 = chunk__20300_20383;
var G__20391 = count__20301_20384;
var G__20392 = (i__20302_20385 + (1));
seq__20299_20382 = G__20389;
chunk__20300_20383 = G__20390;
count__20301_20384 = G__20391;
i__20302_20385 = G__20392;
continue;
} else {
var temp__4126__auto___20393__$1 = cljs.core.seq.call(null,seq__20299_20382);
if(temp__4126__auto___20393__$1){
var seq__20299_20394__$1 = temp__4126__auto___20393__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20299_20394__$1)){
var c__4559__auto___20395 = cljs.core.chunk_first.call(null,seq__20299_20394__$1);
var G__20396 = cljs.core.chunk_rest.call(null,seq__20299_20394__$1);
var G__20397 = c__4559__auto___20395;
var G__20398 = cljs.core.count.call(null,c__4559__auto___20395);
var G__20399 = (0);
seq__20299_20382 = G__20396;
chunk__20300_20383 = G__20397;
count__20301_20384 = G__20398;
i__20302_20385 = G__20399;
continue;
} else {
var vec__20304_20400 = cljs.core.first.call(null,seq__20299_20394__$1);
var id_20401 = cljs.core.nth.call(null,vec__20304_20400,(0),null);
var c_20402 = cljs.core.nth.call(null,vec__20304_20400,(1),null);
if(cljs.core.truth_(c_20402.shouldComponentUpdate(c_20402.props,c_20402.state))){
c_20402.forceUpdate();
} else {
}

var G__20403 = cljs.core.next.call(null,seq__20299_20394__$1);
var G__20404 = null;
var G__20405 = (0);
var G__20406 = (0);
seq__20299_20382 = G__20403;
chunk__20300_20383 = G__20404;
count__20301_20384 = G__20405;
i__20302_20385 = G__20406;
continue;
}
} else {
}
}
break;
}

var G__20407 = cljs.core.next.call(null,seq__20287_20372__$1);
var G__20408 = null;
var G__20409 = (0);
var G__20410 = (0);
seq__20287_20334 = G__20407;
chunk__20288_20335 = G__20408;
count__20289_20336 = G__20409;
i__20290_20337 = G__20410;
continue;
}
} else {
}
}
break;
}
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),true);

return cljs.core.deref.call(null,ret);
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__20243,map__20243__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
;
cljs.core.add_watch.call(null,state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20243,map__20243__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (_,___$1,o,n){
if((cljs.core.not.call(null,om.core._get_property.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033)))) && (!((o === n)))){
om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"skip-render-root","skip-render-root",-5219643),false);
} else {
}

om.core._set_property_BANG_.call(null,state__$1,watch_key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),false);

if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,om.core.refresh_set),rootf)){
} else {
cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
return setTimeout(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20243,map__20243__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20243,map__20243__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
,(16));
} else {
if(cljs.core.fn_QMARK_.call(null,raf)){
return raf.call(null);
} else {
return requestAnimationFrame(((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20243,map__20243__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
return om.core.render_all.call(null,state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20243,map__20243__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20243,map__20243__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20243,map__20243__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target){
return (function (){
om.core._remove_properties_BANG_.call(null,state__$1,watch_key);

cljs.core.remove_watch.call(null,state__$1,watch_key);

om.core.tear_down.call(null,state__$1,watch_key);

cljs.core.swap_BANG_.call(null,om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.call(null,om.core.roots,cljs.core.dissoc,target);

return React.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__20243,map__20243__$1,options,raf,adapt,descriptor,instrument,path,tx_listen,target))
);

return rootf.call(null);
});
/**
* Given a DOM target remove its render loop if one exists.
*/
om.core.detach_root = (function detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("gdom","isElement","gdom/isElement",465934354,null),new cljs.core.Symbol(null,"target","target",1893533248,null))))].join('')));
}

var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,om.core.roots),target);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null);
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function transactable_QMARK_(x){
var G__20412 = x;
if(G__20412){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20412.om$core$ITransact$;
}
})())){
return true;
} else {
if((!G__20412.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__20412);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.ITransact,G__20412);
}
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){
return transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){
return transact_BANG_.call(null,cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){
if(om.core.transactable_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"transactable?","transactable?",780536292,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_.call(null,cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

return om.core.transact_BANG_.call(null,cursor,korks,(function (_){
return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* EXPERIMENTAL: Like transact! but does not schedule a re-render or
* create a transact event.
*/
om.core.commit_BANG_ = (function commit_BANG_(cursor,korks,f){
if(om.core.cursor_QMARK_.call(null,cursor)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"cursor?","cursor?",-648342688,null),new cljs.core.Symbol(null,"cursor","cursor",-1642498285,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

var key = (((function (){var G__20414 = cursor;
if(G__20414){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__20414.om$core$IRootKey$;
}
})())){
return true;
} else {
if((!G__20414.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__20414);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,om.core.IRootKey,G__20414);
}
})())?om.core._root_key.call(null,cursor):null);
var app_state = om.core.state.call(null,cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path.call(null,cursor);
var rpath = cljs.core.into.call(null,cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_.call(null,app_state,key,new cljs.core.Keyword(null,"ignore","ignore",-1631542033),true);
} else {
}

if(cljs.core.empty_QMARK_.call(null,rpath)){
return cljs.core.swap_BANG_.call(null,app_state,f);
} else {
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,rpath,f);
}
});
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){
return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"name","name",-810760592,null))))].join('')));
}

var temp__4126__auto__ = owner.refs;
if(cljs.core.truth_(temp__4126__auto__)){
var refs = temp__4126__auto__;
return (refs[name]).getDOMNode();
} else {
return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Return true if the backing React component is mounted into the DOM.
*/
om.core.mounted_QMARK_ = (function mounted_QMARK_(owner){
return owner.isMounted();
});
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function() {
var set_state_BANG_ = null;
var set_state_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,true);
});
var set_state_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,true);
});
set_state_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_BANG___2.call(this,owner,korks);
case 3:
return set_state_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_BANG___2;
set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_BANG___3;
return set_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as set-state! but does not trigger re-render.
*/
om.core.set_state_nr_BANG_ = (function() {
var set_state_nr_BANG_ = null;
var set_state_nr_BANG___2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._set_state_BANG_.call(null,owner,v,false);
});
var set_state_nr_BANG___3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.call(null,owner,ks,v,false);
});
set_state_nr_BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_nr_BANG___2.call(this,owner,korks);
case 3:
return set_state_nr_BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_nr_BANG___2;
set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_nr_BANG___3;
return set_state_nr_BANG_;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and a
* function to transition the state of the component. Conceptually
* analagous to React setState. Will schedule an Om re-render.
*/
om.core.update_state_BANG_ = (function() {
var update_state_BANG_ = null;
var update_state_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_BANG___2.call(this,owner,korks);
case 3:
return update_state_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_BANG___2;
update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_BANG___3;
return update_state_BANG_;
})()
;
/**
* EXPERIMENTAL: Same as update-state! but does not trigger re-render.
*/
om.core.update_state_nr_BANG_ = (function() {
var update_state_nr_BANG_ = null;
var update_state_nr_BANG___2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,f.call(null,om.core.get_state.call(null,owner)));
});
var update_state_nr_BANG___3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))))].join('')));
}

return om.core.set_state_nr_BANG_.call(null,owner,korks,f.call(null,om.core.get_state.call(null,owner,korks)));
});
update_state_nr_BANG_ = function(owner,korks,f){
switch(arguments.length){
case 2:
return update_state_nr_BANG___2.call(this,owner,korks);
case 3:
return update_state_nr_BANG___3.call(this,owner,korks,f);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = update_state_nr_BANG___2;
update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = update_state_nr_BANG___3;
return update_state_nr_BANG_;
})()
;
/**
* Utility to re-render an owner.
*/
om.core.refresh_BANG_ = (function refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core.update_state_BANG_.call(null,owner,cljs.core.identity);
});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

return om.core._get_render_state.call(null,owner);
});
var get_render_state__2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_.call(null,owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"component?","component?",2048315517,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null))))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.call(null,owner,ks);
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;

//# sourceMappingURL=core.js.map