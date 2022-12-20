import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DatepickerPopover } from '.';
import { DatepickerPopoverProps } from './types';

export default {
  title: 'Components/DatepickerPopover',
  component: DatepickerPopover,
} as Meta;

let isOpen = true;

const Template: Story<DatepickerPopoverProps> = (args) => <DatepickerPopover {...args} />;

export const Default = Template.bind({});
Default.args = {
  placement: 'bottomLeft',
  date: new Date(),
  isOpen: true,
  setIsOpen: () => (isOpen = !isOpen),
};
