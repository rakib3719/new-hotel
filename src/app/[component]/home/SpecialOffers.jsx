
'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBookOpenReader } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import Image from 'next/image';

const SpecialOffers = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const textVariant = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    const imageVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    };

    return (
        <section
            ref={ref}
            className="flex flex-col md:flex-row justify-between px-4 lg:px-12 items-center gap-8 py-10 overflow-hidden"
        >
            {/* Text Section */}
            <motion.aside
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={textVariant}
                className="text-center md:text-left"
            >
                <h1 className="text-sm uppercase text-[#ab8965] tracking-wide">
                    Hurry Up
                </h1>
                <h5 className="font-semibold text-3xl dark:text-white md:text-4xl text-black mt-2">
                    Special Offers
                </h5>
                <div className="flex flex-col md:flex-row gap-6 mt-6">
                    {/* Feature 1 */}
                    <div className="w-full md:w-[260px] text-left">
                        <div className="bg-[#ab8965] w-[70px] h-[70px] text-white flex items-center justify-center mx-auto md:mx-0 rounded-full">
                            <FaBookOpenReader className="text-3xl md:text-4xl" />
                        </div>
                        <h1 className="font-semibold mt-4 text-lg">Reception 24h / 7 Days</h1>
                        <p className="opacity-75 mt-2 text-sm">
                            Occaecat id ullamco consectetur labore officia eiusmod culpa dolore ut ullamco enim ut veniam nulla laboris id nisi.
                        </p>
                    </div>
                    {/* Feature 2 */}
                    <div className="w-full md:w-[260px] text-left">
                        <div className="bg-[#ab8965] w-[70px] h-[70px] text-white flex items-center justify-center mx-auto md:mx-0 rounded-full">
                            <FaPhoneAlt className="text-3xl md:text-4xl" />
                        </div>
                        <h1 className="font-semibold mt-4 text-lg">Reservation Online</h1>
                        <p className="opacity-75 mt-2 text-sm">
                            Occaecat id ullamco consectetur labore officia eiusmod culpa dolore ut ullamco enim ut veniam nulla laboris id nisi.
                        </p>
                    </div>
                </div>
            </motion.aside>

            {/* Image Section */}
            <motion.aside
                className="flex flex-col md:flex-row items-center justify-center gap-4 w-full"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={imageVariant}
            >
                {/* Main Image */}
                <Image
                    src={'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/4-1.webp'}
                    alt="Special offer 1"
                    width={250}
                    height={300}
                    className="rounded-md object-cover w-full md:w-[250px] h-auto"
                />
                {/* Secondary Image */}
                <Image
                    src={'https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/5-1.webp'}
                    alt="Special offer 2"
                    width={200}
                    height={300}
                    className="rounded-md object-cover w-full md:w-[200px] md:h-[330px] h-auto"
                />
            </motion.aside>
        </section>
    );
};

export default SpecialOffers;
