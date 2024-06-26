const jwt = require("jsonwebtoken");
var nodemailer = require("nodemailer");
const uniqid = require("uniqueid");
const sha256=require("sha256");
//api functions
const asyncHandler = require("express-async-handler");
const customers = require("../models/loginSchema");
const haircuts = require("../models/hairStyleSchema");
const haircolors = require("../models/hairStyleColourSchema");
const hairspas = require("../models/hairSpaSchema");
const straightenings = require("../models/hairStraightSchema");
const keratin = require("../models/KratinSchema");
const appointments = require("../models/saveAppointmentSchema");
const allappointments = require("../models/allappointmentsSchema");
const pricess=require("../models/pricemodel");
const e = require("express");
const bcrypt = require("bcrypt");

//@desc creates a new user
//@route get/api/salon/register
//@access public
const createUser = asyncHandler(async (req, res) => {
  let { fname, lname, email, phone, password, gender } = req.body;
  if ((!fname || !lname || !email || !phone || !password, !gender)) {
    res.status(400);
    throw new Error("Enter all the fields");
  }
  const existCustomer = await customers.findOne({ email });
  if (existCustomer) {
    res.send("not");
    return;
  }
  password = await bcrypt.hash(password, 12);
  const customer = await customers.create({
    fname,
    lname,
    email,
    phone,
    password,
    gender,
  });
  res.status(200).json(customer);
});

//@desc checks if the user is registered or not
//@route get/api/salon/login
//@access public
const getUser = asyncHandler(async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password) {
    throw new Error("Please enter all the fields");
  }
  const user = await customers.findOne({ email });
  if (user) {
    if (await bcrypt.compare(password, user.password)) {
      //generating jwt token
      const accessToken = jwt.sign(
        {
          user: {
            mail: email,
            pass: password,
          },
        },
        process.env.ACCESS_TOKEN_SECRET
      );
      const upd = await customers.findByIdAndUpdate(
        user._id,
        { accessToken: accessToken },
        { new: true, runValidatord: true }
      );
      /*res.cookie("jwtToken",upd.accessToken[0], {
                        expires:new Date(Date.now()+ 25892000000),
                        httpOnly:true,
                    });*/
      res.status(200).json(upd.accessToken[0]);
    } else {
      res.json("unsuccessful");
    }
  } else {
    res.json("unsuccessful");
  }
});

//@desc checks if user logged in or not
//@route get/api/salon
//@access public
const checkUser = asyncHandler(async (req, res) => {
  const accessToken = req.body.tkn;
  //console.log(accessToken);
  const user = await customers.findOne({ accessToken });
  if (user) {
    res.json("logged");
  } else {
    res.json("notlogged");
  }
});

//@desc gets the stylists
//@route get/api/salon/getHairStylists
//@access public
const getHairStylists = asyncHandler(async (req, res) => {
  const stylists = await haircuts.find({});
  res.json(stylists);
});

//@desc gets the color stylists
//@route get/api/salon/getHairColorArtists
//@access public
const getHairColorArtists = asyncHandler(async (req, res) => {
  const stylists = await haircolors.find({});
  res.json(stylists);
});

//@desc gets the spa stylists
//@route get/api/salon/getHairColorArtists
//@access public
const getHairSpaStylists = asyncHandler(async (req, res) => {
  const stylists = await hairspas.find({});
  res.json(stylists);
});

//@desc gets the straightening stylists
//@route get/api/salon/getHairColorArtists
//@access public
const getHairStraightStylists = asyncHandler(async (req, res) => {
  const stylists = await straightenings.find({});
  res.json(stylists);
});

//@desc gets the keratin stylists
//@route get/api/salon/getHairColorArtists
//@access public
const getKeratinStylists = asyncHandler(async (req, res) => {
  const stylists = await keratin.find({});
  res.json(stylists);
});

//@desc stores the appointment
//@route get/api/salon/saveappointment
//@access public
const saveAppointment = asyncHandler(async (req, res) => {
  let { custName, custNo, date, mail, service, stylist, jwt } = req.body;
  const isExist = await appointments.findOne({
    custName,
    custNo,
    date,
    mail,
    service,
    stylist,
  });
  if (isExist) {
    res.json("exists");
  } else {
    const appointment = await appointments.create({
      custName,
      custNo,
      date,
      mail,
      service,
      stylist,
    });
    const allappointment = await allappointments.create({
      custName,
      custNo,
      date,
      mail,
      service,
      stylist,
      jwt,
    });
    if (appointment) {
      //sending an email
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "hairartistry333@gmail.com",
          pass: "nypn upan jovm rcrv",
        },
      });

      var mailOptions = {
        from: "hairartistry333@gmail.com",
        to: mail,
        subject: "Hair artistry appointment confirmation email",
        text: `your order for ${service} by ${stylist} at ${date} has been confirmed\nThank You for choosing Hair Artistry`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      res.json("ordered");
    } else {
      res.json("notordered");
    }
  }
});

//@desc checks if the appointment is there or not
//@route get/api/salon/checkappointment
//@access public
const checkappointment = asyncHandler(async (req, res) => {
  let { appDate, custStylist, service } = req.body;
  let stylist = custStylist;
  let date = appDate;
  const isExist = await appointments.findOne({ stylist, date, service });
  if (isExist) {
    res.json("exists");
  } else {
    res.json("notexists");
  }
});

//@desc checks if the appointment is there or not
//@route get/api/salon/checkappointment
//@access public
const getAppointment = asyncHandler(async (req, res) => {
  let { custNo, custName } = req.body;
  //let stylist=custStylist;
  //let date=appDate;
  const isExist = await appointments.find({ custNo, custName });
  if (isExist) {
    res.json(isExist);
  } else {
    res.json("notexists");
  }
});

//@desc updating the password
//@route get/api/salon/ForgotPassword
//@access public
const ForgotPassword = asyncHandler(async (req, res) => {
  let { mail, pass1 } = req.body;
  password = await bcrypt.hash(pass1, 12);
  let email = mail;
  const cust = await customers.updateOne({ email }, { password });
  res.json(cust);
});

//@desc creates the otp
//@rooute get/api/salon/generateotp
//@access public
const generateotp = asyncHandler(async (req, res) => {
  let email = req.body.email;
  let otp = parseInt(Math.random() * 100000);
  res.json(otp);
  //sending an email
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hairartistry333@gmail.com",
      pass: "nypn upan jovm rcrv",
    },
  });

  var mailOptions = {
    from: "hairartistry333@gmail.com",
    to: email,
    subject: "Password Reset Verification",
    text: `your otp for password resetting is ${otp}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
});

//@desc gets all appointments
//@route get/api/salon/getallappointments
//@access public
const getallappointments = asyncHandler(async (req, res) => {
  let { jwt } = req.body;
  const allapps = await allappointments.find({ jwt });
  res.json(allapps);
});

//@desc payment api
//@route get/api/salon/processpayment
//@access public
const processpayment = asyncHandler(async (req, res) => {
  res.send("hello");
});

//@desc gets all the price
//@route get/api/salon/getprice
//@access public
const getprice=asyncHandler(async(req,res)=>{
  const pricee=await pricess.find({});
  res.json(pricee);
});

//@desc gets all the appointments of a date
//@route get/api/salon/getallappointments
//@access public
const getAllAppointment=asyncHandler(async(req,res)=>{
  //const {selectedDate}=req.body;
  //let date=selectedDate;
  //console.log(date);
  //date="2024-06-06T10:43";
  const allApp=await appointments.find({})
  console.log(allApp);
  if(allApp){
    res.json(allApp);
  }else{
    res.json("norecords");
  }
})

//@desc get all services
//@route get/api/salon/getallservice
//@access public
const getallservice=asyncHandler(async(req,res)=>{
  let {service,price,gender}=req.body;
  console.log(service,price,gender);
  const alls=await pricess.create({
    service,
    price,
    gender
  });
  console.log(alls);
  res.json(alls);
});

//@desc get all employees
//@route get/api/salon/getallemployees
//@access public
const getallemployees=asyncHandler(async(req,res)=>{
  const allemp=await haircuts.find({});
  res.json(allemp);
});

//@desc get all the services
//@route get/api/salon/getallservices
//@access public
const getallservices=asyncHandler(async(req,res)=>{
  const allservices=await pricess.find({});
  res.json(allservices);
});

const updateservices=asyncHandler(async(req,res)=>{
  let id=req.body;
  //const updateService=await pricess.findByIdAndUpdate();
  res.send("updated");
});
module.exports = {
  createUser,
  getUser,
  checkUser,
  getHairStylists,
  getHairColorArtists,
  getHairSpaStylists,
  getHairStraightStylists,
  getKeratinStylists,
  saveAppointment,
  checkappointment,
  ForgotPassword,
  generateotp,
  getallappointments,
  processpayment,
  getprice,
  getAllAppointment,
  getallservice,
  getallemployees,
  getallservices,
  updateservices
};
