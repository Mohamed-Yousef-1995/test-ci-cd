import dmtLogo from "../../assets/icons/dmtLogo.png";
import dmtIcon from "../../assets/icons/dmtIocn.png";

import footerAvatar from "../../assets/icons/footerAvatar.png";

import SearchIcon from "@/assets/svg/SearchIcon";
const Footer = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden sm:flex items-center space-x-4 ">
        <img alt="DMT Full Logo " src={dmtLogo} />
      </div>
      <div className=" sm:hidden flex items-center space-x-4  h-16 w-16">
        <img alt="DMT Full Logo " src={dmtIcon} className="w-full" />
      </div>

      <div className="sm:hidden pb-28">
        <SearchIcon />
      </div>
      <div>
        <img
          alt="FooterAvatar"
          className="h-16 w-16 rounded-full"
          src={footerAvatar}
        />
      </div>
    </div>
  );
};

export default Footer;
