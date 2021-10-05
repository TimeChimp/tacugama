import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps } from './Icon';

export const CheckMark = ({ title = 'CheckMark', size = '12', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.333333 7.49998C0.333333 3.81808 3.3181 0.833313 7 0.833313C8.76811 0.833313 10.4638 1.53569 11.714 2.78593C12.9643 4.03618 13.6667 5.73187 13.6667 7.49998C13.6667 11.1819 10.6819 14.1666 7 14.1666C3.3181 14.1666 0.333333 11.1819 0.333333 7.49998ZM6.15333 9.73331L9.9 5.98665C10.0228 5.85788 10.0228 5.65541 9.9 5.52665L9.54667 5.17331C9.41705 5.04627 9.20962 5.04627 9.08 5.17331L5.92 8.33331L4.92 7.33998C4.85951 7.27553 4.77506 7.23897 4.68667 7.23897C4.59828 7.23897 4.51382 7.27553 4.45333 7.33998L4.1 7.69331C4.0369 7.7559 4.0014 7.8411 4.0014 7.92998C4.0014 8.01886 4.0369 8.10406 4.1 8.16665L5.68667 9.73331C5.74716 9.79777 5.83161 9.83433 5.92 9.83433C6.00839 9.83433 6.09284 9.79777 6.15333 9.73331Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
