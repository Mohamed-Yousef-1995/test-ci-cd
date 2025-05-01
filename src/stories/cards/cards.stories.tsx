import React from 'react';
import { Meta, Story } from '@storybook/react';
import Cards from './Cards'; // Adjust the path based on your project structure

import ProgressPendingSVG from '@/assets/svg/ProgressPendingSVG';
import PrimaryErrorSVG from '@/assets/svg/PrimaryErrorSVG';
import PrimarySuccessSVG from '@/assets/svg/PrimarySuccessSVG';

export default {
  title: 'Components/Cards',
  component: Cards,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondry', 'location', 'both'],
      },
    },
    state: {
      control: {
        type: 'select',
        options: ['pending', 'error', 'success', 'inprogress', 'noresult'],
      },
    },
    title: { control: 'text' },
    text: { control: 'text' },
    imageURL: { control: 'text' },
  },
} as Meta;

const Template: Story = (args) => <Cards {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  state: 'success',
  title: 'title',
  text: 'text',
  imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSsMJwWbiNM-sWtPsfvq1mdV0rxJ-t7t-JQ&s',
};



export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondry',
  state: 'error',
  title: 'title',
  text: 'text',
};

export const Location = Template.bind({});
Location.args = {
  type: 'location',
  state: 'pending',
  title: 'title',
  text: 'text',
  imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSsMJwWbiNM-sWtPsfvq1mdV0rxJ-t7t-JQ&s',
};

export const Both = Template.bind({});
Both.args = {
  type: 'both',
  state: 'inprogress',
  title: 'title',
  text: 'text',
  imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSsMJwWbiNM-sWtPsfvq1mdV0rxJ-t7t-JQ&s',
};
