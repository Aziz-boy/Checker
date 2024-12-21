import dotenv from 'dotenv';
import mongoose from 'mongoose';



dotenv.config();


mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then( function(data) {
        console.log("Step 1 = Mongodb connected ")
        console.log("MongoDB connection succeed http://localhost:${PORT}/admin\n");
        const PORT = process.env.PORT ?? 3003;

    })
    .catch(function(err) {
       console.log("Error on connection MongoDB", err);
    })