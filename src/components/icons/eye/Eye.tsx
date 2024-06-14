import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const EyeIcon = ({ title = 'Eye', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6582 4.80005C12.5718 2.07769 9.92506 0.30328 6.99562 0.333385C4.08567 0.316553 1.46043 2.07923 0.37299 4.78005C0.347381 4.85061 0.333866 4.92499 0.333015 5.00005C0.332662 5.0709 0.346245 5.14112 0.37299 5.20672C1.4562 7.91278 4.08238 9.68137 6.99562 9.66672C9.90557 9.68355 12.5308 7.92087 13.6183 5.22005C13.6468 5.15031 13.6604 5.07537 13.6582 5.00005C13.669 4.93382 13.669 4.86628 13.6582 4.80005ZM6.99536 8.33331C4.74102 8.32823 2.68828 7.03316 1.71191 4.99997C2.68491 2.96396 4.73992 1.66797 6.99536 1.66797C9.2508 1.66797 11.3058 2.96396 12.2788 4.99997C11.3024 7.03316 9.24971 8.32823 6.99536 8.33331ZM4.99684 5.00005C4.99684 3.89548 5.89172 3.00005 6.99562 3.00005C8.09952 3.00005 8.9944 3.89548 8.9944 5.00005C8.9944 6.10462 8.09952 7.00005 6.99562 7.00005C5.89172 7.00005 4.99684 6.10462 4.99684 5.00005Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
