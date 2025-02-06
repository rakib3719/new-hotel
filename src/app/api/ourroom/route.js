const { connectDB } = require("@/app/lib/connectDB");
const { NextResponse } = require("next/server");

export const GET = async (request) => {
    try {
        const db = await connectDB();
        const roomCollection = db.collection("room");
        const rooms = await roomCollection.find().toArray();


        return NextResponse.json({ rooms }, { status: 200 });
    } catch (error) {

        return NextResponse.json(
            { message: "Internal Server Error", error: error.message },
            { status: 500 }
        );
    }
};
