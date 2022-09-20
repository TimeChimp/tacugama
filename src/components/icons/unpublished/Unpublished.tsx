import React from 'react';
import { useTheme } from '../../../providers';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const Unpublished = ({ title = 'Unpublished', size = defaultIconProps.size, color }: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.25919 5.3137C1.1708 5.31498 1.08582 5.27957 1.02449 5.2159L0.894098 5.08551C0.832387 5.02431 0.797675 4.94099 0.797675 4.85407C0.797675 4.76715 0.832387 4.68383 0.894098 4.62263L4.66892 0.847807C4.72807 0.784778 4.81066 0.749023 4.8971 0.749023C4.98354 0.749023 5.06613 0.784778 5.12529 0.847807L8.90011 4.62263C8.96182 4.68383 8.99653 4.76715 8.99653 4.85407C8.99653 4.94099 8.96182 5.02431 8.90011 5.08551L8.76971 5.2159C8.70838 5.27957 8.62341 5.31498 8.53501 5.3137H6.85297V8.89945C6.85297 9.07948 6.70702 9.22543 6.52699 9.22543H3.26721C3.08718 9.22543 2.94124 9.07948 2.94124 8.89945V5.3137H1.25919ZM9.46074 11.5073V10.8553C9.46074 10.6753 9.3148 10.5293 9.13477 10.5293H0.659351C0.479319 10.5293 0.333374 10.6753 0.333374 10.8553V11.5073C0.333374 11.6873 0.479319 11.8333 0.659351 11.8333H9.13477C9.3148 11.8333 9.46074 11.6873 9.46074 11.5073Z"
          fill={color || theme.current.customColors.purple2}
        />
      </svg>
    </Icon>
  );
};
