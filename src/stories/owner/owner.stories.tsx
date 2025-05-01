import { Meta, StoryFn } from "@storybook/react";
import AddOwner from "./AddOwner";

export default {
  title: "Components/AddOwner",
  component: AddOwner,
  tags: ['autodocs'],
  argTypes: {
    text: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta<typeof AddOwner>;

const Template: StoryFn<typeof AddOwner> = (args) => (
  <AddOwner {...args} />
);

export const Initial = Template.bind({});
Initial.args = {
  text: "Add Owner",
  label: 'Select Owner(s)',
  secondButtonText: "Add Company",
  onClick: () => null,
  onSecondButtonClick: () => null,
};
