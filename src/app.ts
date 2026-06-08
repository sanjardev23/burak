/**
 * Purpose:  Configures the Express app — middlewares, view engine, and routes
 * Called by: server.ts (imports and listens on this app)
 * Sends to:  router.ts (SPA) and router-admin.ts (Admin panel)
 * Flow:     Request → middlewares (json, urlencoded, morgan) → router
*/

import express from 'express';
import path from "path";
import router from './router';
import routerAdmin from './router-admin';
import morgan from 'morgan'
import { MORGAN_FORMAT } from './libs/config';

import session from 'express-session';
import ConnectMongoDB from "connect-mongodb-session"

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions",
});


/** 1 - CREATE THE APP **/
const app = express();

app.use(express.static(path.join(__dirname, "public")));   // serves static files (images, css, js) from /public folder
app.use(express.urlencoded({ extended: true }));           // lets express read data sent from HTML forms
app.use(express.json());                                   // lets express read JSON data sent from React/API
app.use(morgan(MORGAN_FORMAT))                             // logs every request in terminal (method, url, status, time)



/** 2 - SESSIONS **/
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 3600 * 6         // cookies will be active 6h
        },
        store: store,
        resave: true,          // save session every request (false = save only when changed)
        saveUninitialized: true
    })
);


/** 3 - VIEWS **/
app.set('views', path.join(__dirname, 'views'))  // tells express where the EJS template files live
app.set("view engine", "ejs")                    // sets EJS as the HTML engine (used only for admin pages)



/** 4 - ROUTES **/
app.use("/admin", routerAdmin);  // SSR   /admin/* → admin router (server-side EJS pages)
app.use("/", router);            // SPA   /* → main router (React single page app)


export default app;

