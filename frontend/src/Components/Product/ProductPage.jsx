import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null); // State for product details
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // Define manual sizes
  const availableSizes = ["XS", "S", "M", "L", "XL", "XXL"];

  // Fetch product details by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`); 
        setProduct(response.data);
        setSelectedImage(response.data.images[0]); // Set the first image as the default selected image
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart!");
      return;
    }
    alert(`Added ${product.name} (Size: ${selectedSize}) to cart!`);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-gray-600">Loading product details...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex flex-col items-start">
            <div className="mb-4">
              <img
                src={selectedImage}
                alt="Product"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt="Thumbnail"
                  className={`w-16 h-16 rounded-md shadow-md cursor-pointer border-2 ${
                    selectedImage === image ? "border-red-500" : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-2xl text-gray-600 mb-6">₹ {product.price.toFixed(2)}</p>
            {/* <p className="text-gray-600 mb-6">{product.description}</p> */}

            {/* Size Selector */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Select Size</h2>
              <div className="flex space-x-4">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md ${
                      selectedSize === size
                        ? "bg-red-500 text-white"
                        : "bg-white text-gray-800"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-red-500 text-white text-lg font-semibold rounded-lg shadow-lg mb-6"
            >
              Add to Cart
            </button>

            {/* Description Section */}
            <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Description</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-gray-600 mb-4">
                <strong>Category:</strong> {product.category}
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Subcategory:</strong> {product.subcategory}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
