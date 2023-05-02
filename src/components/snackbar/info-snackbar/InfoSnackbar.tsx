import React from 'react';
import { Snackbar, SnackbarProps } from '../Snackbar';
import { useTheme } from '../../../providers';
import { CheckIcon } from '../../icons/check';

export type InfoSnackbarProps = SnackbarProps;

export const InfoSnackbar = ({ ...rest }: InfoSnackbarProps) => {
  const {
    theme: {
      current: {
        customColors: { blue1 },
      },
    },
  } = useTheme();
  return <Snackbar {...rest} color={blue1} startIcon={<CheckIcon />} />;
};

export default InfoSnackbar;
