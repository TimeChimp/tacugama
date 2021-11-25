import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps } from './Icon';

export const LockOpen = ({ title = 'LockOpen', size = '18', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd" d="M4 8H14C15.1046 8 16 8.89543 16 10V18C16 19.1046 15.1046 20 14 20H2C0.89543 20 0 19.1046 0 18V10C0 8.89543 0.89543 8 2 8V6C2 2.68629 4.68629 0 8 0C11.3137 0 14 2.68629 14 6H12C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6V8ZM2 10V18H14V10H2Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
