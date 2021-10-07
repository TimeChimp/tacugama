import React from 'react';
import { useTheme } from '../../providers';
import { Icon, SVGProps, defaultIconProps } from './Icon';

export const Approve = ({ title = 'Approve', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();
  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.00004 0.833252C3.31814 0.833252 0.333374 3.81802 0.333374 7.49992C0.333374 11.1818 3.31814 14.1666 7.00004 14.1666C10.6819 14.1666 13.6667 11.1818 13.6667 7.49992C13.6667 5.73181 12.9643 4.03612 11.7141 2.78587C10.4638 1.53563 8.76815 0.833252 7.00004 0.833252ZM7.00004 12.8333C4.05452 12.8333 1.66671 10.4454 1.66671 7.49992C1.66671 4.5544 4.05452 2.16659 7.00004 2.16659C9.94556 2.16659 12.3334 4.5544 12.3334 7.49992C12.3334 8.91441 11.7715 10.271 10.7713 11.2712C9.77108 12.2713 8.41453 12.8333 7.00004 12.8333ZM9.08004 5.15992C9.20965 5.03287 9.41709 5.03287 9.54671 5.15992L9.88004 5.51325C9.94314 5.57584 9.97864 5.66104 9.97864 5.74992C9.97864 5.8388 9.94314 5.924 9.88004 5.98659L6.13337 9.73325C6.07289 9.7977 5.98843 9.83427 5.90004 9.83427C5.81165 9.83427 5.7272 9.7977 5.66671 9.73325L4.10004 8.15325C4.03694 8.09066 4.00144 8.00547 4.00144 7.91659C4.00144 7.82771 4.03694 7.74251 4.10004 7.67992L4.45337 7.32659C4.51386 7.26213 4.59832 7.22557 4.68671 7.22557C4.7751 7.22557 4.85955 7.26213 4.92004 7.32659L5.92004 8.31992L9.08004 5.15992Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
