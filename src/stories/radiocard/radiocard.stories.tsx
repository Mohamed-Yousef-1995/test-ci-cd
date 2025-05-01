

import { Meta, StoryFn } from '@storybook/react';
import Radiocard from './radiocard';  


interface RadiocardProps {
  randomText: string;
  specificText: string;
}


export default {
  title: 'Components/Radiocard',
  component: Radiocard,
  argTypes: {
    randomText: { control: 'text' },
    specificText: { control: 'text' }
  }
} as Meta;


const Template: StoryFn<RadiocardProps> = (args) => <Radiocard {...args} />;

export const Default = Template.bind({});
Default.args = {
  randomText: 'Random Allotment',
  specificText: 'Specific Plot'
};

export const CustomText = Template.bind({});
CustomText.args = {
  randomText: 'Choose Random Plot',
  specificText: 'Choose Specific Plot'
};
