import React from 'react';
import { Avatar as BaseAvatar, AvatarProps as BaseAvatarProps } from 'baseui/avatar';
import { Theme } from 'baseui/theme';
import { DATA_TEST_ID } from '../../models';

export interface AvatarProps extends BaseAvatarProps {
  testId?: string;
}

export const Avatar = ({ testId, size, ...rest }: AvatarProps) => {
  const getFontSize = ($theme: Theme) => {
    if (size) {
      const sizeNumber = parseInt(size, 10);
      const defaultSize = parseInt($theme.sizing.scale1000, 10);

      if (sizeNumber > defaultSize) {
        return $theme.sizing.scale800;
      }
    }
    return $theme.sizing.scale550;
  };

  return (
    <BaseAvatar
      overrides={{
        Root: {
          style: ({ $theme }) => ({
            backgroundColor: $theme.colors.primary,
          }),
          props: {
            [DATA_TEST_ID]: testId,
          },
        },
        Initials: {
          style: ({ $theme }) => ({
            fontSize: getFontSize($theme),
            color: $theme.colors.primaryA,
          }),
        },
      }}
      {...rest}
      size={size}
    />
  );
};
