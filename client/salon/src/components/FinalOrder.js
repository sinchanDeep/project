import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';



const FinalOrder = () => {
    const navigate=useNavigate();
    const location=useLocation();
    const placeOrder=()=>{
      if(window.confirm("Are you sure to place order"))
        {
      
      let custName,custNo,date,mail,service,stylist;
      custName=location.state.appData[0].name;
      custNo=location.state.appData[0].custno;
      date=location.state.appData[0].date;
      mail=location.state.appData[0].email;
      service=location.state.appData[0].service;
      stylist=location.state.appData[0].stylist;
      const jwt=Cookies.get("jwtToken");
    
      axios({
        headers:{"Content-Type":"application/json"},
        method:"POST",
        credentials:"include",
        url:"http://localhost:5000/api/salon/saveappointment",
        data:{
          custName,
          custNo,
          date,
          mail,
          service,
          stylist,
          jwt
        }
      }).then((response)=>{
        console.log(response.data);
        if(response.data=="exists")
          {
            alert("the appointment already exists");
            navigate("/Services");
          }
          else{
            alert("order placed successfully");
            navigate("/Services");
          }
      });
    }else{
      alert("order has been cancelled");
    }
    }

  return (
    <>
      {console.log(location.state.appData[0].name)}
      <div className='flex flex-col'>
          <div className='self-center m-5'>
            <h1 className='text-4xl font-sans'>ORDER DETAILS </h1>
          </div>
          <div className='self-center m-2'>
            <h1 className='text-2xl font-sans'>Customer Name: {location.state.appData[0].name} </h1>
          </div>
          <div className='self-center m-2'>
            <h1 className='text-2xl font-sans'>Customer Number: {location.state.appData[0].custno} </h1>
          </div>
          <div className='self-center m-2'>
            <h1 className='text-2xl font-sans'>Customer Mail: {location.state.appData[0].email} </h1>
          </div>
          <div className='self-center m-2'>
            <h1 className='text-2xl font-sans'>Appointment Data: {location.state.appData[0].date} </h1>
          </div>
          <div className='self-center m-2'>
            <h1 className='text-2xl font-sans'>Service Name: {location.state.appData[0].service} </h1>
          </div>
          <div className='self-center m-2'>
            <h1 className='text-2xl font-sans'>Stylist Name: {location.state.appData[0].stylist} </h1>
          </div>
          <div className='self-center m-6'>
            <button onClick={placeOrder}>ORDER</button>
          </div>
      </div>
    </>
  )
}

export default FinalOrder
