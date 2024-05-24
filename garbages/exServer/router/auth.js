const express=require("express");
const router=express.Router();

require("../db/conn");
const user=require("../models/userSchema");

router.get('/',(req,res)=>{
    res.send("hello from router");
});

router.post('/register',(req,res)=>{
    const {name,email,phone} =req.body;
   
   
    if(!name||!email||!phone)
        {
            console.log(name);
            return res.status(422).json({error:"Enter all fields"});
        }
    
    user.findOne({email:email}).then((userExists)=>{
        if(userExists)
            {
            //return res.status(422).json({error:"Email already exists"});
        }
        const newUser=new user({name,email,phone});
        newUser.save().then(()=>
            {
                res.status(201).json({message:"successfully inserted"});
            }).catch((err)=>
            res.status(500).json({error:"failed to register"}));
        
    }).catch(err=>{console.log(err);});
});

router.get('/contact',(req,res)=>{
    res.send("Hello contact router")
});

router.get('/signin',(req,res)=>{
    res.send("Hello sign in router")
});

router.get('/about',(req,res)=>{
    res.send("Hello sign up router")
});


module.exports=router;