import express from "express"
import { deletEnquery, getEnquery, inerstEnquery, UpadetEnquery } from "../Enquery.controller.js"

const EnqueriRoute = express.Router()

EnqueriRoute.get("/enquery-list", getEnquery)
EnqueriRoute.post("/enquery-insert", inerstEnquery)
EnqueriRoute.delete("/enquery-delete/:id", deletEnquery)
EnqueriRoute.put("/enquery-update/:id", UpadetEnquery)

export { EnqueriRoute }