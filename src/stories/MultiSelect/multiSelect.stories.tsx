import { Meta, StoryFn } from "@storybook/react";
import MultiSelect from "./multiSelect";

// Defining the default export for Storybook
const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: {
        type: "object", // Use 'object' for arrays
      },
      defaultValue: ["Option 1", "Option 2", "Option 3", "Option 4"],
    },
  },
};
export default meta;

const Template: StoryFn<typeof MultiSelect> = (args) => <MultiSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  label: 'Choose an Option'
};

export const CustomOptions = Template.bind({});
CustomOptions.args = {
  options: ["Custom Option 1", "Custom Option 2", "Custom Option 3", "Custom Option 4", "Custom Option 5"],
  label: 'Choose an Option'
};
