const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const propertiesRouter = require("./routes/properties.routes"); // Import your properties router
const usersRouter = require("./routes/users.routes");
const admin = require("firebase-admin");
const serviceAccount = require("../firebase/deal-real-firebase-adminsdk-bblp1-5950ccef13.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://deal-real.appspot.com",
});

const storageFirebase = admin.storage();

//Cors
app.use(cors());

// Enable CORS middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// New
app.use(bodyParser.urlencoded({ extended: true, limit: "200mb" }));
app.use(bodyParser.json({ limit: "200mb" }));

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
app.use("/api", usersRouter);

module.exports = { storageFirebase };
