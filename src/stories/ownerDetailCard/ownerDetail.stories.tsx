import { Meta, StoryObj } from '@storybook/react';
import OwnerDetails from './ownerDetail';

const meta: Meta<typeof OwnerDetails> = {
  title: 'Components/OwnerDetails',
  component: OwnerDetails,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof OwnerDetails>;

export const Default: Story = {};
