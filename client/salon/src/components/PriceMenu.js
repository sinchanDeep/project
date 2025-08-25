import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AppointmentForm from "./AppointmentForm";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const PriceMenu = () => {
  const navigate = useNavigate();
    const location = useLocation();
    let heading = location.state.heading;
    let gender = location.state.gender;
    const [serviceAndPrice,setServiceAndPrice] = useState({});
    //a api request to get all the service and price with it
    useEffect(()=>{
      try{
        axios({
          headers:{"Content-Type":"application/json"},
          method:"POST",
          credentials:"include",
          url:"http://192.168.1.103:5000/api/salon/getprice",
          data:{
            heading,
            gender
          }
          
        }).then((res)=>{
          //console.log(res.data[0].price);
          setServiceAndPrice(res.data[0].price);
        })

      }catch(err){
        console.log(err);
      }
    },[]); 

    //method to handle selection
    const handleSelect = (event) => {
      //alert(event);
      const data = event.currentTarget.getAttribute("data-value");
      //console.log(data);
      navigate("/booking",{ state : { data }});

    }

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-8">
        <h1 className="text-5xl font-bold mb-8 text-center text-blue-800 leading-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">
          {heading}
        </h1>
      
     
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
           {Object.entries(serviceAndPrice).map(([key,value],index) => (
          <div data-value={key+"~"+value} onClick={(event) => {handleSelect(event)}} className="rounded-lg bg-gradient-to-b from-pink-400 to-purple-500 shadow-lg w-full">
            <div className="px-6 py-4 h-full w-full">
             
              
                <div className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transform transition duration-300 hover:-translate-y-1 w-full h-full cursor-pointer">
                  <h3 className="text-xl font-semibold mb-2">
                    {key}
                  </h3>
                  <p className="text-blue-500 font-semibold mb-2">
                    {value}
                  </p>
                  <p className="text-gray-600">desc</p>
                </div>
              
            </div>
          </div>
             ))
            }
        </div>
      
      </div>

    </>
  );
};

export default PriceMenu;
