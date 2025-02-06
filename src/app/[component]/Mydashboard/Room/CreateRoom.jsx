// 'use client';
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import { imageUpload } from '@/app/utilites/PhotoUpload';

// const CreateRoom = () => {
//   const [loader, setLoader] = useState(false);


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoader(true);

//     const form = e.target;

//     try {
//       // Handle front image upload
//       const frontImage = form.frontImage.files[0];
//       const front_image_url = await imageUpload(frontImage);

//       // Handle multiple images upload
//       const multipleImages = form.multipleImages.files;
//       const imagesUrl = await Promise.all(
//         Array.from(multipleImages).map((image) => imageUpload(image))
//       );

//       // Prepare form data
//       const data = {
//         name: form.name.value,
//         roomNumber: form.roomNumber.value,
//         roomSize: form.roomSize.value,
//         price: form.price.value,
//         bedrooms:form.bedrooms.value,

//         adults:form.adults.value,
//         childs:form.childs.value,
//         beds:form.beds.value,        
//         maxCapacity: form.maxCapacity.value,
//         squareFeet: form.squareFeet.value,
//         washrooms: form.washrooms.value,
//         amenities: Array.from(form.amenities)
//           .filter((input) => input.checked)
//           .map((input) => input.value),
//         description: form.description.value,
//         frontImage: front_image_url,
//         images: imagesUrl,
//       };

//       console.log(data, "data sob asca taile");

//       // Send data to backend
//       const response = await axios.post('/api/room', data);
//       console.log(response, "done mama");
//       if (response.status === 200) {
//         toast.success('Room added successfully');
//         setLoader(false)
//         // form.reset();
//       } else {
//         toast.error('Something went wrong! Please try again later.');
//         setLoader(false)
//       }

//     } catch (error) {
//       console.error('Error:', error.message);
//       toast.error('Error uploading room data. Please try again.');
//       setLoader(false)
//     }

//     finally {
//       setLoader(false);
//     }
//   };
//   return (
//     <div className="min-h-screen bg-gray-100 py-12">
//       <ToastContainer />
//       <div className="max-w-5xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-4xl font-extrabold text-gray-900"
//           >
//             Add New Room
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-gray-500 mt-3 text-lg"
//           >
//             Fill out the details below to add a new room to your property.
//           </motion.p>
//         </div>
//         <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8 space-y-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >


//             <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
//               <div className='mb-4'>
//                 <label className="block  text-xl font-medium text-gray-700">Room Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   placeholder="Room Name"
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div className='mb-4'>
//                 <label className="block  text-xl font-medium text-gray-700">Room Number</label>
//                 <input
//                   type="text"
//                   name="roomNumber"
//                   required
//                   placeholder="e.g., 300 sq.ft."
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//             </div>

//             {/* Front Image */}
//             <div className="mb-6">
//               <label className="block text-xl font-medium text-gray-700">Upload Front Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 name="frontImage"
//                 required
//                 className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//             {/* Multiple Images */}
//             <div className="mb-6">
//               <label className="block text-xl font-medium text-gray-700">Upload Multiple Images</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 name="multipleImages"
//                 multiple
//                 required
//                 className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//             {/* Room Details */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Room Size</label>
//                 <input
//                   type="text"
//                   name="roomSize"
//                   required
//                   placeholder="e.g., 25 sqm"
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Maximum Capacity</label>
//                 <input
//                   type="number"
//                   name="maxCapacity"
//                   required
//                   placeholder="How many guests?"
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Square Feet</label>
//                 <input
//                   type="text"
//                   name="squareFeet"
//                   required
//                   placeholder="e.g., 300 sq.ft."
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Number of Washrooms</label>
//                 <input
//                   type="number"
//                   name="washrooms"
//                   required
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Number of Bedrooms</label>
//                 <input
//                   type="number"
//                   name="bedrooms"
//                   required
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Number of Beds</label>
//                 <input
//                   type="number"
//                   name="beds"
//                   required
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Number of Adutls</label>
//                 <input
//                   type="number"
//                   name="adults"
//                   required
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Number of Childs</label>
//                 <input
//                   type="number"
//                   name="childs"
//                   required
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   required
//                   placeholder="Price"
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 {/* <label className="block text-xl font-medium text-gray-700">Maximum Capacity</label>
//                    <input
//                      type="number"
//                      name="maxCapacity"
//                      required
//                      placeholder="How many guests?"
//                      className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                    /> */}
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Square Feet</label>
//                 <input
//                   type="text"
//                   name="squareFeet"
//                   required
//                   placeholder="e.g., 300 sq.ft."
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Number of Washrooms</label>
//                 <input
//                   type="number"
//                   name="washrooms"
//                   required
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//             </div>
//             {/* Amenities */}
//             <div className="mb-6">
//               <label className="block text-xl font-medium text-gray-700">Room Amenities</label>
//               <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {['Cable TV', 'Shower', 'Safe Box', 'Free WiFi', 'Work Desk', 'Refrigerator'].map(
//                   (amenity) => (
//                     <div key={amenity} className="flex items-center space-x-2">
//                       <input
//                         type="checkbox"
//                         name="amenities"
//                         value={amenity}
//                         id={amenity}
//                         className="h-5 w-5 text-yellow-500 focus:ring-2 focus:ring-yellow-500"
//                       />
//                       <label htmlFor={amenity} className="text-gray-700">
//                         {amenity}
//                       </label>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//             {/* Description */}
//             <div className="mb-6">
//               <label className="block text-xl font-medium text-gray-700">Room Description</label>
//               <textarea
//                 name="description"
//                 rows="4"
//                 required
//                 placeholder="Write a brief description about the room"
//                 className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//             {/* Submit Button */}
//             <motion.button
//               type="submit"
//               disabled={loader}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1 }}
//               className={`w-full py-4 mt-8 ${loader ? 'bg-gray-400' : 'bg-yellow-500'
//                 } text-white text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-all`}
//             >
//               {loader ? 'Adding Room...' : 'Add Room'}
//             </motion.button>
//           </motion.div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateRoom;



















'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { imageUpload } from '@/app/utilites/PhotoUpload';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const CreateRoom = () => {
  const [loader, setLoader] = useState(false);
  const [availableFrom, setAvailableFrom] = useState(null);
  const [availableTo, setAvailableTo] = useState(null);
  const [washrooms,setWashrooms]=useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const form = e.target;

    try {
      // Handle front image upload
      const frontImage = form.frontImage.files[0];
      const front_image_url = await imageUpload(frontImage);

      // Handle multiple images upload
      const multipleImages = form.multipleImages.files;
      const imagesUrl = await Promise.all(
        Array.from(multipleImages).map((image) => imageUpload(image))
      );

      // Prepare form data
      const data = {
        name: form.name.value,
        price: form.price.value,
        bedrooms:form.bedrooms.value,

        adults:form.adults.value,
        childs:form.childs.value,
        beds:form.beds.value,        
        maxCapacity: form.maxCapacity.value,
      
        washrooms,
        amenities: Array.from(form.amenities)
          .filter((input) => input.checked)
          .map((input) => input.value),
        description: form.description.value,
        frontImage: front_image_url,
        images: imagesUrl,
        availableFrom,
        availableTo,
      };

      console.log(data, "data sob asca taile");

      // Send data to backend
      const response = await axios.post('/api/room', data);
      console.log(response, "done mama");
      if (response.status === 200) {
        toast.success('Room added successfully');
        setLoader(false)
        // form.reset();
      } else {
        toast.error('Something went wrong! Please try again later.');
        setLoader(false)
      }

    } catch (error) {
      console.error('Error:', error.message);
      toast.error('Error uploading room data. Please try again.');
      setLoader(false)
    }

    finally {
      setLoader(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <ToastContainer />
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
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
            className="text-gray-500 mt-3 text-lg"
          >
            Fill out the details below to add a new room to your property.
          </motion.p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8 space-y-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >


            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
              <div className='mb-4'>
                <label className="block  text-xl font-medium text-gray-700">Room Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Room Name"
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              {/* <div className='mb-4'>
                <label className="block  text-xl font-medium text-gray-700">Room Number</label>
                <input
                  type="text"
                  name="roomNumber"
                  required
                  placeholder="e.g., 300 sq.ft."
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                />
              </div> */}
            </div>

            {/* Front Image */}
            <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700">Upload Front Image</label>
              <input
                type="file"
                accept="image/*"
                name="frontImage"
                required
                className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Multiple Images */}
            <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700">Upload Multiple Images</label>
              <input
                type="file"
                accept="image/*"
                name="multipleImages"
                multiple
                required
                className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Room Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xl font-medium text-gray-700">Maximum Capacity</label>
                <input
                  type="number"
                  name="maxCapacity"
                  required
                  placeholder="How many guests?"
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              {/* <div>
                <label className="block text-xl font-medium text-gray-700">Square Feet</label>
                <input
                  type="text"
                  name="squareFeet"
                  required
                  placeholder="e.g., 300 sq.ft."
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                />
              </div> */}
              {/* <div>
                <label className="block text-xl font-medium text-gray-700">Number of Washrooms</label>
                <input
                  type="number"
                  name="washrooms"
                  required
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                />
              </div> */}
              <div>
                <label className="block text-xl font-medium text-gray-700">Number of Bedrooms</label>
                <input
                  type="number"
                  name="bedrooms"
               
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-xl font-medium text-gray-700">Number of Beds</label>
                <input
                  type="number"
                  name="beds"
               
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-xl font-medium text-gray-700">Number of Adutls</label>
                <input
                  type="number"
                  name="adults"
                  required
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label className="block text-xl font-medium text-gray-700">Number of Childs</label>
                <input
                  type="number"
                  name="childs"
                  required
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xl font-medium text-gray-700">Available From</label>
                <DatePicker
                  selected={availableFrom}
                  onChange={(date) => setAvailableFrom(date)}
                  dateFormat="yyyy-MM-dd"
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                  placeholderText="Select start date"
                />
              </div>
              <div>
                <label className="block text-xl font-medium text-gray-700">Available To</label>
                <DatePicker
                  selected={availableTo}
                  onChange={(date) => setAvailableTo(date)}
                  dateFormat="yyyy-MM-dd"
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                  placeholderText="Select end date"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xl font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  required
                  placeholder="Price"
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                {/* <label className="block text-xl font-medium text-gray-700">Maximum Capacity</label>
                   <input
                     type="number"
                     name="maxCapacity"
                     required
                     placeholder="How many guests?"
                     className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                   /> */}
              </div>
              {/* <div>
                <label className="block text-xl font-medium text-gray-700">Square Feet</label>
                <input
                  type="text"
                
                  onChange={(event)=> setsquareFeet(event.target.value)}
                  
                  placeholder="e.g., 300 sq.ft."
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                />
              </div> */}
              <div>
                <label className="block text-xl font-medium text-gray-700">Number of Washrooms</label>
                <input
                  type="number"
                  onChange={(event)=> setWashrooms(event.target.value)}
                  required
                  className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
            {/* Amenities */}
            <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700">Room Amenities</label>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Cable TV', 'Shower', 'Safe Box', 'Free WiFi', 'Work Desk', 'Refrigerator'].map(
                  (amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="amenities"
                        value={amenity}
                        id={amenity}
                        className="h-5 w-5 text-yellow-500 focus:ring-2 focus:ring-yellow-500"
                      />
                      <label htmlFor={amenity} className="text-gray-700">
                        {amenity}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
            {/* Description */}
            <div className="mb-6">
              <label className="block text-xl font-medium text-gray-700">Room Description</label>
              <textarea
                name="description"
                rows="4"
                required
                placeholder="Write a brief description about the room"
                className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loader}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className={`w-full py-4 mt-8 ${loader ? 'bg-gray-400' : 'bg-yellow-500'
                } text-white text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-all`}
            >
              {loader ? 'Adding Room...' : 'Add Room'}
            </motion.button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default CreateRoom;












// 'use client';
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import { imageUpload } from '@/app/utilites/PhotoUpload';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { EditorState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';


// const CreateRoom = () => {
//   const [loader, setLoader] = useState(false);
//   const [availableFrom, setAvailableFrom] = useState(null);
//   const [availableTo, setAvailableTo] = useState(null);
//   const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoader(true);

//     const form = e.target;

//     try {
//       // Handle front image upload
//       const frontImage = form.frontImage.files[0];
//       const front_image_url = await imageUpload(frontImage);

//       // Handle multiple images upload
//       const multipleImages = form.multipleImages.files;
//       const imagesUrl = await Promise.all(
//         Array.from(multipleImages).map((image) => imageUpload(image))
//       );

//       // Prepare form data
//       const data = {
//         name: form.name.value,
//         roomNumber: form.roomNumber.value,
//         roomSize: form.roomSize.value,
//         price: form.price.value,
//         bedrooms: form.bedrooms.value,

//         adults: form.adults.value,
//         childs: form.childs.value,
//         beds: form.beds.value,
//         maxCapacity: form.maxCapacity.value,
//         squareFeet: form.squareFeet.value,
//         washrooms: form.washrooms.value,
//         amenities: Array.from(form.amenities)
//           .filter((input) => input.checked)
//           .map((input) => input.value),
//           description: editorState.getCurrentContent().getPlainText(),
//         frontImage: front_image_url,
//         images: imagesUrl,
//         availableFrom,
//         availableTo,
//       };

//       console.log(data, "data sob asca taile");

//       // Send data to backend
//       const response = await axios.post('/api/room', data);
//       console.log(response, "done mama");
//       if (response.status === 200) {
//         toast.success('Room added successfully');
//         setLoader(false)
//         // form.reset();
//       } else {
//         toast.error('Something went wrong! Please try again later.');
//         setLoader(false)
//       }

//     } catch (error) {
//       console.error('Error:', error.message);
//       toast.error('Error uploading room data. Please try again.');
//       setLoader(false)
//     }

//     finally {
//       setLoader(false);
//     }
//   };
//   return (
//     <div className="min-h-screen bg-gray-100 py-12">
//       <ToastContainer />
//       <div className="max-w-5xl mx-auto px-6">
//         <div className="text-center mb-12">
//           <motion.h1
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-4xl font-extrabold text-gray-900"
//           >
//             Add New Room
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: -50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="text-gray-500 mt-3 text-lg"
//           >
//             Fill out the details below to add a new room to your property.
//           </motion.p>
//         </div>
//         <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-lg p-8 space-y-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 1, delay: 0.5 }}
//           >


//             <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
//               <div className='mb-4'>
//                 <label className="block  text-xl font-medium text-gray-700">Room Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   placeholder="Room Name"
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div className='mb-4'>
//                 <label className="block  text-xl font-medium text-gray-700">Room Number</label>
//                 <input
//                   type="text"
//                   name="roomNumber"
//                   required
//                   placeholder="e.g., 300 sq.ft."
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//             </div>

//             {/* Front Image */}
//             <div className="mb-6">
//               <label className="block text-xl font-medium text-gray-700">Upload Front Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 name="frontImage"
//                 required
//                 className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//             {/* Multiple Images */}
//             <div className="mb-6">
//               <label className="block text-xl font-medium text-gray-700">Upload Multiple Images</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 name="multipleImages"
//                 multiple
//                 required
//                 className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>
//             {/* Room Details */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Room Size</label>
//                 <input
//                   type="text"
//                   name="roomSize"
//                   required
//                   placeholder="e.g., 25 sqm"
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Maximum Capacity</label>
//                 <input
//                   type="number"
//                   name="maxCapacity"
//                   required
//                   placeholder="How many guests?"
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Square Feet</label>
//                 <input
//                   type="text"
//                   name="squareFeet"
//                   required
//                   placeholder="e.g., 300 sq.ft."
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Number of Washrooms</label>
//                 <input
//                   type="number"
//                   name="washrooms"
//                   required
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Number of Bedrooms</label>
//                 <input
//                   type="number"
//                   name="bedrooms"
//                   required
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Number of Beds</label>
//                 <input
//                   type="number"
//                   name="beds"
//                   required
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Number of Adutls</label>
//                 <input
//                   type="number"
//                   name="adults"
//                   required
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Number of Childs</label>
//                 <input
//                   type="number"
//                   name="childs"
//                   required
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Available From</label>
//                 <DatePicker
//                   selected={availableFrom}
//                   onChange={(date) => setAvailableFrom(date)}
//                   dateFormat="yyyy-MM-dd"
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                   placeholderText="Select start date"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Available To</label>
//                 <DatePicker
//                   selected={availableTo}
//                   onChange={(date) => setAvailableTo(date)}
//                   dateFormat="yyyy-MM-dd"
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                   placeholderText="Select end date"
//                 />
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   required
//                   placeholder="Price"
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 {/* <label className="block text-xl font-medium text-gray-700">Maximum Capacity</label>
//                    <input
//                      type="number"
//                      name="maxCapacity"
//                      required
//                      placeholder="How many guests?"
//                      className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                    /> */}
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Square Feet</label>
//                 <input
//                   type="text"
//                   name="squareFeet"
//                   required
//                   placeholder="e.g., 300 sq.ft."
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//               <div>
//                 <label className="block text-xl font-medium text-gray-700">Number of Washrooms</label>
//                 <input
//                   type="number"
//                   name="washrooms"
//                   required
//                   className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//                 />
//               </div>
//             </div>
//             {/* Amenities */}
//             <div className="mb-6">
//               <label className="block text-xl font-medium text-gray-700">Room Amenities</label>
//               <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
//                 {['Cable TV', 'Shower', 'Safe Box', 'Free WiFi', 'Work Desk', 'Refrigerator'].map(
//                   (amenity) => (
//                     <div key={amenity} className="flex items-center space-x-2">
//                       <input
//                         type="checkbox"
//                         name="amenities"
//                         value={amenity}
//                         id={amenity}
//                         className="h-5 w-5 text-yellow-500 focus:ring-2 focus:ring-yellow-500"
//                       />
//                       <label htmlFor={amenity} className="text-gray-700">
//                         {amenity}
//                       </label>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//             {/* Description */}
//             {/* <div className="mb-6">
//               <label className="block text-xl font-medium text-gray-700">Room Description</label>
//               <textarea
//                 name="description"
//                 rows="4"
//                 required
//                 placeholder="Write a brief description about the room"
//                 className="mt-2 w-full p-4 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500"
//               />
//             </div> */}

//             <div className="mb-6">
//               <label className="block text-xl font-medium text-gray-700">Room Description</label>
//               <div className="mt-2 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-yellow-500">
//                 <Editor
//                   editorState={editorState}
//                   onEditorStateChange={setEditorState}
//                   toolbar={{
//                     options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'history'],
//                   }}
//                 />
//               </div>
//             </div>
//             {/* Submit Button */}
//             <motion.button
//               type="submit"
//               disabled={loader}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 1, delay: 1 }}
//               className={`w-full py-4 mt-8 ${loader ? 'bg-gray-400' : 'bg-yellow-500'
//                 } text-white text-lg font-semibold rounded-lg hover:bg-yellow-600 transition-all`}
//             >
//               {loader ? 'Adding Room...' : 'Add Room'}
//             </motion.button>
//           </motion.div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateRoom;










