const jwt=require("jsonwebtoken");

//api functions 
const asyncHandler=require("express-async-handler");
const customers=require("../models/loginSchema");
const e = require("express");
const bcrypt=require("bcrypt");

//@desc creates a new user
//@route get/api/salon/register
//@access public
const createUser= asyncHandler( async(req,res)=>{
    let {fname,lname,email,phone,password,gender}=req.body;
    if(!fname||!lname||!email||!phone||!password,!gender)
    {
        res.status(400);
        throw new Error("Enter all the fields");
    }
    const existCustomer=await customers.findOne({email})
    if(existCustomer){
        res.send("not");
        return;
       
    }
    password=await  bcrypt.hash(password,12);
    const customer=await customers.create({
        fname,
        lname,
        email,
        phone,
        password,
        gender
    });
    res.status(200).json(customer);
});

//@desc checks if the user is registered or not
//@route get/api/salon/login
//@access public
const getUser=asyncHandler( async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    if(!email||!password)
        {
            throw new Error("Please enter all the fields");
        }
    const user=await customers.findOne({email});
    if(user)
        {
           
            if((await bcrypt.compare(password,user.password)))
                {            
                    //generating jwt token
                    const accessToken=jwt.sign({
                    user:{
                         mail:email,
                        pass:password,
                        },
                }, process.env.ACCESS_TOKEN_SECRET
                );  
                    const upd=await customers.findByIdAndUpdate(user._id,{accessToken:accessToken},{new:true,runValidatord:true})
                    /*res.cookie("jwtToken",upd.accessToken[0], {
                        expires:new Date(Date.now()+ 25892000000),
                        httpOnly:true,
                    });*/
                    res.status(200).json(upd.accessToken[0]);                
                }
            else
            {
            res.json("unsuccessful");
            }
        }
        else
        {
            res.json("unsuccessful");
            
        }
});

//@desc checks if user logged in or not
//@route get/api/salon
//@access public
const checkUser = asyncHandler (async(req,res)=>{
    const tkn=req.body;
    //const tkn=JSON.stringify(accessToken);
    //console.log(tkn);
    const user=await customers.findOne({accessToken:tkn});
    if(user){
        res.json("logged");
    }
    else{
        res.json("notlogged");
    }

});

module.exports={ createUser, getUser, checkUser};