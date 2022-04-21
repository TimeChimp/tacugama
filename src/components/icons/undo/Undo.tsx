import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Undo = ({ title = 'Undo', size = defaultIconProps.size, color = 'white' }: SVGProps) => (
  <Icon title={title} lineHeight="0">
    <svg width={size} height={size} viewBox="0 0 22 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 8.45997C21.0112 8.59936 20.9635 8.73707 20.8685 8.83968C20.7735 8.94229 20.6398 9.00042 20.5 8.99997H19C18.7443 9.00082 18.5309 8.80486 18.51 8.54997C18.22 5.72997 15.2 3.49997 11.51 3.49997C9.61657 3.46822 7.77474 4.11765 6.31999 5.32997L8.83999 7.84997C8.93765 7.94405 8.99196 8.07439 8.98999 8.20997V8.49997C8.98999 8.77611 8.76613 8.99997 8.48999 8.99997H1.48999C1.21385 8.99997 0.98999 8.77611 0.98999 8.49997V1.49997C0.989963 1.36561 1.04401 1.2369 1.13995 1.14283C1.2359 1.04877 1.36566 0.997284 1.49999 0.999971H1.78999C1.92558 0.998005 2.05591 1.05231 2.14999 1.14997L4.56999 3.56997C6.50395 1.87499 8.99871 0.959056 11.57 0.999971C16.55 0.999971 20.67 4.28997 21 8.45997Z"
        fill={color}
      />
    </svg>
  </Icon>
);