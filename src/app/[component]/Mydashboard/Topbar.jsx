// import React from 'react';
// import { FaAlignLeft } from 'react-icons/fa';

// const Topbar = ({ toggleSidebar, toggleMobileSidebar }) => {
//   return (
//     <div className="flex items-center p-4 bg-white shadow w-full">
//       {/* Left Side */}
//       <div className="flex items-center space-x-4">
//         {/* Button for all devices */}
//         <button
//           onClick={() => {
//             toggleSidebar();
//             toggleMobileSidebar();
//           }}
//           className="text-gray-700 md:hidden"
//         >
//           <FaAlignLeft className="text-2xl cursor-pointer" />
//         </button>

//         {/* Desktop Button */}
//         <button onClick={toggleSidebar} className="text-gray-700 hidden md:inline-block">
//           <FaAlignLeft className="text-2xl cursor-pointer" />
//         </button>

//         <div className="bg-green-500 text-white px-4 py-2 rounded">Website</div>
//         <div className="bg-blue-500 text-white px-4 py-2 rounded">Customer Invoice</div>
//         <div className="bg-gray-800 text-white px-4 py-2 rounded">Booking Report</div>
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center ml-auto space-x-4">
//         <div className="w-6 h-6 bg-gray-300 rounded"></div>
//         <div className="w-6 h-6 bg-gray-300 rounded"></div>
//         <div className="w-6 h-6 bg-gray-300 rounded"></div>
//         <div className="text-lg font-mono">19:55:49</div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;







// // modified toggle for mobile

// import Link from 'next/link';
// import React from 'react';
// import { FaAlignLeft } from 'react-icons/fa';

// const Topbar = ({ toggleSidebar, toggleMobileSidebar }) => {
//   return (
//     <div className="flex items-center p-4 bg-white shadow w-full">
//       {/* Left Side */}
//       <div className="flex items-center space-x-4">
//         {/* Button for all devices */}
//         <button 
//           onClick={() => {
//             toggleSidebar();
//             // toggleMobileSidebar();
//           }}
//           className="text-gray-700  hidden"
//         >
//           <FaAlignLeft className="text-2xl cursor-pointer" />
//         </button>
//         <button
//           onClick={() => {
//             // toggleSidebar();
//             toggleMobileSidebar();
//           }}
//           className="text-gray-700 block md:hidden lg:hidden"
//         >
//           <FaAlignLeft className="text-2xl cursor-pointer " />
//         </button>

//         {/* Desktop Button */}
//         <button onClick={toggleSidebar} className="text-gray-700 hidden md:inline-block">
//           <FaAlignLeft className="text-2xl cursor-pointer" />
//         </button>

//         <div className="bg-green-500 text-white px-4 py-2 rounded"><Link href={'/'}>Website</Link></div>
//         <div className="bg-blue-500 text-white px-4 py-2 rounded hidden md:block">Customer Invoice</div>
//         <div className="bg-gray-800 text-white px-4 py-2 rounded hidden md:block">Booking Report</div>
//       </div>

//       {/* Right Side */}
//       <div className="hidden items-center ml-auto space-x-4  md:flex">
//         <div className="w-6 h-6 bg-gray-300 rounded"></div>
//         <div className="w-6 h-6 bg-gray-300 rounded"></div>
//         <div className="w-6 h-6 bg-gray-300 rounded"></div>
//         <div className=" text-lg font-mono">19:55:49</div>
//       </div>
//     </div>
//   );
// };

// export default Topbar;








'use client'

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { FaAlignLeft } from 'react-icons/fa';

const Topbar = ({ toggleSidebar, toggleMobileSidebar }) => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center p-4 bg-white shadow w-full">
   
      <div className="flex items-center space-x-4">
     
        <button 
          onClick={() => {
            toggleSidebar();
          }}
          className="text-gray-700 hidden"
        >
          <FaAlignLeft className="text-2xl cursor-pointer" />
        </button>
        <button
          onClick={() => {
            toggleMobileSidebar();
          }}
          className="text-gray-700 block md:hidden lg:hidden"
        >
          <FaAlignLeft className="text-2xl cursor-pointer " />
        </button>

        {/* Desktop Button */}
        <button onClick={toggleSidebar} className="text-gray-700 hidden md:inline-block">
          <FaAlignLeft className="text-2xl cursor-pointer" />
        </button>

        <div className="bg-green-500 text-white px-4 py-2 rounded">
          <Link href={'/'}>Website</Link>
        </div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded hidden md:block">
          Customer Invoice
        </div>
        <div className="bg-gray-800 text-white px-4 py-2 rounded hidden md:block">
          Booking Report
        </div>
      </div>

      {/* Right Side */}
      <div className=" items-center ml-auto space-x-4 flex">
        <div className="w-6 h-6 bg-gray-300 rounded hidden md:block"></div>
        <div className="w-6 h-6 bg-gray-300 rounded hidden md:block"></div>
        <div className="w-6 h-6 bg-gray-300 rounded hidden md:block"></div>
        <div className="text-lg font-mono font-bold">{time}</div>
      </div>
    </div>
  );
};

export default Topbar;
