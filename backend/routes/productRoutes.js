const express = require("express");
const {
  addProduct,
  getAllProducts,
  getProductById,
  getProductsBySubcategory,
} = require("../controllers/productController");

const router = express.Router();

// Route to add a new product
router.post("/", addProduct);

// Route to get all products
router.get("/", getAllProducts);

// Route to get a product by ID
router.get("/:id", getProductById);

router.get("/subcategory", getProductsBySubcategory);

module.exports = router;
