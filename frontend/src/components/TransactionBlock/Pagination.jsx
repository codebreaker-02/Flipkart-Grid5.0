import React from 'react';

const Pagination = ({ transactionsPerPage, totalTransactions, currentPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalTransactions / transactionsPerPage); i++) {
    pageNumbers.push(i);
  }

  let startPage = Math.max(currentPage - 2, 1);
  let endPage = Math.min(startPage + 4, pageNumbers.length);

  if (endPage - startPage < 4) {
    startPage = Math.max(endPage - 4, 1);
  }
    
  return (
    <nav className="flex items-center justify-center mt-1 pagination">
      <ul className="flex items-center justify-center space-x-3 ">
        {/* Left Arrow */}
        {
          <li>
            <button
              onClick={() => {
                if(currentPage > 1)
                    paginate(currentPage - 1)
                }}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <i class="fa fa-angle-double-left" aria-hidden="true"></i>
            </button>
          </li>
        }

        {/* Visible Page Numbers */}
        {pageNumbers.slice(startPage - 1, endPage).map((number) => (
          (
            <li key={number}>
              <button
                onClick={() => paginate(number)}
                className={`${
                  number === currentPage ? 'bg-rose-500 text-white' : 'text-gray-700'
                } px-2 py-2 rounded-md hover:bg-gray-500 hover:text-white focus:outline-none`}
              >
                {number}
              </button>
            </li>
          )
        ))}

        {/* Right Arrow */}
        {
          <li>
            <button
              onClick={() => {
                if(currentPage < pageNumbers.length)
                    paginate(currentPage + 1)
              }}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <i class="fa fa-angle-double-right" aria-hidden="true"></i>
            </button>
          </li>
        }
      </ul>
    </nav>
  );
};

export default Pagination;
