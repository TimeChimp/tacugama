import React from 'react';
import { Alert, AlertProps } from './Alert';
import { useTheme } from '../../providers';
import { Warning } from '../icons';

export interface ErrorAlertProps extends AlertProps {}

export const ErrorAlert = ({ ...rest }: ErrorAlertProps) => {
  const {
    theme: {
      current: {
        colors: { backgroundNegative },
        sizing: { scale700 },
      },
    },
  } = useTheme();
  return <Alert {...rest} color={backgroundNegative} startIcon={<Warning size={scale700} />} />;
};

export default ErrorAlert;
