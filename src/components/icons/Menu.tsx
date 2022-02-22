import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const Menu = ({ title = 'Menu', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.33333 4.66667V2.16667C6.33333 1.24619 5.58714 0.5 4.66667 0.5H2.16667C1.24619 0.5 0.5 1.24619 0.5 2.16667V4.66667C0.5 5.58714 1.24619 6.33333 2.16667 6.33333H4.66667C5.58714 6.33333 6.33333 5.58714 6.33333 4.66667ZM11.3333 0.5H13.8333C14.7538 0.5 15.5 1.24619 15.5 2.16667V4.66667C15.5 5.58714 14.7538 6.33333 13.8333 6.33333H11.3333C10.4129 6.33333 9.66667 5.58714 9.66667 4.66667V2.16667C9.66667 1.24619 10.4129 0.5 11.3333 0.5ZM4.66667 9.66667H2.16667C1.24619 9.66667 0.5 10.4129 0.5 11.3333V13.8333C0.5 14.7538 1.24619 15.5 2.16667 15.5H4.66667C5.58714 15.5 6.33333 14.7538 6.33333 13.8333V11.3333C6.33333 10.4129 5.58714 9.66667 4.66667 9.66667ZM11.3333 9.66667H13.8333C14.7538 9.66667 15.5 10.4129 15.5 11.3333V13.8333C15.5 14.7538 14.7538 15.5 13.8333 15.5H11.3333C10.4129 15.5 9.66667 14.7538 9.66667 13.8333V11.3333C9.66667 10.4129 10.4129 9.66667 11.3333 9.66667Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
