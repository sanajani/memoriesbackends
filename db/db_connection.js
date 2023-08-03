import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
mongoose.set('strictQuery', true);
// data base connections
const DBconnection = async () => {
    try {
        // await mongoose.connect("mongodb://localhost:27017/memorise")
        // 
        // await mongoose.connect(`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@memoriescluster.t7ywsm7.mongodb.net/?retryWrites=true&w=majority`)
        await mongoose.connect(`mongodb+srv://devsanajani:${process.env.DB_PASSWORD}@memoriescluster.t7ywsm7.mongodb.net/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true })

        console.log("Connection Successfully");
    } catch (error) {
        console.log(error);
    }
}

export default DBconnection









// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = `mongodb+srv://devsanajani:${process.env.DB_PASSWORD}@memoriescluster.t7ywsm7.mongodb.net/?retryWrites=true&w=majority`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// const DBconnection = async () => {
//     try {
//       // Connect the client to the server	(optional starting in v4.7)
//       await client.connect();
//       // Send a ping to confirm a successful connection
//       await client.db("admin").command({ ping: 1 });
//       console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
// // run().catch(console.dir);
// export default DBconnection