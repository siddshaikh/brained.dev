import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="border-b py-4 px-6 sticky top-0 flex items-center justify-between z-50 bg-black">
      {/* title */}
      <Link href={"/"}>
        <h1 className="font-bold text-2xl tracking-wide">Ecom</h1>
      </Link>

      {/* page */}
      <ul>
        <li>Products</li>
      </ul>

      {/* carts */}
      <Link href={"/cart"}>
        <button className="cursor-pointer">
          <ShoppingCart />
        </button>
      </Link>
    </div>
  );
};

export default Navigation;
