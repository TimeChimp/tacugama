import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Crown = ({ title = 'Crown', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.333 3.833h-.253a1 1 0 00-.707.294l-2.04 2.04L8.48 3.313a.5.5 0 00-.353-.146h-.254a.5.5 0 00-.353.146L4.667 6.167l-2.04-2.04a1 1 0 00-.707-.294h-.253a.333.333 0 00-.334.334v6.666c0 .184.15.334.334.334h12.666c.184 0 .334-.15.334-.334V4.167a.333.333 0 00-.334-.334zM8 9.167A1.333 1.333 0 118 6.5a1.333 1.333 0 010 2.667zM1.667 12.5h12.666c.184 0 .334.15.334.333v.667c0 .184-.15.333-.334.333H1.667a.333.333 0 01-.334-.333v-.667c0-.184.15-.333.334-.333z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
