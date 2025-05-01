import React, { useState } from "react";
import ChevronDownSvg from "@/assets/icons/chewDownsvg";
import CrossIconSvg from "@/assets/icons/crossIconSvg";
import IconoirStats from "@/assets/icons/iconState";
import BannerUserimg from "../../assets/icons/BannerUserimg.png"


export interface ProfileProps {
  name?: string;
  role?: string;
  points?: number;
  maxPoints?: number;
  completionPercentage?: number;
  onTime?: number;
  delays?: number;
  performance?: number;
  image?: string;
}

const Profile: React.FC<ProfileProps> = ({
  name = "Farzana Shah",
  role = "Service Agent",
  points = 140,
  maxPoints = 200,
  completionPercentage = 70,
  onTime = 65,
  delays = 70,
  performance = 75,
  image = BannerUserimg,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* mobile responsive */}
      <div className="flex items-center justify-center md:hidden">
        <div className="max-w-[330px] text-center">
          <div className="flex justify-between gap-6">
            <div className="mx-auto mb-4 w-[100px] h-[100px] rounded-full overflow-hidden">
              <img alt="User profile" src={image} className="w-full h-full object-cover" />
            </div>

            {/* % */}
            <div>
              <div className="relative w-[100px] h-[100px]">
                <div className="w-full h-full rounded-full border-4 border-gray-300 flex items-center justify-center">
                  <span className="text-2xl font-semibold">{completionPercentage}%</span>
                </div>

                <div
                  className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-500"
                  style={{
                    clipPath: "polygon(50% 50%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)",
                    transform: `rotate(${(completionPercentage / 100) * 360}deg)`,
                  }}
                ></div>

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-bold text-center">
                  <span className="text-black">{points}</span>
                  <span className="text-gray-400">/{maxPoints} Points</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="text-[30px] font-bold mt-2">{name}</h2>
            <p className="text-[20px]">{role}</p>
          </div>

          <div className="relative w-fit mx-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mt-4 px-4 py-1 text-[#169F9F] border border-[#169F9F] rounded-full flex items-center gap-2 justify-center focus:outline-none focus:ring-0"
            >
              <p className="m-0">More</p>
              <ChevronDownSvg />
            </button>

            {isOpen && (
              <div className="absolute -left-36 -bottom-50 mt-2 mx-2 min-w-[360px] bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                <div className="flex justify-end">
                  <button onClick={() => setIsOpen(false)}>
                    <CrossIconSvg />
                  </button>
                </div>

                <div className="flex flex-col pt-4">
                  <img alt="Profile picture " className="rounded-full w-24 h-24 mb-4" src={image} />
                  <h2 className="text-xl text-start font-bold">{name}</h2>
                  <p className="text-gray-500 mb-4 text-start">{role}</p>

                  <div className="grid grid-cols-2 gap-2 w-full">
                    <button className="text-[10px] bg-black text-white py-2 px-3 rounded-full">Land Allocation</button>
                    <button className="text-[10px] bg-black text-white py-2 px-3 rounded-full">Plot Subdivision & Merging</button>
                    <button className="text-[10px] bg-black text-white py-2 px-3 rounded-full">Land Exchange</button>
                    <button className="text-[10px] bg-black text-white py-2 px-3 rounded-full">Land Leasing</button>
                  </div>

                  <button className="flex mt-6 items-center justify-center w-full border border-gray-300 text-gray-700 py-2 rounded-full">
                    <IconoirStats /> <p className="ml-4">My Performance</p>
                  </button>
                  <button className="w-full border border-teal-500 text-teal-500 py-2 rounded-full mt-2">
                    Check-out of OneHub
                  </button>
                </div>
              </div>
            )}
          </div>

          <button className="mt-4 px-6 py-2 text-[#169F9F] border border-[#169F9F] rounded-full flex items-center justify-center mx-auto">
            Check-out of OneHub
          </button>
        </div>
      </div>

      <div className="hidden md:block p-6">
        <div className="bg-white flex justify-between w-full p-6">
          <div className="flex space-x-12 flex-grow">
            <div>
              <div className="relative w-36 h-36">
                <div className="w-full h-full rounded-full border-4 border-gray-300 flex items-center justify-center">
                  <span className="text-3xl font-bold">{completionPercentage}%</span>
                </div>

                <div
                  className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-blue-500"
                  style={{
                    clipPath: "polygon(50% 50%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)",
                    transform: `rotate(${(completionPercentage / 100) * 360}deg)`,
                  }}
                ></div>

                <div className="absolute bottom-9 left-1/2 -translate-x-1/2 text-[14px] font-bold text-center whitespace-nowrap">
                  <span className="text-black">{points}</span>
                  <span className="text-gray-400">/{maxPoints} Points</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[32px] font-bold">{name}</h2>
              <p className="text-[20px]">{role}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-black text-white text-xs px-3 py-1.5 rounded-full">Land Allocation</span>
                <span className="bg-black text-white text-xs px-3 py-1.5 rounded-full">Plot Subdivision & Merging</span>
                <span className="bg-black text-white text-xs px-3 py-1.5 rounded-full">Land Exchange</span>
                <span className="bg-black text-white text-xs px-3 py-1.5 rounded-full">Land Leasing</span>
              </div>

              <div className="mt-4">
                <div className="flex space-x-10">
                  <div>
                    <p className="text-[#717176] text-[12px] font-bold">On time</p>
                    <p className="text-[#1864AB] text-[36px] font-light">{onTime}%</p>
                    <p className="font-bold text-[12px]">
                      43 <span className="text-gray-400">/66 Points</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-[#717176] text-[12px] font-bold">Delays</p>
                    <p className="text-[#1864AB] text-[36px] font-light">{delays}%</p>
                    <p className="font-bold text-[12px]">
                      46 <span className="text-gray-400">/66 Points</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-[#717176] text-[12px] font-bold">Performance</p>
                    <p className="text-[#2B8A3E] text-[36px] font-light">{performance}%</p>
                    <p className="font-bold text-[12px]">
                      51 <span className="text-gray-400">/66 Points</span>
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-4 bg-[#169F9F] text-white px-8 py-2 rounded-full">
                Check-in to OneHub
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-[200px] h-[200px] rounded-full shrink-0">
            <img alt="User image" src={image} className="w-full h-full rounded-full object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
