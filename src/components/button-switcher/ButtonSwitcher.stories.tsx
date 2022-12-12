import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ButtonSwitcher } from './';
import { ButtonSwitcherProps } from './ButtonSwitcher';

export default {
  title: 'Components/Button Switcher',
  component: ButtonSwitcher,
} as Meta;

const Template: Story<ButtonSwitcherProps> = (args) => <ButtonSwitcher {...args} />;

export const Default = Template.bind({});
Default.args = {};
