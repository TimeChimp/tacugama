import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const InfoOutlined = ({ title = 'InfoOutlined', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM2 10C2 14.4183 5.58172 18 10 18C12.1217 18 14.1566 17.1571 15.6569 15.6569C17.1571 14.1566 18 12.1217 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10ZM11 10.5C11 10.2239 10.7761 10 10.5 10H9.5C9.22386 10 9 10.2239 9 10.5V13.5C9 13.7761 9.22386 14 9.5 14H10.5C10.7761 14 11 13.7761 11 13.5V10.5ZM10.5 6C10.7761 6 11 6.22386 11 6.5V7.5C11 7.77614 10.7761 8 10.5 8H9.5C9.22386 8 9 7.77614 9 7.5V6.5C9 6.22386 9.22386 6 9.5 6H10.5Z"
          fill={color || theme.current.colors.contentInversePrimary}
        />
      </svg>
    </Icon>
  );
};
