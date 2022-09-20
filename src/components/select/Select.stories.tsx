import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Select, SelectProps, Value } from './Select';
import { ColorSelect, ColorSelectProps } from './color-select';
import { OPTIONS } from './Select.test';

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
  options: OPTIONS,
  placeholder: 'Select color',
};

export const Multi = Template.bind({});
Multi.args = {
  options: OPTIONS,
  placeholder: 'Select color',
  multi: true,
};

export const Loading = Template.bind({});
Loading.args = {
  options: OPTIONS,
  placeholder: 'Select color',
  isLoading: true,
};

export const Color = ColorSelectTemplate.bind({});
Color.args = {
  placeholder: 'Select color',
  colors: OPTIONS,
};
