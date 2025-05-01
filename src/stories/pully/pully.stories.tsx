import { Meta, StoryFn } from "@storybook/react";
import Pully from "./pully";

export default {
  title: "Components/Pully",
  component: Pully,
} as Meta;

const Template: StoryFn = (args) => <Pully {...args} />;

export const EnglishLanguage = Template.bind({});
EnglishLanguage.args = {
  language: "english",
};

export const ArabicLanguage = Template.bind({});
ArabicLanguage.args = {
  language: "arabic",
};
