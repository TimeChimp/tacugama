import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const RightArrow = ({ title = 'RightArrow', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.52003 3.52006C4.61382 3.61374 4.66658 3.74083 4.6667 3.8734V4.12673C4.66516 4.25901 4.61262 4.38558 4.52003 4.48006L1.09336 7.90007C1.03077 7.96317 0.945574 7.99866 0.856695 7.99866C0.767816 7.99866 0.682617 7.96317 0.620028 7.90007L0.146695 7.42673C0.0839858 7.36529 0.0486475 7.28119 0.0486475 7.1934C0.0486475 7.10561 0.0839858 7.02151 0.146695 6.96007L3.11336 4.00006L0.146695 1.04006C0.0835909 0.977476 0.0480957 0.892277 0.0480957 0.803398C0.0480957 0.714519 0.0835909 0.62932 0.146695 0.566731L0.620028 0.100064C0.682617 0.0369601 0.767816 0.00146484 0.856695 0.00146484C0.945574 0.00146484 1.03077 0.0369601 1.09336 0.100064L4.52003 3.52006Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
