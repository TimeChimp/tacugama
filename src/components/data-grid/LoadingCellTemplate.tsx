import React from 'react';
import { Skeleton } from '../skeleton';
import { margin } from '../../utils';
import { useTheme } from '../../providers';

export const LoadingCellTemplate = () => {
  const {
    theme: {
      current: {
        sizing: { scale400, scale600, scale900 },
      },
    },
  } = useTheme();
  return (
    <Skeleton
      overrides={{
        Root: {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: 'fill-available',
            height: scale900,
            ...margin(scale400, scale600),
          },
        },
      }}
      animation
    />
  );
};
