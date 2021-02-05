import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Datepicker, DatepickerProps } from '.';

export default {
  title: 'Components/Datepicker',
  component: Datepicker,
} as Meta;

let isOpen = true;

const Template: Story<DatepickerProps> = (args) => <Datepicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  placement: 'bottomLeft',
  date: new Date(),
  isOpen: true,
  setIsOpen: () => (isOpen = !isOpen),
};
