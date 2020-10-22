import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tabs, Tab, TabsProps } from '.';

export default {
  title: 'Components/Tabs',
  component: Tabs,
} as Meta;

let key: React.ReactText = '0';

const Template: Story<TabsProps> = (args) => (
  <Tabs {...args}>
    <Tab title="First">Content 1</Tab>
    <Tab title="Second">Content 2</Tab>
    <Tab title="Third">Content 3</Tab>
  </Tabs>
);

export const Default = Template.bind({});
Default.args = {
  activeKey: key,
  onChange: ({ activeKey }) => {
    key = activeKey;
  },
};
