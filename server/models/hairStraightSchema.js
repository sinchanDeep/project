const mongoose=require("mongoose");
const hairStraightSchema=mongoose.Schema({
    name:{
        type:String
    },
    ratings:{
        type:String
    },
});

module.exports=mongoose.model("straightenings",hairStraightSchema);