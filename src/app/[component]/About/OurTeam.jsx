'use client'
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram,  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Jeffery Mussman",
      role: "Founder & CEO",
      image: "https://madebydesignesia.com/themes/almaris/images/team/1.webp",
    },
    {
      name: "Sophia Lee",
      role: "Head of Operations",
      image: "https://madebydesignesia.com/themes/almaris/images/team/2.webp",
    },
    {
      name: "Michael Brown",
      role: "Marketing Manager",
      image: "https://madebydesignesia.com/themes/almaris/images/team/3.webp",
    },
    {
      name: "Jessica Smith",
      role: "Creative Director",
      image: "https://madebydesignesia.com/themes/almaris/images/team/4.webp",
    },
  ];

  return (
    <aside className="bg-[#fff5ed] text-white py-12 px-4 md:px-6">
      <div className="text-center mb-12 text-black">
        <h1 className="text-4xl font-bold mb-2">Behind the Scene</h1>
        <h4 className="text-xl font-semibold">Our Team</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
          >
            <Image
              src={member.image}
              alt={`${member.name}`}
              width={270}
              height={300}
              className="w-full h-64 object-cover"
            />
          
            <div className="p-6 text-center">
              <h5 className="text-lg font-bold">{member.name}</h5>
              <p className="text-sm text-gray-600">{member.role}</p>
              <div className="flex justify-center gap-3 mt-4">
                <a
                  href="#"
                  className="bg-[#ab8965] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="bg-[#ab8965] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800"
                >
                  <FaXTwitter/>
                </a>
                <a
                  href="#"
                  className="bg-[#ab8965] text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-800"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default OurTeam;
