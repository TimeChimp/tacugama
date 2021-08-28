import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const SwapHorizontal = ({
  title = 'Swap',
  color = defaultIconProps.color,
  size = defaultIconProps.size,
}: SVGProps) => {
  return (
    <Icon title={title}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
        <path
          fill={color}
          d="M21.86 9.36l-3 3A.5.5 0 0118 12v-2h-7.5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H18V6a.5.5 0 01.85-.36l3 3a.51.51 0 01.01.72zM13.5 14H6v-2a.5.5 0 00-.85-.36l-3 3a.51.51 0 000 .71l3 3A.5.5 0 006 18v-2h7.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5z"
        />
      </svg>
    </Icon>
  );
};
