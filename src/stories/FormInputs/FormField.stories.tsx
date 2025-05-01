
import { Meta, StoryObj } from "@storybook/react";
import FormField from "./FormField";

import TeamSVG from "@/assets/svg/TeamSVG";
import Calander from "@/assets/svg/calander";
import UaeidIcon from "@/assets/svg/uaeid";

const meta: Meta<typeof FormField> = {
  title: "Components/FormField",
  component: FormField,
};

export default meta;

type Story = StoryObj<typeof FormField>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Enter your name",
    theme:'dark'

  },
};
export const DisabledText: Story = {
  args: {
    type: "text",
    placeholder: "Disabled text input",
    disabled: true,
       theme:'dark'
  },
};

export const DisabledTextWithIcon: Story = {
  args: {
    type: "text",
    placeholder: "Disabled with icon",
    icon:<TeamSVG/>,
    disabled: true,
  },
};
export const TextWithIcon: Story = {
  args: {
    type: "text",
    placeholder: "Enter your name",
    icon:<TeamSVG/>
  },
};
export const TextError: Story = {
  args: {
    type: "text",
    placeholder: "Enter your name",
    hasError: true,
    icon:<TeamSVG fillColor="#ff0000" />

  },
};

export const Date: Story = {
  args: {
    type: "date",
    placeholder: "Select date",
    icon:<Calander/>
  },
};
export const DateWithError: Story = {
  args: {
    type: "date",
    placeholder: "Select date",
    hasError: true, 
    icon:<Calander fillColor='#EE3E43'/>
  },
};
export const DisabledDate: Story = {
  args: {
    type: "date",
    placeholder: "Select date",
    disabled: true,
    icon:<Calander fillColor='#59595F'/>
  },
};

export const DisabledSelect: Story = {
  args: {
    type: "select",
    placeholder: "Disabled select",
    options: ["Option 1", "Option 2"],
    disabled: true,
  },
};

export const Select: Story = {
  args: {
    type: "select",
    placeholder: "Placeholder",
    options: ["Option 1", "Option 2", "Option 3"],
  },
};
export const SelectWithError: Story = {
  args: {
    type: "select",
    placeholder: "Choose an option",
    options: ["Option 1", "Option 2", "Option 3"],
    hasError:true
  },
};
export const Textarea: Story = {
  args: {
    type: "textarea",
    placeholder: "Write your message",

  },
};

export const TextareaWithError: Story = {
  args: {
    type: "textarea",
    placeholder: "Write your message",
    hasError:true,
    
  },
};
export const DisabledTextarea: Story = {
  args: {
    type: "textarea",
    placeholder: "Disabled textarea",
    disabled: true,
  },
};



export const UAEIDWithIcon: Story = {
  args: {
    type: "uaeid",
    placeholder: "XXX-XXXX-XXXXXX-X",
    icon: <UaeidIcon />,
    theme: "dark",
  },
};

export const UAEIDWithError: Story = {
  args: {
    type: "uaeid",
    placeholder: "XXX-XXXX-XXXXXX-X",
    hasError: true,
    icon: <UaeidIcon fillColor="#EE3E43" />,
    theme: "dark",
  },
};

export const DisabledUAEID: Story = {
  args: {
    type: "uaeid",
    placeholder: "XXX-XXXX-XXXXXX-X",
    disabled: true,
    icon: <UaeidIcon  fillColor="#A0A0A4"/>,
    theme: "dark",
  },
};
