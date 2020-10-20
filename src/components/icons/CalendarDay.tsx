import { useTheme } from '../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const CalendarDay = ({ title = 'CalendarDay', size = defaultIconProps.size }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4H6V2.5C6 2.22386 6.22386 2 6.5 2H7.5C7.77614 2 8 2.22386 8 2.5V4H16V2.5C16 2.22386 16.2239 2 16.5 2H17.5C17.7761 2 18 2.22386 18 2.5V4ZM5 19H19V8H5V19Z"
          fill={theme.current.colors.primary300}
        />
        <path d="M10.7305 10.6797H12.9492V16H11.5195V11.8867H10.7305V10.6797Z" fill={theme.current.colors.primary300} />
      </svg>
    </Icon>
  );
};
