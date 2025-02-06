import Image from 'next/image';
import image1 from '@/asset/images/1-3.webp';
import image2 from '@/asset/images/2-2.webp';
import image3 from '@/asset/images/facilites.webp';
import { MdTv } from "react-icons/md";
import { PiDeskFill } from "react-icons/pi";
import { FaWifi } from 'react-icons/fa';
import icon1 from '../../../asset/images/download (1).svg';
import icon2 from '../../../asset/images/download (2).svg';
import icon3 from '../../../asset/images/download.svg';

const Facilities = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 lg:px-12 ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Section with Images */}
        <div className="relative flex justify-center lg:w-1/2">
          <Image src={image3} alt="Main Facility" width={300} className="rounded-lg shadow-lg" />
          <Image
            src={image1}
            alt="Secondary Facility"
            width={200}
            className="absolute top-10 right-6 rounded-lg shadow-md"
          />
          <Image
            src={image2}
            alt="Tertiary Facility"
            width={200}
            className="absolute bottom-10 left-6 rounded-lg shadow-md"
          />
          <div className="absolute inset-0 flex items-center justify-center rounded-lg">
            <div className="text-white text-center bg-[#00000031] rounded-md p-2">
              <h1 className="text-3xl text-white font-bold">Seven View</h1>
              <p className="text-[white] mt-2">★★★★★</p>
            </div>
          </div>
        </div>

        {/* Right Section with Facilities */}
        <div className="grid md:px-3 md:grid-cols-2 lg:w-1/2 gap-8">
          {/* Facility 1 */}
          <div className="flex items-center pl-2  gap-4  transition">
            <MdTv className="text-[#ab8965] text-5xl" />
            <div>
              <h1 className="text-xl font-semibold">Cable TV</h1>
              <p className="text-gray-600 text-sm">Enjoy premium channels with a high-definition experience.</p>
            </div>
          </div>

          {/* Facility 2 */}
          <div className="flex items-center pl-3 gap-4  transition">
            <PiDeskFill className="text-[#ab8965] text-5xl" />
            <div>
              <h1 className="text-xl font-semibold">Work Desk</h1>
              <p className="text-gray-600 text-sm">Stay productive with a dedicated workspace.</p>
            </div>
          </div>

          {/* Facility 3 */}
          <div className="flex items-center gap-4  p-4  transition">
            <FaWifi className="text-[#ab8965] text-5xl" />
            <div>
              <h1 className="text-xl font-semibold">Free Wifi</h1>
              <p className="text-gray-600 text-sm">Stay connected with high-speed internet.</p>
            </div>
          </div>

          {/* Facility 4 */}
          <div className="flex items-center gap-4  p-4  transition">
            <Image src={icon1} width={50} height={50} alt="Icon" />
            <div>
              <h1 className="text-xl font-semibold">Room Service</h1>
              <p className="text-gray-600 text-sm">24/7 room service to cater to your needs.</p>
            </div>
          </div>

          {/* Facility 5 */}
          <div className="flex items-center gap-4  p-4  transition">
            <Image src={icon2} width={50} height={50} alt="Icon" />
            <div>
              <h1 className="text-xl font-semibold">Swimming Pool</h1>
              <p className="text-gray-600 text-sm">Relax and unwind in our luxurious pool.</p>
            </div>
          </div>

          {/* Facility 6 */}
          <div className="flex items-center gap-4  p-4  transition">
            <Image src={icon3} width={50} height={50} alt="Icon" />
            <div>
              <h1 className="text-xl font-semibold">Fitness Center</h1>
              <p className="text-gray-600 text-sm">Stay fit with our state-of-the-art gym facilities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
