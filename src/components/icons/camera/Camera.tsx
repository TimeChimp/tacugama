import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const CameraIcon = ({ title = 'Camera', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.333 2.6665C13.0694 2.6665 13.6663 3.26346 13.6663 3.99984V9.99984C13.6663 10.7362 13.0694 11.3332 12.333 11.3332H1.66634C0.929961 11.3332 0.333008 10.7362 0.333008 9.99984V3.99984C0.333008 3.26346 0.929961 2.6665 1.66634 2.6665H2.44634C2.8017 2.66679 3.14248 2.5252 3.39301 2.27317L4.41301 1.25317C4.78772 0.877991 5.29609 0.666971 5.82634 0.666504H8.17301C8.70326 0.666971 9.21163 0.877991 9.58634 1.25317L10.6063 2.27317C10.8569 2.5252 11.1976 2.66679 11.553 2.6665H12.333ZM4.33301 6.6665C4.33301 8.13926 5.52692 9.33317 6.99967 9.33317C7.70692 9.33317 8.3852 9.05222 8.88529 8.55212C9.38539 8.05202 9.66634 7.37375 9.66634 6.6665C9.66634 5.19374 8.47243 3.99984 6.99967 3.99984C5.52692 3.99984 4.33301 5.19374 4.33301 6.6665Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
