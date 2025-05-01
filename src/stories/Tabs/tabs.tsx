import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface ToggleButtonItem {
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
}

interface ToggleButtonProps {
  items: ToggleButtonItem[];
  size?: "small" | "medium" | "large";
}

const sizeClasses = {
  small: "w-32 h-12 text-xs p-2",
  medium: "w-40 h-14 text-sm p-3",
  large: "w-48 h-16 text-base p-4",
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ items, size = "medium" }) => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => !item.disabled && setSelected(index)}
          disabled={item.disabled}
          className={cn(
            "flex items-center gap-6 rounded-lg border transition-all shadow-sm justify-center",
            sizeClasses[size],
            item.disabled
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : selected === index
              ? "border-blue-500 bg-blue-100 text-black font-medium"
              : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          )}
        >
          {item.icon}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
