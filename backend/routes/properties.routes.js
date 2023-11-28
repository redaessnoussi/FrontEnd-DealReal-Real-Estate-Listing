const express = require("express");
const router = express.Router();
const Property = require("../schema/properties.model"); // Import your Mongoose model
const multer = require("multer");
const NodeGeocoder = require("node-geocoder");
const geocoder = NodeGeocoder({
  provider: "google",
  apiKey: "AIzaSyBvjzj92Q7W5_U229N0g-oXzvFJnJev_xk",
}); // Replace with your API key

// Configure multer to handle file uploads
const storage = multer.memoryStorage(); // Store files in memory
const upload = multer({ storage: storage });

// const storageFirebase = require("../server").storage;

// Endpoint to fetch properties
router.get("/properties", async (req, res) => {
  const { page = 1, limit = 8 } = req.query; // Get page and limit from query parameters

  try {
    const properties = await Property.find()
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order (newest first)
      .skip((page - 1) * limit) // Calculate the number of documents to skip
      .limit(limit); // Limit the number of documents per page

    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Endpoint to fetch properties by purpose (for-sale or for-rent)
router.get("/properties/purpose/:purpose", async (req, res) => {
  const { purpose } = req.params;
  const { page = 1, limit = 8 } = req.query; // Get page and limit from query parameters

  try {
    // Get the total count of listings for the given purpose
    const totalCount = await Property.countDocuments({ purpose });

    // Fetch the properties with pagination
    const properties = await Property.find({ purpose })
      .sort({ createdAt: -1 }) // Sort by createdAt in descending order (newest first)
      .skip((page - 1) * limit) // Calculate the number of documents to skip
      .limit(limit); // Limit the number of documents per page

    res.json({ properties, totalCount }); // Return both properties and total count
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

//router that will fetch listings base on the search parms
router.get("/properties/search", async (req, res) => {
  const {
    page = 1,
    limit = 8,
    purpose,
    city,
    category,
    minPrice,
    maxPrice,
  } = req.query;

  try {
    // Build the query object
    const query = {};

    if (purpose) {
      // Add location to the query
      query.purpose = purpose;
    }

    if (city) {
      // Add location to the query
      query["location.city"] = city; // Corrected this line
    }

    if (category) {
      // Add type to the query
      query.category = category;
    }

    if (minPrice && maxPrice) {
      // Add price range to the query
      query.price = { $gte: minPrice, $lte: maxPrice };
    }

    // Get the total count of listings for the given query
    const totalCount = await Property.countDocuments(query);

    // Fetch the properties with pagination and query
    const properties = await Property.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ properties, totalCount });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Endpoint to fetch properties by ID
router.get("/properties/id/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const properties = await Property.find({ _id });
    res.json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Add Listing
router.post("/add-property", upload.array("images"), async (req, res) => {
  try {
    const {
      purpose,
      category,
      price,
      title,
      description,
      bedrooms,
      bathrooms,
      garage,
      garageSize,
      propertySize,
      yearBuilt,
      specialId,
    } = req.body;
    const { country, city, area, street } = req.body.location; // Destructure location object

    // Concatenate the address fields to form a single address string
    const fullAddress = `${country} ${city} ${area} ${street}`;

    // Use the geocoder to convert the address to coordinates
    const geocodingResult = await geocoder.geocode(fullAddress);

    if (geocodingResult && geocodingResult.length > 0) {
      const { latitude, longitude } = geocodingResult[0];

      const propertyData = {
        purpose,
        category,
        price,
        title,
        location: {
          country,
          city,
          area,
          street,
        },
        geography: {
          lat: latitude.toString(),
          lng: longitude.toString(),
        },
        description,
        bedrooms,
        bathrooms,
        garage,
        garageSize,
        propertySize,
        yearBuilt,
        specialId,
        images: req.body.images.map((url) => ({ url })),
      };

      const property = new Property(propertyData);
      await property.save();
      res.status(201).json({ message: "Property added successfully" });
    }
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
