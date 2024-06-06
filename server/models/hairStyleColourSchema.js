const mongoose=require("mongoose");
const hairStyleColourSchema=mongoose.Schema({
    name:{
        type:String
    },
    ratings:{
        type:String
    },
});

module.exports=mongoose.model("haircolors",hairStyleColourSchema);