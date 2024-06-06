import React from 'react'
import Stylist from '../components/Stylist';
import { useState } from 'react';
import axios from 'axios';
//import { useNavigate } from 'react-router-dom';


const AppointmentForm = () => {
  let [service,setService]=useState("");
  let[custName,setcustName]=useState("");
  let[custNo,setcustno]=useState("");
  let[appDate,setappdate]=useState("");
  let[mail,setMail]=useState("");

  const setTheService=()=>{
    var select=document.getElementById("servicess").value;
    setService(select);  
    setcustName(document.getElementById("First_Name").value);
    setcustno(document.getElementById("Mobile_Number").value);
    setappdate(document.getElementById("dates").value);
    setMail(document.getElementById("Email_Id").value);
  }

  
  const getHairStylists=()=>{
    setService("HAIRSTYLE");
  }

  const getHairColourStylists=()=>{
    setService("HAIRCOLOUR");
  }

  const getHairSpaStylists=()=>{
    setService("HAIRSPA");
  }

  const getHairStraightStylists=()=>{
    setService("HAIRSTRAIGHTENING");
  }

  const getKeratinStylists=()=>{
    setService("KERATINSERVICE");
  }

  
  return (
    <>

      <div className="bg-p1 max-w-7xl max-h-max m-auto p-2 sm:flex-col flex flex-row border-black" >
        <div className=" mb-3 px-10 py-10 w-100 ">
          <h3 className="text-left  ">BOOKINGS</h3>
          <br />
          <h5 className="text-left text-txt1 font-serif text-4xl mb-10">
            Make An Appointment
          </h5>
          <form className="w-full max-w-2xl ml-2 ">
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="First_Name"
                ></label>
                {/*border border-red-500 rounded */}
                <input
                  className="appearance-none block w-full  text-gray-700 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="First_Name"
                  type="text"
                  placeholder="YOUR NAME"
                />
                {/*bg-gray-200
              < p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            */}
              </div>
              <div className="w-full  md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="Mobile_Number"
                ></label>
                <input
                  className="appearance-none block w-full  text-gray-700  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="Mobile_Number"
                  type="text"
                  placeholder="MOBILE NUMBER"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="date"
                ></label>
                <input
                  className="appearance-none block w-full  text-gray-400  py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="dates"
                  type="datetime-local"
                  placeholder="hello"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="Email_Id"
                ></label>
                <input
                  className="appearance-none block w-full  text-gray-700  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="Email_Id"
                  type="text"
                  placeholder="EMAIL ID"
                />
              </div>
            </div>
  <label htmlFor="services" className="block "></label>
  <select onChange={setTheService} id="servicess" className=" bg-white text-gray-400 dark:text-gray-400 h-14 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>CHOOSE A SERVICE</option>
    <option value="hairCut">Hair Cuts & Styling</option>
    <option value="hairColour">Hair Colouring & Highlights</option>
    <option value="hairSpa">Hair Spa</option>
    <option value="hairStraightening">Hair Straightening</option>
    <option value="keratinService">Keratin Service</option>
  </select>
  {
    service=="hairCut"?getHairStylists():null
  }
  {
    service=="hairColour"?getHairColourStylists():null
  }
  {
    service=="hairSpa"?getHairSpaStylists():null
  }
  {
    service=="hairStraightening"?getHairStraightStylists():null
  }
  {
    service=="keratinService"?getKeratinStylists():null
  }

           
           
          </form>
        </div>
        <div className="w-3/4 sm:items-center"> 
            <img className="m-auto" src="images/woman.jpg" width="800"  alt="girl image" />
        </div>
      </div>
      <div className="w-30 h-10"></div> 
      {
          service=="HAIRSTYLE"?<><Stylist service={service} custName={custName} custNo={custNo} appDate={appDate} mail={mail} /></>:null
      }
      {
        service=="HAIRCOLOUR"?<><Stylist service={service} custName={custName} custNo={custNo} appDate={appDate} mail={mail}/></>:null
      }
      {
        service=="HAIRSPA"?<><Stylist service={service} custName={custName} custNo={custNo} appDate={appDate} mail={mail}/></>:null
      }
      {
        service=="HAIRSTRAIGHTENING"?<><Stylist service={service} custName={custName} custNo={custNo} appDate={appDate} mail={mail}/></>:null
      }
      {
        service=="KERATINSERVICE"?<><Stylist service={service} custName={custName} custNo={custNo} appDate={appDate} mail={mail}/></>:null
      }
       {/*<div>
              <button type="button" class=" mt-10 p-4 text-black border-gray border-2 ">
                ORDER NOW
              </button>
    </div>*/}
              
    </>
    
  )
  
}



export default AppointmentForm
