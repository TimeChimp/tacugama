import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { durationPlaceholder, formatDuration, TimeParser } from '@timechimp/timechimp-typescript-helpers';
import { HoursInputProps } from './types';
import { Input } from '..';

const DEFAULT_DURATION_FORMAT = 'HH:mm';
const SECONDS_IN_HOUR = 60 * 60;

export const HoursInput = ({
  disabled,
  endEnhancer,
  onSubmit,
  durationFormat = DEFAULT_DURATION_FORMAT,
  defaultValue,
}: HoursInputProps) => {
  const [inputIsValid, setInputIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    const { isValid } = new TimeParser(value).parse();

    setInputIsValid(isValid);
    setInputValue(value);
  };

  const formatInputValue = useCallback(
    (value: string) => {
      const { seconds } = new TimeParser(value).parse();

      if (seconds) {
        const formattedValue = formatDuration(seconds, durationFormat);
        setInputValue(formattedValue);
      }

      return seconds;
    },
    [durationFormat],
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
      disabled={disabled}
      value={inputValue}
      onChange={onChange}
      onBlur={onBlur}
      error={!inputIsValid}
      endEnhancer={endEnhancer}
      autoComplete="off"
      placeholder={durationPlaceholder(durationFormat)}
    />
  );
};
