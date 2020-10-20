import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { RadioGroup, RadioItem, RadioProps } from '.';

export default {
  title: 'Components/Radio',
  component: RadioItem,
} as Meta;

let value = '1';

const Template: Story<RadioProps> = () => (
  <RadioGroup value={value} onChange={(e) => (value = e.target.value)} name="number" align="vertical">
    <RadioItem value="1">One</RadioItem>
    <RadioItem value="2" description="This is a radio description">
      Two
    </RadioItem>
    <RadioItem value="3">Three</RadioItem>
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {};
