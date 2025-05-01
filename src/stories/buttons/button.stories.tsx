import { Meta, StoryObj } from "@storybook/react";
import DynamicButton from "./Buttons";

const meta: Meta<typeof DynamicButton> = {
  title: "Components/Buttons",
  component: DynamicButton,
};
export default meta;

type Story = StoryObj<typeof DynamicButton>;

export const Default: Story = {
  args: {
    type: "primary",
    label: "Outline",
    size: "medium",
    theme: "light",
  },
};
export const Initials: Story = {
  args: {
    type: "initials",
    label: "Home button",
    size: "medium",
    theme: "light",
  },
};
export const PrimarySmall: Story = {
  args: {
    type: "primary",
    label: "Outline",
    size: "small",
    theme: "light",
  },
};
export const PrimaryMedium: Story = {
  args: {
    type: "primary",
    label: "Medium",
    size: "medium",
    theme: "light",
  },
};
export const PrimaryLarge: Story = {
  args: {
    type: "primary",
    label: "Outline",
    size: "large",
    theme: "light",
  },
};
export const PrimaryDisabled: Story = {
  args: {
    type: "primary",
    label: "disabled",
    size: "large",
    theme: "light",
    disabled: true
  },
};

export const SecondarySmall: Story = {
  args: {
    type: "secondary",
    label: "Outline",
    size: "small",
    theme: "light",
  },
};
export const SecondaryMedium: Story = {
  args: {
    type: "secondary",
    label: "Medium",
    size: "medium",
    theme: "light",
  },
};
export const SecondaryLarge: Story = {
  args: {
    type: "secondary",
    label: "Outline",
    size: "large",
    theme: "light",
  },
};
export const SecondaryDisabled: Story = {
  args: {
    type: "secondary",
    label: "disabled",
    size: "large",
    theme: "light",
    disabled: true
  },
};
export const SecondaryDarkSmall: Story = {
  args: {
    type: "secondary",
    label: "Outline",
    size: "small",
    theme: "dark",
  },
};
export const SecondaryDarkMedium: Story = {
  args: {
    type: "secondary",
    label: "Medium",
    size: "medium",
    theme: "dark",
  },
};
export const SecondaryDarkLarge: Story = {
  args: {
    type: "secondary",
    label: "Outline",
    size: "large",
    theme: "dark",
  },
};
export const SecondaryDarkDisabled: Story = {
  args: {
    type: "secondary",
    label: "disabled",
    size: "large",
    theme: "dark",
    disabled: true
  },
};