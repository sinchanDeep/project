//this file is basically taking all the request from the client to proper api functions
const express=require("express");
const router=express.Router();
const {createUser}=require("../controller/controller");
const {getUser}=require("../controller/controller");
const {checkUser}=require("../controller/controller");
const validateToken = require("../middleware/validateToken");



//router.route("/").get(getUser);

router.route("/register").post(createUser);
router.route("/login",validateToken).post(getUser);
router.route("/").post(checkUser);

module.exports=router;
