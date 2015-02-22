(ns clj_stack.db
  (:require [datomic.api :as d]
            [clojure.java.io :as io]))


(def schema-tx
  (read-string (slurp (io/resource "db/schema.edn"))))

(def data-tx
  (read-string (slurp (io/resource "db/data.edn"))))


(def uri "datomic:dev://localhost:4334/clj_stack")

(defn init []
  (d/create-database uri)
  (let [conn (d/connect uri)]
    @(d/transact conn schema-tx)
    @(d/transact conn data-tx)
    (d/q '[:find ?vt :where [?v :video/title ?vt]] (d/db conn))))
