


// 'use client';
// import React, { useState } from 'react';
// import Sidebar from './Sidebar';
// import Topbar from './Topbar';

// const Mydashboard = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [showMobileSidebar, setShowMobileSidebar] = useState(false);
//   const [activePage, setActivePage] = useState('Dashboard'); // State to track active page

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const toggleMobileSidebar = () => {
//     setShowMobileSidebar(!showMobileSidebar);
//   };

//   // Handle page change
//   const handlePageChange = (page) => {
//     setActivePage(page);
//     setShowMobileSidebar(false); // Close mobile sidebar on page selection
//   };

//   // Render content based on active page
//   const renderContent = () => {
//     switch (activePage) {
//       case 'Dashboard':
//         return <h1 className="text-2xl font-semibold">Welcome to My Dashboard</h1>;
//       case 'Room':
//         return <h1 className="text-2xl font-semibold">Room Details</h1>;
//       case 'Customer':
//         return <h1 className="text-2xl font-semibold">Customer Management</h1>;
//       case 'Human Resource':
//         return <h1 className="text-2xl font-semibold">HR Dashboard</h1>;
//       case 'Payment Setting':
//         return <h1 className="text-2xl font-semibold">Payment Settings</h1>;
//       default:
//         return <h1 className="text-2xl font-semibold">Page Not Found</h1>;
//     }
//   };

//   return (
//     <div className="flex h-screen relative">
//       {/* Sidebar */}
//       <Sidebar
//         isCollapsed={isCollapsed}
//         showMobileSidebar={showMobileSidebar}
//         handlePageChange={handlePageChange}
//       />

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Topbar */}
//         <Topbar
//           toggleSidebar={toggleSidebar}
//           toggleMobileSidebar={toggleMobileSidebar}
//         />

//         {/* Page Content */}
//         <main className="flex-grow bg-gray-100 p-6">
//           {renderContent()}
//         </main>
//       </div>

//       {/* Mobile Sidebar Overlay */}
//       {showMobileSidebar && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
//           onClick={toggleMobileSidebar}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Mydashboard;










'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import CreateRoom from './Room/CreateRoom';
// import Bla from '@/app/admin/allroom/page';
import AllRoomsInAdmin from '@/app/admin/allroom/page';
import BookingTable from '@/app/admin/allbooking/page';
import AddBookingForm from '../admin/AddBookingForm';
import StatsCards from './StatsCards';
import Messagepage from '@/app/admin/message/page';

const Mydashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [activePage, setActivePage] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setShowMobileSidebar(!showMobileSidebar);
  };

  const handlePageChange = (page) => {
    setActivePage(page);
    setShowMobileSidebar(false);
  };

  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <div>
          <h1 className="text-2xl font-semibold">My Dashboard</h1>
          <StatsCards/>
        </div> ;
      case 'Add Room':
        return <div className='overflow-y-scroll max-h-screen'><CreateRoom/></div>;
      case 'All Rooms':
        return <div><AllRoomsInAdmin/></div>;
      case 'Booking Management':
        return <div> <BookingTable/></div>;
      case 'Add Booking':
        return <div><AddBookingForm/></div>;
      case 'Message':
        return <div className='overflow-y-scroll max-h-screen'><Messagepage/></div>;
      default:
        return <h1 className="text-2xl font-semibold">Page Not Found</h1>;
    }
  };

  return (
    <div className="flex h-screen relative">
      <Sidebar
        isCollapsed={isCollapsed}
        showMobileSidebar={showMobileSidebar}
        handlePageChange={handlePageChange}
      />

      <div className="flex-1 flex flex-col">
        <Topbar
          toggleSidebar={toggleSidebar}
          toggleMobileSidebar={toggleMobileSidebar}
        />

        <main className="flex-grow bg-gray-100 p-6">
          {renderContent()}
        </main>
      </div>

      {showMobileSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileSidebar}
        ></div>
      )}
    </div>
  );
};

export default Mydashboard;
