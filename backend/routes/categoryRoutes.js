const express = require("express");
const {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const router = express.Router();

// Route to get all categories
router.get("/", getAllCategories);

// Route to add a new category
router.post("/", addCategory);

// Route to update a category
router.put("/:id", updateCategory);

// Route to delete a category
router.delete("/:id", deleteCategory);

module.exports = router;
