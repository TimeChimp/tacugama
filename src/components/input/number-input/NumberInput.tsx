import React from 'react';
import NumberFormatComponent from 'react-number-format';
import { NumberFormat } from '@timechimp/timechimp-typescript-helpers';
import { NumberInputProps } from './types';
import { Input } from '../Input';

const DEFAULT_NUMBER_FORMAT = NumberFormat.Dot;
const DEFAULT_TEST_ID = 'price-input';

const getNumberSeparators = (numberFormat: NumberFormat) => {
  switch (numberFormat) {
    case NumberFormat.Comma:
      return { thousandSeparator: ',', decimalSeparator: '.' };
    case NumberFormat.Space:
      return { thousandSeparator: ' ', decimalSeparator: ',' };
    case NumberFormat.Apostrophe:
      return { thousandSeparator: "'", decimalSeparator: '.' };
    case NumberFormat.Dot:
    default:
      return { thousandSeparator: '.', decimalSeparator: ',' };
  }
};

export const NumberInput = ({
  placeholder,
  prefix,
  numberFormat = DEFAULT_NUMBER_FORMAT,
  testId = DEFAULT_TEST_ID,
  allowNegative = true,
  error,
  onChange,
  disabled,
  defaultValue,
  onKeyPress,
  onBlur,
  value,
  onFocus,
}: NumberInputProps) => {
  const { thousandSeparator, decimalSeparator } = getNumberSeparators(numberFormat);
  return (
    <NumberFormatComponent
      placeholder={placeholder}
      prefix={prefix}
      allowNegative={allowNegative}
      onValueChange={({ value }) => onChange(value)}
      isNumericString
      disabled={disabled}
      value={value}
      defaultValue={defaultValue}
      onKeyPress={onKeyPress}
      onBlur={onBlur}
      autoComplete="off"
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      data-test-id={testId}
      onFocus={onFocus}
      customInput={Input}
      error={error}
    />
  );
};
