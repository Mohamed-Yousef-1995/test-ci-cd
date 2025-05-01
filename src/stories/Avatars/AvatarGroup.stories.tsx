import { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from './AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Components/Avatars',
  component: AvatarGroup,
};

export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const ProfileAvatar: Story = {
  args: {
    items: [
      { imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg', status: 'red' },
      { imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg', status: 'blue' },
      { imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg', initials: 'AA', status: 'green' },
    ],
  },
};

export const AvatarPicture: Story = {
  args: {
    items: [
      { imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg'},
      { initials: 'AA' },
    ],
  },
};

export const ActionStatus: Story = {
  args: {
    items: [
      { status : 'blue' },
    ],
  },
};
