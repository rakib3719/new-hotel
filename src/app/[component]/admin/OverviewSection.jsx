'use client';

import Image from 'next/image';

const images = [
  'https://demo.leebrosus.com/moteling/wp-content/uploads/2021/12/h1_bg-video.jpg',
  'https://demo.leebrosus.com/moteling/wp-content/uploads/2021/12/h1-bg1.jpg',
  'https://demo.leebrosus.com/moteling/wp-content/uploads/2021/12/slider-3.jpg',
  'https://demo.leebrosus.com/moteling/wp-content/uploads/2021/12/slider-2.jpg',
];

const OverviewSection = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Hotel Seven View</h1>
          <p className="mt-2 text-gray-300 text-lg md:text-xl">
            Where comfort meets elegance, in the heart of Arezzo, Italy.
          </p>
          <div className="mt-6 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="text-yellow-400 text-2xl"
                role="img"
                aria-label="star"
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Image Slideshow */}
        <div className="absolute inset-0 animate-slideshow z-0">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-[6s] ease-in-out"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                animationDelay: `${index * 6}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
    
    </div>
  );
};

export default OverviewSection;
