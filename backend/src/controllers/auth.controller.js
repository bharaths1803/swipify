import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateToken } from "../lib/utils.js";

export const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      age,
      gender,
      genderPreference,
    } = req.body;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !age ||
      !gender ||
      !genderPreference
    ) {
      return res.status(400).json({ message: `All fields are required` });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: `Password must contain at least 6 characters` });
    }
    if (firstName.length + lastName.length > 16) {
      return res
        .status(400)
        .json({ message: `User name must not exceed 16 characters` });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: `User already exists` });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      age,
      gender,
      genderPreference,
    });
    if (!newUser) {
      return res.status(400).json({ message: `Invalid user data` });
    }
    const userId = newUser._id.toString();
    generateToken({ userId, res });
    res.status(201).json({
      user: {
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        createdAt: newUser.createdAt,
        age: newUser.age,
        gender: newUser.gender,
        genderPreference: newUser.genderPreference,
      },
    });
  } catch (error) {
    console.log(`Error in signup controller ${error}`);
    res.status(500).json({ message: `Internal server error` });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: `All fields are required` });
    }
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: `Invalid user data` });
    }
    const userId = user._id;
    generateToken({ userId, res });
    res.status(200).json({
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        createdAt: user.createdAt,
        age: user.age,
        gender: user.gender,
        genderPreference: user.genderPreference,
      },
    });
  } catch (error) {
    console.log(`Error in signup controller ${error}`);
    res.status(500).json({ message: `Internal server error` });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", {
      maxAge: 0,
    });
    res.status(200).json({ message: `Logged out successfully` });
  } catch (error) {
    console.log(`Error in logout controller ${error}`);
    res.status(500).json({ message: `Internal server error` });
  }
};

export const checkAuth = async (req, res) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (error) {
    console.log(`Error in check auth controller ${error}`);
    res.status(500).json({ message: `Internal server error` });
  }
};
