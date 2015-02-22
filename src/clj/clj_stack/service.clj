(ns clj_stack.service
  (:require [io.pedestal.http :as bootstrap]
            [io.pedestal.http.route :as route]
            [io.pedestal.http.body-params :as body-params]
            [io.pedestal.http.route.definition :refer [defroutes]]
            [ring.util.response :as ring-resp]
            [datomic.api :as d]))

(def uri "datomic:dev://localhost:4334/clj_stack")

(def conn (d/connect uri))

(defn home-page
  [request]
  (-> (ring-resp/file-response "index.html")
      (ring-resp/content-type "text/html")))

(defn videos [request]
  (let [vs (d/q '[:find (pull ?v [*]) :where [?v :video/title ?t]] (d/db conn))]
    (bootstrap/edn-response {:videos (vec (apply concat vs))})))

(defn delete-video [request]
  (let [id (Long/parseLong (get-in request [:path-params :id]))]
    @(d/transact conn [[:db.fn/retractEntity id]])
    (ring-resp/response "ok")))

(defn add-video [request]
  (let [video (:edn-params (body-params/edn-parser request))]
    @(d/transact conn [(merge {:db/id #db/id[:db.part/user]} video)])
    (ring-resp/response "ok")))

(defroutes routes
  [[["/" {:get home-page}]
    ["/videos" {:get videos :post add-video}]
    ["/videos/:id" {:delete delete-video}]]])

(def service {:env :prod
              ::bootstrap/routes routes
              ::bootstrap/resource-path "/public"
              ::bootstrap/type :jetty
              ::bootstrap/port 8080})

