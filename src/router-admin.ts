import express from 'express';
const routerAdmin = express.Router(); // creates a mini-router just for admin pages
import restaurantController from './controllers/restaurant.controller';


/** Restaurant routes **/
routerAdmin.get("/", restaurantController.goHome);          // GET  /admin/        → shows admin home page

routerAdmin
    .get("/login", restaurantController.getLogin)           // GET  /admin/login   → shows the login form
    .post("/login", restaurantController.processLogin);     // POST /admin/login   → handles login form submission

routerAdmin
    .get("/signup", restaurantController.getSignup)         // GET  /admin/signup  → shows the signup form
    .post("/signup", restaurantController.processSignup);   // POST /admin/signup  → handles signup form submission


/** Product routes (coming soon) **/
/** User routes (coming soon) **/


export default routerAdmin;

// Adminka loyiha uchun router tizimi
