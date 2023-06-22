import mongoose from "mongoose";

export const database = () => { mongoose.connect("mongodb://127.0.0.1:27017", {
dbName : "project1"
}).then(() => {
    console.log("Database is connected")
}).catch(err => console.log("db error"))
}