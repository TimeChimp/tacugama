import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const FormatPoints = ({ title = 'FormatPoints', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 0H0.5C0.223858 0 0 0.223858 0 0.5V1.5C0 1.77614 0.223858 2 0.5 2H1.5C1.77614 2 2 1.77614 2 1.5V0.5C2 0.223858 1.77614 0 1.5 0ZM4.5 0H17.5C17.7761 0 18 0.223858 18 0.5V1.5C18 1.77614 17.7761 2 17.5 2H4.5C4.22386 2 4 1.77614 4 1.5V0.5C4 0.223858 4.22386 0 4.5 0ZM0 6.5V7.5C0 7.77614 0.223858 8 0.5 8H1.5C1.77614 8 2 7.77614 2 7.5V6.5C2 6.22386 1.77614 6 1.5 6H0.5C0.223858 6 0 6.22386 0 6.5ZM4.5 6H17.5C17.7761 6 18 6.22386 18 6.5V7.5C18 7.77614 17.7761 8 17.5 8H4.5C4.22386 8 4 7.77614 4 7.5V6.5C4 6.22386 4.22386 6 4.5 6ZM0 12.5V13.5C0 13.7761 0.223858 14 0.5 14H1.5C1.77614 14 2 13.7761 2 13.5V12.5C2 12.2239 1.77614 12 1.5 12H0.5C0.223858 12 0 12.2239 0 12.5ZM4.5 12H17.5C17.7761 12 18 12.2239 18 12.5V13.5C18 13.7761 17.7761 14 17.5 14H4.5C4.22386 14 4 13.7761 4 13.5V12.5C4 12.2239 4.22386 12 4.5 12Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
