/* eslint-disable @typescript-eslint/no-explicit-any */
// CustomTextField.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./textField";

const meta = {
  title: "Components/CustomTextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label text for the input field",
    },
    value: {
      control: "text",
      description: "Current value of the input field",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input field is disabled",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the input value changes",
    },
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

// Default state
export const Default: Story = {
  args: {
    label: "Username",
    value: "",
    placeholder: " ",
  },
};

// With value
export const WithValue: Story = {
  args: {
    label: "Username",
    value: "johndoe",
    placeholder: " ",
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    label: "Username",
    value: "johndoe",
    disabled: true,
    placeholder: " ",
  },
};
