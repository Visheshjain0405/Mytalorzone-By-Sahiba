import React from "react";
import ProductCard from "../../Components/Product/ProductCard";

const KurtiProduct = () => {
  const products = [
    {
      id: 1,
      name: "Stripe Royal Blue Suit Set",
      price: 5749.0,
      image:
        "https://i.pinimg.com/736x/33/59/ff/3359ffffd70b455d3b3ceaef4e4cd8d6.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Peachy Bloom Cotton Suit Set",
      price: 6249.0,
      image:
        "https://i.pinimg.com/736x/c7/8e/bd/c78ebd068db476afeb041e8ea1d22617.jpg", // Replace with actual image URL
    },
    {
      id: 3,
      name: "Mauve Mirage Co-Ord Set",
      price: 4999.0,
      image:
        "https://i.pinimg.com/736x/f5/d6/af/f5d6af4f6dded9445ba15b5c9c942e11.jpg", // Replace with actual image URL
    },
    {
      id: 4,
      name: "Multicolor Floral Chinon Saree",
      price: 8249.0,
      image:
        "https://i.pinimg.com/736x/b2/7f/62/b27f62745ba5dea67ad4199d35b254c7.jpg", // Replace with actual image URL
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

export default KurtiProduct;
