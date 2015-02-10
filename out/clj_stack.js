goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../react.inc.js", ['cljsjs.react'], []);
goog.addDependency("../om/dom.js", ['om.dom'], ['cljs.core', 'goog.object', 'cljsjs.react']);
goog.addDependency("../om/core.js", ['om.core'], ['goog.dom', 'cljs.core', 'om.dom', 'cljsjs.react', 'goog.ui.IdGenerator']);
goog.addDependency("../clj_stack/core.js", ['clj_stack.core'], ['cljs.core', 'om.dom', 'om.core']);