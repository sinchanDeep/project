import React from 'react'
import axios from "axios"
let services=[];
axios({
  headers:{"Content-Type":"application/json"},
  method:"GET",
  credentials:"include",
  url:"http://localhost:5000/api/salon/getallservices"
}).then((response)=>{
  console.log(response.data);
  services=response.data;
});
const update=(id)=>{
  axios({
    headers:{"Content-Type":"application/json"},
    method:"POST",
    credentials:"include",
    url:"http://localhost:5000/api/salon/updateService",
    body:{
      id
    }
    }).then((response)=>{
    console.log(response.data);   
  })
}
const Services = () => {
  return (
    <>
      {services.map((e) => (
          <div  className="p-4 border-b border-gray-200">
            <p className="text-gray-600 mb-2"><span className="font-bold">Service:</span> {e.service}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Price:</span> {e.price}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">gender:</span> {e.gender}</p>
            <div className="text-center mt-4"></div>
            </div>         
       )) }
    </>
  )
}

export default Services
