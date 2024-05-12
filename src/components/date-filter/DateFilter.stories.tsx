import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DateFilter } from '.';
import { DateFilterProps } from './types';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';

export default {
  title: 'Components/DateFilter',
  component: DateFilter,
} as Meta;

let isOpen = true;

const Template: Story<DateFilterProps> = (args) => {
  const [date, setDate] = React.useState<[Date, Date]>([
    new TcDate().startOf('month').toDate(),
    new TcDate().endOf('month').toDate(),
  ]);

  return <DateFilter {...args} dates={date} onChange={(date) => setDate(date as [Date, Date])} />;
};

export const Default = Template.bind({});
Default.args = {
  placement: 'bottomLeft',
  date: [new TcDate().startOf('month').toDate(), new TcDate().endOf('month').toDate()],
  isOpen: true,
  setIsOpen: () => (isOpen = !isOpen),
  quickSelect: true,
};
