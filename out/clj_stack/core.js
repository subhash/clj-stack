// Compiled by ClojureScript 0.0-2755 {}
goog.provide('clj_stack.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
clj_stack.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"videos","videos",254925290),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Intro to Datomic",new cljs.core.Keyword(null,"url","url",276297046),"http://www.youtube.com/embed/RKcqYZZ9RDY"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"title","title",636505583),"The Functional Final Frontier",new cljs.core.Keyword(null,"url","url",276297046),"http://www.youtube.com/embed/DMtwq3QtddY"], null)], null)], null));
clj_stack.core.add_video = (function add_video(videos,owner){
var title = om.core.get_node.call(null,owner,"new-video-title").value;
var url = om.core.get_node.call(null,owner,"new-video-url").value;
om.core.transact_BANG_.call(null,videos,((function (title,url){
return (function (p1__5839_SHARP_){
return cljs.core.conj.call(null,p1__5839_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.rand_int.call(null,(1000)),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"url","url",276297046),url], null));
});})(title,url))
);

return cljs.core.println.call(null,"app-state: ",cljs.core.deref.call(null,clj_stack.core.app_state));
});
clj_stack.core.new_video_view = (function new_video_view(videos,owner){
if(typeof clj_stack.core.t5843 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t5843 = (function (owner,videos,new_video_view,meta5844){
this.owner = owner;
this.videos = videos;
this.new_video_view = new_video_view;
this.meta5844 = meta5844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t5843.prototype.om$core$IRender$ = true;

clj_stack.core.t5843.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,om.dom.input.call(null,{"placeholder": "Title", "type": "text", "ref": "new-video-title"}),om.dom.input.call(null,{"placeholder": "URL", "type": "text", "ref": "new-video-url"}),React.DOM.button({"onClick": ((function (___$1){
return (function (){
return clj_stack.core.add_video.call(null,self__.videos,self__.owner);
});})(___$1))
},"Add"));
});

clj_stack.core.t5843.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5845){
var self__ = this;
var _5845__$1 = this;
return self__.meta5844;
});

clj_stack.core.t5843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5845,meta5844__$1){
var self__ = this;
var _5845__$1 = this;
return (new clj_stack.core.t5843(self__.owner,self__.videos,self__.new_video_view,meta5844__$1));
});

clj_stack.core.t5843.cljs$lang$type = true;

clj_stack.core.t5843.cljs$lang$ctorStr = "clj-stack.core/t5843";

clj_stack.core.t5843.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t5843");
});

clj_stack.core.__GT_t5843 = (function __GT_t5843(owner__$1,videos__$1,new_video_view__$1,meta5844){
return (new clj_stack.core.t5843(owner__$1,videos__$1,new_video_view__$1,meta5844));
});

}

return (new clj_stack.core.t5843(owner,videos,new_video_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),76,new cljs.core.Keyword(null,"end-line","end-line",1837326455),24,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),19,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/clj_stack/core.cljs"], null)));
});
clj_stack.core.video_view = (function video_view(video,owner){
if(typeof clj_stack.core.t5849 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t5849 = (function (owner,video,video_view,meta5850){
this.owner = owner;
this.video = video;
this.video_view = video_view;
this.meta5850 = meta5850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t5849.prototype.om$core$IRender$ = true;

clj_stack.core.t5849.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.li(null,React.DOM.a({"href": new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.video)},new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.video)));
});

clj_stack.core.t5849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5851){
var self__ = this;
var _5851__$1 = this;
return self__.meta5850;
});

clj_stack.core.t5849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5851,meta5850__$1){
var self__ = this;
var _5851__$1 = this;
return (new clj_stack.core.t5849(self__.owner,self__.video,self__.video_view,meta5850__$1));
});

clj_stack.core.t5849.cljs$lang$type = true;

clj_stack.core.t5849.cljs$lang$ctorStr = "clj-stack.core/t5849";

clj_stack.core.t5849.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t5849");
});

clj_stack.core.__GT_t5849 = (function __GT_t5849(owner__$1,video__$1,video_view__$1,meta5850){
return (new clj_stack.core.t5849(owner__$1,video__$1,video_view__$1,meta5850));
});

}

return (new clj_stack.core.t5849(owner,video,video_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),59,new cljs.core.Keyword(null,"end-line","end-line",1837326455),30,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),27,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/clj_stack/core.cljs"], null)));
});
clj_stack.core.videos_view = (function videos_view(videos,owner){
if(typeof clj_stack.core.t5855 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t5855 = (function (owner,videos,videos_view,meta5856){
this.owner = owner;
this.videos = videos;
this.videos_view = videos_view;
this.meta5856 = meta5856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t5855.prototype.om$core$IRender$ = true;

clj_stack.core.t5855.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,clj_stack.core.video_view,self__.videos));
});

clj_stack.core.t5855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5857){
var self__ = this;
var _5857__$1 = this;
return self__.meta5856;
});

clj_stack.core.t5855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5857,meta5856__$1){
var self__ = this;
var _5857__$1 = this;
return (new clj_stack.core.t5855(self__.owner,self__.videos,self__.videos_view,meta5856__$1));
});

clj_stack.core.t5855.cljs$lang$type = true;

clj_stack.core.t5855.cljs$lang$ctorStr = "clj-stack.core/t5855";

clj_stack.core.t5855.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t5855");
});

clj_stack.core.__GT_t5855 = (function __GT_t5855(owner__$1,videos__$1,videos_view__$1,meta5856){
return (new clj_stack.core.t5855(owner__$1,videos__$1,videos_view__$1,meta5856));
});

}

return (new clj_stack.core.t5855(owner,videos,videos_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),44,new cljs.core.Keyword(null,"end-line","end-line",1837326455),37,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),34,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/clj_stack/core.cljs"], null)));
});
clj_stack.core.app_view = (function app_view(model,owner){
if(typeof clj_stack.core.t5861 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t5861 = (function (owner,model,app_view,meta5862){
this.owner = owner;
this.model = model;
this.app_view = app_view;
this.meta5862 = meta5862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t5861.prototype.om$core$IRender$ = true;

clj_stack.core.t5861.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.h2({"className": "pull-center"},"Poor man's YouTube"),om.core.build.call(null,clj_stack.core.videos_view,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(self__.model)),om.core.build.call(null,clj_stack.core.new_video_view,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(self__.model)));
});

clj_stack.core.t5861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5863){
var self__ = this;
var _5863__$1 = this;
return self__.meta5862;
});

clj_stack.core.t5861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5863,meta5862__$1){
var self__ = this;
var _5863__$1 = this;
return (new clj_stack.core.t5861(self__.owner,self__.model,self__.app_view,meta5862__$1));
});

clj_stack.core.t5861.cljs$lang$type = true;

clj_stack.core.t5861.cljs$lang$ctorStr = "clj-stack.core/t5861";

clj_stack.core.t5861.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t5861");
});

clj_stack.core.__GT_t5861 = (function __GT_t5861(owner__$1,model__$1,app_view__$1,meta5862){
return (new clj_stack.core.t5861(owner__$1,model__$1,app_view__$1,meta5862));
});

}

return (new clj_stack.core.t5861(owner,model,app_view,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),55,new cljs.core.Keyword(null,"end-line","end-line",1837326455),46,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),41,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/clj_stack/core.cljs"], null)));
});
om.core.root.call(null,clj_stack.core.app_view,clj_stack.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map