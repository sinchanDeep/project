const mongoose=require("mongoose");

const db=process.env.CONNECTION_STRING;

mongoose.connect(db).then(()=>{
    console.log("connection succesful")
}).catch((err)=>{
    console.log("no connection",err)
});
