import React from 'react';
import { PRICE_INPUT_PLACEHOLDER, PRICE_INPUT_PREFIX } from '../../../models';
import { PriceInputProps } from './types';
import { NumberInput } from '../number-input';

export const PriceInput = ({
  placeholder = PRICE_INPUT_PLACEHOLDER,
  prefix = PRICE_INPUT_PREFIX,
  ...rest
}: PriceInputProps) => <NumberInput {...rest} placeholder={placeholder} prefix={prefix} />;
