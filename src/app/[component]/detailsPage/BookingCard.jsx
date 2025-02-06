





// import React, { useState } from "react";
// import { FaCalendarAlt, FaUser } from "react-icons/fa";

// const BookingCard = ({ data }) => {
//   // Format the date as 'YYYY-MM-DD' for input compatibility
//   const formatDate = (date) => date.toISOString().split("T")[0];

//   // Default dates
//   const today = new Date();

//   const defaultCheckInDate = data.availableFrom
//     ? formatDate(new Date(data.availableFrom))
//     : formatDate(today);
//   const defaultCheckOutDate = data.availableTo
//     ? formatDate(new Date(data.availableTo))
//     : formatDate(today);


//   const [checkInDate, setCheckInDate] = useState(defaultCheckInDate);
//   const [checkOutDate, setCheckOutDate] = useState(defaultCheckOutDate);
//   const [guests, setGuests] = useState({
//     adults: 0,
//     children: 0,

//   });
//   const [showGuestModal, setShowGuestModal] = useState(false);

//   const updateGuestCount = (type, operation) => {
//     setGuests((prevGuests) => {
//       const newCount =
//         operation === "increment"
//           ? prevGuests[type] + 1
//           : Math.max(0, prevGuests[type] - 1);
//       return { ...prevGuests, [type]: newCount };
//     });
//   };

//   return (
//     <div className="max-w-sm p-6 bg-white shadow-md rounded-lg border border-gray-200 relative">
//       {/* Rent Sale Section */}
//       <div className="text-center">
//         <h2 className="text-gray-500 text-sm font-medium">Rent Sale</h2>
//         <p className="text-pink-500 text-2xl font-bold mt-2">
//           BDT {data.price}
//           <span className="text-base font-normal text-gray-600">/day</span>
//         </p>
//       </div>

//       {/* Date Selection */}
//       <div className="mt-6">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="flex items-center border rounded-lg p-2 space-x-2">
//             <FaCalendarAlt className="text-gray-500" />
//             <div>
//               <p className="text-xs text-gray-500">Check In</p>
//               <input
//                 type="date"
//                 value={checkInDate}
//                 onChange={(e) => setCheckInDate(e.target.value)}
//                 className="w-full border-none outline-none text-sm text-gray-800"
//               />
//             </div>
//           </div>
//           <div className="flex items-center border rounded-lg p-2 space-x-2">
//             <FaCalendarAlt className="text-gray-500" />
//             <div>
//               <p className="text-xs text-gray-500">Check Out</p>
//               <input
//                 type="date"
//                 value={checkOutDate}
//                 onChange={(e) => setCheckOutDate(e.target.value)}
//                 className="w-full border-none outline-none text-sm text-gray-800"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Guests Selection */}
//       <div className="mt-4 relative">
//         <div
//           className="flex items-center border rounded-lg p-2 space-x-2 cursor-pointer"
//           onClick={() => setShowGuestModal(true)}
//         >
//           <FaUser className="text-gray-500" />
//           <div className="w-full">
//             <p className="text-sm text-gray-800">
//               {guests.adults + guests.children + guests.infants || "Guest"}
//             </p>
//           </div>
//         </div>

//         {/* Guest Modal */}
//         {showGuestModal && (
//           <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-50">
//             {/* Adults */}
//             <div className="flex justify-between items-center py-2 border-b">
//               <div>
//                 <p className="text-sm font-medium">Adult</p>
//                 <p className="text-xs text-gray-500">Ages 13 or above</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => updateGuestCount("adults", "decrement")}
//                   className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
//                 >
//                   –
//                 </button>
//                 <span className="text-sm font-medium">{guests.adults}</span>
//                 <button
//                   onClick={() => updateGuestCount("adults", "increment")}
//                   className="w-8 h-8 flex items-center justify-center border rounded-full bg-black text-white text-lg"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* Children */}
//             <div className="flex justify-between items-center py-2 border-b">
//               <div>
//                 <p className="text-sm font-medium">Children</p>
//                 <p className="text-xs text-gray-500">Ages 2-12</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => updateGuestCount("children", "decrement")}
//                   className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
//                 >
//                   –
//                 </button>
//                 <span className="text-sm font-medium">{guests.children}</span>
//                 <button
//                   onClick={() => updateGuestCount("children", "increment")}
//                   className="w-8 h-8 flex items-center justify-center border rounded-full bg-black text-white text-lg"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* Infants */}
//             <div className=" justify-between items-center py-2 hidden">
//               <div>
//                 <p className="text-sm font-medium">Infants</p>
//                 <p className="text-xs text-gray-500">Under 2</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => updateGuestCount("infants", "decrement")}
//                   className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
//                 >
//                   –
//                 </button>
//                 <span className="text-sm font-medium">{guests.infants}</span>
//                 <button
//                   onClick={() => updateGuestCount("infants", "increment")}
//                   className="w-8 h-8 flex items-center justify-center border rounded-full bg-black text-white text-lg"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>



//             {/* Done Button */}
//             <button
//               onClick={() => setShowGuestModal(false)}
//               className="mt-4 w-full py-2 bg-pink-500 text-white text-sm font-medium rounded-lg hover:bg-pink-600 transition"
//             >
//               Done
//             </button>


//           </div>
//         )}
//       </div>
//       <div className="flex flex-col space-y-4 mt-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Enter your email"
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             name="phoneNumber"
//             id="phoneNumber"
//             placeholder="Enter your phone number"
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
//           />
//         </div>
//       </div>


//       <div>
//         <textarea name="" required id="" rows={4} cols={10} className="w-full border my-4" placeholder="write here"  ></textarea>
//       </div>

//       {/* Book Now Button */}
//       <button className="mt-6 w-full bg-pink-500 text-white text-sm font-medium py-3 rounded-lg hover:bg-pink-600 transition-colors">
//         BOOK NOW
//       </button>
//     </div>
//   );
// };

// export default BookingCard;







// import React, { useState } from "react";
// import { FaCalendarAlt, FaUser } from "react-icons/fa";

// const BookingCard = ({ data }) => {
//   // Format the date as 'YYYY-MM-DD' for input compatibility
//   const formatDate = (date) => date.toISOString().split("T")[0];

//   // Default dates
//   const today = new Date();

//   const defaultCheckInDate = data.availableFrom
//     ? formatDate(new Date(data.availableFrom))
//     : formatDate(today);
//   const defaultCheckOutDate = data.availableTo
//     ? formatDate(new Date(data.availableTo))
//     : formatDate(today);

//   const [checkInDate, setCheckInDate] = useState(defaultCheckInDate);
//   const [checkOutDate, setCheckOutDate] = useState(defaultCheckOutDate);
//   const [guests, setGuests] = useState({
//     adults: 0,
//     children: 0,
//   });
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [showGuestModal, setShowGuestModal] = useState(false);

//   const updateGuestCount = (type, operation) => {
//     setGuests((prevGuests) => {
//       const newCount =
//         operation === "increment"
//           ? prevGuests[type] + 1
//           : Math.max(0, prevGuests[type] - 1);
//       return { ...prevGuests, [type]: newCount };
//     });
//   };

//   const handleBooking = () => {
//     const bookingDetails = {
//       checkInDate,
//       checkOutDate,
//       guests,
//       email,
//       phoneNumber,
//       message,
//     };

//     console.log("Booking Details:", bookingDetails);

//     // Simulate API call or further processing
//     alert("Booking submitted successfully!");
//   };

//   return (
//     <div className="max-w-sm p-6 bg-white shadow-md rounded-lg border border-gray-200 relative">
//       {/* Rent Sale Section */}
//       <div className="text-center">
//         <h2 className="text-gray-500 text-sm font-medium">Rent Sale</h2>
//         <p className="text-pink-500 text-2xl font-bold mt-2">
//           BDT {data.price}
//           <span className="text-base font-normal text-gray-600">/day</span>
//         </p>
//       </div>

//       {/* Date Selection */}
//       <div className="mt-6">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="flex items-center border rounded-lg p-2 space-x-2">
//             <FaCalendarAlt className="text-gray-500" />
//             <div>
//               <p className="text-xs text-gray-500">Check In</p>
//               <input
//                 type="date"
//                 value={checkInDate}
//                 onChange={(e) => setCheckInDate(e.target.value)}
//                 className="w-full border-none outline-none text-sm text-gray-800"
//               />
//             </div>
//           </div>
//           <div className="flex items-center border rounded-lg p-2 space-x-2">
//             <FaCalendarAlt className="text-gray-500" />
//             <div>
//               <p className="text-xs text-gray-500">Check Out</p>
//               <input
//                 type="date"
//                 value={checkOutDate}
//                 onChange={(e) => setCheckOutDate(e.target.value)}
//                 className="w-full border-none outline-none text-sm text-gray-800"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Guests Selection */}
//       <div className="mt-4 relative">
//         <div
//           className="flex items-center border rounded-lg p-2 space-x-2 cursor-pointer"
//           onClick={() => setShowGuestModal(true)}
//         >
//           <FaUser className="text-gray-500" />
//           <div className="w-full">
//             <p className="text-sm text-gray-800">
//               {guests.adults + guests.children || "Guest"}
//             </p>
//           </div>
//         </div>

//         {/* Guest Modal */}
//         {showGuestModal && (
//           <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-50">
//             {/* Adults */}
//             <div className="flex justify-between items-center py-2 border-b">
//               <div>
//                 <p className="text-sm font-medium">Adult</p>
//                 <p className="text-xs text-gray-500">Ages 13 or above</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => updateGuestCount("adults", "decrement")}
//                   className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
//                 >
//                   –
//                 </button>
//                 <span className="text-sm font-medium">{guests.adults}</span>
//                 <button
//                   onClick={() => updateGuestCount("adults", "increment")}
//                   className="w-8 h-8 flex items-center justify-center border rounded-full bg-black text-white text-lg"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* Children */}
//             <div className="flex justify-between items-center py-2 border-b">
//               <div>
//                 <p className="text-sm font-medium">Children</p>
//                 <p className="text-xs text-gray-500">Ages 2-12</p>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button
//                   onClick={() => updateGuestCount("children", "decrement")}
//                   className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
//                 >
//                   –
//                 </button>
//                 <span className="text-sm font-medium">{guests.children}</span>
//                 <button
//                   onClick={() => updateGuestCount("children", "increment")}
//                   className="w-8 h-8 flex items-center justify-center border rounded-full bg-black text-white text-lg"
//                 >
//                   +
//                 </button>
//               </div>
//             </div>

//             {/* Done Button */}
//             <button
//               onClick={() => setShowGuestModal(false)}
//               className="mt-4 w-full py-2 bg-pink-500 text-white text-sm font-medium rounded-lg hover:bg-pink-600 transition"
//             >
//               Done
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Email and Phone Number Inputs */}
//       <div className="flex flex-col space-y-4 mt-4">
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
//           />
//         </div>

//         <div>
//           <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             name="phoneNumber"
//             id="phoneNumber"
//             placeholder="Enter your phone number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
//           />
//         </div>
//       </div>

//       {/* Message Textarea */}
//       <div>
//         <textarea
//           name="message"
//           id="message"
//           rows={4}
//           cols={10}
//           placeholder="Write your message here"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="w-full border my-4 p-3 rounded-lg shadow-sm focus:outline-none"
//         />
//       </div>

//       {/* Book Now Button */}
//       <button
//         onClick={handleBooking}
//         className="mt-6 w-full bg-pink-500 text-white text-sm font-medium py-3 rounded-lg hover:bg-pink-600 transition-colors"
//       >
//         BOOK NOW
//       </button>
//     </div>
//   );
// };

// export default BookingCard;










import React, { useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const BookingCard = ({ data }) => {
  // Format the date as 'YYYY-MM-DD' for input compatibility
  const formatDate = (date) => date.toISOString().split("T")[0];

  // Default dates
  const today = new Date();

  const defaultCheckInDate = data.availableFrom
    ? formatDate(new Date(data.availableFrom))
    : formatDate(today);
  const defaultCheckOutDate = data.availableTo
    ? formatDate(new Date(data.availableTo))
    : formatDate(today);

  const [checkInDate, setCheckInDate] = useState(defaultCheckInDate);
  const [checkOutDate, setCheckOutDate] = useState(defaultCheckOutDate);
  const [guests, setGuests] = useState({
    adults: Number(data?.adults)  || 0,
    children: Number(data?.childs ) ||0,
  });
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [booker, setbooker] = useState("");
  const [message, setMessage] = useState("");
  const [showGuestModal, setShowGuestModal] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  const updateGuestCount = (type, operation) => {
    setGuests((prevGuests) => {
      const newCount =
        operation === "increment"
          ? prevGuests[type] + 1
          : Math.max(0, prevGuests[type] - 1);
      return { ...prevGuests, [type]: newCount };
    });
  };

  const handleBooking = async () => {
    const bookingDetails = {
      name:data?.name ||'',
      roomNumber:data?.roomNumber ||'',
      roomSize:data?.roomSize ||'',
      squareFeet:data?.squareFeet ||'',
      washrooms:data?.washrooms ||'',
      bookedRoomId:data?._id ||'er67657624234t3432432e56767r',
      maxCapacity:data?.maxCapacity||'',
      pricePerRoom: data?.price || 10000,
      checkInDate,
      checkOutDate,
      guests,
      booker,
      email,
      phoneNumber,
      message,
      status: 'pending',
    };
console.log(bookingDetails);

    setLoading(true); // Set loading to true when submitting the form

    try {
      const res = await fetch('/api/add-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      if (res.ok) {
        toast.success("Booking submitted successfully!"); // Show success toaster
      } else {
        toast.error("Failed to submit booking. Please try again."); // Show error toaster
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("An error occurred. Please try again."); // Show error toaster
    } finally {
      setLoading(false); // Set loading to false after request completion
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-200 relative">
      {/* Rent Sale Section */}
      <div className="text-center">
        <h2 className="text-gray-500 text-sm font-medium">Rent Sale</h2>
        <p className="text-[#ab8965] text-2xl font-bold mt-2">
          BDT {data.price}
          <span className="text-base font-normal text-gray-600">/{data?.price % 2 !== 0 ? 'day' : 'night'}</span>
        </p>
      </div>

      {/* Date Selection */}
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center border rounded-lg p-2 space-x-2">
            <FaCalendarAlt className="text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Check In</p>
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full border-none outline-none text-sm text-gray-800"
              />
            </div>
          </div>
          <div className="flex items-center border rounded-lg p-2 space-x-2">
            <FaCalendarAlt className="text-gray-500" />
            <div>
              <p className="text-xs text-gray-500">Check Out</p>
              <input
                type="date"
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                className="w-full border-none outline-none text-sm text-gray-800"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Guests Selection */}
      <div className="mt-4 relative">
        <div
          className="flex items-center border rounded-lg p-2 space-x-2 cursor-pointer"
          onClick={() => setShowGuestModal(true)}
        >
          <FaUser className="text-gray-500" />
          <div className="w-full">
            <p className="text-sm text-gray-800">
              {guests.adults + guests.children || "Guest"}
            </p>
          </div>
        </div>

        {/* Guest Modal */}
        {showGuestModal && (
          <div className="absolute top-14 left-0 w-full bg-white shadow-lg rounded-lg p-4 z-50">
            {/* Adults */}
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="text-sm font-medium">Adult</p>
                <p className="text-xs text-gray-500">Ages 13 or above</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateGuestCount("adults", "decrement")}
                  className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
                >
                  –
                </button>
                <span className="text-sm font-medium">{guests.adults}</span>
                <button
                  onClick={() => updateGuestCount("adults", "increment")}
                  className="w-8 h-8 flex items-center justify-center border rounded-full bg-black text-white text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center py-2 border-b">
              <div>
                <p className="text-sm font-medium">Children</p>
                <p className="text-xs text-gray-500">Ages 2-12</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateGuestCount("children", "decrement")}
                  className="w-8 h-8 flex items-center justify-center border rounded-full text-lg"
                >
                  –
                </button>
                <span className="text-sm font-medium">{guests.children}</span>
                <button
                  onClick={() => updateGuestCount("children", "increment")}
                  className="w-8 h-8 flex items-center justify-center border rounded-full bg-black text-white text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Done Button */}
            <button
              onClick={() => setShowGuestModal(false)}
              className="mt-4 w-full py-2 bg-[#ab8965] text-white text-sm font-medium rounded-lg hover:bg-pink-600 transition"
            >
              Done
            </button>
          </div>
        )}
      </div>

      {/* Email and Phone Number Inputs */}

      <div className="flex flex-col space-y-4 mt-4">
        <div>
          <label htmlFor="booker" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            required
            type="text"
            name="booker"
            id="booker"
            placeholder="Enter your name"
            value={booker}
            onChange={(e) => setbooker(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        
      </div>

      <div className="flex flex-col space-y-4 mt-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            required
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div>
        <textarea
          name="message"
          id="message"
          rows={4}
          cols={10}
          placeholder="Write your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full border my-4 p-3 rounded-lg shadow-sm focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleBooking}
        disabled={loading} // Disable the button if loading is true
        className={`w-full py-2 mt-4 text-white font-medium rounded-lg ${loading ? "bg-gray-400" : "bg-[#ab8965] hover:bg-pink-600"
          }`}
      >
        {loading ? "Processing..." : "BOOK NOW"}
      </button>

      {/* Toast Notifications */}
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar />

    </div>
  );
};

export default BookingCard;
