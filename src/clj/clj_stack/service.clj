(ns clj_stack.service
  (:require [io.pedestal.http :as bootstrap]
            [io.pedestal.http.route :as route]
            [io.pedestal.http.body-params :as body-params]
            [io.pedestal.http.route.definition :refer [defroutes]]
            [ring.util.response :as ring-resp]))


(defn home-page
  [request]
  (-> (ring-resp/file-response "index.html")
      (ring-resp/content-type "text/html")))


(defroutes routes
  [[["/" {:get home-page}]]])

(def service {:env :prod
              ::bootstrap/routes routes
              ::bootstrap/resource-path "/public"
              ::bootstrap/type :jetty
              ::bootstrap/port 8080})

