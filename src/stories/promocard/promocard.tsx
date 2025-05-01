import React, { useState } from "react";
import promoImg from '../../assets/icons/promoImg.png';
import StarIcon from "@/assets/svg/starIcon";
import secondaryPromo from '../../assets/icons/secondaryPromo.png'

type PromoCardProps = {
  title: string;
  text: string;
  variant?: "default" | "primary" | "secondary";
};

const PromoCard: React.FC<PromoCardProps> = ({
  title,
  text,
  variant = "default",
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  const buttonLabel = title.slice(0, 2).toUpperCase();

 

  if (variant === "default") {
    return (
      <div className="max-w-[573px] w-full border border-[#E7E7E8] bg-gradient-to-r from-white to-[#F0F3F5] rounded-lg shadow-md p-5 flex items-start space-x-4">
        <div className="flex items-center gap-6">
          <button className="flex-shrink-0 rounded-[9px] bg-[#169F9F] w-12 h-12 flex items-center justify-center text-[#B9E2E2] font-[900] text-[22px]">
            {buttonLabel}
          </button>
          <div className="flex-1">
            <h2 className="font-semibold text-[24px] mb-4">{title}</h2>
            <p className="text-base mb-4">{text}</p>
            <button className="bg-[#169F9F] text-white text-base rounded-[32px] px-8 py-1 mb-4">
              CTA Button
            </button>
            <div className="flex space-x-2">
              <span className="bg-gray-900 text-white text-xs rounded-full px-4 py-1">
                Tag 1
              </span>
              <span className="bg-gray-900 text-white text-xs rounded-full px-4 py-1">
                Tag 2
              </span>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 ml-auto pt-1">
        <StarIcon
  onClick={handleClick}
className="cursor-pointer"
  fillColor={isActive ? "url(#goldGradient)" : "gray"} 
/>
        </div>
      </div>
    );
  }

  if (variant === "primary") {
    return (
      <div className="max-w-[573px] w-full bg-white border border-[#E7E7E8] rounded-lg shadow-md flex items-center gap-4 p-6">
        <img
          alt="Promo"
          className="w-50 h-50 rounded-[16px] object-cover flex-shrink-0"
          src={promoImg}
        />
        <div className="flex flex-col justify-between flex-grow">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-[24px]">{title}</h2>
              <StarIcon
  onClick={handleClick}
className="cursor-pointer"
  fillColor={isActive ? "url(#goldGradient)" : "gray"} 
/>
            </div>
            <p className="text-gray-700 text-base my-4">{text}</p>
          </div>
          <div>
            <button className="mb-4 px-8 py-1 bg-[#169F9F] rounded-[32px] text-white text-base font-normal">
              CTA Button
            </button>
            <div className="flex gap-2">
              <button className="bg-[#12121B] text-white text-xs font-normal rounded-[32px] px-4 py-1">
                Tag 1
              </button>
              <button className="bg-[#12121B] text-white text-xs font-normal rounded-[32px] px-4 py-1">
                Tag 2
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "secondary") {
    return (
      <div className="max-w-[573px] rounded-lg overflow-hidden shadow-md border border-[#E7E7E8]">
        <img
          alt="Promo"
          className="w-full h-[100px] object-cover"
          src={secondaryPromo}
        />
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-[24px] font-semibold">{title}</h2>
            <StarIcon
  onClick={handleClick}
className="cursor-pointer"
  fillColor={isActive ? "url(#goldGradient)" : "gray"} 
/>
          </div>
          <p className="text-base font-normal mb-4">{text}</p>
          <button className="bg-[#169F9F] cursor-pointer text-white text-base font-normal rounded-[32px] px-8 py-1 mb-4">
            CTA Button
          </button>
          <div className="flex space-x-2">
            <button className="bg-black text-white text-xs rounded-full px-4 py-1 inline-block">
              Tag 1
            </button>
            <button className="bg-black text-white text-xs rounded-full px-4 py-1 inline-block">
              Tag 2
            </button>
          </div>
        </div>
      </div>
    );
  }


};

export default PromoCard;
