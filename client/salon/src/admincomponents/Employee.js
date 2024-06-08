import React, { useState } from 'react';
import { FaUserPlus, FaUserTie } from 'react-icons/fa';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    id: '',
    name: '',
    specialisation: '',
    mobile: '',
    photo: '',
    email: ''
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEmployee((prevState) => ({
          ...prevState,
          photo: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const isValidIndianMobile = (number) => {
    const pattern = /^[6-9][0-9]{9}$/;
    return pattern.test(number);
  };

  const handleAddEmployee = () => {
    if (!isValidIndianMobile(newEmployee.mobile)) {
      alert('Please enter a valid Indian mobile number.');
      return;
    }
    if (newEmployee.name && newEmployee.specialisation && newEmployee.mobile) {
      setEmployees((prevEmployees) => [...prevEmployees, { ...newEmployee, id: Date.now() }]);
      setNewEmployee({
        id: '',
        name: '',
        specialisation: '',
        mobile: '',
        photo: '',
        email: ''
      });
      setIsFormVisible(false);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleRemoveEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-8 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {employees.map((employee) => (
          <div key={employee.id} className="border p-4 rounded-lg shadow-lg text-center">
            {employee.photo ? (
              <img src={employee.photo} alt={employee.name} className="w-24 h-24 mb-2 rounded-full mx-auto" style={{ objectFit: 'cover' }} />
            ) : (
              <FaUserTie className="w-24 h-24 mb-2 text-gray-400 mx-auto" />
            )}
            <h3 className="text-lg font-semibold mb-2">{employee.name}</h3>
            <p className="text-gray-600 mb-2">{employee.specialisation}</p>
            <p className="text-gray-600 mb-2">{employee.mobile}</p>
            <button onClick={() => handleRemoveEmployee(employee.id)} className="px-4 py-2 bg-red-500 text-white rounded">Remove</button>
          </div>
        ))}
      </div>

      <div className="mt-8 border p-4 rounded-lg shadow-lg">
        {isFormVisible ? (
          <form>
            <h2 className="text-lg font-semibold mb-2">Add Employee</h2>
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                name="name"
                value={newEmployee.name}
                onChange={handleChange}
                placeholder="Name"
                className="p-2 border rounded"
              />
              <input
                type="text"
                name="specialisation"
                value={newEmployee.specialisation}
                onChange={handleChange}
                placeholder="Specialisation"
                className="p-2 border rounded"
              />
              <input
                type="tel"
                className="p-2 border rounded"
                name="mobile"
                value={newEmployee.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                pattern="[0-9]*"
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
              <input
                type="email"
                className="p-2 border rounded"
                name="email"
                value={newEmployee.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
              <input
                type="file"
                onChange={handleImageUpload}
                className="p-2 border rounded"
              />
              <div className="flex justify-between">
                <button type="button" onClick={handleAddEmployee} className="px-4 py-2 bg-blue-500 text-white rounded">Add</button>
                <button type="button" onClick={() => setIsFormVisible(false)} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
              </div>
            </div>
          </form>
        ) : (
          <div className="flex items-center justify-center border px-12 py-8 rounded-lg shadow-lg cursor-pointer" onClick={() => setIsFormVisible(true)}>
            <FaUserPlus className="w-24 h-24 text-gray-400" />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeManagement;
