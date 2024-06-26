import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const AppleIcon = ({ title = 'Apple', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.0004 7.49388C14.0004 11.5644 11.3337 13.96 10.407 13.96C10.2731 13.9868 10.1369 14.0002 10.0004 14C9.05368 14 8.94702 13.4595 8.00035 13.4595C7.05368 13.4595 6.94702 14 6.00035 14C5.8638 14.0002 5.72757 13.9868 5.59368 13.96C4.08035 13.96 2.00035 10.6635 2.00035 7.49388C1.97382 5.61272 3.45523 4.05578 5.33368 3.99059C6.10391 4.01186 6.84978 4.26537 7.47368 4.71794C7.4857 4.47342 7.51691 4.23022 7.56702 3.99059C7.72144 3.30344 8.02912 2.66014 8.46702 2.10882C8.52898 2.03957 8.61747 2 8.71035 2C8.80323 2 8.89172 2.03957 8.95368 2.10882L9.41368 2.56258C9.53729 2.69371 9.53729 2.89856 9.41368 3.02969C9.08551 3.38945 8.84179 3.81806 8.70035 4.2842C8.65465 4.42383 8.619 4.56655 8.59368 4.71127C9.19084 4.25684 9.917 4.00443 10.667 3.99059C12.5455 4.05578 14.0269 5.61272 14.0004 7.49388Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
