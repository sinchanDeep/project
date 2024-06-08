
import './App.css';
//import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from'./components/Home';
//import {Router} from 'react-router-dom'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import {BrowserRouter, createBrowserRouter,RouterProvider} from 'react-router-dom'
import Register from './components/Register';
import Different from './components/Different';
import Services from './components/Services';
//import Resources from './components/Resources';
import Appointment from './components/Appointment';
import ServicePrice from './components/ServicePrice';
//import Stylist from './components/Stylist';
import FinalOrder from './components/FinalOrder';
import ForgotPassword from './components/ForgotPassword';
import Myorders from './components/Myorders';
import Payment from './components/Payment';
import Admin from "./admincomponents/AdminTemplate";

function App() {
 /* const router=createBrowserRouter([
    {
      path: "/login",
      element: <Login/>
    },
    {
      path:"/register",
      element:<Register/>
    },
  ])*/

  return (
    <>
    
    <BrowserRouter>
    
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/Different" element={<Different/>}/>
        <Route path="/Services" element={<Services/>}/>
        <Route path="/myorders" element={<Myorders/>}/>
        <Route path="/Resources" element={<Appointment/>}/>
        <Route path="/ServicePrice" element={<ServicePrice/>}/>
        <Route path="/FinalOrder" element={<FinalOrder/>}/>
        <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        <Route path="/Admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App;
