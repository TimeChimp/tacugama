import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const CircleClock = ({ title = 'CircleClock', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.667 14C.667 6.636 6.637.667 14 .667A13.333 13.333 0 0127.333 14c0 7.364-5.97 13.333-13.333 13.333C6.636 27.333.667 21.363.667 14zm18.64 6.04l.706-.707a.68.68 0 000-.973l-4.84-4.84V6.667A.667.667 0 0014.507 6h-1.014a.667.667 0 00-.666.667v7.56c-.003.18.07.354.2.48l5.333 5.333a.68.68 0 00.947 0z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
