// ProgressIndicator.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import ProgressIndicator from './progressIndicator';

const meta: Meta<typeof ProgressIndicator> = {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 20 },
    },
    status: {
      control: { type: 'select' },
      options: ['in-progress', 'completed', 'action-required', 'rejected', 'error'],
    },
    showLabel: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressIndicator>;

// Different progress states
export const Progress20: Story = {
  args: {
    value: 20,
    status: 'in-progress',
  },
};

export const Progress40: Story = {
  args: {
    value: 40,
    status: 'in-progress',
  },
};

export const Progress60: Story = {
  args: {
    value: 60,
    status: 'in-progress',
  },
};

export const Progress80: Story = {
  args: {
    value: 80,
    status: 'in-progress',
  },
};

export const Completed: Story = {
  args: {
    value: 100,
    status: 'completed',
  },
};

// Different status states
export const ActionRequired: Story = {
  args: {
    value: 30,
    status: 'action-required',
  },
};

export const Rejected: Story = {
  args: {
    value: 45,
    status: 'rejected',
  },
};

export const Error: Story = {
  args: {
    value: 70,
    status: 'error',
  },
};

export const WithoutLabel: Story = {
  args: {
    value: 50,
    status: 'in-progress',
    showLabel: false,
  },
};