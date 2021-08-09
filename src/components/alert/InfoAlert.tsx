import React from 'react';
import { Alert, AlertProps } from './Alert';
import { useTheme } from '../../providers';
import { InfoOutlined } from '../icons';

export interface InfoAlertProps extends AlertProps {}

export const InfoAlert = ({ ...rest }: InfoAlertProps) => {
  const {
    theme: {
      current: {
        customColors: { blue1 },
      },
    },
  } = useTheme();
  return <Alert {...rest} color={blue1} startIcon={<InfoOutlined size="20" />} />;
};

export default InfoAlert;
