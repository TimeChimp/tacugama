import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const Folder = ({ title = 'Folder', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M15.667 2h-4.658a.833.833 0 01-.584-.241L9.242.576a.833.833 0 00-.583-.242H2.334c-.92 0-1.667.746-1.667 1.667v10c0 .92.746 1.666 1.667 1.666h13.333c.92 0 1.667-.746 1.667-1.666V3.667c0-.92-.747-1.666-1.667-1.666z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
