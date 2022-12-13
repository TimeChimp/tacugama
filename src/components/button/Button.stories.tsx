import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps, SquareButton, SquareButtonProps } from './';
import { ButtonType } from 'models';
import { DeleteIcon } from '../icons';
import { Checkbox, CheckboxSize } from 'components/checkbox';
import { KIND } from 'baseui/button';
import { Search } from 'baseui/icon';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const PrimaryButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

const SquareButtonCheckboxTemplate: Story<SquareButtonProps> = (args) => (
  <SquareButton {...args}>
    <Checkbox size={CheckboxSize.Small} />
  </SquareButton>
);

const SquareButtonDeleteTemplate: Story<SquareButtonProps> = (args) => (
  <SquareButton {...args}>
    <DeleteIcon />
  </SquareButton>
);

export const Primary = PrimaryButtonTemplate.bind({});
Primary.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: KIND.primary,
  testId: 'test-button',
  disabled: false,
};
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const PrimaryStartEnhancer = PrimaryButtonTemplate.bind({});
PrimaryStartEnhancer.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: KIND.primary,
  testId: 'test-button',
  startEnhancer: <Search />,
  disabled: false,
};
PrimaryStartEnhancer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Square = SquareButtonCheckboxTemplate.bind({});
Square.args = {};

const red0 = '#E53535';

export const SquareDelete = SquareButtonDeleteTemplate.bind({});
SquareDelete.args = {
  backgroundColor: red0,
  borderColor: red0,
};
