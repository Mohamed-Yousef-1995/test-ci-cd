import { CustomInput } from "@/components/ui/input";
import { Info } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export interface MultiSelectProps {
  options: string[];
  maxSelection?: number; // Optional maximum selection limit
  label?: string
  showInfoIcon?: boolean
  required?: boolean
  className?: string
  hasError?: boolean
  errorMessage?: string
  chipClass?: string
}

const MultiSelect: React.FC<MultiSelectProps> = ({ chipClass, hasError, errorMessage, options, maxSelection = 3, label, showInfoIcon, required, className }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleSelectChange = (selectedOption: string) => {
    setSelectedItems((prevSelected) => {
      const isSelected = prevSelected.includes(selectedOption);
      if (isSelected) {
        return prevSelected.filter((item) => item !== selectedOption);
      }
      if (maxSelection && prevSelected.length >= maxSelection) {
        return prevSelected; // Don't add if limit is reached
      }
      return [...prevSelected, selectedOption];
    });
    // setIsOpen(false); // Optional: Close dropdown after selection
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleRemoveChip = (item: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation(); // Prevent dropdown from toggling
    }
    setSelectedItems(selectedItems.filter((selected) => selected !== item));
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={`w-full relative flex flex-col gap-2 ${className}`} ref={selectRef}>
      {label && (
        <label className="text-sm font-medium flex items-center gap-1">
          {label}

          {required && <span className="text-red-500">*</span>}
          {showInfoIcon && <Info size={16} className="text-gray-500" />}
        </label>
      )}
      <div
        className={`border rounded-md p-2 min-h-10 flex flex-wrap gap-2 cursor-pointer ${hasError ? 'border-red-500' : 'border-gray-300'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItems.length > 0 ? (
          selectedItems.map((item) => (

            <div
              key={item}
              className={`bg-blue-100 text-blue-800 px-3 py-1 rounded-md text-sm flex items-center ${chipClass}`}
            >
              {item}
              <span
                className="ml-2 text-blue-800 hover:text-red-600 cursor-pointer"
                onClick={(e) => handleRemoveChip(item, e)}
              >
                ✕
              </span>
            </div>
          ))
        ) : (
          <span className="text-gray-500">Select items...</span>
        )}
      </div>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
          <div className="p-2">
            <CustomInput
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option}
                  className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectChange(option);
                  }}
                >
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(option)}
                    onChange={() => {}}
                    className="cursor-pointer"
                    onClick={(e) => e.stopPropagation()}
                  />
                  <span>{option}</span>
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-gray-500">No options found</div>
            )}
          </div>
        </div>
      )}
            {hasError && errorMessage && (
        <span className="text-red-500 text-sm">{errorMessage}</span>
      )}

    </div>
  );
};

export default MultiSelect;