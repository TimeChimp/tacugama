import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../..';

export const CaretDownIcon = ({ title = 'CaretDown', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.13797 6.55972C4.04967 6.46586 4 6.33811 4 6.20483C4 6.07155 4.04967 5.9438 4.13797 5.84994L4.32454 5.65C4.4123 5.55238 4.53389 5.49809 4.66037 5.50005H11.3396C11.4661 5.49809 11.5877 5.55238 11.6755 5.65L11.862 5.84994C11.9503 5.9438 12 6.07155 12 6.20483C12 6.33811 11.9503 6.46586 11.862 6.55972L8.3265 10.3485C8.24186 10.4452 8.12368 10.5 8 10.5C7.87632 10.5 7.75814 10.4452 7.6735 10.3485L4.13797 6.55972Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
