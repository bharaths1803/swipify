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
    res.status(201).json({ matchedUsers: loggedinUser.matchedUsers });
  } catch (error) {
    console.log(`Error in swipe left controller ${error}`);
    res.status(500).json({ message: `Internal server error` });
  }
};

export const swipeRight = async (req, res) => {
  try {
    res.status(201).json({ matchedUsers: loggedinUser.matchedUsers });
  } catch (error) {
    console.log(`Error in swipe right controller ${error}`);
    res.status(500).json({ message: `Internal server error` });
  }
};
