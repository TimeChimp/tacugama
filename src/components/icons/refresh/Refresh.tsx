import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const RefreshIcon = ({ title = 'Refresh', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.6666 6.66675H10.3333C10.1492 6.66675 9.99994 6.51751 9.99994 6.33341V6.14008C9.99863 6.04969 10.0348 5.9628 10.0999 5.90008L11.2866 4.71341C10.4198 3.83227 9.23599 3.33523 7.99994 3.33341C5.46471 3.33913 3.39779 5.36788 3.34482 7.90257C3.29186 10.4373 5.27221 12.5506 7.80499 12.6622C10.3378 12.7738 12.4964 10.8429 12.6666 8.31341C12.6772 8.13717 12.8234 7.99976 12.9999 8.00008H13.6666C13.7575 8.00278 13.8437 8.04109 13.9066 8.10674C13.9679 8.17373 13.9992 8.26282 13.9933 8.35341C13.8277 11.1781 11.7112 13.5032 8.91449 13.9328C6.11777 14.3623 3.40104 12.7797 2.39534 10.1349C1.38964 7.49014 2.36835 4.50222 4.74388 2.965C7.11941 1.42778 10.246 1.75911 12.2466 3.76008L13.2399 2.76674C13.3011 2.70332 13.3852 2.66726 13.4733 2.66674H13.6666C13.8507 2.66674 13.9999 2.81598 13.9999 3.00008V6.33341C13.9999 6.51751 13.8507 6.66675 13.6666 6.66675Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
