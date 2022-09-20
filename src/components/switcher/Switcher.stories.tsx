import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Switcher, SwitcherProps } from './';

export default {
  title: 'Components/Switcher',
  component: Switcher,
} as Meta;

const Template: Story<SwitcherProps> = (args) => <Switcher {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 'value',
};
