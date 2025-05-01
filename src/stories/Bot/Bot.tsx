import React from "react";
import footerAvatar from "../../assets/icons/footerAvatar.png";
import { stat } from "fs";

interface BotProps {
  message: string;
  status: "close" | "open";
}

const Bot: React.FC<BotProps> = ({ message, status }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex flex-col items-end space-y-2">
        {/* Always show top image */}
    {status === 'close' &&(
 
           <img
          alt="Profile picture of a person wearing a hijab"
          className="w-16 h-16 rounded-full"
          src={footerAvatar}
        />

    )}

        {/* Show message and bottom image only if status is 'open' */}
        {status === "open" && (
          <>
            <div className="relative bg-[#E8F5F5] text-gray-800 px-6 py-4 rounded-lg shadow-xl min-w-[420px]">
              {message}
              <div className="absolute -bottom-2 right-9 w-0 h-0 border-t-8 border-t-[#E8F5F5] border-l-8 border-l-transparent border-r-8 border-r-transparent"></div>
            </div>

            <img
              alt="Profile picture of a person wearing a hijab"
              className="w-16 h-16 rounded-full"
              src={footerAvatar}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Bot;
