import express from "express"
import { dbConnection } from "./dbConnection.js";
import { Enquery } from "./models/enquery.model.js";
import dotenv from "dotenv"
import { deletEnquery, getEnquery, inerstEnquery, UpadetEnquery } from "./Controllers/Enquery.controller.js";
import { EnqueriRoute } from "./Controllers/Routes/Enquery.route.js";
dotenv.config();
const app = express()
const port = process.env.PORT
app.use(express.json())

app.post("/api/query-insert", inerstEnquery)





app.use("/api/enquery", EnqueriRoute)

app.listen(port, () => {
 console.log(`server is runnig ${port}`);
 dbConnection()
})