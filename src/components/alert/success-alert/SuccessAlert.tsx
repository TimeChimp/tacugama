import React from 'react';
import { Alert, AlertProps } from '../Alert';
import { useTheme } from '../../../providers';
import { CheckIcon } from '../../icons/check';

export type SuccessAlertProps = AlertProps;

export const SuccessAlert = ({ ...rest }: SuccessAlertProps) => {
  const {
    theme: {
      current: {
        colors: { backgroundPositive },
      },
    },
  } = useTheme();
  return <Alert {...rest} color={backgroundPositive} startIcon={<CheckIcon />} />;
};

export default SuccessAlert;
