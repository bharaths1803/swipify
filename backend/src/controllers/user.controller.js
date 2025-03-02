import User from "../models/user.model.js";
import cloudinary from "../lib/cloudinary.js";

export const getUsers = async (req, res) => {
  try {
    const loggedinUser = req.user;
    const users = await User.find({
      $and: [
        { _id: { $ne: loggedinUser._id } },
        { _id: { $nin: loggedinUser.likedUsers } },
        { _id: { $nin: loggedinUser.dislikedUsers } },
        { _id: { $nin: loggedinUser.matchedUsers } },
        { genderPreference: { $in: [loggedinUser.gender, "both"] } },
        {
          gender:
            loggedinUser.genderPreference === "both"
              ? { $in: ["male", "female"] }
              : loggedinUser.genderPreference,
        },
      ],
    }).select("-password");
    res.status(201).json({ users });
  } catch (error) {
    console.log(`Error in get users controller ${error}`);
    res.status(500).json({ message: `Internal server error` });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const updateData = req.body;
    const loggedinUserId = req.user._id;
    const profilePic = updateData.profilePic;
    let profilePicUrl;
    if (profilePic) {
      const result = await cloudinary.uploader.upload(profilePic);
      profilePicUrl = result.secure_url;
    }
    const { firstName, lastName, age, gender, genderPreference, bio } =
      updateData;
    const updatedUser = await User.findByIdAndUpdate(
      loggedinUserId,
      {
        profilePicUrl,
        firstName,
        lastName,
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
