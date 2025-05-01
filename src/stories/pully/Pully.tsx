import PullyIconSvg from "@/assets/svg/Pully";
import PullyDownIconSvg from "@/assets/svg/PullyDown";
import PullyRightIconSvg from "@/assets/svg/PullyRight";
import PullyUpIconSvg from "@/assets/svg/PullyUp";
import React from "react";

interface PullyProps {
  language: "english" | "arabic";
}

const Pully: React.FC<PullyProps> = ({ language }) => {
  return (
    <>
      <div className="hidden sm:flex justify-between items-center w-full">
        {language === "english" ? (
          <div className="ml-auto">
            <PullyIconSvg />
          </div>
        ) : (
          <div className="mr-auto">
            <PullyRightIconSvg />
          </div>
        )}
      </div>

      <div
  className={`flex sm:hidden flex-col items-center w-full h-[500px] ${
    language === "english" ? "justify-end" : "justify-start"
  }`}
>
  {language === "english" ? (
    <PullyUpIconSvg />
  ) : (
    <PullyDownIconSvg />
  )}
</div>

    </>
  );
};

export default Pully;
