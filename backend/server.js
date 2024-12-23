const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const categoryRoutes=require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
dotenv.config();

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database Connection
connectDB();

// Routes
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
