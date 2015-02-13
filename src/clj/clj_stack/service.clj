(ns clj_stack.service
  (:require [io.pedestal.http :as bootstrap]
            [io.pedestal.http.route :as route]
            [io.pedestal.http.body-params :as body-params]
            [io.pedestal.http.route.definition :refer [defroutes]]
            [ring.util.response :as ring-resp]))

(def data-model
  (atom
   {:videos
    [{:id 1 :title "Intro to Datomic" :url "http://www.youtube.com/embed/RKcqYZZ9RDY"}
    {:id 2 :title "The Functional Final Frontier" :url "http://www.youtube.com/embed/DMtwq3QtddY"}]}))

(defn home-page
  [request]
  (-> (ring-resp/file-response "index.html")
      (ring-resp/content-type "text/html")))

(defn videos [request]
  (bootstrap/edn-response @data-model))


(defroutes routes
  [[["/" {:get home-page}]
    ["/videos" {:get videos}]]])

(def service {:env :prod
              ::bootstrap/routes routes
              ::bootstrap/resource-path "/public"
              ::bootstrap/type :jetty
              ::bootstrap/port 8080})

