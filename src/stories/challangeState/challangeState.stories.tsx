import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ChallangeState from './ChallangeState';

const meta: Meta<typeof ChallangeState> = {
  title: "Components/ChallangeState",
  component: ChallangeState,
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: {
        type: "select",
        options: ["default", "congratulation", "progress", "track"],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ChallangeState>;

export const Default: Story = {
  args: {
    count: 12,
    messageTitle: "Congratulations",
    messageBody: " Always time to improve.",
    status: "default",
  },
};

export const Track: Story = {
  args: {
    count: 5,
    messageTitle: "Get Back on Track",
    messageBody: "You're on the right track!",
    status: "track",
  },
};

export const Congratulation: Story = {
  args: {
    count: 10,
    messageTitle: "Congratulations",
    messageBody: " You rank in the top 25%.",
    status: "congratulation",
  },
};

export const Progress: Story = {
  args: {
    count: 777,
    messageTitle: "Making Progress",
    messageBody: "Let’s hit your targets.",
    status: "progress",
  },
};
