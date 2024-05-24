const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv")
const cors=require("cors");


const App=express();

App.use(cors());

dotenv.config({path:"./.env"});
require("./db/conn");
App.use(express.json());

//const User=require("./models/userSchema");

App.use(require("./router/auth"))

//middleware
const middleware=(req,res,next)=>{
    console.log("hello");
    next();

}






App.listen(process.env.PORT,(req,res)=>{
    console.log("Server is listening");
})
