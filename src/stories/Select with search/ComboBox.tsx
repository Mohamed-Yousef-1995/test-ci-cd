"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

interface ComboBoxProps {
  options: { value: string; label: string }[];
  placeholder?: string;
  label?: string;
  onSelect?: (value: string) => void;
}

export default function ComboBox({ options, placeholder = "Select an option", label, onSelect }: ComboBoxProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect?.(value);
    setOpen(false);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {selected ? options.find((opt) => opt.value === selected)?.label : placeholder}
            <ChevronDown className="w-4 h-4 ml-2 opacity-50" />
          </Button>
        </PopoverTrigger>
        {/* ✅ Fix: Ensure the dropdown matches the button width */}
        <PopoverContent className="w-full min-w-[var(--radix-popover-trigger-width)] p-2">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              {options.map((option) => (
                <CommandItem key={option.value} onSelect={() => handleSelect(option.value)} className="flex justify-between">
                  {option.label}
                  {selected === option.value && <Check className="w-4 h-4 text-primary" />}
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
