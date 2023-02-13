const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// desc    Register New User
// route   Post api/users
// access  Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  // check user exist
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  res.json({ message: "register user" });
});

// desc    Authenticate User
// route   Post api/users/login
// access  Public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login user" });
});

// desc    Get User Data
// route   Get api/users
// access  Private

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User data display" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
