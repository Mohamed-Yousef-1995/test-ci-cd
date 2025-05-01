import { Meta, StoryFn } from "@storybook/react";


import SearchIconSvg from "../../assets/icons/SearchIconSvg";
import { InputProps } from "../../types/hooks.types";
import Input from "./Input";
import { JSX } from "react/jsx-runtime";

export default {
  title: "Components/Input",
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: false },
  }
} as Meta;

const Template: StoryFn<InputProps> = (args: JSX.IntrinsicAttributes & InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Username",
  placeholder: "Enter your username",
};

export const info = Template.bind({});
info.args = {
  label: "Username",
  placeholder: "Enter your username",
  showInfoIcon: true
};
export const WithError = Template.bind({});
WithError.args = {
  label: "Username",
  placeholder: "Enter your username",
  hasError: true,
  errorMessage: "This field is required",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Search",
  placeholder: "Search here...",
  icon: <SearchIconSvg className="w-5 h-5"/>,
};
export const TrailingIcon = Template.bind({});
TrailingIcon.args = {
  label: "Search",
  placeholder: "Search here...",
  EnableTrailingIcon: true
};
