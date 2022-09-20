import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const LocationMarker = ({
  title = 'Location-marker',
  size = defaultIconProps.size,
  color = '#0F1020',
}: SVGProps) => (
  <Icon title={title} lineHeight="0">
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
    >
      <path
        d="M257.13,125.11c40.21,0,72.52,30.23,72.52,70.43,0,38.59-32.31,70.76-72.52,70.76-40.52,0-72.85-32.17-72.85-70.76,0-40.2,32.33-70.43,72.85-70.43Zm181.54,52.42C438.67,78.79,358,0,257.13,0c-101,0-183.8,78.79-183.8,177.53,0,4.18,0,10.3,2.09,14.15H73.33c0,96.81,183.8,320.32,183.8,320.32S438.67,288.49,438.67,191.68h0V177.53Z"
        fill={color}
        fill-rule="evenodd"
      />
    </svg>
  </Icon>
);