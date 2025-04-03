"use client";

import Pagination from "@/components/Pagination";
import ProductCard from "@/components/ProductCard";
import useData from "@/data/useData";

export default function Home() {
  const { data, loading, error, currentPage, setCurrentPage, totalPages } =
    useData(20);
  if (error) {
    return <div className="text-center">Error while loading page.</div>;
  }
  return (
    <div className="px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}
