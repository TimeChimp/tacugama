import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const CalendarFilledIcon = ({ title = 'CalendarFilled', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.6667 2.66659H12V1.66659C12 1.48249 11.8508 1.33325 11.6667 1.33325H11C10.8159 1.33325 10.6667 1.48249 10.6667 1.66659V2.66659H5.33333V1.66659C5.33333 1.48249 5.18409 1.33325 5 1.33325H4.33333C4.14924 1.33325 4 1.48249 4 1.66659V2.66659H3.33333C2.59695 2.66659 2 3.26354 2 3.99992V12.6666C2 13.403 2.59695 13.9999 3.33333 13.9999H12.6667C13.403 13.9999 14 13.403 14 12.6666V3.99992C14 3.26354 13.403 2.66659 12.6667 2.66659ZM12.6667 12.6666H3.33333V5.33325H12.6667V12.6666ZM8.33333 7.99992H7.66667C7.48257 7.99992 7.33333 7.85068 7.33333 7.66658V6.99992C7.33333 6.81582 7.48257 6.66658 7.66667 6.66658H8.33333C8.51743 6.66658 8.66667 6.81582 8.66667 6.99992V7.66658C8.66667 7.85068 8.51743 7.99992 8.33333 7.99992ZM10.3333 7.99992H11C11.1841 7.99992 11.3333 7.85068 11.3333 7.66658V6.99992C11.3333 6.81582 11.1841 6.66658 11 6.66658H10.3333C10.1492 6.66658 10 6.81582 10 6.99992V7.66658C10 7.85068 10.1492 7.99992 10.3333 7.99992ZM5.66667 7.99992H5C4.8159 7.99992 4.66667 7.85068 4.66667 7.66658V6.99992C4.66667 6.81582 4.8159 6.66658 5 6.66658H5.66667C5.85076 6.66658 6 6.81582 6 6.99992V7.66658C6 7.85068 5.85076 7.99992 5.66667 7.99992ZM7.66667 10.6666H8.33333C8.51743 10.6666 8.66667 10.5173 8.66667 10.3333V9.66658C8.66667 9.48249 8.51743 9.33325 8.33333 9.33325H7.66667C7.48257 9.33325 7.33333 9.48249 7.33333 9.66658V10.3333C7.33333 10.5173 7.48257 10.6666 7.66667 10.6666ZM5.66667 10.6666H5C4.8159 10.6666 4.66667 10.5173 4.66667 10.3333V9.66658C4.66667 9.48249 4.8159 9.33325 5 9.33325H5.66667C5.85076 9.33325 6 9.48249 6 9.66658V10.3333C6 10.5173 5.85076 10.6666 5.66667 10.6666Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
