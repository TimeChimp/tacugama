import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { TcDate, TimeParser, timePlaceholder } from '@timechimp/timechimp-typescript-helpers';
import { HoursInputProps } from './types';
import { Input } from '../Input';

const DEFAULT_TIME_FORMAT = 'HH:mm';
const SECONDS_IN_HOUR = 60 * 60;

export const HoursInput = ({ onSubmit, timeFormat = DEFAULT_TIME_FORMAT, defaultValue, ...rest }: HoursInputProps) => {
  const [inputIsValid, setInputIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    const { isValid } = new TimeParser(value).parse();
    setInputIsValid(isValid);
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
    return onSubmit(undefined);
  };

  return (
    <Input
      value={inputValue}
      onChange={onChange}
      onBlur={onBlur}
      error={!inputIsValid}
      autoComplete="off"
      placeholder={timePlaceholder(timeFormat)}
      {...rest}
    />
  );
};
