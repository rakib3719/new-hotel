import Image from 'next/image';
import React from 'react';
import img1 from '../../../asset/random-section/2-1.webp';
import img2 from '../../../asset/random-section/4-5.webp';
import img3 from '../../../asset/random-section/2-1.webp'; // Consider if `img3` is unused
import img4 from '../../../asset/random-section/7.webp';
import img5 from '../../../asset/random-section/3-1.webp';

// Reusable Card Component
const RandomCard = ({ image, title, altText }) => (
    <div className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-lg">
        <Image
            src={image}
            alt={altText}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#ab8965] via-transparent to-transparent opacity-70"></div>
        <div className="absolute inset-0 flex items-end justify-center pb-8">
            <h1 className="text-white text-3xl font-semibold">{title}</h1>
        </div>
    </div>
);

const RandomSection = () => {
    return (
        <section className="py-10 max-w-[1400px] mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <RandomCard 
                    image={img4} 
                    title="Relax" 
                    altText="Relax Section Background" 
                />
                <RandomCard 
                    image={img1} 
                    title="Offers" 
                    altText="Offers Section Background" 
                />
                <RandomCard 
                    image={img5} 
                    title="Dine" 
                    altText="Dine Section Background" 
                />
                <RandomCard 
                    image={img2} 
                    title="Stay" 
                    altText="Stay Section Background" 
                />
            </div>
        </section>
    );
};

export default RandomSection;
