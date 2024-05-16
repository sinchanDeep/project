import React from 'react'

const Appointment = () => {
  return (
    <>
        <section className='flex flex-col bg-blue-100 gap-5'>
            <div><h4>Booking</h4></div>
            <div><h1>Make An Appointment</h1></div>
            <div className='flex flex-row gap-2'>
                <div>
                    <input className="m-4 h-11 w-60 text-center rounded-md" type="text" placeholder="your name"/>
                    <input className="m-4 h-11 w-60 text-center rounded-md" type="date" placeholder='DD-MM-YYYY'/>
                    
                </div>
                <div>
                <input className="m-4 h-11 w-60 text-center rounded-md" type="number" placeholder='mobile number'/>
                <input className="m-4 h-11 w-60 text-center rounded-md" type="email" placeholder='Email'/>
                <div classsName="">
                    <textarea className="m-4 w-80 h-40"></textarea>
                </div>
                </div>
                <div>
                    <img src="images/girl.png"/>
                </div>
                
            </div>
        </section> 
    </>
  )
}

export default Appointment
