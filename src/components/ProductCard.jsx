"use client";
import { addToCart, removeFromCart } from "@/store/features/cart/cartSlice";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const { title, price, thumbnail, description } = product;

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cartItems);
  const isInCart = cart.some((item) => item.id === product?.id);

  const handleCartAction = () => {
    if (isInCart) {
      dispatch(removeFromCart(product.id));
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

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

        <div className="flex items-center gap-2">
          {/* Add/Remove from Cart Button */}
          <button
            onClick={handleCartAction}
            className={`flex items-center justify-center rounded-md w-full text-sm font-semibold gap-2 transition-all h-10 px-3 whitespace-nowrap ${
              isInCart
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            {isInCart ? "Remove" : "Add to Cart"}
          </button>

          {/* Link to Product Details */}
          <Link href={`/product-details/${product?.id}`} className="w-full">
            <button className="w-full bg-purple-600 text-white font-semibold text-sm h-10 px-3 rounded-md hover:bg-purple-700 transition-all text-center whitespace-nowrap">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
