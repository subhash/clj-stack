// Compiled by ClojureScript 0.0-2755 {}
goog.provide('clj_stack.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
clj_stack.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"videos","videos",254925290),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Intro to Datomic",new cljs.core.Keyword(null,"url","url",276297046),"http://www.youtube.com/embed/RKcqYZZ9RDY"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"title","title",636505583),"The Functional Final Frontier",new cljs.core.Keyword(null,"url","url",276297046),"http://www.youtube.com/embed/DMtwq3QtddY"], null)], null)], null));
om.core.root.call(null,(function (app,owner){
if(typeof clj_stack.core.t5447 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t5447 = (function (owner,app,meta5448){
this.owner = owner;
this.app = app;
this.meta5448 = meta5448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t5447.prototype.om$core$IRender$ = true;

clj_stack.core.t5447.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,om.dom.ul,null,cljs.core.map.call(null,((function (___$1){
return (function (p1__5446_SHARP_){
return React.DOM.li(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__5446_SHARP_));
});})(___$1))
,new cljs.core.Keyword(null,"videos","videos",254925290).cljs$core$IFn$_invoke$arity$1(self__.app)));
});

clj_stack.core.t5447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5449){
var self__ = this;
var _5449__$1 = this;
return self__.meta5448;
});

clj_stack.core.t5447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5449,meta5448__$1){
var self__ = this;
var _5449__$1 = this;
return (new clj_stack.core.t5447(self__.owner,self__.app,meta5448__$1));
});

clj_stack.core.t5447.cljs$lang$type = true;

clj_stack.core.t5447.cljs$lang$ctorStr = "clj-stack.core/t5447";

clj_stack.core.t5447.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t5447");
});

clj_stack.core.__GT_t5447 = (function __GT_t5447(owner__$1,app__$1,meta5448){
return (new clj_stack.core.t5447(owner__$1,app__$1,meta5448));
});

}

return (new clj_stack.core.t5447(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),58,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/clj_stack/core.cljs"], null)));
}),clj_stack.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map