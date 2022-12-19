import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DatePickerTemplate } from '.';
import { InputProps } from 'components/input/types';
import { DatePickerProps } from './types';

export default {
  title: 'Components/Datepicker',
  component: DatePickerTemplate,
} as Meta;

const Template: Story<DatePickerProps & InputProps> = (args) => <DatePickerTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  placement: 'bottomLeft',
};
