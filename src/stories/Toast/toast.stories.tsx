
import { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'error', 'pending'],
    },
    text: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    status: 'success',
    text: 'Your application was submitted successfully!',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    text: 'There was an error submitting your application.',
  },
};

export const Pending: Story = {
  args: {
    status: 'pending',
    text: 'Submitting your application... please wait.',
  },
};
