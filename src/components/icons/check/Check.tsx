import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Check = ({ title = 'Check', size = defaultIconProps.size, color = 'black' }: SVGProps) => {
  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.85 2.24999L6.24997 12.85C6.15609 12.9447 6.02829 12.9979 5.89497 12.9979C5.76166 12.9979 5.63386 12.9447 5.53997 12.85L0.149974 7.45999C0.055318 7.36611 0.0020752 7.23831 0.0020752 7.10499C0.0020752 6.97168 0.055318 6.84388 0.149974 6.74999L0.849974 6.04999C0.943858 5.95534 1.07166 5.9021 1.20497 5.9021C1.33829 5.9021 1.46609 5.95534 1.55997 6.04999L5.88997 10.38L15.44 0.829995C15.6378 0.638211 15.9522 0.638211 16.15 0.829995L16.85 1.53999C16.9446 1.63388 16.9979 1.76168 16.9979 1.89499C16.9979 2.02831 16.9446 2.15611 16.85 2.24999Z"
          fill={color}
        />
      </svg>
    </Icon>
  );
};
