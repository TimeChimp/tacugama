import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const Clinic = ({ title = 'Clinic', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.33333 0L10.6667 0C11.403 0 12 0.596954 12 1.33333V10.6667C12 11.403 11.403 12 10.6667 12H1.33333C0.596954 12 0 11.403 0 10.6667L0 1.33333C0 0.596954 0.596954 0 1.33333 0ZM9.66667 7.33333C9.85076 7.33333 10 7.18409 10 7V5C10 4.81591 9.85076 4.66667 9.66667 4.66667H7.33333V2.33333C7.33333 2.14924 7.18409 2 7 2H5C4.81591 2 4.66667 2.14924 4.66667 2.33333V4.66667H2.33333C2.14924 4.66667 2 4.81591 2 5V7C2 7.18409 2.14924 7.33333 2.33333 7.33333H4.66667V9.66667C4.66667 9.85076 4.81591 10 5 10H7C7.18409 10 7.33333 9.85076 7.33333 9.66667V7.33333H9.66667Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
