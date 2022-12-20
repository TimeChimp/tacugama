import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './';
import { ButtonType } from 'models';
import { DeleteIcon } from '../icons/delete';
import { Checkbox, CheckboxSize } from 'components/checkbox';
import { ButtonKind } from '../../models';
import { Search } from 'baseui/icon';
import { customColors } from '../../theme/colors';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const PrimaryButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

const SquareButtonCheckboxTemplate: Story<ButtonProps> = (args) => (
  <Button buttonKind={ButtonKind.tertiary} {...args}>
    <Checkbox size={CheckboxSize.Small} />
  </Button>
);

const SquareButtonDeleteTemplate: Story<ButtonProps> = (args) => (
  <Button buttonKind={ButtonKind.tertiary} {...args}>
    <DeleteIcon color={customColors.light4} />
  </Button>
);

export const Primary = PrimaryButtonTemplate.bind({});
Primary.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  buttonKind: ButtonKind.primary,
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
  buttonKind: ButtonKind.primary,
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
Square.args = {
  isSquare: true,
};

export const SquareDelete = SquareButtonDeleteTemplate.bind({});
SquareDelete.args = {
  isSquare: true,
  backgroundColor: customColors.red0,
  borderColor: customColors.red0,
};
