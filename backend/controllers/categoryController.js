const Category = require("../models/Category");

// Get all categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories", details: error.message });
  }
};

// Add a new category
exports.addCategory = async (req, res) => {
  const { name, description, image, subcategories } = req.body;

  try {
    const category = new Category({
      name,
      description,
      image,
      subcategories,
    });

    await category.save();
    res.status(201).json({ message: "Category created successfully", category });
  } catch (error) {
    res.status(500).json({ error: "Failed to create category", details: error.message });
  }
};

// Update a category
exports.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, image, subcategories } = req.body;

  try {
    const category = await Category.findByIdAndUpdate(
      id,
      { name, description, image, subcategories },
      { new: true }
    );

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json({ message: "Category updated successfully", category });
  } catch (error) {
    res.status(500).json({ error: "Failed to update category", details: error.message });
  }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete category", details: error.message });
  }
};
