import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from './Input';
import { Search } from '../icons';
import { CharCounter } from '../char-counter';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

const WithCharCount: Story<InputProps> = (args) => (
  <>
    <Input {...args} />
    <CharCounter visible charCount={66} title="Max 50 characters" />
  </>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
  testId: 'test-input',
};

export const StartEnhancer = Template.bind({});
StartEnhancer.args = {
  placeholder: 'placeholder',
  startEnhancer: <Search size="18px" />,
};

export const EndEnhancer = Template.bind({});
EndEnhancer.args = {
  placeholder: 'placeholder',
  endEnhancer: <Search size="18px" />,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  placeholder: 'Error!',
  error: true,
  startEnhancer: <Search size="18px" />,
};

export const CharCount = WithCharCount.bind({});
CharCount.args = {
  placeholder: 'Error!',
  error: true,
};
