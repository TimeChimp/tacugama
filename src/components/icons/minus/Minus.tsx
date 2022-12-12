import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const MinusIcon = ({ title = 'Minus', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.66634 8.66659C3.48225 8.66659 3.33301 8.51735 3.33301 8.33325V7.66659C3.33301 7.48249 3.48225 7.33325 3.66634 7.33325H12.333C12.5171 7.33325 12.6663 7.48249 12.6663 7.66659V8.33325C12.6663 8.51735 12.5171 8.66659 12.333 8.66659H3.66634Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
