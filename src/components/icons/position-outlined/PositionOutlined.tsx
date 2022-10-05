import React from 'react';
import { useTheme } from '../../../providers';
import { defaultIconProps, Icon, SVGProps } from '../icon';

export const PositionOutlined = ({ title = 'PositionOutlined', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.333 12c.737 0 1.334-.597 1.334-1.333V4c0-.736-.597-1.333-1.334-1.333h-2V1.333C10.333.597 9.736 0 9 0H5c-.736 0-1.333.597-1.333 1.333v1.334h-2C.93 2.667.333 3.264.333 4v6.667C.333 11.403.93 12 1.667 12h10.666ZM5.667 7v.333c0 .369.298.667.666.667h1.334a.667.667 0 0 0 .666-.667V7A.333.333 0 0 0 8 6.667H6A.333.333 0 0 0 5.667 7ZM5 2.667h4V1.333H5v1.334ZM1.667 4h10.666v6.667H1.667V4Z"
          fill={color || theme.current.customColors.dark3}
        />
      </svg>
    </Icon>
  );
};
