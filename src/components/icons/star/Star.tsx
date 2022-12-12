import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const StarIcon = ({ title = 'Star', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.4673 6.56942C1.35466 6.48741 1.30651 6.34293 1.34741 6.20974L1.40069 6.04322C1.43965 5.91162 1.55676 5.81846 1.69374 5.8101L5.94963 5.4704L7.58138 1.54726C7.63612 1.40982 7.7735 1.32361 7.92105 1.33411H8.09422C8.23332 1.33116 8.35901 1.41674 8.40725 1.54726L10.0457 5.4704L14.3015 5.8101C14.4385 5.81846 14.5556 5.91162 14.5946 6.04322L14.6479 6.20974C14.6932 6.33872 14.6533 6.48228 14.548 6.56942L11.3377 9.32694L12.3235 13.4632C12.3559 13.5956 12.3061 13.7346 12.1969 13.8162L12.0038 13.9228C11.8911 13.999 11.7435 13.999 11.6308 13.9228L8.00763 11.7248L4.36449 13.9428C4.25183 14.019 4.10418 14.019 3.99152 13.9428L3.845 13.8429C3.7358 13.7613 3.68598 13.6223 3.71845 13.4899L4.67752 9.32694L1.4673 6.56942Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
