import React from "react";

export default function Map() {
  return (
    <div className="w-full h-[500px] flex justify-center items-center">
      <iframe
        // title="Jatra Bari Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.7234353447916!2d90.4003675!3d23.863952599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5000b8f13c9%3A0x7e348acdf6a8dedf!2sHotel%20Seven%20View%20Residential!5e0!3m2!1sen!2sbd!4v1735058627604!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}





{/* <iframe src="" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}