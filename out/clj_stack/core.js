// Compiled by ClojureScript 0.0-2755 {}
goog.provide('clj_stack.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
clj_stack.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
om.core.root.call(null,(function (app,owner){
if(typeof clj_stack.core.t6217 !== 'undefined'){
} else {

/**
* @constructor
*/
clj_stack.core.t6217 = (function (owner,app,meta6218){
this.owner = owner;
this.app = app;
this.meta6218 = meta6218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clj_stack.core.t6217.prototype.om$core$IRender$ = true;

clj_stack.core.t6217.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return om.dom.h1.call(null,null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.app));
});

clj_stack.core.t6217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6219){
var self__ = this;
var _6219__$1 = this;
return self__.meta6218;
});

clj_stack.core.t6217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6219,meta6218__$1){
var self__ = this;
var _6219__$1 = this;
return (new clj_stack.core.t6217(self__.owner,self__.app,meta6218__$1));
});

clj_stack.core.t6217.cljs$lang$type = true;

clj_stack.core.t6217.cljs$lang$ctorStr = "clj-stack.core/t6217";

clj_stack.core.t6217.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"clj-stack.core/t6217");
});

clj_stack.core.__GT_t6217 = (function __GT_t6217(owner__$1,app__$1,meta6218){
return (new clj_stack.core.t6217(owner__$1,app__$1,meta6218));
});

}

return (new clj_stack.core.t6217(owner,app,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),35,new cljs.core.Keyword(null,"end-line","end-line",1837326455),13,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),11,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/subhash/git/clj-stack/src/clj_stack/core.cljs"], null)));
}),clj_stack.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map