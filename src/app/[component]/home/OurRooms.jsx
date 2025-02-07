
// // for testing server

import axios from "axios";
import OurRms from "./OurRooms/OurRms";


// Server-side data fetching
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ourroom`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.rooms || [];

}
const OurRooms = async () => {
  // Fetch rooms data
  const rooms = await getData();

  // Handle no rooms case
  if (rooms.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative w-24 h-24">
          {/* Rotating Outer Circle */}
          <div className="absolute inset-0 border-4 border-t-rose-300 border-rose-700 rounded-full animate-spin"></div>

          {/* Inner Hotel Icon */}
          <div className="absolute inset-4 flex flex-col items-center justify-center bg-white rounded-full">
            <div className="w-8 h-8 bg-yellow-500 rounded-b-md"></div>
            <div className="w-10 h-4 bg-rose-500 rounded-t-md"></div>
            <div className="mt-2 text-center text-xs font-semibold text-gray-900">
              HOTEL
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render rooms carousel
  return (
  <div>
    <OurRms data={rooms} />
  </div>
  );
};

export default OurRooms;
