import GreaterArrow from "@/assets/svg/GreaterArrow";
import LessThenErrow from "@/assets/svg/LessThenErrow";
import React, { useState } from "react";

interface PaginationProps {
  totalPages: number;
}

const NewPagination: React.FC<PaginationProps> = ({ totalPages }) => {
  const [activePage, setActivePage] = useState<number>(1);
  const maxVisiblePages = 6;

  const getPaginationGroup = () => {
    let start = Math.max(activePage - Math.floor(maxVisiblePages / 2), 1);
    let end = start + maxVisiblePages - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisiblePages + 1, 1);
    }

    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const handlePageClick = (page: number) => {
    setActivePage(page);
  };

  const handlePrev = () => {
    if (activePage > 1) setActivePage(activePage - 1);
  };

  const handleNext = () => {
    if (activePage < totalPages) setActivePage(activePage + 1);
  };

  const pages = getPaginationGroup();

  return (
    <div className=" p-6 rounded-md space-y-6">
      <nav className="flex items-center space-x-4 text-black text-base font-sans">
        <button
          onClick={handlePrev}
          disabled={activePage === 1}
          aria-label="Previous page"
          className={`cursor-pointer focus:outline-none 
            ${activePage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#E7E7E8]"}`}
        >
          <LessThenErrow />
        </button>

        {pages.map((page) => (
  <button
    key={page}
    onClick={() => handlePageClick(page)}
    className={`cursor-pointer w-[42px] h-[42px] flex items-center justify-center rounded-[10px] text-base font-normal
      ${activePage === page ? "bg-[#D0D0D1] border-red-800" : "hover:bg-[#E7E7E8]"}  // Correct conditional styling for active page
    `}
  >
    {page}
  </button>
))}


        <button
          onClick={handleNext}
          disabled={activePage === totalPages}
          aria-label="Next page"
          className={`cursor-pointer focus:outline-none 
            ${activePage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-[#E7E7E8]"}`}
        >
          <GreaterArrow />
        </button>
      </nav>
    </div>
  );
};

export default NewPagination;
