import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const Calendar = ({ title = 'Calendar', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2H15V0.5C15 0.223858 14.7761 0 14.5 0H13.5C13.2239 0 13 0.223858 13 0.5V2H5V0.5C5 0.223858 4.77614 0 4.5 0H3.5C3.22386 0 3 0.223858 3 0.5V2H2C0.89543 2 0 2.89543 0 4V17C0 18.1046 0.89543 19 2 19H16C17.1046 19 18 18.1046 18 17V4C18 2.89543 17.1046 2 16 2ZM16 17H2V6H16V17ZM9.5 10H8.5C8.22386 10 8 9.77614 8 9.5V8.5C8 8.22386 8.22386 8 8.5 8H9.5C9.77614 8 10 8.22386 10 8.5V9.5C10 9.77614 9.77614 10 9.5 10ZM13.5 10C13.7761 10 14 9.77614 14 9.5V8.5C14 8.22386 13.7761 8 13.5 8H12.5C12.2239 8 12 8.22386 12 8.5V9.5C12 9.77614 12.2239 10 12.5 10H13.5ZM6 9.5C6 9.77614 5.77614 10 5.5 10H4.5C4.22386 10 4 9.77614 4 9.5V8.5C4 8.22386 4.22386 8 4.5 8H5.5C5.77614 8 6 8.22386 6 8.5V9.5ZM8.5 14H9.5C9.77614 14 10 13.7761 10 13.5V12.5C10 12.2239 9.77614 12 9.5 12H8.5C8.22386 12 8 12.2239 8 12.5V13.5C8 13.7761 8.22386 14 8.5 14ZM6 13.5C6 13.7761 5.77614 14 5.5 14H4.5C4.22386 14 4 13.7761 4 13.5V12.5C4 12.2239 4.22386 12 4.5 12H5.5C5.77614 12 6 12.2239 6 12.5V13.5Z"
          fill={color || theme.current.colors.contentTertiary}
        />
      </svg>
    </Icon>
  );
};
