import { Meta, StoryFn } from "@storybook/react";
import ServicesMenu, { ServicesMenuProps } from "./serviceMenu";

export default {
  title: "Components/ServicesMenu",
  component: ServicesMenu,
  tags: ["autodocs"],
} as Meta<typeof ServicesMenu>;

const Template: StoryFn<typeof ServicesMenu> = (args: ServicesMenuProps) => (
  <ServicesMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  servicesList: [
    { id: 1, code: "LA", title: "Land Allocation" },
    { id: 2, code: "PS", title: "Plot Subdivision & Merging" },
    { id: 3, code: "LX", title: "Land Exchange" },
    { id: 4, code: "LL", title: "Land Leasing" },
  ],
};

export const SingleService = Template.bind({});
SingleService.args = {
  servicesList: [
    { id: 1, code: "LA", title: "Land Allocation" },
  ],
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  servicesList: [],
};
