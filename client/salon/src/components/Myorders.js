import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom';

document.getElementById("")

let bookings=[];
let onCancel=false;

let jwt;
const Myorders = () => {
  let [bookings,setBookings]=useState([]);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const navigate=useNavigate();

  if(Cookies.get("jwtToken"))
    {
  jwt=Cookies.get("jwtToken");
    }
    else{
      navigate("/login");
    }

  
  
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    })
  }

  
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    
    return(() => {
        window.removeEventListener('resize', setDimension);
    })
  }, [screenSize])

  const getAll=()=>{axios({
    headers:{"Content-Type":"application/json"},
    method:"POST",
    credentials:"include",
    url:"http://localhost:5000/api/salon/getallappointments",
    data:{
      jwt
    }
  }).then((response)=>{
    console.log(response);
    setBookings(response.data);
    //bookings=response.data;
  });}



  return (
  <>
  <Navbar/>
   <div>
        {screenSize.dynamicWidth>700?(<>
        <div className="max-w-4xl mx-auto w- p-4 sm:p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">My Services</h1>
      {bookings.length === 0 ? (
       <p className="text-center text-gray-500"></p>
      ) : (
        <div className="overflow-x-auto sm:flex-wrap">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Order ID</th>
                <th className="py-2 px-4 border-b">Service Name</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Time Slot</th>
                <th className="py-2 px-4 border-b">Stylist</th>
                {/*<th className="py-2 px-4 border-b">Price</th>*/}
                {/*<th className="py-2 px-4 border-b">Action</th>*/}
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.orderId} className="text-center">
                  <td className="py-2 px-4 border-b">{booking._id}</td>
                  <td className="py-2 px-4 border-b">{booking.service}</td>
                  <td className="py-2 px-4 border-b">{booking.date}</td>
                  <td className="py-2 px-4 border-b">{booking.date}</td>
                  <td className="py-2 px-4 border-b">{booking.stylist}</td>
                  {/*<td className="py-2 px-4 border-b">{booking.price}</td>*/}
                  <td className="py-2 px-4 border-b">
                    {/*<button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                      onClick={() => onCancel(booking.orderId)}
                    >
                      Request Cancellation
                    </button>*/}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div></>):(<>
      <div className="mx-auto w-screen p-4 bg-white shadow-lg rounded-lg">
  <h1 className="text-xl font-bold text-center mb-4">My Services</h1>
  {bookings.length === 0 ? (
    <p className="text-center text-gray-500">No booked services</p>
  ) : (
    <div className="overflow-x-auto">
      <div className="border-t border-gray-200">
        {bookings.map((booking) => (
          <div key={booking.orderId} className="p-4 border-b border-gray-200">
            <p className="text-gray-600 mb-2"><span className="font-bold">Order ID:</span> {booking.orderId}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Service Name:</span> {booking.serviceName}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Date:</span> {booking.date}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Time Slot:</span> {booking.timeSlot}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Stylist:</span> {booking.stylistName}</p>
            <p className="text-gray-600 mb-2"><span className="font-bold">Price:</span> {booking.price}</p>
            <div className="text-center mt-4">
              {/*<button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={() => onCancel(booking.orderId)}
              >
                Request Cancellation
              </button>*/}
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
    </>)}
        
    </div>
    <div className='flex flex-col items-center '>
      <div className='self-center p-7 m-3'>
      <button onClick={getAll}>VIEW</button>
      </div>
    </div>
    
    
  </>
  
    
  );
};

export default Myorders;


