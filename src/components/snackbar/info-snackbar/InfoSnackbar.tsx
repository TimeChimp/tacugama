import React from 'react';
import { Snackbar, SnackbarProps } from '../Snackbar';
import { useTheme } from '../../../providers';
import { Check } from '../../icons';

export interface InfoSnackbarProps extends SnackbarProps {}

export const InfoSnackbar = ({ ...rest }: InfoSnackbarProps) => {
  const {
    theme: {
      current: {
        customColors: { blue1 },
        sizing: { scale700 },
      },
    },
  } = useTheme();
  return <Snackbar {...rest} color={blue1} startIcon={<Check size={scale700} />} />;
};

export default InfoSnackbar;
