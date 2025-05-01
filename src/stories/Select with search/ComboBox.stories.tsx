import { Meta, StoryObj } from "@storybook/react";
import ComboBox from "@/components/ui/ComboBox";

const meta: Meta<typeof ComboBox> = {
  title: "Components/Select With Search",
  component: ComboBox,
  tags: ['autodocs'],
  args: {
    label: "Select an Option",
    options: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "cherry", label: "Cherry" },
    ],
  },

  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    onSelect: { action: "selected" },

  },
};

export default meta;
type Story = StoryObj<typeof ComboBox>;

export const Default: Story = {};
