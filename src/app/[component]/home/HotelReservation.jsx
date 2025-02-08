'use client'
import React, { useState, useEffect } from "react";
import CountUp from "react-countup"; // Import CountUp
import { useInView } from "react-intersection-observer"; // For intersection observer

const HotelReservationSection = () => {
  const [startCount, setStartCount] = useState(false);

  // Intersection observer to trigger the count animation
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  useEffect(() => {
    if (inView) {
      setStartCount(true); // Start the count animation
    }
  }, [inView]);

  return (
    <section className="w-full">
      {/* Top Stats Section */}
      <div
        ref={ref}
        className="relative w-full h-[200px] flex justify-around items-center bg-cover bg-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/8KDmBn8/environmental-conservation.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-[#0e3c6e] opacity-80"></div>

        {/* Total Booking */}
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold text-yellow-400">
            {startCount && <CountUp start={0} end={350} duration={2} />}+
          </h1>
          <p className="text-lg font-semibold">Total Booking</p>
        </div>

        {/* Visitors Daily */}
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold text-yellow-400">
            {startCount && <CountUp start={0} end={20} duration={2} />}+
          </h1>
          <p className="text-lg font-semibold">Visitors Daily</p>
        </div>

        {/* Positive Feedback */}
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold text-yellow-400">
            {startCount && <CountUp start={0} end={90} duration={2} />}%
          </h1>
          <p className="text-lg font-semibold">Positive Feedback</p>
        </div>
      </div>

      {/* Bottom Hotel Reservation Section */}
      <div
        className="relative w-full h-[300px] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(https://i.ibb.co/8KDmBn8/environmental-conservation.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-[#000000] opacity-60"></div>
        <h1 className="relative text-5xl font-bold text-yellow-400 mb-4">
          HOTEL RESERVATION
        </h1>
        <p className="relative text-lg text-white font-semibold">
          Extra Discount When You Book Directly With Us
        </p>
      </div>
    </section>
  );
};

export default HotelReservationSection;









// import React from "react";
// import Image from "next/image"; // If using Next.js
// // import topOverlayImage1 from "../../../../src/asset/images/overlay1.jpg"; // Replace with overlay image 1
// // import topOverlayImage2 from "../../../../src/asset/images/overlay2.jpg"; // Replace with overlay image 2

// const HotelReservationSection = () => {
//   return (
//     <section className="w-full">
//       {/* Top Stats Section */}
//       <div
//         className="relative w-full h-[200px] flex justify-around items-center bg-cover bg-center"
//         style={{
//           backgroundImage: `url(https://i.ibb.co/8KDmBn8/environmental-conservation.jpg)`,
//         }}
//       >
//         <div className="absolute inset-0 bg-[#0e3c6e] opacity-80"></div>
//         <div className="relative text-center text-white">
//           <h1 className="text-5xl font-bold text-yellow-400">350+</h1>
//           <p className="text-lg font-semibold">Total Booking</p>
//         </div>
//         <div className="relative text-center text-white">
//           <h1 className="text-5xl font-bold text-yellow-400">20+</h1>
//           <p className="text-lg font-semibold">Visitors Daily</p>
//         </div>
//         <div className="relative text-center text-white">
//           <h1 className="text-5xl font-bold text-yellow-400">90%</h1>
//           <p className="text-lg font-semibold">Positive Feedback</p>
//         </div>
//       </div>

//       {/* Bottom Hotel Reservation Section */}
//       <div
//         className="relative w-full h-[300px] flex flex-col justify-center items-center text-center bg-cover bg-center"
//         style={{
//           backgroundImage: `url(https://i.ibb.co/8KDmBn8/environmental-conservation.jpg)`,
//         }}
//       >
//         {/* Dark overlay */}
//         <div className="absolute inset-0 bg-[#000000] opacity-60"></div>

//         {/* Overlay Images */}
//         <div className="absolute top-10 left-10 w-[100px] h-[100px] lg:w-[350px] lg:h-[150px]">
//           <Image
//           width={400}
//           height={300}
//             src={'https://i.ibb.co/8KDmBn8/environmental-conservation.jpg'}
//             alt="Overlay Image 1"
//             className="object-cover rounded-full shadow-lg"
//           />
//         </div>
//         <div className="absolute top-10 right-10 w-[100px] h-[100px] lg:w-[400px] lg:h-[150px]">
//           <Image
//             width={400}
//             height={300}
//             src={'https://i.ibb.co/8KDmBn8/environmental-conservation.jpg'}
//             alt="Overlay Image 2"
//             className="object-cover rounded-full shadow-lg"
//           />
//         </div>

//         {/* Centered Text */}
//         <h1 className="relative text-5xl font-bold text-yellow-400 mb-4 z-10">
//           HOTEL RESERVATION
//         </h1>
//         <p className="relative text-lg text-white font-semibold z-10">
//           Extra Discount When You Book Directly With Us
//         </p>
//       </div>
//     </section>
//   );
// };

// export default HotelReservationSection;
