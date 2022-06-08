import React, { ChangeEvent, useEffect, useState } from 'react';
import { durationPlaceholder, formatDuration, TimeParser } from '@timechimp/timechimp-typescript-helpers';
import { HoursInputProps } from './types';
import { Input } from '..';

const DEFAULT_DURATION_FORMAT = 'HH:mm';

export const HoursInput = ({
  disabled,
  endEnhancer,
  onSubmit,
  durationFormat = DEFAULT_DURATION_FORMAT,
  defaultValue,
}: HoursInputProps) => {
  const [inputIsValid, setInputIsValid] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (defaultValue) {
      setInputValue(defaultValue);
    }
  }, [defaultValue]);

  const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    const { isValid } = new TimeParser(value).parse();

    setInputIsValid(isValid);
    setInputValue(value);
  };

  const onBlur = () => {
    const { seconds } = new TimeParser(inputValue).parse();

    if (seconds) {
      const formattedValue = formatDuration(seconds, durationFormat);
      setInputValue(formattedValue);
    }

    onSubmit(seconds);
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
