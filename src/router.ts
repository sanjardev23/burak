import express from 'express';
const router = express.Router(); // creates a mini-router (handles routes for the React SPA)
import memberController from './controllers/member.controller';

// routes for regular users (React frontend)
// example: router.get("/", memberController.goHome);
// → currently empty, that's why you see "Cannot GET /"

export default router;
