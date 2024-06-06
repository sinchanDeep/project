import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

let arr=[{
  name:"",
  ratings:""
},
{
  name:"",
  ratings:""
},
{
  name:"",
  ratings:""
}];
let appData=[];

  let url1,url2,url3;
  const Stylist = ({service,custName,custNo,appDate,mail}) => {
  const navigate=useNavigate();
  let [service1,setservice1]=useState(service);
  let [styistArray,setStyistArray]=useState(arr);


  //to get all the info about appointment
const getAppointment=(styler)=>{
  let custStylist=styler;
    axios({
      headers:{"Content-Type":"application/json"},
      method:"POST",
      credentials:"include",
      url:"http://localhost:5000/api/salon/checkappointment",
      data:{
        appDate,
        custStylist,
        service
      }
    }).then((response)=>{
      console.log(response.data);
      if(response.data=="exists")
        {
          alert("stylist is not idle");
          return;
        }else if(response.data=="notexists"){
          appData=[   {
            "name":custName,
            "custno":custNo,
            "date":appDate,
            "email":mail,
            "service":service,
            "stylist":custStylist
      }]
      
          navigate("/FinalOrder",{state:{appData:appData}});
        }

    })
   
}
  const getHairStylists=()=>{
    axios({
      headers:{"Content-Type":"application/json"},
      method:"GET",
      credentials:"include",
      url:"http://localhost:5000/api/salon/getHairStylists"
    }).then((response)=>{
      setStyistArray([
        {
          name:response.data[0].name,ratings:response.data[0].ratings
        },
        {
          name:response.data[1].name,ratings:response.data[1].ratings
        },
        {
          name:response.data[2].name,ratings:response.data[2].ratings
        }
      ])
    });
      url1="images/hairstylist1.jpg";
      url2="images/hairstylist2.jpg";
      url3="images/hairstylist3.jpg";
      setservice1("");
      
  }

  const getHairColourStylists=()=>{
    axios({
      headers:{"Content-Type":"application/json"},
      method:"GET",
      credentials:"include",
      url:"http://localhost:5000/api/salon/getHairColourStylists"
    }).then((response)=>{
      setStyistArray([
        {
          name:response.data[0].name,ratings:response.data[0].ratings
        },
        {
          name:response.data[1].name,ratings:response.data[1].ratings
        },
        {
          name:response.data[2].name,ratings:response.data[2].ratings
        }
      ])
    });
    url1="images/haircolourist1.jpg";
    url2="images/haircolourist2.jpg";
    url3="images/haircolourist3.jpg";
    setservice1("");
  }

  const getHairSpaStylists=()=>{
    axios({
      headers:{"Content-Type":"application/json"},
      method:"GET",
      credentials:"include",
      url:"http://localhost:5000/api/salon/getHairSpaStylists"
    }).then((response)=>{
      setStyistArray([
        {
          name:response.data[0].name,ratings:response.data[0].ratings
        },
        {
          name:response.data[1].name,ratings:response.data[1].ratings
        },
        {
          name:response.data[2].name,ratings:response.data[2].ratings
        }
      ])
    });
    url1="images/hairspastylist1.jpg";
    url2="images/hairspastylist2.jpg";
    url3="images/hairspastylist3.jpg";
    setservice1("");
  }

  const getHairStraightStylists=()=>{
    axios({
      headers:{"Content-Type":"application/json"},
      method:"GET",
      credentials:"include",
      url:"http://localhost:5000/api/salon/getHairStraightStylists"
    }).then((response)=>{
      setStyistArray([
        {
          name:response.data[0].name,ratings:response.data[0].ratings
        },
        {
          name:response.data[1].name,ratings:response.data[1].ratings
        },
        {
          name:response.data[2].name,ratings:response.data[2].ratings
        }
      ])
    });
    url1="images/hairstraightstylist1.jpg";
    url1="images/hairstraightstylist2.jpg";
    url1="images/hairstraightstylist3.jpg";
    setservice1("");
  }

  const getKeratinStylists=()=>{
    //nameAndRating.splice(0);
    axios({
      headers:{"Content-Type":"application/json"},
      method:"GET",
      credentials:"include",
      url:"http://localhost:5000/api/salon/getKeratinStylists"
    }).then((response)=>{
      setStyistArray([
        {
          name:response.data[0].name,ratings:response.data[0].ratings
        },
        {
          name:response.data[1].name,ratings:response.data[1].ratings
        },
        {
          name:response.data[2].name,ratings:response.data[2].ratings
        }
      ])
    });
      url1="images/keratinstylist1.jpg";
      url2="images/keratinstylist2.jpg";
      url3="images/keratinstylist3.jpg";
      setservice1("");
  }
  switch(service1)
  {
    case "HAIRSTYLE":getHairStylists();break;
    case "HAIRCOLOUR":getHairColourStylists();break;
    case "HAIRSPA":getHairSpaStylists();break;
    case "HAIRSTRAIGHTENING":getHairStraightStylists();break;
    case "KERATINSERVICE":getKeratinStylists();break;
  } 
  return (
    <> 
        <div className='h-auto w-full sm:flex flex-row gap-9'>
          <div className='items-center text-center justify-center flex flex-col'>
              <img src={url1} id="image" className='h-40 m-4 hover:shrink-0'onClick={()=>{getAppointment(styistArray[0].name)}}/>         
              <div><label>Name:{styistArray[0].name} </label></div>
              <div><label>Rating:{styistArray[0].ratings} </label></div>
          </div>
          
          <div className='items-center text-center justify-center flex flex-col'>
              <img src={url2} id="image" className='h-40 m-4 hover:shrink-0' onClick={()=>{getAppointment(styistArray[1].name)}}/>
              <div><label>Name:{styistArray[1].name} </label></div>
              <div><label>Rating:{styistArray[1].ratings} </label></div>
              </div>
          
          <div className='items-center text-center justify-center flex flex-col'>
              <img src={url3} id="image" className='h-40 m-4 hover:shrink-0' onClick={()=>{getAppointment(styistArray[2].name)}}/>
              <div><label>Name: {styistArray[2].name}</label></div>
              <div><label>Rating: {styistArray[2].ratings}</label></div>
              </div>
        </div>       
    </>
  )
}

export default Stylist
