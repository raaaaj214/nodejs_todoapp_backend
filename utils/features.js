import jwt from "jsonwebtoken"
import express from "express"

export const sendCookie = (UserOne,req,res,message) => {
    const token = jwt.sign({
        _id : UserOne._id
    }, process.env.JWT_SECRET)
    res.status(201).cookie("token",token , {
        httpOnly : true,
        maxAge : 1000*60*15,
        sameSite : process.env.NODE_ENV === "dev" ? "lax" : "none",
        secure : process.env.NODE_ENV === "dev" ? false : true,
    } ).json(
        {
            success : true,
            message : message
        }
    )
}