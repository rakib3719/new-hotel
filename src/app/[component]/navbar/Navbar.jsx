// 'use client'
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import MobileMenu from "./MobileMenu";
// import { useEffect, useState } from "react";
// import logo from '../../../asset/images/logo2.png'
// import Image from "next/image";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const pathname = usePathname();
//   if (pathname.startsWith('/mydashboard')) return null;
//   if (pathname.includes('/admin') || pathname.includes('/login')) {
//     return null;
//   }

//   const currentPage = pathname.split('/')[1];

//   // Navigation menu items array
//   const menuItems = [
//     { pathname: "Home", path: "/" },
//     { pathname: "About Us", path: "/about" },
//     { pathname: "All room", path: "/allroom" },
//     { pathname: "Contact Us", path: "/contact" },
//     { pathname: "Offer", path: "/offer" },
//     { pathname: "Gallery", path: "/gallery" },
//   ];

//   return (
//     <div className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 
//         "sticky shadow-lg border-t border-gray-500 text-white bg-gray-500"
       
//       }`}>
//       <nav>
//         <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">

//           {/* Logo Section */}
//           <div className="flex font-bold items-center -ml-14">
//             {/* <span
//               className={`font-jost text-2xl transition-colors duration-300 ${pathname === "/" ? "" : "text-white"
//                 }`}
//             >
//               Hotel-Seven-View
//             </span> */}
//             <Image src={logo} alt="Seven view" width={200} height={90}/>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8 text-lg text-[#4A4A4A] font-medium">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.path}
//                 href={item.path}
//                 className={`hover:text-[#f58616] transition-all font-jost font-bold duration-300 ease-in-out transform hover:scale-105 ${pathname === item.path
//                     ? "text-[#f58616]" // Active link color
//                     : isScrolled
//                       ? "text-white" // White on scroll
//                       : pathname === "/"
//                         ? "text-black" // Black on the home page
//                         : "text-gray-400" // Default gray
//                   }`}
//               >
//                 {item.pathname}
//               </Link>
//             ))}
//           </div>



//           {/* Mobile Menu */}
//           <MobileMenu />
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;





// 'use client'
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import MobileMenu from "./MobileMenu";
// import { useEffect, useState } from "react";
// import logo from '../../../asset/images/logo2.png'
// import Image from "next/image";

// const Navbar = () => {
//   const pathname = usePathname();
  
//   // Skip rendering for certain paths
//   if (pathname.startsWith('/mydashboard')) return null;
//   if (pathname.includes('/admin') || pathname.includes('/login')) {
//     return null;
//   }

//   // Navigation menu items array
//   const menuItems = [
//     { pathname: "Home", path: "/" },
//     { pathname: "About Us", path: "/about" },
//     { pathname: "All room", path: "/allroom" },
//     { pathname: "Contact Us", path: "/contact" },
//     { pathname: "Offer", path: "/offer" },
//     { pathname: "Gallery", path: "/gallery" },
//   ];

//   return (
//     <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white`}>
//       <nav>
//         <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">

//           {/* Logo Section */}
//           <div className="flex font-bold items-center -ml-14">
//             <Image src={logo} alt="Seven view" width={200} height={90}/>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8 text-lg text-[#4A4A4A] font-medium">
//             {menuItems.map((item) => (
//               <Link
//                 key={item.path}
//                 href={item.path}
//                 className={`font-jost font-bold duration-300 ease-in-out ${pathname === item.path
//                     ? "text-[#f58616]" // Active link color
//                     : "text-gray-400" // Default gray
//                   }`}
//               >
//                 {item.pathname}
//               </Link>
//             ))}
//           </div>

//           {/* Mobile Menu */}
//           <MobileMenu />
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;









'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import logo from '../../../asset/images/logo2.png'
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  
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
    // { pathname: "Offer", path: "/offer" },
    { pathname: "Gallery", path: "/gallery" },
  ];

  return (
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white`}>
      <nav>
        <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">

          {/* Logo Section */}
          <div className="flex font-bold items-center -ml-14">
            <Image src={logo} alt="Seven view" width={200} height={90}/>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg text-[#4A4A4A] font-medium">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-jost font-bold duration-300 ease-in-out ${pathname === item.path
                    ? "text-[#f58616]" // Active link color
                    : "text-gray-950" // Default gray
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
