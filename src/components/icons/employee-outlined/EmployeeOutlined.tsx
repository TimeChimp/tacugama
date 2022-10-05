import React from 'react';
import { useTheme } from '../../../providers';
import { defaultIconProps, Icon, SVGProps } from '../icon';

export const EmployeeOutlined = ({ title = 'EmployeeOutlined', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.336 3.666a3.334 3.334 0 1 1-6.667 0 3.334 3.334 0 0 1 6.667 0Zm-1.333 0a2 2 0 1 0-4.001 0 2 2 0 0 0 4 0Zm4.594 9.034-1.26-2.527a3.334 3.334 0 0 0-2.981-1.84H4.648a3.334 3.334 0 0 0-2.981 1.84L.407 12.7a.666.666 0 0 0 .593.966h12.004a.667.667 0 0 0 .593-.966ZM2.861 10.773l-.78 1.56h9.843l-.78-1.56a2 2 0 0 0-1.788-1.107H4.648a2 2 0 0 0-1.787 1.107Z"
          fill={color || theme.current.customColors.dark3}
        />
      </svg>
    </Icon>
  );
};
