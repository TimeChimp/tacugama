import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Separator } from '.';
import { SeparatorProps } from './types';

export default {
  title: 'Components/Separator',
  component: Separator,
} as Meta;

const Template: Story<SeparatorProps> = (args) => <Separator {...args} />;

export const Default = Template.bind({});
Default.args = {};
