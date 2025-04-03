"use client";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Navigation = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <div className="border-b py-4 px-6 sticky top-0 flex items-center justify-between z-50 bg-black text-white">
      {/* title */}
      <Link href={"/"}>
        <h1 className="font-bold text-2xl tracking-wide">Ecom</h1>
      </Link>

      {/* page */}
      <ul className="flex items-center gap-4">
        <Link href={"/"}>
          <li>Products</li>
        </Link>
        <Link href={"/contact-us"}>
          <li>Contact us</li>
        </Link>
      </ul>

      {/* carts */}
      <Link href={"/cart"} className="relative">
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full bg-purple-600 text-white">
            {cart.length}
          </span>
        )}

        <button className="cursor-pointer">
          <ShoppingCart />
        </button>
      </Link>
    </div>
  );
};

export default Navigation;
