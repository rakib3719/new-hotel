// 'use client';

// import axios from 'axios';
// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { toast, ToastContainer } from 'react-toastify';

// const AddBookingForm = () => {
//   const currentDate = new Date();
//   const defaultCheckOutDate = new Date(currentDate);
//   console.log(currentDate);

//   defaultCheckOutDate.setDate(currentDate.getDate() + 1);
//   const [loading, setLoading] = useState(false)
//   const [formData, setFormData] = useState({
//     checkInDate: currentDate,
//     checkOutDate: defaultCheckOutDate,
//     pricePerRoom: 50, // Default price per room
//     name: '',
//     status: 'pending',
//     email: '',
//     phone: '',
//     adults: 1,
//     children: 0,
//     rooms: 1,
//     extraBeds: 0,
//     booker:'',
//     services: {
//       petFriendly: false,
//       spa: false,
//       sauna: false,
//     },

//   });

//   const handleServiceChange = (serviceName) => {
//     setFormData((prev) => ({
//       ...prev,
//       services: {
//         ...prev.services,
//         [serviceName]: !prev.services[serviceName],
//       },
//     }));
//   };

//   const handleInputChange = (key, value) => {
//     setFormData((prev) => ({ ...prev, [key]: value }));
//   };

//   const calculateTotalCost = () => {
//     const { pricePerRoom, rooms, services } = formData;
//     const serviceCosts = {
//       petFriendly: 10,
//       spa: 20,
//       sauna: 25,
//     };

//     let totalCost = pricePerRoom * rooms;

//     for (const service in services) {
//       if (services[service]) {
//         totalCost += serviceCosts[service] * rooms;
//       }
//     }

//     return totalCost;
//   };

//   const handleSubmit = async (e) => {
//     setLoading(true)
//     e.preventDefault();
//     console.log('Booking Data:', formData);
//     try {
//       const response = await axios.post('/api/booking', formData)
//       console.log(response, 'ok mama');

//       if (response?.data?.data?.insertedId) {
//         toast.success('Booking added sucessfully')
//         setLoading(false)
//       }
//       else {
//         setLoading(false)
//         toast.error('something went wrong plz try again')
//       }
//     } catch (error) {
//       toast.error(error?.message)
//     }


//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-5xl mx-auto p-6 rounded-lg shadow-md"
//       style={{ backgroundColor: '#ab8965', color: 'black' }}
//     >
//       <ToastContainer />
//       <h2 className="text-2xl font-bold text-center mb-6">Add Booking</h2>

//       {/* Name, Email, Phone, Room Number */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//         {[{ label: 'Name', key: 'name' }, { label: 'Email', key: 'email' }].map(({ label, key }) => (
//           <div key={key}>
//             <label className="block text-sm mb-2">{label}</label>
//             <input
//               type={key === 'email' ? 'email' : 'text'}
//               value={formData[key]}
//               onChange={(e) => handleInputChange(key, e.target.value)}
//               className="w-full p-2 rounded-md text-black"
//               required
//             />
//           </div>
//         ))}
//         {/* Phone Field */}
//         <div>
//           <label className="block text-sm mb-2">Phone</label>
//           <input
//             type="tel"
//             value={formData.phone}
//             onChange={(e) => handleInputChange('phone', e.target.value)}
//             className="w-full p-2 rounded-md text-black"
//             required
//           />
//         </div>
//         {/* Room Number Field */}
//         <div className=''>
//           <label className="block text-sm mb-2">Booker Name</label>
//           <input
//             type="text"
//             value={formData.booker}
//             onChange={(e) => handleInputChange('booker', e.target.value)}
//             className="w-full p-2 rounded-md text-black"
//             required
//           />
//         </div>
//       </div>

//       {/* Check-In, Check-Out, Price */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
//         <div>
//           <label className="block text-sm mb-2">Check In</label>
//           <DatePicker
//             selected={formData.checkInDate}
//             onChange={(date) => handleInputChange('checkInDate', date)}
//             className="w-full p-2 rounded-md text-black"
//           />
//         </div>
//         <div>
//           <label className="block text-sm mb-2">Check Out</label>
//           <DatePicker
//             selected={formData.checkOutDate}
//             onChange={(date) => handleInputChange('checkOutDate', date)}
//             minDate={formData.checkInDate}
//             className="w-full p-2 rounded-md text-black"
//           />
//         </div>
//         <div>
//           <label className="block text-sm mb-2">Price per Room</label>
//           <input
//             type="number"
//             value={formData.pricePerRoom}
//             onChange={(e) => handleInputChange('pricePerRoom', parseInt(e.target.value, 10))}
//             className="w-full p-2 rounded-md text-black"
//             min="1"
//           />
//         </div>
//       </div>

//       {/* Adults, Children, Rooms, Extra Beds */}
//       {[{ label: 'Adults', key: 'adults' }, { label: 'Children', key: 'children' }, { label: 'Rooms', key: 'rooms' }, { label: 'Extra Beds', key: 'extraBeds' }].map(
//         ({ label, key }) => (
//           <div className="flex items-center justify-between mb-4" key={key}>
//             <span>{label}</span>
//             <div className="flex items-center space-x-3">
//               <button
//                 type="button"
//                 className="px-3 py-1 bg-black text-white rounded-md"
//                 onClick={() => handleInputChange(key, Math.max(0, formData[key] - 1))}
//               >
//                 -
//               </button>
//               <span>{formData[key]}</span>
//               <button
//                 type="button"
//                 className="px-3 py-1 bg-black text-white rounded-md"
//                 onClick={() => handleInputChange(key, formData[key] + 1)}
//               >
//                 +
//               </button>
//             </div>
//           </div>
//         )
//       )}

//       {/* Extra Services */}
//       <div className="mb-4">
//         <h3 className="font-bold mb-2">Extra Services:</h3>
//         {[{ label: 'Pet-Friendly Amenities', key: 'petFriendly', cost: 10 }, { label: 'Spa Services', key: 'spa', cost: 20 }, { label: 'Sauna/Steam Room', key: 'sauna', cost: 25 }].map(
//           ({ label, key, cost }) => (
//             <label key={key} className="flex items-center justify-between mb-2">
//               <span>
//                 {label} <span className="font-bold">${cost}/Room</span>
//               </span>
//               <input
//                 type="checkbox"
//                 checked={formData.services[key]}
//                 onChange={() => handleServiceChange(key)}
//                 className="form-checkbox"
//               />
//             </label>
//           )
//         )}
//       </div>

//       {/* Total Cost */}
//       <div className="text-lg font-bold mb-4">
//         Total Cost: <span className="text-black">${calculateTotalCost()}</span>
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         disabled={loading}
//         className={`w-full py-2 rounded-md ${loading && 'bg-white text-gray-500'} font-bold`}
//         style={{ backgroundColor: 'black', color: '#ab8965' }}
//       >
//         {loading ? 'loading...' : "Add Booaking"}
//       </button>
//     </form>
//   );
// };

// export default AddBookingForm;
















'use client';

import axios from 'axios';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast, ToastContainer } from 'react-toastify';

const AddBookingForm = () => {
  const currentDate = new Date();
  const defaultCheckOutDate = new Date(currentDate);
  console.log(currentDate);

  defaultCheckOutDate.setDate(currentDate.getDate() + 1);
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    checkInDate: currentDate,
    checkOutDate: defaultCheckOutDate,
    pricePerRoom: 50, // Default price per room
    name: '',
    status: 'pending',
    email: '',
    phone: '',
    adults: 1,
    children: 0,
    rooms: 1,
    extraBeds: 0,
    booker:'',
    services: {
      petFriendly: false,
      spa: false,
      sauna: false,
    },

  });

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
  
    // Format the dates to include T00:00:00.000Z
    const formattedData = {
      ...formData,
      checkInDate: new Date(formData.checkInDate).toISOString().split('T')[0] + 'T00:00:00.000Z',
      checkOutDate: new Date(formData.checkOutDate).toISOString().split('T')[0] + 'T00:00:00.000Z',
    };
  
    console.log('Formatted Booking Data:', formattedData);
  
    try {
      const response = await axios.post('/api/booking', formattedData);
      console.log(response, 'Booking Response');
  
      if (response?.data?.data?.insertedId) {
        toast.success('Booking added successfully');
        setLoading(false);
      } else {
        setLoading(false);
        toast.error('Something went wrong, please try again');
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.message || 'An error occurred');
    }
  };
  
  
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-6 rounded-lg shadow-md"
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
        {/* Phone Field */}
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
        {/* Room Number Field */}
        <div className=''>
          <label className="block text-sm mb-2">Booker Name</label>
          <input
            type="text"
            value={formData.booker}
            onChange={(e) => handleInputChange('booker', e.target.value)}
            className="w-full p-2 rounded-md text-black"
            required
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
            value={formData.pricePerRoom}
            onChange={(e) => handleInputChange('pricePerRoom', parseInt(e.target.value, 10))}
            className="w-full p-2 rounded-md text-black"
            min="1"
          />
        </div>
      </div>

      {/* Adults, Children, Rooms, Extra Beds */}
      {[{ label: 'Adults', key: 'adults' }, { label: 'Children', key: 'children' }, { label: 'Rooms', key: 'rooms' }, { label: 'Extra Beds', key: 'extraBeds' }].map(
        ({ label, key }) => (
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
        )
      )}

      {/* Extra Services */}
      <div className="mb-4">
        <h3 className="font-bold mb-2">Extra Services:</h3>
        {[{ label: 'Pet-Friendly Amenities', key: 'petFriendly', cost: 10 }, { label: 'Spa Services', key: 'spa', cost: 20 }, { label: 'Sauna/Steam Room', key: 'sauna', cost: 25 }].map(
          ({ label, key, cost }) => (
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
          )
        )}
      </div>

      {/* Total Cost */}
      <div className="text-lg font-bold mb-4">
        Total Cost: <span className="text-black">${calculateTotalCost()}</span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-md ${loading && 'bg-white text-gray-500'} font-bold`}
        style={{ backgroundColor: 'black', color: '#ab8965' }}
      >
        {loading ? 'loading...' : "Add Booaking"}
      </button>
    </form>
  );
};

export default AddBookingForm;
