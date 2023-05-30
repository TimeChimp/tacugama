import React from 'react';
import { Snackbar, SnackbarProps } from '../Snackbar';
import { useTheme } from '../../../providers';
import { ClearIcon } from '../../icons';

export type ErrorSnackbarProps = SnackbarProps;

export const ErrorSnackbar = ({ ...rest }: ErrorSnackbarProps) => {
  const {
    theme: {
      current: {
        colors: { primaryB },
        customColors: { red0 },
        sizing: { scale650 },
      },
    },
  } = useTheme();
  return <Snackbar {...rest} color={red0} startIcon={<ClearIcon color={primaryB} size={scale650} />} />;
};

export default ErrorSnackbarProps;
