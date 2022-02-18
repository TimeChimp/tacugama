import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from './Input';
import { SearchInput, SearchInputProps } from './SearchInput';
import { ColorInput, ColorInputProps } from './ColorInput';
import { Search as SearchIcon } from '../icons';
import { CharCounter } from '../char-counter';
import { PriceInputProps } from './price-input/types';
import { PriceInput } from './price-input';
import { HoursInputProps } from './hours-input/types';
import { HoursInput } from './hours-input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

const SearchTemplate: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

const ColorTemplate: Story<ColorInputProps> = (args) => <ColorInput {...args} />;

const PriceTemplate: Story<PriceInputProps> = (args) => <PriceInput {...args} />;

const Hoursemplate: Story<HoursInputProps> = (args) => <HoursInput {...args} />;

const WithCharCount: Story<InputProps> = (args) => (
  <>
    <Input {...args} />
    <CharCounter error charCount={66} title="Max 50 characters" />
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
  startEnhancer: <SearchIcon size="18px" />,
};

export const EndEnhancer = Template.bind({});
EndEnhancer.args = {
  placeholder: 'placeholder',
  endEnhancer: <SearchIcon size="18px" />,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  placeholder: 'Error!',
  error: true,
  startEnhancer: <SearchIcon size="18px" />,
};

export const CharCount = WithCharCount.bind({});
CharCount.args = {
  placeholder: 'Error!',
  error: true,
};

export const Search = SearchTemplate.bind({});
Search.args = {
  placeholder: 'Lets go search',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};

export const Color = ColorTemplate.bind({});
Color.args = {};

export const EmptyColor = ColorTemplate.bind({});
EmptyColor.args = {
  generateRandomColor: false,
};

export const Price = PriceTemplate.bind({});
Color.args = {};

export const Hours = Hoursemplate.bind({});
Color.args = {};
