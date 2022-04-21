import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Pencil = ({ title = 'Pencil', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2683 0.292758L11.7073 0.731873C11.8944 0.918852 11.9997 1.17252 11.9999 1.43712V1.94276C12.0033 2.21196 11.8977 2.47109 11.7073 2.66131L10.4767 3.87221C10.4143 3.93518 10.3293 3.97061 10.2406 3.97061C10.1519 3.97061 10.0669 3.93518 10.0045 3.87221L8.13545 1.97603C8.00869 1.84668 8.00869 1.63966 8.13545 1.5103L9.33935 0.292758C9.52953 0.102253 9.78858 -0.00331657 10.0577 1.55152e-05H10.5632C10.8277 0.000248448 11.0813 0.105546 11.2683 0.292758ZM9.21298 5.12302C9.33973 4.99366 9.33973 4.78664 9.21298 4.65729L7.31067 2.78107C7.24822 2.7181 7.16322 2.68267 7.07454 2.68267C6.98587 2.68267 6.90087 2.7181 6.83842 2.78107L1.47072 8.15025C1.34095 8.27889 1.23906 8.4329 1.17141 8.60267L0.0273636 11.4902C-0.0374437 11.6401 0.0161029 11.8148 0.153741 11.9027C0.248008 11.9968 0.389344 12.0256 0.512917 11.9759L3.39963 10.8049C3.56935 10.7372 3.72332 10.6353 3.85193 10.5055L9.21298 5.12302Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};