import Link from 'next/link';
import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

const CommonBanner = ({ heading, image }) => {
    return (
        <div>
            <aside
                className="relative h-[300px] flex flex-col justify-center items-center text-center text-white"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                {/* Title Section */}
                <h1 className="text-4xl font-bold uppercase">{heading}</h1>
                {/* Orange Line */}
                <div className="mt-2 w-24 h-1 bg-orange-500 mx-auto"></div>

                {/* Breadcrumb Navigation */}
                <div className="flex items-center space-x-2 mt-4 text-lg font-medium">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <FaAngleRight className="text-sm" />
                    <span>{heading}</span>
                </div>
            </aside>
        </div>
    );
};

export default CommonBanner;
