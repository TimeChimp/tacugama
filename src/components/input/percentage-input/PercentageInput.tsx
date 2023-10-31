import React from 'react';
import { NumberInput } from '../number-input';
import { PercentageInputProps } from './types';

const PERCENTAGE_SUFFIX = '%';

export const PercentageInput = ({ ...rest }: PercentageInputProps) => (
  <NumberInput {...rest} suffix={PERCENTAGE_SUFFIX} />
);
