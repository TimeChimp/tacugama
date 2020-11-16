import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TcClock } from './';
import { SVGProps } from './Icon';

export default {
  title: 'Components/Icons',
  component: TcClock,
} as Meta;

const Template: Story<SVGProps> = (args) => <TcClock {...args} />;

export const Clock = Template.bind({});
Clock.args = {
  size: '50',
};
