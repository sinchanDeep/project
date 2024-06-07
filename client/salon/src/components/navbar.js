import React from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';
import  axios  from 'axios';

const show=()=>
{
  const obj=document.getElementById("sh");
  obj.classList.toggle("top-[9%]");
  obj.classList.toggle("bg-slate-900");
  document.getElementById("cl").classList.toggle("text-white");
}
const Navbar=()=> {
    const navigate=useNavigate();
    let [val,setVal]=useState(true);
    const logout=()=>{
      Cookies.remove("jwtToken");
      navigate("/");
  }
     const userLogged= async ()=>{  
        try{
         let tkn="";
         tkn=Cookies.get("jwtToken");
         axios({
             headers:{"Content-Type":"application/json"},
             method:"POST",
             credentials:"include",
             url:"http://localhost:5000/api/salon",
             data:{
                 tkn
             }
         }).then((response)=>{
             if(response.data=="logged")
                 {
                     setVal(true);    
                 }
                 else
                 {
                     setVal(false);
                 }
         });
     }
     catch(err){
      alert("Unexpected netword error");
     }
    }
    
     userLogged();
   
  return (
   <>
   <nav id="nv" class="flex justify-between items-center w-[92%]">
    <div>
      <Link to="/">
    <img class="w-30 h-16 md:ml-6" src="images/logo-1.svg"/>
    </Link>
    </div>
    <div id="sh" class="content-start navLink  md:static absolute md:min-h-fit min-h-[40vh] left-0 top-[-100%] w-full flex px-5 py-8">
      <ul id="cl" class="flex md:flex-row flex-col  gap-[4vw] w-full" >
        <li class style={{borderTop:"1px solid white"}}>
          <Link  to="/Different">Why we're Different</Link>
        </li>
        <li style={{borderTop:"1px solid white"}}>
          <Link to="/Services">Our Services</Link>
        </li>
        <li style={{borderTop:"1px solid white"}}>
          <Link to="/myorders">My Orders</Link>
        </li >
        <li class style={{borderTop:"1px solid white"}}>
          <Link to="/Resources">Resources</Link>
        </li>
        {val ?
        <>
        <li style={{borderTop:"1px solid white"}}>
            <button onClick={logout}>Log Out</button>
        </li>
        <li class style={{borderTop:"1px solid white"}}>
          <Link to="/login" hidden>Login</Link>
        </li>
        <li class style={{borderTop:"1px solid white"}} hidden>
          <Link to="/Register" hidden>Sign up</Link>
        </li>
        </>
        :
        <>     
        <li class style={{borderTop:"1px solid white"}}>
          <Link to="/login">Login</Link>
        </li>
        <li class style={{borderTop:"1px solid white"}}>
          <Link to="/Register">Sign up</Link>
        </li>
        <li style={{borderTop:"1px solid white"}}>
            <button onClick={logout} hidden>Log Out</button>
        </li>
        </>
        }
       
      </ul>   
    </div>
    <div id="ele">
    <ion-icon onClick={show} id="ele" name="menu" class="cursor-pointer md:hidden sm:hidden"></ion-icon>
    </div>
   </nav>   
   </>
  )
}
export default Navbar
