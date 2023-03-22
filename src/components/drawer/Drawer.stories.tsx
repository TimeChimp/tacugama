import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Block } from 'baseui/block';
import { Drawer, DrawerProps, SIZE } from './';

export default {
  title: 'Components/Drawer',
  component: Drawer,
} as Meta;

const Template: Story<DrawerProps> = (args) => (
  <Drawer {...args}>
    <Block>
      <h1>Drawer Element</h1>
    </Block>
  </Drawer>
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  size: SIZE.default,
};

export const Full = Template.bind({});
Full.args = {
  isOpen: true,
  size: SIZE.full,
};

export const Auto = Template.bind({});
Auto.args = {
  isOpen: true,
  size: SIZE.auto,
};
