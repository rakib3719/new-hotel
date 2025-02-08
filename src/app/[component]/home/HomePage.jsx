
// import GalleryPage from "../GalleryPage/GalleryPage";
// import Map from "../Map/Map";
// import Banner from "./Banner";
// import Facilities from "./Facilites";
// import HotelReservationSection from "./HotelReservation";
// import OurRooms from "./OurRooms";
// import RandomSection from "./RandomSection";
// import SpecialOffers from "./SpecialOffers";

// const HomePage = () => {
//     return (
//         <div className="">
//             <Banner />
//             <OurRooms/> 
//             <RandomSection/>
//             {/* <SpecialOffers/> */}
//             <div>
//                 <h1 className="text-center  font-bold text-3xl ">Facilites</h1>
//             <Facilities/>

//             <HotelReservationSection/>
//             <Map/>

//             </div>
       
           
//         </div>
//     );
// };

// export default HomePage;















import ImageCarousel from "../banner/Banner";
import Map from "../Map/Map";
import Facilities from "./Facilites";
import HotelReservationSection from "./HotelReservation";
import Location from "./Location";
import OurRooms from "./OurRooms";
import RandomSection from "./RandomSection";

const HomePage = () => {
    return (
        <div className="">
            {/* <Banner /> */}
            <ImageCarousel/>
            <OurRooms/> 

            <RandomSection/>
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