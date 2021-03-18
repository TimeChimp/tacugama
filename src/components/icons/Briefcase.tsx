import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps } from './Icon';

export const Briefcase = ({ title = 'Briefcase', size = '12', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.333 2.66667H10.333V1.33333C10.333 0.596954 9.73605 0 8.99967 0H4.99967C4.26329 0 3.66634 0.596954 3.66634 1.33333V2.66667H1.66634C0.929961 2.66667 0.333008 3.26362 0.333008 4V10.6667C0.333008 11.403 0.929961 12 1.66634 12H12.333C13.0694 12 13.6663 11.403 13.6663 10.6667V4C13.6663 3.26362 13.0694 2.66667 12.333 2.66667ZM8.33301 7.33333C8.33301 7.70152 8.03453 8 7.66634 8H6.33301C5.96482 8 5.66634 7.70152 5.66634 7.33333V7C5.66634 6.81591 5.81558 6.66667 5.99967 6.66667H7.99967C8.18377 6.66667 8.33301 6.81591 8.33301 7V7.33333ZM4.99967 2.66667H8.99967V1.33333H4.99967V2.66667Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
