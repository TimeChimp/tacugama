import React from 'react';
import { PRICE_INPUT_PREFIX } from '../../../models';
import { PriceInputProps } from './types';
import { NumberInput } from '../number-input';

export const PriceInput = ({ prefix = PRICE_INPUT_PREFIX, ...rest }: PriceInputProps) => (
  <NumberInput {...rest} prefix={prefix} />
);
