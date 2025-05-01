import { Meta } from "@storybook/react";
import CustomCheckbox from "./checkbox";
import { useState } from "react";

const meta: Meta<typeof CustomCheckbox> = {
  title: "Components/Checkbox",
  component: CustomCheckbox,
};

export default meta;

export const MultipleCheckboxes = () => {
  const labels = [
    "Accept Terms & Conditions",
    "Subscribe to Newsletter",
    "Enable Notifications",
    "Receive Updates",
    "Accept Terms & Conditions",
    "Subscribe to Newsletter",
    "Enable Notifications",
    "Receive Updates",
  ];

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    Array(labels.length).fill(false)
  );

  const handleCheckboxChange = (index: number, value: boolean) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = value;
    setCheckedItems(newCheckedItems);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {labels.map((label, index) => (
        <CustomCheckbox
          key={index}
          label={label}
          checked={checkedItems[index]}
          onChange={(value) => handleCheckboxChange(index, value)}
          // required={index === 0}
          // infoIcon={index === }
        />
      ))}
    </div>
  );
};
