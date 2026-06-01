import express from 'express';
import path from "path";
import router from './router';
import routerAdmin from './router-admin';
import morgan from 'morgan'
import { MORGAN_FORMAT } from './libs/config';

/** 1 - CREATE THE APP **/
const app = express();

app.use(express.static(path.join(__dirname, "public")));  // serves static files (images, css, js) from /public folder
app.use(express.urlencoded({ extended: true }));           // lets express read data sent from HTML forms
app.use(express.json());                                   // lets express read JSON data sent from React/API
app.use(morgan(MORGAN_FORMAT))                             // logs every request in terminal (method, url, status, time)


/** 2 - SESSIONS **/
// (not set up yet — will be used to keep users logged in)

/** 3 - VIEWS (Admin panel templates) **/
app.set('views', path.join(__dirname, 'views'))  // tells express where the EJS template files live
app.set("view engine", "ejs")                    // sets EJS as the HTML engine (used only for admin pages)

/** 4 - ROUTES **/
// Every incoming request is passed to one of these two routers:

app.use("/admin", routerAdmin);  // /admin/* → admin router (server-side EJS pages)
app.use("/", router);            // /* → main router (React single page app)


export default app;

// REACT loyiha uchun router tizimi
