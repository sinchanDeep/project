const mongoose=require("mongoose");
const hairSpaSchema=mongoose.Schema({
    name:{
        type:String
    },
    ratings:{
        type:String
    },
});

module.exports=mongoose.model("hairspas",hairSpaSchema);