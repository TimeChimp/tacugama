import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const TrashFull = ({ title = 'TrashFull', size = defaultIconProps.size }: SVGProps) => (
  <Icon title={title} lineHeight="0">
    <svg width={size} height={size} viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3.5V2.5C16 2.22386 15.7761 2 15.5 2H11V1C11 0.447715 10.5523 0 10 0H6C5.44772 0 5 0.447715 5 1V2H0.5C0.223858 2 0 2.22386 0 2.5V3.5C0 3.77614 0.223858 4 0.5 4H15.5C15.7761 4 16 3.77614 16 3.5ZM3.87 20C2.81787 20.0026 1.94365 19.1896 1.87 18.14L1 6H15L14.15 18.14C14.0764 19.1896 13.2021 20.0026 12.15 20H3.87Z"
        fill="white"
      />
    </svg>
  </Icon>
);
