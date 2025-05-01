import { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
};
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const level1: Story = {
  args: {
    items: [
        { label: "Home", href: "#" },
        { label: "Level 1 Page Title" },
      ],
  },
};
export const level2: Story = {
    args: {
      items: [
          { label: "Home", href: "#" },
          { label: "Level 1 Page Title", href: "#" },
          { label: "Level 2 Page Title" },
        ],
    },
  };
  export const level3: Story = {
    args: {
      items: [
          { label: "Home", href: "#" },
          { label: "Level 1 Page Title", href: "#" },
          { label: "Level 2 Page Title", href: "#" },
          { label: "Level 3 Page Title" },
        ],
    },
  };
