import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPageNumbers?: boolean;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  showPageNumbers = true,
  maxVisiblePages = 5
}) => {
  const getPageNumbers = (): number[] => {
    const pages: number[] = [];
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded-md ${
          currentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-[#169F9F] text-white hover:bg-[#169F9F] cursor-pointer'
        }`}
      >
        Back
      </button>

      {showPageNumbers && (
        <>
          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`px-3 py-1 rounded-md ${
                currentPage === pageNum
                  ? 'bg-[#169F9F] text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer'
              }`}
            >
              {pageNum}
            </button>
          ))}
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-[#169F9F] text-white hover:bg-[#169F9F] cursor-pointer'
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;