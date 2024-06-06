import React from 'react'
import {Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


let otp,resOtp="";
const ForgotPassword = () => {
    const navigate=useNavigate();
    const infoProcess=()=>{
        otp=document.getElementById("otp").value;
        console.log(otp,resOtp);
        if(otp==resOtp)
            {
        document.getElementById("hiddenpart").hidden=false;
        document.getElementById("reset").hidden=false;
            }
            else{
                alert("wrong otp");
            }
    }

    const processInfo=  ()=>{
         let pass1=document.getElementById("pass1").value
         let pass2=document.getElementById("pass2").value
         let mail=document.getElementById("email").value;
         if(pass1==""||pass2=="")
            {
                alert("password field cannot be blank");
            }
            else
            {
         if(pass1==pass2){
            axios({
                headers:{"Content-Type":"application/json"},
                method:"POST",
                credentials:"include",
                url:"http://localhost:5000/api/salon/ForgotPassword",
                data:{
                    mail,
                    pass1
                }
            }).then((response)=>{
                console.log(response.data);
            })
            alert("password changed successfully");
            navigate("/Login");
        }else{
            alert("passwords should be matching");
        }
    }
    }
    const sendOtp=()=>{
        let email=document.getElementById("email").value;
        axios({
            headers:{"Content-Type":"application/json"},
            method:"POST",
            credentials:"include",
            url:"http://localhost:5000/api/salon/generateotp",
            data:{
                    email
            }
        }).then((response)=>{
            console.log(response.data);
            resOtp=response.data;
        });
    }
  return (
    <>
        <section class="py-5 bg-gray-50 dark:bg-gray-900 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">

      <div class="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-22 h-16 mr-2" src="images/logo.png" alt="logo"/>
           
      </a>
          
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                 Reset your password
              </h1>
              <form class="space-y-4 md:space-y-6">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                  </div>
                  <div>
                  <button id="sub" onClick={sendOtp} class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send otp</button>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter otp sent to your email</label>
                      <input type="text" name="password" id="otp" placeholder="" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                      </div>
            
                  </div>
                  <button id="sub" onClick={infoProcess} class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Verify</button>
                  <div id="hiddenpart" hidden>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter new password</label>
                      <input type="password" name="email" id="pass1"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ReWrite new password</label>
                      <input type="password" name="email" id="pass2"  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>
                  </div>
                  </form>
                  <button id="reset" onClick={processInfo} class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" hidden>Reset password</button>
                  
                  
             
          </div>
      </div>
  </div>
</section> 
    </>
  )
}

export default ForgotPassword
