import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../icon/Icon';

export const Dash = ({ title = 'Dash', size = '10', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.666341 1.66659C0.482246 1.66659 0.333008 1.51735 0.333008 1.33325V0.666585C0.333008 0.48249 0.482246 0.333252 0.666341 0.333252H9.33301C9.5171 0.333252 9.66634 0.48249 9.66634 0.666585V1.33325C9.66634 1.51735 9.5171 1.66659 9.33301 1.66659H0.666341Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
