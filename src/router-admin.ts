/**
 * Purpose:  Maps all /admin/* URLs to the correct restaurant controller method
 * Called by: app.ts — app.use("/admin", routerAdmin)
 * Sends to:  restaurant.controller.ts
 * Flow:     Browser → /admin/* → routerAdmin → restaurantController → Service → DB
*/

import express from 'express';
const routerAdmin = express.Router();                       // creates a mini-router just for admin pages
import restaurantController from './controllers/restaurant.controller';


/** Restaurant **/
routerAdmin.get("/", restaurantController.goHome);          // GET  /admin/        → shows admin home page

routerAdmin
    .get("/login", restaurantController.getLogin)           // GET  /admin/login   → shows the login form
    .post("/login", restaurantController.processLogin);     // POST /admin/login   → handles login form submission

routerAdmin
    .get("/signup", restaurantController.getSignup)         // GET  /admin/signup  → shows the signup form
    .post("/signup", restaurantController.processSignup);   // POST /admin/signup  → handles signup form submission


routerAdmin.get("/check-me", restaurantController.checkAuthSession);  

/** Product routes  **/
/** User routes  **/


export default routerAdmin;

