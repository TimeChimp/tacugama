import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const ClearLineIcon = ({ title = 'ClearLine', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.9014 10.961C11.9645 11.0236 12 11.1089 12 11.1978C12 11.2867 11.9645 11.3719 11.9014 11.4345L11.4345 11.9014C11.3719 11.9645 11.2867 12 11.1978 12C11.1089 12 11.0236 11.9645 10.961 11.9014L8 8.94033L5.03896 11.9014C4.97635 11.9645 4.89112 12 4.80221 12C4.7133 12 4.62807 11.9645 4.56546 11.9014L4.09863 11.4345C4.03551 11.3719 4 11.2867 4 11.1978C4 11.1089 4.03551 11.0236 4.09863 10.961L7.05967 8L4.09863 5.03896C4.03551 4.97635 4 4.89112 4 4.80221C4 4.7133 4.03551 4.62807 4.09863 4.56546L4.56546 4.09863C4.62807 4.03551 4.7133 4 4.80221 4C4.89112 4 4.97635 4.03551 5.03896 4.09863L8 7.05967L10.961 4.09863C11.0236 4.03551 11.1089 4 11.1978 4C11.2867 4 11.3719 4.03551 11.4345 4.09863L11.9014 4.56546C11.9645 4.62807 12 4.7133 12 4.80221C12 4.89112 11.9645 4.97635 11.9014 5.03896L8.94033 8L11.9014 10.961Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
