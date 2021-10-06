import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const CircleCheckmark = ({ title = 'CircleCheckmark', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.333 7a6.667 6.667 0 1113.334 0A6.667 6.667 0 01.333 7zm5.82 2.233L9.9 5.487a.333.333 0 000-.46l-.353-.354a.333.333 0 00-.467 0l-3.16 3.16-1-.993a.32.32 0 00-.467 0l-.353.353a.333.333 0 000 .474l1.587 1.566a.32.32 0 00.466 0z"
          fill={color || theme.current.colors.contentPositive}
        />
      </svg>
    </Icon>
  );
};
