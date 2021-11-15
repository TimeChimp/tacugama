import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps } from './Icon';

export const Unarchive = ({ title = 'Unarchive', size = '12', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 0H2C0.89543 0 0 0.89543 0 2V16C0 17.1046 0.89543 18 2 18H16C17.1046 18 18 17.1046 18 16V2C18 0.89543 17.1046 0 16 0ZM12.89 10.39L12.68 10.6C12.5861 10.6905 12.4605 10.7408 12.33 10.74H11V14.5C11 14.7761 10.7761 15 10.5 15H7.5C7.22386 15 7 14.7761 7 14.5V10.74H5.67C5.53954 10.7408 5.41393 10.6905 5.32 10.6L5.11 10.39C4.91822 10.1922 4.91822 9.87781 5.11 9.68L8.65 6.15C8.74073 6.05332 8.86741 5.99848 9 5.99848C9.13259 5.99848 9.25927 6.05332 9.35 6.15L12.89 9.68C13.0818 9.87781 13.0818 10.1922 12.89 10.39ZM2 4H16V2H2V4Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
