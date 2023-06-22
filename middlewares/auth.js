import jwt from "jsonwebtoken"
import { user } from "../models/user.js";

export const isAuthenticated = async (req,res,next) =>{
    const {token} = await req.cookies;
    if(!token)
    {
        res.json({
                success : false,
                message : "You need to login first"
            })
    }
    else
    {

        const id = jwt.verify(token,process.env.JWT_SECRET)

        req.user = await user.findById(id);
        next();
    }
}