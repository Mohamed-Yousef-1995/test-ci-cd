import { CustomInput } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import React, { useState } from "react";

interface Country {
    code: string;
    name: string;
    dialCode: string;
  }

interface PhoneNumberInputProps {
  value?: string;
  onChange: (value: string | undefined) => void;
  countryCodes: Country[];
  errorMessage?: string;
  hasError?: boolean
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ value, onChange, countryCodes, errorMessage, hasError = false }) => {
  const [country, setCountry] = useState(countryCodes[0]); // Default to US
  const [phone, setPhone] = useState(value || "");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawNumber = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhone(rawNumber);

    // Validate phone number
    const parsedNumber = parsePhoneNumberFromString(`${country.dialCode}${rawNumber}`);
    if (parsedNumber?.isValid()) {
      setIsValid(true);
      onChange(parsedNumber.formatInternational());
    } else {
      setIsValid(false);
      onChange(undefined);
    }
  };

  return (
    <>
        <label className="text-sm font-medium">Phone Number</label>
        <div className={`relative flex items-center w-full border border-gray-300 rounded-md ${!isValid && hasError ? "border-red-500" : "border-gray-300"}`}>
          {/* Country Selector (Prefix) */}
          <Select
            onValueChange={(val) => setCountry(countryCodes.find(c => c.code === val)!)}
            value={country.code}
          >
            <SelectTrigger className="w-24 border-none focus:ring-0 bg-gray-100 px-2 rounded-l-md">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {countryCodes.map((c) => (
                  <SelectItem key={c.code} value={c.code}>
                    ({c.dialCode})
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Phone Number Input */}
          <CustomInput
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Enter phone number"
            className={`w-full pl-2 border-none focus:outline-none rounded-r-md ${!isValid || hasError ? "border-red-500" : ""}`}
          />
        </div>

        {/* Error Message */}
        {isValid === false && (
          <p className="text-sm text-red-500">{errorMessage }</p>
        )}
</>
  );
};

export default PhoneNumberInput;
