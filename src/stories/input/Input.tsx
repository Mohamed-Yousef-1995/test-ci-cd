import { InputProps } from "../../types/hooks.types";
import { CustomInput } from "@/components/ui/input";
import { AlertCircle, Info } from 'lucide-react'; // Example icon, you can replace it

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className = "",
  disabled = false,
  hasError = false,
  hasSuccess = false,
  successMessage = "",
  errorMessage = "",
  required = false,
  icon,
  type = "text",
  showInfoIcon,
  showAssistiveText = false,
  assistiveText = "test",
  trailingIcon,
  EnableTrailingIcon = false,
  size = "medium",
}) => {

  console.log(hasError)
  //const inputTypes = ["text", "password", "email", "number", "date", "tel"];
  const sizeClasses = {
    small: 'p-1 text-sm w-34',
    medium: 'p-2 text-base w-1/2',
    large: 'p-3 text-lg w-full',
  };

  const inputPaddingLeft = icon ? '!ps-10' : type ==='tel'? '!ps-15' : 'ps-3';
  const inputPaddingRight = hasError ? 'pe-10' : 'pe-3';

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium flex items-center gap-1">
          {label}
          {showInfoIcon && <Info size={16} className="text-gray-500" />}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative flex items-center w-full">
        {icon && (
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
            {icon}
          </span>
        )}

        <CustomInput
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`!${className} p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500
          hover:outline hover:outline-gray-300 w-full ${inputPaddingLeft} ${inputPaddingRight}
          ${hasError  ? "!border-red-500" : "border-gray-300"} ${
            hasSuccess ? "border-green-500" : "border-gray-300"
          } ${sizeClasses[size]}`}
          disabled={disabled}
        />
        {(hasError || EnableTrailingIcon) && (
          <div className="absolute top-0 right-0 h-full flex items-center px-2">
            <span className="text-red-500">
              {trailingIcon ? trailingIcon : <AlertCircle size={16} />}
            </span>
          </div>
        )}
      </div>
      {showAssistiveText && assistiveText && (
        <span className="text-gray-500 text-sm">{assistiveText}</span>
      )}

      {hasError && errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}
      {hasSuccess && successMessage && (
        <span className="text-green-500 text-sm">{successMessage}</span>
      )}
    </div>
  );
};

export default Input;
