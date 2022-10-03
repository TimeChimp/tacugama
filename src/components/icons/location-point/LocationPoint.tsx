import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const LocationPoint = ({ title = 'LocationPoint', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.666504 5.66692C0.666504 2.7214 3.05432 0.333588 5.99984 0.333588C8.94536 0.333588 11.3332 2.7214 11.3332 5.66692C11.3332 8.17122 10.1174 9.15094 8.98399 10.0643C8.24068 10.6633 7.5328 11.2337 7.2265 12.1869L6.8865 13.2136C6.79118 13.4972 6.51861 13.6825 6.21984 13.6669H5.8465C5.54774 13.6825 5.27517 13.4972 5.17984 13.2136L4.83984 12.1869C4.52128 11.2365 3.80349 10.6666 3.05146 10.0696C1.89917 9.15471 0.666504 8.17604 0.666504 5.66692ZM3.99984 5.66692C3.99984 6.77149 4.89527 7.66692 5.99984 7.66692C6.53027 7.66692 7.03898 7.45621 7.41405 7.08114C7.78912 6.70606 7.99984 6.19735 7.99984 5.66692C7.99984 4.56235 7.10441 3.66692 5.99984 3.66692C4.89527 3.66692 3.99984 4.56235 3.99984 5.66692Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
