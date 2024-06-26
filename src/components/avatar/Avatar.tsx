import React from 'react';
import { Avatar as BaseAvatar, AvatarProps as BaseAvatarProps } from 'baseui/avatar';
import { AvatarType, DATA_TEST_ID } from '../../models';
import { useTheme } from '../../providers';
import { AvatarWithIcon } from './styles';
import { border, borderRadius } from '../../utils';

export interface AvatarProps extends BaseAvatarProps {
  testId?: string;
  icon?: JSX.Element;
  type?: AvatarType;
  backgroundColor?: string;
  borderColor?: string;
  color?: string;
  height?: string;
  filter?: string;
}

export const Avatar = ({
  testId,
  icon,
  height,
  type = AvatarType.default,
  backgroundColor,
  borderColor,
  size,
  color,
  filter,
  ...rest
}: AvatarProps) => {
  const {
    theme: {
      current: {
        sizing: { scale400, scale500, scale800, scale1000 },
        colors: { primary },
        customColors: { dark1, light3, light4 },
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
              backgroundColor: backgroundColor ?? primary,
              height: height ?? scale800,
              width: height ?? scale800,
              filter: filter,
            },
            props: {
              [DATA_TEST_ID]: testId,
            },
          },
          Initials: {
            style: {
              fontSize: getFontSize(),
              color: color ?? light4,
              width: size,
            },
          },
        };
      case AvatarType.dashed:
        return {
          Root: {
            style: {
              backgroundColor: backgroundColor ?? light3,
              height: height ?? scale800,
              width: height ?? scale800,
              filter: filter,
              ...borderRadius('50%'),
              ...border({
                ...border300,
                borderColor: borderColor ?? dark1,
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
              color: color ?? dark1,
              width: size,
            },
          },
        };
    }
  };

  return (
    <>
      {icon ? (
        <AvatarWithIcon $type={type} $height={height} $backgroundColor={backgroundColor} $borderColor={borderColor}>
          {icon}
        </AvatarWithIcon>
      ) : (
        <BaseAvatar overrides={avatarOverrides()} {...rest} size={size} />
      )}
    </>
  );
};
