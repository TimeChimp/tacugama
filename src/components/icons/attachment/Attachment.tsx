import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';
import { useTheme } from '../../../providers';

export const Attachment = ({ title = 'Attachment', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 6.833v5a4 4 0 11-8 0V4.167a3 3 0 016 0v7a2 2 0 01-4 0V6.833a.333.333 0 01.333-.333h.5c.184 0 .334.15.334.333v4.334a.833.833 0 001.666 0v-7a1.833 1.833 0 00-3.666 0v7.666a2.833 2.833 0 105.666 0v-5c0-.184.15-.333.334-.333h.5c.184 0 .333.15.333.333z"
          fill={color || theme.current.colors.colorPrimary}
        />
      </svg>
    </Icon>
  );
};
