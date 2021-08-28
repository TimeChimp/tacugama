import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const CrownOutlined = ({ title = 'CrownOutlined', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.667 4.167v6.666c0 .184-.15.334-.334.334H1.667a.333.333 0 01-.334-.334V4.167c0-.184.15-.334.334-.334h.253a1 1 0 01.707.294l2.04 2.04L7.52 3.313a.5.5 0 01.353-.146h.254a.5.5 0 01.353.146l2.853 2.854 2.04-2.04a1 1 0 01.707-.294h.253c.184 0 .334.15.334.334zm0 8.666v.667c0 .184-.15.333-.334.333H1.667a.333.333 0 01-.334-.333v-.667c0-.184.15-.333.334-.333h12.666c.184 0 .334.15.334.333zM12 7.387l1.333-1.334v3.78H2.667V6.067L4 7.4c.068.064.16.095.253.087h.854a.327.327 0 00.24-.1L8.013 4.72l2.667 2.667c.063.065.15.101.24.1h.84a.327.327 0 00.24-.1z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
