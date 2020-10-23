import React from 'react';
import { Snackbar, SnackbarProps } from 'components';
import { useTheme } from '../../providers';
import { Check } from 'components/icons';

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
