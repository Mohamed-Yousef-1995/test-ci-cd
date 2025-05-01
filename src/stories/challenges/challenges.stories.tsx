// components/ChallengeCard/ChallengeCard.stories.tsx

import { Meta, StoryFn } from "@storybook/react";
import ChallengeCard from "./challenges";

// Meta config
export default {
  title: "Dashboard/ChallengeCard",
  component: ChallengeCard,
  parameters: {
    layout: "centered", // optional, controls how the story renders
  },
} as Meta<typeof ChallengeCard>;

// Default Story
const Template: StoryFn<typeof ChallengeCard> = () => <ChallengeCard />;

export const Default = Template.bind({});
