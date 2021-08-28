import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../icon/Icon';

export const Flag = ({ title = 'Flag', size = '18', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.16658 2.33341C7.08706 2.33341 7.83325 3.07961 7.83325 4.00008H13.2499C13.48 4.00008 13.6666 4.18663 13.6666 4.41675V11.9167C13.6666 12.1469 13.48 12.3334 13.2499 12.3334H7.83325C6.91278 12.3334 6.16658 11.5872 6.16658 10.6667H1.99992V16.9167C1.99992 17.1469 1.81337 17.3334 1.58325 17.3334H0.749919C0.5198 17.3334 0.333252 17.1469 0.333252 16.9167V1.08341C0.333252 0.853296 0.5198 0.666748 0.749919 0.666748H1.58325C1.81337 0.666748 1.99992 0.853296 1.99992 1.08341V2.33341H6.16658ZM1.99992 4.00008V9.00008H7.41658C7.6467 9.00008 7.83325 9.18663 7.83325 9.41675V10.6667H11.9999V5.66675H6.58325C6.35313 5.66675 6.16658 5.4802 6.16658 5.25008V4.00008H1.99992Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
