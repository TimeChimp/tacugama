import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from './Button';
import { ButtonProps } from './types';
import { ButtonType, ButtonKind, ButtonShape } from '../../models';
import { SearchIcon } from '../icons/search';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />;

const SquareButtonTemplate: Story<ButtonProps> = (args) => (
  <Button kind={ButtonKind.tertiary} {...args}>
    <SearchIcon />
  </Button>
);

export const PrimaryStartEnhancer = ButtonTemplate.bind({});
PrimaryStartEnhancer.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: ButtonKind.primary,
  disabled: false,
  startEnhancer: <SearchIcon />,
};
PrimaryStartEnhancer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const SecondaryStartEnhancer = ButtonTemplate.bind({});
SecondaryStartEnhancer.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: ButtonKind.secondary,
  startEnhancer: <SearchIcon />,
  disabled: false,
};
SecondaryStartEnhancer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const TertiaryStartEnhancer = ButtonTemplate.bind({});
TertiaryStartEnhancer.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: ButtonKind.tertiary,
  startEnhancer: <SearchIcon />,
  disabled: false,
};
TertiaryStartEnhancer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const QuaternaryStartEnhancer = ButtonTemplate.bind({});
QuaternaryStartEnhancer.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: ButtonKind.quarternary,
  startEnhancer: <SearchIcon />,
  disabled: false,
};
QuaternaryStartEnhancer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const MinimalStartEnhancer = ButtonTemplate.bind({});
MinimalStartEnhancer.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: ButtonKind.minimal,
  startEnhancer: <SearchIcon />,
  disabled: false,
};
MinimalStartEnhancer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Primary = ButtonTemplate.bind({});
Primary.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: ButtonKind.primary,
  disabled: false,
};
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Secondary = ButtonTemplate.bind({});
Secondary.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: ButtonKind.secondary,
  disabled: false,
};
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Tertiary = ButtonTemplate.bind({});
Tertiary.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: ButtonKind.tertiary,
  disabled: false,
};
Tertiary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Quaternary = ButtonTemplate.bind({});
Quaternary.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: ButtonKind.quarternary,
  disabled: false,
};
Quaternary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Minimal = ButtonTemplate.bind({});
Minimal.args = {
  children: 'Button',
  buttonType: ButtonType.default,
  kind: ButtonKind.minimal,
  disabled: false,
};
Minimal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const PrimaryIcon = SquareButtonTemplate.bind({});
PrimaryIcon.args = {
  buttonType: ButtonType.default,
  kind: ButtonKind.primary,
  shape: ButtonShape.square,
  disabled: false,
};
PrimaryIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const SecondaryIcon = SquareButtonTemplate.bind({});
SecondaryIcon.args = {
  buttonType: ButtonType.default,
  kind: ButtonKind.secondary,
  shape: ButtonShape.square,
  disabled: false,
};
SecondaryIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const TertiaryIcon = SquareButtonTemplate.bind({});
TertiaryIcon.args = {
  buttonType: ButtonType.default,
  kind: ButtonKind.tertiary,
  shape: ButtonShape.square,
  disabled: false,
};
TertiaryIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const QuaternaryIcon = SquareButtonTemplate.bind({});
QuaternaryIcon.args = {
  buttonType: ButtonType.default,
  kind: ButtonKind.quarternary,
  shape: ButtonShape.square,
  disabled: false,
};
QuaternaryIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};
