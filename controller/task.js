import errorHandler from "../middlewares/errorhandler.js";
import { tasks } from "../models/task.js";



export const newTask = async(req,res,next) =>{
    try {
        const {title , description} = req.body;

    const TaskOne = await tasks.create({title, description,user : req.user})

    res.status(201).json({
        success : true,
        TaskOne,
    })
    } catch (error) {
        next(error);
    }
}


export const getMyTask = async (req,res,next) => {
   try {
    const {_id} = req.user ;
    console.log(_id)
    const allTasks = await tasks.find({user : _id});
    console.log(allTasks)
    if(!allTasks)
    {
        res.json({
            success : false,
            message : "Tasks not found"
        })
    }

    res.json({
        success : true,
        allTasks,
    })
   } catch (error) {
        next(error);
   }
}


export const updateTask =  async (req,res) => {
    try {
        const task = await tasks.findById(req.params.id);
    task.isCompleted = !task.isCompleted;
    await task.save();
    
    res.json({
        success : true,
        message : "task updated",
        task
    })  
    } catch (error) {
        next(error); 
    }  

}


export const deleteTask =  async (req,res,next) => {
    
    try {
        const task = await tasks.findById(req.params.id);
    await task.deleteOne();
    res.json({
        success : true,
        message : "task deleted"
    })    

    } catch (error) {
        next(error);
    }
}