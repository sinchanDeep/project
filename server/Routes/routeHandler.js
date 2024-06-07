//this file is basically taking all the request from the client to proper api functions
const express=require("express");
const router=express.Router();
const {createUser}=require("../controller/controller");
const {getUser}=require("../controller/controller");
const {checkUser}=require("../controller/controller");
const {getHairStylists}=require("../controller/controller");
const {getHairColorArtists}=require("../controller/controller");
const {getHairSpaStylists}=require("../controller/controller");
const {getHairStraightStylists}=require("../controller/controller");
const {getKeratinStylists}=require("../controller/controller");
const {saveAppointment}=require("../controller/controller");
const {checkappointment}=require("../controller/controller");
const {ForgotPassword}=require("../controller/controller");
const {generateotp}=require("../controller/controller");
const {getallappointments}=require("../controller/controller");
const validateToken = require("../middleware/validateToken");





//router.route("/").get(getUser);

router.route("/register").post(createUser);
router.route("/login",validateToken).post(getUser);
router.route("/").post(checkUser);
router.route("/getHairStylists").get(getHairStylists);
router.route("/getHairColourStylists").get(getHairColorArtists);
router.route("/getHairSpaStylists").get(getHairSpaStylists);
router.route("/getHairStraightStylists").get(getHairStraightStylists);
router.route("/getKeratinStylists").get(getKeratinStylists);
router.route("/saveappointment").post(saveAppointment);
router.route("/checkappointment").post(checkappointment);
router.route("/ForgotPassword").post(ForgotPassword);
router.route("/generateotp").post(generateotp);
router.route("/getallappointments").post(getallappointments);

module.exports=router;
