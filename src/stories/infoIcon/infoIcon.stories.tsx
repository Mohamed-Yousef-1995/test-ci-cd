import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "./infoIcon";

const meta: Meta<typeof InfoIcon> = {
  title: "Components/InfoIcon",
  component: InfoIcon,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
  args: {
    message: "This is an info icon!",
    size: "md",
  },
};

export default meta;

type Story = StoryObj<typeof InfoIcon>;

export const Default: Story = {};
