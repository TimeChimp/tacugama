import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  kind: 'primary',
  children: 'Button',
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
