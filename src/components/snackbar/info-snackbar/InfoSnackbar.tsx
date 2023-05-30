import React from 'react';
import { Snackbar, SnackbarProps } from '../Snackbar';
import { useTheme } from '../../../providers';
import { InfoIcon } from '../../icons';

export type InfoSnackbarProps = SnackbarProps;

export const InfoSnackbar = ({ ...rest }: InfoSnackbarProps) => {
  const {
    theme: {
      current: {
        colors: { primaryB, primary },
        sizing: { scale650 },
      },
    },
  } = useTheme();
  return <Snackbar {...rest} color={primary} startIcon={<InfoIcon color={primaryB} size={scale650} />} />;
};

export default InfoSnackbar;
