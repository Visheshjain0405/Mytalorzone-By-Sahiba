import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Fetch products whose category is 'Lehenga' from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products?subcategory=Lehenga%20Cholis"); // Backend API
        setProducts(response.data); // Update state with fetched products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product._id}
            className="cursor-pointer"
            onClick={() =>
              navigate(`/product/${product._id}`, { state: { product } })
            }
          >
            <img
              src={product.images[0]} // Use the first image in the array
              alt={product.name}
              className="w-full rounded-lg shadow-md"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">₹{product.price}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
