import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const TaFilter = ({ title = 'TaFilter', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.66667 7.22C4.66695 6.86464 4.52536 6.52386 4.27333 6.27333L0.393334 2.39333C0.141308 2.1428 -0.000281165 1.80203 4.19197e-07 1.44667V0.666667C4.19197e-07 0.298477 0.298477 0 0.666667 0H11.3333C11.7015 0 12 0.298477 12 0.666667V1.44667C12.0003 1.80203 11.8587 2.1428 11.6067 2.39333L7.72667 6.27333C7.47464 6.52386 7.33305 6.86464 7.33333 7.22V9.66667C7.33333 10.0863 7.13574 10.4815 6.8 10.7333L5.2 11.9333C5.09899 12.0091 4.96386 12.0213 4.85093 11.9648C4.738 11.9083 4.66667 11.7929 4.66667 11.6667V7.22Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
