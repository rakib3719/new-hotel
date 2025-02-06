'use client';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

// Import required modules
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

export default function AboutSlideImage() {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
          delay: 3000, // Slide duration in milliseconds
          disableOnInteraction: false, // Allows interaction without stopping autoplay
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination, Autoplay]} // Removed Navigation
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Slide 1"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="Slide 2"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="Slide 3"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="Slide 4"
            className="w-full h-[400px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
