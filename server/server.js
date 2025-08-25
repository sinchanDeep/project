//created an express server
const express=require("express");
const App=express();
const dotenv=require("dotenv").config();
const errorHandler=require("./middleware/errorHandler");
const connectDb=require("./config/connectDb");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const port=process.env.PORT;

const corsOptions = {
    origin: '*', //'http://localhost:3000',http://192.168.1.102:3000 // React app's origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // Allow credentials (if you're using cookies, for example)
  };

//cors middleware
App.use(cors(corsOptions));


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
App.listen(port,'0.0.0.0',()=>{
    console.log("Server is Listening at: ",port);
})
