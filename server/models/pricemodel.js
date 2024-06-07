
mongoose=require("mongoose");
const pricemodel=mongoose.Schema({
    service:{
        type:String
    },
    price:{
        type:String
    },
});

module.exports=mongoose.model("prices",pricemodel);