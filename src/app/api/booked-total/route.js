// import { connectDB } from "@/app/lib/connectDB";
// import { NextResponse } from "next/server";


// export async function GET() {
//   try {
//     // Connect to the database
//     const db = await connectDB();
//     const bookingsCollection = db.collection("booking");

//     // Get today's date and set up date ranges
//     const today = new Date();
//     const startOfToday = new Date(today.setHours(0, 0, 0, 0)); // Start of today
//     const endOfToday = new Date(startOfToday.getTime() + 86400000); // End of today
//     const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1); // Start of the month

//     // Log date ranges for debugging
//     console.log("Start of Today:", startOfToday);
//     console.log("End of Today:", endOfToday);
//     console.log("Start of Month:", startOfMonth);

//     // Calculate total amount using aggregation pipeline
//     const totalAmountPipeline = [
//       {
//         $group: {
//           _id: null,
//           totalAmount: {
//             $sum: { $multiply: ["$pricePerRoom", "$rooms"] },
//           },
//         },
//       },
//     ];

//     const totalAmountResult = await bookingsCollection.aggregate(totalAmountPipeline).toArray();
//     const totalAmount = totalAmountResult?.[0]?.totalAmount || 0;
//     console.log("Total Amount Result:", totalAmountResult);

//     // Count today's bookings
//     const totalToday = await bookingsCollection.countDocuments({
//       checkInDate: { $gte: startOfToday, $lt: endOfToday },
//     });
//     console.log("Total Bookings Today:", totalToday);

//     // Count this month's bookings
//     const totalMonth = await bookingsCollection.countDocuments({
//       checkInDate: { $gte: startOfMonth },
//     });
//     console.log("Total Bookings This Month:", totalMonth);

//     // Return the results as JSON
//     return NextResponse.json({ totalAmount, totalToday, totalMonth });
//   } catch (error) {
//     // Log and return an error response
//     console.error("Error fetching bookings:", error.message);
//     return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
//   }
// }



// // corrected

// import { connectDB } from "@/app/lib/connectDB";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     // Connect to the database
//     const db = await connectDB();
//     const bookingsCollection = db.collection("booking");

//     // await bookingsCollection.deleteMany()
//     // Get today's date and set it in ISO format (without time zone)
//     const today = new Date();
//     const startOfToday = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())).toISOString(); // Start of today (UTC)
//     const endOfToday = new Date(new Date(startOfToday).getTime() + 86400000).toISOString(); // End of today (UTC)
//     const startOfMonth = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1)).toISOString(); // Start of the month (UTC)

//     console.log("Start of Today (ISO):", startOfToday);
//     console.log("End of Today (ISO):", endOfToday);
//     console.log("Start of Month (ISO):", startOfMonth);

//     // Total amount pipeline
//     const totalAmountPipeline = [
//       {
//         $addFields: {
//           pricePerRoom: { $toDouble: "$pricePerRoom" }, // Convert pricePerRoom to a number if it's a string
//         },
//       },
//       {
//         $group: {
//           _id: null,
//           totalAmount: {
//             $sum: { $multiply: ["$pricePerRoom"] }, // Use the number of adults for rooms
//           },
//         },
//       },
//     ];

//     const totalAmountResult = await bookingsCollection.aggregate(totalAmountPipeline).toArray();
//     const totalAmount = totalAmountResult?.[0]?.totalAmount || 0;

//     // Count today's bookings (using ISO String comparison)
//     const totalToday = await bookingsCollection.countDocuments({
//       checkInDate: { $gte: startOfToday, $lt: endOfToday },
//     });

//     console.log("Bookings Today:", totalToday);

//     // Count this month's bookings
//     const totalMonth = await bookingsCollection.countDocuments({
//       checkInDate: { $gte: startOfMonth },
//     });

//     return NextResponse.json({ totalAmount, totalToday, totalMonth });
//   } catch (error) {
//     console.error("Error fetching bookings:", error.message);
//     return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
//   }
// }













// // cholar moto

// import { connectDB } from "@/app/lib/connectDB";
// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     // Connect to the database
//     const db = await connectDB();
//     const bookingsCollection = db.collection("booking");

//     // Get today's date and set it in ISO format (UTC)
//     const today = new Date();
//     const startOfToday = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())); // Start of today (UTC)
//     const endOfToday = new Date(startOfToday.getTime() + 86400000); // End of today (UTC)
//     const startOfMonth = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1)); // Start of the month (UTC)

//     // Total amount pipeline
//     const totalAmountPipeline = [
//       {
//         $addFields: {
//           pricePerRoom: { $toDouble: "$pricePerRoom" }, // Ensure pricePerRoom is treated as a number
//         },
//       },
//       {
//         $group: {
//           _id: null,
//           totalAmount: { $sum: "$pricePerRoom" }, // Sum all pricePerRoom
//         },
//       },
//     ];

//     // Fetch total amount from pipeline
//     const totalAmountResult = await bookingsCollection.aggregate(totalAmountPipeline).toArray();
//     const totalAmount = totalAmountResult?.[0]?.totalAmount || 0;

//     // Count today's bookings
//     const totalToday = await bookingsCollection.countDocuments({
//       checkInDate: { $gte: startOfToday, $lt: endOfToday },
//     });

//     // Count this month's bookings
//     const totalMonth = await bookingsCollection.countDocuments({
//       checkInDate: { $gte: startOfMonth },
//     });

//     // Return the results
//     return NextResponse.json({ totalAmount, totalToday, totalMonth });
//   } catch (error) {
//     console.error("Error fetching bookings:", error.message);
//     return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
//   }
// }




import { connectDB } from "@/app/lib/connectDB";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Connect to the database
    const db = await connectDB();
    const bookingsCollection = db.collection("booking");

    // Get today's date and set it in ISO format (UTC)
    const today = new Date();
    const startOfToday = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate())); // Start of today (UTC)
    const endOfToday = new Date(startOfToday.getTime() + 86400000); // End of today (UTC)
    const startOfMonth = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), 1)); // Start of the month (UTC)

    // Total amount pipeline
    const totalAmountPipeline = [
      {
        $addFields: {
          pricePerRoom: { $toDouble: "$pricePerRoom" }, // Ensure pricePerRoom is treated as a number
        },
      },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$pricePerRoom" }, // Sum all pricePerRoom
        },
      },
    ];

    // Fetch total amount from pipeline
    const totalAmountResult = await bookingsCollection.aggregate(totalAmountPipeline).toArray();
    const totalAmount = totalAmountResult?.[0]?.totalAmount || 0;

    // Count bookings created today
    const totalToday = await bookingsCollection.countDocuments({
      createdAt: { $gte: startOfToday, $lt: endOfToday },
    });

    // Count bookings created this month
    const totalMonth = await bookingsCollection.countDocuments({
      createdAt: { $gte: startOfMonth },
    });

    console.log({ totalAmount, totalToday, totalMonth });
    
    // Return the results
    return NextResponse.json({ totalAmount, totalToday, totalMonth });
  } catch (error) {
    console.error("Error fetching bookings:", error.message);
    return NextResponse.json({ error: "Failed to fetch bookings" }, { status: 500 });
  }
}
