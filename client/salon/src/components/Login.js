import React from 'react'
import {Link} from 'react-router-dom';
import  axios from "axios"
import {useNavigate} from 'react-router-dom';
import Cookies from "js-cookie";



const Login = () => {
   const navigate=useNavigate();
   const getInfo= async (e)=>{
    e.preventDefault();
        if(Cookies.get("jwtToken"))
            {
                alert("user already logged in");
                return;
            }
           
        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;
        if(email=="admin" && password=="123456789")
            {
                navigate("/Admin");
            }
            else
            {

            
        if(password.length<8)
            {
                alert("password should be greater than 8 charactres");
            }
            else
            {
        axios({
            headers:{"Content-Type":"application/json"},
            method:"POST",
            credentials: 'include', //use 'on-site' if you want the server to receive cookie only from the same domain
            url:"http://localhost:5000/api/salon/login",
            data:{
                email,
                password
            }
        }).then((response)=>{
            if(response.data=="unsuccessful")
                {
                    alert("wrong credentials")
                   // navigate("/Login")
                }
                else
                {
                    alert("login successful");
                    const tkn=response.data;
                    var now=new Date();
                    var time=now.getTime();
                    var expireTime=time+10000*600000;
                    now.setTime(expireTime);
                    
                    document.cookie="jwtToken = "+tkn+";expires="+now.toUTCString();
                    navigate("/");
                    
                }
        });
    }
}
            
   } 
  return (
    <>
    
  <section class="py-5 bg-gray-50 dark:bg-gray-900 ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">

      <div class="w-full  bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 ">
          
      <Link to="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-29 h-16 mr-2 mt-4 ml-2" src="images/logo-1.svg" alt="logo"/>
           
      </Link>
          
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form class="space-y-4 md:space-y-6" method="post">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" min="8" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                      </div>
                      <Link to="/ForgotPassword" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</Link>
                  </div>
                  <button id="sub" onClick={getInfo} class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <Link to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
   
    </>
 
  );
}

export default Login
