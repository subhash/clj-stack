(ns clj-stack.core
  (:require [om.core :as om]
            [om.dom :as dom]))

(enable-console-print!)

(def app-state (atom {:videos
                      [{:id 1 :title "Intro to Datomic" :url "http://www.youtube.com/embed/RKcqYZZ9RDY"}
                       {:id 2 :title "The Functional Final Frontier" :url "http://www.youtube.com/embed/DMtwq3QtddY"}]}))


(defn add-video [videos owner]
  (let [title (-> (om/get-node owner "new-video-title") .-value)
        url (-> (om/get-node owner "new-video-url") .-value)]
    (om/transact! videos #(conj % {:id (rand-int 1000) :title title :url url}))
    (println "app-state: " @app-state)))

(defn new-video-view [videos owner]
  (reify om/IRender
    (render [_]
            (dom/div nil
             (dom/input #js {:ref "new-video-title" :type "text" :placeholder "Title"})
             (dom/input #js {:ref "new-video-url" :type "text" :placeholder "URL"})
             (dom/button #js {:onClick #(add-video videos owner)} "Add")))))

(defn video-view [video owner]
  (reify om/IRender
    (render [_]
      (dom/li nil
        (dom/a #js {:href (:url video)} (:title video))))))


(defn videos-view [videos owner]
  (reify om/IRender
    (render [_]
      (apply dom/ul nil
        (om/build-all video-view videos)))))


(defn app-view [model owner]
  (reify om/IRender
      (render [_]
        (dom/div nil
          (dom/h2 #js {:className "pull-center"} "Poor man's YouTube")
          (om/build videos-view (:videos model))
          (om/build new-video-view (:videos model))))))

(om/root
  app-view
  app-state
  {:target (. js/document (getElementById "app"))})
