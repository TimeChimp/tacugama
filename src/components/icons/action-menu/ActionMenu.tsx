import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const ActionMenu = ({ title = 'ActionMenu', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 4 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.652954 10.6667C0.652954 11.403 1.24868 12 1.98355 12C2.71842 12 3.31415 11.403 3.31415 10.6667C3.31415 9.93029 2.71842 9.33333 1.98355 9.33333C1.24868 9.33333 0.652954 9.93029 0.652954 10.6667ZM0.652954 6C0.652954 6.73638 1.24868 7.33333 1.98355 7.33333C2.71842 7.33333 3.31415 6.73638 3.31415 6C3.31415 5.26362 2.71842 4.66667 1.98355 4.66667C1.24868 4.66667 0.652954 5.26362 0.652954 6ZM1.98355 2.66667C1.24868 2.66667 0.652954 2.06971 0.652954 1.33333C0.652954 0.596954 1.24868 -2.60937e-08 1.98355 -5.82819e-08C2.71842 -9.047e-08 3.31415 0.596954 3.31415 1.33333C3.31415 2.06971 2.71842 2.66667 1.98355 2.66667Z"
          fill={color || theme.current.colors.contentTertiary}
        />
      </svg>
    </Icon>
  );
};
