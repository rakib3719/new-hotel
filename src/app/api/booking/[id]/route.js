
import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";



export const PATCH = async (request, { params }) => {
    const { id } = params; // Extract booking ID from params
    const { status } = await request.json(); // Extract new status

    try {
      const db = await connectDB();
      const bookingCollection = db.collection('booking');
  
      // Update booking by ID
      const result = await bookingCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { status } }
      );
  
      
      return NextResponse.json({ message: 'Status updated successfully', result:result });
    } catch (error) {
      return NextResponse.json({ message: 'Failed to update status', error }, { status: 500 });
    }
  };