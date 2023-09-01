const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 5000;

const propertiesRouter = require("./routes/properties.routes"); // Import your properties router

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://redavan:redadj95@cluster0.cko4cef.mongodb.net/deal-real",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define routes and middleware here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Use the properties router
app.use("/api", propertiesRouter);
