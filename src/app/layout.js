import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./[component]/navbar/Navbar";
import Footer from "./[component]/shared/Footer";

import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Hotel Seven View",
  description: `Hotel Seven View is your gateway to a luxurious and unforgettable stay. Situated in a prime location, our hotel combines modern elegance with exceptional hospitality, ensuring every guest feels at home. Whether you're visiting for business, leisure, or a special occasion, we cater to your every need with style and sophistication.

Our beautifully designed rooms and suites offer the perfect blend of comfort and luxury, featuring plush bedding, contemporary decor, and stunning views that will leave you captivated. Guests can enjoy a range of amenities, including free Wi-Fi, a fully equipped fitness center, and a serene swimming pool.

Dining at Hotel Seven View is an experience to savor. Indulge in a variety of cuisines at our in-house restaurant, where every dish is crafted to perfection. Relax with a drink at our chic lounge, the perfect spot to unwind after a busy day.

Conveniently located near top attractions and transport hubs, Hotel Seven View is ideal for exploring the city’s vibrant culture or hosting seamless business meetings and events. With attentive service and a commitment to excellence, we strive to make your stay extraordinary.

Book your stay at Hotel Seven View and create memories that will last a lifetime.`,
  icons: {
    icon: '/hotel.svg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        {/* <div className="h-40px mt-20"></div> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
