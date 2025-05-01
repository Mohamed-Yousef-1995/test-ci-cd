import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Footer from './footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

export const Default: StoryObj<typeof Footer> = {
  render: () => <Footer />,
};
