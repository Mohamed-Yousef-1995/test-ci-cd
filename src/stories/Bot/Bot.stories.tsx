
import { Meta, StoryObj } from '@storybook/react';
import Bot from './Bot';

const meta: Meta<typeof Bot> = {
  title: 'Components/Bot',
  component: Bot,
 
};

export default meta;
type Story = StoryObj<typeof Bot>;

export const Default: Story = {
  args: {
    message: 'Hi. How can I help?',
    status:'open'
  },
};




