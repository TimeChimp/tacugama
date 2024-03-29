import React from 'react';
import { Skeleton } from '../../skeleton';
import { margin } from '../../../utils';
import { useTheme } from '../../../providers';

export const LoadingCellTemplate = () => {
  const {
    theme: {
      current: {
        sizing: { scale300, scale600, scale800 },
      },
    },
  } = useTheme();
  return (
    <Skeleton
      overrides={{
        Root: {
          props: { role: 'status', 'aria-label': 'loading...', 'aria-busy': true },
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'fill-available',
            height: scale800,
            ...margin(scale300, scale600),
          },
        },
      }}
      animation
    />
  );
};
