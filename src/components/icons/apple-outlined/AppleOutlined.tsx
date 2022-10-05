import React from 'react';
import { useTheme } from '../../../providers';
import { defaultIconProps, Icon, SVGProps } from '../icon';

export const AppleOutlined = ({ title = 'AppleOutlined', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.593 2.7a3.542 3.542 0 0 1 2.074-.665A3.447 3.447 0 0 1 12 5.523c0 4.052-2.667 6.437-3.593 6.437-.134.027-.27.04-.407.04-.473 0-.737-.134-1-.27-.263-.134-.527-.268-1-.268s-.737.134-1 .269S4.473 12 4 12c-.137 0-.273-.013-.407-.04C2.08 11.96 0 8.678 0 5.523a3.447 3.447 0 0 1 3.333-3.488c.773.025 1.52.285 2.14.744a4.643 4.643 0 0 1 .993-2.67.327.327 0 0 1 .487 0l.46.451a.338.338 0 0 1 0 .465 3.252 3.252 0 0 0-.713 1.25 3.054 3.054 0 0 0-.107.424Zm1.574 7.931H8.3c.553-.239 2.367-1.993 2.367-5.108a2.129 2.129 0 0 0-2-2.16c-.381-.019-.756.097-1.06.326A2.954 2.954 0 0 1 6 4.214a2.954 2.954 0 0 1-1.607-.525 1.637 1.637 0 0 0-1.06-.325 2.129 2.129 0 0 0-2 2.199c0 2.584 1.62 4.929 2.287 5.108H4a.668.668 0 0 0 .393-.126A3.343 3.343 0 0 1 6 10.133a3.242 3.242 0 0 1 1.607.419c.115.08.252.122.393.12l.167-.04Z"
          fill={color || theme.current.customColors.dark3}
        />
      </svg>
    </Icon>
  );
};
