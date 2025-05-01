// components/ChallengeCard.tsx

import Diamondsvg from "@/assets/icons/diamondsvg";
import RibbonStarSvg from "@/assets/icons/ribbonstarsvg";
import React from "react";

const ChallengeCard: React.FC = () => {
  return (
    <div className="p-4 overflow-hidden">
      <div className="flex items-center mb-4 gap-4">
        <Diamondsvg />
        <h1 className="text-[32px] font-bold">Challenges</h1>
      </div>

      {/* Cards Wrapper */}
      <div
        className="flex gap-8 transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-1* 70%)` }}
      >
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#B9E2E2] px-5 pt-6 pb-1.5 rounded-lg shadow-md min-w-[70%] md:min-w-[32%]">
          <div className="flex items-center gap-6">
            <div className="text-[40px] font-light">
              11
              <span className="text-[12px] font-bold">DAYS</span>
            </div>
            <div className="text-gray-600 text-[14px]">
              Average time to close applications
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFFB2] rounded-lg text-sm flex items-center px-3 py-[10px] gap-2">
              <RibbonStarSvg />
              <p>You are on track to get this month's badge. Keep going!</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#B9E2E2] px-5 pt-6 rounded-lg shadow-md min-w-[70%] md:min-w-[32%]">
          <div className="flex items-center gap-6">
            <div className="text-[40px] font-light">
              37
              <span className="text-[12px] font-bold">APPLICATIONS</span>
            </div>
            <div className="text-gray-600 text-[14px]">
              Number closed in the past 30 days
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#FFDC7B] rounded-lg text-sm flex items-center px-3 py-[10px] gap-2">
              <RibbonStarSvg />
              <p>Congrats. You rank in the top 5%. View leaderboard</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-[#FFFFFF] to-[#B9E2E2] px-5 pt-6 rounded-lg shadow-md min-w-[70%] md:min-w-[32%]">
          <div className="flex items-center gap-6">
            <div className="text-[40px] font-light">
              10.3
              <span className="text-[12px] font-bold">%</span>
            </div>
            <div className="text-gray-600 text-[14px]">
              Percentage applications that have hit critical state
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <div className="bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFFB2] rounded-lg text-sm flex items-center px-3 py-[10px] gap-2">
              <RibbonStarSvg />
              <p>Well done. You rank in the top 25%. View leaderboard</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
