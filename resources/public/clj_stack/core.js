// Compiled by ClojureScript 0.0-2755 {}
goog.provide('clj_stack.core');
goog.require('cljs.core');
goog.require('om_sync.util');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
clj_stack.core.app_model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"videos","videos",254925290),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Intro to Datomic",new cljs.core.Keyword(null,"url","url",276297046),"http://www.youtube.com/embed/RKcqYZZ9RDY"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"title","title",636505583),"The Functional Final Frontier",new cljs.core.Keyword(null,"url","url",276297046),"http://www.youtube.com/embed/DMtwq3QtddY"], null)], null)], null));
clj_stack.core.add_video = (function add_video(videos,owner){
var title = om.core.get_node.call(null,owner,"new-video-title").value;
var url = om.core.get_node.call(null,owner,"new-video-url").value;
om.core.transact_BANG_.call(null,videos,((function (title,url){
return (function (p1__10350_SHARP_){
return cljs.core.conj.call(null,p1__10350_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.rand_int.call(null,(1000)),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"url","url",276297046),url], null));
});})(title,url))
);

cljs.core.println.call(null,"app-model: ",cljs.core.deref.call(null,clj_stack.core.app_model));

om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631),"");

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193),"");
});
clj_stack.core.new_video_view = (function new_video_view(videos,owner){
if(typeof clj_stack.core.t10356 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t10356 = (function (owner,videos,new_video_view,meta10357){
this.owner = owner;
this.videos = videos;
this.new_video_view = new_video_view;
this.meta10357 = meta10357;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t10356.prototype.om$core$IRenderState$ = true;

clj_stack.core.t10356.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__10351_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631),p1__10351_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631).cljs$core$IFn$_invoke$arity$1(state), "placeholder": "Title", "type": "text", "ref": "new-video-title"}),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__10352_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193),p1__10352_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193).cljs$core$IFn$_invoke$arity$1(state), "placeholder": "URL", "type": "text", "ref": "new-video-url"}),React.DOM.button({"onClick": ((function (___$1){
return (function (){
return clj_stack.core.add_video.call(null,self__.videos,self__.owner);
});})(___$1))
},"Add"));
});

clj_stack.core.t10356.prototype.om$core$IInitState$ = true;

clj_stack.core.t10356.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631),"",new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193),""], null);
});

clj_stack.core.t10356.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10358){
var self__ = this;
var _10358__$1 = this;
return self__.meta10357;
});

clj_stack.core.t10356.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10358,meta10357__$1){
var self__ = this;
var _10358__$1 = this;
return (new clj_stack.core.t10356(self__.owner,self__.videos,self__.new_video_view,meta10357__$1));
});

clj_stack.core.t10356.cljs$lang$type = true;

clj_stack.core.t10356.cljs$lang$ctorStr = "clj-stack.core/t10356";

clj_stack.core.t10356.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t10356");
});

clj_stack.core.__GT_t10356 = (function __GT_t10356(owner__$1,videos__$1,new_video_view__$1,meta10357){
return (new clj_stack.core.t10356(owner__$1,videos__$1,new_video_view__$1,meta10357));
});

}

return (new clj_stack.core.t10356(owner,videos,new_video_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),76,new cljs.core.Keyword(null,"end-line","end-line",1837326455),36,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),24,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/cljs/clj_stack/core.cljs"], null)));
});
clj_stack.core.video_view = (function video_view(video,owner){
if(typeof clj_stack.core.t10364 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t10364 = (function (owner,video,video_view,meta10365){
this.owner = owner;
this.video = video;
this.video_view = video_view;
this.meta10365 = meta10365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t10364.prototype.om$core$IRenderState$ = true;

clj_stack.core.t10364.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10367){
var self__ = this;
var map__10368 = p__10367;
var map__10368__$1 = ((cljs.core.seq_QMARK_.call(null,map__10368))?cljs.core.apply.call(null,cljs.core.hash_map,map__10368):map__10368);
var delete_channel = cljs.core.get.call(null,map__10368__$1,new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661));
var ___$1 = this;
return React.DOM.li({"className": "col-sm-4"},React.DOM.div({"className": "embed-responsive embed-responsive-4by3"},React.DOM.iframe({"src": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.video), "className": "embed-responsive-item"})),React.DOM.button({"onClick": ((function (___$1,map__10368,map__10368__$1,delete_channel){
return (function (){
return cljs.core.async.put_BANG_.call(null,delete_channel,cljs.core.deref.call(null,self__.video));
});})(___$1,map__10368,map__10368__$1,delete_channel))
, "className": "btn btn-danger btn-xs pull-right"},"Remove"));
});

clj_stack.core.t10364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10366){
var self__ = this;
var _10366__$1 = this;
return self__.meta10365;
});

clj_stack.core.t10364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10366,meta10365__$1){
var self__ = this;
var _10366__$1 = this;
return (new clj_stack.core.t10364(self__.owner,self__.video,self__.video_view,meta10365__$1));
});

clj_stack.core.t10364.cljs$lang$type = true;

clj_stack.core.t10364.cljs$lang$ctorStr = "clj-stack.core/t10364";

clj_stack.core.t10364.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t10364");
});

clj_stack.core.__GT_t10364 = (function __GT_t10364(owner__$1,video__$1,video_view__$1,meta10365){
return (new clj_stack.core.t10364(owner__$1,video__$1,video_view__$1,meta10365));
});

}

return (new clj_stack.core.t10364(owner,video,video_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),77,new cljs.core.Keyword(null,"end-line","end-line",1837326455),46,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),39,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/cljs/clj_stack/core.cljs"], null)));
});
clj_stack.core.videos_view = (function videos_view(videos,owner){
if(typeof clj_stack.core.t10396 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t10396 = (function (owner,videos,videos_view,meta10397){
this.owner = owner;
this.videos = videos;
this.videos_view = videos_view;
this.meta10397 = meta10397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t10396.prototype.om$core$IRenderState$ = true;

clj_stack.core.t10396.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10399){
var self__ = this;
var map__10400 = p__10399;
var map__10400__$1 = ((cljs.core.seq_QMARK_.call(null,map__10400))?cljs.core.apply.call(null,cljs.core.hash_map,map__10400):map__10400);
var delete_channel = cljs.core.get.call(null,map__10400__$1,new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.ul,{"className": "row"},om.core.build_all.call(null,clj_stack.core.video_view,self__.videos,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661),delete_channel], null)], null)));
});

clj_stack.core.t10396.prototype.om$core$IWillMount$ = true;

clj_stack.core.t10396.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661));
var c__6699__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6699__auto__,delete_channel,___$1){
return (function (){
var f__6700__auto__ = (function (){var switch__6643__auto__ = ((function (c__6699__auto__,delete_channel,___$1){
return (function (state_10410){
var state_val_10411 = (state_10410[(1)]);
if((state_val_10411 === (4))){
var inst_10403 = (state_10410[(2)]);
var inst_10404 = (function (){var del_video = inst_10403;
return ((function (del_video,inst_10403,state_val_10411,c__6699__auto__,delete_channel,___$1){
return (function (vs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (del_video,inst_10403,state_val_10411,c__6699__auto__,delete_channel,___$1){
return (function (p1__10369_SHARP_){
return cljs.core._EQ_.call(null,p1__10369_SHARP_,del_video);
});})(del_video,inst_10403,state_val_10411,c__6699__auto__,delete_channel,___$1))
,vs));
});
;})(del_video,inst_10403,state_val_10411,c__6699__auto__,delete_channel,___$1))
})();
var inst_10405 = om.core.transact_BANG_.call(null,self__.videos,inst_10404);
var state_10410__$1 = (function (){var statearr_10412 = state_10410;
(statearr_10412[(7)] = inst_10405);

return statearr_10412;
})();
var statearr_10413_10422 = state_10410__$1;
(statearr_10413_10422[(2)] = null);

(statearr_10413_10422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10411 === (3))){
var inst_10408 = (state_10410[(2)]);
var state_10410__$1 = state_10410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10410__$1,inst_10408);
} else {
if((state_val_10411 === (2))){
var state_10410__$1 = state_10410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10410__$1,(4),delete_channel);
} else {
if((state_val_10411 === (1))){
var state_10410__$1 = state_10410;
var statearr_10414_10423 = state_10410__$1;
(statearr_10414_10423[(2)] = null);

(statearr_10414_10423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6699__auto__,delete_channel,___$1))
;
return ((function (switch__6643__auto__,c__6699__auto__,delete_channel,___$1){
return (function() {
var state_machine__6644__auto__ = null;
var state_machine__6644__auto____0 = (function (){
var statearr_10418 = [null,null,null,null,null,null,null,null];
(statearr_10418[(0)] = state_machine__6644__auto__);

(statearr_10418[(1)] = (1));

return statearr_10418;
});
var state_machine__6644__auto____1 = (function (state_10410){
while(true){
var ret_value__6645__auto__ = (function (){try{while(true){
var result__6646__auto__ = switch__6643__auto__.call(null,state_10410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6646__auto__;
}
break;
}
}catch (e10419){if((e10419 instanceof Object)){
var ex__6647__auto__ = e10419;
var statearr_10420_10424 = state_10410;
(statearr_10420_10424[(5)] = ex__6647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10425 = state_10410;
state_10410 = G__10425;
continue;
} else {
return ret_value__6645__auto__;
}
break;
}
});
state_machine__6644__auto__ = function(state_10410){
switch(arguments.length){
case 0:
return state_machine__6644__auto____0.call(this);
case 1:
return state_machine__6644__auto____1.call(this,state_10410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6644__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6644__auto____0;
state_machine__6644__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6644__auto____1;
return state_machine__6644__auto__;
})()
;})(switch__6643__auto__,c__6699__auto__,delete_channel,___$1))
})();
var state__6701__auto__ = (function (){var statearr_10421 = f__6700__auto__.call(null);
(statearr_10421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6699__auto__);

return statearr_10421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6701__auto__);
});})(c__6699__auto__,delete_channel,___$1))
);

return c__6699__auto__;
});

clj_stack.core.t10396.prototype.om$core$IInitState$ = true;

clj_stack.core.t10396.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661),cljs.core.async.chan.call(null)], null);
});

clj_stack.core.t10396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10398){
var self__ = this;
var _10398__$1 = this;
return self__.meta10397;
});

clj_stack.core.t10396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10398,meta10397__$1){
var self__ = this;
var _10398__$1 = this;
return (new clj_stack.core.t10396(self__.owner,self__.videos,self__.videos_view,meta10397__$1));
});

clj_stack.core.t10396.cljs$lang$type = true;

clj_stack.core.t10396.cljs$lang$ctorStr = "clj-stack.core/t10396";

clj_stack.core.t10396.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t10396");
});

clj_stack.core.__GT_t10396 = (function __GT_t10396(owner__$1,videos__$1,videos_view__$1,meta10397){
return (new clj_stack.core.t10396(owner__$1,videos__$1,videos_view__$1,meta10397));
});

}

return (new clj_stack.core.t10396(owner,videos,videos_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),73,new cljs.core.Keyword(null,"end-line","end-line",1837326455),65,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),50,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/cljs/clj_stack/core.cljs"], null)));
});
clj_stack.core.app_view = (function app_view(model,owner){
if(typeof clj_stack.core.t10429 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t10429 = (function (owner,model,app_view,meta10430){
this.owner = owner;
this.model = model;
this.app_view = app_view;
this.meta10430 = meta10430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t10429.prototype.om$core$IRender$ = true;

clj_stack.core.t10429.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "page-header"},React.DOM.h2(null,"Poor man's YouTube")),om.core.build.call(null,clj_stack.core.videos_view,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(self__.model)),React.DOM.hr(null),om.core.build.call(null,clj_stack.core.new_video_view,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(self__.model)));
});

clj_stack.core.t10429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10431){
var self__ = this;
var _10431__$1 = this;
return self__.meta10430;
});

clj_stack.core.t10429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10431,meta10430__$1){
var self__ = this;
var _10431__$1 = this;
return (new clj_stack.core.t10429(self__.owner,self__.model,self__.app_view,meta10430__$1));
});

clj_stack.core.t10429.cljs$lang$type = true;

clj_stack.core.t10429.cljs$lang$ctorStr = "clj-stack.core/t10429";

clj_stack.core.t10429.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t10429");
});

clj_stack.core.__GT_t10429 = (function __GT_t10429(owner__$1,model__$1,app_view__$1,meta10430){
return (new clj_stack.core.t10429(owner__$1,model__$1,app_view__$1,meta10430));
});

}

return (new clj_stack.core.t10429(owner,model,app_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),55,new cljs.core.Keyword(null,"end-line","end-line",1837326455),76,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),69,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/cljs/clj_stack/core.cljs"], null)));
});
om_sync.util.edn_xhr.call(null,(function (){var target = document.getElementById("app");
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/videos",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (target){
return (function (p1__10432_SHARP_){
return om.core.root.call(null,clj_stack.core.app_view,p1__10432_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});})(target))
], null);
})());

//# sourceMappingURL=core.js.map