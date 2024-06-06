import React from 'react'
import Navbar from '../components/Navbar'
import AppointmentForm from './AppointmentForm'

const ServicePrice = () => {
  return (
    <>
        <Navbar/>
        <div className='flex flex-col content-center justify-center'>
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
        </div>
        <AppointmentForm/>
    </>
  )
}

export default ServicePrice
