import { Meta, StoryObj } from "@storybook/react";
import logo from "./logo";

const meta: Meta<typeof logo> = {
  title: "Components/logo",
  component: logo,
  argTypes: {
    type: {
      options: ["full", "icon", "hub"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof logo>;

export const FullLogo: Story = {
  args: {
    type: "full",
  },
};

export const IconLogo: Story = {
  args: {
    type: "icon",
  },
};

export const HubLogo: Story = {
  args: {
    type: "hub",
  },
};
