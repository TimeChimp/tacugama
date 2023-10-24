import React from 'react';
import NumberFormatComponent from 'react-number-format';
import { NumberFormat } from '@timechimp/timechimp-typescript-helpers';
import { NumberInputProps } from './types';
import { Input } from '../Input';
import { Align } from '../types';

const DEFAULT_NUMBER_FORMAT = NumberFormat.Dot;
const DEFAULT_TEST_ID = 'price-input';
const DEFAULT_DECIMAL_SCALE = 2;

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

const getDefaultPlaceholder = (decimalSeparator: string) => `0${decimalSeparator}00`;

export const NumberInput = ({
  placeholder: customPlaceholder,
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
  showSkeleton = false,
  decimalScale = DEFAULT_DECIMAL_SCALE,
  fixedDecimalScale = true,
  align = Align.left,
  width = '100%',
  suffix,
}: NumberInputProps) => {
  const { thousandSeparator, decimalSeparator } = getNumberSeparators(numberFormat);
  const placeholder = customPlaceholder || getDefaultPlaceholder(decimalSeparator);
  return (
    <NumberFormatComponent
      placeholder={placeholder}
      startEnhancer={prefix}
      endEnhancer={suffix}
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
      align={align}
      error={error}
      showSkeleton={showSkeleton}
      decimalScale={decimalScale}
      fixedDecimalScale={fixedDecimalScale}
      width={width}
    />
  );
};
