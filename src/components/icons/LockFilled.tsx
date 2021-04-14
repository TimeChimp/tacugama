import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps } from './Icon';

export const LockFilled = ({ title = 'LockFilled', size = '18', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0003 5.66683V4.3335C10.0003 2.12436 8.20946 0.333496 6.00033 0.333496C3.79119 0.333496 2.00033 2.12436 2.00033 4.3335V5.66683C1.26395 5.66683 0.666992 6.26378 0.666992 7.00016V12.3335C0.666992 13.0699 1.26395 13.6668 2.00033 13.6668H10.0003C10.7367 13.6668 11.3337 13.0699 11.3337 12.3335V7.00016C11.3337 6.26378 10.7367 5.66683 10.0003 5.66683ZM3.33366 4.3335C3.33366 2.86074 4.52757 1.66683 6.00033 1.66683C7.47308 1.66683 8.66699 2.86074 8.66699 4.3335V5.66683H3.33366V4.3335ZM6.66699 11.0002C7.03518 11.0002 7.33366 10.7017 7.33366 10.3335V9.00016C7.33366 8.63197 7.03518 8.3335 6.66699 8.3335H5.33366C4.96547 8.3335 4.66699 8.63197 4.66699 9.00016V10.3335C4.66699 10.7017 4.96547 11.0002 5.33366 11.0002H6.66699Z"
          fill={color || theme.current.colors.positive}
        />
      </svg>
    </Icon>
  );
};
