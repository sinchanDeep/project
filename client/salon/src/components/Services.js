import React from 'react'
import ServicesFemale from '../components/ServicesFemale'
import Navbar from '../components/Navbar'
import {useState} from 'react'
import ServiceMale from '../components/ServiceMale'
import ServiceCss from '../stylesheets/Service.module.css';




const Services = () => {
  const [Active,setActive]=useState("female");

  return (

    <>
    
      <Navbar/>
      <div id={ServiceCss.page} className="flex flex-col gap-4">
          <div className='self-center'>
            <img src="images/carousel.jpg"></img>
          </div>
          <div className="flex flex-col md:flex-row self-center gap-3 mt-5 pt-6">
            <div>
              <button id="male" class="btn1" onClick={()=>{setActive("male")}}>Service For Him</button>
            </div>
            <div>
              <button id="female" class="btn1" onClick={()=>{setActive("female")}}>Service For Her</button>
            </div>
          </div>
          </div>
          {Active=="female"?<div><ServicesFemale/></div>:<div><ServiceMale/></div>}   
    </>
    
  )
}

export default Services
