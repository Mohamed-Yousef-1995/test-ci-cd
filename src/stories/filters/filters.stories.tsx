import { Meta, StoryObj } from "@storybook/react";
import FilterBar from "./filters";

const meta: Meta<typeof FilterBar> = {
  title: "Components/Filter",
  component: FilterBar,
};
export default meta;
type Story = StoryObj<typeof FilterBar>;

export const filters: Story = {
  args: {},
};
