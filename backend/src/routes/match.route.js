import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMatchedUsers,
  swipeLeft,
  swipeRight,
} from "../controllers/match.controller.js";

const router = express.Router();

router.get("/", protectRoute, getMatchedUsers);
router.post("/swipe-left", protectRoute, swipeLeft);
router.post("/swipe-right", protectRoute, swipeRight);

export default router;
