import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Connect to the database
    
    const db = await connectDB();
    const bookingsCollection = db.collection("booking");
//    await bookingsCollection.deleteMany()
    // Fetch all documents from the collection
    const bookings = await bookingsCollection.find({}).toArray();

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}
