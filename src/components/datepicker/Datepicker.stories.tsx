import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DatePickerTemplate } from '.';
import { InputProps } from '../input/types';
import { DatepickerProps } from './types';

export default {
  title: 'Components/Datepicker',
  component: DatePickerTemplate,
} as Meta;

const Template: Story<DatepickerProps & InputProps> = (args) => <DatePickerTemplate {...args} />;

export const Default = Template.bind({});
Default.args = {
  placement: 'bottomLeft',
};
