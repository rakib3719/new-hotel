
import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";


export const POST=async (request)=>{


   try {
    const data=await request.json();

    console.log(data);
    

    const db = await connectDB();
    const projectCollation = db.collection('booking');
  

   
   const add= await projectCollation.insertOne({...data,  createdAt: new Date()});
   console.log(add, "booking add hoise to");
   if (add) {
    return NextResponse.json({ message: 'Projects added successfully', data:add, }, { status: 200 });
    
   }
   } catch (error) {
    return NextResponse.json({
        status: 400,
        statusText: 'Something went wrong',
        error: error.message,
    });
   }
    
    
}



export const GET = async (request) => {
  try {
    const db = await connectDB();
    const bookingCollection = db.collection('booking');

    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page')) || 1;
    const limit = parseInt(url.searchParams.get('limit')) || 10;
    const status = url.searchParams.get('status') || 'all';

    // Modify query to get both 'pending' and 'accept' when status is 'all'
    let query = {};
    if (status === 'all') {
      query = { status: { $in: ['pending', 'accept'] } }; // This will get bookings with either 'pending' or 'accept' status
    } else if (status === 'pending' || status === 'accept') {
      query = { status }; // For 'pending' or 'accept' status, directly match
    }

    const skip = (page - 1) * limit;
    const bookings = await bookingCollection.find(query).skip(skip).limit(limit).toArray();
    const totalBookings = await bookingCollection.countDocuments(query);

    return NextResponse.json({
      data: bookings,
      totalPages: Math.ceil(totalBookings / limit),
      totalBookings,
    });
  } catch (error) {
    return NextResponse.json({ message: 'Error fetching bookings', error }, { status: 500 });
  }
};


  


  
  