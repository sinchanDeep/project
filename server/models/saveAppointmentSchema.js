const mongoose=require("mongoose");
const saveAppointmentSchema=mongoose.Schema({
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
    }
    
});
module.exports=mongoose.model("appointments",saveAppointmentSchema);