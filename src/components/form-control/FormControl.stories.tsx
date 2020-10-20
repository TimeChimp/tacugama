import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormControl, FormControlProps } from '.';
import { Input } from 'components';

export default {
  title: 'Components/Form Control',
  component: FormControl,
} as Meta;

const Template: Story<FormControlProps> = (args) => (
  <FormControl {...args}>
    <Input />
  </FormControl>
);

export const Default = Template.bind({});
Default.args = {
  label: () => 'label',
  caption: () => 'caption',
};
