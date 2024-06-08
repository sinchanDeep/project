import React from 'react';

const Customer = ({ customer }) => {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-lg sm:text-xl font-bold mb-2">{customer.name}</h2>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="mb-4 sm:mb-0">
            <p className="text-gray-600"><strong>Phone:</strong> {customer.phone}</p>
            <p className="text-gray-600"><strong>Email:</strong> {customer.email}</p>
            <p className="text-gray-600"><strong>Last Visit:</strong> {customer.lastVisit}</p>
          </div>
          <div>
            <p className="text-gray-600"><strong>Total Visits:</strong> {customer.totalVisits}</p>
            <p className="text-gray-600"><strong>Points:</strong> {customer.points}</p>
            {/* You can add more customer information here */}
          </div>
        </div>
      </div>
    );
  };


const ExampleComponent = () => {
  // Dummy customer data
  const customerData = {
    name: "John Doe",
    phone: "123-456-7890",
    email: "john@example.com",
    lastVisit: "2024-06-01",
    totalVisits: 5,
    points: 100
  };

  return (
    <div>
      <Customer customer={customerData} />
    </div>
  );
};

export default ExampleComponent;
