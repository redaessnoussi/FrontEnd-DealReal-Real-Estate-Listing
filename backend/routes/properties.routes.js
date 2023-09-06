const express = require("express");
const router = express.Router();
const Property = require("../schema/properties.model"); // Import your Mongoose model
const multer = require("multer");

// Configure multer to handle file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// Endpoint to fetch properties
router.get("/properties", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Endpoint to fetch properties by purpose (for-sale or for-rent)
router.get("/properties/:purpose", async (req, res) => {
  const { purpose } = req.params;

  try {
    const properties = await Property.find({ purpose });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;

// Add Listing
router.post("/add-property", upload.array("images"), async (req, res) => {
  try {
    const { purpose, category, price, title } = req.body;
    const { country, city, area, street } = req.body.location; // Destructure location object
    const images = req.files.map((file) => file.buffer);

    const propertyData = {
      purpose,
      category,
      price,
      title,
      location: {
        // Create a location object
        country,
        city,
        area,
        street,
      },
      images,
    };

    const property = new Property(propertyData);
    await property.save();
    res.status(201).json({ message: "Property added successfully" });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error adding property:", error);

    // Send an error response with details
    res
      .status(500)
      .json({ message: "Error adding property", error: error.message });
  }
});

module.exports = router;
