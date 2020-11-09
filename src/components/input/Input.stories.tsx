import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from './';
import { LabelSmall } from 'baseui/typography';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <div>
    <Input {...args} />
    <Input
      placeholder="00:00"
      startEnhancer={<LabelSmall overrides={{ Block: { style: { width: '100px' } } }}>start</LabelSmall>}
    />
    <Input
      placeholder="00:00"
      startEnhancer={<LabelSmall overrides={{ Block: { style: { width: '100px' } } }}>endendendend</LabelSmall>}
    />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
};
