import React from 'react';
import { Snackbar, SnackbarProps } from '../Snackbar';
import { useTheme } from '../../../providers';
import { CheckIcon } from '../../icons/check';

export type SuccessSnackbarProps = SnackbarProps;

export const SuccessSnackbar = ({ ...rest }: SuccessSnackbarProps) => {
  const {
    theme: {
      current: {
        colors: { backgroundPositive },
      },
    },
  } = useTheme();
  return <Snackbar {...rest} color={backgroundPositive} startIcon={<CheckIcon />} />;
};

export default SuccessSnackbarProps;
