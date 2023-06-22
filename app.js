import express from "express";
import { database } from "./data/database.js";
import userRouter from "./routes/users.js";
import taskRouter from "./routes/task.js"
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { throwError } from "./middlewares/errorhandler.js";
import cors from "cors"


config({
    path : "./data/config.env",
    encoding : "utf8"
})
export const app = express();

database();


// middleware

app.use(cookieParser());

//To recognize incoming requests as json objects , it should be at top 
app.use(express.json())

app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods : ["GETS", "POST","PUT","DELETE"],
    credentials : true,
    
}

))

app.use( "/users",userRouter);
app.use("/tasks" , taskRouter);

// using error handling middleware 
app.use(throwError)



