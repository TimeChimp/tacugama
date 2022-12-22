import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ActionButton } from './';
import { ButtonKind } from '../../models';
import { SearchIcon } from '../icons/search';
import { ActionButtonProps } from './types';

export default {
  title: 'Components/Action Button',
  component: ActionButton,
} as Meta;

const ActionButtonTemplate: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

export const PrimaryStartEnhancer = ActionButtonTemplate.bind({});
PrimaryStartEnhancer.args = {
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

export const SecondaryStartEnhancer = ActionButtonTemplate.bind({});
SecondaryStartEnhancer.args = {
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

export const TertiaryStartEnhancer = ActionButtonTemplate.bind({});
TertiaryStartEnhancer.args = {
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

export const QuaternaryStartEnhancer = ActionButtonTemplate.bind({});
QuaternaryStartEnhancer.args = {
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

export const MinimalStartEnhancer = ActionButtonTemplate.bind({});
MinimalStartEnhancer.args = {
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

export const Primary = ActionButtonTemplate.bind({});
Primary.args = {
  kind: ButtonKind.primary,
  disabled: false,
};
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Secondary = ActionButtonTemplate.bind({});
Secondary.args = {
  kind: ButtonKind.secondary,
  disabled: false,
};
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Tertiary = ActionButtonTemplate.bind({});
Tertiary.args = {
  kind: ButtonKind.tertiary,
  disabled: false,
};
Tertiary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Quaternary = ActionButtonTemplate.bind({});
Quaternary.args = {
  kind: ButtonKind.quarternary,
  disabled: false,
};
Quaternary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const Minimal = ActionButtonTemplate.bind({});
Minimal.args = {
  kind: ButtonKind.minimal,
  disabled: false,
};
Minimal.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const PrimaryIcon = ActionButtonTemplate.bind({});
PrimaryIcon.args = {
  startEnhancer: <SearchIcon />,
  kind: ButtonKind.primary,
  shape: 'square',
  disabled: false,
};
PrimaryIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const SecondaryIcon = ActionButtonTemplate.bind({});
SecondaryIcon.args = {
  startEnhancer: <SearchIcon />,
  kind: ButtonKind.secondary,
  shape: 'square',
  disabled: false,
};
SecondaryIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};

export const TertiaryIcon = ActionButtonTemplate.bind({});
TertiaryIcon.args = {
  startEnhancer: <SearchIcon />,
  kind: ButtonKind.tertiary,
  shape: 'square',
  disabled: false,
};
TertiaryIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1956%3A19072&t=CngHCgPvvPNqKbFU-4',
  },
};
