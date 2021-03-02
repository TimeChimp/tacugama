import { useTheme } from '../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const Plus = ({ title = 'Plus', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.66659 4.66659V5.33325C9.66659 5.51735 9.51735 5.66659 9.33325 5.66659H5.66659V9.33325C5.66659 9.51735 5.51735 9.66659 5.33325 9.66659H4.66659C4.48249 9.66659 4.33325 9.51735 4.33325 9.33325V5.66659H0.666585C0.48249 5.66659 0.333252 5.51735 0.333252 5.33325V4.66659C0.333252 4.48249 0.48249 4.33325 0.666585 4.33325H4.33325V0.666585C4.33325 0.48249 4.48249 0.333252 4.66659 0.333252H5.33325C5.51735 0.333252 5.66659 0.48249 5.66659 0.666585V4.33325H9.33325C9.51735 4.33325 9.66659 4.48249 9.66659 4.66659Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
