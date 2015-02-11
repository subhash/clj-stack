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
return (function (p1__14893_SHARP_){
return cljs.core.conj.call(null,p1__14893_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.rand_int.call(null,(1000)),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"url","url",276297046),url], null));
});})(title,url))
);

cljs.core.println.call(null,"app-model: ",cljs.core.deref.call(null,clj_stack.core.app_model));

om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631),"");

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193),"");
});
clj_stack.core.new_video_view = (function new_video_view(videos,owner){
if(typeof clj_stack.core.t14899 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t14899 = (function (owner,videos,new_video_view,meta14900){
this.owner = owner;
this.videos = videos;
this.new_video_view = new_video_view;
this.meta14900 = meta14900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t14899.prototype.om$core$IRenderState$ = true;

clj_stack.core.t14899.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__14894_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631),p1__14894_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631).cljs$core$IFn$_invoke$arity$1(state), "placeholder": "Title", "type": "text", "ref": "new-video-title"}),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__14895_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193),p1__14895_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193).cljs$core$IFn$_invoke$arity$1(state), "placeholder": "URL", "type": "text", "ref": "new-video-url"}),React.DOM.button({"onClick": ((function (___$1){
return (function (){
return clj_stack.core.add_video.call(null,self__.videos,self__.owner);
});})(___$1))
},"Add"));
});

clj_stack.core.t14899.prototype.om$core$IInitState$ = true;

clj_stack.core.t14899.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631),"",new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193),""], null);
});

clj_stack.core.t14899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14901){
var self__ = this;
var _14901__$1 = this;
return self__.meta14900;
});

clj_stack.core.t14899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14901,meta14900__$1){
var self__ = this;
var _14901__$1 = this;
return (new clj_stack.core.t14899(self__.owner,self__.videos,self__.new_video_view,meta14900__$1));
});

clj_stack.core.t14899.cljs$lang$type = true;

clj_stack.core.t14899.cljs$lang$ctorStr = "clj-stack.core/t14899";

clj_stack.core.t14899.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t14899");
});

clj_stack.core.__GT_t14899 = (function __GT_t14899(owner__$1,videos__$1,new_video_view__$1,meta14900){
return (new clj_stack.core.t14899(owner__$1,videos__$1,new_video_view__$1,meta14900));
});

}

return (new clj_stack.core.t14899(owner,videos,new_video_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),76,new cljs.core.Keyword(null,"end-line","end-line",1837326455),35,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),23,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/clj_stack/core.cljs"], null)));
});
clj_stack.core.video_view = (function video_view(video,owner){
if(typeof clj_stack.core.t14907 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t14907 = (function (owner,video,video_view,meta14908){
this.owner = owner;
this.video = video;
this.video_view = video_view;
this.meta14908 = meta14908;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t14907.prototype.om$core$IRenderState$ = true;

clj_stack.core.t14907.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14910){
var self__ = this;
var map__14911 = p__14910;
var map__14911__$1 = ((cljs.core.seq_QMARK_.call(null,map__14911))?cljs.core.apply.call(null,cljs.core.hash_map,map__14911):map__14911);
var delete_channel = cljs.core.get.call(null,map__14911__$1,new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661));
var ___$1 = this;
return React.DOM.li({"className": "col-sm-4"},React.DOM.div({"className": "embed-responsive embed-responsive-4by3"},React.DOM.iframe({"src": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.video), "className": "embed-responsive-item"})),React.DOM.button({"onClick": ((function (___$1,map__14911,map__14911__$1,delete_channel){
return (function (){
return cljs.core.async.put_BANG_.call(null,delete_channel,cljs.core.deref.call(null,self__.video));
});})(___$1,map__14911,map__14911__$1,delete_channel))
, "className": "btn btn-danger btn-xs pull-right"},"Remove"));
});

clj_stack.core.t14907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14909){
var self__ = this;
var _14909__$1 = this;
return self__.meta14908;
});

clj_stack.core.t14907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14909,meta14908__$1){
var self__ = this;
var _14909__$1 = this;
return (new clj_stack.core.t14907(self__.owner,self__.video,self__.video_view,meta14908__$1));
});

clj_stack.core.t14907.cljs$lang$type = true;

clj_stack.core.t14907.cljs$lang$ctorStr = "clj-stack.core/t14907";

clj_stack.core.t14907.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t14907");
});

clj_stack.core.__GT_t14907 = (function __GT_t14907(owner__$1,video__$1,video_view__$1,meta14908){
return (new clj_stack.core.t14907(owner__$1,video__$1,video_view__$1,meta14908));
});

}

return (new clj_stack.core.t14907(owner,video,video_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),77,new cljs.core.Keyword(null,"end-line","end-line",1837326455),46,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),38,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/clj_stack/core.cljs"], null)));
});
clj_stack.core.videos_view = (function videos_view(videos,owner){
if(typeof clj_stack.core.t14939 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t14939 = (function (owner,videos,videos_view,meta14940){
this.owner = owner;
this.videos = videos;
this.videos_view = videos_view;
this.meta14940 = meta14940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t14939.prototype.om$core$IRenderState$ = true;

clj_stack.core.t14939.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__14942){
var self__ = this;
var map__14943 = p__14942;
var map__14943__$1 = ((cljs.core.seq_QMARK_.call(null,map__14943))?cljs.core.apply.call(null,cljs.core.hash_map,map__14943):map__14943);
var delete_channel = cljs.core.get.call(null,map__14943__$1,new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.ul,{"className": "row"},om.core.build_all.call(null,clj_stack.core.video_view,self__.videos,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661),delete_channel], null)], null)));
});

clj_stack.core.t14939.prototype.om$core$IWillMount$ = true;

clj_stack.core.t14939.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661));
var c__6876__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6876__auto__,delete_channel,___$1){
return (function (){
var f__6877__auto__ = (function (){var switch__6820__auto__ = ((function (c__6876__auto__,delete_channel,___$1){
return (function (state_14953){
var state_val_14954 = (state_14953[(1)]);
if((state_val_14954 === (4))){
var inst_14946 = (state_14953[(2)]);
var inst_14947 = (function (){var del_video = inst_14946;
return ((function (del_video,inst_14946,state_val_14954,c__6876__auto__,delete_channel,___$1){
return (function (vs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (del_video,inst_14946,state_val_14954,c__6876__auto__,delete_channel,___$1){
return (function (p1__14912_SHARP_){
return cljs.core._EQ_.call(null,p1__14912_SHARP_,del_video);
});})(del_video,inst_14946,state_val_14954,c__6876__auto__,delete_channel,___$1))
,vs));
});
;})(del_video,inst_14946,state_val_14954,c__6876__auto__,delete_channel,___$1))
})();
var inst_14948 = om.core.transact_BANG_.call(null,self__.videos,inst_14947);
var state_14953__$1 = (function (){var statearr_14955 = state_14953;
(statearr_14955[(7)] = inst_14948);

return statearr_14955;
})();
var statearr_14956_14965 = state_14953__$1;
(statearr_14956_14965[(2)] = null);

(statearr_14956_14965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14954 === (3))){
var inst_14951 = (state_14953[(2)]);
var state_14953__$1 = state_14953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14953__$1,inst_14951);
} else {
if((state_val_14954 === (2))){
var state_14953__$1 = state_14953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14953__$1,(4),delete_channel);
} else {
if((state_val_14954 === (1))){
var state_14953__$1 = state_14953;
var statearr_14957_14966 = state_14953__$1;
(statearr_14957_14966[(2)] = null);

(statearr_14957_14966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6876__auto__,delete_channel,___$1))
;
return ((function (switch__6820__auto__,c__6876__auto__,delete_channel,___$1){
return (function() {
var state_machine__6821__auto__ = null;
var state_machine__6821__auto____0 = (function (){
var statearr_14961 = [null,null,null,null,null,null,null,null];
(statearr_14961[(0)] = state_machine__6821__auto__);

(statearr_14961[(1)] = (1));

return statearr_14961;
});
var state_machine__6821__auto____1 = (function (state_14953){
while(true){
var ret_value__6822__auto__ = (function (){try{while(true){
var result__6823__auto__ = switch__6820__auto__.call(null,state_14953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6823__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6823__auto__;
}
break;
}
}catch (e14962){if((e14962 instanceof Object)){
var ex__6824__auto__ = e14962;
var statearr_14963_14967 = state_14953;
(statearr_14963_14967[(5)] = ex__6824__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6822__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14968 = state_14953;
state_14953 = G__14968;
continue;
} else {
return ret_value__6822__auto__;
}
break;
}
});
state_machine__6821__auto__ = function(state_14953){
switch(arguments.length){
case 0:
return state_machine__6821__auto____0.call(this);
case 1:
return state_machine__6821__auto____1.call(this,state_14953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6821__auto____0;
state_machine__6821__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6821__auto____1;
return state_machine__6821__auto__;
})()
;})(switch__6820__auto__,c__6876__auto__,delete_channel,___$1))
})();
var state__6878__auto__ = (function (){var statearr_14964 = f__6877__auto__.call(null);
(statearr_14964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6876__auto__);

return statearr_14964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6878__auto__);
});})(c__6876__auto__,delete_channel,___$1))
);

return c__6876__auto__;
});

clj_stack.core.t14939.prototype.om$core$IInitState$ = true;

clj_stack.core.t14939.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661),cljs.core.async.chan.call(null)], null);
});

clj_stack.core.t14939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14941){
var self__ = this;
var _14941__$1 = this;
return self__.meta14940;
});

clj_stack.core.t14939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14941,meta14940__$1){
var self__ = this;
var _14941__$1 = this;
return (new clj_stack.core.t14939(self__.owner,self__.videos,self__.videos_view,meta14940__$1));
});

clj_stack.core.t14939.cljs$lang$type = true;

clj_stack.core.t14939.cljs$lang$ctorStr = "clj-stack.core/t14939";

clj_stack.core.t14939.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t14939");
});

clj_stack.core.__GT_t14939 = (function __GT_t14939(owner__$1,videos__$1,videos_view__$1,meta14940){
return (new clj_stack.core.t14939(owner__$1,videos__$1,videos_view__$1,meta14940));
});

}

return (new clj_stack.core.t14939(owner,videos,videos_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),73,new cljs.core.Keyword(null,"end-line","end-line",1837326455),65,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),50,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/clj_stack/core.cljs"], null)));
});
clj_stack.core.app_view = (function app_view(model,owner){
if(typeof clj_stack.core.t14972 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t14972 = (function (owner,model,app_view,meta14973){
this.owner = owner;
this.model = model;
this.app_view = app_view;
this.meta14973 = meta14973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t14972.prototype.om$core$IRender$ = true;

clj_stack.core.t14972.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "page-header"},React.DOM.h2(null,"Poor man's YouTube")),om.core.build.call(null,clj_stack.core.videos_view,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(self__.model)),React.DOM.hr(null),om.core.build.call(null,clj_stack.core.new_video_view,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(self__.model)));
});

clj_stack.core.t14972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14974){
var self__ = this;
var _14974__$1 = this;
return self__.meta14973;
});

clj_stack.core.t14972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14974,meta14973__$1){
var self__ = this;
var _14974__$1 = this;
return (new clj_stack.core.t14972(self__.owner,self__.model,self__.app_view,meta14973__$1));
});

clj_stack.core.t14972.cljs$lang$type = true;

clj_stack.core.t14972.cljs$lang$ctorStr = "clj-stack.core/t14972";

clj_stack.core.t14972.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t14972");
});

clj_stack.core.__GT_t14972 = (function __GT_t14972(owner__$1,model__$1,app_view__$1,meta14973){
return (new clj_stack.core.t14972(owner__$1,model__$1,app_view__$1,meta14973));
});

}

return (new clj_stack.core.t14972(owner,model,app_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),55,new cljs.core.Keyword(null,"end-line","end-line",1837326455),76,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),69,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/clj_stack/core.cljs"], null)));
});
om.core.root.call(null,clj_stack.core.app_view,clj_stack.core.app_model,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map