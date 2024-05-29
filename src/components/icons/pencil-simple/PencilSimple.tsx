import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const PencilSimple = ({ title = 'PencilSimple', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7587 4.73204L12.2681 1.24064C12.152 1.12453 12.0142 1.03243 11.8625 0.969598C11.7109 0.906762 11.5483 0.87442 11.3841 0.87442C11.2199 0.87442 11.0574 0.906762 10.9057 0.969598C10.754 1.03243 10.6162 1.12453 10.5001 1.24064L0.866535 10.875C0.749956 10.9907 0.65753 11.1283 0.594628 11.28C0.531726 11.4317 0.499604 11.5944 0.500128 11.7586V15.25C0.500128 15.5815 0.631824 15.8995 0.866245 16.1339C1.10067 16.3683 1.41861 16.5 1.75013 16.5H5.24153C5.40575 16.5005 5.56843 16.4684 5.72012 16.4055C5.8718 16.3426 6.00948 16.2502 6.12513 16.1336L15.7587 6.50001C15.8748 6.38394 15.9669 6.24612 16.0298 6.09445C16.0926 5.94277 16.1249 5.7802 16.1249 5.61603C16.1249 5.45185 16.0926 5.28928 16.0298 5.13761C15.9669 4.98593 15.8748 4.84812 15.7587 4.73204ZM5.24153 15.25H1.75013V11.7586L8.62513 4.88361L12.1165 8.37501L5.24153 15.25ZM13.0001 7.49064L9.50872 4.00001L11.3837 2.12501L14.8751 5.61564L13.0001 7.49064Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
