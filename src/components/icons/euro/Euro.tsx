import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../../icon';

export const EuroIcon = ({ title = 'Euro', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.0773 6.47917H6.63625C7.04183 4.76054 8.15209 3.84292 9.51584 3.84292C10.3878 3.84292 11.1381 4.20794 11.7871 4.79603L12.2738 3.74153C11.5437 3.05205 10.5906 2.66675 9.51584 2.66675C7.43219 2.66675 5.86058 4.09641 5.39417 6.47917H4.36502L4 7.49311H5.2725C5.26236 7.66041 5.25729 7.82771 5.25729 8.00008C5.25729 8.17245 5.26236 8.33975 5.2725 8.50705H4.36502L4 9.52099H5.39417C5.86058 11.9038 7.43219 13.3334 9.51584 13.3334C10.5501 13.3334 11.5437 12.9887 12.2535 12.3195L11.7465 11.265C11.1584 11.7719 10.4081 12.1572 9.51584 12.1572C8.15209 12.1572 7.04183 11.2396 6.63625 9.52099H9.73891L10.2053 8.50705H6.48923C6.47909 8.34482 6.47402 8.17245 6.47402 8.00008C6.47402 7.82771 6.47909 7.65534 6.48923 7.49311H10.6109L11.0773 6.47917Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
