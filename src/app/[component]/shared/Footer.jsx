'use client'
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
  
  
  
  // Skip rendering for certain paths
  if (pathname.startsWith('/mydashboard')) return null;
  // If the current pathname contains '/admin', do not render the footer
  if (pathname.includes('/admin' || '/login')) {
    return null;
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-[#ab8965] font-bold text-lg mb-4">Hotel-Seven-View</h2>
          <p className="text-sm">
            Quick Bites is your one-stop solution for delicious food delivery.
            Explore, order, and enjoy your favorite meals at the click of a
            button.
          </p>
          <p className="mt-4 text-sm">
            <strong>Email:</strong> hotelsevenview.official@gmail.com
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +8801825791133
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-[#ab8965] font-semibold text-lg mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-[#ab8965]">
                About Us
              </a>
            </li>
            <li>
              <a href="/menu" className="hover:text-[#ab8965]">
                Menu
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#ab8965]">
                Contact
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-[#ab8965]">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-[#ab8965] font-semibold text-lg mb-4">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sm mb-4">
            Stay updated with the latest offers and deals!
          </p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 mb-4 rounded bg-gray-800 text-gray-200 focus:outline-none focus:ring-[#ab8965] focus:ring-2"
            />
            <button
              type="submit"
              className="bg-[#ab8965] text-white px-4 py-2 rounded hover:bg-[#ab855c] transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-[#ab8965] font-semibold text-lg mb-4">
            Follow Us
          </h3>
          <p className="text-sm mb-4">Connect with us on social media:</p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/hotelsevenview"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#ab8965]"
            >
              <FaFacebookF size={24} />
            </a>
          
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 py-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()}Hotel seven view. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
