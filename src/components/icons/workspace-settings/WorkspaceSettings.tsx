import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';

export const WorkspaceSettings = ({ title = 'WorkspaceSettings', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();
  return (
    <Icon title={title} lineHeight="0">
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.8334 10.7285L15.5 11.2796C15.8163 11.5366 15.9009 11.985 15.7 12.34L14.7334 14.01C14.5335 14.3352 14.1388 14.4831 13.775 14.369L12.9417 14.0684C12.4499 13.8843 11.9003 13.9431 11.4584 14.2271C11.2625 14.3627 11.0563 14.4828 10.8417 14.5861C10.3728 14.8271 10.0452 15.2761 9.95836 15.7969L9.81669 16.6319C9.75067 17.0402 9.39618 17.3386 8.98336 17.3333H7.06669C6.65386 17.3386 6.29938 17.0402 6.23336 16.6319L6.09169 15.7969C6.00484 15.2761 5.67728 14.8271 5.20836 14.5861C4.99378 14.4828 4.78759 14.3627 4.59169 14.2271C4.14978 13.9431 3.60014 13.8843 3.10836 14.0684L2.27503 14.369C1.89649 14.51 1.47159 14.3587 1.26669 14.01L0.300025 12.34C0.0991297 11.985 0.183709 11.5366 0.500025 11.2796L1.16669 10.7285C1.5709 10.3923 1.79325 9.88477 1.76669 9.35907V9.00002V8.64097C1.79325 8.11527 1.5709 7.60779 1.16669 7.27158L0.500025 6.72048C0.183709 6.46345 0.0991297 6.015 0.300025 5.66004L1.26669 3.99004C1.47005 3.64939 1.88465 3.49928 2.25836 3.63099L3.09169 3.93159C3.58348 4.11576 4.13312 4.05697 4.57503 3.77294C4.77092 3.63734 4.97711 3.51729 5.19169 3.4139C5.64781 3.16505 5.9621 2.71739 6.04169 2.20315L6.18336 1.36815C6.24938 0.959793 6.60386 0.661433 7.01669 0.666757H8.93336C9.34618 0.661433 9.70067 0.959793 9.76669 1.36815L9.90836 2.20315C9.99521 2.72397 10.3228 3.17294 10.7917 3.4139C11.0063 3.51729 11.2125 3.63734 11.4084 3.77294C11.8503 4.05697 12.3999 4.11576 12.8917 3.93159L13.725 3.63099C14.1036 3.49007 14.5285 3.64137 14.7334 3.99004L15.7 5.66004C15.9009 6.015 15.8163 6.46345 15.5 6.72048L14.8334 7.27158C14.4291 7.60779 14.2068 8.11527 14.2334 8.64097V9.00002V9.35907C14.2068 9.88477 14.4291 10.3923 14.8334 10.7285ZM5.50003 9.00002C5.50003 10.3835 6.61931 11.505 8.00003 11.505C8.66307 11.505 9.29895 11.2411 9.76779 10.7713C10.2366 10.3015 10.5 9.66438 10.5 9.00002C10.5 7.61655 9.38074 6.49503 8.00003 6.49503C6.61931 6.49503 5.50003 7.61655 5.50003 9.00002Z"
          fill={color || theme.current.customColors.brand700}
        />
      </svg>
    </Icon>
  );
};
