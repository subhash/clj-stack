// Compiled by ClojureScript 0.0-2755 {}
goog.provide('clj_stack.core');
goog.require('cljs.core');
goog.require('om_sync.util');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
clj_stack.core.app_model = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"videos","videos",254925290),cljs.core.PersistentVector.EMPTY], null));
clj_stack.core.add_video = (function add_video(videos,owner){
var title = om.core.get_node.call(null,owner,"new-video-title").value;
var url = om.core.get_node.call(null,owner,"new-video-url").value;
var video_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.rand_int.call(null,(1000)),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"url","url",276297046),url], null);
om.core.transact_BANG_.call(null,videos,((function (title,url,video_data){
return (function (p1__6783_SHARP_){
return cljs.core.conj.call(null,p1__6783_SHARP_,video_data);
});})(title,url,video_data))
);

cljs.core.println.call(null,"app-model: ",cljs.core.deref.call(null,clj_stack.core.app_model));

om_sync.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),"/videos",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"data","data",-232669377),video_data], null));

om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631),"");

return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193),"");
});
clj_stack.core.delete_video = (function delete_video(videos,del_video){
om.core.transact_BANG_.call(null,videos,(function (vs){
return cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__6784_SHARP_){
return cljs.core._EQ_.call(null,p1__6784_SHARP_,del_video);
}),vs));
}));

return om_sync.util.edn_xhr.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/videos/"),cljs.core.str(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(del_video))].join(''),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620)], null));
});
clj_stack.core.new_video_view = (function new_video_view(videos,owner){
if(typeof clj_stack.core.t6790 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t6790 = (function (owner,videos,new_video_view,meta6791){
this.owner = owner;
this.videos = videos;
this.new_video_view = new_video_view;
this.meta6791 = meta6791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t6790.prototype.om$core$IRenderState$ = true;

clj_stack.core.t6790.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__6785_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631),p1__6785_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631).cljs$core$IFn$_invoke$arity$1(state), "placeholder": "Title", "type": "text", "ref": "new-video-title"}),om.dom.input.call(null,{"onChange": ((function (___$1){
return (function (p1__6786_SHARP_){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193),p1__6786_SHARP_.target.value);
});})(___$1))
, "value": new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193).cljs$core$IFn$_invoke$arity$1(state), "placeholder": "URL", "type": "text", "ref": "new-video-url"}),React.DOM.button({"onClick": ((function (___$1){
return (function (){
return clj_stack.core.add_video.call(null,self__.videos,self__.owner);
});})(___$1))
},"Add"));
});

clj_stack.core.t6790.prototype.om$core$IInitState$ = true;

clj_stack.core.t6790.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"new-video-name","new-video-name",456961631),"",new cljs.core.Keyword(null,"new-video-url","new-video-url",1250431193),""], null);
});

clj_stack.core.t6790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6792){
var self__ = this;
var _6792__$1 = this;
return self__.meta6791;
});

clj_stack.core.t6790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6792,meta6791__$1){
var self__ = this;
var _6792__$1 = this;
return (new clj_stack.core.t6790(self__.owner,self__.videos,self__.new_video_view,meta6791__$1));
});

clj_stack.core.t6790.cljs$lang$type = true;

clj_stack.core.t6790.cljs$lang$ctorStr = "clj-stack.core/t6790";

clj_stack.core.t6790.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t6790");
});

clj_stack.core.__GT_t6790 = (function __GT_t6790(owner__$1,videos__$1,new_video_view__$1,meta6791){
return (new clj_stack.core.t6790(owner__$1,videos__$1,new_video_view__$1,meta6791));
});

}

return (new clj_stack.core.t6790(owner,videos,new_video_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),76,new cljs.core.Keyword(null,"end-line","end-line",1837326455),41,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),29,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/cljs/clj_stack/core.cljs"], null)));
});
clj_stack.core.video_view = (function video_view(video,owner){
if(typeof clj_stack.core.t6798 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t6798 = (function (owner,video,video_view,meta6799){
this.owner = owner;
this.video = video;
this.video_view = video_view;
this.meta6799 = meta6799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t6798.prototype.om$core$IRenderState$ = true;

clj_stack.core.t6798.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__6801){
var self__ = this;
var map__6802 = p__6801;
var map__6802__$1 = ((cljs.core.seq_QMARK_.call(null,map__6802))?cljs.core.apply.call(null,cljs.core.hash_map,map__6802):map__6802);
var delete_channel = cljs.core.get.call(null,map__6802__$1,new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661));
var ___$1 = this;
return React.DOM.li({"className": "col-sm-4"},React.DOM.div({"className": "embed-responsive embed-responsive-4by3"},React.DOM.iframe({"src": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.video), "className": "embed-responsive-item"})),React.DOM.button({"onClick": ((function (___$1,map__6802,map__6802__$1,delete_channel){
return (function (){
return cljs.core.async.put_BANG_.call(null,delete_channel,self__.video);
});})(___$1,map__6802,map__6802__$1,delete_channel))
, "className": "btn btn-danger btn-xs pull-right"},"Remove"));
});

clj_stack.core.t6798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6800){
var self__ = this;
var _6800__$1 = this;
return self__.meta6799;
});

clj_stack.core.t6798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6800,meta6799__$1){
var self__ = this;
var _6800__$1 = this;
return (new clj_stack.core.t6798(self__.owner,self__.video,self__.video_view,meta6799__$1));
});

clj_stack.core.t6798.cljs$lang$type = true;

clj_stack.core.t6798.cljs$lang$ctorStr = "clj-stack.core/t6798";

clj_stack.core.t6798.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t6798");
});

clj_stack.core.__GT_t6798 = (function __GT_t6798(owner__$1,video__$1,video_view__$1,meta6799){
return (new clj_stack.core.t6798(owner__$1,video__$1,video_view__$1,meta6799));
});

}

return (new clj_stack.core.t6798(owner,video,video_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),76,new cljs.core.Keyword(null,"end-line","end-line",1837326455),51,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),44,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/cljs/clj_stack/core.cljs"], null)));
});
clj_stack.core.videos_view = (function videos_view(videos,owner){
if(typeof clj_stack.core.t6828 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t6828 = (function (owner,videos,videos_view,meta6829){
this.owner = owner;
this.videos = videos;
this.videos_view = videos_view;
this.meta6829 = meta6829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t6828.prototype.om$core$IRenderState$ = true;

clj_stack.core.t6828.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__6831){
var self__ = this;
var map__6832 = p__6831;
var map__6832__$1 = ((cljs.core.seq_QMARK_.call(null,map__6832))?cljs.core.apply.call(null,cljs.core.hash_map,map__6832):map__6832);
var delete_channel = cljs.core.get.call(null,map__6832__$1,new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661));
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.ul,{"className": "row"},om.core.build_all.call(null,clj_stack.core.video_view,self__.videos,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661),delete_channel], null)], null)));
});

clj_stack.core.t6828.prototype.om$core$IWillMount$ = true;

clj_stack.core.t6828.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var delete_channel = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661));
var c__6640__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6640__auto__,delete_channel,___$1){
return (function (){
var f__6641__auto__ = (function (){var switch__6625__auto__ = ((function (c__6640__auto__,delete_channel,___$1){
return (function (state_6841){
var state_val_6842 = (state_6841[(1)]);
if((state_val_6842 === (4))){
var inst_6835 = (state_6841[(2)]);
var inst_6836 = clj_stack.core.delete_video.call(null,self__.videos,inst_6835);
var state_6841__$1 = (function (){var statearr_6843 = state_6841;
(statearr_6843[(7)] = inst_6836);

return statearr_6843;
})();
var statearr_6844_6853 = state_6841__$1;
(statearr_6844_6853[(2)] = null);

(statearr_6844_6853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6842 === (3))){
var inst_6839 = (state_6841[(2)]);
var state_6841__$1 = state_6841;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6841__$1,inst_6839);
} else {
if((state_val_6842 === (2))){
var state_6841__$1 = state_6841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6841__$1,(4),delete_channel);
} else {
if((state_val_6842 === (1))){
var state_6841__$1 = state_6841;
var statearr_6845_6854 = state_6841__$1;
(statearr_6845_6854[(2)] = null);

(statearr_6845_6854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__6640__auto__,delete_channel,___$1))
;
return ((function (switch__6625__auto__,c__6640__auto__,delete_channel,___$1){
return (function() {
var state_machine__6626__auto__ = null;
var state_machine__6626__auto____0 = (function (){
var statearr_6849 = [null,null,null,null,null,null,null,null];
(statearr_6849[(0)] = state_machine__6626__auto__);

(statearr_6849[(1)] = (1));

return statearr_6849;
});
var state_machine__6626__auto____1 = (function (state_6841){
while(true){
var ret_value__6627__auto__ = (function (){try{while(true){
var result__6628__auto__ = switch__6625__auto__.call(null,state_6841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6628__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6628__auto__;
}
break;
}
}catch (e6850){if((e6850 instanceof Object)){
var ex__6629__auto__ = e6850;
var statearr_6851_6855 = state_6841;
(statearr_6851_6855[(5)] = ex__6629__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6850;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6627__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6856 = state_6841;
state_6841 = G__6856;
continue;
} else {
return ret_value__6627__auto__;
}
break;
}
});
state_machine__6626__auto__ = function(state_6841){
switch(arguments.length){
case 0:
return state_machine__6626__auto____0.call(this);
case 1:
return state_machine__6626__auto____1.call(this,state_6841);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6626__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6626__auto____0;
state_machine__6626__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6626__auto____1;
return state_machine__6626__auto__;
})()
;})(switch__6625__auto__,c__6640__auto__,delete_channel,___$1))
})();
var state__6642__auto__ = (function (){var statearr_6852 = f__6641__auto__.call(null);
(statearr_6852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6640__auto__);

return statearr_6852;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6642__auto__);
});})(c__6640__auto__,delete_channel,___$1))
);

return c__6640__auto__;
});

clj_stack.core.t6828.prototype.om$core$IInitState$ = true;

clj_stack.core.t6828.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"delete_channel","delete_channel",-2048767661),cljs.core.async.chan.call(null)], null);
});

clj_stack.core.t6828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6830){
var self__ = this;
var _6830__$1 = this;
return self__.meta6829;
});

clj_stack.core.t6828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6830,meta6829__$1){
var self__ = this;
var _6830__$1 = this;
return (new clj_stack.core.t6828(self__.owner,self__.videos,self__.videos_view,meta6829__$1));
});

clj_stack.core.t6828.cljs$lang$type = true;

clj_stack.core.t6828.cljs$lang$ctorStr = "clj-stack.core/t6828";

clj_stack.core.t6828.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t6828");
});

clj_stack.core.__GT_t6828 = (function __GT_t6828(owner__$1,videos__$1,videos_view__$1,meta6829){
return (new clj_stack.core.t6828(owner__$1,videos__$1,videos_view__$1,meta6829));
});

}

return (new clj_stack.core.t6828(owner,videos,videos_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),73,new cljs.core.Keyword(null,"end-line","end-line",1837326455),69,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),55,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/cljs/clj_stack/core.cljs"], null)));
});
clj_stack.core.app_view = (function app_view(model,owner){
if(typeof clj_stack.core.t6860 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t6860 = (function (owner,model,app_view,meta6861){
this.owner = owner;
this.model = model;
this.app_view = app_view;
this.meta6861 = meta6861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t6860.prototype.om$core$IRender$ = true;

clj_stack.core.t6860.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.div({"className": "page-header"},React.DOM.h2(null,"Poor man's YouTube")),om.core.build.call(null,clj_stack.core.videos_view,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(self__.model)),React.DOM.hr(null),om.core.build.call(null,clj_stack.core.new_video_view,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(self__.model)));
});

clj_stack.core.t6860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6862){
var self__ = this;
var _6862__$1 = this;
return self__.meta6861;
});

clj_stack.core.t6860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6862,meta6861__$1){
var self__ = this;
var _6862__$1 = this;
return (new clj_stack.core.t6860(self__.owner,self__.model,self__.app_view,meta6861__$1));
});

clj_stack.core.t6860.cljs$lang$type = true;

clj_stack.core.t6860.cljs$lang$ctorStr = "clj-stack.core/t6860";

clj_stack.core.t6860.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t6860");
});

clj_stack.core.__GT_t6860 = (function __GT_t6860(owner__$1,model__$1,app_view__$1,meta6861){
return (new clj_stack.core.t6860(owner__$1,model__$1,app_view__$1,meta6861));
});

}

return (new clj_stack.core.t6860(owner,model,app_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),55,new cljs.core.Keyword(null,"end-line","end-line",1837326455),80,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),73,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/cljs/clj_stack/core.cljs"], null)));
});
om_sync.util.edn_xhr.call(null,(function (){var target = document.getElementById("app");
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/videos",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (target){
return (function (res){
cljs.core.reset_BANG_.call(null,clj_stack.core.app_model,res);

return om.core.root.call(null,clj_stack.core.app_view,res,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null));
});})(target))
], null);
})());

//# sourceMappingURL=core.js.map