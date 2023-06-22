import { tasks } from "../models/task.js";

export const exist = async(req,res,next) => {

    const task = await tasks.findById(req.params.id);
    console.log("HURRAY")
    if(!task)
    {
        res.json({
            success : false,
            message : "task doesn't exist"
        })
    }
    else
    {
    next();
    }
}