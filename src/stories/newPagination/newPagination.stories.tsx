
import { Meta, StoryFn } from "@storybook/react";
import NewPagination from "./newpagination";

const meta: Meta<typeof NewPagination> = {
  title: "Components/NewPagination",
  component: NewPagination,
  argTypes: {
    totalPages: {
      control: { type: "number", min: 1, max: 100, step: 1 },
      defaultValue: 20,  
    },
  },
};

export default meta;

const Template: StoryFn<typeof NewPagination> = (args) => <NewPagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalPages: 20,
};
