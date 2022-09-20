import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Star = ({ title = 'Star', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();
  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M.468 5.57a.326.326 0 0 1-.12-.36L.4 5.043a.326.326 0 0 1 .293-.233l4.256-.34L6.582.547a.34.34 0 0 1 .34-.213h.173a.326.326 0 0 1 .313.213L9.046 4.47l4.256.34a.326.326 0 0 1 .293.233l.053.167a.326.326 0 0 1-.1.36l-3.21 2.757.986 4.136a.34.34 0 0 1-.127.353l-.193.107a.333.333 0 0 1-.373 0l-3.623-2.198-3.643 2.218a.333.333 0 0 1-.373 0l-.147-.1a.34.34 0 0 1-.126-.353l.959-4.163L.468 5.57Z"
          fill={color || theme.current.colors.primary}
        />
      </svg>
    </Icon>
  );
};
