import { NumberFormat } from '@timechimp/timechimp-typescript-helpers';
import React from 'react';
import { PRICE_INPUT_PLACEHOLDER, PRICE_INPUT_PREFIX } from '../../../models';
import { PriceInputComponent } from './styles';
import { PriceInputProps } from './types';

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
  allowNegative = true,
  error,
  onChange,
  disabled,
  defaultValue,
  onKeyPress,
  onBlur,
  numberFormat = '1,234.56',
  testId = 'price-input',
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
