import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps, SecondaryButton, SecondaryButtonProps } from './';
import { ButtonType } from 'models';
import { Plus } from '../icons';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const SecondaryButtonTemplate: Story<SecondaryButtonProps> = (args) => <SecondaryButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: ButtonType.default,
  kind: 'primary',
  children: 'Button',
  testId: 'test-button',
};

export const StartEnhancer = Template.bind({});
StartEnhancer.args = {
  buttonType: ButtonType.default,
  kind: 'primary',
  children: 'Button',
  testId: 'test-button',
  startEnhancer: <Plus />,
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

export const Secondary = SecondaryButtonTemplate.bind({});
Secondary.args = {
  children: 'Button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: 'tertiary',
  children: 'Button',
};
