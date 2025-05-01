import { Meta, StoryObj } from "@storybook/react";
import ToggleButton from "./tabs";
import { Flower, Leaf, Sun } from "lucide-react";

const meta: Meta<typeof ToggleButton> = {
  title: "Components/Tabs",
  component: ToggleButton,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Small: Story = {
  args: {
    size: "small",
    items: [
      { icon: <Leaf className="w-6 h-6 text-green-600" />, label: "Small" },
      { icon: <Sun className="w-6 h-6 text-yellow-500" />, label: "Medium" },
      { icon: <Flower className="w-6 h-6 text-red-500" />, label: "Large", disabled: true },
    ],
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    items: [
      { icon: <Leaf className="w-6 h-6 text-green-600" />, label: "Small" },
      { icon: <Sun className="w-6 h-6 text-yellow-500" />, label: "Medium" },
      { icon: <Flower className="w-6 h-6 text-red-500" />, label: "Large", disabled: true },
    ],
  },
};

export const Large: Story = {
  args: {
    size: "large",
    items: [
      { icon: <Leaf className="w-6 h-6 text-green-600" />, label: "Small" },
      { icon: <Sun className="w-6 h-6 text-yellow-500" />, label: "Medium" },
      { icon: <Flower className="w-6 h-6 text-red-500" />, label: "Large", disabled: true },
    ],
  },
};
