import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const db = await connectDB();
    const roomCollection = db.collection('room');

    const rooms = await roomCollection.find().toArray();
    // const totalRooms = await roomCollection.countDocuments();

    return NextResponse.json(
      {
        data: rooms,
        // totalRooms,
        // totalPages: Math.ceil(totalRooms / limit),
        // page,
        // limit,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching rooms', error: error.message },
      { status: 500 }
    );
  }
};
