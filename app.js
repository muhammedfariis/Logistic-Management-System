import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import database from "../Logistics-Management-System/backend/config/database.js"
import spinner from "../Logistics-Management-System/backend/design/ora.js"
import authRouter from "./backend/authentication/src/routers/authRouter.js"
dotenv.config()
// assigning server 

const app = express()
const PORT = process.env.PORT

// using middlewares
app.use(express.json())
app.use(cors())
app.use("/api/authentication" , authRouter)
app.use(express.urlencoded({ extended: true }));

database()

app.listen(PORT ,()=>{
    console.log("~");
      
    spinner.start()
    console.log("=====>>>");

})