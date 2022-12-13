import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const AddLineIcon = ({ title = 'AddLine', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13 7.64286V8.35714C13 8.55439 12.8401 8.71429 12.6429 8.71429H8.71429V12.6429C8.71429 12.8401 8.55439 13 8.35714 13H7.64286C7.44561 13 7.28571 12.8401 7.28571 12.6429V8.71429H3.35714C3.1599 8.71429 3 8.55439 3 8.35714V7.64286C3 7.44561 3.1599 7.28571 3.35714 7.28571H7.28571V3.35714C7.28571 3.1599 7.44561 3 7.64286 3H8.35714C8.55439 3 8.71429 3.1599 8.71429 3.35714V7.28571H12.6429C12.8401 7.28571 13 7.44561 13 7.64286Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
