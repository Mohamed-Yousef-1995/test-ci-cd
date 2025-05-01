import type { Meta, StoryObj } from "@storybook/react";
import { Check, Trash, AlertTriangle } from "lucide-react";
import IconButton from "./button";

const meta: Meta<typeof IconButton> = {
  title: "Components/Button",
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: "text" },
    variant: {
      control: "select",
      options: ["default", "destructive", "outline", "secondary", "ghost", "link"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    label: "Click Me",
    icon: <Check className="w-5 h-5" />,
    variant: "default",
    className: "hover:bg-red-500",
    disabled: true
  },
};

export const Destructive: Story = {
  args: {
    label: "Delete",
    icon: <Trash className="w-5 h-5" />,
    variant: "destructive",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    icon: <AlertTriangle className="w-5 h-5" />,
    variant: "secondary",
  },
};

export const Disabeld: Story = {
  args: {
    label: "Click Me",
    icon: <Check className="w-5 h-5" />,
    variant: "default",
    disabled: true
  },
};

export const lableOnly: Story = {
  args: {
    label: "Click Me",
    variant: "default",
  },
};
export const twoIcons: Story = {
  args: {
    iconLeft: <Trash className="w-5 h-5" />,
    label: "Delete",
    variant: "default",
    iconRight:<Check className="w-5 h-5" />
  },
};
export const Outline: Story = {
  args: {
    label: "Delete",
    variant: "outline",
  },
};
