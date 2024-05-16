const mongoose=require("mongoose");
const loginSchema=mongoose.Schema({
    fname:{
        type:String,
        require:[true,"please Enter first name"],
    },
    lname:{
        type:String,
        require:[true,"please Enter last name"],
    },
    email:{
        type:String,
        require:[true,"Please Enter Email"],
    },
    phone:{
        type:String,
        require:[true,"Please Enter phone"],
    },
    password:{
        type:String,
        require:[true,"please the password"],
    },
    gender:{
        type:String,
        require:[true,"please gender"],
    },
    accessToken:[{
        type:String,
    }],
});

module.exports=mongoose.model("customers",loginSchema);


