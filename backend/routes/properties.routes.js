const express = require("express");
const router = express.Router();
const Property = require("../schema/properties.model"); // Import your Mongoose model

// Endpoint to fetch properties
router.get("/properties", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
