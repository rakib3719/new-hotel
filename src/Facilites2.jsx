import Image from 'next/image';
import image1 from '@/asset/images/1-3.webp';
import image2 from '@/asset/images/2-2.webp';
import image3 from '@/asset/images/facilites.webp';
import image4 from '@/asset/images/facilites.webp';
import { MdTv } from "react-icons/md";

const Facilities = () => {

  return (
    <div className='mt-44 lg:flex max-w-[1500px] mx-auto px-6'>
      <div className="relative px-12 bg-white py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {/* First Image */}
          <div className="relative">
            <Image
              src={image3}
              alt="Facility 1"
              className="  "
              layout="responsive"
            />


            <Image
              src={image1}
              alt="Facility 2"
              className=" absolute -top-1/2 left-28 "
              layout="responsive"
            />
            <Image
              src={image2}
              alt="Facility 2"
              className=" absolute -bottom-1/2 right-28  shadow-md"
              layout="responsive"
            />
          </div>

        </div>
        {/* Central Logo */}
        <div className="absolute right-[62%] inset-0 flex items-center justify-center">
          <div className="bg-black text-white px-8 py-4 rounded-md shadow-lg">
            <h1 className="text-3xl font-bold">Seven View</h1>
            <p className="text-sm text-center text-[#ab8965]">★★★★★</p>
          </div>
        </div>
      </div>

      <div>

        <div>
          <MdTv className='text-[#ab8965] text-5xl ' />
          <div>
            <h1 className=' text-xl font-montserrat font-semibold'>Cable Tv</h1>
            <p className='font-jost text-gray-700'>Sunt dolor aliquip consectetur laborum incididunt tempor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;