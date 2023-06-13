import React from "react";

const Pagination = ({
  currentPage,
  productsPerPage,
  totalProducts,
  onPageChange,
  handleNextPage,
  handlePreviousPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-between  px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
        <div>
          <nav
            className="isolate inline-flex -space-x-px"
            aria-label="Pagination"
          >
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <i className="fa-regular fa-chevron-left" />
            </button>

            {pageNumbers.map((pageNumber) => (
              <button
                onClick={() => onPageChange(pageNumber)}
                aria-current="page"
                className={`relative z-10 inline-flex items-center ${
                  currentPage === pageNumber
                    ? "bg-white rounded-lg shadow-sm text-blue-500"
                    : "text-gray-400"
                }  px-3 py-1 text-sm font-light hover:text-blue-500  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {pageNumber}
              </button>
            ))}

            {/* <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span> */}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <i className="fa-regular fa-chevron-right" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
