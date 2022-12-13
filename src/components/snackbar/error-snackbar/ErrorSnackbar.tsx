import React from 'react';
import { Snackbar, SnackbarProps } from '../Snackbar';
import { useTheme } from '../../../providers';
import { WarningIcon } from '../../icons';

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
  return <Snackbar {...rest} color={backgroundNegative} startIcon={<WarningIcon size={scale700} />} />;
};

export default ErrorSnackbarProps;
