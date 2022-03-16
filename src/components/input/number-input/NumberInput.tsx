import React from 'react';
import { NumberFormat } from '@timechimp/timechimp-typescript-helpers';
import { NumberInputComponent } from './styles';
import { NumberInputProps } from './types';

const DEFAULT_NUMBER_FORMAT = '1,234.56';
const DEFAULT_TEST_ID = 'price-input';

const getNumberSeparators = (numberFormat: NumberFormat) => {
  switch (numberFormat) {
    case '1.234,56':
      return { thousandSeparator: '.', decimalSeparator: ',' };
    case '1 234,56':
      return { thousandSeparator: ' ', decimalSeparator: ',' };
    case '1,234.56':
    default:
      return { thousandSeparator: ',', decimalSeparator: '.' };
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
}: NumberInputProps) => {
  const { thousandSeparator, decimalSeparator } = getNumberSeparators(numberFormat);
  return (
    <NumberInputComponent
      $error={error}
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
    />
  );
};
