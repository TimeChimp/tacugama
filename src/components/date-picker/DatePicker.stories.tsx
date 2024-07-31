import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DatePicker, DatePickerProps, Day, WeekMonthDisplay } from '.';
import { TcDate } from '@timechimp/timechimp-typescript-helpers';

export default {
  title: 'Components/DisplayDatePicker',
  component: DatePicker,
} as Meta;

const WEEK_START = 1;

const Template: Story<DatePickerProps> = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [days, setDays] = useState<Day[]>([]);

  const handleDays = (updatedDate: Date, updatedDisplay: WeekMonthDisplay) => {
    const startDate = new TcDate(updatedDate).startOf(updatedDisplay, WEEK_START);
    const endDate = new TcDate(updatedDate).endOf(updatedDisplay, WEEK_START);
    const numberOfDays = endDate.diff(startDate.toDate(), 'd') + 1;

    const days = [...Array(numberOfDays)].map((_, i) => {
      const day = new TcDate(startDate.toDate()).add(i, 'd');
      return {
        id: day.toDate().toISOString(),
        date: day.toDate(),
        shortName: day.format('d'),
        weekDay: day.format('EEEE'),
        month: day.toDate().toLocaleString('default', { month: 'long' }),
        isToday: day.isSame(new TcDate().toDate(), 'd'),
        isHoliday: false,
        isWeekend: day.weekday() === 0 || day.weekday() === 6,
        week: day.week(1),
      };
    });

    setDays(days);
  };

  const handleDateChange = (updatedDate: Date) => {
    handleDays(updatedDate, WeekMonthDisplay.week);
    setDate(updatedDate);
  };

  return (
    <DatePicker
      date={date}
      setDate={handleDateChange}
      display={WeekMonthDisplay.week}
      displayText={WeekMonthDisplay.week}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
