import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { StatefulPopover, StatefulPopoverProps } from './';
import { Block } from '../block';
import { Button } from '../button';
import { Input } from '../input/Input';

export default {
  title: 'Components/Popover',
  component: StatefulPopover,
} as Meta;

const Template: Story<StatefulPopoverProps> = (args) => (
  <StatefulPopover {...args}>
    <Button>Click me</Button>
  </StatefulPopover>
);

export const Default = Template.bind({});
Default.args = {
  content: () => (
    <Block padding={'20px'}>
      Hello, there!
      <Input placeholder="Focusable Element" />
    </Block>
  ),
  returnFocus: true,
  autoFocus: true,
};
