import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const FolderAdd = ({ title = 'FolderAdd', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.009 2h4.658c.92 0 1.667.747 1.667 1.667v8.334c0 .92-.747 1.666-1.667 1.666H2.334c-.92 0-1.667-.746-1.667-1.666V2c0-.92.746-1.667 1.667-1.667h6.325c.218 0 .428.088.583.242l1.183 1.183c.155.154.365.24.584.242zM9.417 8.668c.23 0 .417-.186.417-.416v-.834a.417.417 0 00-.417-.416H7.334V4.917a.417.417 0 00-.417-.416h-.833a.417.417 0 00-.417.416v2.084H3.584a.417.417 0 00-.417.416v.834c0 .23.187.416.417.416h2.083v2.084c0 .23.187.416.417.416h.833c.23 0 .417-.186.417-.416V8.667h2.083z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
