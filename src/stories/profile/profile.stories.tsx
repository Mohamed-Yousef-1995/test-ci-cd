
import { Meta, StoryFn } from "@storybook/react";
import Profile from "./profile";



export default {
  title: "Components/Profile",
  component: Profile,
  argTypes: {
    name: { control: "text" },
    role: { control: "text" },
    points: { control: "number" },
    maxPoints: { control: "number" },
    completionPercentage: { control: "number" },
    onTime: { control: "number" },
    delays: { control: "number" },
    performance: { control: "number" },
  },
} as Meta<typeof Profile>;

const Template: StoryFn<typeof Profile> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Farzana Shah",
  role: "Service Agent",
  points: 140,
  maxPoints: 200,
  completionPercentage: 70,
  onTime: 65,
  delays: 70,
  performance: 75,
};
