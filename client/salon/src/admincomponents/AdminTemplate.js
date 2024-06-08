import React, { useState } from 'react';
import Appointments from '../admincomponents/Appointments';
import EmployeeManagement from '../admincomponents/Employee';
import { useNavigate } from 'react-router-dom';

import Services from '../admincomponents/Services';
import Customer from '../admincomponents/Customers';

const Sidebar = ({ onItemClick }) => {
  const navigate=useNavigate();
  return (
    <div className="bg-gray-900 text-white h-full w-16 sm:w-64 fixed top-0 left-0 overflow-y-auto">
      <div className="py-4 px-2 sm:px-6 flex justify-between items-center">
        <div className='bg-white w-full h-full sm:w-32 ml-3 mt-3  rounded-md'>
          <img src="svg/logo.svg" alt="Company Logo" className="h-full w-full  " />
        </div>
        <button className="block sm:hidden text-white focus:outline-none" >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <ul className="flex flex-col sm:flex-row sm:flex-col flex-grow">
        <li className="px-4 py-3 cursor-pointer hover:bg-gray-800 transition duration-300 ease-in-out" onClick={() => onItemClick("dashboard")}>
          <i className="fas fa-home mr-3"></i><span className="font-medium hidden sm:inline">Dashboard</span>
        </li>
        <li className="px-4 py-3 cursor-pointer hover:bg-gray-800 transition duration-300 ease-in-out" onClick={() => onItemClick("appointments")}>
          <i className="fas fa-calendar-alt mr-3"></i><span className="font-medium hidden sm:inline">Appointments</span>
        </li>
        <li className="px-4 py-3 cursor-pointer hover:bg-gray-800 transition duration-300 ease-in-out" onClick={() => onItemClick("Services")}>
          <i className="fas fa-cut mr-3"></i><span className="font-medium hidden sm:inline">Services</span>
        </li>
        <li className="px-4 py-3 cursor-pointer hover:bg-gray-800 transition duration-300 ease-in-out" onClick={() => onItemClick("Customers")}>
          <i className="fas fa-users mr-3"></i><span className="font-medium hidden sm:inline">Customers</span>
        </li>
        <li className="px-4 py-3 cursor-pointer hover:bg-gray-800 transition duration-300 ease-in-out" onClick={() => onItemClick("Employees")}>
          <i className="fas fa-cog mr-3"></i><span className="font-medium hidden sm:inline">Employees</span>
        </li>
        <li className="px-4 py-3 cursor-pointer hover:bg-gray-800 transition duration-300 ease-in-out" onClick={() => navigate("/login")}>
          <i className="fas fa-cog mr-3"></i><span className="font-medium hidden sm:inline">Logout</span>
        </li>
      </ul>
    </div>
  );
};

const Header = () => {
  return (
    <div className="bg-gray-900 text-white py-4 text-center fixed top-0 left-0 w-full shadow-lg rounded-2xl">
      <div className="flex justify-between items-center px-6">
        <div>
          <img src='svg/logo.svg' alt="Company Logo" className="h-8 w-auto" />
        </div>
        <h1 className="text-xl sm:text-2xl font-bold m-auto mt-4">Salon Admin Dashboard</h1>
        <div className="hidden sm:flex flex-col mr-7">
          <img src="svg/adminLogo.svg" alt="Admin Logo" className="h-8 w-auto mr-3 mt-2" />
          <p className='text-white mt-1'>Admin</p>
        </div>
      </div>
    </div>
  );
};

const Content = ({ activeTab }) => {
    if (activeTab === "appointments") {
      return (
        <div className="pl-16 mt-28 ml-4 sm:pl-64 pr-4 sm:pr-8">
          <div className="bg-white rounded-lg mx-auto shadow-lg p-4 sm:p-6">
            <h1 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-center">Appointments</h1>
            <Appointments />
          </div>
        </div>
      );
    } else if (activeTab === "Employees") {
      return (
        <div className=" pl-16 mt-28 ml-4 sm:pl-64 pr-4 sm:pr-8">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            <h1 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-center">Employee Management</h1>
            <EmployeeManagement />
          </div>
        </div>
      );
    } else if (activeTab === "Services") {
      return (
        <div className=" pl-16 mt-28 ml-4 sm:pl-64 pr-4 sm:pr-8">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
            <h1 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-center">Services</h1>
            <Services />
          </div>
        </div>
      );
    }else if (activeTab === "Customers") {
        return (
          <div className=" pl-16 mt-28 ml-4 sm:pl-64 pr-4 sm:pr-8">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
              <h1 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-center">Customers</h1>
              <Customer />
            </div>
          </div>
        );
      }
    return (
      <div className="mt-28 ml-4 pl-16 sm:pl-64 pr-4 sm:pr-8">
        <h1 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-center">Welcome to the Salon Admin Dashboard</h1>
        <p className="text-gray-700 text-center">This is where you can manage your salon's appointments, services, customers, and settings.</p>
      </div>
    );
  };
  

const SalonAdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleItemClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Header />
      <Sidebar onItemClick={handleItemClick} />
      <Content activeTab={activeTab} />
    </div>
  );
};

export default SalonAdminDashboard;
