import express from "express"
import { dbConnection } from "./dbConnection.js";
import { Enquery } from "./models/enquery.model.js";
import dotenv from "dotenv"
import cors from "cors"
import { EnqueriRoute } from "./Controllers/Routes/Enquery.route.js";
dotenv.config();
const app = express()

const port = process.env.PORT || 5000
app.use(express.json())
app.use(cors())
// app.use("/api", EnqueriRoute)
app.use("/api/enquery", EnqueriRoute)

app.listen(port, () => {
 console.log(`server is runnig ${port}`);
 dbConnection()
})