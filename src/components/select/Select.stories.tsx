import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectProps } from '.';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: 'AliceBlue', id: '#F0F8FF' },
    { label: 'AntiqueWhite', id: '#FAEBD7' },
    { label: 'Aqua', id: '#00FFFF' },
    { label: 'Aquamarine', id: '#7FFFD4' },
    { label: 'Azure', id: '#F0FFFF' },
    { label: 'Beige', id: '#F5F5DC' },
  ],
  placeholder: 'Select color',
};
