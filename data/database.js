import mongoose from "mongoose";

export const database = () => { mongoose.connect(process.env.MONGO_URI, {
dbName : "project1"
}).then((c) => {
    console.log(`Database is connected with ${c.connection.host}`)
}).catch(err => console.log("db error",err))
}