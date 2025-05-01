/* eslint-disable react-hooks/rules-of-hooks */
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import PhoneNumberInput from "./phone";

const meta: Meta<typeof PhoneNumberInput> = {
  title: "Components/PhoneNumberInput",
  component: PhoneNumberInput,
  tags: ["autodocs"],
};

export default meta;

// Common Country Codes
const countryCodes = [
  { code: "US", name: "🇺🇸 US", dialCode: "+1" },
  { code: "GB", name: "🇬🇧 UK", dialCode: "+44" },
  { code: "IN", name: "🇮🇳 India", dialCode: "+91" },
  { code: "CA", name: "🇨🇦 Canada", dialCode: "+1" },
  { code: "UAE", name: "🇦🇪 UAE", dialCode: "+971" },
];

// Default Story
export const Default: StoryObj<typeof PhoneNumberInput> = {
  render: () => {
    const [phone, setPhone] = useState<string | undefined>();
    return (
      <div className="p-4">
        <PhoneNumberInput value={phone} onChange={setPhone} countryCodes={countryCodes} />
        <p className="mt-2 text-sm text-gray-600">Entered: {phone || "None"}</p>
      </div>
    );
  },
};

// Story with Pre-selected Country (India)
export const PreSelectedIndia: StoryObj<typeof PhoneNumberInput> = {
  render: () => {
    const [phone, setPhone] = useState<string | undefined>();
    return (
      <div className="p-4">
        <PhoneNumberInput value={phone} onChange={setPhone} countryCodes={countryCodes} />
        <p className="mt-2 text-sm text-gray-600">Entered: {phone || "None"}</p>
      </div>
    );
  },
  args: {
    value: "+91",
  },
};

// Story with Different Country Set (Only Europe)
export const EuropeanCountries: StoryObj<typeof PhoneNumberInput> = {
  render: () => {
    const [phone, setPhone] = useState<string | undefined>();
    const europeCountries = [
      { code: "FR", name: "🇫🇷 France", dialCode: "+33" },
      { code: "DE", name: "🇩🇪 Germany", dialCode: "+49" },
      { code: "ES", name: "🇪🇸 Spain", dialCode: "+34" },
    ];
    return (
      <div className="p-4">
        <PhoneNumberInput value={phone} onChange={setPhone} countryCodes={europeCountries} />
        <p className="mt-2 text-sm text-gray-600">Entered: {phone || "None"}</p>
      </div>
    );
  },
};

// Story with Invalid Number Example
export const WithError: StoryObj<typeof PhoneNumberInput> = {
  render: () => {
    const [phone, setPhone] = useState<string | undefined>("12345");
    return (
      <div className="p-4">
        <PhoneNumberInput value={phone} onChange={setPhone} countryCodes={countryCodes} hasError={true}/>
        <p className="mt-2 text-sm text-gray-600">Entered: {phone || "None"}</p>
      </div>
    );
  },
};

// Story with UAE Default
export const UAESelected: StoryObj<typeof PhoneNumberInput> = {
  render: () => {
    const [phone, setPhone] = useState<string | undefined>();
    return (
      <div className="p-4">
        <PhoneNumberInput value={phone} onChange={setPhone} countryCodes={countryCodes} />
        <p className="mt-2 text-sm text-gray-600">Entered: {phone || "None"}</p>
      </div>
    );
  },
  args: {
    value: "+971",
  },
};
