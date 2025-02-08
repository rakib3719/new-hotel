'use client'




// import React, { useEffect, useState } from 'react';
// import ImageSlider from './ImageSlider';
// import RoomSature from './RoomSature';
// import ReservationCard from './ReservationCard';
// import axios from 'axios';
// import Loader from '../loader/Loader';

// const DetailsPage = ({ params }) => {

//     const [data, setData] = useState({})
//     const [loader, setLoader] = useState(false)
//     const bookingData = {
//         name: data?.name,
//         price: data?.price,
//         roomNumber: data?.roomNumber
//     }

//     const loadData = async (id) => {
//         setLoader(true)
//         try {
//             const resp = await axios.get(`/api/details/${id}`)
//             setData(resp?.data)
//             setLoader(false)

//         } catch (error) {
//             setLoader(false)
//         }

//     }
//     useEffect(() => {
//         loadData(params?.id)

//     }, [])

//     if (loader) {
//         return <div>
//             <Loader />
//         </div>
//     }

//     return (
//         <section className="">

//             <aside className="">
//                 <div className="">
//                     <ImageSlider data={data} loader={loader} />

//                 </div>
       
//                 {/* RoomSature and ReservationCard */}
//                 <div className=" max-w-[1400px] mx-auto lg:flex justify-between px-4">
//                     <RoomSature data={data} />
//                     <ReservationCard bookingData={bookingData} />
//                 </div>
//             </aside>
//         </section>
//     );
// };

// export default DetailsPage;












import React, { useEffect, useState } from 'react';
;
import axios from 'axios';
import Loader from '../loader/Loader';
import RoomGallery from './RoomGallery';
import RoomDescription from './RoomDescription';
import BookingCard from './BookingCard';

const DetailsPage = ({ params }) => {

    const [data, setData] = useState({})
    const [loader, setLoader] = useState(true)
    const bookingData = {
        name: data?.name,
        price: data?.price,
        roomNumber: data?.roomNumber
    }
    console.log(data);
    

    const loadData = async (id) => {
        setLoader(true)
        try {
            const resp = await axios.get(`/api/details/${id}`)
            setData(resp?.data)
            setLoader(false)

        } catch (error) {
            setLoader(false)
        }

    }
    useEffect(() => {
        loadData(params?.id)

    }, [])

    if (loader) {
        return <div>
            <Loader />
        </div>
    }

    return (
        <section className="">

            <aside className="">
                <div className="">
                    {/* <ImageSlider data={data} loader={loader} /> */}
                     
                    <RoomGallery data={data} loader={loader} />

                    <div className='flex max-w-[1400px] mx-auto flex-col md:flex-row gap-3'>
                        <RoomDescription data={data} loader={loader} />
                        <BookingCard data={data} loader={loader} />
                    </div>
                </div>
                
            </aside>
        </section>
    );
};

export default DetailsPage;
