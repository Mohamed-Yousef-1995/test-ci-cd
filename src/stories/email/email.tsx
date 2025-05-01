import React, { useState } from 'react';
import { CustomInput } from "@/components/ui/input";
import { Info } from 'lucide-react';

// Define types for component props (if any)
interface EmailInputProps {
  hasError?: boolean;
  className?: string;
  errorMessage?: string;
  showInfoIcon?: boolean;
  required?: boolean;
}

const EmailInput: React.FC<EmailInputProps> = ({ className, hasError, errorMessage, showInfoIcon, required }) => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Simple email validation regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setError('Invalid email address');
    } else {
      setError('');
    }
  };

  return (
    <div className={`flex flex-col gap-2 ${className}`}>

        <label className="text-sm font-medium flex items-center gap-1">
          Email
          {required && <span className="text-red-500 ml-0.5">*</span>}
          {showInfoIcon && <Info size={16} className="text-gray-500" />}

        </label>

      <CustomInput
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email"
        className={`focus:outline-none ${className ?? 'w-full'} ${hasError && error ? 'border-red-500' : ''}`}
      />
      {error && hasError && <span style={{ color: 'red' }}>{errorMessage}</span>}
    </div>
  );
};

export default EmailInput;
