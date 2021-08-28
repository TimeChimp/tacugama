import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const Text = ({ title = 'Text', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.66667 10.3334C4.66667 10.5175 4.51743 10.6667 4.33333 10.6667H3.66667C3.48257 10.6667 3.33333 10.5175 3.33333 10.3334V2.00008H0.333333C0.149238 2.00008 0 1.85084 0 1.66675V1.00008C0 0.815986 0.149238 0.666748 0.333333 0.666748H7.66667C7.85076 0.666748 8 0.815986 8 1.00008V1.66675C8 1.85084 7.85076 2.00008 7.66667 2.00008H4.66667V10.3334Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
