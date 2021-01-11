import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './';
import { ButtonType } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: ButtonType.default,
  kind: 'primary',
  children: 'Button',
};

export const Success = Template.bind({});
Success.args = {
  kind: 'primary',
  children: 'Button',
  buttonType: ButtonType.success,
};

export const Error = Template.bind({});
Error.args = {
  kind: 'primary',
  children: 'Button',
  buttonType: ButtonType.error,
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: 'secondary',
  children: 'Button',
};

export const Minimal = Template.bind({});
Minimal.args = {
  kind: 'minimal',
  children: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: 'tertiary',
  children: 'Button',
};
