import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const LeftArrow = ({ title = 'LeftArrow', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.47998 4.48006C0.386185 4.38639 0.33343 4.25929 0.333313 4.12673V3.8734C0.334849 3.74112 0.38739 3.61455 0.47998 3.52006L3.90665 0.100064C3.96923 0.0369601 4.05443 0.00146484 4.14331 0.00146484C4.23219 0.00146484 4.31739 0.0369601 4.37998 0.100064L4.85331 0.573398C4.91602 0.63484 4.95136 0.718938 4.95136 0.806731C4.95136 0.894524 4.91602 0.978622 4.85331 1.04006L1.88665 4.00006L4.85331 6.96007C4.91642 7.02265 4.95191 7.10785 4.95191 7.19673C4.95191 7.28561 4.91642 7.37081 4.85331 7.4334L4.37998 7.90007C4.31739 7.96317 4.23219 7.99866 4.14331 7.99866C4.05443 7.99866 3.96923 7.96317 3.90665 7.90007L0.47998 4.48006Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
