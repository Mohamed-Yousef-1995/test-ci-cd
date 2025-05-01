import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface CustomSelectProps {
  options: { value: string; label: string }[];
  required?: boolean;
  validationMessage?: string;
  label?: string
  disabled?: boolean;
  hasError?: boolean;
  className?: string;
}

export default function CustomSelect({ hasError = false, disabled = false, options, required = false,
  validationMessage = "This field is required.", label, className = "", ...rest}: CustomSelectProps) {



  const handleChange = (value: string) => {
    console.log(value);

  };

  const handleBlur = () => {

  };

  return (
    <div className={`w-60 ${className}`}>
        {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <Select onValueChange={handleChange} disabled={disabled}>
        <SelectTrigger onBlur={handleBlur} disabled={disabled} {...rest}
        className={`!${className} border rounded-md px-3 py-2 w-full focus:ring-2 focus:ring-blue-500
            ${hasError ? "border-red-500 focus:ring-red-500" : "border-gray-300"}
          `}>
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {hasError && <p className="mt-2 text-sm text-red-500">{validationMessage}</p>}
    </div>
  );
}
