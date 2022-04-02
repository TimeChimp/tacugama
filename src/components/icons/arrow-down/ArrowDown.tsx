import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../icon/Icon';

export const ArrowDown = ({ title = 'Archive', size = '12', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.239957 1.37369C0.176853 1.3111 0.141357 1.22591 0.141357 1.13703C0.141357 1.04815 0.176853 0.962949 0.239957 0.90036L0.37329 0.767027C0.436007 0.701921 0.5229 0.665716 0.61329 0.667027H5.38662C5.47701 0.665716 5.56391 0.701921 5.62662 0.767027L5.75996 0.90036C5.82306 0.962949 5.85856 1.04815 5.85856 1.13703C5.85856 1.22591 5.82306 1.3111 5.75996 1.37369L3.23329 3.90036C3.1728 3.96481 3.08835 4.00137 2.99996 4.00137C2.91157 4.00137 2.82711 3.96481 2.76662 3.90036L0.239957 1.37369Z"
          fill={color || theme.current.colors.contentTertiary}
        />
      </svg>
    </Icon>
  );
};
