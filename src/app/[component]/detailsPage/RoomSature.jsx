'use client';
import { FaUserFriends, FaRulerCombined, FaDoorOpen, FaBed } from 'react-icons/fa';
import { MdCable, MdWifi, MdBalcony, MdBathtub, MdShower } from 'react-icons/md';
import { AiOutlineDesktop, AiOutlineSafety } from 'react-icons/ai';
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { MdLocationCity } from "react-icons/md";
import { FaPersonWalkingDashedLineArrowRight } from 'react-icons/fa6';


const RoomSature = ({data}) => {

  return (
    <div className=" text-gray-800">
      {/* Title and Description Section */}
      <div className="text-center">
        <h1 className="text-3xl font-bold">{data?.name}d</h1>
        <div className="flex justify-center flex-wrap items-center space-x-4 text-sm text-gray-600 mt-2">
          <div className="flex items-center">
            <FaUserFriends className="mr-1 text-[#a88654]" />max Capacity: {data?.maxCapacity}
          </div>
          <div className="flex items-center">
            <FaRulerCombined className="mr-1 text-[#a88654]" /> {data?.squareFeet}Square Feet Size
          </div>
          <div className="flex items-center">
            <FaDoorOpen className="mr-1 text-[#a88654]" /> Room Number: {data?.roomNumber}
          </div>
          <div className="flex items-center">
            <FaPersonWalkingDashedLineArrowRight className="mr-1 text-[#a88654]" /> {data?.washrooms
            } WashRooms
          </div>
        </div>
        <p className="mt-6 text-gray-500 leading-6">
         {data?.description}
        </p>
      </div>

      {/* Room Amenities Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-700">Room Amenities</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6 text-gray-600">
          <div className="flex items-center space-x-2">
            <MdCable className="text-[#a88654] text-xl" />
            <span>Cable TV</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdWifi className="text-[#a88654] text-xl" />
            <span>Free WiFi</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdBalcony className="text-[#a88654] text-xl" />
            <span>Balcony</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdBathtub className="text-[#a88654] text-xl" />
            <span>Bathtub</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdShower className="text-[#a88654] text-xl" />
            <span>Shower</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineDesktop className="text-[#a88654] text-xl" />
            <span>Work Desk</span>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineSafety className="text-[#a88654] text-xl" />
            <span>Safebox</span>
          </div>
          <div className="flex items-center space-x-2">
            <CgSmartHomeRefrigerator className="text-[#a88654] text-xl" />
            <span>Refrigerator</span>
          </div>
          <div className="flex items-center space-x-2">
         <MdLocationCity className="text-[#a88654] text-xl"/>
            <span>City View</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSature;
