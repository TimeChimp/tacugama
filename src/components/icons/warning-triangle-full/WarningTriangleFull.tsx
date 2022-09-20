import { useTheme } from '../../../providers';
import React from 'react';
import { Icon, SVGProps, defaultIconProps } from '../icon';

export const WarningTriangleFull = ({
  title = 'WarningTriangleFull',
  size = defaultIconProps.size,
  color = 'black',
}: SVGProps) => {
  const { theme } = useTheme();

  return (
    <Icon title={title} lineHeight="0">
      <svg width={size} height={size} viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21.9052 17.63L11.8128 0.37C11.676 0.141211 11.4293 0.0008087 11.1627 0H10.8626C10.596 0.0008087 10.3493 0.141211 10.2124 0.37L0.100044 17.63C-0.0298486 17.8667 -0.0298486 18.1533 0.100044 18.39L0.240077 18.62C0.369699 18.8573 0.619853 19.0035 0.890231 19H21.115C21.3854 19.0035 21.6356 18.8573 21.7652 18.62L21.9052 18.39C22.0351 18.1533 22.0351 17.8667 21.9052 17.63ZM12.0029 14.5C12.0029 14.7761 11.779 15 11.5027 15H10.5025C10.2263 15 10.0024 14.7761 10.0024 14.5V13.5C10.0024 13.2239 10.2263 13 10.5025 13H11.5027C11.779 13 12.0029 13.2239 12.0029 13.5V14.5ZM11.5327 11C11.6599 11.0009 11.7675 10.9062 11.7828 10.78L12.1829 7.56C12.2002 7.41735 12.1552 7.27417 12.0595 7.16698C11.9637 7.05979 11.8265 6.99896 11.6828 7H10.3225C10.1787 6.99896 10.0415 7.05979 9.94579 7.16698C9.85007 7.27417 9.80509 7.41735 9.82234 7.56L10.2224 10.78C10.2377 10.9062 10.3453 11.0009 10.4725 11H11.5327Z"
          fill={color || theme.current.colors.contentPrimary}
        />
      </svg>
    </Icon>
  );
};
