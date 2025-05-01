import { CustomInput } from '@/components/ui/input';
import { Info } from 'lucide-react';
import React, { useState } from 'react';

interface MaskedInputProps {
  placeholder?: string;
  label?: string;
  className?: string;
  showInfoIcon?: boolean;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  maxLength?: number;
}

const sizeClasses = {
  small: 'w-32 p-1 text-sm',
  medium: 'w-52 p-2 text-base',
  large: 'w-72 p-3 text-lg',
};

const MaskedInput: React.FC<MaskedInputProps> = ({
  required,
  showInfoIcon,
  className,
  label,
  placeholder,
  size = 'medium',
  maxLength = 12,
}) => {
  const [value, setValue] = useState('');

  const formatInput = (input: string) => {
    const cleaned = input.replace(/\D/g, ''); // Remove non-numeric characters
    const limited = cleaned.slice(0, maxLength); // Limit to max digits

    if (limited.length <= 6) {
      return limited;
    }
    return `${limited.slice(0, 6)}/${limited.slice(6)}`; // Add `/` after 6 digits
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInput(event.target.value);
    setValue(formatted);
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-medium flex items-center gap-1">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
          {showInfoIcon && <Info size={16} className="text-gray-500" />}
        </label>
      )}
      <CustomInput
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder ?? '000000/00000'}
        maxLength={maxLength}
        className={`${sizeClasses[size]} rounded border border-gray-300 text-center focus:outline-none`}
      />
    </div>
  );
};

export default MaskedInput;
