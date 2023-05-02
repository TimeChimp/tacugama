import React from 'react';
import { Alert, AlertProps } from '../Alert';
import { useTheme } from '../../../providers';
import { InfoIcon } from '../../icons/info';

export type InfoAlertProps = AlertProps;

export const InfoAlert = ({ ...rest }: InfoAlertProps) => {
  const {
    theme: {
      current: {
        customColors: { blue1, blue4, dark1 },
      },
    },
  } = useTheme();
  return <Alert {...rest} color={blue4} textColor={dark1} startIcon={<InfoIcon color={blue1} />} />;
};

export default InfoAlert;
