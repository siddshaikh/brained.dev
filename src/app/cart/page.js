"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { removeFromCart } from "@/store/features/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert("Your items have been ordered successfully!");
    dispatch({ type: "cart/clearCart" });
    router.push("/");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-black">
                  {product.title}
                </h3>
                <p className="text-gray-600">Quantity: {product.quantity}</p>
                <p className="text-green-600 font-semibold">
                  Total: ${product.totalPrice.toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => handleRemove(product.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleCheckout}
        className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
      >
        Checkout
      </button>
    </div>
  );
};

export default Cart;
