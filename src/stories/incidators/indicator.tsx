import { Card } from "@/components/ui/card";
import React from "react";

interface RequestCardProps {
  cardsData: {
    stage: {
      complete: number;
      approval: number;
      inprogress: number;
    };
  };
}

const Indicator: React.FC<RequestCardProps> = ({ cardsData }) => {
  const totalDots = 6;
  const { complete, approval, inprogress } = cardsData.stage;
  const dots = [
    ...Array(complete).fill("bg-green-500"),
    ...Array(approval).fill("bg-blue-500"),
    ...Array(inprogress).fill("bg-red-500"),
  ];

  const remainingDotsCount = totalDots - dots.length;
  const allDots = [
    ...dots,
    ...Array(remainingDotsCount).fill("bg-gray-300"),
  ];

  return (
    <Card className="border-0 p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <div className="flex space-x-1">
          {allDots.map((color, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full ${color}`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Indicator;
