const mongoose=require("mongoose");
const allappointmentsSchema=mongoose.Schema({
    custName:{
        type:String
    },
    custNo:{
        type:String
    },
    date:{
            type:String
    },
    mail:{
        type:String
    },
    service:{
        type:String
    },
    stylist:{
        type:String
    },
    jwt:{
        type:String
    }
});
module.exports=mongoose.model("allappointments",allappointmentsSchema);