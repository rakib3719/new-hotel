import ImageCarousel from "../banner/Banner";
import Map from "../Map/Map";
import Facilities from "./Facilites";
import HotelReservationSection from "./HotelReservation";
import Location from "./Location";
import OurRooms from "./OurRooms";


const HomePage = () => {
    return (
        <div className="">
            {/* <Banner /> */}
            <ImageCarousel/>
            <OurRooms/> 

            <Location/>
{/* 
            <RandomSection/> */}
            {/* <SpecialOffers/> */}
            <div>
                <h1 className="text-center  font-bold text-3xl ">Facilites</h1>
            <Facilities/>

            <HotelReservationSection/>
            <Map/>

            </div>
       
           
        </div>
    );
};

export default HomePage;