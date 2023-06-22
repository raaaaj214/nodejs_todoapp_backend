import express from "express";
import { app } from "./app.js";


app.get("/" , (req,res) => {
    res.send("Hello")
})
app.listen(3000, () =>{
    console.log(`Server is running on port ${process.env.PORT} in  ${process.env.NODE_ENV} Mode`)
})

