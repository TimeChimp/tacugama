import React from 'react';
import { Alert, AlertProps } from './Alert';
import { useTheme } from '../../providers';
import { Check } from '../icons';

export interface SuccessAlertProps extends AlertProps {}

export const SuccessAlert = ({ ...rest }: SuccessAlertProps) => {
  const {
    theme: {
      current: {
        colors: { backgroundPositive },
        sizing: { scale700 },
      },
    },
  } = useTheme();
  return <Alert {...rest} color={backgroundPositive} startIcon={<Check size={scale700} />} />;
};

export default SuccessAlert;
