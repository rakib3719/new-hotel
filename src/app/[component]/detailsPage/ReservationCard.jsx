'use client';

import axios from 'axios';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReservationCard = ({ bookingData }) => {
  const currentDate = new Date();
  const defaultCheckOutDate = new Date(currentDate);
  defaultCheckOutDate.setDate(currentDate.getDate() + 1);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    checkInDate: currentDate,
    checkOutDate: defaultCheckOutDate,
    pricePerRoom: bookingData?.price ? Number(bookingData.price) : 0, // Default price per room
    name: '',
    roomName: bookingData?.roomName || '',
    status: 'pending',
    email: '',
    phone: '',
    roomNumber: bookingData?.roomNumber || '', // New field for room number
    adults: 1,
    children: 0,
    rooms: 1,
    extraBeds: 0,
    services: {
      petFriendly: false,
      spa: false,
      sauna: false,
    },
  });

  // Debug bookingData
  console.log('Booking Data:', bookingData);

  const handleServiceChange = (serviceName) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceName]: !prev.services[serviceName],
      },
    }));
  };

  const handleInputChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const calculateTotalCost = () => {
    const { pricePerRoom, rooms, services } = formData;
    const serviceCosts = {
      petFriendly: 10,
      spa: 20,
      sauna: 25,
    };

    let totalCost = pricePerRoom * rooms;

    for (const service in services) {
      if (services[service]) {
        totalCost += serviceCosts[service] * rooms;
      }
    }

    return totalCost;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/booking', formData);

      if (response?.data?.data?.insertedId) {
        toast.success('Booking added successfully!');
        setFormData((prev) => ({
          ...prev,
          name: '',
          email: '',
          phone: '',
          rooms: 1,
          children: 0,
          adults: 1,
          extraBeds: 0,
          services: { petFriendly: false, spa: false, sauna: false },
        }));
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error) {
      toast.error(error?.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 rounded-lg shadow-md"
      style={{ backgroundColor: '#ab8965', color: 'black' }}
    >
      <ToastContainer />
      <h2 className="text-2xl font-bold text-center mb-6">Add Booking</h2>

      {/* Name, Email, Phone, Room Number */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {[{ label: 'Name', key: 'name' }, { label: 'Email', key: 'email' }].map(({ label, key }) => (
          <div key={key}>

            <label className="block text-sm mb-2">{label}</label>
            <input
              type={key === 'email' ? 'email' : 'text'}
              value={formData[key]}
              onChange={(e) => handleInputChange(key, e.target.value)}
              className="w-full p-2 rounded-md text-black"
              required
            />
          </div>
        ))}
        <div>
          <label className="block text-sm mb-2">Phone</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full p-2 rounded-md text-black"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Room Number</label>
          <input
            type="text"
            readOnly
            value={formData.roomNumber}
            className="w-full p-2 rounded-md text-black"
          />
        </div>
      </div>

      {/* Check-In, Check-Out, Price */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm mb-2">Check In</label>
          <DatePicker
            selected={formData.checkInDate}
            onChange={(date) => handleInputChange('checkInDate', date)}
            className="w-full p-2 rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Check Out</label>
          <DatePicker
            selected={formData.checkOutDate}
            onChange={(date) => handleInputChange('checkOutDate', date)}
            minDate={formData.checkInDate}
            className="w-full p-2 rounded-md text-black"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Price per Room</label>
          <input
            type="number"
            readOnly
            value={formData.pricePerRoom}
            className="w-full p-2 rounded-md text-black"
          />
        </div>
      </div>

      {/* Adults, Children, Rooms, Extra Beds */}
      {[
        { label: 'Adults', key: 'adults' },
        { label: 'Children', key: 'children' },
        { label: 'Rooms', key: 'rooms' },
        { label: 'Extra Beds', key: 'extraBeds' },
      ].map(({ label, key }) => (
        <div className="flex items-center justify-between mb-4" key={key}>
          <span>{label}</span>
          <div className="flex items-center space-x-3">
            <button
              type="button"
              className="px-3 py-1 bg-black text-white rounded-md"
              onClick={() => handleInputChange(key, Math.max(0, formData[key] - 1))}
            >
              -
            </button>
            <span>{formData[key]}</span>
            <button
              type="button"
              className="px-3 py-1 bg-black text-white rounded-md"
              onClick={() => handleInputChange(key, formData[key] + 1)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      {/* Extra Services */}
      <div className="mb-4">
        <h3 className="font-bold mb-2">Extra Services:</h3>
        {[
          { label: 'Pet-Friendly Amenities', key: 'petFriendly', cost: 10 },
          { label: 'Spa Services', key: 'spa', cost: 20 },
          { label: 'Sauna/Steam Room', key: 'sauna', cost: 25 },
        ].map(({ label, key, cost }) => (
          <label key={key} className="flex items-center justify-between mb-2">
            <span>
              {label} <span className="font-bold">${cost}/Room</span>
            </span>
            <input
              type="checkbox"
              checked={formData.services[key]}
              onChange={() => handleServiceChange(key)}
              className="form-checkbox"
            />
          </label>
        ))}
      </div>

      {/* Total Cost */}
      <div className="text-lg font-bold mb-4">
        Total Cost: <span className="text-black">${calculateTotalCost()}</span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-md ${loading ? 'bg-white text-gray-500' : 'bg-black text-white'} font-bold`}
        style={{ backgroundColor: 'black', color: '#ab8965' }}
      >
        {loading ? 'Loading...' : 'Add Booking'}
      </button>
    </form>
  );
};

export default  ReservationCard ;







