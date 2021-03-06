import { useTheme } from '../../providers';
import React from 'react';
import { Icon, SVGProps } from './Icon';

export const BottomArrow = ({ title = 'BottomArrow', size = '10', color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.48 4.52003C4.38633 4.61382 4.25923 4.66658 4.12667 4.6667H3.87334C3.74106 4.66516 3.61448 4.61262 3.52 4.52003L0.100003 1.09336C0.036899 1.03077 0.00140381 0.945574 0.00140381 0.856695C0.00140381 0.767816 0.036899 0.682617 0.100003 0.620028L0.573337 0.146695C0.634779 0.0839858 0.718877 0.0486475 0.80667 0.0486475C0.894463 0.0486475 0.978561 0.0839858 1.04 0.146695L4 3.11336L6.96 0.146695C7.02259 0.0835909 7.10779 0.0480957 7.19667 0.0480957C7.28555 0.0480957 7.37075 0.0835909 7.43334 0.146695L7.9 0.620028C7.96311 0.682617 7.9986 0.767816 7.9986 0.856695C7.9986 0.945574 7.96311 1.03077 7.9 1.09336L4.48 4.52003Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
