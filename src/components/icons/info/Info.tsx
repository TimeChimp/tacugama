import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const InfoIcon = ({ title = 'Info', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99967 1.33325C4.31778 1.33325 1.33301 4.31802 1.33301 7.99992C1.33301 11.6818 4.31778 14.6666 7.99967 14.6666C11.6816 14.6666 14.6663 11.6818 14.6663 7.99992C14.6663 6.23181 13.964 4.53612 12.7137 3.28587C11.4635 2.03563 9.76779 1.33325 7.99967 1.33325ZM8.66634 10.3333C8.66634 10.5173 8.5171 10.6666 8.33301 10.6666H7.66634C7.48225 10.6666 7.33301 10.5173 7.33301 10.3333V8.33325C7.33301 8.14916 7.48225 7.99992 7.66634 7.99992H8.33301C8.5171 7.99992 8.66634 8.14916 8.66634 8.33325V10.3333ZM8.33301 6.66658C8.5171 6.66658 8.66634 6.51735 8.66634 6.33325V5.66658C8.66634 5.48249 8.5171 5.33325 8.33301 5.33325H7.66634C7.48225 5.33325 7.33301 5.48249 7.33301 5.66658V6.33325C7.33301 6.51735 7.48225 6.66658 7.66634 6.66658H8.33301Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
