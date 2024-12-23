import React from 'react';
import AddToCart from '../Button/AddToCart';

function ProductCard({ product }) {
    return (
        <div>
            <div className="group relative border border-gray-200 rounded-lg overflow-hidden shadow-md">
                {/* Product Image */}
                <div className="overflow-hidden">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full transform transition-transform duration-300 group-hover:scale-110 h-[500px]"
                    />
                </div>
                {/* Product Info */}
                <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                    {/* Price and Add to Cart in Row */}
                    <div className="flex items-center justify-between mt-1">
                        <p className="text-gray-600">₹ {product.price}</p>
                        <AddToCart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
