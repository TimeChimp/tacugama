import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Tabs, Tab, TabsProps } from '.';

export default {
  title: 'Surfaces/Tabs',
  component: Tabs,
} as Meta;

const Template: Story<TabsProps> = (args) => {
  let key: React.ReactText = '0';

  return (
    <Tabs
      activeKey={key}
      onChange={({ activeKey }) => {
        key = activeKey;
      }}
    >
      <Tab title="First">Content 1</Tab>
      <Tab title="Second">Content 2</Tab>
      <Tab title="Third">Content 3</Tab>
    </Tabs>
  );
};

export const Default = Template.bind({});
Default.args = {};
