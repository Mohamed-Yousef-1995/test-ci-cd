import React, { useState } from "react";

type ButtonProps = {
  type: "primary" | "secondary" | "initials";
  label: string;
  size: "small" | "medium" | "large";
  theme?: "light" | "dark";
  disabled?: boolean;
};

const Buttons: React.FC<ButtonProps> = ({
  type,
  label,
  size,
  theme = "light",
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    "font-normal rounded-full transition-all duration-300 ease-in-out sm:w-auto";

  const sizeStyles = {
    small: "py-1 px-4 text-xs sm:text-sm md:text-base",
    medium: "py-1 px-4 text-sm sm:text-base md:text-lg",
    large: "py-2 px-6 text-base sm:text-lg md:text-xl",
  }[size];

  const typeStyles = {
    initials: {
      default:
        theme === "dark"
          ? "!bg-[#169F9F] text-white"
          : "!bg-[#169F9F] text-white",
      hover:
        theme === "dark"
          ? "!bg-[#73C5C5] text-white"
          : "!bg-[#73C5C5] text-white",
      disabled:
        theme === "dark"
          ? "!bg-[#88888D] text-[#A0A0A4]"
          : "!bg-[#E7E7E8] !text-[#A0A0A4] cursor-not-allowed",
    },
    primary: {
      default:
        theme === "dark"
          ? "!bg-[#169F9F] text-white"
          : "!bg-[#169F9F] text-white",
      hover:
        theme === "dark"
          ? "!bg-[#73C5C5] text-white"
          : "!bg-[#73C5C5] text-white",
      disabled:
        theme === "dark"
          ? "!bg-[#88888D] text-[#A0A0A4]"
          : "!bg-[#E7E7E8] !text-[#A0A0A4] cursor-not-allowed",
    },
    secondary: {
      default:
        theme === "dark"
          ? "border border-[#169F9F] text-white"
          : "border border-[#169F9F] !text-[#169F9F]",
      hover:
        theme === "dark"
          ? "!bg-[#132e35] border border-[#169F9F] text-white"
          : "!bg-[#E8F5F5] border border-[#169F9F] !text-[#169F9F]",
      disabled:
        theme === "dark"
          ? "border border-[#A0A0A4] text-[#A0A0A4] cursor-not-allowed"
          : "!border border-[#A0A0A4] !text-[#A0A0A4] cursor-not-allowed",
    },
  }[type][disabled ? "disabled" : isHovered ? "hover" : "default"];

  const getFirstChar = (name: string) => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
      .slice(0, 2);
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles} ${typeStyles} ${
        type === "initials" ? "rounded-sm" : ""
      }`}
      disabled={disabled}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {type === "initials" ? getFirstChar(label) : label}
    </button>
  );
};

export default Buttons;
