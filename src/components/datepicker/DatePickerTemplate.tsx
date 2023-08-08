import React, { useState } from 'react';
import { Datepicker } from './Datepicker';
import { DatepickerProps } from './types';

export const DatePickerTemplate = ({ ...rest }: DatepickerProps) => {
  const [value, setValue] = useState([new Date()]);
  return (
    <Datepicker {...rest} customValue={value} onChange={({ date }) => setValue(Array.isArray(date) ? date : [date])} />
  );
};
