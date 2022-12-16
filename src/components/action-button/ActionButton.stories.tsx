import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ActionButton } from './';
import { ActionButtonProps } from './ActionButton';
import { Search } from 'baseui/icon';
import { KIND } from 'baseui/button';

export default {
  title: 'Components/Action Button',
  component: ActionButton,
} as Meta;

const Template: Story<ActionButtonProps> = (args) => <ActionButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  startEnhancer: <Search />,
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: KIND.secondary,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: KIND.tertiary,
};

export const Minimal = Template.bind({});
Minimal.args = {
  kind: KIND.minimal,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  startEnhancer: <Search />,
  withoutLabel: true,
};
