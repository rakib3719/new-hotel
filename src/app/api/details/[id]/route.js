import { connectDB } from "@/app/lib/connectDB";
import { ObjectId } from "mongodb";

export const GET = async (request, { params }) => {
  try {
    const { id } = params; 
    const db = await connectDB();
    const roomCollection = db.collection("room");

    
    const result = await roomCollection.findOne({ _id: new ObjectId(id) });

   
    if (!result) {
      return new Response(JSON.stringify({ message: "Room not found" }), {
        status: 404,
      });
    }

  
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching room:", error);

  
    return new Response(
      JSON.stringify({ message: "Internal Server Error", error: error.message }),
      { status: 500 }
    );
  }
};
