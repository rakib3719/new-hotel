
import ImageCarousel from "../banner/Banner";

import Facilities from "./Facilites";
import HotelReservationSection from "./HotelReservation";
import Location from "./Location";
import OurRooms from "./OurRooms";


const HomePage = () => {
    return (
        <div className="">
         
            <ImageCarousel/>
            <OurRooms/>
   <Location/>

    
            <div>
                <h1 className="text-center  font-bold text-3xl ">Facilites</h1>
            <Facilities/>

            <HotelReservationSection/>
       

            </div>
       
           
        </div>
    );
};

export default HomePage;