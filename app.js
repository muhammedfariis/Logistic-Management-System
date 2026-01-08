import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import database from "../Logistics-Management-System/config/database.js"
import spinner from "../Logistics-Management-System/design/ora.js"
import vehicleRouter from "./vehicle-management-1/routers/vehicleRoute.js"
import authRouter from "./authentication/routers/authRouter.js"
dotenv.config()
// assigning server 

const app = express()
const PORT = process.env.PORT

// using middlewares
app.use(express.json())
app.use(cors())
app.use("/api/vehicle" , vehicleRouter)
app.use("/api/authentication" , authRouter)

database()

app.listen(PORT ,()=>{
    console.log("~");
      
    spinner.start()
    console.log("=====>>>");

})