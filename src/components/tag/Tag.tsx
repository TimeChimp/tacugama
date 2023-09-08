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
  color = customColors.dark5,
  fontColor = customColors.light4,
  height,
  width = 'auto',
  maxWidth = 'auto',
  overrides,
  ...rest
}: TagProps) => {
  const {
    theme: {
      current: {
        sizing: { scale0, scale100, scale200, scale550, scale600, scale750 },
        borders: { border300 },
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
              height: height ?? scale750,
              color: fontColor,
              ...(overrides?.Root?.style || {}),
            }),
          },
          Text: {
            component: ParagraphXSmall,
            style: () => ({
              color: fontColor,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              ...(overrides?.Text?.style || {}),
            }),
          },
          Action: {
            style: () => ({
              marginLeft: scale100,
              ...(overrides?.Action?.style || {}),
            }),
          },
          ActionIcon: {
            component: () => <ClearLineIcon size={scale550} />,
            style: overrides?.ActionIcon?.style,
          },
        }),
        ...(size === TagSize.large && {
          Root: {
            style: () => ({
              width,
              display: 'inline-flex',
              height: height ?? scale750,
              ...padding('0', scale200),
              ...borderRadius(scale0),
              ...margin('0px', scale100, '0px', '0px'),
              ...border({
                ...border300,
                borderColor: color,
              }),
              backgroundColor: color,
              color: fontColor,
              cursor,
              ...(overrides?.Root?.style || {}),
            }),
          },
          Text: {
            component: ParagraphSmall,
            style: () => ({
              color: fontColor,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              ...(overrides?.Text?.style || {}),
            }),
          },
          Action: {
            style: () => ({
              marginLeft: scale100,
              ...(overrides?.Action?.style || {}),
            }),
          },
          ActionIcon: {
            component: () => <ClearLineIcon size={scale600} />,
            style: overrides?.ActionIcon?.style,
          },
        }),
      }}
    >
      {value}
    </TagComponent>
  );
};
