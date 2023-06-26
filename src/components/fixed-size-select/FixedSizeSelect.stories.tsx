import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FixedSizeSelect } from './';
import { FixedSizeSelectProps } from './types';

export default {
  title: 'Components/Fixed Size Select',
  component: FixedSizeSelect,
} as Meta;

const Template: Story<FixedSizeSelectProps> = (args) => <FixedSizeSelect {...args}></FixedSizeSelect>;

export const Default = Template.bind({});
Default.args = {
  options: [],
};
