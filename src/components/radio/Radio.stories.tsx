import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { RadioGroup, RadioItem, RadioProps } from './';
import { ParagraphXSmall } from '../typography';

export default {
  title: 'Components/Radio',
  component: RadioItem,
} as Meta;

let value = '1';

const Template: Story<RadioProps> = ({ ...props }) => (
  <RadioGroup value={value} onChange={(e) => (value = e.target.value)} name="number" align="vertical">
    <RadioItem {...props} value="1">
      One
    </RadioItem>
    <RadioItem {...props} value="2">
      Two
      <ParagraphXSmall>Much information. Very detailed</ParagraphXSmall>
    </RadioItem>
    <RadioItem {...props} value="3">
      Three
    </RadioItem>
  </RadioGroup>
);

export const Default = Template.bind({});
Default.args = {};

export const Colored = Template.bind({});
Colored.args = {
  colored: true,
};
