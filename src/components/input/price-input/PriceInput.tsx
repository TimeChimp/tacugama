import React from 'react';
import { PRICE_INPUT_PLACEHOLDER, PRICE_INPUT_PREFIX } from '../../../models';
import { PriceInputComponent } from './styles';
import { PriceInputProps } from './types';

export const PriceInput = ({
  placeholder = PRICE_INPUT_PLACEHOLDER,
  prefix = PRICE_INPUT_PREFIX,
  thousandSeparator = true,
  allowNegative = true,
  error,
  onChange,
}: PriceInputProps) => (
  <PriceInputComponent
    $error={error}
    placeholder={placeholder}
    prefix={prefix}
    thousandSeparator={thousandSeparator}
    allowNegative={allowNegative}
    onValueChange={({ value }) => onChange(value)}
  />
);
