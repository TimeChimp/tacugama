import React, { ChangeEvent, useEffect, useState } from 'react';
import { durationPlaceholder, formatDuration, TimeParser } from '@timechimp/timechimp-typescript-helpers';
import { HoursInputProps } from './types';
import { border, borderRadius, getInputBorderColor, padding } from '../../../utils';
import { Input } from '..';
import { useTheme } from '../../../providers';

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
  const {
    theme: {
      current: {
        sizing: { scale0, scale300, scale500, scale1600 },
        borders,
        colors,
      },
    },
  } = useTheme();
  const { border300 } = borders;
  const { primaryB } = colors;

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
      size="compact"
      error={!inputIsValid}
      endEnhancer={endEnhancer}
      autoComplete="off"
      placeholder={durationPlaceholder(durationFormat)}
      overrides={{
        EndEnhancer: {
          style: {
            ...padding('0'),
          },
        },
        Input: {
          style: {
            paddingRight: '0',
            paddingLeft: scale300,
            backgroundColor: primaryB,
            fontSize: scale500,
            ...border(),
          },
        },
        InputContainer: {
          style: {
            ...border(),
          },
        },
        Root: {
          style: ({ $error, $isFocused }) => ({
            width: scale1600,
            paddingRight: '0',
            ...border({
              ...border300,
              borderColor: getInputBorderColor($error, $isFocused, colors, borders),
            }),
            ...borderRadius(scale0),
          }),
        },
      }}
    />
  );
};
