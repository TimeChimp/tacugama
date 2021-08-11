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
        sizing: { scale700 },
      },
    },
  } = useTheme();
  return <Snackbar {...rest} color={backgroundPositive} startIcon={<Check size={scale700} />} />;
};

export default SuccessSnackbarProps;
