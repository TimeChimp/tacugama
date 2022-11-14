import React, { ReactNode } from 'react';
import { Tag as TagComponent, TagProps as TagComponentProps } from 'baseui/tag';
import { useTheme } from '../../providers';
import { border, borderRadius, margin, padding } from '../../utils';

export enum TagSize {
  small = 'small',
  large = 'large',
}

export interface TagProps extends TagComponentProps {
  value?: string;
  children?: ReactNode;
  size?: TagSize;
  closeable?: boolean;
  cursor?: string;
}

export const Tag = ({ value, size = TagSize.small, closeable = false, cursor = 'default', ...rest }: TagProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale100, scale200, scale300, scale400, scale500, scale550, scale700 },
        borders: { border300 },
        customColors: { light2, dark1 },
      },
    },
  } = useTheme();

  return (
    <TagComponent
      {...rest}
      closeable={closeable}
      size={size}
      overrides={{
        ...(size === TagSize.small && {
          Root: {
            style: () => ({
              display: 'inline-flex',
              ...padding('0px', scale200),
              ...borderRadius(scale100),
              ...margin('0px', scale100, '0px', '0px'),
              ...border({
                ...border300,
                borderColor: light2,
              }),
              backgroundColor: '#F9FAFB', // NOTE: Value does not exist in theme
              cursor,
            }),
          },
          Text: {
            style: () => ({
              fontSize: scale500,
              lineHeight: scale700,
              fontWeight: 400,
              color: dark1,
            }),
          },
          Action: {
            style: () => ({
              marginLeft: scale100,
            }),
          },
          ActionIcon: {
            style: () => ({
              height: scale400,
              width: scale400,
              color: dark1,
            }),
          },
        }),
        ...(size === TagSize.large && {
          Root: {
            style: () => ({
              display: 'inline-flex',
              height: 'auto',
              ...padding(scale0, scale300),
              ...borderRadius(scale100),
              ...margin('0px', scale100, '0px', '0px'),
              ...border({
                ...border300,
                borderColor: light2,
              }),
              backgroundColor: '#F9FAFB', // NOTE: Value does not exist in theme
              cursor,
            }),
          },
          Text: {
            style: () => ({
              fontSize: scale550,
              lineHeight: scale700,
              fontWeight: 400,
              color: dark1,
            }),
          },
          Action: {
            style: () => ({
              marginLeft: scale100,
            }),
          },
          ActionIcon: {
            style: () => ({
              height: scale400,
              width: scale400,
              color: dark1,
            }),
          },
        }),
      }}
    >
      {value}
    </TagComponent>
  );
};
