import React from "react";

const Pagination = (props) => {
  const { currentPage, setCurrentPage, totalPages } = props;
  return (
    <div className="flex justify-center items-center gap-4 mt-6">
      <button
        className={`px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 disabled:bg-gray-300 cursor-pointer ${
          currentPage === 1 ? "text-purple-600" : "text-white"
        }`}
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Prev
      </button>

      <span className="text-purple-700 font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-300 cursor-pointer"
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
