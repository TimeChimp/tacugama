import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const CircleCross = ({ title = 'CircleCross', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M.333 7a6.667 6.667 0 1113.334 0A6.667 6.667 0 01.333 7zm8.828 1.473a.32.32 0 00-.101-.233L7.827 7 9.06 5.76a.32.32 0 000-.467l-.353-.353a.32.32 0 00-.467 0L7 6.173 5.76 4.94a.32.32 0 00-.467 0l-.353.353a.32.32 0 000 .467L6.173 7 4.94 8.24a.32.32 0 000 .467l.353.353a.32.32 0 00.467 0L7 7.827 8.24 9.06a.32.32 0 00.467 0l.353-.353a.32.32 0 00.101-.234z"
          fill={color || theme.current.colors.contentNegative}
        />
      </svg>
    </Icon>
  );
};
