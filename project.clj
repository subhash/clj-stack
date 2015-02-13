(defproject clj-stack "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2755"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om "0.8.8"]
                 [om-sync "0.1.1"]
                 [io.pedestal/pedestal.service "0.3.1"]
                 [io.pedestal/pedestal.jetty "0.3.1"]
                 [ch.qos.logback/logback-classic "1.1.2" :exclusions [org.slf4j/slf4j-api]]
                 [org.slf4j/jul-to-slf4j "1.7.7"]
                 [org.slf4j/jcl-over-slf4j "1.7.7"]
                 [org.slf4j/log4j-over-slf4j "1.7.7"]
                 [org.clojure/tools.namespace "0.2.9"]]

  :plugins [[lein-cljsbuild "1.0.4"]]

  :source-paths ["src/clj" "src/cljs" "target/classes"]

  :clean-targets ["resources/public/clj_stack" "resources/public/clj_stack.js"]

  :main ^{:skip-aot true} clj_stack.server

  :cljsbuild {
    :builds [{:id "clj-stack"
              :source-paths ["src/cljs"]
              :compiler {
                :output-to "resources/public/clj_stack.js"
                :output-dir "resources/public"
                :optimizations :none
                :cache-analysis true
                :source-map true}}]})
