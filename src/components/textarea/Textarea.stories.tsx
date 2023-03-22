import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Textarea } from './';
import { TextareaProps } from './types';

export default {
  title: 'Components/Textarea',
  component: Textarea,
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
  testId: 'test-textarea',
  error: false,
  success: false,
  disabled: false,
  value: '',
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=3761%3A27384&t=c28Ps0sNpq5pvFV4-4',
  },
};
