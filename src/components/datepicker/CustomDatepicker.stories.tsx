import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TcDate } from '@timechimp/timechimp-typescript-helpers';
import { CustomDatepicker } from './CustomDatepicker';
import { CustomDatepickerProps } from './types';

export default {
  title: 'Components/CustomDatepicker',
  component: CustomDatepicker,
} as Meta;

let isOpen = true;

const Template: Story<CustomDatepickerProps> = (args) => {
  const [date, setDate] = React.useState<[Date, Date]>([
    new TcDate().startOf('month').toDate(),
    new TcDate().endOf('month').toDate(),
  ]);

  return <CustomDatepicker {...args} date={date} onChange={(date) => setDate(date as [Date, Date])} />;
};

export const Default = Template.bind({});
Default.args = {
  placement: 'bottomLeft',
  date: [new TcDate().startOf('month').toDate(), new TcDate().endOf('month').toDate()],
  isOpen: true,
  setIsOpen: () => (isOpen = !isOpen),
  quickSelect: true,
};
