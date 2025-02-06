'use client'
import React, { useState } from 'react';
import { FaAngleRight } from "react-icons/fa";
import Link from "next/link";
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';

const ContactPage = () => {
    const [loader, setLoader] = useState(false)
    const handleSubmit =async e =>{
        setLoader(true)
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value || '';
        const number = form.number.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const data = {
            name,
            email,
            number,
            subject,
            message
        }
        try {
           const response = await axios.post('/api/contact', data) 
           console.log(response, "success kina chekckora dorakr");
          if(response?.data?.status === 200)
            {
                toast.success('Message sent successfully')
            setLoader(false)
          }
          else{
            setLoader(false)
          }
        } catch (error) {
            toast.error(error?.message)
            setLoader(false)
        }
        

    }
    return (
        <section>
            <ToastContainer/>
            {/* Hero Section */}
            <aside
                className="relative h-[300px] flex flex-col justify-center items-center text-center bg-fixed text-white"
                style={{
                    backgroundImage: `url('https://themewant.com/products/wordpress/almaris/wp-content/uploads/2024/09/7-1.webp')`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}
            >
                <h1 className="text-4xl font-bold uppercase">Contact Us</h1>
                <div className="mt-2 w-24 h-1 bg-orange-500 mx-auto"></div>
                <div className="flex items-center space-x-2 mt-4 text-lg font-medium">
                    <Link href="/" className="hover:underline">
                        Home
                    </Link>
                    <FaAngleRight className="text-sm" />
                    <span>Contact</span>
                </div>
            </aside>

            {/* Contact Form & Info Section */}
            <div className="bg-[#f9f4ef] px-6 lg:px-20 py-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-4xl font-serif text-[#ab8965]">Send us a message</h2>
                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div>
                                <label className="text-gray-700 font-medium">Your name</label>
                                <input
                                required
                                    type="text"
                                    name='name'
                                    placeholder="Enter your name"
                                    className="mt-2 w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#ab8965] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium">Your email</label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Enter your email"
                                    className="mt-2 w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#ab8965] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium">Your Phone Number</label>
                                <input
                                    type="tel"
                                    name='number'
                                    placeholder="Enter your Phone Number"
                                    className="mt-2 w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#ab8965] focus:outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium">Subject</label>
                                <input
                                name='subject'
                                    type="text"
                                    placeholder="Enter subject"
                                    className="mt-2 w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#ab8965] focus:outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="text-gray-700 font-medium">Your message (optional)</label>
                                <textarea
                                name='message'
                                    rows="5"
                                    placeholder="Enter your message"
                                    className="mt-2 w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#ab8965] focus:outline-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-[#333333] transition"
                            >
                            {loader ? 'loading...': 'Submit'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info Section */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-medium text-gray-700">Address:</h3>
                            <p className="text-gray-600">
                            Rajlokkhi, Uttara, Dhaka, Bangladesh, 1230

                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-700">General Inquiries:</h3>
                            <p className="text-gray-600">01825-791133</p>
                            <p className="text-gray-600">hotelsevenview.official@gmail.com</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-700">Hoteller Spa:</h3>
                            <p className="text-gray-600">01825-791133</p>
                            <p className="text-gray-600">hotelsevenview.official@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="relative w-full h-[400px] mt-12">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.831093754182!2d90.39738916335912!3d23.86420262984067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c4241f7aaaab%3A0x68971d6834042aeb!2sRajlokkhi%20Complex!5e0!3m2!1sen!2sbd!4v1734104969610!5m2!1sen!2sbd"
                    width="100%"
                    height="100%"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    );
};

export default ContactPage;