import React from 'react';
import { Snackbar, SnackbarProps } from '../Snackbar';
import { useTheme } from '../../../providers';
import { CheckIcon } from '../../icons';

export type SuccessSnackbarProps = SnackbarProps;

export const SuccessSnackbar = ({ ...rest }: SuccessSnackbarProps) => {
  const {
    theme: {
      current: {
        colors: { primaryB },
        sizing: { scale650 },
        customColors: { green1 },
      },
    },
  } = useTheme();
  return <Snackbar {...rest} color={green1} startIcon={<CheckIcon color={primaryB} size={scale650} />} />;
};

export default SuccessSnackbarProps;
