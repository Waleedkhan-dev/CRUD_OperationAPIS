import express from "express"
import { DeletAllEnquery, deletEnquery, getEnquery, getSingleItem, inerstEnquery, UpadetEnquery } from "../Enquery.controller.js"

const EnqueriRoute = express.Router()

EnqueriRoute.get("/enquery-list", getEnquery)
EnqueriRoute.post("/enquery-insert", inerstEnquery)
EnqueriRoute.delete("/Delete-AllQuery", DeletAllEnquery)
EnqueriRoute.delete("/enquery-delete/:id", deletEnquery)
EnqueriRoute.put("/enquery-update/:id", UpadetEnquery)
EnqueriRoute.get("/single/:id", getSingleItem)

export { EnqueriRoute }