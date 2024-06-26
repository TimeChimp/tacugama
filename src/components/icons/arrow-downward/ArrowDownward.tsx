import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const ArrowDownwardIcon = ({ title = 'ArrowDownward', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.33356 1.33325C8.51766 1.33325 8.66689 1.48249 8.66689 1.66659V12.4466L11.6269 9.47992C11.6895 9.41681 11.7747 9.38132 11.8636 9.38132C11.9524 9.38132 12.0376 9.41681 12.1002 9.47992L12.5669 9.95325C12.63 10.0158 12.6655 10.101 12.6655 10.1899C12.6655 10.2788 12.63 10.364 12.5669 10.4266L8.48023 14.5199C8.38655 14.6137 8.25946 14.6665 8.12689 14.6666H7.87356C7.74128 14.665 7.61471 14.6125 7.52023 14.5199L3.43356 10.4266C3.37046 10.364 3.33496 10.2788 3.33496 10.1899C3.33496 10.101 3.37046 10.0158 3.43356 9.95325L3.90689 9.47992C3.96834 9.41721 4.05243 9.38187 4.14023 9.38187C4.22802 9.38187 4.31212 9.41721 4.37356 9.47992L7.33356 12.4466V1.66659C7.33356 1.48249 7.4828 1.33325 7.66689 1.33325H8.33356Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
