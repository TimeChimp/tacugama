import React from 'react';
import { Snackbar, SnackbarProps } from 'components';
import { useTheme } from '../../providers';
import { Warning } from 'components/icons';

export interface ErrorSnackbarProps extends SnackbarProps {}

export const ErrorSnackbar = ({ ...rest }: ErrorSnackbarProps) => {
  const {
    theme: {
      current: {
        colors: { backgroundNegative },
      },
    },
  } = useTheme();
  return <Snackbar {...rest} color={backgroundNegative} startIcon={<Warning size="20" />} />;
};

export default ErrorSnackbarProps;
