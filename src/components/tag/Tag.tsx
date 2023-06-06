import React from 'react';
import { Tag as TagComponent } from 'baseui/tag';
import { useTheme } from '../../providers';
import { border, borderRadius, margin, padding } from '../../utils';
import { ParagraphSmall, ParagraphXSmall } from '../typography';
import { TagProps, TagSize } from './types';
import { customColors } from '../../theme/colors';
import { ClearLineIcon } from '../icons/clear-line';

export const Tag = ({
  value,
  size = TagSize.small,
  closeable = false,
  cursor = 'default',
  color = customColors.light7,
  width = 'auto',
  maxWidth = 'auto',
  ...rest
}: TagProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale100, scale200, scale550, scale600, scale750 },
        borders: { border300 },
        customColors: { light4 },
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
              width,
              maxWidth,
              display: 'inline-flex',
              ...padding('0px', scale200),
              ...borderRadius(scale0),
              ...margin('0px', scale100, '0px', '0px'),
              ...border({
                ...border300,
                borderColor: color,
              }),
              backgroundColor: color,
              cursor,
              height: scale750,
              color: light4,
            }),
          },
          Text: {
            component: ParagraphXSmall,
            style: () => ({
              color: light4,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }),
          },
          Action: {
            style: () => ({
              marginLeft: scale100,
            }),
          },
          ActionIcon: {
            component: () => <ClearLineIcon size={scale550} />,
          },
        }),
        ...(size === TagSize.large && {
          Root: {
            style: () => ({
              width,
              display: 'inline-flex',
              height: scale750,
              ...padding('0', scale200),
              ...borderRadius(scale0),
              ...margin('0px', scale100, '0px', '0px'),
              ...border({
                ...border300,
                borderColor: color,
              }),
              backgroundColor: color,
              color: light4,
              cursor,
            }),
          },
          Text: {
            component: ParagraphSmall,
            style: () => ({
              color: light4,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }),
          },
          Action: {
            style: () => ({
              marginLeft: scale100,
            }),
          },
          ActionIcon: {
            component: () => <ClearLineIcon size={scale600} />,
          },
        }),
      }}
    >
      {value}
    </TagComponent>
  );
};
