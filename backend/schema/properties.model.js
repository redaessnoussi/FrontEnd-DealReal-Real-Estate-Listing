const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
  purpose: String, //"for-rent" or "for-sale"
  category: String, //"Apartment" or "Villa"...etc
  price: String, //price for sale or rent
  title: String, //Title of the listing
  location: {
    country: String,
    city: String,
    area: String,
    street: String,
  }, //Location of the proprety
  // ...other fields
  images: [Buffer], // Array of image URLs
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
