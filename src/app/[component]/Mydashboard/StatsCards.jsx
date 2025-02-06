// import React from "react";
// import { FaCalendarAlt, FaDollarSign, FaUser } from "react-icons/fa";

// const StatsCards = () => {

//   const stats = [
//     {
//       id: 1,
//       title: "TODAY BOOKING",
//       value: "2",
//       icon: <FaCalendarAlt className="text-white text-2xl" />, // Icon
//       bgColor: "bg-orange-500", // Background color
//     },
//     {
//       id: 2,
//       title: "TOTAL AMOUNT",
//       value: "510.4m",
//       icon: <FaDollarSign className="text-white text-2xl" />, // Icon
//       bgColor: "bg-green-500", // Background color
//     },
//     {
//       id: 3,
//       title: "TOTAL CUSTOMER",
//       value: "3.1k",
//       icon: <FaUser className="text-white text-2xl" />, // Icon
//       bgColor: "bg-red-500", // Background color
//     },
//     {
//       id: 4,
//       title: "TOTAL BOOKING",
//       value: "1k",
//       icon: <FaCalendarAlt className="text-white text-2xl" />, // Icon
//       bgColor: "bg-blue-500", // Background color
//     },
//   ];

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-gray-100">
//       {stats.map((stat) => (
//         <div
//           key={stat.id}
//           className="bg-white shadow-md rounded-md p-4 flex items-center space-x-4"
//         >
//           <div
//             className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.bgColor}`}
//           >
//             {stat.icon}
//           </div>
//           <div>
//             <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
//             <p className="text-black text-lg font-bold">{stat.value}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default StatsCards;











'use client';

import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaDollarSign, FaUser } from "react-icons/fa";
import { FaBangladeshiTakaSign } from "react-icons/fa6";


const StatsCards = () => {
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({
    totalToday: 0,
    totalAmount: 0,
    totalMonth: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        const response = await fetch("/api/booked-total");
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
      finally {
        setLoading(setLoading(false))
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen ">
      <div className="relative w-24 h-24">
        {/* Rotating Outer Circle */}
        <div className="absolute inset-0 border-4 border-t-rose-300 border-rose-700 rounded-full animate-spin"></div>

        {/* Inner Hotel Icon */}
        <div className="absolute inset-4 flex flex-col items-center justify-center bg-white rounded-full">
          <div className="w-8 h-8 bg-yellow-500 rounded-b-md"></div>
          <div className="w-10 h-4 bg-rose-500 rounded-t-md"></div>
          <div className="mt-2 text-center text-xs font-semibold text-gray-900">HOTEL</div>
        </div>
      </div>
    </div>
  }

  const statsData = [
    {
      id: 1,
      title: "TODAY BOOKING",
      value: stats.totalToday,
      icon: <FaCalendarAlt className="text-white text-2xl" />, // Icon
      bgColor: "bg-orange-500", // Background color
    },
    {
      id: 2,
      title: "TOTAL AMOUNT",
      value: `$${stats.totalAmount}`,
      icon: <FaBangladeshiTakaSign className="text-white text-2xl" />, // Icon
      bgColor: "bg-green-500", // Background color
    },
    {
      id: 3,
      title: "TOTAL MONTHLY BOOKING",
      value: stats.totalMonth,
      icon: <FaUser className="text-white text-2xl" />, // Icon
      bgColor: "bg-red-500", // Background color
    },
  ];




  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100">
      {statsData.map((stat) => (
        <div
          key={stat.id}
          className="bg-white shadow-md rounded-md p-4 flex items-center space-x-4"
        >
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.bgColor}`}
          >
            {stat.icon}
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.title}</h3>
            <p className="text-black text-lg font-bold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
