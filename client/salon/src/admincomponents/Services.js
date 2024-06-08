import React, { useState } from 'react';
import axios from "axios";

const Header = () => {
  return (
    <div className="flex justify-between bg-gray-200 py-2 px-4 font-bold">
      <div>Service</div>
      <div>Price (INR)</div>
      <div>Gender</div>
      <div>Actions</div>
    </div>
  );
};

const Services = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Haircut", price: "₹300", status: "active", gender: "Unisex" },
    { id: 2, name: "Manicure", price: "₹200", status: "active", gender: "Female" },
    { id: 3, name: "Pedicure", price: "₹250", status: "active", gender: "Female" },
    // Add more services with prices if needed
  ]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedService, setEditedService] = useState({ id: null, name: "", price: "", gender: "" });
  const [showAddForm, setShowAddForm] = useState(false);
  const [newService, setNewService] = useState({ name: "", price: "", gender: "Unisex" });
  const [error, setError] = useState("");

  const toggleServiceStatus = (serviceId) => {
    const updatedServices = services.map(service => {
      if (service.id === serviceId) {
        service.status = service.status === 'active' ? 'frozen' : 'active';
      }
      return service;
    });
    setServices(updatedServices);
  };

  const removeService = (serviceId) => {
    const updatedServices = services.filter(service => service.id !== serviceId);
    setServices(updatedServices);
  };

  const handleConfirm = () => {
    removeService(selectedServiceId);
    setShowConfirmation(false);
  };

  const handleEdit = (serviceId) => {
    const serviceToEdit = services.find(service => service.id === serviceId);
    setEditedService({ ...serviceToEdit });
    setShowEditForm(true);
  };

  const handleEditService = () => {
    const updatedServices = services.map(service => {
      if (service.id === editedService.id) {
        service.name = editedService.name;
        service.price = editedService.price;
        service.gender = editedService.gender;

      }
      return service;
    });
    setServices(updatedServices);
    setShowEditForm(false);
  };

  const handleAddService = () => {
    setShowAddForm(true);
  };

  const handleAddNewService = () => {
    let service=document.getElementById("newServiceName").value;
    let price=document.getElementById("newServicePrice").value;
    //let genderMale=document.getElementById("male").value;
    //let genderFemale=document.getElementById("female").value;
    let gender="female";
    //if(!genderMale && genderFemale)
      //gender=genderFemale;
    //else
    //gender=genderMale;
    axios({
      headers:{"Content-Type":"application/json"},
      method:"POST",
      credentials:"include",
      url:"http://localhost:5000/api/salon/getallservice",
      data:{
        service,
        price,
        gender
      }
    }).then((response)=>{
      console.log(response.data);
      //setServices(response.data);
    })
    const existingService = services.find(service =>
      service.name.toLowerCase() === newService.name.toLowerCase()
    );

    if (existingService) {
      setError("Service with the same name already exists.");
    } else {
      const confirmed = window.confirm(`Are you sure you want to add "${newService.name}" service with price "${newService.price}" and gender "${newService.gender}"?`);
      if (confirmed) {
        setServices([...services, { id: Date.now(), ...newService, status: 'active' }]);
        setShowAddForm(false);
        setNewService({ name: "", price: "", gender: "Unisex" });
        setError("");
      }
    }
  };

  return (
    <div className="w-full mx-auto px-4">
      <Header />
      <ul>
        {services.map(service => (
          <li key={service.id} className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 py-2">
            <div className="mb-2 md:mb-0">{service.name}</div>
            <div className="mb-2 md:mb-0">{service.price}</div>
            <div className="mb-2 md:mb-0">{service.gender}</div>
            <div>
              <button onClick={() => toggleServiceStatus(service.id)} className={`bg-${service.status === 'active' ? 'green' : 'blue'}-500 hover:bg-${service.status === 'active' ? 'green' : 'blue'}-700 text-white font-bold py-1 px-2 rounded mb-2 md:mb-0 mr-2`}>
                {service.status === 'active' ? 'Active' : 'Frozen'}
              </button>
              <button onClick={() => handleEdit(service.id)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mb-2 md:mb-0 mr-2">
                Edit
              </button>
              <button onClick={() => {
                setShowConfirmation(true);
                setSelectedServiceId(service.id);
              }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mb-2 md:mb-0">
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      {showConfirmation && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Are you sure you want to remove this service?</h2>
            <div className="flex justify-end">
              <button onClick={handleConfirm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Yes</button>
              <button onClick={() => setShowConfirmation(false)} className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">No</button>
            </div>
          </div>
        </div>
      )}
      {showEditForm && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Edit Service</h2>
            <div className="mb-4">
              <label htmlFor="serviceName" className="block text-gray-700 font-bold">Service Name:</label>
              <input
                type="text"
                id="serviceName"
                className="w-full mt-1 p-2 border rounded"
                value={editedService.name}
                onChange={(e) => setEditedService({ ...editedService, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="servicePrice" className="block text-gray-700 font-bold">Price (INR):</label>
              <input
                type="text"
                id="servicePrice"
                className="w-full mt-1 p-2 border rounded"
                value={editedService.price}
                onChange={(e) => setEditedService({ ...editedService, price: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Gender:</label>
              <div>
                <label className="inline-block mr-4">
                  <input
                    type="radio"
                    name="gender"
                    value="Unisex"
                    checked={editedService.gender === "Unisex"}
                    onChange={(e) => setEditedService({ ...editedService, gender: e.target.value })}
                  />
                  Unisex
                </label>
                <label className="inline-block mr-4">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={editedService.gender === "Male"}
                    onChange={(e) => setEditedService({ ...editedService, gender: e.target.value })}
                  />
                  Male
                </label>
                <label className="inline-block">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={editedService.gender === "Female"}
                    onChange={(e) => setEditedService({ ...editedService, gender: e.target.value })}
                  />
                  Female
                </label>
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={handleEditService} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit Service</button>
              <button onClick={() => setShowEditForm(false)} className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
      {showAddForm && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-lg font-bold mb-4">Add Service</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
              <label htmlFor="newServiceName" className="block text-gray-700 font-bold">Service Name:</label>
              <input
                type="text"
                id="newServiceName"
                className="w-full mt-1 p-2 border rounded"
                value={newService.name}
                onChange={(e) => setNewService({ ...newService, name: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="newServicePrice" className="block text-gray-700 font-bold">Price (INR):</label>
              <input
                type="text"
                id="newServicePrice"
                className="w-full mt-1 p-2 border rounded"
                value={newService.price}
                onChange={(e) => setNewService({ ...newService, price: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Gender:</label>
              <div>
                <label className="inline-block mr-4">
                  <input
                    type="radio"
                    name="newGender"
                    value="Unisex"
                    checked={newService.gender === "Unisex"}
                    onChange={(e) => setNewService({ ...newService, gender: e.target.value })}
                  />
                  Unisex
                </label>
                <label className="inline-block mr-4">
                  <input
                    type="radio"
                    name="newGender"
                    value="Male"
                    id="male"
                    checked={newService.gender === "Male"}
                    onChange={(e) => setNewService({ ...newService, gender: e.target.value })}
                  />
                  Male
                </label>
                <label className="inline-block">
                  <input
                    type="radio"
                    name="newGender"
                    value="Female"
                    if="female"
                    checked={newService.gender === "Female"}
                    onChange={(e) => setNewService({ ...newService, gender: e.target.value })}
                  />
                  Female
                </label>
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={handleAddNewService} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Add Service</button>
              <button onClick={() => setShowAddForm(false)} className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-center mt-4">
        <button onClick={handleAddService} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Service
        </button>
      </div>
    </div>
  );
};

export default Services;
