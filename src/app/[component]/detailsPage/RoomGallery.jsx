// import React from "react";

// const RoomGallery = () => {
//   const images = [
//     { src: "https://travelaprod.sgp1.digitaloceanspaces.com/images/0dI9HuIKVhzMy2vIxSYjbpOhXVY184GdBuSj6M4J.jpg", alt: "Room 1" },
//     { src: "https://travelaprod.sgp1.digitaloceanspaces.com/images/0dI9HuIKVhzMy2vIxSYjbpOhXVY184GdBuSj6M4J.jpg", alt: "Room 2" },
//     { src: "https://travelaprod.sgp1.digitaloceanspaces.com/images/0dI9HuIKVhzMy2vIxSYjbpOhXVY184GdBuSj6M4J.jpg", alt: "Room 3" },
//     { src: "https://travelaprod.sgp1.digitaloceanspaces.com/images/0dI9HuIKVhzMy2vIxSYjbpOhXVY184GdBuSj6M4J.jpg", alt: "Room 4" },
//     { src: "https://travelaprod.sgp1.digitaloceanspaces.com/images/0dI9HuIKVhzMy2vIxSYjbpOhXVY184GdBuSj6M4J.jpg", alt: "Room 5" },
//   ];

//   return (
//     <div className="max-w-7xl mx-auto py-10 px-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`rounded-lg overflow-hidden shadow-md ${
//               index === 0
//                 ? "row-span-2 col-span-2"
//                 : "lg:row-span-1 lg:col-span-1"
//             }`}
//           >
//             <img
//               src={image.src}
//               alt={image.alt}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         ))}
//       </div>
//       <div className="mt-4 text-right">
//         <button className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center space-x-2">
//           <span className="text-xl">13+</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default RoomGallery;





import React, { useState } from "react";

const RoomGallery = ({data,loader}) => {

  let [bg,setbg]=useState(data.images||[])

  if (loader) {
    return 'dfds'
  }
  
  const images = [
    { src: "https://travelaprod.sgp1.digitaloceanspaces.com/images/0dI9HuIKVhzMy2vIxSYjbpOhXVY184GdBuSj6M4J.jpg", alt: "Room 1" },
    { src: "https://travelaprod.sgp1.digitaloceanspaces.com/images/0dI9HuIKVhzMy2vIxSYjbpOhXVY184GdBuSj6M4J.jpg", alt: "Room 2" },
    { src: "https://travelaprod.sgp1.digitaloceanspaces.com/images/0dI9HuIKVhzMy2vIxSYjbpOhXVY184GdBuSj6M4J.jpg", alt: "Room 3" },
    { src: "https://travelaprod.sgp1.digitaloceanspaces.com/images/0dI9HuIKVhzMy2vIxSYjbpOhXVY184GdBuSj6M4J.jpg", alt: "Room 4" },
    { src: "https://travelaprod.sgp1.digitaloceanspaces.com/images/0dI9HuIKVhzMy2vIxSYjbpOhXVY184GdBuSj6M4J.jpg", alt: "Room 5" },
  ];

  return (
    <div className="max-w-[1400px] mx-auto py-10 px-4">
      <h1 className='font-bold text-3xl mb-5'> {data?.name} </h1>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
        {/* Left side: Main image */}
        <div className="md:col-span-2 md:row-span-2 rounded-lg overflow-hidden shadow-md">
          <img
            src={data.frontImage}
            alt={images[0].alt}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right side: 4 smaller images */}
        <div className="grid md:grid-cols-2 gap-4 md:col-span-1 md:row-span-2">
          { bg.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={image}
                alt={image}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default RoomGallery;
