
import { Meta, StoryObj } from '@storybook/react';
import PaginationDots from './paginationDots';

const meta: Meta<typeof PaginationDots> = {
  title: 'Components/PaginationDots',
  component: PaginationDots,
  argTypes: {
    totalDots: {
      control: { type: 'number', min: 1 },
      defaultValue: 5,
    },
  },
};

export default meta;

type Story = StoryObj<typeof PaginationDots>;

export const Default: Story = {
  args: {
    totalDots: 9,
  },
};
