import React from 'react'
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
 



const Register = () => {
    const navigate=useNavigate();

    const store=async(e)=>{
        e.preventDefault();
       let fname=document.getElementById("fname").value;
       const lname=document.getElementById("lname").value;
       const email=document.getElementById("email").value;
       const phone=document.getElementById("phno").value;
       const password=document.getElementById("password").value;
       const female=document.getElementById("female").value;
       const male=document.getElementById("male").value;
       if(!male||!male){
        alert("Please choose gender");
        return;
       }
       let gender="";
       if(male){
        gender="male";
       }
       else if(female)
       {
        gender="female";
       }
       axios({
        headers:{"Content-Type":"application/json"},
        method:"POST",
        url:"http://localhost:5000/api/salon/register",
        data:{
            fname:fname,
            lname:lname,
            email:email,
            phone:phone,
            password:password,
            gender:gender
        }
    }).then((response)=>{
        console.log(JSON.stringify(response));
        if(response.data=="not")
            {
                alert("user already exists");
                //navigate("/Register");
                //return;
            }
            else
            {
        alert("Registration successfull please login in the next login page");
        navigate("/login");
            }
    });    
    }

  return (
    <div>
    <section class="py-5 bg-gray-50 dark:bg-gray-900 ">

<div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-95 mt-10 lg:py-0 ">

    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
        
    <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-22 h-16 mr-2" src="images/logo.png" alt="logo"/>
         
    </a>
        
        <div class="p-6 space-y-4 md:space-y-3 sm:p-8 -mt-8">
            <h1 class="text-l font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                Create your account
            </h1>
            <form class="space-y-2 md:space-y-6">
              <div className='grid grid-cols-2 gap-3 overflow-hidden w-30'>
                <div className=''>
                    <label for="fname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
                    <input type="text" name="fname" id="fname" class="  bg-gray-50 w-full border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required/>
                </div>
                
                <div>
                    <label for="lname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last name</label>
                    
                    <input type="text" name="lname" id="lname" class="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required/>
                </div>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                    <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required/>
                </div>
                <div>
                    <label for="phno" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
                    <input type="number" name="phno" id="phno" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone no." required/>
                </div>
                
                <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Gender</label>
                <div class="form-check grid grid-cols-6 gap-10 ">
                  <div className='flex fle-row gap-4'>
                    <div className='pr-4'>
                    <input id="male" class="form-check-input" type="radio" name="gender"/>
                    <label class="form-check-label" for="male"> Male </label>
                    </div>
                    <div>
                    <input id="female" class="form-check-input" type="radio" name="gender"/>
                    <label class="form-check-label" for="female">Female </label>
                    </div>
                    </div>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input id="remember" aria-describedby="remember" type="checkbox" class="w-6 gap-3 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                        </div>
                        <div class="ml-3 text-sm">
                          <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                        </div>
                    </div>
                    <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button id="sub" class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={store} to="/login">Sign in</button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                    Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
            </form>
        </div>
    </div>
</div>
</section>
  </div>

  );
}

export default Register
