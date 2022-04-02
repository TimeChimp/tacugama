import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const BarChartIcon = ({ title = 'BarChartIcon', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.667.667c.368 0 .666.298.666.666v9.334a.667.667 0 01-.666.666H9.333a.667.667 0 01-.666-.667V1.333c0-.368.298-.666.666-.666h1.334zm-3.334 10V4a.667.667 0 00-.666-.667H5.333A.667.667 0 004.667 4v6.666c0 .369.298.667.666.667h1.334a.667.667 0 00.666-.667zm-4.666.666H1.333a.667.667 0 01-.666-.667v-4c0-.368.298-.666.666-.666h1.334c.368 0 .666.298.666.667v4a.667.667 0 01-.666.666z"
          fill={color || theme.current.colors.contentTertiary}
        />
      </svg>
    </Icon>
  );
};
