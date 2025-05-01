import React, { ReactNode, useRef, useState } from "react";

interface FormFieldProps {
  type: "text" | "date" | "select" | "textarea" | "uaeid";
  placeholder: string;
  hasError?: boolean;
  icon?: ReactNode;
  options?: string[];
  theme?: "light" | "dark";
  disabled?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  type,
  placeholder,
  hasError = false,
  icon,
  options = [],
  theme = "light",
  disabled = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dateValue, setDateValue] = useState("");

  const handleIconClick = () => {
    if (!disabled) {
      inputRef.current?.showPicker?.();
      inputRef.current?.focus();
    }
  };

  const commonStyles = `w-full py-[15px] px-4 font-bold text-base rounded-[5px] focus:outline-none
    ${theme === "light" ? "bg-[#F0F3F5] text-black" : "bg-[#414149] text-white"}
    ${
      hasError
        ? "border-2 border-[#EE3E43] placeholder-[#EE3E43] text-[#EE3E43]"
        : "border border-[#E7E7E8] placeholder-gray-400"
    }
    ${
      disabled
        ? "bg-[#F0F3F5] text-[#A0A0A4] text-base font-bold cursor-not-allowed"
        : ""
    }`;

  if (type === "textarea") {
    return (
      <div>
        <textarea
          rows={5}
          placeholder={placeholder}
          disabled={disabled}
          className={`${commonStyles} resize-none`}
        />
      </div>
    );
  }

  if (type === "select") {
    return (
      <div>
        <select disabled={disabled} className={`${commonStyles}`}>
          <option value="" disabled hidden selected>
            {placeholder}
          </option>
          {options.map((opt, idx) => (
            <option key={idx} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === "uaeid") {
    return (
      <div className="relative">
        {icon && (
          <span
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
              hasError
                ? "text-[#EE3E43]"
                : theme === "light"
                ? "text-[#A0A0A4]"
                : "text-[#A0A0A4]"
            }`}
          >
            {icon}
          </span>
        )}
        <input
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          className={`${commonStyles} ${icon ? "pl-12" : ""}`}
        />
      </div>
    );
  }

  if (type === "date") {
    return (
      <div className="relative">
        {dateValue === "" && (
          <span
            className={`absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-base font-bold ${
              hasError
                ? "text-[#EE3E43]"
                : theme === "light"
                ? "text-[#A0A0A4]"
                : "text-[#A0A0A4]"
            }`}
          >
            {placeholder}
          </span>
        )}
        <div className={`flex items-center justify-between ${commonStyles}`}>
          <input
            type="date"
            className={`
    appearance-none
    w-full
    bg-transparent
    focus:outline-none
    text-sm
    pt-[10px]
    ${dateValue === "" ? "text-transparent" : ""}
    ${
      hasError
        ? "text-[#EE3E43]"
        : theme === "light"
        ? "text-black"
        : "text-white"
    }
    [&::-webkit-calendar-picker-indicator]:opacity-0 
    [&::-webkit-calendar-picker-indicator]:absolute 
    [&::-webkit-calendar-picker-indicator]:right-0
  `}
          />

          {icon && (
            <button
              type="button"
              onClick={handleIconClick}
              disabled={disabled}
              className={`ml-2 focus:outline-none ${
                hasError
                  ? "text-red-500"
                  : theme === "light"
                  ? "text-[#A0A0A4]"
                  : "text-[#A0A0A4]"
              }`}
            >
              {icon}
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {icon && (
        <span
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
            hasError
              ? "text-[#EE3E43]"
              : theme === "light"
              ? "text-gray-400"
              : "text-white"
          }`}
        >
          {icon}
        </span>
      )}
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        className={`${commonStyles} ${icon ? "pl-12" : ""}`}
      />
    </div>
  );
};

export default FormField;
