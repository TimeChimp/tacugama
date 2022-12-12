import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const TagIcon = ({ title = 'Tag', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7262 2.19333L13.8062 2.27333C13.928 2.40109 13.9971 2.57016 13.9996 2.74667V8.04667C13.9998 8.40203 13.8582 8.7428 13.6062 8.99333L8.79288 13.8067C8.53286 14.0651 8.11291 14.0651 7.85288 13.8067L2.19289 8.14667C1.9344 7.88664 1.9344 7.46669 2.19289 7.20667L7.00622 2.39333C7.25675 2.14131 7.59752 1.99972 7.95289 2H13.2529C13.4294 2.00246 13.5985 2.07151 13.7262 2.19333ZM9.33288 5.33333C9.33288 6.06971 9.92984 6.66667 10.6662 6.66667C11.0198 6.66667 11.359 6.52619 11.609 6.27614C11.8591 6.02609 11.9996 5.68696 11.9996 5.33333C11.9996 4.59695 11.4026 4 10.6662 4C9.92984 4 9.33288 4.59695 9.33288 5.33333Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
