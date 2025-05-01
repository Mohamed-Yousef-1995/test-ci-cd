import React, { useState } from 'react';

interface PaginationDotsProps {
  totalDots: number;
}

const PaginationDots: React.FC<PaginationDotsProps> = ({ totalDots }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="p-6">
      <div className="flex gap-2">
        {Array.from({ length: totalDots }).map((_, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={index}
              className="relative"
              onClick={() => setActiveIndex(index)}
            >
              <div
                className={`rounded-full h-[14px] cursor-pointer transition-all duration-200 ${
                  isActive ? 'bg-[#5CBCBC] w-[24px]' : 'bg-[#E7E7E8] w-[14px]'
                }`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PaginationDots;
