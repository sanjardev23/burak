/**
 * Purpose:  Maps all /* URLs for the React SPA to member controller methods
 * Called by: app.ts — app.use("/", router)
 * Sends to:  member.controller.ts 
 * Flow:     Browser → /* → router → memberController → Service → DB
*/

import express from 'express';
const router = express.Router(); // creates a mini-router (handles routes for the React SPA)
import memberController from './controllers/member.controller';


router.post("/login", memberController.login);   
router.post("/signup", memberController.signup);  



export default router;
