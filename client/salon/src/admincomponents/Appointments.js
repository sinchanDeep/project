import React from 'react'
import axios from "axios"

let bookings=[];
axios({
  headers:{"Content-Type":"application/json"},
  method:"POST",
  credentials:"include",
  url:"http://localhost:5000/api/salon/getAllAppointment"
}).then((response)=>{
  console.log(response.data);
  bookings=response.data;
});


const Appointments = () => {
  return (
    <>
        {bookings.map((booking) => (
          <div key={booking.orderId} className="p-4 border-b border-gray-200">
            <p className="text-gray-600 mb-2"><span className="font-bold">Customer Name:</span> {booking.custName}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Order ID:</span> {booking._id}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Service Name:</span> {booking.service}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Date:</span> {booking.date}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Time Slot:</span> {booking.date}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Stylist:</span> {booking.stylist}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Service:</span> {booking.service}</p>
            <div className="text-center mt-4"></div>
            </div>         
       )) }
    </>
  )
}

export default Appointments
