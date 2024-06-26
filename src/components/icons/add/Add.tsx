import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const AddIcon = ({ title = 'Add', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.33301 8.00016C1.33301 4.31826 4.31778 1.3335 7.99967 1.3335C9.76779 1.3335 11.4635 2.03588 12.7137 3.28612C13.964 4.53636 14.6663 6.23205 14.6663 8.00016C14.6663 11.6821 11.6816 14.6668 7.99967 14.6668C4.31778 14.6668 1.33301 11.6821 1.33301 8.00016ZM10.333 8.66683C10.5171 8.66683 10.6663 8.51759 10.6663 8.3335V7.66683C10.6663 7.48273 10.5171 7.3335 10.333 7.3335H8.66634V5.66683C8.66634 5.48273 8.5171 5.3335 8.33301 5.3335H7.66634C7.48225 5.3335 7.33301 5.48273 7.33301 5.66683V7.3335H5.66634C5.48225 7.3335 5.33301 7.48273 5.33301 7.66683V8.3335C5.33301 8.51759 5.48225 8.66683 5.66634 8.66683H7.33301V10.3335C7.33301 10.5176 7.48225 10.6668 7.66634 10.6668H8.33301C8.5171 10.6668 8.66634 10.5176 8.66634 10.3335V8.66683H10.333Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
