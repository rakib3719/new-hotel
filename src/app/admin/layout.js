'use client';
import { useState } from 'react';
import { FaHome, FaProjectDiagram, FaSignOutAlt, FaUserAlt, FaBars, FaTimes } from 'react-icons/fa';
import { IoIosAdd, IoMdAdd } from 'react-icons/io';
import Link from 'next/link';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import OverviewSection from '../[component]/admin/OverviewSection';
import SweetAlert2 from 'react-sweetalert2';
import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { FaBookBible, FaBuilding, FaMessage } from 'react-icons/fa6';
export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const queryClient = new QueryClient();

  // Links data array
  const Links = [
    {
      path: '/admin',
      name: 'Home',
      slug: 'null',
      icon: <FaHome />,
    },
    {
      path: '/admin/addroom',
      name: 'Add Room',
      slug: 'addroom',
      icon: <IoIosAdd />,
    },
    {
      path: '/admin/allroom',
      name: 'All Room',
      slug: 'allroom',
      icon: <FaBuilding />,
    },
    {
      path: '/admin/addbooking',
      name: 'Add booking',
      slug: 'addbooking',
      icon: <IoMdAdd />,
    },
    {
      path: '/admin/allbooking',
      name: 'Booking management',
      slug: 'allbooking',
      icon: <FaBookBible />,
    },
    {
      path: '/admin/message',
      name: 'Message',
      slug: 'message',
      icon: <FaMessage />,
    },
  ];
const pathname = usePathname()
  const currentPage = pathname.split('/')[2] || 'null';

  const logOutHandle = async () => {
 await signOut()
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 w-full h-16 bg-black text-white flex items-center justify-between px-6 z-50">
        <h1 className="text-xl font-bold">
          <Link href="/">Hotel seven view</Link>
        </h1>
        <div className="flex items-center space-x-4">
          {/* <p className="italic text-sm text-gray-400">"Opportunities don't happen. You create them."</p> */}
          <div className="flex items-center space-x-2">
            <FaUserAlt className="text-white" />
            <h1>Admin</h1>
          </div>
          <button className="md:hidden text-white" onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Sidebar */}

      {/* dekstop */}
      <div className="hidden lg:block fixed top-0 left-0 h-full w-64 bg-[#f2e6b6] z-40">
        <div className="flex items-center justify-center h-16 bg-[#f2e6b6]">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-6">
          <ul>
            {Links.map((link) => (
              <li key={link.slug} className={`px-6 cursor-pointer py-3 hover:bg-black hover:text-white  ${currentPage === link.slug ? 'bg-black text-white' : ''} flex items-center`}>
                <Link href={link.path}  className={`flex items-center space-x-3 `}>
                  {link.icon}
                  <span className="">{link.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={logOutHandle}
                className="px-6 py-3 hover:bg-red-200 flex items-center space-x-3"
              >
                <FaSignOutAlt />
                <span>Log Out</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#f2e6b6] transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-40`}
      >
        <div className="flex items-center justify-center h-16 bg-[#f2e6b6]">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>
        <nav className="mt-6">
          <ul>
          {Links.map((link) => (
              <li key={link.slug} className={`px-6 py-3 hover:bg-black hover:text-white  ${currentPage === link.slug ? 'bg-black text-white' : ''} flex items-center`}>
                <Link href={link.path}  className={`flex items-center space-x-3 `}>
                  {link.icon}
                  <span className="">{link.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <button onClick={logOutHandle} className="px-6 py-3 hover:bg-red-200 flex items-center space-x-3">
                <FaSignOutAlt />
                <span>Log Out</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <QueryClientProvider client={queryClient}>
        <main className="pt-16 md:pl-64 bg-gray-100 min-h-screen">
          {/* Page Content */}
          <div className="relative mx-auto max-w-5xl p-6 bg-gray-900 text-white shadow-md rounded-md mt-8">
            <OverviewSection/>
            {/* Header Image */}
            {/* <div
              className="relative h-56 bg-center bg-cover rounded-md mb-6"
              style={{
                backgroundImage: `url('https://html.liviucerchez.com/hills/tmp/slide-image2.jpg')`,
              }}
            >
            
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <h1 className="text-3xl font-bold">Welcome to Hills Motel</h1>
              </div>
            </div> */}

            {/* Intro Text */}
            {/* <h2 className="text-xl font-bold mb-4">Discover Hills Motel</h2>
            <p className="text-gray-300 mb-6">
              Are you after a good night’s rest right in the heart of Arezzo, Italy, in a modern 3-star complex in a quiet
              street? Hills Motel is the accommodation of choice for corporate guests, visiting tradesmen, individual
              travelers, families, and bus groups. We aim to please!
            </p> */}

            {/* Dynamic Page Content */}
            {children}
          </div>
        </main>
      </QueryClientProvider>
    </>
  );
}
