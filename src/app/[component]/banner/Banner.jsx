
// 'use client'
// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import image1 from '../../../../public/images/sailing.jpg'
// const images = [
//     "https://hhotelbd.com/wp-content/uploads/2018/07/hhotel.jpg",
//     "https://hhotelbd.com/wp-content/uploads/2018/07/jamuna.jpg",
//     "https://hhotelbd.com/wp-content/uploads/2018/07/sailing.jpg",
//   ];

// export default function ImageCarousel() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [index]);

//   const nextSlide = () => {
//     setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
//   };

//   const prevSlide = () => {
//     setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
//   };

//   return (
//     <div className="relative w-full h-[500px] overflow-hidden">
//       <AnimatePresence>
//         <motion.img
//           key={images[index]}
//           src={images[index]}
//           alt="Cox's Bazar Sea Beach"
//           className="w-full h-full object-cover"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1 }}
//         />
//       </AnimatePresence>
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
//       >
//         <ChevronLeft className="text-white" />
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full"
//       >
//         <ChevronRight className="text-white" />
//       </button>
//       <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
//         {images.map((_, i) => (
//           <div
//             key={i}
//             className={`h-2 w-2 rounded-full ${
//               i === index ? "bg-white" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
//         Cox's Bazar Sea Beach
//       </div>
//       <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-lg">
//         The Largest Sea Beach in The World
//       </div>
//     </div>
//   );
// }












"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://hhotelbd.com/wp-content/uploads/2018/07/hhotel.jpg",
  "https://hhotelbd.com/wp-content/uploads/2018/07/jamuna.jpg",
  "https://hhotelbd.com/wp-content/uploads/2018/07/sailing.jpg",
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Get previous and next image indexes
  const prevIndex = index === 0 ? images.length - 1 : index - 1;
  const nextIndex = index === images.length - 1 ? 0 : index + 1;

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Main Image */}
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt="Cox's Bazar Sea Beach"
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Left Arrow */}
      <div
        className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2"
        onMouseEnter={() => setHovered("left")}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Preview Image (on hover) */}
        {hovered === "left" && (
          <motion.img
            src={images[prevIndex]}
            alt="Previous"
            className="w-16 h-10 object-cover rounded-md shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="relative bg-white/70 hover:bg-white p-3 rounded-full shadow-md"
        >
          <ChevronLeft className="text-gray-800" />
        </button>
      </div>

      {/* Right Arrow */}
      <div
        className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2"
        onMouseEnter={() => setHovered("right")}
        onMouseLeave={() => setHovered(null)}
      >
        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="relative bg-white/70 hover:bg-white p-3 rounded-full shadow-md"
        >
          <ChevronRight className="text-gray-800" />
        </button>

        {/* Preview Image (on hover) */}
        {hovered === "right" && (
          <motion.img
            src={images[nextIndex]}
            alt="Next"
            className="w-16 h-10 object-cover rounded-md shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Overlay Text */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold">
        Cox's Bazar Sea Beach
      </div>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-lg">
        The Largest Sea Beach in The World
      </div>
    </div>
  );
}
