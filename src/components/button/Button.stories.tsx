import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps, SecondaryButton, SecondaryButtonProps, SquareButton, SquareButtonProps } from './';
import { ButtonType } from 'models';
import { Plus, TrashFull } from '../icons';
import { Checkbox, CheckboxSize } from 'components/checkbox';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const SecondaryButtonTemplate: Story<SecondaryButtonProps> = (args) => <SecondaryButton {...args} />;
const SquareButtonCheckboxTemplate: Story<SquareButtonProps> = (args) => (
  <SquareButton {...args}>
    <Checkbox size={CheckboxSize.Small} />
  </SquareButton>
);

const SquareButtonDeleteTemplate: Story<SquareButtonProps> = (args) => (
  <SquareButton {...args}>
    <TrashFull size="14px" />
  </SquareButton>
);

export const Primary = Template.bind({});
Primary.args = {
  buttonType: ButtonType.default,
  kind: 'primary',
  testId: 'test-button',
};

export const StartEnhancer = Template.bind({});
StartEnhancer.args = {
  buttonType: ButtonType.default,
  kind: 'primary',
  testId: 'test-button',
  startEnhancer: <Plus />,
};

export const Success = Template.bind({});
Success.args = {
  kind: 'primary',
  buttonType: ButtonType.success,
};

export const Error = Template.bind({});
Error.args = {
  kind: 'primary',
  buttonType: ButtonType.error,
};

export const Secondary = SecondaryButtonTemplate.bind({});
Secondary.args = {};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: 'tertiary',
};

export const Square = SquareButtonCheckboxTemplate.bind({});
Square.args = {};

const red0 = '#E53535';

export const SquareDelete = SquareButtonDeleteTemplate.bind({});
SquareDelete.args = {
  backgroundColor: red0,
  borderColor: red0,
};
