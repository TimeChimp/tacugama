import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../icon/Icon';

export const TagIcon = ({ title = 'Tag', size = '12', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.7267 0.193334L11.8067 0.273334C11.9285 0.40109 11.9976 0.570156 12 0.746667V6.04667C12.0003 6.40203 11.8587 6.7428 11.6067 6.99333L6.79334 11.8067C6.53332 12.0651 6.11337 12.0651 5.85334 11.8067L0.193343 6.14667C-0.0651394 5.88664 -0.0651394 5.46669 0.193343 5.20667L5.00668 0.393334C5.25721 0.141308 5.59798 -0.000280747 5.95334 4.17951e-07H11.2533C11.4299 0.0024565 11.5989 0.0715117 11.7267 0.193334ZM7.33334 3.33333C7.33334 4.06971 7.9303 4.66667 8.66668 4.66667C9.0203 4.66667 9.35944 4.52619 9.60949 4.27614C9.85953 4.02609 10 3.68696 10 3.33333C10 2.59695 9.40306 2 8.66668 2C7.9303 2 7.33334 2.59695 7.33334 3.33333Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
