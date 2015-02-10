(ns clj-stack.core
  (:require [om.core :as om]
            [om.dom :as dom]))

(enable-console-print!)

(def app-state (atom {:videos
                      [{:id 1 :title "Intro to Datomic" :url "http://www.youtube.com/embed/RKcqYZZ9RDY"}
                       {:id 2 :title "The Functional Final Frontier" :url "http://www.youtube.com/embed/DMtwq3QtddY"}]}))

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (apply dom/ul nil
          (map #(dom/li nil (:title %)) (:videos app))))))
  app-state
  {:target (. js/document (getElementById "app"))})
