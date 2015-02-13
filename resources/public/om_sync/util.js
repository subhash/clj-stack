// Compiled by ClojureScript 0.0-2755 {}
goog.provide('om_sync.util');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('cljs.reader');
om_sync.util.popn = (function popn(n,v){
var n__$1 = n;
var res = v;
while(true){
if((n__$1 > (0))){
var G__9886 = (n__$1 - (1));
var G__9887 = cljs.core.pop.call(null,res);
n__$1 = G__9886;
res = G__9887;
continue;
} else {
return res;
}
break;
}
});
om_sync.util.sub = (function sub(p0,p1){
return cljs.core.vec.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,p0) - cljs.core.count.call(null,p1)),p0));
});
om_sync.util.tx_tag = (function tx_tag(p__9888){
var map__9890 = p__9888;
var map__9890__$1 = ((cljs.core.seq_QMARK_.call(null,map__9890))?cljs.core.apply.call(null,cljs.core.hash_map,map__9890):map__9890);
var tx_data = map__9890__$1;
var tag = cljs.core.get.call(null,map__9890__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
if((tag instanceof cljs.core.Keyword)){
return tag;
} else {
return cljs.core.first.call(null,tag);
}
});
om_sync.util.subpath_QMARK_ = (function subpath_QMARK_(a,b){
return cljs.core._EQ_.call(null,a,om_sync.util.popn.call(null,(cljs.core.count.call(null,b) - cljs.core.count.call(null,a)),b));
});
om_sync.util.error_QMARK_ = (function error_QMARK_(res){
return cljs.core.contains_QMARK_.call(null,res,new cljs.core.Keyword(null,"error","error",-978969032));
});
om_sync.util.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
om_sync.util.edn_xhr = (function edn_xhr(p__9891){
var map__9893 = p__9891;
var map__9893__$1 = ((cljs.core.seq_QMARK_.call(null,map__9893))?cljs.core.apply.call(null,cljs.core.hash_map,map__9893):map__9893);
var on_error = cljs.core.get.call(null,map__9893__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var on_complete = cljs.core.get.call(null,map__9893__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var data = cljs.core.get.call(null,map__9893__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var url = cljs.core.get.call(null,map__9893__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.call(null,map__9893__$1,new cljs.core.Keyword(null,"method","method",55703592));
var xhr = (new goog.net.XhrIo());
goog.events.listen(xhr,goog.net.EventType.SUCCESS,((function (xhr,map__9893,map__9893__$1,on_error,on_complete,data,url,method){
return (function (e){
return on_complete.call(null,cljs.reader.read_string.call(null,xhr.getResponseText()));
});})(xhr,map__9893,map__9893__$1,on_error,on_complete,data,url,method))
);

goog.events.listen(xhr,goog.net.EventType.ERROR,((function (xhr,map__9893,map__9893__$1,on_error,on_complete,data,url,method){
return (function (e){
return on_error.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),xhr.getResponseText()], null));
});})(xhr,map__9893,map__9893__$1,on_error,on_complete,data,url,method))
);

return xhr.send(url,om_sync.util.meths.call(null,method),(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null),{"Accept": "application/edn", "Content-Type": "application/edn"});
});

//# sourceMappingURL=util.js.map