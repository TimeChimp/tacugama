import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const CircleClockInverted = ({
  title = 'CircleClock',
  size = defaultIconProps.size,
  color = 'white',
}: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="56" height="56" rx="28" fill="#6559D2" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 28C18 22.4772 22.4772 18 28 18C30.6522 18 33.1957 19.0536 35.0711 20.9289C36.9464 22.8043 38 25.3478 38 28C38 33.5228 33.5228 38 28 38C22.4772 38 18 33.5228 18 28ZM31.98 32.53L32.51 32C32.6083 31.904 32.6638 31.7724 32.6638 31.635C32.6638 31.4976 32.6083 31.366 32.51 31.27L28.88 27.64V22.5C28.88 22.2239 28.6561 22 28.38 22H27.62C27.3439 22 27.12 22.2239 27.12 22.5V28.17C27.118 28.3056 27.1723 28.4359 27.27 28.53L31.27 32.53C31.4678 32.7218 31.7822 32.7218 31.98 32.53Z"
          fill={color || theme.current.colors.white}
        />
      </svg>
    </Icon>
  );
};
