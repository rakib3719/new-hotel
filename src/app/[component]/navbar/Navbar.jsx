'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import logo from '../../../asset/images/logo2.png'
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Skip rendering for certain paths
  if (pathname.startsWith('/mydashboard')) return null;
  if (pathname.includes('/admin') || pathname.includes('/login')) {
    return null;
  }

  // Navigation menu items array
  const menuItems = [
    { pathname: "Home", path: "/" },
    { pathname: "About Us", path: "/about" },
    { pathname: "All room", path: "/allroom" },
    { pathname: "Contact Us", path: "/contact" },
    { pathname: "Gallery", path: "/gallery" },
  ];

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
      <nav>
        <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex font-bold items-center bg-white w-442 h-20 -ml-14">
            <Image src={logo} alt="Seven view" width={200} height={90} />
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-8 text-lg font-medium ${isScrolled ? "text-black" : "text-white"}`}>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-jost font-bold transition-all duration-300 ease-in-out ${pathname === item.path
                    ? "text-[#f58616]"
                    : isScrolled ? "text-black" : "text-white"
                  }`}
              >
                {item.pathname}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
