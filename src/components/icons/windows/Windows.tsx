import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';
import { useTheme } from '../../../providers';

export const Windows = ({ title = 'Windows', size = defaultIconProps.size, color = 'white' }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.667 8V1.33333C12.667 0.596954 12.07 0 11.3337 0H2.00033C1.26395 0 0.666992 0.596954 0.666992 1.33333V8C0.666992 8.73638 1.26395 9.33333 2.00033 9.33333H11.3337C12.07 9.33333 12.667 8.73638 12.667 8ZM2.00033 2.66667H11.3337V8H2.00033V2.66667ZM14.0003 9.33333V2.66667C14.7367 2.66667 15.3337 3.26362 15.3337 4V9.33333C15.3337 10.8061 14.1398 12 12.667 12H4.66699C3.93061 12 3.33366 11.403 3.33366 10.6667H12.667C13.4034 10.6667 14.0003 10.0697 14.0003 9.33333Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
