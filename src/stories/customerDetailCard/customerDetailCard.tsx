import { Card } from "@/components/ui/card";
import React from "react";

interface RequestCardProps {
  cardsData: {
    title: string;
    id: string;
    location: string;
    date: string;
    stage: {
      complete: number;
      approval: number;
      inprogress: number;
    };
    remaining: string;
  };
}

const RequestCard: React.FC<RequestCardProps> = ({ cardsData }) => {
  const totalDots = 6;

  // Destructure the stage counts
  const { complete, approval, inprogress } = cardsData.stage;

  // Generate colored dots based on counts
  const dots = [
    ...Array(complete).fill("bg-green-500"),
    ...Array(approval).fill("bg-blue-500"),
    ...Array(inprogress).fill("bg-red-500"),
  ];

  // Fill remaining slots with gray
  const remainingDotsCount = totalDots - dots.length;
  const allDots = [
    ...dots,
    ...Array(remainingDotsCount).fill("bg-gray-300"),
  ];

  return (
    <Card className="border border-gray-200 w-80 rounded-xl shadow-lg p-4 flex flex-col gap-2 border-b-4 border-b-[#1864AB]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-base font-semibold text-black truncate max-w-[150px]">
          {cardsData.title}
        </h2>
        <span className="text-sm font-medium text-black">{cardsData.id}</span>
      </div>

      {/* Location + Date */}
      <div className="flex justify-between items-center">
        <h2 className="text-base font-semibold text-black truncate max-w-[150px]">
          {cardsData.location}
        </h2>
        <span className="text-sm font-medium text-black">{cardsData.date}</span>
      </div>

      {/* Stages + Remaining Time */}
      <div className="flex justify-between items-center">
        <div className="flex space-x-1">
          {allDots.map((color, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${color}`}
            />
          ))}
        </div>
        <span className="text-sm font-medium text-black">
          {cardsData.remaining}
        </span>
      </div>
    </Card>
  );
};

export default RequestCard;
