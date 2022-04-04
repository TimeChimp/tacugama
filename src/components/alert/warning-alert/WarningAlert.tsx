import React from 'react';
import { Alert, AlertProps } from '../Alert';
import { useTheme } from '../../../providers';
import { Warning } from '../../icons';

export interface WarningAlertProps extends AlertProps {}

export const WarningAlert = ({ ...rest }: WarningAlertProps) => {
  const {
    theme: {
      current: {
        colors: { backgroundWarning },
        sizing: { scale700 },
      },
    },
  } = useTheme();
  return <Alert {...rest} color={backgroundWarning} startIcon={<Warning size={scale700} />} />;
};

export default WarningAlert;
