import express from "express";
import { getAllUser, getUserByID , register, login, getMyProfile, logout} from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

 const router = express.Router();


router.get("/me" , isAuthenticated ,getMyProfile)
router.get("/logout" , isAuthenticated ,logout)
router.get("/all" , getAllUser)
router.get("/:id" , getUserByID)


router.post("/register" , register)
router.post("/login" , login)

export default router;