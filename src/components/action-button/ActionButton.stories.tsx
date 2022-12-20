import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ActionButton } from './';
import { ButtonKind } from '../../models';
import { SearchIcon } from '../icons/search';
import { customColors } from '../../theme/colors';
import { ActionButtonProps } from './types';

export default {
  title: 'Components/Action Button',
  component: ActionButton,
} as Meta;

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  startEnhancer: <SearchIcon color={customColors.light4} />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: ButtonKind.secondary,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: ButtonKind.tertiary,
};

export const Minimal = Template.bind({});
Minimal.args = {
  kind: ButtonKind.minimal,
};

export const Quarternary = Template.bind({});
Quarternary.args = {
  kind: ButtonKind.quarternary,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  startEnhancer: <SearchIcon color={customColors.light4} />,
  withoutLabel: true,
};
