import { Meta, StoryObj } from '@storybook/react';
import PartnerDetailsCard from './selectedOwner';

const meta: Meta<typeof PartnerDetailsCard> = {
  title: 'Components/SelectedOwnerState',
  component: PartnerDetailsCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PartnerDetailsCard>;

export const Default: Story = {
  args: {
    name: 'Mr. Mohammed Alsahalwi',
    nationalId: '784111107277811',
    moiNumber: '111-1072778',
    share: '50%',
  },
};
