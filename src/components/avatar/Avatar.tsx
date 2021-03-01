import React from 'react';
import { Avatar as BaseAvatar, AvatarProps } from 'baseui/avatar';

export type { AvatarProps } from 'baseui/avatar';

export const Avatar = ({ ...rest }: AvatarProps) => (
  <BaseAvatar
    overrides={{
      Root: {
        style: ({ $theme }) => ({
          fontSize: $theme.sizing.scale800,
          backgroundColor: '#F6C824',
        }),
      },
      Initials: {
        style: ({ $theme }) => ({
          color: $theme.colors.primaryA,
        }),
      },
    }}
    {...rest}
  />
);
