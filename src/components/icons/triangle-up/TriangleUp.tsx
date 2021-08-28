import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';
import { useTheme } from '../../../providers';

export const TriangleUp = ({ title = 'TriangleUp', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.76 3.38696C5.82311 3.44781 5.8586 3.53065 5.8586 3.61706C5.8586 3.70347 5.82311 3.7863 5.76 3.84715L5.62667 3.97678C5.56395 4.04008 5.47706 4.07528 5.38667 4.074H0.613336C0.522945 4.07528 0.436053 4.04008 0.373336 3.97678L0.240003 3.84715C0.176898 3.7863 0.141403 3.70347 0.141403 3.61706C0.141403 3.53065 0.176898 3.44781 0.240003 3.38696L2.76667 0.930482C2.82716 0.867821 2.91161 0.832275 3 0.832275C3.08839 0.832275 3.17285 0.867821 3.23334 0.930482L5.76 3.38696Z"
          fill={color || theme.current.colors.colorPrimary}
        />
      </svg>
    </Icon>
  );
};
