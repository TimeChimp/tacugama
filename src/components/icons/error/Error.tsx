import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const ErrorIcon = ({ title = 'Error', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99967 1.33325C4.31778 1.33325 1.33301 4.31802 1.33301 7.99992C1.33301 11.6818 4.31778 14.6666 7.99967 14.6666C11.6816 14.6666 14.6663 11.6818 14.6663 7.99992C14.6663 6.23181 13.964 4.53612 12.7137 3.28587C11.4635 2.03563 9.76779 1.33325 7.99967 1.33325ZM8.66634 10.3333C8.66634 10.5173 8.5171 10.6666 8.33301 10.6666H7.66634C7.48225 10.6666 7.33301 10.5173 7.33301 10.3333V9.66658C7.33301 9.48249 7.48225 9.33325 7.66634 9.33325H8.33301C8.5171 9.33325 8.66634 9.48249 8.66634 9.66658V10.3333ZM8.35335 7.99993C8.43812 8.00054 8.50984 7.93742 8.52002 7.85326L8.78668 5.70659C8.79818 5.61149 8.76821 5.51604 8.7044 5.44458C8.6406 5.37312 8.54914 5.33257 8.45335 5.33326H7.54668C7.45089 5.33257 7.35943 5.37312 7.29563 5.44458C7.23183 5.51604 7.20185 5.61149 7.21335 5.70659L7.48002 7.85326C7.49019 7.93742 7.56191 8.00054 7.64668 7.99993H8.35335Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
