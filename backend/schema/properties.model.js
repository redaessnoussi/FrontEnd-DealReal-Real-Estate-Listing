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
  },
  geography: {
    lat: String,
    lng: String,
  },
  images: [
    {
      url: String, // Actual image URL
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now, // Add a default value of the current date and time
  },
  description: String,
  bedrooms: Number,
  bathrooms: Number,
  garage: Boolean,
  garageSize: Number,
  propertySize: Number,
  yearBuilt: Number,
  specialId: String, // You can specify the type accordingly
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;
