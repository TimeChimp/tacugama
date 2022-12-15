import { DEFAULT_ICON_SIZE } from '../.././../models';
import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps } from '../../icon';

export const SearchIcon = ({ title = 'Search', size = DEFAULT_ICON_SIZE, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.25 10.3036L13.9167 12.9735C14.0358 13.106 14.0299 13.3087 13.9033 13.4341L13.4367 13.9013C13.3741 13.9645 13.2889 14 13.2 14C13.1111 14 13.0259 13.9645 12.9633 13.9013L10.2967 11.2314C10.2229 11.1575 10.156 11.0771 10.0967 10.9911L9.59666 10.3236C8.76937 10.9851 7.74203 11.3452 6.68333 11.3449C4.50174 11.3525 2.60601 9.84573 2.11849 7.71674C1.63096 5.58774 2.68174 3.40466 4.64873 2.45994C6.61573 1.51523 8.97398 2.06101 10.3273 3.77417C11.6807 5.48732 11.6679 7.91064 10.2967 9.60945L10.9633 10.07C11.0674 10.1367 11.1636 10.2151 11.25 10.3036ZM3.34961 6.67256C3.34961 8.51572 4.84199 10.0099 6.68294 10.0099C7.567 10.0099 8.41484 9.65829 9.03997 9.03242C9.66509 8.40655 10.0163 7.55768 10.0163 6.67256C10.0163 4.82939 8.52389 3.33521 6.68294 3.33521C4.84199 3.33521 3.34961 4.82939 3.34961 6.67256Z"
          fill={color || theme.current.customColors.dark1}
        />
      </svg>
    </Icon>
  );
};
