import React from 'react';
import AllRooms from '../[component]/AllRooms/AllRooms';


// let getdata = async (params) => {
//     let data = await axios.get(`/api/room`)
//     return data.data

// }

const Page = async () => {
    // let rooms = await getdata()
    // console.log(rooms);

    // if (rooms.data.length === 0) {
    //     return <h1>loading</h1>
    // }

    return (
        <div>
            {/* {rooms.data.length > 0 && <AllRooms getRooms={rooms.data} />} */}
            <AllRooms/>
        </div>
    );
};

export default Page;