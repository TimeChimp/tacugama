import React from 'react';
import { Snackbar, SnackbarProps } from './Snackbar';
import { useTheme } from '../../providers';
import { Check } from '../icons';

export interface SuccessSnackbarProps extends SnackbarProps {}

export const SuccessSnackbar = ({ ...rest }: SuccessSnackbarProps) => {
  const {
    theme: {
      current: {
        colors: { backgroundPositive },
      },
    },
  } = useTheme();
  return <Snackbar {...rest} color={backgroundPositive} startIcon={<Check size="20" />} />;
};

export default SuccessSnackbarProps;
