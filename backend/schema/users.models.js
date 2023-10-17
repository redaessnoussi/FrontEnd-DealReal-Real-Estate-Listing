const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, enum: ["client", "agent"], required: true },
  agencyName: { type: String }, // Only applicable to agents
  avatar: [
    {
      url: String, // Actual image URL
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
