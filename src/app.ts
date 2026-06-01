import express from 'express';
import path from "path";
import router from './router';
import routerAdmin from './router-admin';
import morgan from 'morgan'
import { MORGAN_FORMAT } from './libs/config';

/** 1-ENTARANCE **/
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT))


/** 2-SESSIONS **/

/** 3-VIEWS **/
app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs")

/** 4-ROUTES **/
// Middleware Design Pattern

app.use("/admin", routerAdmin);     // BSSR: EJS (backend server side render)
app.use("/", router);               // SPA: REACT (single page application) 


export default app;       





// REACT loyiha uchun router tizimi