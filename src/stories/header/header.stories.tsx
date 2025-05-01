import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Header from "./header"; // adjust the path as needed

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: StoryFn = () => <Header />;

export const Default = Template.bind({});
Default.args = {};
