import express from "express";
import {
  blockOrUnblockUser,
  getSearchedUsers,
  getUsers,
  updateProfile,
} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
const router = express.Router();

router.get("/", protectRoute, getUsers);
router.put("/update-profile", protectRoute, updateProfile);
export default router;
