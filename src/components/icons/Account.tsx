import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps } from './Icon';

export const Account = ({ title = 'Account', size = '10', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.3372 3.66659C10.3372 5.50753 8.84425 6.99992 7.0026 6.99992C5.16096 6.99992 3.66801 5.50753 3.66801 3.66659C3.66801 1.82564 5.16096 0.333252 7.0026 0.333252C8.84425 0.333252 10.3372 1.82564 10.3372 3.66659ZM8.6699 3.66658C8.6699 2.74611 7.92343 1.99992 7.0026 1.99992C6.08178 1.99992 5.33531 2.74611 5.33531 3.66658C5.33531 4.58706 6.08178 5.33325 7.0026 5.33325C7.92343 5.33325 8.6699 4.58706 8.6699 3.66658ZM13.5801 12.4583L12.0045 9.21659C11.5737 8.35367 10.6849 7.81537 9.7203 7.83325H4.28491C3.3353 7.83139 2.46655 8.36729 2.04239 9.21659L0.425117 12.4583C0.295093 12.7162 0.307951 13.023 0.459099 13.2692C0.610246 13.5153 0.878127 13.6657 1.16706 13.6666H12.8381C13.1271 13.6657 13.395 13.5153 13.5461 13.2692C13.6973 13.023 13.7101 12.7162 13.5801 12.4583ZM3.53463 9.95825L2.51758 11.9999H11.4876L10.4706 9.95825C10.328 9.67533 10.0372 9.49771 9.7203 9.49992H4.28491C3.96799 9.49771 3.67724 9.67533 3.53463 9.95825Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
