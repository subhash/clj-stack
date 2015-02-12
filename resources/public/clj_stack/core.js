// Compiled by ClojureScript 0.0-2755 {}
goog.provide('clj_stack.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
clj_stack.core.app_model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"videos","videos",254925290),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Intro to Datomic",new cljs.core.Keyword(null,"url","url",276297046),"http://www.youtube.com/embed/RKcqYZZ9RDY"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"title","title",636505583),"The Functional Final Frontier",new cljs.core.Keyword(null,"url","url",276297046),"http://www.youtube.com/embed/DMtwq3QtddY"], null)], null)], null));
clj_stack.core.add_video = (function add_video(videos,owner){
var title = om.core.get_node.call(null,owner,"new-video-title").value;
var url = om.core.get_node.call(null,owner,"new-video-url").value;
om.core.transact_BANG_.call(null,videos,((function (title,url){
return (function (p1__10252_SHARP_){
return cljs.core.conj.call(null,p1__10252_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.rand_int.call(null,(1000)),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"url","url",276297046),url], null));
});})(title,url))
);

cljs.core.println.call(null,"app-model: ",cljs.core.deref.call(null,clj_stack.core.app_model));

om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631),"");

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193),"");
});
clj_stack.core.new_video_view = (function new_video_view(videos,owner){
if(typeof clj_stack.core.t10258 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t10258 = (function (owner,videos,new_video_view,meta10259){
this.owner = owner;
this.videos = videos;
this.new_video_view = new_video_view;
this.meta10259 = meta10259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t10258.prototype.om$core$IRenderState$ = true;

clj_stack.core.t10258.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return om.dom.div.call(null,null,om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__10253_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631),p1__10253_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631).cljs$core$IFn$_invoke$arity$1(state), "placeholder": "Title", "type": "text", "ref": "new-video-title"}),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__10254_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193),p1__10254_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193).cljs$core$IFn$_invoke$arity$1(state), "placeholder": "URL", "type": "text", "ref": "new-video-url"}),om.dom.button.call(null,{"onClick": ((function (___$1){
return (function (){
return clj_stack.core.add_video.call(null,self__.videos,self__.owner);
});})(___$1))
},"Add"));
});

clj_stack.core.t10258.prototype.om$core$IInitState$ = true;

clj_stack.core.t10258.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631),"",new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193),""], null);
});

clj_stack.core.t10258.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10260){
var self__ = this;
var _10260__$1 = this;
return self__.meta10259;
});

clj_stack.core.t10258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10260,meta10259__$1){
var self__ = this;
var _10260__$1 = this;
return (new clj_stack.core.t10258(self__.owner,self__.videos,self__.new_video_view,meta10259__$1));
});

clj_stack.core.t10258.cljs$lang$type = true;

clj_stack.core.t10258.cljs$lang$ctorStr = "clj-stack.core/t10258";

clj_stack.core.t10258.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t10258");
});

clj_stack.core.__GT_t10258 = (function __GT_t10258(owner__$1,videos__$1,new_video_view__$1,meta10259){
return (new clj_stack.core.t10258(owner__$1,videos__$1,new_video_view__$1,meta10259));
});

}

return (new clj_stack.core.t10258(owner,videos,new_video_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),76,new cljs.core.Keyword(null,"end-line","end-line",1837326455),35,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/cljs/clj_stack/core.cljs"], null)));
});
clj_stack.core.video_view = (function video_view(video,owner){
if(typeof clj_stack.core.t10266 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t10266 = (function (owner,video,video_view,meta10267){
this.owner = owner;
this.video = video;
this.video_view = video_view;
this.meta10267 = meta10267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t10266.prototype.om$core$IRenderState$ = true;

clj_stack.core.t10266.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10269){
var self__ = this;
var map__10270 = p__10269;
var map__10270__$1 = ((cljs.core.seq_QMARK_.call(null,map__10270))?cljs.core.apply.call(null,cljs.core.hash_map,map__10270):map__10270);
var delete_channel = cljs.core.get.call(null,map__10270__$1,new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661));
var ___$1 = this;
return om.dom.li.call(null,{"className": "col-sm-4"},om.dom.div.call(null,{"className": "embed-responsive embed-responsive-4by3"},om.dom.iframe.call(null,{"src": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.video), "className": "embed-responsive-item"})),om.dom.button.call(null,{"onClick": ((function (___$1,map__10270,map__10270__$1,delete_channel){
return (function (){
return cljs.core.async.put_BANG_.call(null,delete_channel,cljs.core.deref.call(null,self__.video));
});})(___$1,map__10270,map__10270__$1,delete_channel))
, "className": "btn btn-danger btn-xs pull-right"},"Remove"));
});

clj_stack.core.t10266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10268){
var self__ = this;
var _10268__$1 = this;
return self__.meta10267;
});

clj_stack.core.t10266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10268,meta10267__$1){
var self__ = this;
var _10268__$1 = this;
return (new clj_stack.core.t10266(self__.owner,self__.video,self__.video_view,meta10267__$1));
});

clj_stack.core.t10266.cljs$lang$type = true;

clj_stack.core.t10266.cljs$lang$ctorStr = "clj-stack.core/t10266";

clj_stack.core.t10266.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t10266");
});

clj_stack.core.__GT_t10266 = (function __GT_t10266(owner__$1,video__$1,video_view__$1,meta10267){
return (new clj_stack.core.t10266(owner__$1,video__$1,video_view__$1,meta10267));
});

}

return (new clj_stack.core.t10266(owner,video,video_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),77,new cljs.core.Keyword(null,"end-line","end-line",1837326455),46,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),38,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/cljs/clj_stack/core.cljs"], null)));
});
clj_stack.core.videos_view = (function videos_view(videos,owner){
if(typeof clj_stack.core.t10298 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t10298 = (function (owner,videos,videos_view,meta10299){
this.owner = owner;
this.videos = videos;
this.videos_view = videos_view;
this.meta10299 = meta10299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t10298.prototype.om$core$IRenderState$ = true;

clj_stack.core.t10298.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__10301){
var self__ = this;
var map__10302 = p__10301;
var map__10302__$1 = ((cljs.core.seq_QMARK_.call(null,map__10302))?cljs.core.apply.call(null,cljs.core.hash_map,map__10302):map__10302);
var delete_channel = cljs.core.get.call(null,map__10302__$1,new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.ul,{"className": "row"},om.core.build_all.call(null,clj_stack.core.video_view,self__.videos,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661),delete_channel], null)], null)));
});

clj_stack.core.t10298.prototype.om$core$IWillMount$ = true;

clj_stack.core.t10298.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661));
var c__7186__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7186__auto__,delete_channel,___$1){
return (function (){
var f__7187__auto__ = (function (){var switch__7130__auto__ = ((function (c__7186__auto__,delete_channel,___$1){
return (function (state_10312){
var state_val_10313 = (state_10312[(1)]);
if((state_val_10313 === (4))){
var inst_10305 = (state_10312[(2)]);
var inst_10306 = (function (){var del_video = inst_10305;
return ((function (del_video,inst_10305,state_val_10313,c__7186__auto__,delete_channel,___$1){
return (function (vs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (del_video,inst_10305,state_val_10313,c__7186__auto__,delete_channel,___$1){
return (function (p1__10271_SHARP_){
return cljs.core._EQ_.call(null,p1__10271_SHARP_,del_video);
});})(del_video,inst_10305,state_val_10313,c__7186__auto__,delete_channel,___$1))
,vs));
});
;})(del_video,inst_10305,state_val_10313,c__7186__auto__,delete_channel,___$1))
})();
var inst_10307 = om.core.transact_BANG_.call(null,self__.videos,inst_10306);
var state_10312__$1 = (function (){var statearr_10314 = state_10312;
(statearr_10314[(7)] = inst_10307);

return statearr_10314;
})();
var statearr_10315_10324 = state_10312__$1;
(statearr_10315_10324[(2)] = null);

(statearr_10315_10324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10313 === (3))){
var inst_10310 = (state_10312[(2)]);
var state_10312__$1 = state_10312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10312__$1,inst_10310);
} else {
if((state_val_10313 === (2))){
var state_10312__$1 = state_10312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10312__$1,(4),delete_channel);
} else {
if((state_val_10313 === (1))){
var state_10312__$1 = state_10312;
var statearr_10316_10325 = state_10312__$1;
(statearr_10316_10325[(2)] = null);

(statearr_10316_10325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__7186__auto__,delete_channel,___$1))
;
return ((function (switch__7130__auto__,c__7186__auto__,delete_channel,___$1){
return (function() {
var state_machine__7131__auto__ = null;
var state_machine__7131__auto____0 = (function (){
var statearr_10320 = [null,null,null,null,null,null,null,null];
(statearr_10320[(0)] = state_machine__7131__auto__);

(statearr_10320[(1)] = (1));

return statearr_10320;
});
var state_machine__7131__auto____1 = (function (state_10312){
while(true){
var ret_value__7132__auto__ = (function (){try{while(true){
var result__7133__auto__ = switch__7130__auto__.call(null,state_10312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7133__auto__;
}
break;
}
}catch (e10321){if((e10321 instanceof Object)){
var ex__7134__auto__ = e10321;
var statearr_10322_10326 = state_10312;
(statearr_10322_10326[(5)] = ex__7134__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10327 = state_10312;
state_10312 = G__10327;
continue;
} else {
return ret_value__7132__auto__;
}
break;
}
});
state_machine__7131__auto__ = function(state_10312){
switch(arguments.length){
case 0:
return state_machine__7131__auto____0.call(this);
case 1:
return state_machine__7131__auto____1.call(this,state_10312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7131__auto____0;
state_machine__7131__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7131__auto____1;
return state_machine__7131__auto__;
})()
;})(switch__7130__auto__,c__7186__auto__,delete_channel,___$1))
})();
var state__7188__auto__ = (function (){var statearr_10323 = f__7187__auto__.call(null);
(statearr_10323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7186__auto__);

return statearr_10323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7188__auto__);
});})(c__7186__auto__,delete_channel,___$1))
);

return c__7186__auto__;
});

clj_stack.core.t10298.prototype.om$core$IInitState$ = true;

clj_stack.core.t10298.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661),cljs.core.async.chan.call(null)], null);
});

clj_stack.core.t10298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10300){
var self__ = this;
var _10300__$1 = this;
return self__.meta10299;
});

clj_stack.core.t10298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10300,meta10299__$1){
var self__ = this;
var _10300__$1 = this;
return (new clj_stack.core.t10298(self__.owner,self__.videos,self__.videos_view,meta10299__$1));
});

clj_stack.core.t10298.cljs$lang$type = true;

clj_stack.core.t10298.cljs$lang$ctorStr = "clj-stack.core/t10298";

clj_stack.core.t10298.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t10298");
});

clj_stack.core.__GT_t10298 = (function __GT_t10298(owner__$1,videos__$1,videos_view__$1,meta10299){
return (new clj_stack.core.t10298(owner__$1,videos__$1,videos_view__$1,meta10299));
});

}

return (new clj_stack.core.t10298(owner,videos,videos_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),73,new cljs.core.Keyword(null,"end-line","end-line",1837326455),65,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),50,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/cljs/clj_stack/core.cljs"], null)));
});
clj_stack.core.app_view = (function app_view(model,owner){
if(typeof clj_stack.core.t10331 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t10331 = (function (owner,model,app_view,meta10332){
this.owner = owner;
this.model = model;
this.app_view = app_view;
this.meta10332 = meta10332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t10331.prototype.om$core$IRender$ = true;

clj_stack.core.t10331.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.dom.div.call(null,null,om.dom.div.call(null,{"className": "page-header"},om.dom.h2.call(null,null,"Poor man's YouTube")),om.core.build.call(null,clj_stack.core.videos_view,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(self__.model)),om.dom.hr.call(null,null),om.core.build.call(null,clj_stack.core.new_video_view,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(self__.model)));
});

clj_stack.core.t10331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10333){
var self__ = this;
var _10333__$1 = this;
return self__.meta10332;
});

clj_stack.core.t10331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10333,meta10332__$1){
var self__ = this;
var _10333__$1 = this;
return (new clj_stack.core.t10331(self__.owner,self__.model,self__.app_view,meta10332__$1));
});

clj_stack.core.t10331.cljs$lang$type = true;

clj_stack.core.t10331.cljs$lang$ctorStr = "clj-stack.core/t10331";

clj_stack.core.t10331.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t10331");
});

clj_stack.core.__GT_t10331 = (function __GT_t10331(owner__$1,model__$1,app_view__$1,meta10332){
return (new clj_stack.core.t10331(owner__$1,model__$1,app_view__$1,meta10332));
});

}

return (new clj_stack.core.t10331(owner,model,app_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),55,new cljs.core.Keyword(null,"end-line","end-line",1837326455),76,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),69,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/cljs/clj_stack/core.cljs"], null)));
});
om.core.root.call(null,clj_stack.core.app_view,clj_stack.core.app_model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map