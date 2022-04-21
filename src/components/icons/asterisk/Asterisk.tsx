import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Asterisk = ({ title = 'Asterisk', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3.63707 8.63636H5.36293L5.20668 5.75994L7.62145 7.34375L8.48793 5.83807L5.9027 4.54545L8.48793 3.25284L7.62145 1.74716L5.20668 3.33097L5.36293 0.454545H3.63707L3.80043 3.33097L1.38565 1.74716L0.519176 3.25284L3.0973 4.54545L0.519176 5.83807L1.38565 7.34375L3.80043 5.75994L3.63707 8.63636Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
