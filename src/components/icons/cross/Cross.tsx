import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Cross = ({ title = 'Cross', size = defaultIconProps.size, color = 'black' }: SVGProps) => {
  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11.85 10.44C11.9446 10.5339 11.9979 10.6617 11.9979 10.795C11.9979 10.9283 11.9446 11.0561 11.85 11.15L11.15 11.85C11.0561 11.9447 10.9283 11.9979 10.795 11.9979C10.6617 11.9979 10.5339 11.9447 10.44 11.85L5.99997 7.41001L1.55997 11.85C1.46609 11.9447 1.33829 11.9979 1.20497 11.9979C1.07166 11.9979 0.943858 11.9447 0.849974 11.85L0.149974 11.15C0.055318 11.0561 0.0020752 10.9283 0.0020752 10.795C0.0020752 10.6617 0.055318 10.5339 0.149974 10.44L4.58997 6L0.149974 1.56C0.055318 1.46612 0.0020752 1.33832 0.0020752 1.205C0.0020752 1.07169 0.055318 0.943888 0.149974 0.850005L0.849974 0.150005C0.943858 0.0553486 1.07166 0.00210571 1.20497 0.00210571C1.33829 0.00210571 1.46609 0.0553486 1.55997 0.150005L5.99997 4.59L10.44 0.150005C10.5339 0.0553486 10.6617 0.00210571 10.795 0.00210571C10.9283 0.00210571 11.0561 0.0553486 11.15 0.150005L11.85 0.850005C11.9446 0.943888 11.9979 1.07169 11.9979 1.205C11.9979 1.33832 11.9446 1.46612 11.85 1.56L7.40997 6L11.85 10.44Z"
          fill={color}
        />
      </svg>
    </Icon>
  );
};
