import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  Button as PrimaryButton,
  ButtonProps,
  SecondaryButton,
  SecondaryButtonProps,
  TertiaryButton,
  TertiaryButtonProps,
  SquareButton,
  SquareButtonProps,
  MinimalButton,
  MinimalButtonProps,
} from './';
import { ButtonType } from 'models';
import { Search, TrashFull } from '../icons';
import { Checkbox, CheckboxSize } from 'components/checkbox';

export default {
  title: 'Components/Button',
  component: PrimaryButton,
} as Meta;

const PrimaryButtonTemplate: Story<ButtonProps> = (args) => <PrimaryButton {...args} />;

const SecondaryButtonTemplate: Story<SecondaryButtonProps> = (args) => <SecondaryButton {...args} />;

const TertiaryButtonTemplate: Story<TertiaryButtonProps> = (args) => <TertiaryButton {...args} />;

const MinimalButtonTemplate: Story<MinimalButtonProps> = (args) => <MinimalButton {...args} />;

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

export const Primary = PrimaryButtonTemplate.bind({});
Primary.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: 'primary',
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
  kind: 'primary',
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

export const Secondary = SecondaryButtonTemplate.bind({});
Secondary.args = {
  children: 'Button',
  disabled: false,
};
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const SecondaryStartEnhancer = SecondaryButtonTemplate.bind({});
SecondaryStartEnhancer.args = {
  children: 'Button',
  startEnhancer: <Search />,
  disabled: false,
};
SecondaryStartEnhancer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Tertiary = TertiaryButtonTemplate.bind({});
Tertiary.args = {
  children: 'Button',
  disabled: false,
};
Tertiary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const TertiaryStartEnhancer = TertiaryButtonTemplate.bind({});
TertiaryStartEnhancer.args = {
  children: 'Button',
  startEnhancer: <Search />,
  disabled: false,
};
TertiaryStartEnhancer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Minimal = MinimalButtonTemplate.bind({});
Minimal.args = {
  children: 'Button',
  disabled: false,
};
Minimal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const MinimalStartEnhancer = MinimalButtonTemplate.bind({});
MinimalStartEnhancer.args = {
  children: 'Button',
  startEnhancer: <Search />,
  disabled: false,
};
MinimalStartEnhancer.parameters = {
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
