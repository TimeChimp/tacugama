import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';
import { useTheme } from '../../../providers';

export const AddSquare = ({ title = 'AddSquare', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.33333 0.5H10.6667C11.403 0.5 12 1.09695 12 1.83333V11.1667C12 11.903 11.403 12.5 10.6667 12.5H1.33333C0.596954 12.5 0 11.903 0 11.1667V1.83333C0 1.09695 0.596954 0.5 1.33333 0.5ZM8.33333 7.16667C8.51743 7.16667 8.66667 7.01743 8.66667 6.83333V6.16667C8.66667 5.98257 8.51743 5.83333 8.33333 5.83333H6.66667V4.16667C6.66667 3.98257 6.51743 3.83333 6.33333 3.83333H5.66667C5.48257 3.83333 5.33333 3.98257 5.33333 4.16667V5.83333H3.66667C3.48257 5.83333 3.33333 5.98257 3.33333 6.16667V6.83333C3.33333 7.01743 3.48257 7.16667 3.66667 7.16667H5.33333V8.83333C5.33333 9.01743 5.48257 9.16667 5.66667 9.16667H6.33333C6.51743 9.16667 6.66667 9.01743 6.66667 8.83333V7.16667H8.33333Z"
          fill={color || theme.current.colors.colorPrimary}
        />
      </svg>
    </Icon>
  );
};
