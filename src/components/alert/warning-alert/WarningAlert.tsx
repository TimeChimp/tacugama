import React from 'react';
import { Alert, AlertProps } from '../Alert';
import { useTheme } from '../../../providers';
import { WarningIcon } from '../../icons';

export interface WarningAlertProps extends AlertProps {}

export const WarningAlert = ({ ...rest }: WarningAlertProps) => {
  const {
    theme: {
      current: {
        colors: { backgroundWarning },
      },
    },
  } = useTheme();
  return <Alert {...rest} color={backgroundWarning} startIcon={<WarningIcon />} />;
};

export default WarningAlert;
