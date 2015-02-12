(ns clj-stack.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om]
            [om.dom :as dom]
            [cljs.core.async :refer [chan put! <!]]))

(enable-console-print!)

(def app-model (atom {:videos
                      [{:id 1 :title "Intro to Datomic" :url "http://www.youtube.com/embed/RKcqYZZ9RDY"}
                       {:id 2 :title "The Functional Final Frontier" :url "http://www.youtube.com/embed/DMtwq3QtddY"}]}))


(defn add-video [videos owner]
  (let [title (-> (om/get-node owner "new-video-title") .-value)
        url (-> (om/get-node owner "new-video-url") .-value)]
    (om/transact! videos #(conj % {:id (rand-int 1000) :title title :url url}))
    (println "app-model: " @app-model)
    (om/set-state! owner :new-video-name "")
    (om/set-state! owner :new-video-url "")))

(defn new-video-view [videos owner]
  (reify
    om/IInitState
    (init-state [_] {:new-video-name "" :new-video-url ""})
    om/IRenderState
    (render-state [_ state]
            (dom/div nil
             (dom/input #js {:ref "new-video-title" :type "text" :placeholder "Title"
                             :value (:new-video-name state)
                             :onChange #(om/set-state! owner :new-video-name (.. % -target -value))})
             (dom/input #js {:ref "new-video-url" :type "text" :placeholder "URL"
                             :value (:new-video-url state)
                             :onChange #(om/set-state! owner :new-video-url (.. % -target -value))})
             (dom/button #js {:onClick #(add-video videos owner)} "Add")))))

(defn video-view [video owner]
  (reify om/IRenderState
    (render-state [_ {:keys [delete_channel]}]
      (dom/li #js {:className "col-sm-4"}
        ;(dom/a #js {:href (:url video)} (:title video))
        (dom/div #js {:className "embed-responsive embed-responsive-4by3"}
          (dom/iframe #js {:className "embed-responsive-item"
                           :src (:url video)}))
        (dom/button #js {:className "btn btn-danger btn-xs pull-right"
                       :onClick #(put! delete_channel @video)} "Remove" )))))


(defn videos-view [videos owner]
  (reify
    om/IInitState
    (init-state [_] {:delete_channel (chan)})
    om/IWillMount
    (will-mount [_]
      (let [delete_channel (om/get-state owner :delete_channel)]
        (go (loop []
          (let [del-video (<! delete_channel)]
            (om/transact! videos
              (fn [vs] (vec (remove #(= % del-video) vs))))
            (recur))))))
    om/IRenderState
    (render-state [_ {:keys [delete_channel]}]
      (apply dom/ul #js {:className "row"}
        (om/build-all video-view videos
                      {:init-state {:delete_channel delete_channel}})))))


(defn app-view [model owner]
  (reify om/IRender
      (render [_]
        (dom/div nil
          (dom/div #js {:className "page-header"}
            (dom/h2 nil "Poor man's YouTube"))
          (om/build videos-view (:videos model))
          (dom/hr nil)
          (om/build new-video-view (:videos model))))))

(om/root
  app-view
  app-model
  {:target (. js/document (getElementById "app"))})
