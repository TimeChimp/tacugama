import React, { ReactNode } from 'react';
import { Tag as TagComponent, TagProps as TagComponentProps } from 'baseui/tag';
import { useTheme } from '../../providers';
import { borderRadius, margin, padding } from '../../utils';

export enum TagSize {
  small = 'small',
  large = 'large',
}

export interface TagProps extends TagComponentProps {
  value?: string;
  children?: ReactNode;
  size?: TagSize;
  closeable?: boolean;
}

export const Tag = ({ value, size = TagSize.small, closeable = false, ...rest }: TagProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale100, scale200, scale300, scale400, scale500, scale550, scale700 },
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
              border: `1px solid ${light2}`,
              background: '#F9FAFB', // NOTE: Value does not exist in theme
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
              border: `1px solid ${light2}`,
              background: '#F9FAFB', // NOTE: Value does not exist in theme
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
              marginTop: scale0,
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
