import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Info = ({ title = 'Info', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 .333a6.667 6.667 0 100 13.333A6.667 6.667 0 007 .333zm.666 9c0 .184-.149.333-.333.333h-.667a.333.333 0 01-.333-.333v-2c0-.184.15-.333.333-.333h.667c.184 0 .333.149.333.333v2zm-.333-3.667c.184 0 .333-.149.333-.333v-.667a.333.333 0 00-.333-.333h-.667a.333.333 0 00-.333.333v.667c0 .184.15.333.333.333h.667z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
