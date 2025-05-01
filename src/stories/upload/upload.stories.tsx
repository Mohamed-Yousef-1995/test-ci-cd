/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryFn } from "@storybook/react";
import { File, Paperclip } from "lucide-react";
import FileUpload from "./upload";

export default {
  title: "Components/FileUpload",
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    uploadIcon: { control: false },
    plusIcon: { control: false },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <FileUpload {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Confirmation letter",
};

export const Small = Template.bind({});
Small.args = {
  label: "Confirmation letter",
  size: "sm",
};

export const Large = Template.bind({});
Large.args = {
  label: "Confirmation letter",
  size: "lg",
};

export const CustomIcons = Template.bind({});
CustomIcons.args = {
  label: "Confirmation letter",
  uploadIcon: <Paperclip size={18} />,
  plusIcon: <File size={18} />,
};
