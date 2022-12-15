import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../../icon';

export const CheckLineIcon = ({ title = 'CheckLine', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.33649 9.05253L2.80199 8.57152C2.99849 8.36847 3.32409 8.36847 3.52059 8.57152L5.48387 10.6002L12.4794 3.37152C12.6759 3.16847 13.0015 3.16847 13.198 3.37152L13.6635 3.85253C13.8511 4.04639 13.8511 4.3541 13.6635 4.54796L5.84317 12.629C5.64667 12.832 5.32107 12.832 5.12457 12.629L2.33649 9.74795C2.1489 9.5541 2.1489 9.24639 2.33649 9.05253Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
