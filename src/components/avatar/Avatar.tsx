import React from 'react';
import { Avatar as BaseAvatar, AvatarProps as BaseAvatarProps } from 'baseui/avatar';
import { AvatarType, DATA_TEST_ID } from '../../models';
import { useTheme } from '../../providers';
import { AvatarWithIcon } from './styles';
import { border } from '../../utils';

export interface AvatarProps extends BaseAvatarProps {
  testId?: string;
  icon?: JSX.Element;
  type?: AvatarType;
}

export const Avatar = ({ testId, icon, size, type, ...rest }: AvatarProps) => {
  const {
    theme: {
      current: {
        sizing: { scale400, scale500, scale800, scale1000 },
        colors: { primary, primaryA },
        customColors: { dark1, light3 },
        borders: { border300 },
      },
    },
  } = useTheme();

  const getFontSize = () => {
    if (size) {
      const sizeNumber = parseInt(size, 10);
      const defaultSize = parseInt(scale1000, 10);

      if (sizeNumber > defaultSize) {
        return scale400;
      }
    }
    return scale500;
  };

  const avatarOverrides = () => {
    switch (type) {
      case AvatarType.default:
        return {
          Root: {
            style: {
              backgroundColor: primary,
              height: scale800,
              width: scale800,
            },
            props: {
              [DATA_TEST_ID]: testId,
            },
          },
          Initials: {
            style: {
              fontSize: getFontSize(),
              color: primaryA,
            },
          },
        };
      case AvatarType.dashed:
        return {
          Root: {
            style: {
              backgroundColor: light3,
              height: scale800,
              width: scale800,
              borderRadius: '50%',
              ...border({
                ...border300,
                borderColor: dark1,
                borderStyle: 'dashed',
              }),
            },
            props: {
              [DATA_TEST_ID]: testId,
            },
          },
          Initials: {
            style: {
              fontSize: getFontSize(),
              color: dark1,
            },
          },
        };
    }
  };

  return (
    <>
      {icon ? (
        <AvatarWithIcon $type={type}>{icon}</AvatarWithIcon>
      ) : (
        <BaseAvatar overrides={avatarOverrides()} {...rest} size={size} />
      )}
    </>
  );
};
