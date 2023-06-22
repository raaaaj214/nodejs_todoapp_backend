import mongoose from "mongoose";

export const database = () => { mongoose.connect(process.env.MONGO_URI, {
dbName : "project1"
}).then(() => {
    console.log("Database is connected")
}).catch(err => console.log("db error"))
}