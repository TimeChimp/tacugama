import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../../icon';

export const ClearIcon = ({ title = 'Clear', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.33301 8.00016C1.33301 4.31826 4.31778 1.3335 7.99967 1.3335C9.76779 1.3335 11.4635 2.03588 12.7137 3.28612C13.964 4.53636 14.6663 6.23205 14.6663 8.00016C14.6663 11.6821 11.6816 14.6668 7.99967 14.6668C4.31778 14.6668 1.33301 11.6821 1.33301 8.00016ZM10.1607 9.4735C10.1607 9.38511 10.1241 9.30065 10.0597 9.24016L8.82634 8.00016L10.0597 6.76016C10.1241 6.69967 10.1607 6.61522 10.1607 6.52683C10.1607 6.43844 10.1241 6.35398 10.0597 6.2935L9.70634 5.94016C9.64585 5.87571 9.5614 5.83915 9.47301 5.83915C9.38462 5.83915 9.30016 5.87571 9.23967 5.94016L7.99967 7.1735L6.75967 5.94016C6.69919 5.87571 6.61473 5.83915 6.52634 5.83915C6.43795 5.83915 6.3535 5.87571 6.29301 5.94016L5.93967 6.2935C5.87522 6.35398 5.83866 6.43844 5.83866 6.52683C5.83866 6.61522 5.87522 6.69967 5.93967 6.76016L7.17301 8.00016L5.93967 9.24016C5.87522 9.30065 5.83866 9.38511 5.83866 9.4735C5.83866 9.56189 5.87522 9.64634 5.93967 9.70683L6.29301 10.0602C6.3535 10.1246 6.43795 10.1612 6.52634 10.1612C6.61473 10.1612 6.69919 10.1246 6.75967 10.0602L7.99967 8.82683L9.23967 10.0602C9.30016 10.1246 9.38462 10.1612 9.47301 10.1612C9.5614 10.1612 9.64585 10.1246 9.70634 10.0602L10.0597 9.70683C10.1241 9.64634 10.1607 9.56189 10.1607 9.4735Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
