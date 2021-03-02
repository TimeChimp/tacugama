import React from 'react';
import { Avatar as BaseAvatar, AvatarProps as BaseAvatarProps } from 'baseui/avatar';
import { DATA_TEST_ID } from '../../models';

export interface AvatarProps extends BaseAvatarProps {
  testId?: string;
}

export const Avatar = ({ testId, ...rest }: AvatarProps) => (
  <BaseAvatar
    overrides={{
      Root: {
        style: ({ $theme }) => ({
          fontSize: $theme.sizing.scale800,
          backgroundColor: '#F6C824',
        }),
        props: {
          [DATA_TEST_ID]: testId,
        },
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
