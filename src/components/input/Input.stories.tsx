import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from './Input';
import { Search } from '../icons';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
};

export const StartEnhancer = Template.bind({});
StartEnhancer.args = {
  placeholder: 'placeholder',
  startEnhancer: <Search size="18px" />,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  placeholder: 'Error!',
  error: true,
};
