/**
 * Purpose:  Entry point — connects to MongoDB, then starts the Express server
 * Flow:     node server.ts → MongoDB connects → app.listen() → ready
*/

import dotenv from 'dotenv';
dotenv.config(); // reads your .env file and loads variables like MONGO_URL, PORT into process.env

import mongoose from 'mongoose';
import app from "./app"

// MySQL   → uses Tables
// MongoDB → uses Collections (mongoose calls them "models")

mongoose
    .connect(process.env.MONGO_URL as string) // connects to MongoDB using the URL from .env
    .then((data) => {
        console.log('MongoDB connection succeed')

        const PORT = process.env.PORT ?? 3003; // use PORT from .env, or fallback to 3003

        // only start the server AFTER MongoDB is connected
        app.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT}`)
        })
    })
    .catch((err) => console.log("ERROR on connection MongoDB", err)); // if DB fails, server won't start