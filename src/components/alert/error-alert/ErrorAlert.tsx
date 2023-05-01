import React from 'react';
import { Alert, AlertProps } from '../Alert';
import { useTheme } from '../../../providers';
import { WarningIcon } from '../../icons/warning';

export type ErrorAlertProps = AlertProps;

export const ErrorAlert = ({ ...rest }: ErrorAlertProps) => {
  const {
    theme: {
      current: {
        colors: { backgroundNegative },
      },
    },
  } = useTheme();
  return <Alert {...rest} color={backgroundNegative} startIcon={<WarningIcon />} />;
};

export default ErrorAlert;
