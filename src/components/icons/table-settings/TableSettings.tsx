import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../icon/Icon';

export const TableSettings = ({ title = 'TableSettings', size = '18', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.6667 3.3335H3.33334C2.41286 3.3335 1.66667 4.07969 1.66667 5.00016V15.0002C1.66667 15.9206 2.41286 16.6668 3.33334 16.6668H16.6667C17.5871 16.6668 18.3333 15.9206 18.3333 15.0002V5.00016C18.3333 4.07969 17.5871 3.3335 16.6667 3.3335ZM3.33334 7.50016V5.00016H16.6667V7.50016H3.33334ZM16.6667 8.9585H13.3333V15.0002H16.6667V8.9585ZM8.125 8.9585H11.875V15.0002H8.125V8.9585ZM6.66667 8.9585H3.33334V15.0002H6.66667V8.9585Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
