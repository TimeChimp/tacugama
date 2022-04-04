import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Loader = ({ title = 'Loader', size = defaultIconProps.size, color = '#FFFFFF' }: SVGProps) => {
  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          cx="12"
          cy="12"
          r="10"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeDasharray="73"
          strokeDashoffset="20"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            dur="1s"
            from="0 12 12"
            to="360 12 12"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </Icon>
  );
};
