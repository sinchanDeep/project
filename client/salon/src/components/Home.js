import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useState } from 'react';
//import { useSelector,useDispatch } from 'react-redux';
//import {checkLogin} from '../actions/index';


const show=()=>
{
  const obj=document.getElementById("sh");
  obj.classList.toggle("top-[9%]");
  obj.classList.toggle("bg-slate-900");
  //obj.classList.toggle("mt-10");
  document.getElementById("cl").classList.toggle("text-white");
  document.getElementById("texts").classList.toggle("my-35");
}

const Home = () => {
    let [val,setVal]=useState(true);
       
    const userLogged= async ()=>{
        
        let tkn=Cookies.get("jwtToken");
        if(tkn==undefined)
            {
                tkn="husadhuc";
            }
            //console.log(tkn);
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
                    return;     
                }
                else
                {
                    setVal(false);
                }
        })
    }
    userLogged();
    //let val=useSelector((state)=>state.checkUserLogin);
   // const dispatch = useDispatch();
    //let val=dispatch(checkLogin());
    //console.log(val);
  return (
   <>   
  
        
        <div className='grid grid-cols-1 '>
            <div>
        <nav id="nv" className="flex justify-between items-center w-[92%]">
    <div>
    <img class="w-30 h-16" src="images/logo.png"/>
    </div>
    <div id="sh" class="content-start navLink  md:static absolute md:min-h-fit min-h-[40vh] left-0 top-[-100%] w-full flex px-5 py-8">
      <ul id="cl" class="flex md:flex-row flex-col  gap-[4vw] w-full" >
        <li class style={{borderTop:"1px solid white"}}>
          <Link  to="/Different">Why we're Different</Link>
        </li>
        <li style={{borderTop:"1px solid white"}}>
          <Link to="/Features">Our Services</Link>
        </li>
        <li style={{borderTop:"1px solid white"}}>
          <Link to="/Pricing">Pricing</Link>
        </li >
        <li class style={{borderTop:"1px solid white"}}>
          <Link to="/Resources">Resources</Link>
        </li>
        {
            val ?
            <>
            <li class style={{borderTop:"1px solid white"}} hidden>
          <Link id="login" to="/login" hidden>Login</Link>
        </li>
        <li id="signin" class style={{borderTop:"1px solid white"}} hidden>
          <Link to="/register" hidden>Sign up</Link>
        </li>
        </>
        :
        <>
        <li class style={{borderTop:"1px solid white"}}>
          <Link id="login" to="/login">Login</Link>
        </li>
        <li id="signin" class style={{borderTop:"1px solid white"}}>
          <Link to="/register">Sign up</Link>
        </li>
        </>
        }
        
        <li style={{borderTop:"1px solid white"}}>
        </li>
      </ul>   
    </div>
    <div id="ele">
    <ion-icon onClick={show} id="ele" name="menu" class="cursor-pointer md:hidden sm:hidden"></ion-icon>
    </div>
        </nav> 
        </div>  
        </div>

           



        <div className='md:flex flex-row flex-col gap-3 grow' id="texts">
            <div className='m-4'>
            <h1 className="py-10 md:px-0 px-1 md:text-4xl/[47px] text-2xl/[40px] md:text-left text-center"style={{color:"purple",fontFamily:"sans-serif"}}>Highest-Rated Software for Salons & Spas</h1>
            <h1 className="md:px-0 px-5 ml-3 md:text-5xl/[47px] text-2xl/[40px] md:text-left" style={{fontSize:"50px",color:"darkblue"}}>Where business gets<br/> more beautiful</h1> 
            <p className="md:py-8 py-5 ml-3 md:px-0 px-5" style={{fontSize:"20px"}}>Automate day-to-day operations and<br/> enhance your client experience with the<br/> booking software salons and spas love.</p>
            <button className="btn md:ml-22 ml-14">Order Appointment</button>
            </div>
            
            <div className=''>
            <div className="rounded-full ml-6 md:w-96 w-90 transition-all duration-300 rounded-lg cursor-pointer ">
                <img src="images/girl.png" id="mainimg"/>
            </div>
            </div>
        </div>

        <div className='flex flex-col'>
            

<footer class="bg-White dark:bg-gray-900 ">
    <div class="mx-auto w-full max-w-screen-xl">
      <div class="ml-5 grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">About</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Careers</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Brand Center</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Discord Server</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Twitter</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Privacy Policy</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Licensing</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">iOS</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Android</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Windows</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
        </div>
      </div>
    </div>
</footer>

        </div>
   
   </>
  )

}

export default Home
