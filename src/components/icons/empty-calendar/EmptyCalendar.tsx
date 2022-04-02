import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const EmptyCalendar = ({ title = 'EmptyCalendar', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 1.66659H10.6667C11.403 1.66659 12 2.26354 12 2.99992V11.6666C12 12.403 11.403 12.9999 10.6667 12.9999H1.33333C0.596954 12.9999 0 12.403 0 11.6666V2.99992C0 2.26354 0.596954 1.66659 1.33333 1.66659H2V0.666585C2 0.48249 2.14924 0.333252 2.33333 0.333252H3C3.18409 0.333252 3.33333 0.48249 3.33333 0.666585V1.66659H8.66667V0.666585C8.66667 0.48249 8.81591 0.333252 9 0.333252H9.66667C9.85076 0.333252 10 0.48249 10 0.666585V1.66659ZM1.33333 11.6666H10.6667V4.33325H1.33333V11.6666Z"
          fill={color || theme.current.colors.contentTertiary}
        />
      </svg>
    </Icon>
  );
};
