import React from 'react'
import axios from "axios"

let emp=[];
axios({
  headers:{"Content-Type":"application/json"},
  method:"get",
  credentials:"include",
  url:"http://localhost:5000/api/salon/getallemployees"
}).then((response)=>{
  console.log(response.data);
  emp=response.data;
})
const Employee = () => {
  return (
    <>
       {emp.map((e) => (
          <div  className="p-4 border-b border-gray-200">
            <p className="text-gray-600 mb-2"><span className="font-bold">Employee Id:</span> {e._id}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Employee Name:</span> {e.name}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Ratings:</span> {e.ratings}</p>
            <div className="text-center mt-4"></div>
            </div>         
       )) }
      
    </>
  )
}

export default Employee
