import React, { useEffect, useState } from 'react';
import axios from "axios";

const Appointments = () => {
  // Get current date
  const currentDate = new Date().toISOString().split('T')[0];

  // Sample appointment data
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [appointments, setAppointments] = useState([
    { AppointmentID: 1, ClientName: 'John Doe', StylistName: 'Alice', Date: '2024-06-07', Time: '10:00', Service: 'Haircut' },
    { AppointmentID: 2, ClientName: 'Jane Smith', StylistName: 'Bob', Date: '2024-06-07', Time: '11:00', Service: 'Coloring' },
    { AppointmentID: 3, ClientName: 'John Doe', StylistName: 'BAlice', Date: '2024-06-07', Time: '10:00', Service: 'Haircut' }

    // Other appointments...
  ]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
   
    axios({
        headers:{"Content-Type":"application/json"},
        method:"POST",
        credentials:"include",
        url:"http://localhost:5000/api/salon/getAllAppointment",
        data:{
            selectedDate
        }
    }).then((response)=>{
        console.log(response.data);
        setAppointments(response.data);
    })
   
  };

  const handleAppointmentClick = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleCancelAppointment = () => {
    // Filter out the canceled appointment from the appointments array
    const updatedAppointments = appointments.filter(appointment => appointment !== selectedAppointment);
    
    // Update the appointments state
    setAppointments(updatedAppointments);
    
    // Clear the selected appointment
    setSelectedAppointment(null);
  };

  // Stylist color map
  const stylistColors = {
    Alice: '#5A67D8',
    Bob: '#F6AD55',
    Charlie: '#68D391',
  };

  // Extract unique stylist names
  const stylistNames = [...new Set(appointments.map(appointment => appointment.StylistName))];

  // Extract unique appointment times
  const appointmentTimes = [...new Set(appointments.filter(appointment => appointment.Date === selectedDate).map(appointment => appointment.Time))];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <label htmlFor="datePicker" className="text-lg mr-4">Select Date:</label>
        <input type="datetime-local" id="datePicker" value={selectedDate} min={currentDate} onChange={handleDateChange} className="border border-gray-300 rounded-lg px-4 py-2" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full rounded-lg overflow-hidden shadow-lg bg-white">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
              <th className="py-3 px-4 text-left">Time</th>
              {stylistNames.map((stylistName, index) => (
               <h1>{appointments[index].name}</h1>
              ))}
            </tr>
          </thead>
          <tbody>
            {appointmentTimes.map(time => (
              <tr key={time} className="border-b border-gray-200">
                <td className="py-4 px-4">{time}</td>
                {stylistNames.map(stylistName => {
                  const appointment = appointments.find(appointment => appointment.stylist === stylistName && appointment.date == appointment.date && appointment.date === selectedDate);
                  return (
                    <td key={stylistName} className="py-4 px-4">
                      {appointment ? (
                        <div 
                          className="bg-gray-100 rounded-lg p-4 text-gray-800 cursor-pointer shadow-md hover:shadow-lg transition duration-300"
                          style={{ backgroundColor: stylistColors[stylistName] }}
                          onClick={() => handleAppointmentClick(appointment)}
                        >
                          <div className="text-lg font-semibold">{`Client: ${appointment.ClientName}`}</div>
                          <div className="mt-2 text-sm">{`Service: ${appointment.Service}`}</div>
                        </div>
                      ) : '-'}
                    </td>
                  );
                })}
              </tr>
            ))}
            <h1>{appointments.stylist}</h1>
          </tbody>
        </table>
      </div>
      {/* Modal for displaying appointment details */}
      {selectedAppointment && (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="relative bg-white rounded-lg w-full max-w-md p-8">
            <button className="absolute top-0 right-0 p-3" onClick={() => setSelectedAppointment(null)}>
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-semibold mb-4">Appointment Details</h2>
            <p className="text-lg mb-2"><span className="font-semibold">Client:</span> {selectedAppointment.ClientName}</p>
            <p className="text-lg mb-2"><span className="font-semibold">Stylist:</span> {selectedAppointment.StylistName}</p>
            <p className="text-lg mb-2"><span className="font-semibold">Service:</span> {selectedAppointment.Service}</p>
            <button
              onClick={handleCancelAppointment}
              className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-700 transition duration-300 block w-full"
            >
              Cancel Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Appointments;
