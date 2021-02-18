import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Seperator } from '.';

export default {
  title: 'Components/Separator',
  component: Seperator,
} as Meta;

const Template: Story = () => <Seperator />;

export const Default = Template.bind({});
Default.args = {};
