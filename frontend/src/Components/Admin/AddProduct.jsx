import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    subcategory: "",
    images: [],
  });
  const [selectedImages, setSelectedImages] = useState([]);

  // Fetch categories and subcategories from MongoDB
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/categories/"); // Replace with your API endpoint
        setCategories(response.data);
        console.log(response.data);
      } catch (error) {
        toast.error("Failed to fetch categories");
      }
    };
    fetchCategories();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  // Handle category change and update subcategories
  const handleCategoryChange = (e) => {
    const selectedCategory = categories.find(
      (category) => category.name === e.target.value
    );
    setSubcategories(selectedCategory?.subcategories || []);
    setProduct((prev) => ({
      ...prev,
      category: e.target.value,
      subcategory: "", // Reset subcategory on category change
    }));
  };

  // Handle image upload to Cloudinary
  const handleImageUpload = async () => {
    if (selectedImages.length === 0) {
      toast.error("Please select at least one image");
      return;
    }

    try {
      const uploadedImages = [];
      for (const image of selectedImages) {
        const formData = new FormData();
        formData.append("file", image);
        const preset_key = "CinemaCraze";
        const cloud_name = "djh2ro9tm";
    
        formData.append("upload_preset", preset_key); // Replace with your Cloudinary preset

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/djh2ro9tm/image/upload", // Replace with your Cloudinary endpoint
          formData
        );

        uploadedImages.push(response.data.secure_url);
      }

      setProduct((prev) => ({ ...prev, images: uploadedImages }));
      toast.success("Images uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload images");
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (
      !product.name ||
      !product.description ||
      !product.price ||
      !product.category ||
      !product.subcategory ||
      product.images.length === 0
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/products", product); // Replace with your API endpoint
      toast.success("Product added successfully!");
      setProduct({
        name: "",
        description: "",
        price: "",
        category: "",
        subcategory: "",
        images: [],
      });
      setSelectedImages([]);
    } catch (error) {
      toast.error("Failed to add product");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ToastContainer />
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Add Product</h1>
        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Product Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Product Description
            </label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              rows="4"
            ></textarea>
          </div>

          {/* Product Price */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Product Price
            </label>
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Product Category */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Product Category
            </label>
            <select
              name="category"
              value={product.category}
              onChange={handleCategoryChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Product Subcategory */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Product Subcategory
            </label>
            <select
              name="subcategory"
              value={product.subcategory}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select a subcategory</option>
              {subcategories.map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
            </select>
          </div>

          {/* Product Images */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Product Images (4)
            </label>
            <input
              type="file"
              multiple
              onChange={(e) => setSelectedImages([...e.target.files])}
              className="w-full border border-gray-300 rounded-md p-2"
            />
            <button
              type="button"
              onClick={handleImageUpload}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Upload Images
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
