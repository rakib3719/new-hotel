'use client';

import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';
import Gallery from './ImageGallery';
;



const GalleryPage = () => {
    const images = [
        { id: 1, url: 'https://demothemedh.b-cdn.net/moteling/wp-content/uploads/2022/03/resort-hotel-2021-08-30-07-14-09-utc.jpg', alt: 'Room 1', category: 'Rooms',width: 800, height: 600 },
        { id: 2, url: 'https://demothemedh.b-cdn.net/moteling/wp-content/uploads/2022/03/resort-hotel-2021-08-30-07-14-09-utc.jpg', alt: 'Room 2', category: 'Rooms' ,width: 1200, height: 600},
        { id: 3, url: 'https://demothemedh.b-cdn.net/moteling/wp-content/uploads/2022/03/resort-hotel-2021-08-30-07-14-09-utc.jpg', alt: 'Room 3', category: 'Rooms', width: 1600, height: 900},
        { id: 4, url: 'https://demothemedh.b-cdn.net/moteling/wp-content/uploads/2022/03/resort-hotel-2021-08-30-07-14-09-utc.jpg', alt: 'Pool', category: 'Hotel',width: 1100, height: 900 },
        { id: 5, url: 'https://demothemedh.b-cdn.net/moteling/wp-content/uploads/2022/03/resort-hotel-2021-08-30-07-14-09-utc.jpg', alt: 'Pool', category: 'Hotel',width: 600, height: 400 },
        { id: 6, url: 'https://demothemedh.b-cdn.net/moteling/wp-content/uploads/2022/03/resort-hotel-2021-08-30-07-14-09-utc.jpg', alt: 'Restaurant', category: 'Restaurant',width: 300, height: 400 },
        { id: 7, url: 'https://demothemedh.b-cdn.net/moteling/wp-content/uploads/2022/03/resort-hotel-2021-08-30-07-14-09-utc.jpg', alt: 'Restaurant', category: 'Restaurant',width: 1600, height: 900 },
        { id: 8, url: 'https://demothemedh.b-cdn.net/moteling/wp-content/uploads/2022/03/resort-hotel-2021-08-30-07-14-09-utc.jpg', alt: 'Restaurant', category: 'Restaurant', width: 1200, height: 900},
        { id: 9, url: 'https://demothemedh.b-cdn.net/moteling/wp-content/uploads/2022/03/resort-hotel-2021-08-30-07-14-09-utc.jpg', alt: 'Hotel', category: 'Hotel',width: 1000, height: 500 },
    ];
    return (
        <section>
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
                    <h1 className="text-4xl font-bold">Gallery</h1>
                    <div className="flex items-center justify-center space-x-2 text-sm font-medium mt-2">
                        <Link href="/">
                            <span className="hover:underline text-gray-300">Home</span>
                        </Link>
                        <FaAngleRight className="text-gray-400" />
                        <span className="text-white">Gallery</span>
                    </div>
                </div>
            </aside>


            <div className="">
                <aside>
                    <div className="max-w-7xl mx-auto">
                      
                        <Gallery />
                    </div>
                </aside>
            </div>
        </section>
    );
};

export default GalleryPage;
