'use client'

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Swiper modules
import { TbCurrencyTaka } from "react-icons/tb";


const OurRms = ({data}) => {
    const [rooms, setRooms] = useState(data || []);
   
    if (rooms.length===0) {
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
      </div>;
    }
  
    return (
      <div className="max-w-[1400px] mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-8">Our Rooms</h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            // Mobile devices
            0: {
              slidesPerView: 1,
            },
            // Tablets
            640: {
              slidesPerView: 2,
            },
            // Desktops
            1024: {
              slidesPerView: 3,
            },
          }}
          className="rounded-lg overflow-hidden"
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Image Container */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={room.frontImage || 'https://via.placeholder.com/400'}
                    alt={room.name}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>
  
                {/* Text Content */}
                <div className="mt-4 text-center">
                  <h1 className="text-2xl font-semibold text-gray-800">{room.name}</h1>
                  <p className="text-gray-600 mt-2 text-lg flex items-center justify-center"><TbCurrencyTaka />{room.price} / {room?.price % 2 !== 0 ? 'day' : 'night'}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default OurRms;