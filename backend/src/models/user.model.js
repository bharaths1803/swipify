import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePicUrl: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
      default: "I am ...",
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      enum: ["male", "female"],
      type: String,
      required: true,
    },
    genderPreference: {
      enum: ["male", "female", "both"],
      type: String,
      required: true,
    },
    likedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    dislikedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    matchedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
