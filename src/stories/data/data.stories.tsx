import { Meta, StoryObj } from '@storybook/react';
import Data from './data';

const meta: Meta<typeof Data> = {
  title: 'Components/Data',
  component: Data,
};

export default meta;

type Story = StoryObj<typeof Data>;

export const Success: Story = {
  args: {
    label: 'One Time',
    percentage: 50,
    type: 'success',
  },
};

export const Alert: Story = {
  args: {
    label: 'One Time',
    percentage: 50,
    type: 'alert',
  },
};

export const Progress: Story = {
  args: {
    label: 'One Time',
    percentage: 70,
    type: 'progress',
    size: 'small'
  },
};
