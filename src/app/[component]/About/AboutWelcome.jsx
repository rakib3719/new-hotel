
'use client';
import Image from 'next/image';
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AboutWelcome = () => {
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <div className=" p-4 md:p-8 bg-[#f8f3ee] text-gray-800 font-jost">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-bold mb-4 font-jost">Welcome</h1>
                    <h4 className="text-xl font-semibold mb-6">History of Our Hotel</h4>
                    <p className="text-gray-600 leading-7">
                        Est deserunt sed enim reprehenderit pariatur id reprehenderit in cupidatat in culpa sunt
                        tempor pariatur nostrud minim irure culpa do magna. Nisi aute do ut elit esse dolor amet
                        cupidatat amet voluptate laboris cillum mollit elit anim amet enim ut veniam anim ut nostrud.
                        Esse et dolor nisi laboris aliquip et irure et ad ut voluptate adipisicing sint ut est deserunt
                        irure do do id laborum pariatur ut enim labore labore occaecat dolore laboris quis veniam magna
                        laborum nulla dolor officia aliqua sunt.
                    </p>
                </div>

           
                <div
                    ref={ref}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                >
                 
                    <div className="flex flex-col items-center gap-3">
                        <Image
                            alt="welcome image"
                            width={250}
                            height={120}
                            src="https://madebydesignesia.com/themes/almaris/images/misc/7.webp"
                            className=" shadow-lg"
                        />
                        <div className="bg-[#ab8965] w-[250px] h-[120px] flex flex-col items-center justify-center shadow-md text-white">
                            {inView && (
                                <h1 className="text-4xl font-bold">
                                    <CountUp start={0} end={120} duration={2.5} />
                                    +
                                </h1>
                            )}
                            <p className="text-sm">Rooms Available</p>
                        </div>
                    </div>

             
                    <div className="flex flex-col-reverse items-center gap-3 lg:mt-6">
                        <Image
                            alt="welcome image"
                            width={250}
                            height={120}
                            src="https://madebydesignesia.com/themes/almaris/images/misc/8.webp"
                            className="shadow-lg"
                        />
                        <div className="bg-[#ab8965] w-[250px] h-[120px] flex flex-col items-center justify-center shadow-md text-white">
                            {inView && (
                                <h1 className="text-4xl font-bold">
                                    <CountUp start={0} end={50} duration={2.5} suffix="%" />
                                </h1>
                            )}
                            <p className="text-sm">Menu Selection</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutWelcome;
