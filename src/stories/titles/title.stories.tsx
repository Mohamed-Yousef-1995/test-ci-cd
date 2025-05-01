import { Meta, StoryObj } from "@storybook/react";
import Titles from "./title";
import Buttons from "../buttons/Buttons";

const meta: Meta<typeof Titles> = {
  title: "Components/Titles",
  component: Titles,
};
export default meta;
type Story = StoryObj<typeof Titles>;

export const Title: Story = {
  args: {
    title: "Dashboard",
    initial: true,
    button: <Buttons label="Primary CTA" type="secondary" size="medium" />,
  },
};

export const TitleWithOutInitials: Story = {
  args: {
    title: "Dashboard",
    initial: false,
    button: <Buttons label="Primary CTA" type="secondary" size="medium" />,
  },
};
export const TitleWithOutButton: Story = {
  args: {
    title: "Dashboard",
    initial: true,
  },
};
