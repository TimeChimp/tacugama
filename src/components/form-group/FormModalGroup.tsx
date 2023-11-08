import React from 'react';
import { FormModalGroupProps } from './types';
import { FormGroupStack } from './styles';

export const FormModalGroup = ({ children }: FormModalGroupProps) => {
  return <FormGroupStack>{children}</FormGroupStack>;
};
