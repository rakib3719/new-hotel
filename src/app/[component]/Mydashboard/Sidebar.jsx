

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  FaHome, FaUser, FaUsers, FaDollarSign, FaShoppingCart,
  FaChartBar, FaThLarge, FaBed, FaUtensils, FaChevronLeft, FaChevronDown,
  FaBookmark,
  FaSignOutAlt
} from 'react-icons/fa';
import { IoBed } from "react-icons/io5";
import { signOut } from 'next-auth/react';

const Sidebar = ({ isCollapsed, showMobileSidebar, handlePageChange }) => {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleExpand = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  return (
    <div
      className={`bg-gray-900 text-white h-screen  flex flex-col fixed md:relative z-50 transition-all duration-300 
        ${isCollapsed ? 'w-16' : 'w-64'} 
        ${showMobileSidebar ? 'left-0' : '-left-64'} md:left-0`}
    >
      {/* Logo */}
      <div className={`flex items-center justify-center mt-10 ${isCollapsed && 'hidden'}`}>
        <div className="text-2xl font-bold text-green-500">
           Hotel <span className="text-white">Seven View</span>
        </div>
      </div>

      {/* User Info */}
      <div className={`flex items-center justify-center mt-6 ${isCollapsed && 'hidden'}`}>
        <img
          src="https://hotel.bdtask-demo.com/xainhotel/assets/img/user/m3.png"
          alt="Avatar"
          className="rounded-full w-12 h-12"
        />
        <div className="ml-4">
          <div className="text-sm font-semibold">Admin</div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="mt-10 flex-1">
        <SidebarLink
          href="/"
          icon={<FaHome />}
          title="Dashboard"
          isCollapsed={isCollapsed}
          onClick={() => handlePageChange('Dashboard')}
        />

        <SidebarLink
          icon={<IoBed />}
          title="Room"
          isCollapsed={isCollapsed}
          dropdown
          isExpanded={expandedMenu === 'Room'}
          onExpand={() => toggleExpand('Room')}
          subLinks={[
            { title: 'Add Room', onClick: () => handlePageChange('Add Room') },
            { title: 'All Rooms', onClick: () => handlePageChange('All Rooms') },
          ]}
        />

        <SidebarLink
          icon={<FaBookmark />}
          title="Booking"
          isCollapsed={isCollapsed}
          dropdown
          isExpanded={expandedMenu === 'Booking'}
          onExpand={() => toggleExpand('Booking')}
          subLinks={[
            { title: 'Booking Management', onClick: () => handlePageChange('Booking Management') },
            { title: 'Add Booking', onClick: () => handlePageChange('Add Booking') },
          ]}
        />

        <SidebarLink
         onClick={() => handlePageChange('Message')}
          icon={<FaUsers />}
          title="Message"
          isCollapsed={isCollapsed}
        />

        <SidebarLink
         onClick={() =>signOut()}
          icon={<FaSignOutAlt />}
          title="Log out"
          isCollapsed={isCollapsed}
        />
      </nav>
    </div>
  );
};

const SidebarLink = ({
  href,
  icon,
  title,
  dropdown,
  isCollapsed,
  isExpanded,
  onExpand,
  subLinks = [],
  onClick
}) => (
  <>
    <div
      className="flex items-center py-2 px-6 hover:bg-gray-700 transition duration-300 cursor-pointer"
      onClick={dropdown ? onExpand : onClick}
    >
      {icon && <span className="mr-3">{icon}</span>}
      {!isCollapsed && <span className="flex-1">{title}</span>}
      {dropdown && !isCollapsed && (
        <span className="ml-auto">
          {isExpanded ? <FaChevronDown className="text-gray-400" /> : <FaChevronLeft className="text-gray-400" />}
        </span>
      )}
    </div>

    {/* Sub-links */}
    {isExpanded && (
      <div className="pl-10">
        {subLinks.map((subLink, index) => (
          <div
            key={index}
            className="py-2 text-sm hover:text-green-500 cursor-pointer"
            onClick={subLink.onClick}
          >
            {subLink.title}
          </div>
        ))}
      </div>
    )}
  </>
);

export default Sidebar;






