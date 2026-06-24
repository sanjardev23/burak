/**
 * Purpose:  Entry point — connects to MongoDB, then starts the Express server
 * Flow:     node server.ts → MongoDB connects → app.listen() → ready
 */

import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string)
  .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}`);
      console.log(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log("ERROR on connection MongoDB", err));


// MySQL   → uses Tables
// MongoDB → uses Collections (mongoose calls them "models")
