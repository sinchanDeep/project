import React from 'react'
import Navbar from '../components/Navbar'
import AppointmentForm from './AppointmentForm'
import axios from "axios";


const maleServices = [
  { name: "Men's Haircut", price: "₹300", description: "A classic haircut for men, tailored to your preferences." },
  { name: "Men's Manicure", price: "₹200", description: "Groom your nails with our professional manicure services." },
  { name: "Men's Pedicure", price: "₹250", description: "Relax and pamper your feet with our pedicure treatment." },
  { name: "Beard Trim", price: "₹150", description: "Get your beard shaped and styled to perfection." },
  { name: "Hot Towel Shave", price: "₹200", description: "Experience the luxury of a traditional hot towel shave." },
  // Add more services for men here
];

const femaleServices = [
  { name: "Women's Haircut", price: "₹350", description: "Transform your look with a stylish haircut designed for women." },
  { name: "Women's Manicure", price: "₹250", description: "Indulge in our manicure services to keep your nails looking fabulous." },
  { name: "Women's Pedicure", price: "₹300", description: "Treat your feet to a relaxing pedicure session for soft and smooth skin." },
  { name: "Hair Coloring", price: "₹400", description: "Add a pop of color to your hair with our professional hair coloring service." },
  { name: "Hair Styling", price: "₹300", description: "Let our experts style your hair for any occasion, from casual to glamorous." },
  // Add more services for women here
];

axios({
  headers:{"Content-Type":"application/json"},
  method:"GET",
  credentials:"include",
  url:"http://localhost:5000/api/salon/getprice",
}).then((response)=>{
  console.log(response.data);
});

const ServicePrice = () => {
  return (
    <>
        <Navbar/>
        {/*<div className='flex flex-col content-center justify-center'>
            <div className='border-black-700'>
                <img className='w-full' src="images/priceWomen.png"/>
            </div>
            <div className='mt-9'>
              <img className ='w-full'src="images/hairCareWoman.jpg"/>
            </div>
            <div className=''>
              <img className='w-full' src="images/hairStyleWomanPrice.jpg"/>
            </div>
            <div>
              <img className='w-full' src="images/womanColor.jpg"/>
            </div>
            <div>
              <img className='w-full' src='images/womanTexture.jpg'/>
            </div>
            <div>
              <img className='w-full' src='images/womanHairTreatment.jpg'/>
            </div>
        </div>*/}
          <div className="container mx-auto py-8">
      <h1 className="text-5xl font-bold mb-8 text-center text-blue-800 leading-tight bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">Price Menu</h1>
      
      <div className="grid grid-cols-1 gap-8">
        <div className="rounded-lg bg-gradient-to-b from-pink-400 to-purple-500 shadow-lg">
          <div className="px-6 py-4">
            <h2 className="text-3xl font-semibold mb-4 text-white">Men Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maleServices.map((service, index) => (
                <div key={index} className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transform transition duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-blue-500 font-semibold mb-2">{service.price}</p>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="rounded-lg bg-gradient-to-b from-indigo-400 to-blue-500 shadow-lg">
          <div className="px-6 py-4">
            <h2 className="text-3xl font-semibold mb-4 text-white">Women Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {femaleServices.map((service, index) => (
                <div key={index} className="border rounded-lg p-4 bg-white shadow-md hover:shadow-lg transform transition duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-pink-500 font-semibold mb-2">{service.price}</p>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

        <AppointmentForm/>
    </>
  )
}

export default ServicePrice
