import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { CharCounter, CharCounterProps } from './CharCounter';

export default {
  title: 'Components/CharCounter',
  component: CharCounter,
} as Meta;

const Template: Story<CharCounterProps> = (args) => <CharCounter {...args} />;

export const Default = Template.bind({});
Default.args = {
  error: false,
  charCount: 66,
  title: 'Max 50 characters',
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  charCount: 66,
  title: 'Max 50 characters',
};
