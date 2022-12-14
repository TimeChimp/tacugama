import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Checkbox } from './';
import { CheckboxProps, CheckboxSize } from './types';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta;

const DefaultTemplate: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

const WithLabelTemplate: Story<CheckboxProps> = (args) => <Checkbox {...args}>Sign up for the newsletter</Checkbox>;

export const Default = DefaultTemplate.bind({});
Default.args = {
  size: CheckboxSize.Default,
  checkmarkType: 'default',
  labelPlacement: 'right',
  disabled: false,
  checked: false,
  isIndeterminate: false,
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1608%3A11185',
  },
};

export const WithLabel = WithLabelTemplate.bind({});
WithLabelTemplate.args = {
  size: CheckboxSize.Default,
  checkmarkType: 'default',
  labelPlacement: 'right',
  disabled: false,
  checked: false,
  isIndeterminate: false,
};
