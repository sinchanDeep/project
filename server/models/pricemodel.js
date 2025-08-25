
const mongoose=require("mongoose");
const pricemodel=mongoose.Schema({
    style:{
        type:String
    },
    price:{
        type:{}
    },
});

module.exports=mongoose.model("prices",pricemodel);