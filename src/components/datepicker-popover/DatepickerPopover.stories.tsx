import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DatepickerPopover } from '.';
import { DatepickerPopoverProps } from './types';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';

export default {
  title: 'Components/DatepickerPopover',
  component: DatepickerPopover,
} as Meta;

let isOpen = true;

const Template: Story<DatepickerPopoverProps> = (args) => {
  const [date, setDate] = React.useState<[Date, Date]>([
    new TcDate().startOf('month').toDate(),
    new TcDate().endOf('month').toDate(),
  ]);

  return <DatepickerPopover {...args} date={date} onChange={(date) => setDate(date as [Date, Date])} />;
};

export const Default = Template.bind({});
Default.args = {
  placement: 'bottomLeft',
  date: [new TcDate().startOf('month').toDate(), new TcDate().endOf('month').toDate()],
  isOpen: true,
  setIsOpen: () => (isOpen = !isOpen),
  quickSelect: true,
  range: true,
};
