import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps } from './Icon';

export const Tasks = ({ title = 'Tasks', size = '12', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6667 1.66659H0.333333C0.149238 1.66659 0 1.51735 0 1.33325V0.666585C0 0.48249 0.149238 0.333252 0.333333 0.333252H11.6667C11.8508 0.333252 12 0.48249 12 0.666585V1.33325C12 1.51735 11.8508 1.66659 11.6667 1.66659ZM10 5.33325V4.66659C10 4.48249 9.85076 4.33325 9.66667 4.33325H2.33333C2.14924 4.33325 2 4.48249 2 4.66659V5.33325C2 5.51735 2.14924 5.66659 2.33333 5.66659H9.66667C9.85076 5.66659 10 5.51735 10 5.33325ZM8 8.66659V9.33325C8 9.51735 7.85076 9.66659 7.66667 9.66659H4.33333C4.14924 9.66659 4 9.51735 4 9.33325V8.66659C4 8.48249 4.14924 8.33325 4.33333 8.33325H7.66667C7.85076 8.33325 8 8.48249 8 8.66659Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
