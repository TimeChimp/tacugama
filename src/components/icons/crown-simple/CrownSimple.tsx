import { DEFAULT_ICON_SIZE } from '../../../models';
import React from 'react';
import { Icon, SVGProps } from '../../icon';

export const CrownSimple = ({ title = 'CrownSimple', size = DEFAULT_ICON_SIZE, color }: SVGProps) => (
  <Icon title={title}>
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'currentColor'}
        d="m19.326 6.965-2.89 8.854a.626.626 0 0 1-.915.343C15.503 16.15 13.505 15 9.999 15c-3.507 0-5.504 1.15-5.524 1.163a.624.624 0 0 1-.912-.344L.673 6.963A.946.946 0 0 1 1.995 5.82l3.921 1.953L9.19 2.331a.946.946 0 0 1 1.62 0l3.275 5.442 3.923-1.953a.945.945 0 0 1 1.318 1.146v-.001Z"
      />
    </svg>
  </Icon>
);
