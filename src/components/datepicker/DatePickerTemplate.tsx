import React, { useState } from 'react';
import { Datepicker } from './Datepicker';
import { DatePickerProps } from './types';

export const DatePickerTemplate = ({ ...rest }: DatePickerProps) => {
  const [value, setValue] = useState([new Date()]);
  return (
    <Datepicker {...rest} customValue={value} onChange={({ date }) => setValue(Array.isArray(date) ? date : [date])} />
  );
};
