const express = require("express");
const router = express.Router();
const Users = require("../schema/users.models");
// Configure multer to handle file uploads
const bcrypt = require("bcrypt");

// Registration route
router.post("/register", async (req, res, next) => {
  // Implement registration logic, create a new user, and return a JWT
  try {
    const { email, password, fullName, role, agencyName, avatar } = req.body;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Password hashing
    const hashedPassword = await bcrypt.hash(password, 10);

    // You may want to validate and sanitize the data here
    const user = new Users({
      email,
      password: hashedPassword, // You should hash the password before storing it
      fullName,
      role,
      agencyName,
      avatar, // Array of avatar URLs
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res
      .status(500)
      .json({ message: "Error during registration", error: error.message });
  }
});

// Login route
router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Find the user by username (assuming username is unique)
    const user = await Users.findOne({ email: username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Compare the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // You may want to generate and send a token here for authentication

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res
      .status(500)
      .json({ message: "Error during login", error: error.message });
  }
});

module.exports = router;
