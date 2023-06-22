import mongoose from "mongoose";

const taskSchema =  mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type :String,
        unique  :true,
        required : true 
    },
    isCompleted : {
        type : Boolean,
        default : false,
    },user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now,
        required : true 
    }
})

export const tasks =  mongoose.model("task",taskSchema)