import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const ArrowLeftIcon = ({ title = 'ArrowLeft', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.6683 7.66676V8.33343C14.6683 8.51752 14.519 8.66676 14.3349 8.66676H3.99834V10.0001C3.99647 10.1335 3.91526 10.2529 3.79189 10.3036C3.66853 10.3544 3.52676 10.3268 3.4315 10.2334L1.43088 8.23343C1.30299 8.10155 1.30299 7.89197 1.43088 7.7601L3.4315 5.7601C3.52763 5.66589 3.67099 5.63872 3.79495 5.6912C3.9189 5.74368 3.99913 5.86553 3.99834 6.0001V7.33343H14.3349C14.519 7.33343 14.6683 7.48267 14.6683 7.66676Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
