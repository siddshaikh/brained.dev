"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ShoppingBag, Star } from "lucide-react";
import { addToCart } from "@/store/features/cart/cartSlice";

const DetailCard = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;
    const fetchSingleProduct = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        setError("Failed to fetch product.");
      } finally {
        setLoading(false);
      }
    };
    fetchSingleProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  if (loading) return <p className="text-gray-500 text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Large Product Image */}
        <div className="flex flex-col items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-h-[400px] object-cover rounded-lg shadow-md"
          />
          {/* Thumbnail Images */}
          <div className="flex gap-2 mt-3">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index}`}
                className="w-20 h-20 rounded-md shadow-md object-cover border-2 border-purple-500 cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* Right: Product Details */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
          <p className="text-gray-500 text-lg">by {product.brand}</p>

          {/* Price & Discount */}
          <div className="flex items-center gap-3 mt-3">
            <p className="text-2xl font-bold text-purple-600">
              ${product.price}
            </p>
            <span className="text-sm bg-red-500 text-white px-3 py-1 rounded-full">
              {product.discountPercentage}% OFF
            </span>
          </div>

          {/* Stock & Shipping */}
          <p
            className={`mt-2 text-lg font-semibold ${
              product.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            {product.stock > 0
              ? `In Stock (${product.stock} left)`
              : "Out of Stock"}
          </p>
          <p className="text-gray-500 text-md">{product.shippingInformation}</p>

          {/* Rating & Reviews */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-yellow-500 flex">
              {Array.from({ length: Math.round(product.rating) }).map(
                (_, i) => (
                  <Star key={i} />
                )
              )}
            </span>
            <p className="text-gray-700 text-lg">({product.rating} / 5)</p>
            <p className="text-purple-600 underline text-lg ml-2 cursor-pointer">
              {product.reviews.length} Reviews
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mt-5 space-x-4">
            <button
              className="px-4 py-2 border rounded-lg bg-purple-600 text-lg font-bold"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              −
            </button>
            <span className="text-2xl font-bold text-black">{quantity}</span>
            <button
              className="px-4 py-2 border rounded-lg bg-purple-600 text-lg font-bold"
              onClick={() =>
                setQuantity((prev) => Math.min(product.stock, prev + 1))
              }
            >
              +
            </button>
          </div>

          {/* Total Price */}
          <p className="text-xl text-black font-semibold mt-3">
            Total:
            <span className="line-through text-gray-500 ml-2">
              ${(product.price * quantity).toFixed(2)}
            </span>
            <span className="text-green-600 ml-2">
              $
              {(
                product.price *
                quantity *
                (1 - product.discountPercentage / 100)
              ).toFixed(2)}
            </span>
          </p>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center bg-purple-600 text-white px-6 py-3 mt-6 rounded-md w-full text-lg font-semibold gap-2 hover:bg-purple-700 transition"
          >
            <ShoppingBag />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
