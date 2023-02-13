// desc    Register New User
// route   Post api/users
// access  Public

const registerUser = (req, res) => {
  res.json({ message: "register user" });
};

// desc    Authenticate User
// route   Post api/users/login
// access  Public

const loginUser = (req, res) => {
  res.json({ message: "Login user" });
};

// desc    Get User Data
// route   Get api/users
// access  Private

const getMe = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
