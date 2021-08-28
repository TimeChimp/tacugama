import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon/Icon';
import { useTheme } from '../../../providers';

export const TriangleDown = ({ title = 'TriangleDown', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title}>
      <svg width={size} height={size} viewBox="0 0 6 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0.240201 0.890684C0.177097 0.829834 0.141602 0.747002 0.141602 0.660591C0.141602 0.574181 0.177097 0.491349 0.240201 0.430499L0.373534 0.300869C0.436251 0.237572 0.523144 0.202372 0.613534 0.203647H5.38687C5.47726 0.202372 5.56415 0.237572 5.62687 0.300869L5.7602 0.430499C5.82331 0.491349 5.8588 0.574181 5.8588 0.660591C5.8588 0.747002 5.82331 0.829834 5.7602 0.890684L3.23353 3.34717C3.17305 3.40983 3.08859 3.44537 3.0002 3.44537C2.91181 3.44537 2.82736 3.40983 2.76687 3.34717L0.240201 0.890684Z"
          fill={color || theme.current.colors.colorPrimary}
        />
      </svg>
    </Icon>
  );
};
