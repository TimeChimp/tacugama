import React from 'react';
import { Icon, SVGProps } from '../../icon';
import { DEFAULT_ICON_SIZE } from '../../../models';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const LoaderIcon = ({ title = 'Loader', size = DEFAULT_ICON_SIZE, color = '#000' }: SVGProps) => {
  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="3"
          fill="none"
          strokeDasharray="73"
          strokeDashoffset="20"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 12 12"
            to="360 12 12"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </Icon>
  );
};
