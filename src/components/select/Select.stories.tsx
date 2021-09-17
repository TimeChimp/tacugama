import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectProps, Value } from './Select';
import { ColorSelect, ColorSelectProps } from './ColorSelect';

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => {
  const [selectedValue, setSelectedValue] = useState<Value>([]);
  return <Select {...args} onChangeHandler={({ value }) => setSelectedValue(value)} value={selectedValue} />;
};
const ColorSelectTemplate: Story<ColorSelectProps> = (args) => <ColorSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { name: 'AliceBlue', id: '#F0F8FF' },
    { name: 'AntiqueWhite', id: '#FAEBD7' },
    { name: 'Aqua', id: '#00FFFF' },
    { name: 'Aquamarine', id: '#7FFFD4' },
    { name: 'Azure', id: '#F0FFFF' },
    { name: 'Beige', id: '#F5F5DC' },
  ],
  placeholder: 'Select color',
};

export const Multi = Template.bind({});
Multi.args = {
  options: [
    { name: 'AliceBlue', id: '#F0F8FF' },
    { name: 'AntiqueWhite', id: '#FAEBD7' },
    { name: 'Aqua', id: '#00FFFF' },
    { name: 'Aquamarine', id: '#7FFFD4' },
    { name: 'Azure', id: '#F0FFFF' },
    { name: 'Beige', id: '#F5F5DC' },
  ],
  placeholder: 'Select color',
  multi: true,
};

export const Loading = Template.bind({});
Loading.args = {
  options: [
    { name: 'AliceBlue', id: '#F0F8FF' },
    { name: 'AntiqueWhite', id: '#FAEBD7' },
    { name: 'Aqua', id: '#00FFFF' },
    { name: 'Aquamarine', id: '#7FFFD4' },
    { name: 'Azure', id: '#F0FFFF' },
    { name: 'Beige', id: '#F5F5DC' },
  ],
  placeholder: 'Select color',
  isLoading: true,
};

export const Color = ColorSelectTemplate.bind({});
Color.args = {
  placeholder: 'Select color',
  colors: [
    { name: 'AliceBlue', color: '#F0F8FF' },
    { name: 'AntiqueWhite', color: '#FAEBD7' },
    { name: 'Aqua', color: '#00FFFF' },
    { name: 'Aquamarine', color: '#7FFFD4' },
    { name: 'Azure', color: '#F0FFFF' },
    { name: 'Beige', color: '#F5F5DC' },
  ],
};
