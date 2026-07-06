/**
 * Purpose:  Maps all /* URLs for the React SPA to member controller methods
 * Called by: app.ts — app.use("/", router)
 * Sends to:  member.controller.ts
 * Flow:     Browser → /* → router → memberController → Service → DB
 */

import express from "express";
const router = express.Router(); // creates a mini-router (handles routes for the React SPA)
import memberController from "./controllers/member.controller";

//** Member **/
// router.get("/member/check-me", memberController.checkAuthSession);

router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.get("/member/detail", memberController.verifyAuth);

//** Product **/

//** Order **/



export default router;
