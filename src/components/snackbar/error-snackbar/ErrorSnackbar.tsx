import React from 'react';
import { Snackbar, SnackbarProps } from '../Snackbar';
import { useTheme } from '../../../providers';
import { Warning } from '../../icons';

export interface ErrorSnackbarProps extends SnackbarProps {}

export const ErrorSnackbar = ({ ...rest }: ErrorSnackbarProps) => {
  const {
    theme: {
      current: {
        colors: { backgroundNegative },
        sizing: { scale700 },
      },
    },
  } = useTheme();
  return <Snackbar {...rest} color={backgroundNegative} startIcon={<Warning size={scale700} />} />;
};

export default ErrorSnackbarProps;
