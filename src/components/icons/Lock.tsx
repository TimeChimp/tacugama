import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps } from './Icon';

export const Lock = ({ title = 'Lock', size = '18', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.99992 0.666748C4.23849 0.666748 1.99992 2.90532 1.99992 5.66675V7.33342C1.07944 7.33342 0.333252 8.07961 0.333252 9.00008V15.6667C0.333252 16.5872 1.07944 17.3334 1.99992 17.3334H11.9999C12.9204 17.3334 13.6666 16.5872 13.6666 15.6667V9.00008C13.6666 8.07961 12.9204 7.33342 11.9999 7.33342V5.66675C11.9999 2.90532 9.76134 0.666748 6.99992 0.666748ZM11.9999 9.00008V15.6667H1.99992V9.00008H11.9999ZM3.66659 5.66675V7.33341H10.3333V5.66675C10.3333 3.8258 8.84087 2.33341 6.99992 2.33341C5.15897 2.33341 3.66659 3.8258 3.66659 5.66675Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
