import React from 'react';
import { Snackbar, SnackbarProps } from '../Snackbar';
import { useTheme } from '../../../providers';
import { WarningIcon } from '../../icons';
import { Block } from '../../block';

export type WarningSnackbarProps = SnackbarProps;

export const WarningSnackbar = ({ ...rest }: WarningSnackbarProps) => {
  const {
    theme: {
      current: {
        colors: { primaryB },
        customColors: { yellow5 },
        sizing: { scale600 },
        customSizing: { scale050 },
      },
    },
  } = useTheme();
  return (
    <Snackbar
      {...rest}
      color={yellow5}
      startIcon={
        <Block marginTop={scale050}>
          <WarningIcon color={primaryB} size={scale600} />
        </Block>
      }
    />
  );
};

export default WarningSnackbarProps;
