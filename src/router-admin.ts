/**
 * Purpose:  Maps all /admin/* URLs to the correct restaurant controller method
 * Called by: app.ts — app.use("/admin", routerAdmin)
 * Sends to:  restaurant.controller.ts
 * Flow:     Browser → /admin/* → routerAdmin → restaurantController → Service → DB
 */

import express from "express";
const routerAdmin = express.Router(); // creates a mini-router just for admin pages
import restaurantController from "./controllers/restaurant.controller";
import productController from "./controllers/product.controller";
import makeUploader from "./libs/utils/uploader";

/** Restaurant **/
routerAdmin.get("/", restaurantController.goHome); // GET  /admin/        → shows admin home page

routerAdmin
  .get("/login", restaurantController.getLogin) // GET  /admin/login   → shows the login form
  .post("/login", restaurantController.processLogin); // POST /admin/login   → handles login form submission

routerAdmin
  .get("/signup", restaurantController.getSignup) // GET  /admin/signup  → shows the signup form
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    restaurantController.processSignup, // POST /admin/signup  → handles signup form submission
  );
routerAdmin.get("/logout", restaurantController.logout);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);

/** Product routes  **/
routerAdmin.get(
  "/product/all",
  restaurantController.verifyRestaurant,
  productController.getAllProducts,
);
routerAdmin.post(
  "/product/create",
  restaurantController.verifyRestaurant,
  makeUploader("products").array("productImages", 5),
  productController.createNewProduct,
);
routerAdmin.post(
  "/product/:id",
  restaurantController.verifyRestaurant,
  productController.updateChosenProduct,
);

/** User  **/
routerAdmin.get(
  "/user/all",
  restaurantController.verifyRestaurant,
  restaurantController.getUsers,
);

routerAdmin.post(
  "/user/edit",
  restaurantController.verifyRestaurant,
  restaurantController.updateChosenUser,
);

export default routerAdmin;
