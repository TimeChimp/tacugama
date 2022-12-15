import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../../icon';

export const TimesheetIcon = ({ title = 'Timesheet', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.66634 2.66675H13.333C14.0694 2.66675 14.6663 3.2637 14.6663 4.00008V12.0001C14.6663 12.7365 14.0694 13.3334 13.333 13.3334H2.66634C1.92996 13.3334 1.33301 12.7365 1.33301 12.0001V4.00008C1.33301 3.2637 1.92996 2.66675 2.66634 2.66675ZM10.6663 4.00008V6.00008H13.333V4.00008H10.6663ZM6.49967 6.00008V4.00008H9.49967V6.00008H6.49967ZM2.66634 4.00008V6.00008H5.33301V4.00008H2.66634ZM10.6663 8.83341V7.16675H13.333V8.83341H10.6663ZM6.49967 7.16675V8.83341H9.49967V7.16675H6.49967ZM2.66634 8.83341V7.16675H5.33301V8.83341H2.66634ZM10.6663 10.0001V12.0001H13.333V10.0001H10.6663ZM6.49967 12.0001V10.0001H9.49967V12.0001H6.49967ZM2.66634 10.0001V12.0001H5.33301V10.0001H2.66634Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
