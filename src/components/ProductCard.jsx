import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const { title, price, thumbnail, description } = product;

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl p-4">
      {/* Product Image */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-60 object-cover rounded-t-xl"
      />

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-purple-700">{title}</h3>
        <p className="text-sm text-gray-600 truncate">{description}</p>
        <h3 className="text-xl font-semibold text-purple-600 mt-2">${price}</h3>

        <div className="flex items-center gap-4">
          {/* Add to Cart Button */}
          <button className="mt-4 w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition-all">
            Add to Cart
          </button>
          {/* link to product details */}
          <Link
            className="mt-4 w-full bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition-all text-center"
            href={`/product-details/${product?.id}`}
          >
            Product Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
