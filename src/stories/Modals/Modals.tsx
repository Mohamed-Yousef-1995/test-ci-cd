import React, { useState } from "react";
import CloseButtonSVG from "@/assets/svg/CloseButtonSVG";

interface ModalProps {
  level: number;
  onClose: () => void;
}

const Modals: React.FC<ModalProps> = ({ level, onClose }) => {
  const bgColorDefault =
    level === 1
      ? "bg-[#12121B] text-white"
      : level === 2
      ? "bg-[#414149] text-white"
      : level === 3
      ? "bg-[#717176] text-white"
      : "";

  const bgColorMobile =
    level === 1
      ? "bg-[#12121B] text-white"
      : level === 2
      ? "bg-[#414149] text-white"
      : level === 3
      ? "bg-[#E8F5F5]"
      : "bg-[#717176] text-white";

  return (
    <div className=" max-w-[720px] mx-auto">
      {/* For mobile */}
      <div className={`p-3 text-black ${bgColorMobile} sm:hidden`}>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[32px] font-bold">Title</h1>
          <button onClick={onClose}>
            <CloseButtonSVG />
          </button>
        </div>
        <div className="mb-4">
          <p className="text-base font-normal">Introduction</p>
        </div>
      </div>
      {/* For Desktop */}
      <div className={`p-16 text-black ${bgColorDefault} sm:block hidden`}>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-[48px] font-bold">Title</h1>
          <button onClick={onClose}>
            <CloseButtonSVG />
          </button>
        </div>
        <div className="mb-4">
          <p className="text-base font-normal">Introduction</p>
        </div>
      </div>
    </div>
  );
};

export default Modals;
