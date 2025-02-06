import React from 'react';
import { motion } from 'framer-motion';

const AddRoom = () => {

  

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Title */}
      <div className="text-center mb-10">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold text-gray-900"
        >
          Add New Room
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-gray-500 mt-2 text-lg"
        >
          Fill out the details below to add a new room to your property.
        </motion.p>
      </div>

      {/* Form */}
      <div className="bg-white shadow-lg rounded-lg p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Front Image Upload */}
          <div className="mb-6">
            <label className="block text-xl font-medium text-gray-700">Upload Front Image</label>
            <input
              type="file"
              accept="image/*"
              className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          {/* Multiple Images Upload */}
          <div className="mb-6">
            <label className="block text-xl font-medium text-gray-700">Upload Multiple Images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          {/* Room Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700">Room Size</label>
              <input
                type="text"
                placeholder="e.g., 25 sqm"
                className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
            <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700">Maximum Capacity</label>
              <input
                type="number"
                placeholder="How many guests?"
                className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
            <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700">Square Feet</label>
              <input
                type="text"
                placeholder="e.g., 300 sq.ft."
                className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
            <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700">Number of Washrooms</label>
              <input
                type="number"
                className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
          </div>
          <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700">Price</label>
              <input
                type="number"
                name='price'
                className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50"
              />
            </div>
          {/* Room Amenities */}
          {/* <div className="mb-6">
            <label className="block text-xl font-medium text-gray-700">Room Amenities</label>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'Cable TV',
                'Shower',
                'Safe Box',
                'Free WiFi',
                'Work Desk',
                'Refrigerator',
                'Balcony',
                'Bathtub',
                'City View',
              ].map((amenity) => (
                <div key={amenity} className="flex items-center">
                  <input
                    type="checkbox"
                    id={amenity}
                    className="mr-2 h-5 w-5 text-yellow-500"
                  />
                  <label htmlFor={amenity} className="text-gray-700">{amenity}</label>
                </div>
              ))}
            </div>
          </div> */}

          {/* Room Description */}
          <div className="mb-6">
            <label className="block text-xl font-medium text-gray-700">Room Description</label>
            <textarea
              rows="4"
              placeholder="Write a brief description about the room"
              className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full py-4 mt-8 bg-yellow-500 text-white text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-all"
          >
            Add Room
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AddRoom;
