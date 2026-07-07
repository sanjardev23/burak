/**
 * Purpose:  Maps all /* URLs for the React SPA to member controller methods
 * Called by: app.ts — app.use("/", router)
 * Sends to:  member.controller.ts
 * Flow:     Browser → /* → router → memberController → Service → DB
 */

import express from "express";
const router = express.Router(); // creates a mini-router (handles routes for the React SPA)
import memberController from "./controllers/member.controller";
import uploader from "./libs/utils/uploader";

//** Member **/
// router.get("/member/check-me", memberController.checkAuthSession);
router.get("/member/restaurant", memberController.getRestaurant);
router.post("/member/login", memberController.login);
router.post("/member/signup", memberController.signup);
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout,
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetails,
);
router.post(
  "/member/update",
  memberController.verifyAuth,
  uploader("members").single("memberImage"),
  memberController.updateMember,
);
router.get("/member/top-users", memberController.getTopUsers);

//** Product **/

//** Order **/

export default router;
