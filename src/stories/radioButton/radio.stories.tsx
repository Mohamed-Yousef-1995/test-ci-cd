import { Meta, StoryObj } from "@storybook/react";
import CustomRadioGroup from "./radio";

const meta: Meta<typeof CustomRadioGroup> = {
  title: "Components/RadioGroup",
  component: CustomRadioGroup,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array of radio options with label, value, and optional disabled state'
    },
    defaultValue: {
      control: 'text',
      description: 'The default selected option value'
    },
    layout: {
      options: ['row', 'column'],
      control: { type: 'radio' },
      defaultValue: 'column',
      description: 'Display radio buttons in row or column layout'
    },
    onChange: { action: 'changed' },
    name: {
      control: 'text',
      description: 'Name attribute for the radio group'
    },
    hasError: {
      control: 'boolean',
      description: 'Whether the field has a validation error'
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display when hasError is true'
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required'
    }
  },
};

export default meta;

type Story = StoryObj<typeof CustomRadioGroup>;

// Default story with column layout
export const Default: Story = {
  args: {
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    defaultValue: "option1",
    layout: "column",
    name: "default-options"
  },
};

// Row layout story
export const RowLayout: Story = {
  args: {
    ...Default.args,
    layout: "row",
    name: "row-options"
  },
};

// Story with validation error
export const WithError: Story = {
  args: {
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    defaultValue: "",
    name: "error-options",
    hasError: true,
    errorMessage: "Please select an option",
    required: true
  },
};

// Story with required field
export const Required: Story = {
  args: {
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    defaultValue: "",
    name: "required-options",
    required: true
  },
};

// Yes/No options story
export const YesNoOptions: Story = {
  args: {
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
    defaultValue: "yes",
    name: "yes-no-options"
  },
};

// Items A, B, C options story
export const ItemOptions: Story = {
  args: {
    options: [
      { label: "Item A", value: "itemA" },
      { label: "Item B", value: "itemB" },
      { label: "Item C", value: "itemC" },
    ],
    defaultValue: "itemB",
    layout: "row",
    name: "item-options"
  },
};