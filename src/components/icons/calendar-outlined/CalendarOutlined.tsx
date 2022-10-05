import React from 'react';
import { useTheme } from '../../../providers';
import { defaultIconProps, Icon, SVGProps } from '../icon';

export const CalendarOutlined = ({ title = 'CalendarOutlined', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 1.666h.667C11.403 1.666 12 2.263 12 3v8.666c0 .737-.597 1.334-1.333 1.334H1.333A1.333 1.333 0 0 1 0 11.666V3c0-.737.597-1.334 1.333-1.334H2v-1c0-.184.15-.333.333-.333H3c.184 0 .333.15.333.333v1h5.334v-1c0-.184.149-.333.333-.333h.667c.184 0 .333.15.333.333v1Zm-8.667 10h9.334V4.333H1.333v7.333Z"
          fill={color || theme.current.customColors.dark3}
        />
      </svg>
    </Icon>
  );
};
