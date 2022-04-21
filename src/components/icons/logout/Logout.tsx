import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Logout = ({ title = 'Logout', size = defaultIconProps.size, color = 'white' }: SVGProps) => {
  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 16H7.5C7.77614 16 8 16.2239 8 16.5V17.5C8 17.7761 7.77614 18 7.5 18H2C0.89543 18 0 17.1046 0 16V2C0 0.89543 0.89543 0 2 0H7.5C7.77614 0 8 0.223858 8 0.5V1.5C8 1.77614 7.77614 2 7.5 2H2V16ZM12.64 3.15L17.78 8.28C17.9189 8.42172 17.9977 8.61159 18 8.81V9.19C17.9998 9.38885 17.9207 9.57948 17.78 9.72L12.64 14.85C12.5461 14.9447 12.4183 14.9979 12.285 14.9979C12.1517 14.9979 12.0239 14.9447 11.93 14.85L11.22 14.15C11.1253 14.0561 11.0721 13.9283 11.0721 13.795C11.0721 13.6617 11.1253 13.5339 11.22 13.44L14.67 10H4.5C4.22386 10 4 9.77614 4 9.5V8.5C4 8.22386 4.22386 8 4.5 8H14.67L11.22 4.56C11.1259 4.46784 11.0729 4.34169 11.0729 4.21C11.0729 4.07831 11.1259 3.95216 11.22 3.86L11.93 3.15C12.0239 3.05534 12.1517 3.0021 12.285 3.0021C12.4183 3.0021 12.5461 3.05534 12.64 3.15Z"
          fill={color}
        />
      </svg>
    </Icon>
  );
};