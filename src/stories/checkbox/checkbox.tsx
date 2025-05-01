import { Checkbox } from "@/components/ui/checkbox";
import { Info } from "lucide-react";
import { useState, useEffect } from "react";

interface CustomCheckboxProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  required?: boolean;
  infoIcon?: boolean;
}

export default function CustomCheckbox({
  label,
  checked = false,
  disabled = false,
  onChange,
  required,
  infoIcon,
}: CustomCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const handleChange = (checked: boolean) => {
    setIsChecked(checked);
    onChange?.(checked);
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <Checkbox
        checked={isChecked}
        onCheckedChange={handleChange}
        disabled={disabled}
        className={`w-5 h-5 border-gray-300 transition-colors
          ${
            isChecked
              ? "bg-[#169F9F] border-[#169F9F] text-white"
              : "bg-white border-gray-300"
          }
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
      />
      <div className="flex items-center space-x-1 text-sm text-gray-700">
        <span>{label}</span>
        {required && <span className="text-red-500">*</span>}
        {infoIcon && <Info size={16} className="text-gray-500" />}
      </div>
    </label>
  );
}
