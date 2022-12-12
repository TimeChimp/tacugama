import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { FormControl, FormControlProps } from './';
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
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=1511%3A17065&t=O4AS7sHF1cnZypM6-4',
  },
};

export const WithCaption = Template.bind({});
WithCaption.args = {
  label: () => 'label',
  caption: () => 'caption',
};
