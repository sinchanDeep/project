import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const Booking = () => {
    const location = useLocation();
    const data = location.state.data ? location.state.data : "";
    const details = {
        "serviceName":data.split("~")[0],
        "servicePrice":data.split("~")[1]
    };
    console.log(details);
   
    
  return (
    <>
      <div className='h-screen w-full'>
          <form>
            <div className=''>
              <input type="text"/>
            </div>
          </form>
      </div>
    </>
  )
}

export default Booking
