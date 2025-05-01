import { Meta, StoryObj } from "@storybook/react";
import CustomSelect from "./select";

const meta: Meta<typeof CustomSelect> = {
  title: "Components/Select",
  component: CustomSelect,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: "object",
      defaultValue: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ],
    },
    required: { control: "boolean", defaultValue: true },
    validationMessage: { control: "text", defaultValue: "This field is required." },
  },
};

export default meta;

type Story = StoryObj<typeof CustomSelect>;

export const Default: Story = {
    args: {
      label: "Select an option",
      options: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
      ],
      required: true,
      validationMessage: "Please select an option.",
      disabled: false,
      hasError: true,
    },
  };
