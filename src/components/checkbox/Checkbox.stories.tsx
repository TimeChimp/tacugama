import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Checkbox, CheckboxProps } from './';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args}>Sign up for the newsletter</Checkbox>;

const WithoutChildrenTemplate: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checkmarkType: 'default',
  labelPlacement: 'right',
  disabled: false,
  checked: false,
  isIndeterminate: false,
};

export const WithoutLabel = WithoutChildrenTemplate.bind({});
WithoutLabel.args = {
  checkmarkType: 'default',
  labelPlacement: 'right',
  disabled: false,
  checked: false,
  isIndeterminate: false,
};
