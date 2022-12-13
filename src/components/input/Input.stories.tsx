import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputProps } from './types';
import { Input } from './Input';
import { SearchInput, SearchInputProps } from './search-input';
import { ColorInput, ColorInputProps } from './color-input';
import { SearchIcon } from '../icons';
import { CharCounter } from '../char-counter';
import { PriceInput, PriceInputProps } from './price-input';
import { HoursInput, HoursInputProps } from './hours-input';
import { NumberInput, NumberInputProps } from './number-input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

const SearchTemplate: Story<SearchInputProps> = (args) => <SearchInput {...args} />;

const ColorTemplate: Story<ColorInputProps> = (args) => <ColorInput {...args} />;

const NumberTemplate: Story<NumberInputProps> = (args) => <NumberInput {...args} />;

const PriceTemplate: Story<PriceInputProps> = (args) => <PriceInput {...args} />;

const HoursTemplate: Story<HoursInputProps> = (args) => <HoursInput {...args} />;

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
Color.args = {
  onChange: (color) => console.log(color),
};

export const EmptyColor = ColorTemplate.bind({});
EmptyColor.args = {
  generateRandomColor: false,
};

export const Number = NumberTemplate.bind({});
Number.args = {};

export const Price = PriceTemplate.bind({});
Price.args = {};

export const Hours = HoursTemplate.bind({});
Hours.args = {
  defaultValue: undefined,
};
