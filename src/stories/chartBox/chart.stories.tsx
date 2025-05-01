import type { Meta, StoryObj } from "@storybook/react";
import Chartbox from "./chart";

const meta: Meta<typeof Chartbox> = {
  title: "Components/Chartbox",
  component: Chartbox,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Chartbox>;

export const Default: Story = {
  render: () => <Chartbox />,
};
