import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';


dotenv.config();


mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then( function(data) {
        console.log("STEP 1 = Mongodb connected ")
        console.log("MongoDB connection succeed ");
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, function() {
            console.log("STEP 3 = Server run bolaypti")
            console.log(`The server is running successfully on PORT http://localhost:${PORT}\n`)
        });


    })
    .catch(function(err) {
       console.log("Error on connection MongoDB", err);
    })