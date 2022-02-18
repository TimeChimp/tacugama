import React from 'react';
import { NumberFormat } from '@timechimp/timechimp-typescript-helpers';
import { PRICE_INPUT_PLACEHOLDER, PRICE_INPUT_PREFIX } from '../../../models';
import { PriceInputComponent } from './styles';
import { PriceInputProps } from './types';

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

export const PriceInput = ({
  placeholder = PRICE_INPUT_PLACEHOLDER,
  prefix = PRICE_INPUT_PREFIX,
  numberFormat = DEFAULT_NUMBER_FORMAT,
  testId = DEFAULT_TEST_ID,
  allowNegative = true,
  error,
  onChange,
  disabled,
  defaultValue,
  onKeyPress,
  onBlur,
}: PriceInputProps) => {
  const { thousandSeparator, decimalSeparator } = getNumberSeparators(numberFormat);
  return (
    <PriceInputComponent
      $error={error}
      placeholder={placeholder}
      prefix={prefix}
      allowNegative={allowNegative}
      onValueChange={({ value }) => onChange(value)}
      disabled={disabled}
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
