import ActionStatus from "@/assets/svg/actionStatus";
import IconoirBellSvg from "@/assets/svg/IconoirBellSvg";
import IconoirSettingsSvg from "@/assets/svg/IconoirSettingsSvg";
import MenuIconSvg from "@/assets/svg/MenuIconSvg";
import OnuHubLogo from "@/assets/svg/oneHubLogo";
import StatusUp from "@/assets/svg/statusUp";



const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-2 md:px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="flex gap-6 md:hidden">
            <button aria-label="Menu" className="text-black text-xl">
              <MenuIconSvg />
            </button>
            <button aria-label="Logo" className="text-black text-xl">
              <OnuHubLogo />
            </button>
          </div>
          <div className="hidden md:flex text-black text-base font-normal">Home</div>
        </div>
        <div className="flex items-center gap-3">
          <button aria-label="Settings" className="text-black text-xl">
            <IconoirSettingsSvg />
          </button>
          <button aria-label="Notifications" className="  relative text-black text-xl">
            <IconoirBellSvg />
            <span className="absolute -top-4 -right-3 bg-red-600 text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center">
              3
            </span>
          </button>
          <button aria-label="Statistics" className="hidden md:flex text-black text-xl">
            <StatusUp />
          </button>
          <button className="hidden md:flex text-[#169F9F] text-base border border-[#169F9F] rounded-[32px] px-4 py-1 cursor-pointer">
            Check-out
          </button>
          <div className="relative flex items-center space-x-2 cursor-pointer">
            <img
              alt="Profile picture of a woman wearing a dark hijab and smiling"
              className="w-[36px] h-[36px] md:w-[42px] md:h-[42px] rounded-full object-cover"
              src="https://storage.googleapis.com/a1aa/image/6d2c85a3-1e14-413b-9a59-1133f2f5af8b.jpg"
            />
            <div className="absolute -bottom-1 right-1">
              <ActionStatus  className="w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
            </div>
          </div>
          <div className="hidden md:flex">
            <select name="" id="" className="focus:outline-none">
              <option value="">Farzana</option>
            </select>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
