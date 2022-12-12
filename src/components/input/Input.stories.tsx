import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { InputProps } from './types';
import { Input } from './Input';
import { ColorInput, ColorInputProps } from './color-input';
import { Search as SearchIcon } from '../icons';
import { PriceInput, PriceInputProps } from './price-input';
import { HoursInput, HoursInputProps } from './hours-input';
import { NumberInput, NumberInputProps } from './number-input';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
  <>
    <Input {...args} />
  </>
);

const ColorTemplate: Story<ColorInputProps> = (args) => <ColorInput {...args} />;

const NumberTemplate: Story<NumberInputProps> = (args) => <NumberInput {...args} />;

const PriceTemplate: Story<PriceInputProps> = (args) => <PriceInput {...args} />;

const HoursTemplate: Story<HoursInputProps> = (args) => <HoursInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'placeholder',
  testId: 'test-input',
  error: false,
  success: false,
  disabled: false,
  value: '',
  startEnhancer: '',
  endEnhancer: '',
};
Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A25687&t=CngHCgPvvPNqKbFU-4',
  },
};

export const StartEnhancer = Template.bind({});
StartEnhancer.args = {
  placeholder: 'placeholder',
  startEnhancer: <SearchIcon size="18px" />,
  error: false,
  success: false,
  disabled: false,
  value: '',
  endEnhancer: '',
};
StartEnhancer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A27286&t=N57j8nqiSc9cqSnt-4',
  },
};

export const EndEnhancer = Template.bind({});
EndEnhancer.args = {
  placeholder: 'placeholder',
  endEnhancer: <SearchIcon size="18px" />,
  error: false,
  success: false,
  disabled: false,
  value: '',
  startEnhancer: '',
};
EndEnhancer.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A27384&t=N57j8nqiSc9cqSnt-4',
  },
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
};
Password.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A28390&t=N57j8nqiSc9cqSnt-4',
  },
};

export const Color = ColorTemplate.bind({});
Color.args = {
  onChange: (color) => console.log(color),
  placeholder: 'placeholder',
  testId: 'test-input',
  error: false,
  success: false,
  disabled: false,
  value: '',
  startEnhancer: '',
  endEnhancer: '',
};
Color.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A28377&t=N57j8nqiSc9cqSnt-4',
  },
};

export const Number = NumberTemplate.bind({});
Number.args = {
  placeholder: 'placeholder',
  testId: 'test-input',
  error: false,
  disabled: false,
  value: '',
};
Number.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A28351&t=N57j8nqiSc9cqSnt-4',
  },
};

export const Price = PriceTemplate.bind({});
Price.args = {
  placeholder: 'placeholder',
  testId: 'test-input',
  error: false,
  disabled: false,
  value: '',
};
Price.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A28216&t=N57j8nqiSc9cqSnt-4',
  },
};

export const Hours = HoursTemplate.bind({});
Hours.args = {
  defaultValue: undefined,
  error: false,
  disabled: false,
};
Hours.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/QrIqXt997mm9ePey5JCLAJ/DS-1.0?node-id=2434%3A28364&t=N57j8nqiSc9cqSnt-4',
  },
};
