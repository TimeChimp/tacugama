import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FlexItem, FlexItemProps } from '.';

export default {
  title: 'Components/Flex Item',
  component: FlexItem,
} as Meta;

const Template: Story<FlexItemProps> = (args) => (
  <FlexItem {...args}>
    <FlexItem>1</FlexItem>
    <FlexItem>2</FlexItem>
    <FlexItem>3</FlexItem>
    <FlexItem>4</FlexItem>
  </FlexItem>
);

export const Default = Template.bind({});
Default.args = {};
