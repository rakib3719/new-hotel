import React from 'react';
import { FaUsers, FaBed, FaBath, FaDoorClosed } from 'react-icons/fa'; // Importing relevant icons

const RoomDescription = ({ data, loader }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md md:w-[70%]">
      <h2 className="text-2xl font-bold mb-4">About this home</h2>

      {/* <ul className="list-disc list-inside mb-4">
        <li>AC Bedroom</li>
        <li>Attached Washroom</li>
        <li>Smart 32 inch TV</li>
        <li>Free Refreshment for Tea & Coffee</li>
        <li>Almirah ...</li>
      </ul> */}

      <div>
        <div
          className="mt-4"
         > 
         {data?.description}
         </div>
      </div>

      {/* <a href="#" className="text-blue-500 underline">See more</a> */}
      <div className="mt-6 flex gap-6 items-center">
        {/* Guest Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-xl font-semibold">
            <FaUsers className="text-[#ab8965]" />
            <span>{Number(data?.adults) + Number(data?.childs) || ''}</span>
          </div>
          <div className="text-gray-500">Guests</div>
        </div>
        {/* Bedrooms Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-xl font-semibold">
            <FaDoorClosed className="text-[#ab8965]" />
            <span>{data?.bedrooms}</span>
          </div>
          <div className="text-gray-500">Bedrooms</div>
        </div>
        {/* Bed Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-xl font-semibold">
            <FaBed className="text-[#ab8965]" />
            <span>{data?.beds}</span>
          </div>
          <div className="text-gray-500">Bed</div>
        </div>
        {/* Bathrooms Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-xl font-semibold">
            <FaBath className="text-[#ab8965]" />
            <span>{data?.washrooms || ''}</span>
          </div>
          <div className="text-gray-500">Bathrooms</div>
        </div>
      </div>
    </div>
  );
};

export default RoomDescription;
