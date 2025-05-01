import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Interface for a single radio option
interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

// Interface for the group of radio buttons
interface CustomRadioGroupProps {
  options: RadioOption[];
  defaultValue?: string;
  layout?: "row" | "column";
  onChange?: (value: string) => void;
  name?: string;
  hasError?: boolean;
  errorMessage?: string;
  required?: boolean;
}

export default function CustomRadioGroup({
  options,
  defaultValue,
  layout = "column",
  onChange,
  name,
  hasError = false,
  errorMessage = "This field is required",
  required = false
}: CustomRadioGroupProps) {
  const [selected, setSelected] = useState(defaultValue || "");

  const handleChange = (value: string) => {
    setSelected(value);
    onChange?.(value);
  };

  return (
    <div className="space-y-2">
      <RadioGroup
        value={selected}
        onValueChange={handleChange}
        className={layout === "row" ? "flex flex-row gap-4" : "flex flex-col gap-2"}
        name={name}
      >
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem
              value={option.value}
              id={`${name}-${option.value}`}
              disabled={option.disabled}
              className={cn(
                "w-5 h-5 border-gray-300 text-primary ",
                selected === option.value && "bg-[#169F9F] text-white",
                hasError && "border-red-500 focus:ring-red-500"
              )}
              required={required}
            />
            <label
              htmlFor={`${name}-${option.value}`}
              className={cn(
                "text-sm text-gray-700 cursor-pointer",
                option.disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              {option.label}
              {required && selected === "" && " *"}
            </label>
          </div>
        ))}
      </RadioGroup>

      {hasError && errorMessage && (
        <p className="text-sm text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
}