const mongoose=require("mongoose");
const hairStyleSchema=mongoose.Schema({
    name:{
        type:String
    },
    ratings:{
        type:String
    },
});

module.exports=mongoose.model("haircuts",hairStyleSchema);