import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Textarea, TextareaProps } from './';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Controlled Input',
};
