import { Meta, StoryFn } from "@storybook/react";
import TabList from "./tablist";
import TabListSVG from "@/assets/svg/tabListSvg";

export default {
  title: "Components/TabList",
  component: TabList,
  argTypes: {
    tabs: { control: "object" },
  },
} as Meta<typeof TabList>;

const Template: StoryFn<typeof TabList> = (args) => <TabList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      id: 1,
      label: "Tab 1",
      icon: <TabListSVG />,
      onClick: () => console.log('tab click'),
    },
    {
      id: 2,
      label: "Tab 2",
      icon: <TabListSVG />,
      onClick: () => console.log('tab click'),
    },
    {
      id: 3,
      label: "Tab 3",
      icon: <TabListSVG />,
      onClick: () => console.log('tab click'),
    },
  ],
};
