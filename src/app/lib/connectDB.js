import { MongoClient, ServerApiVersion } from "mongodb";


export const connectDB = async ()=>{

let db;
if(db) {
    return db;
};

try {
  
//   const uri = mongodb+srv://task2:eE7XOM82sh76Bjbc@cluster0.lel6e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;


  // const uri = `${process.env.MONGO_URI}`
  const uri = "mongodb+srv://hotelseven:qt8AcQVhmXa7GwYj@cluster0.oypj9vn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      db = client.db("sevenView")
    return db;
} catch (error) {
    console.log(error);
}


}