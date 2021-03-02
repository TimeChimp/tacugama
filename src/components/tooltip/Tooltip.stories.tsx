import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { StatefulTooltip, TooltipProps } from '.';
import { Block } from 'baseui/block';
import { Input } from 'baseui/input';

export default {
  title: 'Components/Tooltip',
  component: StatefulTooltip,
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <StatefulTooltip
    content={() => (
      // eslint-disable-next-line jsx-a11y/accessible-emoji
      <Block padding={'20px'}>
        Hello, there! 👋
        <Input placeholder="Focusable Element" />
      </Block>
    )}
    returnFocus
    autoFocus
  >
    Hover me
  </StatefulTooltip>
);

export const Default = Template.bind({});
Default.args = {};
