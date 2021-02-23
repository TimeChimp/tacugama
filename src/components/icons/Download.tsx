import { useTheme } from '../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const Download = ({ title = 'Download', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.99984 11.3346C5.88935 11.3346 5.78378 11.2889 5.70817 11.2083L0.883171 6.38333C0.804291 6.3051 0.759922 6.1986 0.759922 6.0875C0.759922 5.9764 0.804291 5.8699 0.883171 5.79167L1.04984 5.625C1.12823 5.54362 1.23685 5.49836 1.34984 5.5H3.49984V0.916667C3.49984 0.686548 3.68639 0.5 3.9165 0.5H8.08317C8.31329 0.5 8.49984 0.686548 8.49984 0.916667V5.5H10.6498C10.7628 5.49836 10.8714 5.54362 10.9498 5.625L11.1165 5.79167C11.1954 5.8699 11.2398 5.9764 11.2398 6.0875C11.2398 6.1986 11.1954 6.3051 11.1165 6.38333L6.2915 11.2083C6.21589 11.2889 6.11033 11.3346 5.99984 11.3346ZM11.8332 14.25V13.4167C11.8332 13.1865 11.6466 13 11.4165 13H0.583171C0.353052 13 0.166504 13.1865 0.166504 13.4167V14.25C0.166504 14.4801 0.353052 14.6667 0.583171 14.6667H11.4165C11.6466 14.6667 11.8332 14.4801 11.8332 14.25Z" 
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
