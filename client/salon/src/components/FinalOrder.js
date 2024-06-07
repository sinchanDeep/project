import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';
import Navbar from"../components/Navbar";
import { useEffect } from 'react';



const FinalOrder = () => {
    const navigate=useNavigate();
    const location=useLocation();
    //const placeOrder=()=>{
      
      
    
    //}
    
    const handlePrint = () => {
      window.print(); // Call the print function when the button is clicked
    };
  return (
    <>
    <Navbar/>
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100 pt-7">
    <div className="max-w-xl w-full bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <img src="images/logo-1.svg" alt="Salon Logo" className="h-12 w-auto" />
          <h1 className="text-3xl font-bold">Salon Receipt</h1>
        </div>
        <p className="text-gray-600 mb-4"></p>
        <div className="border-b border-gray-200 mb-4"></div>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Service</p>
          <p className="text-gray-800 font-semibold">{location.state.appData[0].service}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Price</p>
          <p className="text-gray-800 font-semibold">120</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Stylist</p>
          <p className="text-gray-800 font-semibold">{location.state.appData[0].stylist}</p>
        </div>
        <div className="border-b border-gray-200 mb-4"></div>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Total</p>
          <p className="text-gray-800 font-semibold">120</p>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handlePrint}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Print
          </button>
        </div>
      </div>
    </div>
    <footer className="mt-auto text-gray-600 text-center">
      © 2024 Hair Artistry. All rights reserved.
    </footer>
    
  </div>
    </>
  )
}

export default FinalOrder
