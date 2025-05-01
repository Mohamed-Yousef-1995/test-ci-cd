import RibbonStarSvg from "@/assets/icons/ribbonstarsvg";
import Clock from "@/assets/svg/Clock";
import RewardBadge from "@/assets/svg/RewardBadge";
import TrophySVG from "@/assets/svg/TrophySVG";
import React from "react";

interface ChallangeStateCardProps {
  count: number | string;
  messageTitle: string;
  messageBody: string;
  status?: "default" | "congratulation" | "progress" | "track";
}

const ChallangeState: React.FC<ChallangeStateCardProps> = ({
  count,
  messageTitle,
  messageBody,
  status = "default",
}) => {
  const label = "ADD UNIT";

  const getBgColor = () => {
    switch (status) {
      case "track":
        return "bg-[#FFFFFF]";
      case "congratulation":
        return "bg-gradient-to-r from-[#FFFFFF] to-[#8ACFCF]";
      case "progress":
        return "bg-gradient-to-r from-[#FFFFFF] to-[#A5D8FF]";
      default:
        return " bg-gradient-to-r from-[#FFFFFF] to-[#FFDC7B]";
    }
  };

  const getIcon = () => {
    switch (status) {
      case "track":
        return <Clock />;
      case "congratulation":
        return <RibbonStarSvg />;
      case "progress":
        return <RewardBadge />;
      default:
        return <TrophySVG />;
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#B9E2E2] px-5 pt-6 pb-1.5 rounded-lg shadow-md max-w-[388px]">
      <div className="flex items-center gap-6">
        <div className="text-base  md:text-[32px] lg:text-[48px] font-bold">
          {count}
          <span className="text-[12px] font-bold ml-1 whitespace-nowrap">
            ADD UNIT
          </span>
        </div>
        <div className="text-gray-600 text-[14px]">
          High Level stat summary here
        </div>
      </div>
      <div className="mt-2 flex items-center">
        <div
          className={`${getBgColor()} rounded-lg text-sm flex items-center px-3 py-1 gap-2`}
        >
          {getIcon()}
          <p className="text-sm ">
            <span className="font-bold">{messageTitle}. </span>
            {messageBody}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallangeState;
