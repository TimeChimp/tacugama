import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const CompanyIcon = ({ title = 'Company', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.0003 12.6667H12.667V2.66667C12.667 2.29848 12.3685 2 12.0003 2H4.00033C3.63214 2 3.33366 2.29848 3.33366 2.66667V12.6667H1.00033C0.816231 12.6667 0.666992 12.8159 0.666992 13V13.6667C0.666992 13.8508 0.816231 14 1.00033 14H15.0003C15.1844 14 15.3337 13.8508 15.3337 13.6667V13C15.3337 12.8159 15.1844 12.6667 15.0003 12.6667ZM11.0003 7.33333H10.3337C10.1496 7.33333 10.0003 7.18409 10.0003 7V6.33333C10.0003 6.14924 10.1496 6 10.3337 6H11.0003C11.1844 6 11.3337 6.14924 11.3337 6.33333V7C11.3337 7.18409 11.1844 7.33333 11.0003 7.33333ZM5.00033 7.33333H5.66699C5.85109 7.33333 6.00033 7.18409 6.00033 7V6.33333C6.00033 6.14924 5.85109 6 5.66699 6H5.00033C4.81623 6 4.66699 6.14924 4.66699 6.33333V7C4.66699 7.18409 4.81623 7.33333 5.00033 7.33333ZM6.00033 9V9.66667C6.00033 9.85076 5.85109 10 5.66699 10H5.00033C4.81623 10 4.66699 9.85076 4.66699 9.66667V9C4.66699 8.81591 4.81623 8.66667 5.00033 8.66667H5.66699C5.85109 8.66667 6.00033 8.81591 6.00033 9ZM11.0003 8.66667H10.3337C10.1496 8.66667 10.0003 8.81591 10.0003 9V9.66667C10.0003 9.85076 10.1496 10 10.3337 10H11.0003C11.1844 10 11.3337 9.85076 11.3337 9.66667V9C11.3337 8.81591 11.1844 8.66667 11.0003 8.66667ZM11.0003 4.66667H10.3337C10.1496 4.66667 10.0003 4.51743 10.0003 4.33333V3.66667C10.0003 3.48257 10.1496 3.33333 10.3337 3.33333H11.0003C11.1844 3.33333 11.3337 3.48257 11.3337 3.66667V4.33333C11.3337 4.51743 11.1844 4.66667 11.0003 4.66667ZM6.00033 4.33333V3.66667C6.00033 3.48257 5.85109 3.33333 5.66699 3.33333H5.00033C4.81623 3.33333 4.66699 3.48257 4.66699 3.66667V4.33333C4.66699 4.51743 4.81623 4.66667 5.00033 4.66667H5.66699C5.85109 4.66667 6.00033 4.51743 6.00033 4.33333ZM5.00033 11.3333H11.0003C11.1844 11.3333 11.3337 11.4826 11.3337 11.6667V12.6667H4.66699V11.6667C4.66699 11.4826 4.81623 11.3333 5.00033 11.3333ZM7.66699 7.33333H8.33366C8.51775 7.33333 8.66699 7.18409 8.66699 7V6.33333C8.66699 6.14924 8.51775 6 8.33366 6H7.66699C7.4829 6 7.33366 6.14924 7.33366 6.33333V7C7.33366 7.18409 7.4829 7.33333 7.66699 7.33333ZM7.66699 8.66667H8.33366C8.51775 8.66667 8.66699 8.81591 8.66699 9V9.66667C8.66699 9.85076 8.51775 10 8.33366 10H7.66699C7.4829 10 7.33366 9.85076 7.33366 9.66667V9C7.33366 8.81591 7.4829 8.66667 7.66699 8.66667ZM7.66699 4.66667H8.33366C8.51775 4.66667 8.66699 4.51743 8.66699 4.33333V3.66667C8.66699 3.48257 8.51775 3.33333 8.33366 3.33333H7.66699C7.4829 3.33333 7.33366 3.48257 7.33366 3.66667V4.33333C7.33366 4.51743 7.4829 4.66667 7.66699 4.66667Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
