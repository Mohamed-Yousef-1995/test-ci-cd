/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryFn } from '@storybook/react';
import MaskedInput from './maskInput';

export default {
  title: 'Components/MaskedInput',
  component: MaskedInput,
  tags: ['autodocs'],
  argTypes: {
    showInfoIcon: { control: 'boolean' },
    required: { control: 'boolean' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    placeholder: { control: 'text' },
    label: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <MaskedInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Masked Input',
  placeholder: '000000/00000',
  size: 'medium',
};


export const Required = Template.bind({});
Required.args = {
  label: 'Masked Input',
  placeholder: '000000/00000',
  required: true,
  size: 'medium',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Masked Input',
  placeholder: '000000/00000',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Masked Input',
  placeholder: '000000/00000',
  size: 'large',
};