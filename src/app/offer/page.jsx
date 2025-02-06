import Link from "next/link";
import { FaAngleRight, FaArrowRight, FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaWifi, FaDumbbell, FaBriefcase, FaWalking, FaSpa } from 'react-icons/fa';
import { MdAccessTime } from 'react-icons/md';
import image1 from '../../asset/offer/offer-page-5.jpg'
import Image from "next/image";
import image2 from '../../asset/offer/offer-page-2.jpg'
import image3 from '../../asset/offer/offer-page-3.jpg'
import OurRooms from "../[component]/home/OurRooms";

const page = () => {

    const items = [
        {
          icon: <FaWifi className="text-[#f89500] text-xl" />,
          text: 'Daily WiFi in room and public areas',
        },
        {
          icon: <FaDumbbell className="text-[#f89500] text-xl" />,
          text: 'Access to 24-hour Fitness Center',
        },
        {
          icon: <FaBriefcase className="text-[#f89500] text-xl" />,
          text: 'Access to 24-hours Business Center',
        },
        {
          icon: <FaWalking className="text-[#f89500] text-xl" />,
          text: 'Guided neighborhood walking tours',
        },
        {
          icon: <MdAccessTime className="text-[#f89500] text-xl" />,
          text: 'Edison Hour on Tuesday and Friday evenings from 5 to 6pm',
        },
        {
          icon: <FaSpa className="text-[#f89500] text-xl" />,
          text: 'Access to 24-hours spa Center',
        },
      ];
    return (
        <div className="max-w-[1400px] mx-auto ">
        <aside
                className="relative bg-cover bg-center h-64 flex items-center justify-center"
                style={{
                    backgroundImage: `url('https://demo.leebrosus.com/moteling/wp-content/uploads/2022/01/h8_bg-counter.jpeg')`,
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative z-10 text-center text-white">
                    <h1 className="text-4xl font-bold">Offer</h1>
                    <div className="flex items-center justify-center space-x-2 text-sm font-medium mt-2">
                        <Link href="/">
                            <span className="hover:underline text-gray-300">Home</span>
                        </Link>
                        <FaAngleRight className="text-gray-400" />
                        <span className="text-white">Offer</span>
                    </div>
                </div>
            </aside>



            <section className="bg-[#f9f7f4] dark:bg-white">

                <h1 className="font-bold  text-3xl font-jost text-center py-16">Enjoy a special holiday with
                our hot deals</h1>


                <div className="lg:flex gap-8 items-center">
            <div className="lg:w-[65%]">
            <div
                className="relative h-[500px]  bg-fixed "
                style={{
                    backgroundImage: `url('https://demo.leebrosus.com/moteling/wp-content/uploads/2022/03/offer-page-1.jpg')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                
                
          
            </div>  
            </div>

           
<div>
<div className=" p-6 rounded-md  max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Package includes</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-4">
            <span>{item.icon}</span>
            <p className="text-gray-700">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
</div>
            </div>

            <div className="lg:flex mt-8">
<section className="lg:w-[65%] items-center p-6">
<h1 className="font-bold text-3xl py-3">Summer discounts in the city</h1>
<p>from 20/12/2021 to 30/3/2022</p>
<p className="font-montserrat text-gray-800">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word</p>

<button className="bg-[#ab8965]  text-white btn p-4 mt-8 flex items-center gap-2">   <FaArrowRight/> <span>Book Now</span> </button>
</section>
<section>
<Image src={image1} alt="Image"/>
</section>

            </div>
             
            </section>
            <section className="bg-[#f9f7f4] dark:bg-white mt-14">

                


                <div className="lg:flex gap-8 items-center">
            <div className="lg:w-[65%]">
            <div
                className="relative h-[500px]  bg-fixed "
                style={{
                    backgroundImage: `url('https://demo.leebrosus.com/moteling/wp-content/uploads/2022/03/offer-page-4.jpg')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                
                
          
            </div>  
            </div>

           
<div>
<div className=" p-6 rounded-md  max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Package includes</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-4">
            <span>{item.icon}</span>
            <p className="text-gray-700">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
</div>
            </div>

            <div className="lg:flex mt-8">
<section className="lg:w-[65%] items-center p-6">
<h1 className="font-bold text-3xl py-3">Park & Stay</h1>
<p>from 20/12/2021 to 30/3/2022</p>
<p className="font-montserrat text-gray-800">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised word</p>

<button className="bg-[#ab8965]  text-white btn p-4 mt-8 flex items-center gap-2">   <FaArrowRight/> <span>Book Now</span> </button>
</section>
<section>
<Image src={image2} alt="Image"/>
</section>

            </div>
             
            </section>
            <section className="bg-[#f9f7f4] dark:bg-white mt-14">

                


                <div className="lg:flex gap-8 items-center">
            <div className="lg:w-[65%]">
            <div
                className="relative h-[500px]  bg-fixed "
                style={{
                    backgroundImage: `url('https://demo.leebrosus.com/moteling/wp-content/uploads/2021/12/offer_img4.jpg')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                
                
          
            </div>  
            </div>

           
<div>
<div className=" p-6 rounded-md  max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Package includes</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-4">
            <span>{item.icon}</span>
            <p className="text-gray-700">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
</div>
            </div>

            <div className="lg:flex mt-8">
<section className="lg:w-[65%] items-center p-6">
<h1 className="font-bold text-3xl py-3">Advance Purchase</h1>
<p>from 20/12/2021 to 30/3/2022</p>
<p className="font-montserrat text-gray-800">Drive to New York and receive complimentary parking in Times Square! Be near all of the Broadway Shows, award-winning restaurants and iconic experiences that Midtown.</p>

<button className="bg-[#ab8965]  text-white btn p-4 mt-8 flex items-center gap-2">   <FaArrowRight/> <span>Book Now</span> </button>
</section>
<section>
<Image src={image3} alt="Image"/>
</section>

            </div>
             
            </section>

            <section>
                <OurRooms/>
            </section>
        </div>
    );
};

export default page;