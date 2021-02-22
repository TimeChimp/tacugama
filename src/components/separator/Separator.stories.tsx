import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Separator } from '.';

export default {
  title: 'Components/Separator',
  component: Separator,
} as Meta;

const Template: Story = () => <Separator />;

export const Default = Template.bind({});
Default.args = {};
