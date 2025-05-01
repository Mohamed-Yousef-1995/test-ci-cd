import * as React from "react";
import { cn } from "@/lib/utils";

interface CustomTextFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const TextField = React.forwardRef<HTMLInputElement, CustomTextFieldProps>(
  ({ className, label, disabled, value, ...props }, ref) => {
    return (
      <div className={cn("relative", className)}>
        <input
          ref={ref}
          type="text"
          value={value}
          disabled={disabled}
          placeholder=" "
          {...props}
          className={cn(
            "peer h-12 w-full",
            "border border-gray-300 bg-gray-50",
            "rounded-md",
            "px-3 pt-6 pb-2", // Adjusted padding-bottom to create more space
            "text-gray-800",
            "focus:outline-none focus:ring-2 focus:ring-blue-400",
            "disabled:cursor-not-allowed disabled:bg-gray-100",
            "transition-colors duration-200"
          )}
        />
        <label
          className={cn(
            "absolute left-3",
            "text-sm",
            "text-gray-500",
            "transition-all duration-200",
            "top-1.5", // Moved the label a bit higher
            "peer-placeholder-shown:top-1/2",
            "peer-placeholder-shown:-translate-y-1/2",
            "peer-placeholder-shown:text-base",
            "peer-placeholder-shown:text-gray-400",
            "peer-focus:top-1.5", // Keeps the label higher when focused
            "peer-focus:text-sm",
            "peer-focus:text-blue-600"
          )}
        >
          {label}
        </label>
      </div>
    );
  }
);

TextField.displayName = "CustomTextField";

export { TextField };
