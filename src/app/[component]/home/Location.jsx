import Image from 'next/image';
import React from 'react';
import img1 from '@/asset/newimg/location1.jpg'
import img2 from '@/asset/newimg/location2.jpg'
import { FaLocationDot } from "react-icons/fa6";
import { IoMdAirplane } from "react-icons/io"
import { CiSearch } from "react-icons/ci";
import { LiaHospitalSolid } from "react-icons/lia";
import { IoWifiOutline } from "react-icons/io5";


const Location = () => {
    return (
        <div className='lg:flex items-center  py-10 max-w-[1400px] mx-auto px-4 lg:px-12'>
            <section>
<Image src={img1} alt='location img' className='shadow-2xl rounded '/>
<Image src={img2} alt='location img' className='mt-8 shadow-2xl rounded'/>
            </section>
            <section className='lg:ml-40 mt-16 lg:mt-0 lg:flex justify-between'>

                <div className='lg:flex'>
                <div>
<article className='text-left'>
  <div className='flex justify-end flex-col text-left'>
  <div className='flex gap-4 items-center mb-2'>
  <FaLocationDot className='text-3xl'/>
  <h1 className='text-3xl text-left'>Location:</h1>
  </div>
<p className='text-gray-700 text-lg font-semibold text-left'>BNS CENTER (6th floor)</p>
<p className='text-gray-700 text-lg font-semibold text-left'>Uttara, Dhaka-1230</p>
  </div>
</article> 
<article className='text-left mt-8'>
  <div className='flex justify-end flex-col text-left'>
  <div className='flex gap-4 items-center mb-2'>
  <IoMdAirplane className='text-3xl'/>
  <h1 className='text-3xl text-left'>Transport:</h1>
  </div>
<p className='text-gray-700 text-lg font-semibold text-left'>Hazrat Shahjalal</p>
<p className='text-gray-700 text-lg font-semibold text-left'>International Airport
(8 km)</p>
  </div>
</article> 
<article className='text-left mt-8'>
  <div className='flex justify-end flex-col text-left'>
  <div className='flex gap-4 items-center mb-2'>
  <CiSearch className='text-3xl'/>
  <h1 className='text-3xl text-left'>Nearest attraction:</h1>
  </div>
<p className='text-gray-700 text-lg font-semibold text-left'>Sector 7 park</p>
<p className='text-gray-700 text-lg font-semibold text-left'>Shopping mall</p>
<p className='text-gray-700 text-lg font-semibold text-left'>Rooftop restaurant </p>
<p className='text-gray-700 text-lg font-semibold text-left'>Metro station</p>
  </div>
</article> 

                </div>
                <div></div>
                </div>
                <section className='lg:ml-20 mt-8 lg:mt-0'>

<div className='flex'>
<div>
<article className='text-left'>
<div className='flex justify-end flex-col text-left'>
<div className='flex gap-4 items-center mb-2'>
<IoWifiOutline className='text-3xl'/>
<h1 className='text-3xl text-left'>Services</h1>
</div>
<p className='text-gray-700 text-lg font-semibold text-left'>
Free wifi</p>
<p className='text-gray-700 text-lg font-semibold text-left'>CCTV camera</p>
<p className='text-gray-700 text-lg font-semibold text-left'>Lift</p>
<p className='text-gray-700 text-lg font-semibold text-left'>Rooftop restaurant </p>
<p className='text-gray-700 text-lg font-semibold text-left'>Prayer facilities for <br /> male female both</p>
</div>
</article> 
<article className='text-left mt-8'>
<div className='flex justify-end flex-col text-left'>
<div className='flex gap-4 items-center mb-2'>
<LiaHospitalSolid className='text-3xl'/>
<h1 className='text-3xl text-left'>Hospital and clinic</h1>
</div>
<p className='text-gray-700 text-lg font-semibold text-left'>Bangladesh adhunik hospital</p>

</div>
</article> 


</div>
<div></div>
</div>

</section>
            </section>
            
        </div>
    );
};

export default Location;