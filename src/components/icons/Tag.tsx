import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps } from './Icon';

export const Tag = ({ title = 'Tag', size = '12', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.8067 0.273334L11.7267 0.193334C11.599 0.0715117 11.4299 0.0024565 11.2534 4.17951e-07H5.95337C5.59801 -0.000280747 5.25724 0.141308 5.00671 0.393334L0.193374 5.20667C-0.0651089 5.46669 -0.0651089 5.88664 0.193374 6.14667L5.85337 11.8067C6.1134 12.0651 6.53335 12.0651 6.79337 11.8067L11.6067 6.99333C11.8587 6.7428 12.0003 6.40203 12 6.04667V0.746667C11.9976 0.570156 11.9285 0.40109 11.8067 0.273334ZM10.6667 6.04667L6.32671 10.3933L1.60671 5.67333L5.95337 1.33333H10.6667V6.04667ZM9.33337 4C9.33337 4.73638 8.73642 5.33333 8.00004 5.33333C7.26366 5.33333 6.66671 4.73638 6.66671 4C6.66671 3.26362 7.26366 2.66667 8.00004 2.66667C8.73642 2.66667 9.33337 3.26362 9.33337 4Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
