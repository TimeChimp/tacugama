import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const Plane = ({ title = 'Plane', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m15.293 1.907-.186.513a2.666 2.666 0 0 1-.62.98l-2.88 2.88 1.367 6.82c.006.084.006.169 0 .253a1.26 1.26 0 0 1-.38.907l-.114.113a.293.293 0 0 1-.226.094.32.32 0 0 1-.274-.154L9.213 8.667l-2.766 2.3.293 3.466a.667.667 0 0 1-.187.454l-.353.353a.32.32 0 0 1-.513-.087l-1.614-3.226-3.226-1.614A.32.32 0 0 1 .76 9.8l.353-.353a.667.667 0 0 1 .454-.187l3.42.287 2.346-2.76L1.687 4a.32.32 0 0 1-.154-.273.293.293 0 0 1 .094-.227l.113-.113A1.26 1.26 0 0 1 2.667 3a1.72 1.72 0 0 1 .253 0l6.8 1.393 2.88-2.88c.277-.276.612-.487.98-.62l.514-.186a.667.667 0 0 1 .7.153l.346.347a.667.667 0 0 1 .153.7Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
