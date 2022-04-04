import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const OrganizationMenu = ({ title = 'OrganizationMenu', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 5V2C7 0.89543 6.10457 0 5 0H2C0.89543 0 0 0.89543 0 2V5C0 6.10457 0.89543 7 2 7H5C6.10457 7 7 6.10457 7 5ZM13 0H16C17.1046 0 18 0.89543 18 2V5C18 6.10457 17.1046 7 16 7H13C11.8954 7 11 6.10457 11 5V2C11 0.89543 11.8954 0 13 0ZM5 11H2C0.89543 11 0 11.8954 0 13V16C0 17.1046 0.89543 18 2 18H5C6.10457 18 7 17.1046 7 16V13C7 11.8954 6.10457 11 5 11ZM13 11H16C17.1046 11 18 11.8954 18 13V16C18 17.1046 17.1046 18 16 18H13C11.8954 18 11 17.1046 11 16V13C11 11.8954 11.8954 11 13 11Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
