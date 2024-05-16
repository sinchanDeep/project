//created an express server
const express=require("express");
const App=express();
const dotenv=require("dotenv").config();
const errorHandler=require("./middleware/errorHandler");
const connectDb=require("./config/connectDb");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const port=process.env.PORT;


//cors middleware
App.use(cors());


//json middleware
App.use(express.json());


//receiving request from the client
App.use("/api/salon",require("./Routes/routeHandler"));

//error handler middleware
App.use(errorHandler);

//cookie parser
App.use(cookieParser);


//database connection
connectDb();



//server listening
App.listen(port,()=>{
    console.log("Server is Listening at: ",port);
})
