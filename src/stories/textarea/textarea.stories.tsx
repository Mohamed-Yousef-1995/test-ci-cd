import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import TextAreaField from "./textarea";

export default {
  title: "Components/TextAreaField",
  component: TextAreaField,
  tags: ['autodocs'],
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const Template: StoryFn<{ label: string }> = ({ label }) => {
  const [text, setText] = useState("");

  return (
    <div>
      <TextAreaField label={label} value={text} onChange={setText} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Remarks",
};
