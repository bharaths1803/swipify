import User from "../models/user.model.js";
import cloudinary from "../lib/cloudinary.js";
import { getUserSocketId, io } from "../lib/socket.js";

export const getUsers = async (req, res) => {
  try {
    const loggedinUserId = req.user._id;
    const users = await User.find({
      _id: { $ne: loggedinUserId },
    }).select("-password");
    res.status(201).json({ users });
  } catch (error) {
    console.log(`Error in get users controller ${error}`);
    res.status(500).json({ message: `Internal server error` });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { profileData } = req.body;
    const loggedinUserId = req.user._id;
    const profilePic = profileData.profilePic;
    let profilePicUrl;
    if (profilePic) {
      const result = await cloudinary.uploader.upload(profilePic);
      profilePicUrl = result.secure_url;
    }
    const { username, age, gender, genderPreference, bio } = profileData;
    const updatedUser = await User.findByIdAndUpdate(
      loggedinUserId,
      {
        profilePicUrl,
        username,
        age,
        gender,
        genderPreference,
        bio,
      },
      { new: true }
    );
    res.status(201).json({ user: updatedUser });
  } catch (error) {
    console.log(`Error in update profile controller ${error}`);
    res.status(500).json({ message: `Internal server error` });
  }
};
