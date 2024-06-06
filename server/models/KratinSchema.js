const mongoose=require("mongoose");
const KratinSchema=mongoose.Schema({
    name:{
        type:String
    },
    ratings:{
        type:String
    },
});

module.exports=mongoose.model("keratin",KratinSchema);