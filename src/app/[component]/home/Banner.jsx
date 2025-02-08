

// 'use client';

// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import ReactDatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { FaCheckCircle, FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
// import { format } from 'date-fns';
// import { useRouter } from 'next/navigation'; // Import useRouter for navigation
// import bannerImg from '@/asset/images/banner.webp';

// const Banner = () => {
//   const [isDateModalOpen, setIsDateModalOpen] = useState(false);
//   const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
//   const [startDate, setStartDate] = useState(new Date());
//   const [endDate, setEndDate] = useState(null);
//   const [guests, setGuests] = useState({
//     adults: 0,
//     children: 0,
//     rooms: 0,
//   });
//   const [loading, setLoading] = useState(false); // Loading state
//   const router = useRouter(); // Use next/router for navigation

//   const openDateModal = () => setIsDateModalOpen(true);
//   const closeDateModal = () => setIsDateModalOpen(false);
//   const openGuestModal = () => setIsGuestModalOpen(true);
//   const closeGuestModal = () => setIsGuestModalOpen(false);

//   // Handle Increment/Decrement for guest selection
//   const updateGuests = (key, value) => {
//     setGuests((prev) => ({
//       ...prev,
//       [key]: Math.max(0, value), // Prevent negative values
//     }));
//   };

//   const handleSearch = async () => {
//     // Ensure adults and children are numbers
//     const { adults, children } = guests;
//     // if (!startDate || !endDate || adults <= 0 || children <= 0) {
//     //   alert('Please fill in all required fields.');
//     //   return;
//     // }

//     // Set loading state to true while fetching data
//     setLoading(true);

//     const response = await fetch('/api/search', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         startDate: format(startDate, 'yyyy-MM-dd'),
//         endDate: format(endDate, 'yyyy-MM-dd'),
//         guests,
//       }),
//     });

//     const data = await response.json();
//     if (data.error) {
//       console.log('Error:', data.error);
//       setLoading(false); // Stop loading if error occurs
//     } else {
//       // Navigate to allrooms route with query parameters or pass data through router
//       console.log('Search Results:', data);

//       // Option 1: Passing data through URL (query parameters)
//       const query = {
//         startDate: format(startDate, 'yyyy-MM-dd'),
//         endDate: format(endDate, 'yyyy-MM-dd'),
//         guests: JSON.stringify(guests), // Pass guests data as string
//         results: JSON.stringify(data), // Pass search results
//       };

//       // Use URLSearchParams to convert query to a valid URL format
//       const queryString = new URLSearchParams(query).toString();

//       router.push(`/allroom?${queryString}`);

//       setLoading(false); // Stop loading after navigation
//     }
//   };


//   return (
//     <div className="relative bg-[#fff5ed] overflow-hidden">
//       {/* Main Container */}
//       <div className=" pt-28  lg:flex max-w-[1400px] mx-auto px-4 lg:px-12 items-center py-16 gap-12 lg:text-left text-center">
//         {/* Left Section */}
//         <motion.section
//           className="flex-1"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//         >
//           <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-[#ab8965] leading-tight">
//             Hotel Seven View
//           </h1>
//           <p className="font-lato text-gray-700 mt-6 text-lg">
//             Immerse yourself in the epitome of luxury at <b>Hotel Seven View</b>, your premier destination in Uttara Dhaka.
//             Our hotel redefines elegance and comfort, offering an exquisite escape for discerning travelers.
//           </p>
//         </motion.section>

//         {/* Right Section */}
//         <motion.section
//           className="mt-12 lg:mt-0 flex-1"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//         >
//           <Image src={bannerImg} alt="Hotel Seven View Banner" className="" />
//         </motion.section>
//       </div>

//       {/* Search Bar Section */}
//       <div className="relative bg-white shadow-lg rounded-lg max-w-6xl mx-auto -mt-10 p-4 lg:p-6 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
//         {/* Date Input */}
//         <div
//           className="flex items-center border border-gray-300 rounded-lg p-3 flex-1 w-full lg:w-auto cursor-pointer"
//           onClick={openDateModal}
//         >
//           <FaCalendarAlt className="text-gray-500 mr-2" />
//           <div>
//             <p className="text-gray-600 text-sm">Check In - Check Out</p>
//             <p className="text-gray-800">
//               {startDate && endDate
//                 ? `${format(startDate, 'dd MMM, yyyy')} - ${format(endDate, 'dd MMM, yyyy')}`
//                 : 'Select Date'}
//             </p>
//           </div>
//         </div>

//         {/* Guest Input */}
//         <div
//           className="flex items-center border border-gray-300 rounded-lg p-3 flex-1 w-full lg:w-auto cursor-pointer"
//           onClick={openGuestModal}
//         >
//           <FaUser className="text-gray-500 mr-2" />
//           <div>
//             <p className="text-gray-600 text-sm">Guest</p>
//             <p className="text-gray-800">
//               {`${guests.adults} Adults, ${guests.children} Children, ${guests.rooms} Rooms`}
//             </p>
//           </div>
//         </div>

//         {/* Search Button */}
//         <button
//           className="bg-[#ab8965] text-white  px-6 py-3 rounded-lg font-semibold hover:bg-[#e91e63] transition-all w-full lg:w-auto"
//           onClick={handleSearch}
//         >
//           {loading ? 'Searching...' : 'Search'}
//         </button>
//       </div>

//       {/* Guest Modal */}
//       {isGuestModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//             <h2 className="text-lg font-bold text-gray-800 mb-4">Select Guests</h2>
//             {['adults', 'children', 'rooms'].map((key) => (
//               <div key={key} className="flex justify-between items-center mb-4">
//                 <p className="capitalize">{key}</p>
//                 <div className="flex items-center gap-2">
//                   <button
//                     className="bg-gray-300 px-2 rounded"
//                     onClick={() => updateGuests(key, guests[key] - 1)}
//                   >
//                     -
//                   </button>
//                   <span>{guests[key]}</span>
//                   <button
//                     className="bg-gray-300 px-2 rounded"
//                     onClick={() => updateGuests(key, guests[key] + 1)}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <button
//               className="bg-[#ab8965] text-white py-2 rounded-md font-semibold hover:bg-[#e91e63] transition-all w-full"
//               onClick={closeGuestModal}
//             >
//               Done
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Date Picker Modal */}
//       {isDateModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
//             <ReactDatePicker
//               selected={startDate}
//               onChange={(dates) => {
//                 const [start, end] = dates;
//                 setStartDate(start);
//                 setEndDate(end);
//               }}
//               startDate={startDate}
//               endDate={endDate}
//               selectsRange
//               inline
//               calendarClassName='w-full'
//             />
//             <button
//               className="mt-4 w-full bg-[#ab8965] text-white py-2 rounded-md font-semibold hover:bg-[#e91e63] transition-all"
//               onClick={closeDateModal}
//             >
//               Done
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Banner;
















'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {FaCalendarAlt, FaUser } from 'react-icons/fa';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation


const Banner = () => {
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    rooms: 0,
  });
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter(); // Use next/router for navigation

  const openDateModal = () => setIsDateModalOpen(true);
  const closeDateModal = () => setIsDateModalOpen(false);
  const openGuestModal = () => setIsGuestModalOpen(true);
  const closeGuestModal = () => setIsGuestModalOpen(false);

  // Handle Increment/Decrement for guest selection
  const updateGuests = (key, value) => {
    setGuests((prev) => ({
      ...prev,
      [key]: Math.max(0, value), // Prevent negative values
    }));
  };

  const handleSearch = async () => {
    // Ensure adults and children are numbers
    const { adults, children } = guests;
    // if (!startDate || !endDate || adults <= 0 || children <= 0) {
    //   alert('Please fill in all required fields.');
    //   return;
    // }

    // Set loading state to true while fetching data
    setLoading(true);

    const response = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        startDate: format(startDate, 'yyyy-MM-dd'),
        endDate: format(endDate, 'yyyy-MM-dd'),
        guests,
      }),
    });

    const data = await response.json();
    if (data.error) {
      console.log('Error:', data.error);
      setLoading(false); // Stop loading if error occurs
    } else {
      // Navigate to allrooms route with query parameters or pass data through router
      console.log('Search Results:', data);

      // Option 1: Passing data through URL (query parameters)
      const query = {
        startDate: format(startDate, 'yyyy-MM-dd'),
        endDate: format(endDate, 'yyyy-MM-dd'),
        guests: JSON.stringify(guests), // Pass guests data as string
        results: JSON.stringify(data), // Pass search results
      };

      // Use URLSearchParams to convert query to a valid URL format
      const queryString = new URLSearchParams(query).toString();

      router.push(`/allroom?${queryString}`);

      setLoading(false); // Stop loading after navigation
    }
  };


  return (
    <div className="relative overflow-hidden">
      {/* Main Container */}
      <div className="lg:flex max-w-[1400px] mx-auto px-4 lg:px-12 items-center py-16 gap-12 lg:text-left text-center">
        {/* Left Section */}
        <motion.section
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-montserrat font-bold text-4xl lg:text-6xl text-[#ab8965] leading-tight hidden">
            Hotel Seven View
          </h1>
          <p className="font-lato text-gray-700 mt-6 text-lg hidden">
            Immerse yourself in the epitome of luxury at <b>Hotel Seven View</b>, your premier destination in Uttara Dhaka.
            Our hotel redefines elegance and comfort, offering an exquisite escape for discerning travelers.
          </p>
        </motion.section>

        {/* Right Section */}
        <motion.section
          className="mt-12 lg:mt-0 flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {/* <Image src={bannerImg} alt="Hotel Seven View Banner" className="" /> */}
        </motion.section>
      </div>

      {/* Search Bar Section */}
      <div className="relative bg-white shadow-lg rounded-lg max-w-6xl mx-auto -mt-10 p-4 lg:p-6 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
        {/* Date Input */}
        <div
          className="flex items-center border border-gray-300 rounded-lg p-3 flex-1 w-full lg:w-auto cursor-pointer"
          onClick={openDateModal}
        >
          <FaCalendarAlt className="text-gray-500 mr-2" />
          <div>
            <p className="text-gray-600 text-sm">Check In - Check Out</p>
            <p className="text-gray-800">
              {startDate && endDate
                ? `${format(startDate, 'dd MMM, yyyy')} - ${format(endDate, 'dd MMM, yyyy')}`
                : 'Select Date'}
            </p>
          </div>
        </div>

        {/* Guest Input */}
        <div
          className="flex items-center border border-gray-300 rounded-lg p-3 flex-1 w-full lg:w-auto cursor-pointer"
          onClick={openGuestModal}
        >
          <FaUser className="text-gray-500 mr-2" />
          <div>
            <p className="text-gray-600 text-sm">Guest</p>
            <p className="text-gray-800">
              {`${guests.adults} Adults, ${guests.children} Children, ${guests.rooms} Rooms`}
            </p>
          </div>
        </div>

        {/* Search Button */}
        <button
          className="bg-[#ab8965] text-white  px-6 py-3 rounded-lg font-semibold hover:bg-[#e91e63] transition-all w-full lg:w-auto"
          onClick={handleSearch}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </div>

      {/* Guest Modal */}
      {isGuestModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Select Guests</h2>
            {['adults', 'children', 'rooms'].map((key) => (
              <div key={key} className="flex justify-between items-center mb-4">
                <p className="capitalize">{key}</p>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-gray-300 px-2 rounded"
                    onClick={() => updateGuests(key, guests[key] - 1)}
                  >
                    -
                  </button>
                  <span>{guests[key]}</span>
                  <button
                    className="bg-gray-300 px-2 rounded"
                    onClick={() => updateGuests(key, guests[key] + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
            <button
              className="bg-[#ab8965] text-white py-2 rounded-md font-semibold hover:bg-[#e91e63] transition-all w-full"
              onClick={closeGuestModal}
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Date Picker Modal */}
      {isDateModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
            <ReactDatePicker
              selected={startDate}
              onChange={(dates) => {
                const [start, end] = dates;
                setStartDate(start);
                setEndDate(end);
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
              calendarClassName='w-full'
            />
            <button
              className="mt-4 w-full bg-[#ab8965] text-white py-2 rounded-md font-semibold hover:bg-[#e91e63] transition-all"
              onClick={closeDateModal}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;











