import express from "express";
import { newTask, getMyTask , updateTask, deleteTask} from "../controller/task.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { exist } from "../middlewares/exist.js";

const router = express.Router();

router.get("/gettask", isAuthenticated,getMyTask);


router.post("/newtask", isAuthenticated ,newTask)
router.route("/:id").put(exist,updateTask).delete(exist,deleteTask)

export default router;