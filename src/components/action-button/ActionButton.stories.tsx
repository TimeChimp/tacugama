import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ActionButton } from './';
import { ActionButtonProps } from './ActionButton';

import { SearchIcon } from '../icons/search';
import { ButtonKind } from '../button';

export default {
  title: 'Components/Action Button',
  component: ActionButton,
} as Meta;

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  startEnhancer: <SearchIcon />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: ButtonKind.Primary,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: ButtonKind.Tertiary,
};

export const Minimal = Template.bind({});
Minimal.args = {
  kind: ButtonKind.Minimal,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  startEnhancer: <SearchIcon />,
  withoutLabel: true,
};
