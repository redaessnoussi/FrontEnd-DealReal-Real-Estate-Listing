const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  fullName: { type: String, required: true },
  role: { type: String, enum: ["client", "agent"], required: true },
  agencyName: { type: String }, // Only applicable to agents
  avatar: [
    {
      url: String, // Actual image URL
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now, // Add a default value of the current date and time
  },
});

module.exports = mongoose.model("Users", userSchema);
