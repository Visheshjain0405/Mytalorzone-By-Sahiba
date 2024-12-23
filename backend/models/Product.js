const mongoose = require("mongoose");

// Define the schema for products
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: [String], // Array of image URLs from Cloudinary
    required: true,
    validate: {
      validator: function (array) {
        return array.length === 4; // Ensure exactly 4 images
      },
      message: "Exactly 4 images are required.",
    },
  },
  category: {
    type: String,
    required: true,
  },
  subcategory: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
