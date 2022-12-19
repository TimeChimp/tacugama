import React, { useState } from 'react';
import { InputProps } from 'baseui/input';
import { Datepicker } from './Datepicker';
import { DatePickerProps } from './types';

export const DatePickerTemplate = ({ ...rest }: DatePickerProps & InputProps) => {
  const [value, setValue] = useState([new Date()]);
  return (
    <Datepicker
      {...rest}
      customValue={value}
      setCustomValue={setValue}
      // @ts-expect-error
      onChange={({ date }) => setValue(Array.isArray(date) ? date : [date])}
    />
  );
};
