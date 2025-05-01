import React from "react";
import dmtLogo from "../../assets/icons/dmtLogo.png";
import dmtIocn from "../../assets/icons/dmtIocn.png";
import OneHubsvg from "@/assets/icons/oneHubsvg";
interface LogoProps {
  type: "full" | "icon" | "hub";
}

const logo: React.FC<LogoProps> = ({ type }) => {
  return (
    <>
      <div className="flex flex-col items-center">
        {type === "full" && (
          <div className="my-6">
            <img alt="Dmt logo" src={dmtLogo} />
          </div>
        )}

        {type === "icon" && (
          <div className="my-6">
            <img alt="DMT ICON" className="w-9 h-9" src={dmtIocn} />
          </div>
        )}

        {type === "hub" && (
          <div className="my-6 flex flex-col items-center space-y-2">
            <OneHubsvg />
          </div>
        )}
      </div>
    </>
  );
};

export default logo;
