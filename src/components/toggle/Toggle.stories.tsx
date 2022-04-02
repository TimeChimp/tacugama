import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Toggle, ToggleProps } from './';
import { ToggleSize } from 'components';

export default {
  title: 'Components/Toggle',
  component: Toggle,
} as Meta;

const Template: Story<ToggleProps> = (args) => <Toggle {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: true,
  size: ToggleSize.small,
};
