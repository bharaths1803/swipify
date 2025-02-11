import { getUserSocketId, io } from "../lib/socket.js";
import User from "../models/user.model.js";

export const getMatchedUsers = async (req, res) => {
  try {
    const loggedinUserId = req.user._id;
    const loggedinUser = await User.findById(loggedinUserId).populate(
      "matchedUsers",
      "username profilePicUrl bio age"
    );
    res.status(201).json({ matchedUsers: loggedinUser.matchedUsers });
  } catch (error) {
    console.log(`Error in get matched users controller ${error}`);
    res.status(500).json({ message: `Internal server error` });
  }
};

export const swipeLeft = async (req, res) => {
  try {
    const loggedinUserId = req.user._id;
    const { toDislikeUserId } = req.params;
    const toDislikeUser = await User.findById(toDislikeUserId);
    if (!toDislikeUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const loggedInUser = await User.findById(loggedinUserId);
    if (!loggedInUser.dislikedUsers.includes(toDislikeUserId)) {
      loggedInUser.dislikedUsers.push(toDislikeUserId);
      await loggedInUser.save();
    }
    res.status(200).json({ user: loggedInUser });
  } catch (error) {
    console.log(`Error in swipe left controller ${error}`);
    res.status(500).json({ message: `Internal server error` });
  }
};

export const swipeRight = async (req, res) => {
  try {
    const loggedinUserId = req.user._id;
    const { toLikeUserId } = req.params;
    const toLikeUser = await User.findById(toLikeUserId);
    if (!toLikeUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const loggedInUser = await User.findById(loggedinUserId);
    if (!loggedInUser.likedUsers.includes(toLikeUserId)) {
      loggedInUser.likedUsers.push(toLikeUserId);
      if (toLikeUserId.likedUsers.includes(loggedinUserId)) {
        toLikeUser.matchedUsers.push(loggedinUserId);
        loggedInUser.matchedUsers.push(toLikeUser);
        const loggedInUserSocketId = getUserSocketId(loggedinUserId);
        const matchedUserSocketId = getUserSocketId(toLikeUserId);
        const matchFoundMessage = "You found a new match!!!";
        io.to(loggedInUserSocketId).emit("match-found", matchFoundMessage);
        if (matchedUserSocketId) {
          io.to(matchedUserSocketId).emit("match-found", matchFoundMessage);
        }
      }
      await Promise.all([loggedInUser.save(), toLikeUser.save()]);
    }
    res.status(200).json({ user: loggedInUser });
  } catch (error) {
    console.log(`Error in swipe right controller ${error}`);
    res.status(500).json({ message: `Internal server error` });
  }
};
