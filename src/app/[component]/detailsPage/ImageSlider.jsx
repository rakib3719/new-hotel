


// 'use client';

// import { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';

// const ImageSlider = ({ data }) => {
//   if (!data.images || data.length === 0) {
//     return (
//       <div className="text-center mt-10 text-gray-500">
//         <p>No images to display.</p>
//       </div>
//     );
//   }

//   return (
//     <section className="max-w-7xl mx-auto py-8 px-4">
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination, Navigation]}
//         className="mySwiper"
//       >
//         {data.images.map((image, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={image}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-64 object-cover rounded-lg shadow-lg"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default ImageSlider;









'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const ImageSlider = ({ data,loader}) => {
  if (loader) {
    return <div className='text-center'> <h1>Images Loading...</h1> </div>
  }
  if (!data.images || data.images.length === 0) {
    return (
      <div className="text-center mt-10 text-gray-500">
        <p>No images to display.</p>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-8 ">
      <Swiper
        slidesPerView={1} // Default for smallest screens
        spaceBetween={10} // Default space between slides
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // For screens >= 640px
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2, // For screens >= 768px
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, // For screens >= 1024px
            spaceBetween: 40,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSlider;
