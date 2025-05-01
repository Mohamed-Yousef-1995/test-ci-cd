/* eslint-disable @typescript-eslint/no-explicit-any */
import { Meta, StoryFn } from '@storybook/react';
import Toggle from './toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    languages: {
      control: {
        type: 'object', // Change from 'array' to 'object'
      },
    },
  },
} as Meta;

const Template: StoryFn<any> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  languages: ['English', 'Arabic'],
  size: 'large',
  showText: true
};
