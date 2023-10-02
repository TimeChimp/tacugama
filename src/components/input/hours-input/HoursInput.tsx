import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { TcDate, TimeParser, timePlaceholder } from '@timechimp/timechimp-typescript-helpers';
import { HoursInputProps } from './types';
import { Input } from '../Input';
import { SECONDS_IN_HOUR } from 'models';

const DEFAULT_TIME_FORMAT = 'HH:mm';

export const HoursInput = ({ onSubmit, timeFormat = DEFAULT_TIME_FORMAT, defaultValue, ...rest }: HoursInputProps) => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setInputValue(value);
  };

  const formatInputValue = useCallback(
    (value: string) => {
      const { seconds } = new TimeParser(value).parse();
      if (seconds) {
        const formattedValue = new TcDate(new Date(0, 0, 0)).add(seconds as number, 'seconds').format(timeFormat);
        setInputValue(formattedValue);
      }

      return seconds;
    },
    [timeFormat],
  );

  useEffect(() => {
    if (defaultValue) {
      formatInputValue(defaultValue.toString());
    }
  }, [formatInputValue, defaultValue]);

  const onBlur = () => {
    const seconds = formatInputValue(inputValue);
    if (seconds) {
      return onSubmit(seconds / SECONDS_IN_HOUR);
    }
    setInputValue('');
    return onSubmit(undefined);
  };

  return (
    <Input
      value={inputValue}
      onChange={onChange}
      onBlur={onBlur}
      autoComplete="off"
      placeholder={timePlaceholder(timeFormat)}
      {...rest}
    />
  );
};
