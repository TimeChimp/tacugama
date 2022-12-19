import React from 'react';
import { Alert, AlertProps } from '../Alert';
import { useTheme } from '../../../providers';
import { InfoIcon } from '../../icons/info';

export interface InfoAlertProps extends AlertProps {}

export const InfoAlert = ({ ...rest }: InfoAlertProps) => {
  const {
    theme: {
      current: {
        customColors: { blue1 },
      },
    },
  } = useTheme();
  return <Alert {...rest} color={blue1} startIcon={<InfoIcon />} />;
};

export default InfoAlert;
