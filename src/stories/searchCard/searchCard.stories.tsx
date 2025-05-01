import { Meta, StoryObj } from '@storybook/react';
import SearchCard from './searchCard';

// Meta configuration for the component
const meta: Meta<typeof SearchCard> = {
  title: 'Components/SearchCard',  // Where it appears in Storybook's sidebar
  component: SearchCard,
  tags: ['autodocs'],             // Optional: Enables documentation auto-generation
};

export default meta;

// Story type based on the component
type Story = StoryObj<typeof SearchCard>;

// Default story for SearchCard
export const Default: Story = {
  render: () => <SearchCard />,
};
