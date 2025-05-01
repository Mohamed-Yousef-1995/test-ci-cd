import { Meta, StoryObj } from '@storybook/react';
import MemberCard from './membershipCard';

const meta: Meta<typeof MemberCard> = {
  title: 'Components/MemberCard',
  component: MemberCard,
};

export default meta;
type Story = StoryObj<typeof MemberCard>;

export const Default: Story = {};
