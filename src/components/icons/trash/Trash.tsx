import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const Trash = ({ title = 'Trash', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.3333 2.66665V1.99998C11.3333 1.81588 11.1841 1.66665 11 1.66665H8V0.99998C8 0.63179 7.70152 0.333313 7.33333 0.333313H4.66666C4.29847 0.333313 4 0.63179 4 0.99998V1.66665H0.999997C0.815903 1.66665 0.666664 1.81588 0.666664 1.99998V2.66665C0.666664 2.85074 0.815903 2.99998 0.999997 2.99998H11C11.1841 2.99998 11.3333 2.85074 11.3333 2.66665ZM3.14666 11H8.85333L9.33333 4.33331H10.6667L10.1 12.4266C10.0509 13.1263 9.46808 13.6684 8.76666 13.6666H3.24666C2.54524 13.6684 1.96243 13.1263 1.91333 12.4266L1.33333 4.33331H2.66666L3.14666 11Z"
          fill={color || theme.current.colors.contentNegative}
        />
      </svg>
    </Icon>
  );
};
