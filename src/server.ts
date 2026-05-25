// Architectural pattern: MVC, Dependency Injection, MVP

// MVC = MODEL VIEW CONTROLLER

// Design pattern: Middleware, Decorator


// Burak - MVC Pattern
// Nestar - MVC Pattern, Dependency Injection, Decorator Pattern ...


 
// OOP - Object Orienter Programming
// AOP - Aspect Oriented Programming
// FRP - Functional Reactive Programming


// CLUSTER => DATABASE => COLLECTION => DOCUMENT


import moment from 'moment';            // this is in module js
// const moment = require('moment');    // this is in common js

import dotenv from 'dotenv';
dotenv.config();


import mongoose from 'mongoose';

mongoose
    .connect(process.env.MONGO_URL as string)
    .then((data) => {
        console.log('MongoDB connection succeed')
        const PORT = process.env.PORT ?? 3003;
    })
    .catch((err) => console.log("ERROR on connection MongoDB", err));



