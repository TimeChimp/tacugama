import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { ProgressBar, ProgressBarProps } from '.';

export default {
  title: 'Components/Progress bar',
  component: ProgressBar,
} as Meta;

let value = 87;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  value,
};
