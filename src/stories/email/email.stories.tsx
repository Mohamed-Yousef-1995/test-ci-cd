/* eslint-disable @typescript-eslint/no-explicit-any */

import { Meta, StoryFn } from '@storybook/react';
import EmailInput from './email';

// Meta information about the component

export default {
    title: "Components/Email",
    component: EmailInput,
    tags: ['autodocs'],
    argTypes: {
      icon: { control: false },
    }
  } as Meta;

const Template: StoryFn<any> = (args) => <EmailInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  className: 'w-full',
  hasError: true,
  errorMessage: ''
};
