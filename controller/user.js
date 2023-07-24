import express from "express"
import { user} from "../models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { sendCookie } from "../utils/features.js"




export const getAllUser = async (req,res) =>{

    const users = await user.find({})
    res.json({
        success: true,
       users,
    })
}

export const getMyProfile = async (req,res) =>{

   
        
    res.json({
        success  : true,
       user :  req.user,
    })                                                                                                                                             

    
}



export const getUserByID = async(req,res)=> {
        const {id} =  await req.params
        const userData = await user.findById(id);
        res.json(   
            {
                success : true,
                userData
            }
            );
}




export const register = async(req,res) => {
    const {name,email,password} = req.body
    
    const User = await user.findOne({email});
    
    if(User)
    {
    return  res.status(200).json(
        {
            success: false,
            message : "User already exist"
        }
        )
    }
    const Name = name || User123
    const hassPassword = await bcrypt.hash(password,12)
    const UserOne = await user.create({name,email,password : hassPassword})
    
    sendCookie(UserOne,req,res, "Registered Successfully");
    
}



export const login = async(req,res) => {
    const {email,password} = req.body;
    const User = await user.findOne({email}).select("+password")
    if(!User)
    {
        return  res.status(200).json(
            {
                success: false,
            message : "Invalid email or password"
        }
    )
}

const isMatch = await bcrypt.compare(password,User.password);

if(!isMatch)
{
    return  res.status(200).json(
        {
            success: false,
            message : "Invalid email or password"
        }
    )
}

sendCookie(User,req,res,`Welcome Back , ${User.name} !!!`)
}


export const logout = async(req,res) => {

    await res.cookie("token",null,{
        sameSite : process.env.NODE_ENV === "dev" ? "lax" : "none",
        secure : process.env.NODE_ENV === "dev" ? false : true,
        expires : new Date(Date.now())
    })
    res.json({
        success : true,
        message : "logged out successfully",
        sameSite : "none",
        secure : true,
    })
}
