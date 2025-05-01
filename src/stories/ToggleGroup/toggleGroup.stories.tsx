import type { Meta, StoryObj } from '@storybook/react';
import ToggleGroup from './toggleGroup';

const meta: Meta<typeof ToggleGroup> = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ToggleGroup>;

export const Active: Story = {
  args: {
    text: 'Label',
    state: 'active',
  },
};

export const Default: Story = {
  args: {
    text: 'Label',
    state: 'default',
  },
};

export const Disabled: Story = {
  args: {
    text: 'Label',
    state: 'disabled',
  },
};

export const Row: Story = {
  render: () => (
    <div className="flex gap-4">
      <ToggleGroup text="Label" state="active" />
      <ToggleGroup text="Label" state="default" />
      <ToggleGroup text="Label" state="disabled" />
    </div>
  ),
};