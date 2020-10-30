import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Datepicker, DatepickerProps } from './';

export default {
  title: 'Date & Time/Datepicker',
  component: Datepicker,
} as Meta;

const Template: Story<DatepickerProps> = (args) => <Datepicker {...args}></Datepicker>;

export const Default = Template.bind({});
Default.args = {
  range: false,
};

export const Range = Template.bind({});
Range.args = {
  range: true,
};
