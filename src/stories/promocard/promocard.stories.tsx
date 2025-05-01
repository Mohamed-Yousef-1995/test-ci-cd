
import { Meta, StoryObj } from "@storybook/react";
import PromoCard from "./promocard";

const meta: Meta<typeof PromoCard> = {
  title: "Components/PromoCard",
  component: PromoCard,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary"],
    },
    title: {
      control: "text",
    },
    text: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof PromoCard>;

export const Default: Story = {
  args: {
    title: "Default Variant",
    text: "This is the default variant of the PromoCard.",
    variant: "default",
  },
};

export const Primary: Story = {
  args: {
    title: "Primary Variant",
    text: "This is the primary variant of the PromoCard.",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary Variant",
    text: "This is the secondary variant of the PromoCard.",
    variant: "secondary",
  },
};
