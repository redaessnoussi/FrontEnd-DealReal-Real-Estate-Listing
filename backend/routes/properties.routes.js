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

const storageFirebase = require("../server").storage;

// Endpoint to fetch properties
router.get("/properties", async (req, res) => {
  const { page = 1, limit = 8 } = req.query; // Get page and limit from query parameters

  try {
    const properties = await Property.find()
      .skip((page - 1) * limit) // Calculate the number of documents to skip
      .limit(limit); // Limit the number of documents per page

    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Endpoint to fetch properties by purpose (for-sale or for-rent)
router.get("/properties/:purpose", async (req, res) => {
  const { purpose } = req.params;
  const { page = 1, limit = 8 } = req.query; // Get page and limit from query parameters

  try {
    // Get the total count of listings for the given purpose
    const totalCount = await Property.countDocuments({ purpose });

    // Fetch the properties with pagination
    const properties = await Property.find({ purpose })
      .skip((page - 1) * limit) // Calculate the number of documents to skip
      .limit(limit); // Limit the number of documents per page

    res.json({ properties, totalCount }); // Return both properties and total count
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add Listing
router.post("/add-property", upload.array("images"), async (req, res) => {
  try {
    const { purpose, category, price, title } = req.body;
    const { country, city, area, street } = req.body.location; // Destructure location object

    // Concatenate the address fields to form a single address string
    const fullAddress = `${country} ${city} ${area} ${street}`;

    // Use the geocoder to convert the address to coordinates
    const geocodingResult = await geocoder.geocode(fullAddress);

    if (geocodingResult && geocodingResult.length > 0) {
      const { latitude, longitude } = geocodingResult[0];

      // console.log("1");
      // console.log(req.body.images);

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

// Add latitude and longitude to missing listings
// async function updateAllPropertiesWithGeocode() {
//   try {
//     // Find all properties
//     const allProperties = await Property.find();

//     console.log(`Found ${allProperties.length} properties to update.`);

//     for (const property of allProperties) {
//       // Concatenate the address fields to form a single address string
//       const fullAddress = `${property.location.country} ${property.location.city} ${property.location.area} ${property.location.street}`;

//       // Use the geocoder to convert the address to coordinates
//       const geocodingResult = await geocoder.geocode(fullAddress);

//       // Check the structure of geocodingResult and extract latitude and longitude accordingly
//       if (geocodingResult && geocodingResult.length > 0) {
//         property.geography = {
//           lat: geocodingResult[0].latitude,
//           lng: geocodingResult[0].longitude,
//         };
//       } else {
//         console.log(`Geocoding failed for property ${property._id}`);
//       }

//       // Save the updated property to the database
//       await property.save();
//       console.log(`Property ${property._id} updated.`);
//     }

//     console.log("Properties updated successfully.");
//   } catch (error) {
//     console.error("Error updating properties:", error);
//   }
// }

// Call the function to update properties
// updateAllPropertiesWithGeocode();

module.exports = router;
