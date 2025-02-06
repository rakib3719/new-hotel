'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import axios from 'axios';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import { imageUpload } from '@/app/utilites/PhotoUpload';
import { FaDeleteLeft } from 'react-icons/fa6';
import { MdBrowserUpdated } from "react-icons/md";
import Loader from '@/app/[component]/loader/Loader';

const fetchRooms = async () => {
  const response = await fetch('/api/dashroom');
  if (!response.ok) {
    throw new Error('Failed to fetch rooms');
  }
  return response.json();
};

const AllRoomsInAdmin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRoom, setCurrentRoom] = useState(null);
  const [loader, setLoader] = useState(false);

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['rooms'],
    queryFn: fetchRooms,
  });

  const openModal = (room) => {
    setCurrentRoom(room);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentRoom(null);
  };

  const updateRoom = async (id, updatedData) => {
    const response = await axios.put(`/api/room/${id}`, updatedData);
    console.log(response,"hu response");
    if (response.status === 200) {
      Swal.fire('Updated!', 'Room has been updated successfully.', 'success');
      refetch();
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      price: form.price.value,
     
      maxCapacity: form.maxCapacity.value,
  
      washrooms: form.washrooms.value,
   
      description: form.description.value,
    
    };
    console.log(data, "data to asca ontoto");

    try {
      await updateRoom(currentRoom._id, data);
      closeModal();
    } catch (error) {
      Swal.fire('Error!', 'Failed to update room.', 'error');
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this room?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(`/api/room/${id}`);
        if (response.status === 200) {
          Swal.fire('Deleted!', 'Room has been deleted successfully.', 'success');
          refetch();
        }
      } catch (error) {
        Swal.fire('Error!', error.message, 'error');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const form = e.target;

    try {
      
      const data = {
        name: form.name.value,
        roomNumber: form.roomNumber.value,
        roomSize: form.roomSize.value,
        maxCapacity: form.maxCapacity.value,
        squareFeet: form.squareFeet.value,
        washrooms: form.washrooms.value,
     
        description: form.description.value,
       
      };
     

      // Send data to backend
      const response = await axios.post('/api/room', data);
      if (response.status === 200) {
        toast.success('Room added successfully');
      } else {
        toast.error('Something went wrong! Please try again later.');
      }
    
    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Error uploading room data. Please try again.');
    } finally {
      setLoader(false);
    }
  };

  if (isLoading) return <div>

    <Loader/>
  </div>;
  if (isError) return <p>Error loading rooms</p>;

  const rooms = data.data;

  return (
    <div className="man-h-screen bg-gray-100 ">
      <ToastContainer />
      <div className="max-w-7xl mx-auto lg:px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className= "text-xl md:text-4xl font-extrabold text-gray-900 text-center"
        >
          Manage Rooms
        </motion.h1>

        <div className="overflow-x-auto">
          <table className="min-w-full table-xs md:table-md lg:table-auto bg-white shadow-lg rounded-lg">
            <thead>
              <tr>
                <th className="py-3 md:px-6 text-left text-lg font-semibold text-black">Room Name</th>
                
                <th className="py-3 md:px-6 text-left text-lg font-semibold text-black">Room Price</th>
                <th className="py-3 md:px-6 text-left text-lg font-semibold text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room._id} className="border-b hover:bg-gray-100">
                  <td className="py-4 text-black md:px-6">{room.name}</td>
                  
                  <td className="py-4 text-black px-6">{room.price}</td>
                  <td className="py-4 flex gap-2 px-6">
                    <button
                      onClick={() => openModal(room)}
                      className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-all"
                    >
                     <MdBrowserUpdated />
                    </button>
                    <button
                      onClick={() => handleDelete(room._id)}
                      className="ml-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all"
                    >
                      <FaDeleteLeft/>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalOpen && (
          <div className="fixed max-h-[100vh]   overflow-y-scroll mt-20 inset-0 flex items-center justify-center z-50">
            <form
              onSubmit={handleUpdate}
              className="bg-white p-8 rounded-lg shadow-lg w-full pt-[600px] max-w-lg"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Update Room Details</h2>

              <div className="mb-4">
                <label className="block text-lg text-gray-700">Room Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={currentRoom.name}
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-black"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg text-gray-700">Room Price</label>
                <input
                  type="number"
                  name="price"
                  defaultValue={currentRoom.price || ''}
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-black"
                />
              </div>
             
              <div className="mb-4">
                <label className="block text-lg text-gray-700">Max Capacity</label>
                <input
                  type="text"
                  name="maxCapacity"
                  defaultValue={currentRoom.maxCapacity || ''}
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-black"
                />
              </div>
             
              <div className="mb-4">
                <label className="block text-lg text-gray-700">Washrooms</label>
                <input
                  type="text"
                  name="washrooms"
                  defaultValue={currentRoom.washrooms || ''}
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-black"
                />
              </div>
              {/* <div className="mb-4">
                <label className="block text-lg text-gray-700">Amenities</label>
                <div className="flex flex-wrap">
                  <label className="mr-4">
                    <input type="checkbox" name="amenities" value="AC" /> AC
                  </label>
                  <label className="mr-4">
                    <input type="checkbox" name="amenities" value="WiFi" /> WiFi
                  </label>
                  <label className="mr-4">
                    <input type="checkbox" name="amenities" value="TV" /> TV
                  </label>
                  <label className="mr-4">
                    <input type="checkbox" name="amenities" value="Parking" /> Parking
                  </label>
                </div>
              </div> */}
              <div className="mb-4">
                <label className="block text-lg text-gray-700">Description</label>
                <textarea
                  name="description"
                  defaultValue={currentRoom.description || ''}
                  rows={4}
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-black"
                ></textarea>
              </div>
              {/* <div className="mb-4">
                <label className="block text-lg text-gray-700">Room Front Image</label>
                <input
                  type="file"
                  name="frontImage"
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-black"
                />
              </div> */}
              {/* <div className="mb-4">
                <label className="block text-lg text-gray-700">Multiple Images</label>
                <input
                  type="file"
                  name="multipleImages"
                  multiple
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-black"
                />
              </div> */}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loader}
                  className={`px-6 py-2 ${
                    loader ? 'bg-gray-500' : 'bg-yellow-500 hover:bg-yellow-600'
                  } text-white font-semibold rounded-lg`}
                >
                  {loader ? 'Updating...' : 'Update Room'}
                </button>
              </div>
            </form>
          </div>
        )}

        
      </div>
    </div>
  );
};

export default AllRoomsInAdmin;
