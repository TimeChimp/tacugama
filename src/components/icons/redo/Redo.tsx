import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const RedoIcon = ({ title = 'Redo', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.6531 5.3334C9.36729 5.30612 11.0305 5.91674 12.3198 7.04673L13.9331 5.4334C13.9876 5.37615 14.061 5.34063 14.1398 5.3334H14.3331C14.5172 5.3334 14.6664 5.48263 14.6664 5.66673V10.3334C14.6664 10.5175 14.5172 10.6667 14.3331 10.6667H9.66643C9.48234 10.6667 9.3331 10.5175 9.3331 10.3334V10.1401C9.33179 10.0497 9.368 9.96278 9.4331 9.90006L11.1131 8.22006C10.1433 7.41185 8.91538 6.97889 7.6531 7.00006C5.20643 7.00006 3.1931 8.48673 2.98643 10.3667C2.97275 10.5341 2.83436 10.6639 2.66643 10.6667H1.66643C1.57321 10.667 1.48412 10.6283 1.42078 10.5599C1.35744 10.4915 1.32564 10.3997 1.3331 10.3067C1.5531 7.52673 4.29977 5.3334 7.6531 5.3334Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
