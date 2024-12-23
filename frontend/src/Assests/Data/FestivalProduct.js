import React from "react";
import ProductCard from "../../Components/Product/ProductCard";

const FestivalProduct = () => {
  const products = [
    {
      id: 1,
      name: "Stripe Royal Blue Suit Set",
      price: 5749.0,
      image:
        "https://i.pinimg.com/736x/5b/bf/58/5bbf58105739b5cdb4f9db81d62fcf6d.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Peachy Bloom Cotton Suit Set",
      price: 6249.0,
      image:
        "https://i.pinimg.com/736x/40/f2/34/40f23448816429ae9cae9381877be11f.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Mauve Mirage Co-Ord Set",
      price: 4999.0,
      image:
        "https://i.pinimg.com/736x/50/55/00/50550099f7f61fb82f532895d719a68f.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: 8249.0,
      image:
        "https://i.pinimg.com/736x/9d/8a/cb/9d8acb9e00db4241cf1b6ee528f409d6.jpg", // Replace with actual image URL
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FestivalProduct;
