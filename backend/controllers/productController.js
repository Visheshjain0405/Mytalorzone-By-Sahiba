const Product = require("../models/Product");

// Add a new product
exports.addProduct = async (req, res) => {
  const { name, description, price, images, category, subcategory } = req.body;

  // Validation for missing fields
  if (!name || !description || !price || !images || !category || !subcategory) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const product = new Product({
      name,
      description,
      price,
      images,
      category,
      subcategory,
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully!", product });
  } catch (error) {
    res.status(500).json({ error: "Failed to add product", details: error.message });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products", details: error.message });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product", details: error.message });
  }
};

// Get products by subcategory
exports.getProductsBySubcategory = async (req, res) => {
    const { subcategory } = req.query; // Retrieve subcategory from query params
  
    if (!subcategory) {
      return res.status(400).json({ error: "Subcategory is required" });
    }
  
    try {
      const products = await Product.find({ subcategory }); // Filter products by subcategory
      if (products.length === 0) {
        return res.status(404).json({ error: "No products found for this subcategory" });
      }
  
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch products", details: error.message });
    }
  };
