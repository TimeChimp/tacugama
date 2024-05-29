import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

/**
 * @deprecated The custom icons are deprecated and will be removed in a future version. Use the Phosphor Icons (https://phosphoricons.com) instead.
 */
export const AttachmentIcon = ({ title = 'Attachment', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 6.33341V11.3334C12 13.5426 10.2091 15.3334 8 15.3334C5.79086 15.3334 4 13.5426 4 11.3334V3.66675C4 2.00989 5.34315 0.666748 7 0.666748C8.65685 0.666748 10 2.00989 10 3.66675V10.6667C10 11.7713 9.10457 12.6667 8 12.6667C6.89543 12.6667 6 11.7713 6 10.6667V6.33341C6 6.24501 6.03512 6.16022 6.09763 6.09771C6.16014 6.0352 6.24493 6.00008 6.33333 6.00008H6.83333C7.01743 6.00008 7.16667 6.14932 7.16667 6.33341V10.6667C7.16667 11.127 7.53976 11.5001 8 11.5001C8.46024 11.5001 8.83333 11.127 8.83333 10.6667V3.66675C8.83333 2.65423 8.01252 1.83341 7 1.83341C5.98748 1.83341 5.16667 2.65423 5.16667 3.66675V11.3334C5.16667 12.8982 6.43519 14.1667 8 14.1667C9.56481 14.1667 10.8333 12.8982 10.8333 11.3334V6.33341C10.8333 6.14932 10.9826 6.00008 11.1667 6.00008H11.6667C11.8508 6.00008 12 6.14932 12 6.33341Z"
        fill={color || 'currentColor'}
      />
    </svg>
  </Icon>
);
