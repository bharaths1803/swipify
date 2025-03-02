import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMatchedUsers,
  getSearchedUsers,
  swipeLeft,
  swipeRight,
} from "../controllers/match.controller.js";

const router = express.Router();

router.get("/", protectRoute, getMatchedUsers);
router.post("/swipe-left/:toDislikeUserId", protectRoute, swipeLeft);
router.post("/swipe-right/:toLikeUserId", protectRoute, swipeRight);
router.get("/bulk", protectRoute, getSearchedUsers);

export default router;
